"use client";

import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function AgeVerification() {
  const router = useRouter();
  const [error, setError] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVerified, setIsVerified] = useLocalStorage("ageVerified", false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleVerify = (isAdult: boolean) => {
    if (isAdult) {
      setIsVerified(true);
      router.push(redirect ?? "/");
    } else {
      setError("18歳未満の方はアクセスできません。");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">年齢確認</h1>
        <p className="mb-6 text-center">
          このサイトは18歳以上の方のみアクセスできます。あなたは18歳以上ですか？
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => handleVerify(true)}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            はい、18歳以上です
          </Button>
          <Button onClick={() => handleVerify(false)} variant="outline">
            いいえ、18歳未満です
          </Button>
        </div>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}
