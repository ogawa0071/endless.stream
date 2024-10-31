"use client";

import { useIsClient } from "@uidotdev/usehooks";
import Script from "next/script";
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
      <div className="md:px-4">
        <div className="p-4 md:px-0 md:py-4">
          テスト的に広告を表示しています。数日で削除する予定です。
        </div>
        <div
          className="admax-switch"
          data-admax-id="3de8ed6819617e5c823eeb1924617298"
          style={{ display: "inline-block" }}
        />
        <Script src="https://adm.shinobi.jp/st/t.js"></Script>
        <div>
          <ins className="widget-banner"></ins>
          {/* eslint-disable-next-line */}
          <script
            async
            className="widget-banner-script"
            src="https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=ogawa0071-001&banner_id=644_728_90"
          ></script>
        </div>
        <div>
          <ins className="widget-banner"></ins>
          {/* eslint-disable-next-line */}
          <script
            async
            className="widget-banner-script"
            src="https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=ogawa0071-001&banner_id=227_728_90"
          ></script>
        </div>
      </div>
    )
  );
}
