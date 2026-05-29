import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const docs = [
  { href: "/docs/browser-profiles", title: "Browser profiles" },
  { href: "/docs/secrets", title: "Secrets" },
  { href: "/docs/tabs", title: "Tabs" }
];

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold text-fg">Docs</h1>
        <div className="mt-8 grid gap-4">
          {docs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="border border-border bg-[#111113] p-5 text-lg font-semibold transition hover:border-accent"
            >
              {doc.title}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
