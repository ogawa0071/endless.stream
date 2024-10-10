import { Chat } from "@/components/chat";
import { Header } from "@/components/header";
import { Video } from "@/components/video";
import { VideoMetadata } from "@/components/videoMetadata";

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Video />
          <VideoMetadata />
        </div>
        <Chat />
      </div>
    </div>
  );
}
