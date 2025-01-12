

import * as React from "react"
import {
    AudioWaveform,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Route,
    Calculator,
    Clock
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "Abel",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Malla Curricular",
            url: "#",
            icon: Route,
            isActive: true,
            items: [
                {
                    title: "Nuevo",
                    url: "#",
                },
                {
                    title: "Guardado",
                    url: "#",
                }
            ],
        },
        {
            title: "Calculadora",
            url: "#",
            icon: Calculator,
            items: [
                {
                    title: "Para habilitar",
                    url: "#",
                },
                {
                    title: "Para nota",
                    url: "#",
                }
            ],
        },
        {
            title: "Horario",
            url: "#",
            icon: Clock,
            items: [
                {
                    title: "Nuevo",
                    url: "#",
                },
                {
                    title: "Guardado",
                    url: "#",
                }
            ],
        }
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar(props) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
