
import { NextRequest } from "next/server";
import { BigQuery } from "@google-cloud/bigquery";

export const GET = async (request: NextRequest): Promise<Response> => {
  // Load credentials from environment variable
  const credentials = process.env.GOOGLE_CREDENTIALS ? JSON.parse(process.env.GOOGLE_CREDENTIALS) : undefined;
  const bigQueryClient = new BigQuery({
    credentials,
    projectId: credentials?.project_id,
  });

  const query = `SELECT SUM(requestCount) AS requests, SUM(totalRequestLength) AS bytesIn, SUM(totalResponseLength) AS bytesOut FROM proxyAnalytics.combinedStats`;

  const [statsJob] = await bigQueryClient.createQueryJob({
    query,
    location: "US"
  });

  const [[stats]] = await statsJob.getQueryResults();

  return Response.json({stats}, {status: 200});
}