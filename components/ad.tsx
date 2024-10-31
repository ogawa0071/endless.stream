"use client";

import { useIsClient } from "@uidotdev/usehooks";

export function Ad() {
  const isClient = useIsClient();

  return (
    isClient && (
      <>
        <div
          className="admax-ads"
          data-admax-id="2d62901de614aa7f89dafac02fbe6cc5"
          style={{ display: "inline-block", width: 728, height: 90 }}
        />
        {/* <Script
        src="https://adm.shinobi.jp/st/t.js"
        onReady={() => {
          (window.admaxads = window.admaxads || []).push({
            admax_id: "2d62901de614aa7f89dafac02fbe6cc5",
            type: "banner",
          });
        }}
      ></Script> */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(admaxads = window.admaxads || []).push({admax_id: "2d62901de614aa7f89dafac02fbe6cc5",type: "banner"});`,
          }}
        ></script>
        <script
          type="text/javascript"
          src="https://adm.shinobi.jp/st/t.js"
          async
        ></script>
      </>
    )
  );
}
