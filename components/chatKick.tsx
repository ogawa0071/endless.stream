"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function Chat() {
  return (
    <div className="md:w-1/4 flex flex-col h-[50vh] md:h-auto">
      <iframe
        src="https://kick.com/popout/oechan/chat"
        className="h-[100vh]"
      ></iframe>
      <div className="p-4 hidden sm:block">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="font-bold">コメントはできません</AlertTitle>
          <AlertDescription>
            このページではエラーになりKickにログインできませんので、コメントはできません。
            <br />
            <a
              href="https://kick.com/oechan"
              target="_blank"
              className="underline"
            >
              KickのWebサイト
            </a>
            でコメントを投稿してください。
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
