export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6 text-sm text-neutral-600 dark:text-neutral-300">
        <p>© {new Date().getFullYear()} BB Development & Design</p>
      </div>
    </footer>
  );
}
