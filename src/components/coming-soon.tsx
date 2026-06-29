import { Link } from "@tanstack/react-router";

export function ComingSoon({
  section,
  title,
  description,
}: {
  section: string;
  title: string;
  description: string;
}) {
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
        <div className="mx-auto max-w-2xl w-full px-6 lg:px-12 py-32 text-center">
          <p className="eyebrow">{section}</p>
          <h1 className="font-display text-4xl lg:text-6xl mt-6 leading-[1.02]">
            {title}
          </h1>
          <div className="rule-gold w-16 mx-auto mt-10 mb-10" />
          <p className="font-display italic text-[1.2rem] lg:text-[1.35rem] leading-[1.55] text-ink-soft">
            {description}
          </p>
          <div className="mt-14">
            <Link to="/newsletter" className="inline-block text-[13px] tracking-wide border-b border-accent pb-[2px] hover:opacity-70 transition-opacity">
              Be notified when this section opens
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
