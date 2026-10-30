
"use client";

import { ArrowUpRight, Clock3, Dumbbell } from "lucide-react";
import type { WorkoutExercise } from "./workout-types";
import CompleteButton from "./CompleteButton";

type ExerciseCardProps = {
    exercise: WorkoutExercise;
    index: number;
    completed: boolean;
    disabled?: boolean;
    onToggle: () => void;
    onOpen: () => void;
};

export default function ExerciseCard({
    exercise,
    index,
    completed,
    disabled = false,
    onToggle,
    onOpen,
}: ExerciseCardProps) {
    return (
        <article
            className={`rounded-2xl border p-4 transition sm:p-5 ${completed
                    ? "border-emerald-400/15 bg-emerald-400/[0.035]"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-emerald-400/15"
                }`}
        >
            <div className="flex items-start gap-3 sm:gap-4">
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-semibold ${completed
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-white/[0.045] text-white/35"
                        }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                    <button
                        type="button"
                        onClick={onOpen}
                        className="group flex items-center gap-2 text-left"
                    >
                        <h3 className="text-sm font-semibold text-white/90 sm:text-base">
                            {exercise.name}
                        </h3>
                        <ArrowUpRight
                            size={15}
                            className="text-white/20 transition group-hover:text-emerald-400"
                        />
                    </button>

                    <p className="mt-1 text-xs text-white/30">
                        {exercise.muscleGroup} · {exercise.equipment}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/45">
                        <span className="inline-flex items-center gap-1.5">
                            <Dumbbell size={14} className="text-emerald-400/70" />
                            {exercise.sets} sets × {exercise.reps}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                            <Clock3 size={14} className="text-emerald-400/70" />
                            {exercise.restSeconds}s rest
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.05] pt-4">
                <button
                    type="button"
                    onClick={onOpen}
                    className="text-xs text-emerald-400/80 transition hover:text-emerald-300"
                >
                    View instructions
                </button>

                <CompleteButton
                    completed={completed}
                    disabled={disabled && !completed}
                    onClick={onToggle}
                />
            </div>
        </article>
    );
}

