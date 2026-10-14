import { VideoMetadata as VideoMetadataNoServer } from "./videoMetadataNoServer";

export function VideoEmpty() {
  return (
    <>
      <div className="w-full aspect-video bg-gray-800 flex items-center justify-center flex-col gap-4 max-h-[70%]">
        <div className="text-white text-2xl font-bold">
          ライブ配信は終了しました
        </div>
        <div className="text-white text-xs text-center leading-6 font-bold">
          アーカイブは以下からご覧いただけます。
          <br />
          現在、次回の放送予定はありません。
        </div>
      </div>
      <VideoMetadataNoServer />
    </>
  );
}
