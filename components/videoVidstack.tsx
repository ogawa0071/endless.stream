"use client";

import { useIsClient } from "@uidotdev/usehooks";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/plyr/theme.css";

export function Video({ src }: { src: string }) {
  const isClient = useIsClient();

  return (
    isClient && (
      <MediaPlayer
        src={src}
        viewType="video"
        streamType="on-demand"
        playsInline
        storage={src}
        style={{
          "--plyr-border-radius": "0",
        }}
      >
        <MediaProvider></MediaProvider>
        <PlyrLayout icons={plyrLayoutIcons} />
      </MediaPlayer>
    )
  );
}
