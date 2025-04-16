import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { useSelector } from 'react-redux';

function Header() {
    const {activeTab} =  useSelector((state)=>state.ui);
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear sticky top-0 bg-background">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base sm:text-xl font-medium">{activeTab}</h1>
      </div>
      <div>
        user data
      </div>
    </header>
  )
}

export default Header
