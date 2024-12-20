import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import nukitashi1 from "@/public/nukitashi-1.png";
import nukitashi2 from "@/public/nukitashi-2.png";
import nukitashi3 from "@/public/nukitashi-3.png";
import nukitashi4 from "@/public/nukitashi-4.png";
import nukitashi5 from "@/public/nukitashi-5.png";
import nukitashi6 from "@/public/nukitashi-6.png";
import nukitashi7 from "@/public/nukitashi-7.png";
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
        <Link href={"/nukitashi-7"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi7} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                4:37:33
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/10/27 20:08
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし7日目（コメント付き）
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
        <Link href={"/nukitashi-6"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi6} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                4:38:20
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/10/20 19:09
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし6日目（コメント付き）
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
        <Link href={"/nukitashi-5"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi5} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                7:03:04
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

      <Card className="w-full max-w-3xl mx-auto">
        <Link href={"/nukitashi-3"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi3} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                1:14:49
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/10/06 23:45
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし3日目（コメント付き）
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
        <Link href={"/nukitashi-2"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi2} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2:46:53
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/09/23 20:21
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし2日目（コメント付き）
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
        <Link href={"/nukitashi-1"}>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={nukitashi1} alt="" />
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                5:48:30
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                2024/09/22 22:53
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2">
                    ぬきたし1日目（コメント付き）
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
