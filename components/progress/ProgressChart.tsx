
type ProgressChartProps = {
    completedDays?: boolean[];
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ProgressChart({
    completedDays = [true, true, false, true, false, true, false],
}: ProgressChartProps) {
    return (
        <section className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
            <h2 className="text-lg font-semibold text-white">
                Weekly consistency
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
                Your workout activity over the week
            </p>

            <div className="mt-6 grid grid-cols-7 gap-2">
                {DAYS.map((day, index) => {
                    const completed = completedDays[index] ?? false;

                    return (
                        <div
                            key={day}
                            className="flex flex-col items-center gap-3"
                        >
                            <div
                                className={`flex h-12 w-full items-center justify-center rounded-xl border ${completed
                                        ? "border-green-500/40 bg-green-500/15 text-green-400"
                                        : "border-white/10 bg-white/[0.03] text-zinc-600"
                                    }`}
                            >
                                {completed ? "✓" : "—"}
                            </div>

                            <span className="text-xs text-zinc-500">
                                {day}
                            </span>
                        </div>
                    );
                })}
            </div>

            <p className="mt-5 text-xs text-zinc-500">
                Preview activity only. Real workout records will be connected later.
            </p>
        </section>
    );
}

