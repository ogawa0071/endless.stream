import "@vidstack/react/player/styles/default/theme.css";
// Import order
import "@vidstack/react/player/styles/default/layouts/video.css";

import { ClientOnly } from "@tanstack/react-router";
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
  // <ClientOnly> (not useIsClient): Start's compiler strips its children from the
  // server bundle, so vidstack is never imported in workerd.
  return (
    <ClientOnly>
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
    </ClientOnly>
  );
}
