import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Send } from "lucide-react";

export function Chat() {
  return (
    <div className="md:w-1/4 md:border-l flex flex-col h-[50vh] md:h-auto">
      <ScrollArea className="flex-1">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">チャット</h3>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback>{`U${i + 1}`}</AvatarFallback>
                </Avatar>
                <span className="font-medium">ユーザー{i + 1}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                これはコメント{i + 1}
                です。配信についての感想や質問が表示されます。
              </p>
              <Separator className="mt-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            placeholder="メッセージを入力..."
            className="flex-1"
            aria-label="メッセージを入力"
          />
          <Button size="icon" aria-label="メッセージを送信">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
