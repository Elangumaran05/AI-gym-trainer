import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    CircleHelp,
    Dumbbell,
    HeartPulse,
    MessageSquareText,
    Settings,
    TrendingUp,
} from "lucide-react";

const icons = {
    chat: MessageSquareText,
    plan: Dumbbell,
    today: Dumbbell,
    calendar: CalendarDays,
    progress: TrendingUp,
    changes: HeartPulse,
    settings: Settings,
    help: CircleHelp,
};

type PagePlaceholderProps = {
    section: keyof typeof icons;
    title: string;
    description: string;
};

export default function PagePlaceholder({
    section,
    title,
    description,
}: PagePlaceholderProps) {
    const Icon = icons[section];

    return (
        <div className="flex min-h-[calc(100vh-150px)] items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-white/[0.07] bg-[#0a0f0c] p-8 text-center sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10">
                    <Icon size={25} className="text-emerald-400" />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                    Zoro AI Trainer
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                    {title}
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/30">
                    {description}
                </p>

                <Link
                    href="/dashboard"
                    className="zoro-button mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black"
                >
                    Back to dashboard
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}