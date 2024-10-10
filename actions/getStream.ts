"use server";

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

export async function getStream(channelArn: string) {
  const input = {
    channelArn,
  };
  const command = new GetStreamCommand(input);

  try {
    return await client.send(command);
  } catch (error) {
    if (error instanceof ChannelNotBroadcasting) {
      return null;
    }

    throw error;
  }
}
