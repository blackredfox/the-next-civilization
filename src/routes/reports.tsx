import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Annual Reports — The Next Civilization" },
      { name: "description", content: "Yearly state-of-the-civilization reports — long, slow, considered." },
      { property: "og:title", content: "Annual Reports — The Next Civilization" },
      { property: "og:description", content: "Long, slow, considered yearly reports." },
    ],
  }),
  component: () => (
    <ComingSoon
      title="Annual Reports"
      description="A yearly long-form report on the state of the next civilization. The first volume is in preparation."
    />
  ),
});
