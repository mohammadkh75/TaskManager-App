import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ApplicationLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    
    return (
        
        <div className="flex  min-h-screen">
             <div className="sm:w-1/12 md:w-1/6">
            <SidebarProvider>
                <SidebarTrigger className="bg-white ml-1 mt-1" />
                <AppSideBar />
            </SidebarProvider>
            </div>
          <div className="sm:w-11/12 md:w-5/6">
          {children}
          </div>

        </div>
    
           
    );
  }