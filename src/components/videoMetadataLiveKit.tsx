import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRoomContext } from "@livekit/components-react";
import { BadgeCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function VideoMetadata() {
  const room = useRoomContext();
  const [numParticipants, setNumParticipants] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumParticipants(room.numParticipants);
    }, 1000);

    return () => clearInterval(interval);
  }, [room]);

  return (
    <div className="border-b p-4 md:m-4 md:rounded-lg md:border">
      <div className="flex flex-row justify-between md:items-center">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/oechan.png" alt="oechan" />
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">oechan</h2>
              <BadgeCheck className="h-6 w-6" fill="#9146ff" color="#ffffff" />
              {room.canPlaybackVideo === true ? (
                <Badge variant="destructive">LIVE</Badge>
              ) : (
                <Badge variant="default">OFFLINE</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-4 md:mt-0">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium tabular-nums">
              {numParticipants}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        ※18歳未満の方の視聴は禁止です。
        <br />
        <br />
        ゲームタイトル: 『LingerieS / ランジェリーズ』
        <br />
        <br />
        公式サイト:{" "}
        <a
          href="https://store.steampowered.com/app/2890890/LingerieS/"
          target="_blank"
          className="underline"
        >
          https://store.steampowered.com/app/2890890/LingerieS/
        </a>
        <br />
        Twitter:{" "}
        <a
          href="https://x.com/inforamunegames"
          target="_blank"
          className="underline"
        >
          https://x.com/inforamunegames
        </a>
      </div>
    </div>
  );
}
