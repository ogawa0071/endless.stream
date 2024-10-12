import { Chat } from "@/components/chatKick";
import { ClientOnly } from "@/components/clientOnly";
import { Header } from "@/components/header";
import { Video } from "@/components/videoAgora";
import { VideoMetadata } from "@/components/videoMetadataNoServer";

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <ClientOnly>
            <Video />
          </ClientOnly>
          <VideoMetadata />
        </div>
        <ClientOnly>
          <Chat />
        </ClientOnly>
      </div>
    </div>
  );
}
