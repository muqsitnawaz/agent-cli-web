import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>agents-cli</p>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="transition hover:text-fg">
            Docs
          </Link>
          <Link href="/install" className="transition hover:text-fg">
            Install
          </Link>
          <a
            href="https://github.com/muqsitnawaz/agents-cli"
            className="inline-flex items-center gap-2 transition hover:text-fg"
          >
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
