import {
    CalendarDays,
    Clock3,
    Dumbbell,
    Flame,
    Target,
} from "lucide-react";

import PhaseCard from "./PhaseCard";

const phases = [
    {
        phaseNumber: 1,
        title: "Foundation",
        duration: "Month 1",
        weeks: "Weeks 1–4",
        description:
            "Build a consistent training habit, learn movement patterns, establish comfortable working loads, and create a sustainable routine.",
        focus: [
            "Technique",
            "Consistency",
            "Strength base",
        ],
        active: true,
    },
    {
        phaseNumber: 2,
        title: "Progressive Training",
        duration: "Months 2–4",
        weeks: "Weeks 5–16",
        description:
            "Gradually increase training challenge while maintaining good technique, recovery and a schedule that fits your routine.",
        focus: [
            "Progression",
            "Strength",
            "Recovery",
        ],
    },
    {
        phaseNumber: 3,
        title: "Development",
        duration: "Months 5–9",
        weeks: "Weeks 17–36",
        description:
            "Develop training capacity and build more consistent performance across your planned exercises and sessions.",
        focus: [
            "Capacity",
            "Performance",
            "Consistency",
        ],
    },
    {
        phaseNumber: 4,
        title: "Long-Term Progress",
        duration: "Months 10–15",
        weeks: "Weeks 37–60",
        description:
            "Continue progressive training while adapting the plan to your logged performance, preferences and recovery.",
        focus: [
            "Adaptation",
            "Performance",
            "Sustainability",
        ],
    },
    {
        phaseNumber: 5,
        title: "Advanced Consistency",
        duration: "Months 16–19",
        weeks: "Weeks 61–76",
        description:
            "Refine your established routine, maintain quality training and use accumulated workout data to guide future sessions.",
        focus: [
            "Refinement",
            "Strength",
            "Adherence",
        ],
    },
    {
        phaseNumber: 6,
        title: "Review & Next Cycle",
        duration: "Months 20–23",
        weeks: "Weeks 77–92",
        description:
            "Review the complete training cycle, analyze progress and prepare the next personalized phase based on your results.",
        focus: [
            "Review",
            "Progress",
            "Next cycle",
        ],
    },
];

export default function PlanOverview() {
    return (
        <div className="space-y-6">
            {/* PLAN HEADER */}
            <section className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0a0f0c] p-6 sm:p-8">
                <div className="absolute right-[-100px] top-[-120px] h-[330px] w-[330px] rounded-full bg-emerald-500/10 blur-[120px]" />

                <div className="relative z-10">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(25,212,123,0.8)]" />
                                Personalized roadmap
                            </div>

                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Your training journey
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
                                A long-term training roadmap built around your goals,
                                routine, training experience and recovery.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                                Current status
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(25,212,123,0.8)]" />

                                <span className="text-sm font-medium text-emerald-300">
                                    Draft plan
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <SummaryItem
                            icon={Target}
                            label="Primary goal"
                            value="Build strength"
                        />

                        <SummaryItem
                            icon={CalendarDays}
                            label="Training"
                            value="4 days / week"
                        />

                        <SummaryItem
                            icon={Clock3}
                            label="Session"
                            value="45–60 min"
                        />

                        <SummaryItem
                            icon={Flame}
                            label="Roadmap"
                            value="23 months"
                        />
                    </div>
                </div>
            </section>

            {/* PHASES */}
            <section>
                <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
                            Training roadmap
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                            Training phases
                        </h3>
                    </div>

                    <span className="text-xs text-white/25">
                        6 phases
                    </span>
                </div>

                <div className="space-y-3">
                    {phases.map((phase) => (
                        <PhaseCard
                            key={phase.phaseNumber}
                            {...phase}
                        />
                    ))}
                </div>
            </section>

            {/* FUTURE ADAPTATION */}
            <section className="rounded-3xl border border-emerald-400/10 bg-emerald-400/[0.025] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                        <Dumbbell
                            size={19}
                            className="text-emerald-400"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white/80">
                            Your plan will adapt over time
                        </h3>

                        <p className="mt-2 max-w-3xl text-xs leading-5 text-white/30">
                            In the connected version, Zoro will use your workout
                            history, completed sessions, logged performance and updated
                            preferences when generating future plan adjustments.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function SummaryItem({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof Target;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                <Icon size={16} className="text-emerald-400" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20">
                {label}
            </p>

            <p className="mt-2 text-sm font-medium text-white/75">
                {value}
            </p>
        </div>
    );
}
