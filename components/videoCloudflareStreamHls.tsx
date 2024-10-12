"use client";

import { Stream } from "@cloudflare/stream-react";

export function Video() {
  // return (
  //   <div style={{ position: "relative", paddingTop: "56.25%" }}>
  //     <iframe
  //       src="https://customer-guvvnb7dlcxd6ybj.cloudflarestream.com/ae68b657742b1cd6f8deff066a716760/iframe"
  //       style={{
  //         border: "none",
  //         position: "absolute",
  //         top: 0,
  //         left: 0,
  //         height: "100%",
  //         width: "100%",
  //       }}
  //       allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
  //       allowFullScreen
  //     />
  //   </div>
  // );

  const videoIdOrSignedToken = "ae68b657742b1cd6f8deff066a716760";

  return (
    <div>
      <Stream controls src={videoIdOrSignedToken} />
    </div>
  );
}
