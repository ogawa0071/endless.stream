import {
  ChannelNotBroadcasting,
  GetStreamCommand,
  IvsClient,
} from "@aws-sdk/client-ivs";
import { fromEnv } from "@aws-sdk/credential-providers";

const client = new IvsClient({
  credentials: fromEnv(),
  region: "ap-northeast-1",
});

export const revalidate = 10;

export async function GET() {
  const command = new GetStreamCommand({
    channelArn: process.env.NEXT_PUBLIC_CHANNEL_ID,
  });

  try {
    const response = await client.send(command);

    return Response.json(response);
  } catch (error) {
    if (error instanceof ChannelNotBroadcasting) {
      return Response.json(error);
    }

    throw error;
  }
}
