"use client";

import { getStream } from "@/actions/getStream";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { intervalToDuration } from "date-fns";
import { BadgeCheck, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";

function convertTime(seconds: number) {
  const start = new Date(0); // エポック
  const end = new Date(seconds * 1000); // 秒数をミリ秒に変換

  const duration = intervalToDuration({ start, end });

  return `${duration.hours?.toString().padStart(2, "0") ?? "00"}:${
    duration.minutes?.toString().padStart(2, "0") ?? "00"
  }:${duration.seconds?.toString().padStart(2, "0") ?? "00"}`;
}

export function VideoMetadata() {
  const { data } = useQuery({
    queryKey: ["getStream"],
    queryFn: () =>
      getStream("arn:aws:ivs:ap-northeast-1:269083170508:channel/g57VkI5uIIzn"),
    refetchInterval: 10000,
  });

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = data?.stream?.startTime;
      const currentTime = Math.floor(
        (Date.now() - (startTime?.getTime() ?? 0)) / 1000
      );
      const convertedCurrentTime = convertTime(currentTime);
      setCurrentTime(convertedCurrentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [setCurrentTime, data]);

  return (
    <div className="p-4 border-b md:border md:rounded-lg md:m-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/oechan.png" alt="oechan" />
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">oechan</h2>
              <BadgeCheck className="w-6 h-6" fill="#9146ff" color="#ffffff" />
              {data?.stream?.state === "LIVE" ? (
                <Badge variant="destructive">LIVE</Badge>
              ) : (
                <Badge variant="default">OFFLINE</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          {data?.stream?.viewerCount !== undefined && (
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">
                {data?.stream?.viewerCount}
              </span>
            </div>
          )}
          {data?.stream?.startTime !== undefined && (
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{currentTime}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
