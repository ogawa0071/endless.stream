"use client";

import "@vidstack/react/player/styles/default/theme.css";
// Import order
import "@vidstack/react/player/styles/default/layouts/video.css";

import { useIsClient } from "@uidotdev/usehooks";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export function Video({
  src,
  thumbnails,
}: {
  src: string;
  thumbnails: string;
}) {
  const isClient = useIsClient();

  return (
    isClient && (
      <MediaPlayer
        src={src}
        viewType="video"
        streamType="on-demand"
        crossOrigin
        playsInline
        storage={src}
        style={{
          "--video-border-radius": "0",
          "--video-border": "none",
        }}
      >
        <MediaProvider></MediaProvider>
        <DefaultVideoLayout
          icons={defaultLayoutIcons}
          thumbnails={thumbnails}
        />
      </MediaPlayer>
    )
  );
}
