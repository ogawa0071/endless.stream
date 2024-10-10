"use client";

import { useEffect } from "react";

export function Video() {
  useEffect(() => {
    const DEFAULT_STREAM =
      "https://030c7467f99a.ap-northeast-1.playback.live-video.net/api/video/v1/ap-northeast-1.269083170508.channel.g57VkI5uIIzn.m3u8";

    // Set up IVS playback tech and quality plugin
    // @ts-expect-error: error
    registerIVSTech(videojs);
    // @ts-expect-error: error
    registerIVSQualityPlugin(videojs);

    // Initialize video.js player
    // @ts-expect-error: error
    const videoJSPlayer = videojs("amazon-ivs-videojs", {
      techOrder: ["AmazonIVS"],
      controlBar: {
        playToggle: {
          replay: false,
        }, // Hides the replay button for VOD
        pictureInPictureToggle: false, // Hides the PiP button
      },
    });

    // Use the player API once the player instance's ready callback is fired
    const readyCallback = function () {
      // This executes after video.js is initialized and ready
      // @ts-expect-error: error
      window.videoJSPlayer = videoJSPlayer;

      // Get reference to Amazon IVS player
      const ivsPlayer = videoJSPlayer.getIVSPlayer();

      // Show the "big play" button when the stream is paused
      const videoContainerEl = document.querySelector("#amazon-ivs-videojs");
      // @ts-expect-error: error
      videoContainerEl.addEventListener("click", () => {
        if (videoJSPlayer.paused()) {
          // @ts-expect-error: error
          videoContainerEl.classList.remove("vjs-has-started");
        } else {
          // @ts-expect-error: error
          videoContainerEl.classList.add("vjs-has-started");
        }
      });

      // Logs low latency setting and latency value 5s after playback starts
      const PlayerState = videoJSPlayer.getIVSEvents().PlayerState;
      ivsPlayer.addEventListener(PlayerState.PLAYING, () => {
        console.log("Player State - PLAYING");
        setTimeout(() => {
          console.log(
            `This stream is ${
              ivsPlayer.isLiveLowLatency() ? "" : "not "
            }playing in ultra low latency mode`
          );
          console.log(`Stream Latency: ${ivsPlayer.getLiveLatency()}s`);
        }, 5000);
      });

      // Log errors
      const PlayerEventType = videoJSPlayer.getIVSEvents().PlayerEventType;
      // @ts-expect-error: error
      ivsPlayer.addEventListener(PlayerEventType.ERROR, (type, source) => {
        console.warn("Player Event - ERROR: ", type, source);
      });

      // Log and display timed metadata
      // @ts-expect-error: error
      ivsPlayer.addEventListener(PlayerEventType.TEXT_METADATA_CUE, (cue) => {
        const metadataText = cue.text;
        const position = ivsPlayer.getPosition().toFixed(2);
        console.log(
          `Player Event - TEXT_METADATA_CUE: "${metadataText}". Observed ${position}s after playback started.`
        );
      });

      // Enables manual quality selection plugin
      videoJSPlayer.enableIVSQualityPlugin();

      // Set volume and play default stream
      videoJSPlayer.volume(0);
      videoJSPlayer.src(DEFAULT_STREAM);
    };

    // Register ready callback
    videoJSPlayer.ready(readyCallback);
  }, []);

  return (
    <div className="video-container">
      <video
        id="amazon-ivs-videojs"
        className="video-js vjs-4-3 vjs-big-play-centered"
        controls
        autoPlay
        playsInline
      ></video>
    </div>
  );
}
