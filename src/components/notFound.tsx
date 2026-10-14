import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">404 | ページが見つかりません</h1>
      <Link to="/" className="underline">
        トップへ戻る
      </Link>
    </div>
  );
}
