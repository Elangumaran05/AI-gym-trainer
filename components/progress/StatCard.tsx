
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: string;
    description: string;
    icon: LucideIcon;
};

export default function StatCard({
    title,
    value,
    description,
    icon: Icon,
}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 transition hover:border-green-500/40">
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-zinc-400">{title}</p>
                <Icon className="h-5 w-5 text-green-500" />
            </div>

            <p className="mt-5 text-2xl font-bold text-white">{value}</p>

            <p className="mt-1 text-xs text-zinc-500">{description}</p>
        </div>
    );
}

