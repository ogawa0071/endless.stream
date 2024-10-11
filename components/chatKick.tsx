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
      <div className="p-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="font-bold">コメントはできません</AlertTitle>
          <AlertDescription>
            このページではKickにログインしてもエラーになりますので、コメントはできません。
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
