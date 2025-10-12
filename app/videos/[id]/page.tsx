import { Header } from "@/components/header";
import { Video } from "@/components/videoVidstack";
import { Metadata } from "next";
import { archiveList } from "../archiveList";
import { notFound } from "next/navigation";
import { VideoMetadata } from "@/components/videoMetadataNoServer";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  const archive = archiveList.find((archive) => archive.id === id);

  if (!archive) {
    return {};
  }

  return {
    title: `${archive.title} - Endless Stream（エンスト）`,
    openGraph: {
      images: archive.thumbnailUrl,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).id;

  const archive = archiveList.find((archive) => archive.id === id);

  if (!archive) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Video src={archive.videoUrl} thumbnails={archive.storyboardUrl} />
          <VideoMetadata />
          <VideoArchiveMetadata archive={archive} />
        </div>
      </div>
    </div>
  );
}

function VideoArchiveMetadata({
  archive,
}: {
  archive: (typeof archiveList)[number];
}) {
  return (
    <div className="p-4 border-b md:border md:rounded-lg md:m-4 flex flex-col gap-2">
      <div className="text-lg font-bold">{archive.title}</div>
      <div>配信日時: {archive.date}</div>
      <div>ゲーム名: {archive.gameName}</div>
      <div className="mt-4">{archive.description}</div>
    </div>
  );
}
