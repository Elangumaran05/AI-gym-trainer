
"use client";

import { useEffect } from "react";
import { Check, Clock3, Dumbbell, X } from "lucide-react";
import type { WorkoutExercise } from "./workout-types";

type ExerciseDetailsProps = {
    exercise: WorkoutExercise;
    completed: boolean;
    disabled?: boolean;
    weight: string;
    onWeightChange: (value: string) => void;
    onToggle: () => void;
    onClose: () => void;
};

export default function ExerciseDetails({
    exercise,
    completed,
    disabled = false,
    weight,
    onWeightChange,
    onToggle,
    onClose,
}: ExerciseDetailsProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="exercise-details-title"
                className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#101311] p-5 shadow-2xl sm:rounded-3xl sm:p-7"
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                            Exercise details
                        </p>
                        <h2
                            id="exercise-details-title"
                            className="mt-2 text-xl font-bold text-white sm:text-2xl"
                        >
                            {exercise.name}
                        </h2>
                        <p className="mt-2 text-sm text-white/45">
                            {exercise.muscleGroup} · {exercise.equipment}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close exercise details"
                        className="rounded-xl border border-white/10 p-2 text-white/60 hover:text-white"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <Dumbbell size={17} className="text-emerald-400" />
                        <p className="mt-3 text-lg font-bold text-white">
                            {exercise.sets}
                        </p>
                        <p className="text-xs text-white/40">Sets</p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <Check size={17} className="text-emerald-400" />
                        <p className="mt-3 text-lg font-bold text-white">
                            {exercise.reps}
                        </p>
                        <p className="text-xs text-white/40">Reps</p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <Clock3 size={17} className="text-emerald-400" />
                        <p className="mt-3 text-lg font-bold text-white">
                            {exercise.restSeconds}s
                        </p>
                        <p className="text-xs text-white/40">Rest</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-sm font-semibold text-white">How to perform</h3>
                    <ol className="mt-3 space-y-3">
                        {exercise.instructions.map((instruction, index) => (
                            <li key={`${index}-${instruction}`} className="flex gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                                    {index + 1}
                                </span>
                                <p className="text-sm leading-6 text-white/65">
                                    {instruction}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-5 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        Coach's tip
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                        {exercise.coachingTip}
                    </p>
                </div>

                <div className="mt-5">
                    <label
                        htmlFor="exercise-weight"
                        className="text-sm font-medium text-white/80"
                    >
                        Weight used (optional)
                    </label>
                    <input
                        id="exercise-weight"
                        type="text"
                        value={weight}
                        onChange={(event) => onWeightChange(event.target.value)}
                        placeholder="e.g. 10 kg or bodyweight"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-emerald-400/40"
                    />
                </div>

                <button
                    type="button"
                    disabled={disabled && !completed}
                    onClick={onToggle}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${completed
                            ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                            : "bg-emerald-400 text-black hover:bg-emerald-300"
                        }`}
                >
                    <Check size={17} />
                    {completed ? "Mark as not completed" : "Mark exercise complete"}
                </button>
            </section>
        </div>
    );
}

