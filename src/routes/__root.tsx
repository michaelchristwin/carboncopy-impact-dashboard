import { createRootRoute, Outlet } from "@tanstack/react-router";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
          </header>

          <Outlet />
        </SidebarInset>
      </SidebarProvider>

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
});
