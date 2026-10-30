import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Dumbbell,
    Flame,
    Play,
    Target,
    TrendingUp,
} from "lucide-react";

const stats = [
    {
        label: "Workout Streak",
        value: "6 days",
        detail: "Keep the momentum",
        icon: Flame,
    },
    {
        label: "Completed",
        value: "42 sessions",
        detail: "This training cycle",
        icon: CheckCircle2,
    },
    {
        label: "Consistency",
        value: "82%",
        detail: "Last 30 days",
        icon: TrendingUp,
    },
    {
        label: "Plan Progress",
        value: "18%",
        detail: "Current roadmap",
        icon: Target,
    },
];

const exercises = [
    {
        name: "Dumbbell Curl",
        sets: "3 sets × 10 reps",
        duration: "8 min",
    },
    {
        name: "Hammer Curl",
        sets: "3 sets × 12 reps",
        duration: "8 min",
    },
    {
        name: "Lat Pulldown",
        sets: "3 sets × 10 reps",
        duration: "10 min",
    },
    {
        name: "Shoulder Press",
        sets: "3 sets × 10 reps",
        duration: "10 min",
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <section className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0a0f0c] p-6 sm:p-8">
                <div className="absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-emerald-500/10 blur-[100px]" />

                <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(25,212,123,0.8)]" />
                            Training system ready
                        </div>

                        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Stay consistent.
                            <br />
                            <span className="zoro-gradient-text">
                                Let the plan do the organizing.
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
                            Your dashboard will become the control center for your
                            personalized training plan, today's session and long-term
                            progress.
                        </p>
                    </div>

                    <Link
                        href="/today"
                        className="zoro-button inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
                    >
                        Open today's workout
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-white/[0.07] bg-[#0a0f0c] p-5"
                        >
                            <div className="mb-5 flex items-start justify-between">
                                <span className="text-xs text-white/35">
                                    {stat.label}
                                </span>

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                                    <Icon
                                        size={17}
                                        className="text-emerald-400"
                                    />
                                </div>
                            </div>

                            <p className="text-2xl font-semibold tracking-tight text-white">
                                {stat.value}
                            </p>

                            <p className="mt-1 text-xs text-white/25">
                                {stat.detail}
                            </p>
                        </div>
                    );
                })}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
                <div className="rounded-3xl border border-white/[0.07] bg-[#0a0f0c] p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
                                Today's session
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                Upper Body Foundation
                            </h3>

                            <p className="mt-2 text-sm text-white/30">
                                Day 18 · Strength training
                            </p>
                        </div>

                        <div className="hidden rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs text-white/35 sm:block">
                            <div className="flex items-center gap-2">
                                <Clock3 size={14} />
                                ~45–55 min
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 space-y-3">
                        {exercises.map((exercise, index) => (
                            <div
                                key={exercise.name}
                                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-emerald-400/15 hover:bg-emerald-400/[0.025]"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-xs font-medium text-white/35">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-white/80">
                                        {exercise.name}
                                    </p>

                                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/25">
                                        <span>{exercise.sets}</span>
                                        <span className="h-1 w-1 rounded-full bg-white/15" />
                                        <span>{exercise.duration}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] text-white/35 transition hover:border-emerald-400/20 hover:bg-emerald-400/10 hover:text-emerald-400"
                                    aria-label={`Open ${exercise.name}`}
                                >
                                    <Play size={14} fill="currentColor" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/today"
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white/60 transition hover:border-emerald-400/20 hover:bg-emerald-400/5 hover:text-white"
                    >
                        View complete session
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-white/[0.07] bg-[#0a0f0c] p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                                    Weekly activity
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-white">
                                    4 / 5 sessions
                                </h3>
                            </div>

                            <TrendingUp
                                size={20}
                                className="text-emerald-400"
                            />
                        </div>

                        <div className="mt-7 grid grid-cols-7 gap-2">
                            {[
                                { day: "M", value: 1 },
                                { day: "T", value: 1 },
                                { day: "W", value: 0 },
                                { day: "T", value: 1 },
                                { day: "F", value: 1 },
                                { day: "S", value: 0 },
                                { day: "S", value: 0 },
                            ].map((item, index) => (
                                <div
                                    key={`${item.day}-${index}`}
                                    className="text-center"
                                >
                                    <div
                                        className={`mx-auto h-9 w-9 rounded-xl border ${item.value
                                                ? "border-emerald-400/20 bg-emerald-400/15"
                                                : "border-white/[0.06] bg-white/[0.025]"
                                            }`}
                                    />

                                    <p className="mt-2 text-[10px] text-white/25">
                                        {item.day}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-emerald-400/10 bg-emerald-400/[0.035] p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                                <CalendarDays
                                    size={18}
                                    className="text-emerald-400"
                                />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-emerald-400/70">
                                    Next session
                                </p>

                                <p className="mt-1 text-sm font-medium text-white/80">
                                    Tomorrow · Lower Body
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-xs leading-5 text-white/30">
                            Your future workout schedule will appear here once your
                            personalized plan has been accepted.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}