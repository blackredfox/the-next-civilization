import { createFileRoute, Link } from "@tanstack/react-router";

import {
  formatEssayDate,
  getEssayPath,
  getEssayReadingTime,
  publishedEssays,
} from "@/lib/essays";

export const Route = createFileRoute("/essays/")({
  head: () => ({
    meta: [
      { title: "Essays - The Next Civilization" },
      {
        name: "description",
        content:
          "Published long-form editorial essays on artificial intelligence, capital, institutions and human adaptation.",
      },
      { property: "og:title", content: "Essays - The Next Civilization" },
      {
        property: "og:description",
        content: "Canonical website essays from The Next Civilization.",
      },
    ],
  }),
  component: EssaysPage,
});

function EssaysPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-[17px] tracking-tight">
            The Next Civilization
          </Link>
          <nav aria-label="Essay navigation" className="flex items-center gap-8 text-[13px] text-ink-soft">
            <Link to="/newsletter" className="hover-underline pb-[2px]">
              Newsletter
            </Link>
            <Link to="/" className="hover-underline pb-[2px]">
              Return home
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="mx-auto max-w-[1280px] px-6 lg:px-12 py-28 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 mb-20 lg:mb-24">
            <div className="lg:col-span-5">
              <h1 className="font-display text-5xl lg:text-7xl leading-[0.98]">
                Essays
              </h1>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-[16px] leading-[1.75] text-ink-soft self-end max-w-[52ch]">
              Canonical website essays from The Next Civilization, written as a
              permanent archive for readers thinking in decades.
            </p>
          </div>

          <ul className="border-t border-rule">
            {publishedEssays.map((essay) => (
              <li key={essay.slug} className="border-b border-rule">
                <a
                  href={getEssayPath(essay)}
                  className="group grid lg:grid-cols-12 gap-x-12 gap-y-8 py-12 hover:bg-muted/60 transition-colors px-2 -mx-2"
                >
                  <div className="lg:col-span-3 text-[12px] tracking-[0.18em] uppercase text-ink-soft space-y-3">
                    <p>{essay.category}</p>
                    <p>{formatEssayDate(essay)}</p>
                    <p>{getEssayReadingTime(essay)}</p>
                  </div>
                  <div className="lg:col-span-8 lg:col-start-5">
                    <p className="font-display italic text-[14px] text-ink-soft">
                      {essay.series}
                    </p>
                    <h2 className="font-display text-3xl lg:text-5xl leading-[1.06] mt-4 max-w-[15ch]">
                      {essay.title}
                    </h2>
                    <p className="mt-6 text-[16px] leading-[1.75] text-ink-soft max-w-[58ch]">
                      {essay.subtitle}
                    </p>
                    <p className="mt-6 text-[15px] leading-[1.75] text-ink-soft max-w-[58ch]">
                      {essay.homepageSummary}
                    </p>
                    <span className="inline-block mt-8 text-[13px] tracking-wide hover-underline pb-[2px]">
                      Read essay →
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
