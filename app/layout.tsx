import { QueryClientContext } from "@/components/queryClientContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endless Stream（エンスト）",
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
      </body>
    </html>
  );
}
