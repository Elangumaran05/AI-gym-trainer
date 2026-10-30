"use client";

import {
    ChevronDown,
    Clock3,
    Dumbbell,
    LockKeyhole,
    Target,
} from "lucide-react";
import { useState } from "react";

type PhaseCardProps = {
    phaseNumber: number;
    title: string;
    duration: string;
    description: string;
    focus: string[];
    weeks: string;
    active?: boolean;
};

export default function PhaseCard({
    phaseNumber,
    title,
    duration,
    description,
    focus,
    weeks,
    active = false,
}: PhaseCardProps) {
    const [open, setOpen] = useState(active);

    return (
        <div
            className={`overflow-hidden rounded-3xl border transition-all duration-300 ${open
                    ? "border-emerald-400/15 bg-[#0b110d]"
                    : "border-white/[0.07] bg-[#090d0b]"
                }`}
        >
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="w-full text-left"
            >
                <div className="flex items-center gap-4 p-5 sm:p-6">
                    <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-semibold ${active
                                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                                : "border-white/[0.07] bg-white/[0.025] text-white/35"
                            }`}
                    >
                        {String(phaseNumber).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base font-semibold text-white">
                                {title}
                            </h3>

                            {active && (
                                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-emerald-400">
                                    Current phase
                                </span>
                            )}
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/25">
                            <span>{duration}</span>

                            <span className="h-1 w-1 rounded-full bg-white/15" />

                            <span>{weeks}</span>
                        </div>
                    </div>

                    <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] text-white/30 transition-transform duration-300 ${open ? "rotate-180" : ""
                            }`}
                    >
                        <ChevronDown size={17} />
                    </div>
                </div>
            </button>

            {open && (
                <div className="border-t border-white/[0.06] px-5 pb-6 pt-5 sm:px-6">
                    <p className="max-w-3xl text-sm leading-6 text-white/40">
                        {description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                                <Target
                                    size={16}
                                    className="text-emerald-400"
                                />
                            </div>

                            <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                                Phase focus
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {focus.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-1.5 text-[11px] text-white/45"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                                <Clock3
                                    size={16}
                                    className="text-emerald-400"
                                />
                            </div>

                            <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                                Structure
                            </p>

                            <p className="mt-3 text-sm text-white/55">
                                {weeks}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                                <Dumbbell
                                    size={16}
                                    className="text-emerald-400"
                                />
                            </div>

                            <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                                Exercise focus
                            </p>

                            <p className="mt-3 text-sm text-white/55">
                                Progressive training
                            </p>
                        </div>
                    </div>

                    {!active && (
                        <div className="mt-5 flex items-center gap-2 text-[11px] text-white/20">
                            <LockKeyhole size={13} />
                            This phase will unlock as your training progresses.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
