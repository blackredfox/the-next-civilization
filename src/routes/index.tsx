import { createFileRoute, Link } from "@tanstack/react-router";

import { NewsletterSignupForm } from "@/components/newsletter-signup-form";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Next Civilization — A publication on AI and human adaptation" },
      { name: "description", content: "An independent editorial publication on artificial intelligence, robotics, capital and the long arc of human adaptation. Calm, considered, long-form." },
      { property: "og:title", content: "The Next Civilization" },
      { property: "og:description", content: "Thoughtful essays exploring how technology reshapes civilization. One article at a time." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const essays = [
  {
    issue: "Issue 01",
    series: "On Labor & Judgment",
    readTime: "14 min read",
    date: "June 2026",
    category: "Economics",
    title: "The Quiet Realignment of Human Labor",
    abstract:
      "When intelligence becomes abundant, the value of judgment, taste and trust does not vanish. It concentrates — in fewer hands, and in stranger places than economists expected.",
  },
  {
    issue: "Issue 02",
    series: "On Institutions",
    readTime: "11 min read",
    date: "May 2026",
    category: "Institutions",
    title: "Institutions Built for a Slower World",
    abstract:
      "Our laws, schools and corporations were designed for a century of incremental change. The next decade will not be incremental — and the friction will be felt long before the policy catches up.",
  },
  {
    issue: "Issue 03",
    series: "On Capital",
    readTime: "9 min read",
    date: "April 2026",
    category: "Capital",
    title: "Capital, Distributed",
    abstract:
      "What happens when the means of producing intelligence are no longer scarce, no longer centralized, and the returns no longer geographically bound to a handful of cities.",
  },
];

const researchAreas = [
  { num: "01", title: "AI Economics", desc: "Markets, productivity and the shifting price of cognition." },
  { num: "02", title: "Human Adaptation", desc: "How people, families and communities absorb accelerating change." },
  { num: "03", title: "Distributed AI Capital", desc: "Ownership, access and the geography of intelligence." },
  { num: "04", title: "Education", desc: "Learning systems for a world where knowledge is cheap." },
  { num: "05", title: "Robotics", desc: "Embodied intelligence in physical economies." },
  { num: "06", title: "Institutions", desc: "Governance, law and the slow machinery of trust." },
];

const sources = [
  {
    title: "From AGI to ASI",
    author: "DeepMind",
    kind: "Research",
    year: "2025",
    note: "A foundational map of the trajectory from general to superhuman systems, and the open problems that separate them.",
  },
  {
    title: "Diffusion of Innovations",
    author: "Everett M. Rogers",
    kind: "Book",
    year: "1962",
    note: "The canonical theory of how new ideas and technologies move through societies — still the clearest lens for understanding AI adoption.",
  },
  {
    title: "Crossing the Chasm",
    author: "Geoffrey A. Moore",
    kind: "Book",
    year: "1991",
    note: "Why most transformative technologies stall between early enthusiasts and the mainstream, and what determines whether they cross.",
  },
  {
    title: "World Poll & Workplace Studies",
    author: "Gallup",
    kind: "Data",
    year: "Ongoing",
    note: "Decades of longitudinal evidence on how human beings actually experience work, change and institutions.",
  },
  {
    title: "Monetary Policy & Productivity",
    author: "European Central Bank",
    kind: "Report",
    year: "2024",
    note: "A sober macroeconomic baseline for thinking about productivity shocks in a world of cheap intelligence.",
  },
  {
    title: "Gonka",
    author: "Distributed Compute Network",
    kind: "Reference",
    year: "2025",
    note: "An early reference architecture for compute as a distributed, sovereign and economically owned resource.",
  },
];

const nav = [
  { to: "/essays", label: "Essays" },
  { to: "/research", label: "Research" },
  { to: "/library", label: "Library" },
  { to: "/newsletter", label: "Newsletter" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Essays />
        <Research />
        <Sources />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-[17px] tracking-tight">
          The Next Civilization
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-10 text-[13px] text-ink-soft">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover-underline">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/newsletter" className="text-[13px] border-b border-accent pb-[2px] hover:opacity-70 transition-opacity">
          Subscribe
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      {/* Almost imperceptible warm atmospheric gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 70% 25%, oklch(0.95 0.035 75 / 0.55), transparent 70%), radial-gradient(ellipse 80% 60% at 20% 85%, oklch(0.94 0.025 70 / 0.45), transparent 75%)",
        }}
      />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-36 pb-40 lg:pt-56 lg:pb-64">
        <p className="eyebrow mb-10">Vol. I · A Publication on the Long Future</p>
        <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] max-w-[18ch]">
          The Next<br />Civilization
        </h1>
        <div className="rule-gold w-24 mt-14 mb-10" />
        <p className="font-display italic text-[clamp(1.2rem,1.9vw,1.6rem)] leading-[1.45] max-w-[44ch] text-ink-soft">
          Understanding not only how artificial intelligence evolves —
          but how civilization must evolve alongside it.
        </p>
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-[14px]">
          <Link
            to="/newsletter"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 hover:bg-ink-soft transition-colors"
          >
            Read the Newsletter
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a href="#essays" className="hover-underline pb-[2px]">
            Explore the current issues
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  section,
  title,
  intro,
  link,
}: {
  section: string;
  title: string;
  intro?: string;
  link?: { to: string; label: string };
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 mb-20 lg:mb-24">
      <div className="lg:col-span-5">
        <p className="eyebrow">{section}</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-6 leading-[1.05]">
          {title}
        </h2>
      </div>
      {intro && (
        <p className="lg:col-span-6 lg:col-start-7 text-[16px] leading-[1.75] text-ink-soft self-end max-w-[52ch]">
          {intro}
        </p>
      )}
      {link && (
        <div className="lg:col-span-6 lg:col-start-7 self-end">
          <Link to={link.to} className="text-[13px] hover-underline pb-[2px]">
            {link.label} →
          </Link>
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40 grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-4">
          <p className="eyebrow">§ I</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-6 leading-[1.05]">
            Why this publication exists
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 font-display text-[1.25rem] lg:text-[1.4rem] leading-[1.6] text-ink-soft space-y-7 max-w-[58ch]">
          <p>
            Technology does not change civilization. <span className="text-foreground">People do.</span>
          </p>
          <p>
            Artificial intelligence is not the story. <span className="text-foreground">Human adaptation is.</span>
          </p>
          <p>
            <em>The Next Civilization</em> exists because the conversation around
            artificial intelligence has become loud, fast and shallow — and the
            questions that will actually matter in twenty years are quiet, slow
            and deep.
          </p>
          <p>
            Following the news of technology tells you what changed this week.
            Understanding civilization tells you what is likely to remain true
            for the rest of your life. This publication is written for readers
            who prefer the second.
          </p>
        </div>
      </div>
    </section>
  );
}

function Essays() {
  return (
    <section id="essays" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
        <SectionHeader
          section="§ II"
          title="Current issues"
          intro="Three essays open the first volume. Each begins a series the publication will return to over the coming years."
          link={{ to: "/essays", label: "All issues" }}
        />
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 border-t border-rule pt-16">
          {essays.map((e) => (
            <li key={e.title}>
              <article className="flex flex-col h-full">
                <div className="flex items-baseline justify-between text-[11px] tracking-[0.18em] uppercase text-ink-soft">
                  <span>{e.issue}</span>
                  <span>{e.category}</span>
                </div>
                <div className="rule-gold w-10 mt-5 mb-6" />
                <p className="font-display italic text-[14px] text-ink-soft">{e.series}</p>
                <h3 className="font-display text-2xl lg:text-[1.7rem] leading-[1.2] mt-4">
                  {e.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.75] text-ink-soft max-w-[42ch]">
                  {e.abstract}
                </p>
                <div className="mt-auto pt-8 flex items-center justify-between text-[12px] text-ink-soft">
                  <span>{e.date}</span>
                  <span>{e.readTime}</span>
                </div>
                <Link
                  to="/essays"
                  className="inline-block mt-5 text-[13px] tracking-wide hover-underline pb-[2px] self-start"
                >
                  Read essay
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="border-b border-rule bg-muted/50">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
        <SectionHeader
          section="§ III"
          title="Areas of research"
          intro="Six long arcs we follow. Each will become a dedicated section of the publication as the work matures."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-rule">
          {researchAreas.map((r, i) => (
            <Link
              key={r.num}
              to="/research"
              className={`group border-b border-rule py-12 pr-6 lg:pr-10 pl-0 lg:pl-8 flex flex-col ${i % 3 !== 2 ? "lg:border-r" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[2.5rem] text-accent leading-none">{r.num}</span>
                <span className="text-ink-soft text-lg transition-transform duration-500 group-hover:translate-x-1">→</span>
              </div>
              <h3 className="font-display text-2xl mt-8">{r.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-soft max-w-[36ch]">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sources() {
  return (
    <section id="library" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
        <SectionHeader
          section="§ IV"
          title="Canonical sources"
          intro="A working bibliography for the next civilization — the books, papers and institutions that inform our thinking."
        />
        <ul className="border-t border-rule">
          {sources.map((s, i) => (
            <li key={s.title} className="border-b border-rule">
              <Link
                to="/library"
                className="group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline py-10 hover:bg-muted/60 transition-colors px-2 -mx-2"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-ink-soft tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-7">
                  <h3 className="font-display text-xl lg:text-2xl leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-soft max-w-[52ch]">
                    {s.note}
                  </p>
                </div>
                <div className="col-start-3 md:col-start-9 col-span-10 md:col-span-4 flex flex-col md:items-end gap-1 text-[13px] text-ink-soft">
                  <span>{s.author}</span>
                  <span className="text-[11px] tracking-[0.18em] uppercase">
                    {s.kind} · {s.year}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link to="/library" className="text-[13px] hover-underline pb-[2px]">
            Enter the library →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">§ V</p>
          <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[1.05]">
            Join The Next Civilization
          </h2>
          <div className="rule-gold w-16 mx-auto mt-10 mb-10" />
          <p className="font-display italic text-[1.2rem] lg:text-[1.35rem] leading-[1.55] text-ink-soft max-w-[44ch] mx-auto">
            Receive thoughtful essays on how technology reshapes civilization.
            One carefully researched article at a time. No hype, no breaking news —
            only ideas that remain valuable years from now.
          </p>
          <NewsletterSignupForm source="homepage" />
          <p className="mt-6 text-[12px] text-ink-soft">
            No advertising. No tracking beyond what is required. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-32 lg:py-40 text-center">
        <div className="rule-gold w-16 mx-auto mb-14" />
        <blockquote className="font-display italic text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.45] max-w-[36ch] mx-auto text-foreground">
          The future is not something that happens to civilization.
          It is something civilization builds.
        </blockquote>
        <div className="mt-20 font-display text-xl">The Next Civilization</div>
        <div className="mt-3 eyebrow">Volume I · MMXXVI</div>
        <div className="mt-2 eyebrow">Independent Editorial Publication</div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-6 flex flex-wrap justify-between gap-4 text-[12px] text-ink-soft">
          <span>© {new Date().getFullYear()} The Next Civilization. All rights reserved.</span>
          <span className="font-mono">An independent editorial publication</span>
        </div>
      </div>
    </footer>
  );
}
