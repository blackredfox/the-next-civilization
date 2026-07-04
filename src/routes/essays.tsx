import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/essays")({
  component: EssaysLayout,
});

function EssaysLayout() {
  return <Outlet />;
}
