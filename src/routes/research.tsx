import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — The Next Civilization" },
      { name: "description", content: "Seven long arcs of inquiry: AI economics, human adaptation, distributed capital, education, robotics, institutions and civilization." },
      { property: "og:title", content: "Research — The Next Civilization" },
      { property: "og:description", content: "Seven long arcs of inquiry into the next civilization." },
    ],
  }),
  component: () => (
    <ComingSoon
      section="§ III"
      title="Research"
      description="Dedicated research sections for each of the seven long arcs we follow. Currently in preparation."
    />
  ),
});
