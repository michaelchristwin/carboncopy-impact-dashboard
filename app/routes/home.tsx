import { redirect } from "react-router";

export function meta() {
	return [
		{ title: "Carboncopy Impact Dashboard" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader() {
	return redirect("/refi/overview");
}
