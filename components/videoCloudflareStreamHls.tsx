"use client";

import { Stream } from "@cloudflare/stream-react";

export function Video({ src }: { src: string }) {
  return (
    <div>
      <Stream controls src={src} />
    </div>
  );
}
