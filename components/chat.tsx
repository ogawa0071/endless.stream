"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useChatRoom } from "@/hooks/useChatRoom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ChatMessage } from "amazon-ivs-chat-messaging";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";

export function Chat() {
  const [userId, setUserId] = useLocalStorage("userId", "匿名");
  const [userIdInput, setUserIdInput] = useState(
    userId === "匿名" ? "" : userId
  );
  const { room } = useChatRoom(userId);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleMessages = async () => {
    if (room) {
      await room.sendMessage({
        content: inputMessage,
        action: "SEND_MESSAGE",
        requestId: crypto.randomUUID(),
      });

      setInputMessage("");
    }
  };

  useEffect(() => {
    if (room) {
      const unsubscribeOnMessageReceived = room.addListener(
        "message",
        (message) => {
          setMessages((msgs) => [...msgs, message]);
        }
      );

      return () => {
        unsubscribeOnMessageReceived();
      };
    }
  }, [room]);

  return (
    <div className="md:w-1/4 md:border-l flex flex-col h-[50vh] md:h-auto">
      <ScrollArea className="flex-1">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">チャット</h3>
          {messages.map((message) => (
            <div key={message.id} className="mb-2">
              <div className="flex flex-wrap items-center space-x-2 break-all">
                <span className="font-medium text-sm text-blue-500">
                  {message.sender.userId}:
                </span>
                <p className="text-sm">{message.content}</p>
              </div>
              <Separator className="mt-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="ユーザー名"
            className="flex-1"
            onChange={(e) => setUserIdInput(e.target.value)}
            value={userIdInput}
          />
          <Button
            disabled={userIdInput.length > 10}
            onClick={() => {
              setUserId(userIdInput ? userIdInput : "匿名");
            }}
          >
            保存
          </Button>
        </div>
        {userIdInput.length > 10 && (
          <div>
            <p className="text-red-500 text-sm">10文字以内で入力してください</p>
          </div>
        )}
        <div className="flex space-x-2">
          <Input
            placeholder="メッセージを入力..."
            className="flex-1"
            aria-label="メッセージを入力"
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                handleMessages();
              }
            }}
          />
          <Button
            size="icon"
            aria-label="メッセージを送信"
            onClick={handleMessages}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
