
"use client";

import { ArrowRight, Flame, Play } from "lucide-react";

type WorkoutHeaderProps = {
    started: boolean;
    onStart: () => void;
};

export default function WorkoutHeader({
    started,
    onStart,
}: WorkoutHeaderProps) {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#101411] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-emerald-400/[0.08] blur-3xl" />

            <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    <Flame size={15} />
                    Today's mission
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Upper Body <span className="text-emerald-400">Training</span>
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                    Focus on controlled movements, steady breathing, and good technique.
                    Complete each exercise at your own pace.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60">
                        5 exercises
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60">
                        About 35 minutes
                    </span>
                    <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-300">
                        Beginner-friendly
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onStart}
                    disabled={started}
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300 disabled:cursor-default disabled:opacity-70"
                >
                    {started ? "Workout started" : "Start workout"}
                    {started ? <Flame size={17} /> : <Play size={17} />}
                    {!started && <ArrowRight size={15} />}
                </button>
            </div>
        </section>
    );
}

