"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  AudioTrack,
  LiveKitRoom,
  StartAudio,
  useTracks,
  VideoTrack,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { Volume2, VolumeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { VideoMetadata } from "./videoMetadataLiveKit";
import { VideoMetadata as VideoMetadataNoServer } from "./videoMetadataNoServer";

function CityVideoRenderer() {
  const trackRefs = useTracks([Track.Source.Camera]);
  const trackAudioRefs = useTracks([Track.Source.Microphone]);
  const tokyoCamTrackRef = trackRefs.find(
    (trackRef) => trackRef.participant.name === "obs"
  );
  const tokyoAudioTrackRef = trackAudioRefs.find(
    (trackRef) => trackRef.participant.name === "obs"
  );

  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  return (
    <>
      {tokyoCamTrackRef && tokyoAudioTrackRef ? (
        <>
          <VideoTrack trackRef={tokyoCamTrackRef} controls />
          <AudioTrack
            trackRef={tokyoAudioTrackRef}
            muted={muted}
            volume={volume}
          />

          <div className="mt-4 items-center gap-4 px-4 hidden md:flex">
            <Button variant="ghost" onClick={() => setMuted((prev) => !prev)}>
              {muted ? (
                <VolumeOff className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>
            <Slider
              className="w-full"
              value={[volume]}
              max={1}
              step={0.05}
              onValueChange={([value]) => setVolume(value)}
            />
            <span className="text-sm">{Math.round(volume * 100)}%</span>
          </div>

          <StartAudio label="ここをクリックすると音が出ます" />
        </>
      ) : (
        <div className="w-full aspect-video bg-gray-800 flex items-center justify-center">
          <span className="text-white text-2xl">配信していません</span>
        </div>
      )}
    </>
  );
}

export function Video() {
  // TODO: get user input for room and name
  const room = "my-first-room";
  const [token, setToken] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    (async () => {
      if (start) {
        try {
          const resp = await fetch(`/api/get-participant-token?room=${room}`);
          const data = await resp.json();
          setToken(data.token);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [start]);

  return (
    <>
      {start === false && (
        <>
          <div className="w-full aspect-video bg-gray-800 flex items-center justify-center flex-col gap-4">
            <div>
              <Button variant="secondary" onClick={() => setStart(true)}>
                配信を見る（18歳以上であることに同意します）
              </Button>
            </div>
            <div className="text-white text-xs text-center leading-6">
              上記ボタンは配信されていない状態でクリックしても意味ありません。
              <br />
              ※ボタンをクリックしたあと、放送開始すると
              <span className="font-bold underline">
                リロードせずとも再生開始
              </span>
              されます。
            </div>
          </div>
          <VideoMetadataNoServer />
        </>
      )}
      {start === true && token === "" && (
        <div className="w-full aspect-video bg-gray-800 flex items-center justify-center flex-col">
          <div className="text-white text-2xl">配信していません</div>
          <div>データを取得中...</div>
        </div>
      )}
      {start === true && token !== "" && (
        <LiveKitRoom
          token={token}
          serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        >
          <CityVideoRenderer />
          <VideoMetadata />
        </LiveKitRoom>
      )}
    </>
  );
}
