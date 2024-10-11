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

export const revalidate = 60;

export async function GET() {
  const command = new GetStreamCommand({
    channelArn: "arn:aws:ivs:ap-northeast-1:269083170508:channel/g57VkI5uIIzn",
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
