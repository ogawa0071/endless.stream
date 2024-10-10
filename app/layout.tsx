import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "newstream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.6.6/video-js.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.6.6/video.min.js"></script>
        <script src="https://player.live-video.net/1.33.0/amazon-ivs-videojs-tech.min.js"></script>
        <script src="https://player.live-video.net/1.33.0/amazon-ivs-quality-plugin.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
