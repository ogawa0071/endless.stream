import {
  ChannelNotBroadcasting,
  GetStreamCommand,
  IvsClient,
} from "@aws-sdk/client-ivs";
import { fromEnv } from "@aws-sdk/credential-providers";
import { type NextRequest } from "next/server";

const client = new IvsClient({
  credentials: fromEnv(),
  region: "ap-northeast-1",
});

export const revalidate = 60000;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("channelArn") ?? "";

  const command = new GetStreamCommand({
    channelArn: query,
  });

  try {
    return Response.json(await client.send(command));
  } catch (error) {
    if (error instanceof ChannelNotBroadcasting) {
      return Response.json(error);
    }

    throw error;
  }
}
