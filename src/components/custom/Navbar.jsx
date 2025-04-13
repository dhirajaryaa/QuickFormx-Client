import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

function Navbar({ navMainMenu }) {
  
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {navMainMenu.map((item) => (
            <SidebarMenuItem className="mt-1" key={item.title}>
              <NavLink to={item.url}>
                {({ isActive }) => (
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`py-6 text-sm sm:text-[16px] font-base hover:bg-blue-100/50 ${isActive ? "bg-blue-200/50" : ""
                      }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default Navbar;
