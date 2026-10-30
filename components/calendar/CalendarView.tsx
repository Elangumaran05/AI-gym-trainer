
"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import CalendarDay from "@/components/calendar/CalendarDay";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Workout = {
    name: string;
    duration: string;
    completed: boolean;
};

export default function CalendarView() {
    const [visibleMonth, setVisibleMonth] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });

    const [selectedDate, setSelectedDate] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    });

    const [workouts, setWorkouts] = useState<Record<string, Workout[]>>(() => {
        const now = new Date();
        const key = (day: number) =>
            `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        return {
            [key(2)]: [
                { name: "Upper Body", duration: "45 min", completed: true },
            ],
            [key(4)]: [
                { name: "Lower Body", duration: "50 min", completed: true },
            ],
            [key(6)]: [
                { name: "Core Training", duration: "30 min", completed: false },
            ],
            [key(9)]: [
                { name: "Full Body", duration: "45 min", completed: true },
            ],
        };
    });

    const dateKey = (date: Date) =>
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const today = new Date();
    const todayKey = dateKey(today);
    const selectedKey = dateKey(selectedDate);

    const calendarDays = useMemo(() => {
        const year = visibleMonth.getFullYear();
        const month = visibleMonth.getMonth();

        // Convert Sunday-first JS indexing to Monday-first calendar indexing.
        const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        return [
            ...Array.from({ length: firstWeekday }, () => null),
            ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
        ];
    }, [visibleMonth]);

    const selectedWorkouts = workouts[selectedKey] ?? [];

    function changeMonth(offset: number) {
        setVisibleMonth(
            (current) =>
                new Date(
                    current.getFullYear(),
                    current.getMonth() + offset,
                    1,
                ),
        );
    }

    function addWorkout() {
        const name = window.prompt("Enter your workout name:");
        if (!name?.trim()) return;

        setWorkouts((current) => ({
            ...current,
            [selectedKey]: [
                ...(current[selectedKey] ?? []),
                { name: name.trim(), duration: "Not set", completed: false },
            ],
        }));
    }

    function toggleWorkout(index: number) {
        setWorkouts((current) => ({
            ...current,
            [selectedKey]: current[selectedKey].map((workout, i) =>
                i === index
                    ? { ...workout, completed: !workout.completed }
                    : workout,
            ),
        }));
    }

    return (
        <div className="space-y-6">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-500">
                    Training schedule
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white">
                    Calendar
                </h1>
                <p className="mt-2 text-sm text-zinc-400">
                    Plan your sessions and review your training days.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_1fr]">
                <section className="rounded-2xl border border-white/10 bg-zinc-950 p-4 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                {visibleMonth.toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </h2>
                            <p className="mt-1 text-sm text-zinc-500">
                                Green dots indicate completed workouts; yellow dots indicate pending workouts.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => changeMonth(-1)}
                                aria-label="Previous month"
                                className="rounded-xl border border-white/10 p-2 text-zinc-300 hover:border-green-500/50"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => changeMonth(1)}
                                aria-label="Next month"
                                className="rounded-xl border border-white/10 p-2 text-zinc-300 hover:border-green-500/50"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-7 gap-2">
                        {WEEKDAYS.map((day) => (
                            <div
                                key={day}
                                className="py-2 text-center text-xs font-medium text-zinc-500"
                            >
                                {day}
                            </div>
                        ))}

                        {calendarDays.map((day, index) => {
                            const date =
                                day === null
                                    ? null
                                    : new Date(
                                        visibleMonth.getFullYear(),
                                        visibleMonth.getMonth(),
                                        day,
                                    );

                            const key = date ? dateKey(date) : "";
                            const dayWorkouts = workouts[key] ?? [];

                            return (
                                <CalendarDay
                                    key={`${visibleMonth.getFullYear()}-${visibleMonth.getMonth()}-${index}`}
                                    day={day}
                                    isToday={key === todayKey}
                                    isSelected={key === selectedKey}
                                    hasWorkout={dayWorkouts.length > 0}
                                    isCompleted={
                                        dayWorkouts.length > 0 &&
                                        dayWorkouts.every((w) => w.completed)
                                    }
                                    onClick={() => {
                                        if (date) setSelectedDate(date);
                                    }}
                                />
                            );
                        })}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-4 text-xs text-zinc-400">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            Completed
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            Planned
                        </span>
                    </div>
                </section>

                <section className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-green-500/10 p-3">
                            <CalendarDays className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-white">
                                Selected day
                            </h2>
                            <p className="mt-1 text-sm text-zinc-400">
                                {selectedDate.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        {selectedWorkouts.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-white/10 p-5 text-center">
                                <p className="text-sm text-zinc-400">
                                    No workouts planned for this day.
                                </p>
                            </div>
                        ) : (
                            selectedWorkouts.map((workout, index) => (
                                <button
                                    type="button"
                                    key={`${workout.name}-${index}`}
                                    onClick={() => toggleWorkout(index)}
                                    className="flex w-full items-center gap-3 rounded-xl border border-white/10 p-4 text-left transition hover:border-green-500/40"
                                >
                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${workout.completed
                                                ? "bg-green-500/15 text-green-400"
                                                : "bg-yellow-500/10 text-yellow-400"
                                            }`}
                                    >
                                        {workout.completed ? "✓" : "○"}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block font-medium text-white">
                                            {workout.name}
                                        </span>
                                        <span className="mt-1 block text-xs text-zinc-500">
                                            {workout.duration}
                                        </span>
                                    </span>
                                    <span className="text-xs text-zinc-400">
                                        {workout.completed ? "Done" : "Mark done"}
                                    </span>
                                </button>
                            ))
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={addWorkout}
                        className="mt-5 w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
                    >
                        + Add workout
                    </button>

                    <p className="mt-4 text-xs text-zinc-500">
                        Preview only. Changes reset when you refresh the page.
                    </p>
                </section>
            </div>
        </div>
    );
}

