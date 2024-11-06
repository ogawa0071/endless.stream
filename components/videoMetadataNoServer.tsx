import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";

export function VideoMetadata() {
  return (
    <div className="p-4 border-b md:border md:rounded-lg md:m-4">
      <div className="flex flex-row md:items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/oechan.png" alt="oechan" />
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">oechan</h2>
              <BadgeCheck className="w-6 h-6" fill="#9146ff" color="#ffffff" />
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
