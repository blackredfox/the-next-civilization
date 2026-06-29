import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast — The Next Civilization" },
      { name: "description", content: "Long, unhurried conversations with thinkers, builders and historians." },
      { property: "og:title", content: "Podcast — The Next Civilization" },
      { property: "og:description", content: "Long, unhurried conversations." },
    ],
  }),
  component: () => (
    <ComingSoon
      section="§ X"
      title="Podcast"
      description="Long, unhurried conversations with thinkers, builders and historians. Currently in preparation."
    />
  ),
});
