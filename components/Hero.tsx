import Link from "next/link";
import { ArrowRight, ClipboardList, KeyRound, PanelsTopLeft, Terminal } from "lucide-react";

const features = [
  {
    title: "Browser automation",
    description: "Drive authenticated browser sessions, profiles, and tabs from agent workflows.",
    icon: PanelsTopLeft
  },
  {
    title: "Secret bundles",
    description: "Inject named credentials into CLI runs without spreading keys through dotfiles.",
    icon: KeyRound
  },
  {
    title: "Agent sessions",
    description: "Track, inspect, and resume coding-agent work from one command surface.",
    icon: ClipboardList
  }
];

export function Hero() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border border-border px-3 py-1 text-sm text-muted">
            <Terminal aria-hidden="true" className="h-4 w-4 text-accent" />
            CLI coding-agent toolchain
          </div>
          <h1 className="text-5xl font-semibold tracking-normal text-fg sm:text-6xl">
            agents-cli
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            The missing toolchain for CLI coding agents: sessions, browser control, secrets,
            and operational glue in one install.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <pre className="overflow-x-auto border border-border bg-black px-4 py-3 text-sm text-fg">
              <code>bun install -g @phnx-labs/agents-cli</code>
            </pre>
            <Link
              href="/install"
              className="inline-flex items-center justify-center gap-2 bg-accent px-4 py-3 text-sm font-semibold text-bg"
            >
              Install guide
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="border border-border bg-[#111113] p-6">
          <pre className="overflow-x-auto text-sm leading-7 text-muted">
            <code>{`$ agents sessions --active
$ agents browser open --profile launch
$ agents secrets exec prod -- agents run ship`}</code>
          </pre>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article key={feature.title} className="border border-border bg-[#111113] p-6">
              <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
              <h2 className="mt-5 text-xl font-semibold text-fg">{feature.title}</h2>
              <p className="mt-3 leading-7 text-muted">{feature.description}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
