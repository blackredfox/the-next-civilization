import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Canonical Library — The Next Civilization" },
      { name: "description", content: "A searchable digital library of the canonical books, papers and institutions that inform the publication." },
      { property: "og:title", content: "Canonical Library — The Next Civilization" },
      { property: "og:description", content: "A working bibliography for the next civilization." },
    ],
  }),
  component: () => (
    <ComingSoon
      title="Canonical Library"
      description="A searchable bibliography of foundational books, papers and institutions. Currently in preparation."
    />
  ),
});
