
"use client";

import { useState } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    MessageSquareText,
    Plus,
    Send,
    X,
    Zap,
} from "lucide-react";

type ChangeRequest = {
    id: number;
    title: string;
    category: string;
    description: string;
    priority: string;
    status: "Pending" | "Under review" | "Approved";
    date: string;
};

const initialRequests: ChangeRequest[] = [
    {
        id: 1,
        title: "Adjust workout duration",
        category: "Schedule",
        description: "Request to review the duration of training sessions.",
        priority: "Normal",
        status: "Under review",
        date: "Recent",
    },
    {
        id: 2,
        title: "Update exercise selection",
        category: "Exercises",
        description: "Review exercise alternatives for the current plan.",
        priority: "Normal",
        status: "Approved",
        date: "Earlier",
    },
];

const categories = [
    "Schedule",
    "Exercises",
    "Training intensity",
    "Recovery",
    "Other",
];

export default function ChangesPanel() {
    const [requests, setRequests] =
        useState<ChangeRequest[]>(initialRequests);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Schedule");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Normal");
    const [error, setError] = useState("");

    function submitRequest(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            setError("Please enter a title and describe the change.");
            return;
        }

        const newRequest: ChangeRequest = {
            id: Date.now(),
            title: title.trim(),
            category,
            description: description.trim(),
            priority,
            status: "Pending",
            date: new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }),
        };

        setRequests((current) => [newRequest, ...current]);
        setTitle("");
        setCategory("Schedule");
        setDescription("");
        setPriority("Normal");
        setError("");
        setShowForm(false);
    }

    const pendingCount = requests.filter(
        (request) => request.status === "Pending",
    ).length;

    return (
        <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-500">
                        Plan adjustments
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-white">
                        Changes
                    </h1>
                    <p className="mt-2 text-sm text-zinc-400">
                        Keep your training plan aligned with your routine.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setShowForm((current) => !current);
                        setError("");
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
                >
                    {showForm ? (
                        <>
                            <X className="h-4 w-4" />
                            Cancel
                        </>
                    ) : (
                        <>
                            <Plus className="h-4 w-4" />
                            Request a change
                        </>
                    )}
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                    <MessageSquareText className="h-5 w-5 text-green-500" />
                    <p className="mt-4 text-sm text-zinc-400">
                        Total requests
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">
                        {requests.length}
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                    <Clock3 className="h-5 w-5 text-yellow-400" />
                    <p className="mt-4 text-sm text-zinc-400">
                        Pending requests
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">
                        {pendingCount}
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                    <Zap className="h-5 w-5 text-green-500" />
                    <p className="mt-4 text-sm text-zinc-400">
                        Change categories
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">
                        {categories.length}
                    </p>
                </div>
            </div>

            {showForm && (
                <form
                    onSubmit={submitRequest}
                    className="space-y-5 rounded-2xl border border-green-500/20 bg-zinc-950 p-5 sm:p-6"
                >
                    <div>
                        <h2 className="text-lg font-semibold text-white">
                            New change request
                        </h2>
                        <p className="mt-1 text-sm text-zinc-400">
                            Describe what you would like to adjust.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="space-y-2">
                            <span className="text-sm text-zinc-300">
                                Request title
                            </span>
                            <input
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                maxLength={80}
                                placeholder="e.g. Change my workout schedule"
                                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-green-500"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm text-zinc-300">
                                Category
                            </span>
                            <select
                                value={category}
                                onChange={(event) =>
                                    setCategory(event.target.value)
                                }
                                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-green-500"
                            >
                                {categories.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <label className="block space-y-2">
                        <span className="text-sm text-zinc-300">
                            Explain the change
                        </span>
                        <textarea
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            maxLength={1000}
                            rows={4}
                            placeholder="Tell us what you want to change and why..."
                            className="w-full resize-y rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-green-500"
                        />
                        <span className="block text-right text-xs text-zinc-500">
                            {description.length}/1000
                        </span>
                    </label>

                    <div>
                        <p className="mb-2 text-sm text-zinc-300">Priority</p>
                        <div className="flex flex-wrap gap-3">
                            {["Normal", "Important"].map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setPriority(item)}
                                    className={`rounded-xl border px-4 py-2 text-sm transition ${priority === item
                                            ? "border-green-500 bg-green-500/10 text-green-400"
                                            : "border-white/10 text-zinc-400 hover:border-white/20"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <p role="alert" className="text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
                    >
                        <Send className="h-4 w-4" />
                        Submit request
                    </button>
                </form>
            )}

            <section className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Request history
                    </h2>
                    <p className="mt-1 text-sm text-zinc-400">
                        Review the changes listed in this session.
                    </p>
                </div>

                {requests.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center">
                        <MessageSquareText className="mx-auto h-8 w-8 text-zinc-500" />
                        <p className="mt-3 font-medium text-white">
                            No change requests yet
                        </p>
                        <p className="mt-1 text-sm text-zinc-400">
                            Create a request when you want to adjust your plan.
                        </p>
                    </div>
                ) : (
                    requests.map((request) => (
                        <article
                            key={request.id}
                            className="rounded-2xl border border-white/10 bg-zinc-950 p-5 transition hover:border-green-500/30"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                                    <MessageSquareText className="h-5 w-5 text-green-500" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="font-semibold text-white">
                                            {request.title}
                                        </h3>
                                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                                            {request.category}
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                                        {request.description}
                                    </p>

                                    <p className="mt-3 text-xs text-zinc-500">
                                        {request.date} · Priority: {request.priority}
                                    </p>
                                </div>

                                <span
                                    className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-full px-3 py-1.5 text-xs ${request.status === "Approved"
                                            ? "bg-green-500/10 text-green-400"
                                            : request.status === "Under review"
                                                ? "bg-blue-500/10 text-blue-400"
                                                : "bg-yellow-500/10 text-yellow-400"
                                        }`}
                                >
                                    {request.status === "Approved" ? (
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                    ) : (
                                        <Clock3 className="h-3.5 w-3.5" />
                                    )}
                                    {request.status}
                                </span>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setRequests((current) =>
                                            current.filter(
                                                (item) => item.id !== request.id,
                                            ),
                                        )
                                    }
                                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-red-400"
                                >
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                    Remove from preview
                                </button>
                            </div>
                        </article>
                    ))
                )}
            </section>

            <p className="text-xs text-zinc-500">
                Preview mode: requests are held in temporary page state. They
                are not sent to an AI trainer or saved to a database.
            </p>
        </div>
    );
}
