import { makeBigQueryRequest } from "@/utils/bigquery";
import * as errors from "@/utils/errors";

export const runtime = "edge";

export const GET = async (): Promise<Response> => {
  const statsQuery = `
    SELECT
      SUM(requestCount) AS requests,
      SUM(totalRequestLength) AS bytesIn,
      SUM(totalResponseLength) AS bytesOut
    FROM proxyAnalytics.combinedStats
  `;

  try {
    const [stats] = await makeBigQueryRequest(statsQuery);
    return Response.json(stats, {status: 200});
  } catch (error) {
    return errors.internal(error);
  }
}
