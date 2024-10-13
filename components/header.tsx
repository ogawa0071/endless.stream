import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/">
        <h1 className="text-xl font-bold">Endless Stream</h1>
      </Link>
    </header>
  );
}
