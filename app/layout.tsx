import { GoogleAnalytics } from "@/components/googleAnalytics";
import { QueryClientContext } from "@/components/queryClientContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://endless.stream"),
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
