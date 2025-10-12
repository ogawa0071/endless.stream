import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { archiveList } from "@/app/videos/archiveList";

export function Archive() {
  return (
    <div className="p-4 border-b md:border md:rounded-lg md:m-4">
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-bold">アーカイブ</h2>
        <VideoCard />
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="gap-4 flex flex-col">
      {archiveList.map((archive) => (
        <Card
          key={archive.id}
          className="w-full max-w-3xl mx-auto py-0 overflow-hidden"
        >
          <Link href={`/videos/${archive.id}`} className="no-underline">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={archive.thumbnailUrl} alt={archive.title} fill />
                </div>
                <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                  {archive.duration}
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                  {archive.date}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold line-clamp-2">
                      {archive.title}
                    </h2>
                    <div className="flex items-center mt-1 space-x-2">
                      <Avatar className="w-4 h-4">
                        <AvatarImage src="/oechan.png" alt="oechan" />
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm">oechan</span>
                          <BadgeCheck
                            className="w-4 h-4"
                            fill="#9146ff"
                            color="#ffffff"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
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
