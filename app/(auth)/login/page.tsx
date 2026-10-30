"use client";

import Link from "next/link";
import {
    ArrowRight,
    Eye,
    EyeOff,
    Dumbbell,
    Sparkles,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050706]">
            <div className="absolute inset-0 zoro-grid opacity-40" />

            <div className="absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-emerald-500/10 blur-[130px]" />

            <div className="absolute -bottom-48 -right-40 h-[480px] w-[480px] rounded-full bg-emerald-500/[0.08] blur-[140px]" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
                <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#080c09]/80 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <section className="relative hidden min-h-[720px] overflow-hidden border-r border-white/[0.06] p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">

                        <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-500/[0.08] blur-[100px]" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                                    <Dumbbell
                                        size={23}
                                        className="text-emerald-400"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold tracking-tight text-white">
                                        Zoro
                                    </h2>

                                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
                                        AI Trainer
                                    </p>
                                </div>
                            </div>

                            <div className="mt-28 max-w-xl">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                                    <Sparkles size={13} />
                                    Personalized training intelligence
                                </div>

                                <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-white xl:text-6xl">
                                    Build consistency.
                                    <br />
                                    <span className="zoro-gradient-text">
                                        Train smarter.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-lg text-base leading-7 text-white/40">
                                    Zoro is designed to understand your routine, goals,
                                    training experience and preferences before building
                                    your personalized fitness journey.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex items-center gap-3 text-xs text-white/30">
                            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(25,212,123,0.8)]" />
                            Your personal training workspace
                        </div>
                    </section>

                    {/* RIGHT SIDE */}
                    <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
                        <div className="w-full max-w-md">

                            {/* Mobile logo */}
                            <div className="mb-9 flex items-center justify-center gap-3 lg:hidden">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                                    <Dumbbell
                                        size={20}
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
                                        Welcome back
                                    </p>

                                    <h2 className="text-3xl font-semibold tracking-tight text-white">
                                        Enter your training space
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-white/35">
                                        Continue your personalized training journey.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
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
                                        <div className="mb-2 flex items-center justify-between">
                                            <label
                                                htmlFor="password"
                                                className="text-sm font-medium text-white/75"
                                            >
                                                Password
                                            </label>

                                            <button
                                                type="button"
                                                className="text-xs text-emerald-400 transition hover:text-emerald-300"
                                            >
                                                Forgot password?
                                            </button>
                                        </div>

                                        <div className="relative">
                                            <input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your password"
                                                className="zoro-input w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 pr-12 text-sm text-white placeholder:text-white/20"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        (current) => !current,
                                                    )
                                                }
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/75"
                                                aria-label={
                                                    showPassword
                                                        ? "Hide password"
                                                        : "Show password"
                                                }
                                            >
                                                {showPassword ? (
                                                    <EyeOff size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="zoro-button flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-black hover:bg-emerald-400"
                                    >
                                        Enter Zoro
                                        <ArrowRight size={17} />
                                    </button>
                                </form>

                                <div className="my-7 flex items-center gap-3">
                                    <div className="h-px flex-1 bg-white/[0.06]" />

                                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/20">
                                        NEW HERE?
                                    </span>

                                    <div className="h-px flex-1 bg-white/[0.06]" />
                                </div>

                                <Link
                                    href="/signup"
                                    className="flex w-full items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 text-sm font-medium text-white/70 transition hover:border-emerald-400/20 hover:bg-emerald-400/5 hover:text-white"
                                >
                                    Create your training profile
                                </Link>
                            </div>

                            <p className="mt-6 text-center text-[11px] leading-5 text-white/20">
                                Zoro AI Trainer • Personal fitness planning workspace
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}