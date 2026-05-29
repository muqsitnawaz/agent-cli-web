import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "Secrets — agents-cli",
  description: "Keychain-backed credential bundles, injected per run."
};

export default function SecretsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 leading-7">
        <h1 className="text-4xl font-semibold text-fg">Secrets</h1>
        <p className="mt-3 text-muted">
          Named bundles of credentials, stored in macOS Keychain, injected into a single
          child process at run time.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">The rule</h2>
        <p className="mt-4 text-fg">
          Use <code className="bg-panel px-1.5 py-0.5">agents secrets exec</code> when you can
          and the <code className="bg-panel px-1.5 py-0.5">--secrets</code> flag on
          <code className="bg-panel px-1.5 py-0.5"> agents run</code> when you cannot. Do not
          export credentials into the shell. The shell is shared with every tool you run
          afterwards.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Bad: export into the shell</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`export OPENAI_API_KEY=$(agents secrets get openai)
agents run codex "draft the migration"
# OPENAI_API_KEY is now visible to every subsequent process in this shell.`}</code></pre>
        <p className="mt-4 text-fg">
          Any binary you launch in the same shell &mdash; an editor plugin, a build script,
          a curl one-liner &mdash; inherits the key. The key also lands in shell history if
          the command is edited or recalled with <code className="bg-panel px-1.5 py-0.5">history</code>.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Good: scope to one process</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents secrets exec openai -- agents run codex "draft the migration"`}</code></pre>
        <p className="mt-4 text-fg">
          The bundle is resolved from Keychain, the env is set on the child process only, and
          the child exits with the env. Nothing leaks back to the parent shell. The same shape
          works for any command:
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents secrets exec stripe-prod -- bun run scripts/refund.ts
agents secrets exec hetzner.com -- crabbox run -- bun test`}</code></pre>

        <h2 className="mt-12 text-xl font-semibold text-fg">Create a bundle</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents secrets create stripe-prod
agents secrets add stripe-prod STRIPE_API_KEY --type api-key --expires 2027-01-15
agents secrets add stripe-prod STRIPE_WEBHOOK_SECRET --type api-key
agents secrets list`}</code></pre>
        <p className="mt-4 text-fg">
          <code className="bg-panel px-1.5 py-0.5">add</code> prompts for the value and writes
          it to Keychain. Bundle definitions live in Keychain too &mdash; nothing about
          secrets touches disk in plaintext. The
          <code className="bg-panel px-1.5 py-0.5"> EXPIRING</code> column on
          <code className="bg-panel px-1.5 py-0.5"> list</code> flags any secret due in the
          next 30 days.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Rotate a secret</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents secrets rotate stripe-prod STRIPE_API_KEY --note "rotated after suspected leak"`}</code></pre>
        <p className="mt-4 text-fg">
          <code className="bg-panel px-1.5 py-0.5">rotate</code> replaces the value and
          preserves metadata; <code className="bg-panel px-1.5 py-0.5">add</code> refuses to
          overwrite an existing key.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Touch ID</h2>
        <p className="mt-4 text-fg">
          On macOS, Keychain access for secret bundles is gated by Touch ID when biometry is
          available. The prompt fires once per bundle per shell session, not per command.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Instructing an agent</h2>
        <p className="mt-4 text-fg">
          When you write rules for an agent that will run shell commands on your behalf, make
          the policy explicit in <code className="bg-panel px-1.5 py-0.5">AGENTS.md</code>:
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`Run credential-needing commands via 'agents secrets exec <bundle> -- <command>'.
Do not 'export' secrets into the shell. Do not write secrets to .env files.
If a bundle is missing, stop and ask which bundle to use.`}</code></pre>
        <p className="mt-4 text-fg">
          See <a href="/docs/browser-profiles" className="text-accent">browser profiles</a> for
          attaching a bundle to a browser profile so agents can sign into sites without seeing
          the credentials.
        </p>
      </main>
      <Footer />
    </>
  );
}
