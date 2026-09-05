import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/figures")({
  component: FiguresLayout,
});

function FiguresLayout() {
  return <Outlet />;
}
