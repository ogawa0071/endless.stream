import { type AnyRouter, useRouter } from "@tanstack/react-router";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  isAgeVerified,
  verifyAge,
  verifyAgeOnClient,
} from "@/lib/ageVerification";

// Where the previous version of the site stored the flag (JSON `true`)
const LEGACY_STORAGE_KEY = "ageVerified";

async function verify(router: AnyRouter) {
  try {
    await verifyAge();
  } catch {
    verifyAgeOnClient();
  }
  // Re-runs the /videos beforeLoad, which now renders the content
  await router.invalidate();
}

export function AgeGate() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const confirm = () => startTransition(() => verify(router));

  useEffect(() => {
    // The server-rendered gate may be stale (e.g. HTML from the HTTP cache)
    if (isAgeVerified()) {
      void router.invalidate();
      return;
    }
    let legacy: string | null = null;
    try {
      legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    } catch {
      // Storage unavailable
    }
    if (legacy === "true") {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      void verify(router);
    }
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">年齢確認</h1>
        <p className="mb-6 text-center">
          このサイトは18歳以上の方のみアクセスできます。あなたは18歳以上ですか？
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={confirm}
            disabled={isPending}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            はい、18歳以上です
          </Button>
          <Button
            onClick={() => setError("18歳未満の方はアクセスできません。")}
            variant="outline"
          >
            いいえ、18歳未満です
          </Button>
        </div>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
}
