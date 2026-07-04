import { createFileRoute, Link } from "@tanstack/react-router";

import { NewsletterSignupForm } from "@/components/newsletter-signup-form";
import {
  formatEssayDate,
  getEssayPath,
  getEssayReadingTime,
  publishedEssays,
} from "@/lib/essays";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Next Civilization - A publication on AI and human adaptation" },
      {
        name: "description",
        content:
          "An independent editorial publication on artificial intelligence, robotics, capital and the long arc of human adaptation. Calm, considered, long-form.",
      },
      { property: "og:title", content: "The Next Civilization" },
      {
        property: "og:description",
        content:
          "Thoughtful essays exploring how technology reshapes civilization. One article at a time.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const featuredEssay = publishedEssays[0];

const nav = [
  { to: "/essays", label: "Essays" },
  { to: "/newsletter", label: "Newsletter" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedEssay />
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
          Understanding not only how artificial intelligence evolves, but how
          civilization must evolve alongside it.
        </p>
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-[14px]">
          <Link
            to="/essays/ai-future-wall-of-work"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 hover:bg-ink-soft transition-colors"
          >
            Read the First Essay
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/newsletter" className="hover-underline pb-[2px]">
            Receive future essays
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  title,
  intro,
  link,
}: {
  title: string;
  intro?: string;
  link?: { to: string; label: string };
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 mb-20 lg:mb-24">
      <div className="lg:col-span-5">
        <h2 className="font-display text-4xl lg:text-5xl leading-[1.05]">
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
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.05]">
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
            artificial intelligence has become loud, fast and shallow, while the
            questions that will matter in twenty years are quiet, slow and deep.
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

function FeaturedEssay() {
  return (
    <section id="essays" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
        <SectionHeader
          title="The first essay"
          intro="The opening essay of Volume I begins where the AI transition has become most human: work, responsibility, identity and physical reality."
          link={{ to: "/essays", label: "Essay archive" }}
        />
        <article className="border-t border-rule pt-16 grid lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-3 text-[12px] tracking-[0.18em] uppercase text-ink-soft space-y-3">
            <p>{featuredEssay.category}</p>
            <p>{featuredEssay.series}</p>
            <p>{formatEssayDate(featuredEssay)}</p>
            <p>{getEssayReadingTime(featuredEssay)}</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h3 className="font-display text-3xl lg:text-5xl leading-[1.05] max-w-[14ch]">
              {featuredEssay.title}
            </h3>
            <p className="mt-7 font-display italic text-[1.2rem] lg:text-[1.45rem] leading-[1.5] text-ink-soft max-w-[42ch]">
              {featuredEssay.subtitle}
            </p>
            <p className="mt-7 text-[16px] leading-[1.8] text-ink-soft max-w-[54ch]">
              {featuredEssay.homepageSummary}
            </p>
            <a
              href={getEssayPath(featuredEssay)}
              className="inline-block mt-10 text-[13px] tracking-wide hover-underline pb-[2px]"
            >
              Read essay →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
            Join The Next Civilization
          </h2>
          <div className="rule-gold w-16 mx-auto mt-10 mb-10" />
          <p className="font-display italic text-[1.2rem] lg:text-[1.35rem] leading-[1.55] text-ink-soft max-w-[44ch] mx-auto">
            Receive thoughtful essays on how technology reshapes civilization.
            One carefully researched article at a time. No hype, no breaking news,
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
