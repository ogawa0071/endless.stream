import { Header } from "@/components/header";
import { Video } from "@/components/videoEmbedHls";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BadgeCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Video src="https://r2.endless.stream/nukitashi-1/output.m3u8" />
          <VideoMetadata />
        </div>
      </div>
    </div>
  );
}

function VideoMetadata() {
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
            </div>
          </div>
        </div>
      </div>
      <div className="pl-16">
        ※18歳未満の方の視聴は禁止です。
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