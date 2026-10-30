
"use client";

import {
    Check,
    MessageSquareText,
    Pencil,
    ShieldCheck,
    ArrowLeft,
} from "lucide-react";
import { useState } from "react";

type PlanStatus = "idle" | "accepted" | "modify" | "submitted";

export default function PlanApproval() {
    const [status, setStatus] = useState<PlanStatus>("idle");
    const [changeRequest, setChangeRequest] = useState("");
    const [error, setError] = useState("");

    function handleSubmitRequest() {
        const request = changeRequest.trim();

        if (!request) {
            setError("Please describe what you would like to change.");
            return;
        }

        setChangeRequest(request);
        setError("");
        setStatus("submitted");
    }

    if (status === "accepted") {
        return (
            <section className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.045] p-6 sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15">
                        <Check size={22} className="text-emerald-400" />
                    </div>

                    <div className="flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                            Plan accepted
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-white">
                            Your training roadmap is ready.
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/40">
                            This is a local demo confirmation. Saving your active plan and
                            generating its workout calendar will be connected later.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:text-white"
                    >
                        Review again
                    </button>
                </div>
            </section>
        );
    }

    if (status === "submitted") {
        return (
            <section className="rounded-3xl border border-emerald-400/15 bg-[#0a0f0c] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                        <Check size={20} className="text-emerald-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                            Request recorded locally
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                            Your requested changes
                        </h3>

                        <div className="mt-4 whitespace-pre-wrap rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 text-sm leading-6 text-white/60">
                            {changeRequest}
                        </div>

                        <p className="mt-3 text-xs leading-5 text-white/35">
                            This request is currently stored only in this page's state.
                            It has not been sent to an AI model or saved to a database.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setStatus("modify")}
                                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:text-white"
                            >
                                <Pencil size={15} />
                                Edit request
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setChangeRequest("");
                                    setError("");
                                    setStatus("idle");
                                }}
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:text-white"
                            >
                                Back to plan
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (status === "modify") {
        return (
            <section className="rounded-3xl border border-emerald-400/10 bg-[#0a0f0c] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                        <MessageSquareText size={19} className="text-emerald-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                            Plan modification
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                            What would you like to change?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/40">
                            Describe the adjustments you want to make to your training
                            schedule or exercise preferences.
                        </p>

                        <label
                            htmlFor="plan-change-request"
                            className="mt-5 block text-sm font-medium text-white/70"
                        >
                            Your change request
                        </label>

                        <textarea
                            id="plan-change-request"
                            rows={4}
                            value={changeRequest}
                            onChange={(event) => {
                                setChangeRequest(event.target.value);
                                if (error) setError("");
                            }}
                            maxLength={1000}
                            placeholder="For example: I prefer three training days per week, with shorter sessions..."
                            className="zoro-input mt-2 w-full resize-y rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white placeholder:text-white/20"
                        />

                        <div className="mt-2 flex items-center justify-between gap-3">
                            {error ? (
                                <p role="alert" className="text-xs text-red-400">
                                    {error}
                                </p>
                            ) : (
                                <p className="text-xs text-white/25">
                                    Demo mode — no AI connection yet.
                                </p>
                            )}

                            <span className="shrink-0 text-xs text-white/25">
                                {changeRequest.length}/1000
                            </span>
                        </div>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => {
                                    setError("");
                                    setStatus("idle");
                                }}
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-5 py-3 text-sm text-white/55 transition hover:bg-white/[0.03] hover:text-white"
                            >
                                <ArrowLeft size={15} />
                                Back
                            </button>

                            <button
                                type="button"
                                onClick={handleSubmitRequest}
                                className="zoro-button flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
                            >
                                <Check size={16} />
                                Save change request
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-3xl border border-white/[0.07] bg-[#0a0f0c] p-6 sm:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10">
                    <ShieldCheck size={21} className="text-emerald-400" />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                        Review your plan
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/40">
                        Review your training roadmap. You can accept this sample plan
                        or describe changes you would like to make.
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                    <button
                        type="button"
                        onClick={() => {
                            setError("");
                            setStatus("modify");
                        }}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-5 py-3 text-sm font-medium text-white/60 transition hover:bg-white/[0.03] hover:text-white"
                    >
                        <Pencil size={15} />
                        Modify plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setStatus("accepted")}
                        className="zoro-button flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
                    >
                        <Check size={16} />
                        Accept plan
                    </button>
                </div>
            </div>
        </section>
    );
}
