
"use client";

type CalendarDayProps = {
    day: number | null;
    isToday: boolean;
    isSelected: boolean;
    hasWorkout: boolean;
    isCompleted: boolean;
    onClick: () => void;
};

export default function CalendarDay({
    day,
    isToday,
    isSelected,
    hasWorkout,
    isCompleted,
    onClick,
}: CalendarDayProps) {
    if (day === null) {
        return <div className="min-h-16 rounded-xl" />;
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={isSelected}
            className={`relative flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border transition ${isSelected
                    ? "border-green-400 bg-green-500/20 text-white"
                    : isToday
                        ? "border-green-500/50 bg-green-500/10 text-green-400"
                        : "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-green-500/40"
                }`}
        >
            <span className="text-sm font-medium">{day}</span>

            {hasWorkout && (
                <span
                    className={`h-1.5 w-1.5 rounded-full ${isCompleted ? "bg-green-400" : "bg-yellow-400"
                        }`}
                />
            )}
        </button>
    );
}

