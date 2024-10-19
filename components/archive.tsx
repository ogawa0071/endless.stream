import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import nukitashi4 from "@/public/nukitashi-4.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <Card className="w-full max-w-3xl mx-auto">
        <Link href={"/nukitashi-5"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi4} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                7:12:39
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/10/19 19:25
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし5日目（コメント付き）
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
                    抜きゲーみたいな島に住んでる貧乳（わたし）はどうすりゃいいですか？
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>

      <Card className="w-full max-w-3xl mx-auto">
        <Link href={"/nukitashi-5-without-comment"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi4} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                7:12:39
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/10/19 19:25
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし5日目（コメントなし）
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
                    抜きゲーみたいな島に住んでる貧乳（わたし）はどうすりゃいいですか？
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>

      <Card className="w-full max-w-3xl mx-auto">
        <Link href={"/nukitashi-4"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi4} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2:39:40
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/10/12 20:29
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし4日目（コメント付き）
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
                    抜きゲーみたいな島に住んでる貧乳（わたし）はどうすりゃいいですか？
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
