import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const sections = [
  {
    title: "macOS",
    commands: "bun install -g @phnx-labs/agents-cli\nagents --help"
  },
  {
    title: "Linux",
    commands: "bun install -g @phnx-labs/agents-cli\nagents --help"
  },
  {
    title: "Windows via WSL",
    commands: "wsl\nbun install -g @phnx-labs/agents-cli\nagents --help"
  }
];

export default function InstallPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold text-fg">Install agents-cli</h1>
        <div className="mt-10 grid gap-6">
          {sections.map((section) => (
            <section key={section.title} className="border border-border bg-[#111113] p-6">
              <h2 className="text-2xl font-semibold text-fg">{section.title}</h2>
              <pre className="mt-4 overflow-x-auto border border-border bg-black px-4 py-3 text-sm leading-7 text-fg">
                <code>{section.commands}</code>
              </pre>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
