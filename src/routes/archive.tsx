import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Newsletter Archive — The Next Civilization" },
      { name: "description", content: "Every past edition of the newsletter, preserved." },
      { property: "og:title", content: "Newsletter Archive — The Next Civilization" },
      { property: "og:description", content: "Every past edition, preserved." },
    ],
  }),
  component: () => (
    <ComingSoon
      section="§ VII"
      title="Newsletter Archive"
      description="Every past edition of the newsletter, preserved and searchable. Currently in preparation."
    />
  ),
});
