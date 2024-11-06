"use client";

import { useIsClient, useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isClient = useIsClient();

  return isClient && <AgeVerificationCheck>{children}</AgeVerificationCheck>;
}

function AgeVerificationCheck({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVerified, setIsVerified] = useLocalStorage("ageVerified", false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isVerified) {
      router.push(`/age-verification?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [router, isVerified, pathname]);

  return isVerified && <>{children}</>;
}
