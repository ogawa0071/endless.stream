"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
