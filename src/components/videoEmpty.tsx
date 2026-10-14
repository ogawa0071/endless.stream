import { VideoMetadata as VideoMetadataNoServer } from "./videoMetadataNoServer";

export function VideoEmpty() {
  return (
    <>
      <div className="flex aspect-video max-h-[70%] w-full flex-col items-center justify-center gap-4 bg-gray-800">
        <div className="text-2xl font-bold text-white">
          ライブ配信は終了しました
        </div>
        <div className="text-center text-xs leading-6 font-bold text-white">
          アーカイブは以下からご覧いただけます。
          <br />
          現在、次回の放送予定はありません。
        </div>
      </div>
      <VideoMetadataNoServer />
    </>
  );
}
