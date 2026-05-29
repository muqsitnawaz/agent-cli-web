import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "Browser profiles — agents-cli",
  description: "Named, persistent browser identities for agent automation."
};

export default function BrowserProfilesPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 leading-7">
        <h1 className="text-4xl font-semibold text-fg">Browser profiles</h1>
        <p className="mt-3 text-muted">
          A named, persistent browser identity an agent can drive. Cookies, login state, and
          extensions stay between runs.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Why profiles exist</h2>
        <p className="mt-4 text-fg">
          A Chrome window is not an identity. Close it, and the next process gets a fresh,
          unauthenticated browser. Spin up Playwright instead and most sites &mdash; Google,
          LinkedIn, the typical finance dashboard &mdash; block the session within seconds
          because the automation flags are detectable.
        </p>
        <p className="mt-4 text-fg">
          A profile fixes both problems. It is a directory on disk that holds cookies, local
          storage, installed extensions, and the cached auth tokens of every site you have
          ever signed into through it. Point any agent at the profile and the agent inherits
          the login. Point a second agent at a different profile and the two run side by side
          without colliding.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Create one</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents browser profiles create linear-prod --browser chrome`}</code></pre>
        <p className="mt-4 text-fg">
          The profile is named <code className="bg-panel px-1.5 py-0.5">linear-prod</code>. The
          first launch opens a real Chrome window pointed at an isolated user-data directory.
          Sign into the sites you want the agent to reach &mdash; the cookies land in the
          profile, not your everyday Chrome.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Drive it from an agent</h2>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`export AGENTS_BROWSER_TASK=$(agents browser start --profile linear-prod --url https://linear.app)
agents browser refs
agents browser click 42
agents browser type 15 --text "auth bug in /signup"
agents browser screenshot
agents browser done`}</code></pre>
        <p className="mt-4 text-fg">
          <code className="bg-panel px-1.5 py-0.5">refs</code> returns a numbered list of
          interactive elements. <code className="bg-panel px-1.5 py-0.5">click</code> and
          <code className="bg-panel px-1.5 py-0.5"> type</code> address them by number, so the
          agent never has to reason about CSS selectors.
          <code className="bg-panel px-1.5 py-0.5"> screenshot</code> resizes for token
          efficiency before returning. <code className="bg-panel px-1.5 py-0.5">done</code>
          closes the task&apos;s tabs and releases the profile.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Attach a secrets bundle</h2>
        <p className="mt-4 text-fg">
          For sites the agent should be able to log into from scratch, attach a secrets bundle
          to the profile. Credentials stay in Keychain; the agent never sees plaintext.
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents browser profiles create bank --browser chrome --secrets bank-creds`}</code></pre>
        <p className="mt-4 text-fg">
          See <a href="/docs/secrets" className="text-accent">secrets</a> for how to create the bundle.
        </p>

        <h2 className="mt-12 text-xl font-semibold text-fg">Multiple agents, multiple profiles</h2>
        <p className="mt-4 text-fg">
          Each profile has its own user-data directory. Two agents can run two profiles in
          parallel without sharing cookies or stepping on each other&apos;s tabs.
        </p>
        <pre className="mt-4 border border-border bg-panel px-4 py-3 text-sm text-fg overflow-x-auto"><code>{`agents browser profiles create work-slack --browser chrome
agents browser profiles create personal-gmail --browser chrome`}</code></pre>
        <p className="mt-4 text-fg">
          See <a href="/docs/tabs" className="text-accent">tabs</a> for how tabs belong to
          profiles and how to drive several at once.
        </p>
      </main>
      <Footer />
    </>
  );
}
