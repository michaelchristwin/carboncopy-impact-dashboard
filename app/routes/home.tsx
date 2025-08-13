import { redirect } from "react-router";

export function meta() {
  return [
    { title: "CARBON Copy ReFi Impact Dashboard" },
    { name: "description", content: "Dashboard for CARBON Copy ReFi Impacts" },
  ];
}

export function loader() {
  return redirect("/refi/overview");
}
