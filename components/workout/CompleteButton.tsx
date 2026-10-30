
"use client";

import { Check, Circle } from "lucide-react";

type CompleteButtonProps = {
    completed: boolean;
    disabled?: boolean;
    onClick: () => void;
};

export default function CompleteButton({
    completed,
    disabled = false,
    onClick,
}: CompleteButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-pressed={completed}
            className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${completed
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                    : "border-white/[0.08] bg-white/[0.025] text-white/50 hover:border-emerald-400/20 hover:text-emerald-300"
                }`}
        >
            {completed ? <Check size={15} /> : <Circle size={15} />}
            {completed ? "Completed" : "Mark complete"}
        </button>
    );
}

