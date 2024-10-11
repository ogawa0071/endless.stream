"use client";

import { LiveKitRoom, useTracks, VideoTrack } from "@livekit/components-react";
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
        <VideoTrack trackRef={tokyoCamTrackRef} />
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

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`/api/get-participant-token?room=${room}`);
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <div>
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      >
        <CityVideoRenderer />
      </LiveKitRoom>
    </div>
  );
}
