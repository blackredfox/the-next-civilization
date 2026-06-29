import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — The Next Civilization" },
      { name: "description", content: "Receive thoughtful essays on how technology reshapes civilization. One carefully researched article at a time." },
      { property: "og:title", content: "Newsletter — The Next Civilization" },
      { property: "og:description", content: "One carefully researched article at a time." },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-[17px] tracking-tight">
            The Next Civilization
          </Link>
          <Link to="/" className="text-[13px] hover-underline pb-[2px]">← Return</Link>
        </div>
      </header>
      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-2xl w-full px-6 lg:px-12 py-28 text-center">
          <p className="eyebrow">§ V</p>
          <h1 className="font-display text-4xl lg:text-6xl mt-6 leading-[1.02]">
            Join The Next Civilization
          </h1>
          <div className="rule-gold w-16 mx-auto mt-10 mb-10" />
          <p className="font-display italic text-[1.25rem] lg:text-[1.4rem] leading-[1.5] text-ink-soft">
            Receive thoughtful essays exploring how technology reshapes
            civilization. One carefully researched article at a time.
            No hype. No breaking news. Only ideas that remain valuable
            years from now.
          </p>
          <form
            className="mt-14 flex flex-col sm:flex-row border border-rule bg-background"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-6 py-5 text-[15px] placeholder:text-ink-soft/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            />
            <button
              type="submit"
              className="bg-ink text-paper px-8 py-5 text-[14px] tracking-wide hover:bg-ink-soft transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[12px] text-ink-soft">
            No advertising. No tracking beyond what is required. Unsubscribe at any time.
          </p>
        </div>
      </main>
    </div>
  );
}
