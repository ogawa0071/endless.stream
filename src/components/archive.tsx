import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DateTime, Duration } from "@/components/time";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { archiveList } from "@/lib/archiveList";

export function Archive() {
  return (
    <div className="border-b p-4 md:m-4 md:rounded-lg md:border">
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-bold">アーカイブ</h2>
        <VideoCard />
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="flex flex-col gap-4">
      {archiveList.map((archive) => (
        <Card
          key={archive.id}
          className="mx-auto w-full max-w-3xl overflow-hidden py-0"
        >
          <Link
            to="/videos/$id"
            params={{ id: archive.id }}
            className="no-underline"
          >
            <CardContent className="p-0">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={archive.thumbnailUrl}
                    alt={archive.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="bg-opacity-60 absolute top-2 left-2 rounded bg-black px-2 py-1 text-sm text-white">
                  <Duration value={archive.duration} />
                </div>
                <div className="bg-opacity-60 absolute right-2 bottom-2 rounded bg-black px-2 py-1 text-sm text-white">
                  <DateTime value={archive.date} />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="line-clamp-2 text-lg font-semibold">
                      {archive.title}
                    </h2>
                    <div className="mt-1 flex items-center space-x-2">
                      <Avatar className="h-4 w-4">
                        <AvatarImage src="/oechan.png" alt="oechan" />
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm">oechan</span>
                          <BadgeCheck
                            className="h-4 w-4"
                            fill="#9146ff"
                            color="#ffffff"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {archive.gameName}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
