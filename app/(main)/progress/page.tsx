
import StatCard from "@/components/progress/StatCard";
import StreakCard from "@/components/progress/StreakCard";
import ProgressChart from "@/components/progress/ProgressChart";
import { Activity, CalendarDays, Trophy } from "lucide-react";

export default function ProgressPage() {
    return (
        <div className="space-y-6">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-500">
                    Your journey
                </p>

                <h1 className="mt-2 text-3xl font-bold text-white">
                    Progress
                </h1>

                <p className="mt-2 text-sm text-zinc-400">
                    Track your consistency and celebrate your progress.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <StatCard
                    title="Workouts completed"
                    value="12"
                    description="This month"
                    icon={Trophy}
                />

                <StatCard
                    title="Completion rate"
                    value="80%"
                    description="Planned sessions"
                    icon={Activity}
                />

                <StatCard
                    title="Active days"
                    value="12"
                    description="This month"
                    icon={CalendarDays}
                />
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                <ProgressChart />
                <StreakCard streak={4} />
            </div>
        </div>
    );
}
