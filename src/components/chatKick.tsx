import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function Chat() {
  return (
    <div className="flex h-[50vh] flex-col md:h-auto md:w-1/4">
      <iframe
        src="https://kick.com/popout/oechan/chat"
        title="Kick チャット"
        className="h-[100vh]"
      ></iframe>
      <div className="hidden p-4 sm:block">
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
