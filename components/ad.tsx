"use client";

import { useIsClient } from "@uidotdev/usehooks";
import { useEffect } from "react";

export function Ad() {
  const isClient = useIsClient();

  useEffect(() => {
    window.admaxads = [
      ...(window.admaxads || []),
      {
        admax_id: "3de8ed6819617e5c823eeb1924617298",
        type: "switch",
      },
    ];

    return () => {
      window.admaxads = [];
    };
  }, []);

  return (
    isClient && (
      <div className="md:px-4 grid gap-2">
        <div className="p-4 md:px-0 md:py-4">
          テスト的に広告を表示しています。数日で削除する予定です。
        </div>
        <div>
          <div
            className="admax-switch"
            data-admax-id="3de8ed6819617e5c823eeb1924617298"
            style={{ display: "inline-block" }}
          />
          <script async src="https://adm.shinobi.jp/st/t.js"></script>
        </div>
        <AdDMM bannerId="227" />
        <AdDMM bannerId="644" />
      </div>
    )
  );
}

function AdDMM({ bannerId }: { bannerId: string }) {
  return (
    <div>
      <iframe
        srcDoc={`<head><script src="https://cdn.tailwindcss.com"></script></head><body><ins class="widget-banner"></ins><script class="widget-banner-script" src="https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=ogawa0071-001&banner_id=${bannerId}_336_280"></script></body>`}
        className="md:hidden w-[336px] h-[280px]"
      ></iframe>
      <iframe
        srcDoc={`<head><script src="https://cdn.tailwindcss.com"></script></head><body><ins class="widget-banner"></ins><script class="widget-banner-script" src="https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=ogawa0071-001&banner_id=${bannerId}_728_90"></script></body>`}
        className="hidden md:block w-[728px] h-[90px]"
      ></iframe>
    </div>
  );
}
