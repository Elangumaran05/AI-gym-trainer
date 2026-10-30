import { Bot } from "lucide-react";

export default function TypingIndicator() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10">
                <Bot size={17} className="text-emerald-400" />
            </div>

            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:300ms]" />
            </div>
        </div>
    );
}
