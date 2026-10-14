import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";

export function VideoMetadata() {
  return (
    <div className="border-b p-4 md:m-4 md:rounded-lg md:border">
      <div className="flex flex-row justify-between md:items-center">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/oechan.png" alt="oechan" />
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">oechan</h2>
              <BadgeCheck className="h-6 w-6" fill="#9146ff" color="#ffffff" />
            </div>
            <div className="flex gap-2 text-sm">
              <a
                href="https://x.com/oekakiss"
                target="_blank"
                className="underline"
              >
                Twitter
              </a>
              <a
                href="https://kick.com/oechan"
                target="_blank"
                className="underline"
              >
                Kick
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
