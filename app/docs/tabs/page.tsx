import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "Tabs — agents-cli",
  description: "Per-task tabs inside browser profiles."
};

export default function TabsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 leading-7">
        <h1 className="text-4xl font-semibold text-fg">Tabs</h1>
        <p className="mt-3 text-muted">
          Tabs belong to profiles. One agent can drive several tabs of one profile; many
          agents can drive many profiles concurrently.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">The model</h2>
        <p className="mt-4 text-fg">
          A <a href="/docs/browser-profiles" className="text-accent">profile</a> is the
          identity. A <em>task</em> is a unit of work an agent is doing in that profile.
          Inside a task, one or more <em>tabs</em> are open against URLs the agent has
          navigated to. Tabs are scoped to the task &mdash; ending the task closes them
          without touching tabs that belong to other tasks of the same profile.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Start a task</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`export AGENTS_BROWSER_TASK=$(agents browser start --profile linear-prod --url https://linear.app/inbox)`}</code></pre>
        <p className="mt-4 text-fg">
          <code className="bg-panel px-1.5 py-0.5">start</code> writes the resolved task name
          (something like <code className="bg-panel px-1.5 py-0.5">swift-crab-falcon-a3f92b1c</code>)
          to stdout. Commentary about which Chromium binary was used goes to stderr, so
          <code className="bg-panel px-1.5 py-0.5">$(...)</code> capture stays clean.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">List, focus, close</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents browser tabs                  # list tabs open under the current task
agents browser tab focus tab123      # switch focus to a specific tab
agents browser tab close tab123      # close one tab without ending the task
agents browser done                  # end the task; closes all of its tabs`}</code></pre>
        <p className="mt-4 text-fg">
          Every other browser command &mdash;
          <code className="bg-panel px-1.5 py-0.5"> refs</code>,
          <code className="bg-panel px-1.5 py-0.5"> click</code>,
          <code className="bg-panel px-1.5 py-0.5"> type</code>,
          <code className="bg-panel px-1.5 py-0.5"> screenshot</code> &mdash;
          addresses the focused tab of the focused task.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Override per call</h2>
        <p className="mt-4 text-fg">
          To work against a different task from the same shell, pass
          <code className="bg-panel px-1.5 py-0.5"> --task</code>:
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents browser screenshot --task other-flow`}</code></pre>

        <h2 className="mt-12 text-xl font-semibold text-fg">Worked example: two tabs, one agent</h2>
        <p className="mt-4 text-fg">
          Open a Linear ticket and a Notion spec in the same task, then read both before
          replying:
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`export AGENTS_BROWSER_TASK=$(agents browser start \\
  --profile linear-prod \\
  --url https://linear.app/team/issue/ENG-4421)

# Open a second tab inside the same task
agents browser tab open --url https://notion.so/spec-auth-rewrite

agents browser tabs
# tab123  https://linear.app/team/issue/ENG-4421
# tab124  https://notion.so/spec-auth-rewrite

agents browser tab focus tab124
agents browser screenshot

agents browser tab focus tab123
agents browser type 22 --text "Spec attached. Migration plan follows."

agents browser done`}</code></pre>

        <h2 className="mt-12 text-xl font-semibold text-fg">Concurrent agents</h2>
        <p className="mt-4 text-fg">
          Two agents can run two tasks in two profiles in parallel. Each task owns its own
          tabs; neither agent sees the other&apos;s state.
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`# Terminal A
agents run claude "triage the inbox" --secrets none
#   internally: agents browser start --profile work-slack ...

# Terminal B (same machine, different profile)
agents run codex "draft the changelog post" --secrets none
#   internally: agents browser start --profile personal-gmail ...`}</code></pre>
        <p className="mt-4 text-fg">
          See <a href="/docs/browser-profiles" className="text-accent">browser profiles</a> for
          how profiles isolate cookies and login state across concurrent agents.
        </p>
      </main>
      <Footer />
    </>
  );
}
