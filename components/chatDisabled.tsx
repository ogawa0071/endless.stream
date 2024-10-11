"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

export function Chat() {
  return (
    <div className="md:w-1/4 md:border-l flex flex-col h-[50vh] md:h-auto">
      <ScrollArea className="flex-1">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">チャット</h3>
          <div>
            <a
              href="https://kick.com/oechan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              チャットはKickでお願い致します
            </a>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
