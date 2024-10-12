"use client";

import { Button } from "@/components/ui/button";
import {
  AudioTrack,
  LiveKitRoom,
  RoomAudioRenderer,
  StartAudio,
  useTracks,
  VideoTrack,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";

function CityVideoRenderer() {
  const trackRefs = useTracks([Track.Source.Camera]);
  const tokyoCamTrackRef = trackRefs.find(
    (trackRef) => trackRef.participant.name === "test"
  );

  return (
    <>
      {tokyoCamTrackRef ? (
        <>
          <VideoTrack trackRef={tokyoCamTrackRef} />
          <AudioTrack trackRef={tokyoCamTrackRef} muted={false} volume={1} />
          <RoomAudioRenderer />
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
  const room = "quickstart-room";
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
    <div>
      {start === false && (
        <div className="w-full aspect-video bg-gray-800 flex items-center justify-center flex-col">
          <div className="text-white text-2xl">配信していません</div>
          <div>
            <Button variant="secondary" onClick={() => setStart(true)}>
              配信を見る（配信されていない状態でクリックしても意味ありません）
            </Button>
          </div>
        </div>
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
        </LiveKitRoom>
      )}
    </div>
  );
}
