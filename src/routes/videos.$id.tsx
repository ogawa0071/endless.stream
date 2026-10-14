import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { VideoMetadata } from "@/components/videoMetadataNoServer";
import { Video } from "@/components/videoVidstack";
import { archiveList } from "@/lib/archiveList";
import { SITE_TITLE, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/videos/$id")({
  loader: ({ params }) => {
    const archive = archiveList.find((a) => a.id === params.id);
    if (!archive) throw notFound(); // -> HTTP 404 on SSR
    // Loader data is serialized to the client: return plain fields only
    // (`description` is JSX and would fail with SerovalUnsupportedTypeError).
    return { title: archive.title, thumbnailUrl: archive.thumbnailUrl };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}; // head() also runs for the notFound match
    const title = `${loaderData.title} - ${SITE_TITLE}`;
    const image = `${SITE_URL}${loaderData.thumbnailUrl}`;
    return {
      meta: [
        { title },
        { property: "og:title", content: title },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1280" },
        { property: "og:image:height", content: "720" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:image", content: image },
        { name: "twitter:image:width", content: "1280" },
        { name: "twitter:image:height", content: "720" },
      ],
    };
  },
  component: VideoPage,
});

function VideoPage() {
  const { id } = Route.useParams();
  // the loader already guaranteed the id exists
  const archive = archiveList.find((a) => a.id === id)!;

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
