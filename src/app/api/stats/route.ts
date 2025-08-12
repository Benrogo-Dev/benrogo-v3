import { NextRequest } from "next/server";
import { BigQuery } from "@google-cloud/bigquery";

//export const runtime = "edge";

export const GET = async (request: NextRequest): Promise<Response> => {
  const bigQueryClient = new BigQuery({
    keyFile: "./credentials.json"
  });

  return Response.json({test: 123}, {status: 200});
}