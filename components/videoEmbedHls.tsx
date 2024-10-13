import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Video({ src }: { src: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={`https://www.hlsplayer.net/embed?type=m3u8&src=${src}`}
        className="w-full h-full"
        allow="fullscreen; picture-in-picture"
      />
    </AspectRatio>
  );
}
