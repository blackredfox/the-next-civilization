import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/essays")({
  head: () => ({
    meta: [
      { title: "Essays — The Next Civilization" },
      { name: "description", content: "Long-form editorial essays on artificial intelligence, capital, institutions and human adaptation." },
      { property: "og:title", content: "Essays — The Next Civilization" },
      { property: "og:description", content: "Long-form editorial essays for readers thinking in decades." },
    ],
  }),
  component: () => (
    <ComingSoon
      section="§ II"
      title="Essays"
      description="The full editorial archive — every issue, every series, in one place. Currently in preparation."
    />
  ),
});
