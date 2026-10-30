
"use client";

import { CheckCircle2, Circle, Trophy } from "lucide-react";

type WorkoutCardProps = {
    completedCount: number;
    totalExercises: number;
    durationMinutes: number;
    started: boolean;
    workoutFinished: boolean;
    onFinish: () => void;
};

export default function WorkoutCard({
    completedCount,
    totalExercises,
    durationMinutes,
    started,
    workoutFinished,
    onFinish,
}: WorkoutCardProps) {
    const progress =
        totalExercises > 0
            ? Math.round((completedCount / totalExercises) * 100)
            : 0;

    const canFinish =
        started && totalExercises > 0 && completedCount === totalExercises;

    return (
        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Session progress
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-white">
                        {workoutFinished ? "Mission complete" : "Keep moving forward"}
                    </h2>
                    <p className="mt-1 text-sm text-white/45">
                        {completedCount} of {totalExercises} exercises completed
                    </p>
                </div>

                {workoutFinished ? (
                    <Trophy size={25} className="text-emerald-300" />
                ) : (
                    <Circle size={25} className="text-white/25" />
                )}
            </div>

            <div
                className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.07]"
                role="progressbar"
                aria-label="Workout completion"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
            >
                <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-white/40">{progress}% complete</span>
                <span className="text-white/40">
                    {durationMinutes} min planned
                </span>
            </div>

            {workoutFinished ? (
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] p-4 text-sm text-emerald-300">
                    <CheckCircle2 size={18} />
                    Great work! You've completed today's sample workout.
                </div>
            ) : (
                <button
                    type="button"
                    disabled={!canFinish}
                    onClick={onFinish}
                    className="mt-5 w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-white/[0.06] disabled:text-white/30"
                >
                    {canFinish ? "Finish workout" : "Complete all exercises to finish"}
                </button>
            )}
        </section>
    );
}

