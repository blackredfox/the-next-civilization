import { createFileRoute, Link } from "@tanstack/react-router";

import {
  aiFutureWallOfWorkEssay as essay,
  formatEssayDate,
  getEssayReadingTime,
} from "@/lib/essays";

export const Route = createFileRoute("/essays/ai-future-wall-of-work")({
  head: () => ({
    meta: [
      { title: `${essay.title} - ${essay.publication}` },
      { name: "description", content: essay.description },
      { name: "author", content: essay.author },
      { property: "og:title", content: essay.title },
      { property: "og:description", content: essay.description },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: essay.date },
      { property: "article:author", content: essay.author },
    ],
    links: [{ rel: "canonical", href: `/essays/${essay.slug}` }],
  }),
  component: EssayArticlePage,
});

function EssayArticlePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-[17px] tracking-tight">
            The Next Civilization
          </Link>
          <nav aria-label="Article navigation" className="flex items-center gap-8 text-[13px] text-ink-soft">
            <Link to="/essays" className="hover-underline pb-[2px]">
              Essays
            </Link>
            <Link to="/newsletter" className="hover-underline pb-[2px]">
              Newsletter
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <article>
          <header className="border-b border-rule">
            <div className="mx-auto max-w-[1000px] px-6 lg:px-12 py-24 lg:py-32">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] tracking-[0.18em] uppercase text-ink-soft">
                <span>{essay.category}</span>
                <span>{essay.series}</span>
                <time dateTime={essay.date}>{formatEssayDate(essay)}</time>
                <span>{getEssayReadingTime(essay)}</span>
              </div>
              <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.98] mt-10 max-w-[13ch]">
                {essay.title}
              </h1>
              <div className="rule-gold w-20 mt-12 mb-10" />
              <p className="font-display italic text-[clamp(1.25rem,2vw,1.7rem)] leading-[1.45] text-ink-soft max-w-[43ch]">
                {essay.subtitle}
              </p>
              <p className="mt-10 text-[13px] tracking-[0.18em] uppercase text-ink-soft">
                {essay.author}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-[820px] px-6 lg:px-12 py-20 lg:py-28">
            <div className="space-y-16">
              {essay.sections.map((section, sectionIndex) => (
                <section key={section.heading ?? sectionIndex}>
                  {section.heading && (
                    <h2 className="font-display text-3xl lg:text-4xl leading-[1.12] mb-8">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-6 text-[18px] leading-[1.85] text-ink-soft">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${section.heading ?? "intro"}-${paragraphIndex}`}
                        className={
                          sectionIndex === 0 && paragraphIndex === 0
                            ? "font-display text-[1.35rem] lg:text-[1.55rem] leading-[1.65] text-foreground"
                            : undefined
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-24 border-t border-rule pt-14">
              <h2 className="font-display text-3xl lg:text-4xl leading-[1.12]">
                Further Reading
              </h2>
              <ul className="mt-8 space-y-4 text-[15px] leading-[1.7] text-ink-soft">
                {essay.furtherReading.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover-underline pb-[2px]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
