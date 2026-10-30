
"use client";

import { useEffect, useRef, useState } from "react";
import {
    Bell,
    CalendarDays,
    Check,
    ChevronDown,
    CircleHelp,
    Dumbbell,
    LogOut,
    Search,
    Settings,
    TrendingUp,
    UserRound,
    X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const pages = [
    { title: "Dashboard", href: "/dashboard", keywords: "home overview", icon: TrendingUp },
    { title: "AI Trainer", href: "/chat", keywords: "ai coach chatbot", icon: Dumbbell },
    { title: "My Plan", href: "/plan", keywords: "training roadmap", icon: Dumbbell },
    { title: "Today's Workout", href: "/today", keywords: "exercise session", icon: Check },
    { title: "Calendar", href: "/calendar", keywords: "schedule dates", icon: CalendarDays },
    { title: "Progress", href: "/progress", keywords: "statistics history", icon: TrendingUp },
    { title: "Changes", href: "/changes", keywords: "modify plan", icon: Settings },
    { title: "Settings", href: "/settings", keywords: "account preferences", icon: Settings },
    { title: "Help", href: "/help", keywords: "support faq", icon: CircleHelp },
];

const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/chat": "AI Trainer",
    "/plan": "My Plan",
    "/today": "Today's Workout",
    "/calendar": "Calendar",
    "/progress": "Progress",
    "/changes": "Changes",
    "/settings": "Settings",
    "/help": "Help",
};

export default function Topbar() {
    const pathname = usePathname();
    const router = useRouter();

    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [notificationRead, setNotificationRead] = useState(false);

    const searchInput = useRef<HTMLInputElement>(null);
    const title = pageTitles[pathname] ?? "Zoro AI Trainer";

    useEffect(() => {
        if (searchOpen) searchInput.current?.focus();
    }, [searchOpen]);

    useEffect(() => {
        setSearchOpen(false);
        setNotificationsOpen(false);
        setProfileOpen(false);
    }, [pathname]);

    const filteredPages = pages.filter((page) =>
        `${page.title} ${page.keywords}`
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase())
    );

    function navigate(href: string) {
        setSearchOpen(false);
        setNotificationsOpen(false);
        setProfileOpen(false);
        setSearchQuery("");
        router.push(href);
    }

    return (
        <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#050706]/85 backdrop-blur-xl">
            <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400/70">
                        Zoro AI Trainer
                    </p>
                    <h1 className="mt-1 truncate text-lg font-semibold tracking-tight text-white">
                        {title}
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    {/* SEARCH */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setSearchOpen((open) => !open);
                                setNotificationsOpen(false);
                                setProfileOpen(false);
                            }}
                            aria-label="Search pages"
                            aria-expanded={searchOpen}
                            className="flex h-10 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-sm text-white/60 transition hover:border-emerald-400/30 hover:text-white"
                        >
                            <Search size={16} />
                            <span className="hidden sm:inline">Search</span>
                        </button>

                        {searchOpen && (
                            <div className="absolute right-0 top-12 z-50 w-[min(88vw,340px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0c] shadow-2xl">
                                <div className="flex items-center gap-2 border-b border-white/10 px-3">
                                    <Search size={16} className="text-white/40" />
                                    <input
                                        ref={searchInput}
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                        onKeyDown={(event) => {
                                            if (event.key === "Escape") setSearchOpen(false);
                                            if (event.key === "Enter" && filteredPages[0]) {
                                                navigate(filteredPages[0].href);
                                            }
                                        }}
                                        placeholder="Search pages..."
                                        className="h-12 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                    />
                                    <button
                                        type="button"
                                        aria-label="Close search"
                                        onClick={() => {
                                            setSearchOpen(false);
                                            setSearchQuery("");
                                        }}
                                        className="text-white/40 hover:text-white"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="max-h-72 overflow-y-auto p-2">
                                    {filteredPages.length > 0 ? (
                                        filteredPages.map((page) => {
                                            const Icon = page.icon;
                                            return (
                                                <button
                                                    key={page.href}
                                                    type="button"
                                                    onClick={() => navigate(page.href)}
                                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-white/75 hover:bg-emerald-400/10 hover:text-white"
                                                >
                                                    <Icon size={17} className="text-emerald-400" />
                                                    {page.title}
                                                </button>
                                            );
                                        })
                                    ) : (
                                        <p className="px-3 py-6 text-center text-sm text-white/40">
                                            No matching pages found.
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* NOTIFICATIONS */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setNotificationsOpen((open) => !open);
                                setSearchOpen(false);
                                setProfileOpen(false);
                            }}
                            aria-label="Notifications"
                            aria-expanded={notificationsOpen}
                            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/45 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            <Bell size={18} />
                            {!notificationRead && (
                                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            )}
                        </button>

                        {notificationsOpen && (
                            <div className="absolute right-0 top-12 z-50 w-[min(88vw,320px)] rounded-2xl border border-white/10 bg-[#0b0d0c] p-4 shadow-2xl">
                                <div className="flex items-center justify-between gap-2">
                                    <h2 className="font-semibold text-white">Notifications</h2>
                                    <button
                                        type="button"
                                        onClick={() => setNotificationRead(true)}
                                        className="text-xs text-emerald-400 hover:text-emerald-300"
                                    >
                                        Mark all read
                                    </button>
                                </div>

                                <div className="mt-4 flex gap-3 rounded-xl border border-white/[0.07] p-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                                        <Dumbbell size={17} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Your training awaits</p>
                                        <p className="mt-1 text-xs leading-5 text-white/45">
                                            Visit Today to review your planned workout.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => navigate("/today")}
                                            className="mt-2 text-xs text-emerald-400 hover:text-emerald-300"
                                        >
                                            Open workout →
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-3 text-[11px] text-white/30">
                                    Sample notification · Live reminders are not connected yet.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* PROFILE MENU */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setProfileOpen((open) => !open);
                                setSearchOpen(false);
                                setNotificationsOpen(false);
                            }}
                            aria-label="Account menu"
                            aria-expanded={profileOpen}
                            className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2 py-2 transition hover:bg-white/[0.05]"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                                <UserRound size={15} className="text-emerald-400" />
                            </div>
                            <ChevronDown
                                size={14}
                                className={`hidden text-white/40 transition sm:block ${profileOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {profileOpen && (
                            <div className="absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0c] shadow-2xl">
                                <div className="border-b border-white/10 px-4 py-4">
                                    <p className="text-sm font-semibold text-white">Your Profile</p>
                                    <p className="mt-1 text-xs text-white/40">
                                        Personal training workspace
                                    </p>
                                </div>

                                <div className="p-2">

                                    <button
                                        type="button"
                                        onClick={() => navigate("/settings")}
                                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white"
                                    >
                                        <UserRound size={16} />
                                        My Profile
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigate("/settings")}
                                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white"
                                    >
                                        <Settings size={16} /> Settings
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/help")}
                                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white"
                                    >
                                        <CircleHelp size={16} /> Help Center
                                    </button>
                                    <div className="my-1 border-t border-white/10" />
                                    <button
                                        type="button"
                                        onClick={() => navigate("/login")}
                                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-400 hover:bg-red-500/10"
                                    >
                                        <LogOut size={16} /> Sign out
                                    </button>
                                </div>

                                <p className="px-4 pb-3 text-[10px] leading-4 text-white/30">
                                    Preview only. Real authentication sign-out will be connected later.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
