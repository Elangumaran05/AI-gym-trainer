
import { Flame } from "lucide-react";

type StreakCardProps = {
    streak: number;
};

export default function StreakCard({ streak }: StreakCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-500/10 p-3">
                    <Flame className="h-6 w-6 text-green-500" />
                </div>

                <div>
                    <p className="text-sm text-zinc-400">Current streak</p>
                    <p className="mt-1 text-2xl font-bold text-white">
                        {streak} {streak === 1 ? "day" : "days"}
                    </p>
                </div>
            </div>

            <p className="mt-4 text-sm text-zinc-500">
                Stay consistent and keep building your routine.
            </p>
        </div>
    );
}

