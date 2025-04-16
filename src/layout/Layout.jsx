import { AppSidebar, Header } from '@/components/custom'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

function Layout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                {children}
            </SidebarInset>


        </SidebarProvider>
    )
}

export default Layout
