import { Bot, UserRound } from "lucide-react";

type ChatMessageProps = {
    role: "assistant" | "user";
    message: string;
};

export default function ChatMessage({
    role,
    message,
}: ChatMessageProps) {
    const isAssistant = role === "assistant";

    return (
        <div
            className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"
                }`}
        >
            {isAssistant && (
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10">
                    <Bot size={17} className="text-emerald-400" />
                </div>
            )}

            <div
                className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${isAssistant
                        ? "rounded-tl-md border border-white/[0.07] bg-white/[0.025] text-white/75"
                        : "rounded-tr-md bg-emerald-500 text-black"
                    }`}
            >
                {message}
            </div>

            {!isAssistant && (
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04]">
                    <UserRound size={17} className="text-white/50" />
                </div>
            )}
        </div>
    );
}
