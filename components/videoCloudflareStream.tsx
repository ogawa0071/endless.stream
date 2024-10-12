"use client";

import { WebRTCPlayer } from "@eyevinn/webrtc-player";
import { useEffect, useRef } from "react";

export function Video() {
  const video = useRef(null);

  useEffect(() => {
    (async () => {
      if (video.current) {
        const player = new WebRTCPlayer({
          video: video.current,
          type: "whep",
          statsTypeFilter: "^candidate-*|^inbound-rtp",
        });

        await player.load(
          new URL(
            "https://customer-guvvnb7dlcxd6ybj.cloudflarestream.com/377fae86dde3ec87c69fdfd1cb592037/webRTC/play"
          )
        );

        player.mute();

        player.on("no-media", () => {
          console.log("media timeout occured");
        });

        player.on("media-recovered", () => {
          console.log("media recovered");
        });

        // Subscribe for RTC stats: `stats:${RTCStatsType}`
        player.on("stats:inbound-rtp", (report) => {
          if (report.kind === "video") {
            // console.log(report);
          }
        });
      }
    })();
  }, []);

  return <video muted autoPlay playsInline controls ref={video} />;
}
