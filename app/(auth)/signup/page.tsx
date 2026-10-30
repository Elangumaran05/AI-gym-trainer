"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Dumbbell,
} from "lucide-react";
import { FormEvent } from "react";

export default function SignupPage() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050706]">
            <div className="absolute inset-0 zoro-grid opacity-40" />

            <div className="absolute left-1/2 top-[-220px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
                <div className="w-full max-w-md">

                    <Link
                        href="/login"
                        className="mb-7 inline-flex items-center gap-2 text-sm text-white/35 transition hover:text-white"
                    >
                        <ArrowLeft size={16} />
                        Back to login
                    </Link>

                    <div className="mb-7 flex items-center justify-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                            <Dumbbell
                                size={21}
                                className="text-emerald-400"
                            />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Zoro
                            </p>

                            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                                AI Trainer
                            </p>
                        </div>
                    </div>

                    <div className="zoro-card zoro-glow rounded-3xl p-7 sm:p-9">
                        <div className="mb-8">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                                Start your journey
                            </p>

                            <h1 className="text-3xl font-semibold tracking-tight text-white">
                                Create your account
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-white/35">
                                Your profile will become the foundation for your
                                personalized training experience.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-white/75"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="zoro-input w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white placeholder:text-white/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-white/75"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="zoro-input w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white placeholder:text-white/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-white/75"
                                >
                                    Password
                                </label>

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Create a password"
                                    className="zoro-input w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white placeholder:text-white/20"
                                />
                            </div>

                            <button
                                type="submit"
                                className="zoro-button flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-black hover:bg-emerald-400"
                            >
                                Create account
                                <ArrowRight size={17} />
                            </button>
                        </form>

                        <p className="mt-6 text-center text-[11px] leading-5 text-white/20">
                            Authentication will be connected to Supabase in a later module.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}