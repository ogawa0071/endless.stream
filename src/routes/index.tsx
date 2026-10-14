import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "@/components/archive";
import { Header } from "@/components/header";
import { VideoEmpty } from "@/components/videoEmpty";
// import { ClientOnly } from "@tanstack/react-router";
// import { Chat } from "@/components/chatKick";
// import { Video } from "@/components/videoLiveKit";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          {/* <ClientOnly> */}
          {/* <Video /> */}
          {/* </ClientOnly> */}
          <VideoEmpty />
          <Archive />
        </div>
        {/* <ClientOnly> */}
        {/* <Chat /> */}
        {/* </ClientOnly> */}
      </div>
    </div>
  );
}
