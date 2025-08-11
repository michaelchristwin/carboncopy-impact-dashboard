import { redirect } from "react-router";

export function meta() {
  return [
    { title: "Carboncopy Impact Dashboard" },
    { name: "description", content: "Dashboard for Carboncopy Impacts" },
  ];
}

export function loader() {
  return redirect("/refi/overview");
}
