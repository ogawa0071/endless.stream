"use client";

import Script from "next/script";
import { useEffect } from "react";

export function Ad() {
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
    <>
      <div
        className="admax-switch"
        data-admax-id="3de8ed6819617e5c823eeb1924617298"
        style={{ display: "inline-block" }}
      />
      <Script src="https://adm.shinobi.jp/st/t.js"></Script>
    </>
  );
}
