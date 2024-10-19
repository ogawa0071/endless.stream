import { Archive } from "@/components/archive";
import { Chat } from "@/components/chatKick";
import { ClientOnly } from "@/components/clientOnly";
import { Header } from "@/components/header";
import { Video } from "@/components/videoLiveKit";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <ClientOnly>
            <Video />
          </ClientOnly>
          <Archive />
        </div>
        <ClientOnly>
          <Chat />
        </ClientOnly>
      </div>
    </div>
  );
}
