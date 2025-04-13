import {
    ArrowUpCircleIcon,
    BarChartIcon,
    CameraIcon,
    ClipboardListIcon,
    DatabaseIcon,
    FileCodeIcon,
    FileIcon,
    FileTextIcon,
    FolderIcon,
    HelpCircleIcon,
    LayoutDashboardIcon,
    ListIcon,
    SearchIcon,
    SettingsIcon,
    UsersIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Navbar } from "."
import { NotepadText } from "lucide-react";
import { Inbox } from "lucide-react";


const navMainMenu = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: < LayoutDashboardIcon className="size-9"/>,
    },
    {
        title: "Forms",
        url: "/forms",
        icon: <NotepadText className="size-9"/>,
    },
    {
        title: "Submissions",
        url: "/submission",
        icon: <Inbox className="size-9"/>,
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: < BarChartIcon className="size-9"/>,
    },
]

function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <Link href="/">
                                <span className="text-xl">🧩</span>
                                <span className="text-base font-semibold">QuickFormX</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {/* link list  */}
                <Navbar navMainMenu={navMainMenu} />
                {/* link list  */}
            </SidebarContent>
            <SidebarFooter>
                Love BY ❤️ <span className="underline">Dhiraj Arya</span>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar