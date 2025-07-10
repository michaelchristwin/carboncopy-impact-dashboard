import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { ChevronRight, Loader } from "lucide-react";
import { NavLink } from "react-router";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "~/components/ui/sidebar";

// Menu items.
type SidebarData = {
	navMain: {
		title: string;
		url: string;
		isCollapsible?: boolean;
		items?: {
			title: string;
			url: string;
			isActive?: boolean;
		}[];
	}[];
};

const data: SidebarData = {
	navMain: [
		{
			title: "ReFi",
			url: "/refi",
			isCollapsible: true,
			items: [
				{ title: "Overview", url: "/overview" },
				{ title: "Ecological Credits", url: "/ecological-credits" },
				{ title: "Waste", url: "/waste" },
				{ title: "Investment", url: "/investment" },
				{ title: "Grants", url: "/grants" },
				{ title: "Lending", url: "/lending" },
				{ title: "UBI", url: "/ubi" },
				{ title: "Renewable Energy", url: "/renewable-energy" },
				{ title: "Venture Funding", url: "/venture-funding" },
			],
		},
		{
			title: "Projects",
			url: "/projects",
			isCollapsible: false,
		},
		{
			title: "Chains",
			url: "/chains",
			isCollapsible: false,
		},
	],
};

export function AppSidebar() {
	return (
		<Sidebar variant="inset">
			<SidebarContent className="bg-white">
				<SidebarGroup>
					<SidebarGroupLabel>Carboncopy Impact Dashboard </SidebarGroupLabel>
					<SidebarGroupContent>
						{data.navMain.map((item) => {
							// Render collapsible items
							if (item.isCollapsible && item.items) {
								return (
									<Collapsible
										key={item.title}
										defaultOpen
										className="group/collapsible"
									>
										<SidebarGroup>
											<SidebarGroupLabel
												asChild
												className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
											>
												<CollapsibleTrigger>
													<span className={`text-[20px] font-[500]`}>
														{item.title}{" "}
													</span>
													<ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
												</CollapsibleTrigger>
											</SidebarGroupLabel>
											<CollapsibleContent>
												<SidebarGroupContent>
													<SidebarMenu>
														{item.items.map((subItem) => (
															<SidebarMenuItem key={subItem.title}>
																<SidebarMenuButton
																	asChild
																	isActive={subItem.isActive}
																	className={`text-[15px]`}
																>
																	<NavLink
																		to={item.url + subItem.url}
																		className="flex justify-between items-center"
																	>
																		{({ isPending, isActive }) => (
																			<>
																				<span
																					className={`${
																						isActive &&
																						"text-yellow-500 font-semibold"
																					}`}
																				>
																					{subItem.title}
																				</span>
																				{isPending && (
																					<Loader
																						className="animate-spin"
																						size={10}
																					/>
																				)}
																			</>
																		)}
																	</NavLink>
																</SidebarMenuButton>
															</SidebarMenuItem>
														))}
													</SidebarMenu>
												</SidebarGroupContent>
											</CollapsibleContent>
										</SidebarGroup>
									</Collapsible>
								);
							}

							// Handle items without subitems (if any)
							return (
								<SidebarGroup key={item.title} className={`list-none`}>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton asChild className={``}>
												<NavLink
													to={item.url}
													className="text-[20px] font-[500] flex justify-between items-center"
												>
													{({ isActive, isPending }) => (
														<>
															<span
																className={`${
																	isActive && "text-yellow-500 font-semibold"
																}`}
															>
																{item.title}
															</span>
															{isPending && (
																<Loader className="animate-spin" size={10} />
															)}
														</>
													)}
												</NavLink>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroup>
							);
						})}
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
