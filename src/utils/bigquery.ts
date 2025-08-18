
import { SignJWT, importPKCS8 } from 'jose';

// Types for BigQuery API response
type BigQueryField = {
  name: string;
  type: string;
  mode?: string;
};

type BigQuerySchema = {
  fields: BigQueryField[];
};

type BigQueryCell = {
  v: string | number | null;
};

type BigQueryRow = {
  f: BigQueryCell[];
};

type BigQueryApiResponse = {
  schema?: BigQuerySchema;
  rows?: BigQueryRow[];
  error?: unknown;
  [key: string]: unknown;
};

type BigQueryRows = Record<string, unknown>[];

const parseBigQueryRows = (apiResponse: BigQueryApiResponse): BigQueryRows => {
  if (!apiResponse) {
    throw new Error('BigQuery API response is undefined or null');
  }
  if (apiResponse.error) {
    throw new Error(`BigQuery API error: ${JSON.stringify(apiResponse.error)}`);
  }
  if (!apiResponse.schema || !apiResponse.schema.fields) {
    throw new Error('BigQuery API response missing schema or fields');
  }
  if (!apiResponse.rows) {
    // No rows is not an error, just return empty array
    return [];
  }
  const fields = apiResponse.schema.fields.map((f) => f.name);
  return apiResponse.rows.map((row) => {
    const obj: Record<string, unknown> = {};
    row.f.forEach((cell, idx) => {
      const val = cell.v;
      obj[fields[idx]] = val !== null && !isNaN(Number(val)) ? Number(val) : val;
    });
    return obj;
  });
};

export const makeBigQueryRequest = async (query: string): Promise<BigQueryRows> => {
  const credentials = process.env.GOOGLE_CREDENTIALS ? JSON.parse(process.env.GOOGLE_CREDENTIALS) : undefined;
  if (!credentials) {
    throw new Error('Missing GOOGLE_CREDENTIALS environment variable');
  }

  // Make JWT using jose
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/bigquery',
    aud: 'https://oauth2.googleapis.com/token',
    exp,
    iat,
  };

  let jwt;
  try {
    const alg = 'RS256';
    const pkcs8 = credentials.private_key;
    const key = await importPKCS8(pkcs8, alg);
    jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg, typ: 'JWT' })
      .setIssuedAt(iat)
      .setExpirationTime(exp)
      .sign(key);
  } catch (e) {
    throw new Error(`JWT signing failed: ${e}`);
  }

  // Exchange it for an access token
  let tokenData;
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });
    tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      throw new Error(tokenData.error_description || 'No access token returned');
    }
  } catch (e) {
    throw new Error(`Failed to get access token: ${e}`);
  }

  // Make the BigQuery request
  let data;
  try {
    const response = await fetch(`https://bigquery.googleapis.com/bigquery/v2/projects/${credentials.project_id}/queries`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        useLegacySql: false,
      }),
    });
    data = await response.json();
    if (!response.ok) {
      throw new Error(`BigQuery API error: ${JSON.stringify(data)}`);
    }
  } catch (e) {
    throw new Error(`BigQuery request failed: ${e}`);
  }

  return parseBigQueryRows(data);
};