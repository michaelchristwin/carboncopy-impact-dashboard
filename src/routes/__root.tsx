// src/routes/__root.tsx

import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
//@ts-ignore
import styles from "~/styles.css?url";
import type { ReactNode } from "react";
import {
	SidebarProvider,
	SidebarTrigger,
	SidebarInset,
} from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Carboncopy Impact Dasboard",
			},
		],
		links: [
			{
				href: styles,
				rel: "stylesheet",
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png",
			},
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
						<SidebarTrigger className="-ml-1" />
					</header>

					<Outlet />
				</SidebarInset>
			</SidebarProvider>
			<TanStackRouterDevtools />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="dm-sans">
				{children}
				<Scripts />
			</body>
		</html>
	);
}
