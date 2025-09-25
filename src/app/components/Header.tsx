import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-900 hover:opacity-80 dark:text-neutral-100"
        >
          Home
        </Link>
      </div>
    </header>
  );
}
