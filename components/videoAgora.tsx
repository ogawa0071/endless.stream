"use client";

import AgoraUIKit from "agora-react-uikit";

export function Video() {
  const rtcProps = {
    appId: "a24de66fcb754f39b5b3aadc06876c34",
    channel: "test",
    token:
      "007eJxTYLDlLq4wX8vfy7vtd3f1lPIZsd975auNM8T1eveIKHjy71BgSDQySUk1M0tLTjI3NUkztkwyTTJOTExJNjCzMDdLNja57caV3hDIyMAQGs/EyACBID43Q0lqcYluck5mal4JAwMASNMezQ==",
  };

  return <AgoraUIKit rtcProps={rtcProps} />;
}
