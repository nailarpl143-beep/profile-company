import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
<Sidebar className="!bg-blue-600">

  <SidebarHeader className="!bg-blue-600 text-white">
    <SidebarMenu>

      <SidebarMenuItem>
        <div>
          <img src="/img/smk_mvp_ars_logo_white.png" alt="Logo" className="mt-4 ml-2 h-15 mx-auto mb-4 object-contain" />
        </div>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <h1 className="mt-3 ml-[8px] text-base font-bold tracking-tight">Menu item</h1>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton className="text-white hover:bg-blue-700 hover:text-white mt-[10px] tracking-tight">
          <p>Dashboard</p>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton className="text-white hover:bg-blue-700 hover:text-white tracking-tight">
          <p>User</p>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton className="text-white hover:bg-blue-700 hover:text-white tracking-tight">
          <p>Category</p>
        </SidebarMenuButton>
      </SidebarMenuItem>

    </SidebarMenu>
  </SidebarHeader>

  <SidebarContent className="!bg-blue-600 text-white">
    <SidebarGroup/>
    <SidebarGroup/>
  </SidebarContent> 
  <SidebarFooter className="!bg-blue-600 text-white"/>
</Sidebar>
  )
}