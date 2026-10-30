"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    CalendarDays,
    Gauge,
    MessageSquareText,
    TrendingUp,
} from "lucide-react";

const items = [
    {
        label: "Home",
        href: "/dashboard",
        icon: Gauge,
    },
    {
        label: "Trainer",
        href: "/chat",
        icon: MessageSquareText,
    },
    {
        label: "Calendar",
        href: "/calendar",
        icon: CalendarDays,
    },
    {
        label: "Progress",
        href: "/progress",
        icon: TrendingUp,
    },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.07] bg-[#080c09]/95 px-3 py-2 backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-lg grid-cols-4 gap-1">
                {items.map((item) => {
                    const Icon = item.icon;

                    const isActive =
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] transition ${isActive
                                    ? "bg-emerald-400/10 text-emerald-300"
                                    : "text-white/30"
                                }`}
                        >
                            <Icon
                                size={18}
                                className={
                                    isActive
                                        ? "text-emerald-400"
                                        : "text-white/35"
                                }
                            />

                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
