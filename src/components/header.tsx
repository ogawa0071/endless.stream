import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <Link to="/">
        <h1 className="text-xl font-bold">Endless Stream</h1>
      </Link>
    </header>
  );
}
