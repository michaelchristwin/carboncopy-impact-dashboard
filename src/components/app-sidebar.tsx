import { ChevronRight, Loader } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "@tanstack/react-router";

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
      title: "Defi",
      url: "#",
      isCollapsible: true,
      items: [
        { title: "Overview", url: "/overview" },
        { title: "Ecological Credits", url: "/ecological-credits" },
        { title: "Waste", url: "#" },
        { title: "Investment", url: "#" },
        { title: "Grants", url: "#" },
        { title: "Lending", url: "#" },
        { title: "Renewable Energy", url: "#" },
        { title: "Venture Funding", url: "#" },
      ],
    },
    {
      title: "Projects",
      url: "#",
      isCollapsible: false,
    },
    {
      title: "Chains",
      url: "#",
      isCollapsible: false,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
                          <span className={`text-[18px] font-[500]`}>
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
                                  className={`data-[status=active]:text-yellow-500 data-[status=active]:font-semibold text-[15px]`}
                                >
                                  <Link to={subItem.url}>
                                    {({ isTransitioning }) => (
                                      <span>
                                        {subItem.title}{" "}
                                        {isTransitioning && (
                                          <Loader
                                            className="animate-spin"
                                            size={15}
                                          />
                                        )}
                                      </span>
                                    )}
                                  </Link>
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
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={`data-[status=active]:text-yellow-500`}
                    >
                      <a href={item.url} className="text-[18px] font-[500]">
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroup>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
