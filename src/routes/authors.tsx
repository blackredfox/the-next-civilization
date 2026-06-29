import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "Authors — The Next Civilization" },
      { name: "description", content: "Contributing writers and thinkers of The Next Civilization." },
      { property: "og:title", content: "Authors — The Next Civilization" },
      { property: "og:description", content: "The writers behind the publication." },
    ],
  }),
  component: () => (
    <ComingSoon
      section="§ VI"
      title="Authors"
      description="The writers and thinkers contributing to the publication. Currently in preparation."
    />
  ),
});
