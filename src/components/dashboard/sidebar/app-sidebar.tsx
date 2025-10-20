"use client"

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher"
import { NavMain } from "./nav-main"
import { usePathname } from "next/navigation"
import { TbLayoutDashboardFilled, TbCards, TbCurrencyDollar, TbSettings } from "react-icons/tb";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/assets/user.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: TbLayoutDashboardFilled,
        },
        {
            title: "Catalog Status",
            url: "/dashboard/catalog",
            icon: TbCards,
        },
        {
            title: "Funds & Withdrawals",
            url: "/dashboard/fund",
            icon: TbCurrencyDollar,
        },
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: TbSettings,
            items: [
                {
                    title: "Basic",
                    url: "/dashboard/settings/basic",
                },
                {
                    title: "Change Password",
                    url: "/dashboard/settings/changepassword",
                },
                {
                    title: "Notification",
                    url: "/dashboard/settings/notification",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    // Add `isActive` based on current path for main nav
    const navItems = data.navMain.map((item) => ({
        ...item,
        isActive: pathname === item.url,
    }))


    return (
        <Sidebar className="bg-white" {...props}>
            <SidebarHeader className="bg-white">
                <TeamSwitcher />
            </SidebarHeader>
            <SidebarContent className="bg-white ">
                <NavMain items={navItems} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}