
"use client";

import { useState } from "react";
import { Dumbbell, ShieldCheck } from "lucide-react";
import type { WorkoutExercise } from "./workout-types";
import WorkoutHeader from "./WorkoutHeader";
import WorkoutCard from "./WorkoutCard";
import ExerciseCard from "./ExerciseCard";
import ExerciseDetails from "./ExerciseDetails";

const exercises: WorkoutExercise[] = [
    {
        id: "chest-press",
        name: "Machine Chest Press",
        muscleGroup: "Chest",
        equipment: "Chest press machine",
        sets: 3,
        reps: "10–12",
        restSeconds: 90,
        durationMinutes: 7,
        instructions: [
            "Adjust the seat so the handles are around mid-chest height.",
            "Keep your back supported and your feet flat on the floor.",
            "Press the handles forward smoothly without locking your elbows.",
            "Return slowly and use a comfortable range of motion.",
        ],
        coachingTip:
            "Start with a light resistance and focus on controlled movement rather than lifting heavier.",
    },
    {
        id: "lat-pulldown",
        name: "Lat Pulldown",
        muscleGroup: "Back",
        equipment: "Lat pulldown machine",
        sets: 3,
        reps: "10–12",
        restSeconds: 90,
        durationMinutes: 7,
        instructions: [
            "Adjust the thigh pad so you feel stable in the seat.",
            "Grip the bar slightly wider than shoulder width.",
            "Pull the bar toward your upper chest while keeping your torso steady.",
            "Let the bar rise slowly without losing control.",
        ],
        coachingTip:
            "Avoid swinging your body or pulling the bar behind your neck.",
    },
    {
        id: "cable-row",
        name: "Seated Cable Row",
        muscleGroup: "Back",
        equipment: "Cable row machine",
        sets: 3,
        reps: "10–12",
        restSeconds: 75,
        durationMinutes: 7,
        instructions: [
            "Sit upright with your knees slightly bent and feet supported.",
            "Hold the handle and begin with your arms comfortably extended.",
            "Pull toward your torso while keeping your shoulders relaxed.",
            "Return the handle slowly without rounding your back.",
        ],
        coachingTip:
            "Move smoothly and avoid using momentum to pull the cable.",
    },
    {
        id: "dumbbell-curl",
        name: "Dumbbell Curl",
        muscleGroup: "Biceps",
        equipment: "Dumbbells",
        sets: 2,
        reps: "10–12",
        restSeconds: 60,
        durationMinutes: 6,
        instructions: [
            "Stand comfortably with a dumbbell in each hand.",
            "Keep your elbows close to your sides.",
            "Curl the weights upward without swinging your torso.",
            "Lower them slowly to the starting position.",
        ],
        coachingTip:
            "Choose a manageable weight and keep your wrists comfortable and steady.",
    },
    {
        id: "hammer-curl",
        name: "Hammer Curl",
        muscleGroup: "Biceps and forearms",
        equipment: "Dumbbells",
        sets: 2,
        reps: "10–12",
        restSeconds: 60,
        durationMinutes: 6,
        instructions: [
            "Hold the dumbbells by your sides with palms facing inward.",
            "Keep your elbows close to your torso.",
            "Lift the weights smoothly while maintaining the same hand position.",
            "Lower the weights slowly and with control.",
        ],
        coachingTip:
            "Use a comfortable range of motion and stop if you feel pain.",
    },
];

export default function TodayWorkout() {
    const [started, setStarted] = useState(false);
    const [completedIds, setCompletedIds] = useState<string[]>([]);
    const [selectedExercise, setSelectedExercise] =
        useState<WorkoutExercise | null>(null);
    const [weights, setWeights] = useState<Record<string, string>>({});
    const [workoutFinished, setWorkoutFinished] = useState(false);

    const completedCount = completedIds.length;
    const totalDuration = exercises.reduce(
        (total, exercise) => total + exercise.durationMinutes,
        0
    );

    function toggleExercise(id: string) {
        if (!started || workoutFinished) return;

        setCompletedIds((current) =>
            current.includes(id)
                ? current.filter((completedId) => completedId !== id)
                : [...current, id]
        );
    }

    function finishWorkout() {
        if (started && completedCount === exercises.length) {
            setWorkoutFinished(true);
        }
    }

    return (
        <main className="mx-auto w-full max-w-6xl space-y-6 pb-10">
            <WorkoutHeader
                started={started}
                onStart={() => setStarted(true)}
            />

            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
                <section className="min-w-0 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                                Training plan
                            </p>
                            <h2 className="mt-1 text-xl font-bold text-white">
                                Exercise checklist
                            </h2>
                        </div>

                        <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-white/50">
                            {completedCount}/{exercises.length} done
                        </span>
                    </div>

                    {!started && (
                        <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 text-sm leading-6 text-white/55">
                            Start your workout above to unlock the exercise checklist.
                            Open any exercise to read its instructions first.
                        </div>
                    )}

                    <div className="space-y-3">
                        {exercises.map((exercise, index) => (
                            <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                                index={index}
                                completed={completedIds.includes(exercise.id)}
                                disabled={!started || workoutFinished}
                                onToggle={() => toggleExercise(exercise.id)}
                                onOpen={() => setSelectedExercise(exercise)}
                            />
                        ))}
                    </div>
                </section>

                <aside className="space-y-4 lg:sticky lg:top-6">
                    <WorkoutCard
                        completedCount={completedCount}
                        totalExercises={exercises.length}
                        durationMinutes={totalDuration}
                        started={started}
                        workoutFinished={workoutFinished}
                        onFinish={finishWorkout}
                    />

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={18} className="text-emerald-400" />
                            <h3 className="text-sm font-semibold text-white">
                                Train with control
                            </h3>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                            Use manageable resistance, rest when needed, and prioritise
                            good technique. Stop if you experience pain or feel unwell.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                        <div className="flex items-center gap-2">
                            <Dumbbell size={18} className="text-emerald-400" />
                            <h3 className="text-sm font-semibold text-white">
                                Session summary
                            </h3>
                        </div>

                        <div className="mt-4 space-y-3 text-sm">
                            <div className="flex justify-between gap-3">
                                <span className="text-white/40">Exercises</span>
                                <span className="text-white/75">{exercises.length}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <span className="text-white/40">Planned duration</span>
                                <span className="text-white/75">{totalDuration} min</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <span className="text-white/40">Status</span>
                                <span className="text-emerald-300">
                                    {workoutFinished
                                        ? "Completed"
                                        : started
                                            ? "In progress"
                                            : "Not started"}
                                </span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {selectedExercise && (
                <ExerciseDetails
                    exercise={selectedExercise}
                    completed={completedIds.includes(selectedExercise.id)}
                    disabled={!started || workoutFinished}
                    weight={weights[selectedExercise.id] ?? ""}
                    onWeightChange={(value) =>
                        setWeights((current) => ({
                            ...current,
                            [selectedExercise.id]: value,
                        }))
                    }
                    onToggle={() => toggleExercise(selectedExercise.id)}
                    onClose={() => setSelectedExercise(null)}
                />
            )}
        </main>
    );
}
