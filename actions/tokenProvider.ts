"use server";

import { CreateChatTokenCommand, IvschatClient } from "@aws-sdk/client-ivschat";
import { fromEnv } from "@aws-sdk/credential-providers";

const client = new IvschatClient({
  credentials: fromEnv(),
  region: "ap-northeast-1",
});

export async function tokenProvider(roomIdentifier: string, userId: string) {
  if (userId.length > 10) {
    throw new Error("userId must be less than 10 characters");
  }

  const command = new CreateChatTokenCommand({
    roomIdentifier,
    userId,
    capabilities: ["SEND_MESSAGE"],
  });
  const response = await client.send(command);

  if (response.token === undefined) {
    throw new Error("Token is undefined");
  }

  return {
    token: response.token,
    tokenExpirationTime: response.tokenExpirationTime,
    sessionExpirationTime: response.sessionExpirationTime,
  };
}
