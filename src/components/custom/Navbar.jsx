import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"

function Navbar({ navMainMenu }) {
  const {activeTab} = useSelector(state=>state.ui);  
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {navMainMenu.map((item) => (
            <Link key={item.title} to={item.url}>
            <SidebarMenuItem  className={'mt-1'}>
              <SidebarMenuButton tooltip={item.title} className={`py-6 text-sm sm:text-[16px] font-base  hover:bg-blue-100/50 ${activeTab === item.title ? "bg-blue-200/50":""}`}>
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default Navbar
