import {
  createFileRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/videos")({
  // Loaders + head() still run on the server (title/OG tags, real 404),
  // but components of this route and its children render only on the client
  // (replaces `useIsClient()`). Do NOT use `ssr: false` here: it skips child
  // loaders/head() on the server.
  ssr: "data-only",
  component: VideosLayout,
});

function VideosLayout() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVerified, setIsVerified] = useLocalStorage("ageVerified", false);
  const navigate = useNavigate();
  const pathname = useLocation({ select: (l) => l.pathname });
  // Freeze the path at mount: useLocation() switches to the *pending* location
  // while this layout is still mounted, which would produce ?redirect=/age-verification
  const [from] = useState(pathname);

  useEffect(() => {
    if (!isVerified) {
      void navigate({ to: "/age-verification", search: { redirect: from } });
    }
  }, [navigate, isVerified, from]);

  return isVerified ? <Outlet /> : null;
}
