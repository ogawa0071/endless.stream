import { QueryClientContext } from "@/components/queryClientContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endless Stream（エンスト）",
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <QueryClientContext>{children}</QueryClientContext>
        <GoogleAnalytics gaId="G-DRKJRNE9Z3" />
      </body>
    </html>
  );
}
