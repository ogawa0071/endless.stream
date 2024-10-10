import { tokenProvider } from "@/actions/tokenProvider";
import { ChatRoom, ConnectionState } from "amazon-ivs-chat-messaging";
import { useEffect, useState } from "react";

export const useChatRoom = (userId: string) => {
  const [room, setRoom] = useState<ChatRoom>();
  const [state, setState] = useState<ConnectionState>("disconnected");

  useEffect(() => {
    const room = new ChatRoom({
      regionOrUrl: "ap-northeast-1",
      tokenProvider: () =>
        tokenProvider(
          "arn:aws:ivschat:ap-northeast-1:269083170508:room/TRUvr5gJp3cv",
          userId
        ),
    });
    setRoom(room);

    const unsubscribeOnConnecting = room.addListener("connecting", () => {
      setState("connecting");
    });

    const unsubscribeOnConnected = room.addListener("connect", () => {
      setState("connected");
    });

    const unsubscribeOnDisconnected = room.addListener("disconnect", () => {
      setState("disconnected");
    });

    room.connect();

    return () => {
      room.disconnect();
      unsubscribeOnConnecting();
      unsubscribeOnConnected();
      unsubscribeOnDisconnected();
    };
  }, [userId]);

  return { room, state };
};
