import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("refi", "routes/refi/refi.tsx", [
		index("routes/refi/index.tsx"),
		route("overview", "routes/refi/overview.tsx"),
		route("ecological-credits", "routes/refi/ecological-credits.tsx"),
		route("waste", "routes/refi/waste.tsx"),
		route("investment", "routes/refi/investment.tsx"),
		route("grants", "routes/refi/grants.tsx"),
		route("lending", "routes/refi/lending.tsx"),
		route("ubi", "routes/refi/ubi.tsx"),
		route("renewable-energy", "routes/refi/renewable-energy.tsx"),
		route("venture-funding", "routes/refi/venture-funding.tsx"),
	]),
	route("chains", "routes/chains.tsx"),
	route("projects", "routes/projects.tsx"),
] satisfies RouteConfig;
