import Link from "next/link";
import { ExternalLink, Terminal } from "lucide-react";

const navItems = [
  { href: "/install", label: "Install" },
  { href: "/docs", label: "Docs" }
];

export function Nav() {
  return (
    <header className="border-b border-border bg-bg/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <Terminal aria-hidden="true" className="h-5 w-5 text-accent" />
          <span>agents-cli</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-fg">
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/muqsitnawaz/agents-cli"
            className="transition hover:text-fg"
            aria-label="GitHub"
          >
            <ExternalLink aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
