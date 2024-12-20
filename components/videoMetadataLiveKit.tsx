"use client";

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
    <div className="p-4 border-b md:border md:rounded-lg md:m-4">
      <div className="flex flex-row md:items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/oechan.png" alt="oechan" />
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">oechan</h2>
              <BadgeCheck className="w-6 h-6" fill="#9146ff" color="#ffffff" />
              {room.canPlaybackVideo === true ? (
                <Badge variant="destructive">LIVE</Badge>
              ) : (
                <Badge variant="default">OFFLINE</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
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
        ミラー配信先（満員時はこちらで視聴可能）:{" "}
        <a href="/nukitashi-7" target="_blank" className="underline">
          遅延ありエンスト
        </a>
        <br />
        ミラー配信先（満員時はこちらで視聴可能）:{" "}
        <a
          href="https://housoshitu.live/"
          target="_blank"
          className="underline"
        >
          Open放送室
        </a>
        <br />
        ミラー配信先（満員時はこちらで視聴可能）:{" "}
        <a
          href="https://twitcasting.tv/mosaic_mirror/"
          target="_blank"
          className="underline"
        >
          おえちゃんモザイクミラー
        </a>
        <br />
        <br />
        ゲームタイトル:
        『抜きゲーみたいな島に住んでる貧乳（わたし）はどうすりゃいいですか？』
        <br />
        <br />
        公式サイト:{" "}
        <a
          href="https://qruppo.com/products/nukitashi/"
          target="_blank"
          className="underline"
        >
          https://qruppo.com/products/nukitashi/
        </a>
        <br />
        Twitter:{" "}
        <a href="https://x.com/qruppo" target="_blank" className="underline">
          https://x.com/qruppo
        </a>
      </div>
    </div>
  );
}
