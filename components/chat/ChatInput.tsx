"use client";

import { ArrowUp, Paperclip, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

type ChatInputProps = {
    onSend?: (message: string) => void;
};

export default function ChatInput({
    onSend,
}: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return;
        }

        onSend?.(trimmedMessage);
        setMessage("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-[#0a0f0c] p-2 shadow-xl"
        >
            <div className="flex items-end gap-2">
                <button
                    type="button"
                    className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white/25 transition hover:bg-white/[0.04] hover:text-white/60"
                    aria-label="Attach file"
                >
                    <Paperclip size={18} />
                </button>

                <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => {
                        if (
                            event.key === "Enter" &&
                            !event.shiftKey
                        ) {
                            event.preventDefault();
                            event.currentTarget.form?.requestSubmit();
                        }
                    }}
                    rows={1}
                    placeholder="Ask Zoro anything about your training..."
                    className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/20"
                />

                <button
                    type="button"
                    className="mb-0.5 hidden h-10 items-center gap-2 rounded-xl px-3 text-xs text-emerald-400/70 transition hover:bg-emerald-400/5 hover:text-emerald-300 sm:flex"
                >
                    <Sparkles size={15} />
                    AI
                </button>

                <button
                    type="submit"
                    disabled={!message.trim()}
                    className="zoro-button mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-black disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Send message"
                >
                    <ArrowUp size={18} />
                </button>
            </div>

            <p className="px-12 pb-1 pt-1 text-[10px] text-white/20">
                Press Enter to send · Shift + Enter for a new line
            </p>
        </form>
    );
}