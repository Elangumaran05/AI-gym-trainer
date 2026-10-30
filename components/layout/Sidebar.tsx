"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Activity,
    CalendarDays,
    CircleHelp,
    Dumbbell,
    Gauge,
    HeartPulse,
    MessageSquareText,
    Settings,
    TrendingUp,
    UserRound,
} from "lucide-react";
const pathname = usePathname();
const router = useRouter();
const navigation = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: Gauge,
    },
    {
        label: "AI Trainer",
        href: "/chat",
        icon: MessageSquareText,
    },
    {
        label: "My Plan",
        href: "/plan",
        icon: Dumbbell,
    },
    {
        label: "Today",
        href: "/today",
        icon: Activity,
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
    {
        label: "Changes",
        href: "/changes",
        icon: HeartPulse,
    },
];

const secondaryNavigation = [
    {
        label: "Settings",
        href: "/settings",
        icon: Settings,
    },
    {
        label: "Help",
        href: "/help",
        icon: CircleHelp,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-white/[0.06] bg-[#080c09] lg:flex lg:flex-col">
            <div className="flex h-full min-h-0 flex-col">
                {/* HEADER */}
                <div className="shrink-0 px-4 pb-2 pt-5">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-2xl px-3 py-2"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                            <Dumbbell
                                size={20}
                                className="text-emerald-400"
                            />
                        </div>

                        <div>
                            <p className="text-base font-semibold text-white">
                                Zoro
                            </p>

                            <p className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                                AI Trainer
                            </p>
                        </div>
                    </Link>
                </div>

                {/* SCROLLABLE NAVIGATION */}
                <div className="zoro-scrollbar min-h-0 flex-1 overflow-y-auto px-4 py-5">
                    <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                        Training
                    </div>

                    <nav className="space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;

                            const isActive =
                                pathname === item.href ||
                                pathname.startsWith(`${item.href}/`);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${isActive
                                        ? "bg-emerald-400/10 text-emerald-300"
                                        : "text-white/45 hover:bg-white/[0.035] hover:text-white"
                                        }`}
                                >
                                    <Icon
                                        size={18}
                                        className={
                                            isActive
                                                ? "text-emerald-400"
                                                : "text-white/30 group-hover:text-white/70"
                                        }
                                    />

                                    <span>{item.label}</span>

                                    {isActive && (
                                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(25,212,123,0.8)]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                        Account
                    </div>

                    <nav className="space-y-1">
                        {secondaryNavigation.map((item) => {
                            const Icon = item.icon;

                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${isActive
                                        ? "bg-emerald-400/10 text-emerald-300"
                                        : "text-white/45 hover:bg-white/[0.035] hover:text-white"
                                        }`}
                                >
                                    <Icon
                                        size={18}
                                        className={
                                            isActive
                                                ? "text-emerald-400"
                                                : "text-white/30"
                                        }
                                    />

                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* BOTTOM FIXED AREA */}
                <div className="shrink-0 border-t border-white/[0.06] bg-[#080c09] px-4 pb-5 pt-4">
                    <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(25,212,123,0.8)]" />

                            <span className="text-xs font-medium text-emerald-300">
                                TRAINING MODE
                            </span>
                        </div>

                        <p className="text-xs leading-5 text-white/35">
                            Your personalized training workspace is ready.
                        </p>
                    </div>

                    <div className="mt-4 flex items-center gap-3 px-2">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                            <UserRound
                                size={16}
                                className="text-white/50"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-white/80">
                                Your Profile
                            </p>

                            <p className="truncate text-[11px] text-white/25">
                                Personal workspace
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}