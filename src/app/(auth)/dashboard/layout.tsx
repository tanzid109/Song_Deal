import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center pt-2 shrink-0 gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-auto">
                    <div className="flex items-center justify-center gap-3 px-4">
                        <SidebarTrigger />
                        <h3 className="font-semibold text-2xl">Overview</h3>
                    </div>
                    <div className="mr-10 my-1 h-[72px] w-[72px] rounded-full overflow-hidden">
                        <Link href="/dashboard/settings/basic">
                            <Image
                                src="/assets/user1.jpg"
                                width={72}
                                height={72}
                                alt="profile"
                                className="object-cover w-full h-full"
                            />
                        </Link>
                    </div>
                </header>
                <div className="bg-[#F4FAFD] flex flex-1 flex-col gap-4 p-4 pt-0">
                    {
                        children
                    }
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}



