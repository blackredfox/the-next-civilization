import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — The Next Civilization" },
      { name: "description", content: "Books published under the imprint of The Next Civilization." },
      { property: "og:title", content: "Books — The Next Civilization" },
      { property: "og:description", content: "Books from the publication." },
    ],
  }),
  component: () => (
    <ComingSoon
      title="Books"
      description="A small imprint for long-form work that does not fit inside an essay. Currently in preparation."
    />
  ),
});
