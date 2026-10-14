import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/">
        <h1 className="text-xl font-bold">Endless Stream</h1>
      </Link>
    </header>
  );
}
