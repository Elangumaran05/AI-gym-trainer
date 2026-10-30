"use client";

import {
    ArrowRight,
    Bot,
    Clock3,
    Dumbbell,
    Sparkles,
} from "lucide-react";
import { useState } from "react";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

type Message = {
    id: number;
    role: "assistant" | "user";
    message: string;
};

const initialMessages: Message[] = [
    {
        id: 1,
        role: "assistant",
        message:
            "Welcome to Zoro. Before I build your training plan, I want to understand you properly — your routine, experience, goals, recovery, equipment, and what you can realistically maintain.",
    },
    {
        id: 2,
        role: "assistant",
        message:
            "Let's start simple. What is your main fitness goal right now, and what would you most like to improve?",
    },
];

const suggestions = [
    "I want to build strength",
    "I want better overall fitness",
    "I want to improve my consistency",
];

export default function ChatWindow() {
    const [messages, setMessages] =
        useState<Message[]>(initialMessages);

    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = (text: string) => {
        const userMessage: Message = {
            id: Date.now(),
            role: "user",
            message: text,
        };

        setMessages((current) => [
            ...current,
            userMessage,
        ]);

        setIsTyping(true);

        window.setTimeout(() => {
            setMessages((current) => [
                ...current,
                {
                    id: Date.now() + 1,
                    role: "assistant",
                    message:
                        "Got it. I'll keep that in mind. In the connected version, I'll use your answer to decide what I need to ask next before building your plan.",
                },
            ]);

            setIsTyping(false);
        }, 900);
    };

    return (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <section className="flex min-h-[calc(100vh-145px)] min-w-0 flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080c09]">
                <div className="border-b border-white/[0.06] px-5 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10">
                                <Bot size={20} className="text-emerald-400" />
                            </div>

                            <div>
                                <h2 className="text-sm font-semibold text-white">
                                    Zoro AI Trainer
                                </h2>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(25,212,123,0.8)]" />
                                    <span className="text-[11px] text-white/30">
                                        Ready to learn about you
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[10px] text-white/25 sm:flex">
                            <Sparkles size={13} />
                            Personalization mode
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
                    <div className="mx-auto max-w-3xl space-y-5">
                        <div className="mb-7 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-4">
                            <div className="flex items-start gap-3">
                                <Sparkles
                                    size={17}
                                    className="mt-0.5 shrink-0 text-emerald-400"
                                />

                                <div>
                                    <p className="text-sm font-medium text-white/75">
                                        How Zoro works
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-white/30">
                                        I'll learn about your lifestyle and training
                                        preferences first. Then I'll summarize what I've
                                        understood before a personalized plan is created.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {messages.map((message) => (
                            <ChatMessage
                                key={message.id}
                                role={message.role}
                                message={message.message}
                            />
                        ))}

                        {isTyping && <TypingIndicator />}

                        {messages.length <= 2 && !isTyping && (
                            <div className="pt-3">
                                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/20">
                                    Quick start
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {suggestions.map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            type="button"
                                            onClick={() => sendMessage(suggestion)}
                                            className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-xs text-white/45 transition hover:border-emerald-400/15 hover:bg-emerald-400/[0.04] hover:text-emerald-300"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-t border-white/[0.06] bg-[#070b08] p-4 sm:p-5">
                    <div className="mx-auto max-w-3xl">
                        <ChatInput onSend={sendMessage} />
                    </div>
                </div>
            </section>

            <aside className="space-y-4">
                <div className="rounded-3xl border border-white/[0.07] bg-[#080c09] p-5">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
                            <Dumbbell
                                size={18}
                                className="text-emerald-400"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-white">
                                Training profile
                            </p>

                            <p className="text-[11px] text-white/25">
                                Building from your answers
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {[
                            ["Primary goal", "Not set"],
                            ["Experience", "Not set"],
                            ["Training days", "Not set"],
                            ["Gym access", "Not set"],
                            ["Preferred time", "Not set"],
                            ["Plan timeframe", "Not set"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="flex items-center justify-between gap-3 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0"
                            >
                                <span className="text-xs text-white/30">
                                    {label}
                                </span>

                                <span className="text-xs text-white/55">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5">
                    <div className="flex items-center gap-2">
                        <Clock3
                            size={16}
                            className="text-emerald-400"
                        />

                        <p className="text-xs font-medium text-emerald-300">
                            Interview progress
                        </p>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                        <div className="h-full w-[12%] rounded-full bg-emerald-500" />
                    </div>

                    <p className="mt-2 text-[11px] text-white/25">
                        Getting started
                    </p>
                </div>

                <div className="rounded-3xl border border-white/[0.07] bg-[#080c09] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/20">
                        What comes next
                    </p>

                    <div className="mt-4 space-y-3">
                        {[
                            "Fitness interview",
                            "Profile confirmation",
                            "Personalized plan",
                            "Plan approval",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.035] text-[10px] text-white/30">
                                    {index + 1}
                                </div>

                                <span className="text-xs text-white/40">
                                    {item}
                                </span>

                                <ArrowRight
                                    size={13}
                                    className="ml-auto text-white/15"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}
