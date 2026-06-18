"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSuggestionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: "Murfreesboro Guide Suggestion",
      suggestionName: String(formData.get("suggestionName") || ""),
      suggestionType: String(formData.get("suggestionType") || ""),
      location: String(formData.get("location") || ""),
      link: String(formData.get("link") || ""),
      details: String(formData.get("details") || ""),
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
    };

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong sending the suggestion."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8"
    >
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <p className="eyebrow">Suggest A Local Spot</p>

        <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-[color:var(--color-text)] md:text-4xl">
          Know a place visitors should find?
        </h2>

        <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
          Send a restaurant, cabin, shop, attraction, lake stop, local service,
          or family-friendly place that should be considered for the guide.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-[color:var(--color-text)]">
            Business or place name
          </span>
          <input
            name="suggestionName"
            required
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
            placeholder="Example: Local restaurant, cabin, shop, park, or stop"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-[color:var(--color-text)]">
            Type of place
          </span>
          <select
            name="suggestionType"
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
          >
            <option value="">Choose one</option>
            <option>Restaurant or food stop</option>
            <option>Cabin, hotel, RV park, or campground</option>
            <option>Local shop or supplies</option>
            <option>Attraction or family activity</option>
            <option>Outdoor recreation</option>
            <option>Lake, river, or fishing stop</option>
            <option>Local service visitors may need</option>
            <option>Other</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-[color:var(--color-text)]">
            Location or area
          </span>
          <input
            name="location"
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
            placeholder="Murfreesboro, Lake Greeson, Kirby, Daisy, nearby..."
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-[color:var(--color-text)]">
            Website, Facebook, or Google link
          </span>
          <input
            name="link"
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
            placeholder="Paste a link if you have one"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-[color:var(--color-text)]">
            What should visitors know?
          </span>
          <textarea
            name="details"
            rows={5}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
            placeholder="Tell us why it fits the guide, what kind of trip it helps with, or anything visitors should know."
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-[color:var(--color-text)]">
              Your name
            </span>
            <input
              name="name"
              className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
              placeholder="Optional"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[color:var(--color-text)]">
              Your email
            </span>
            <input
              name="email"
              type="email"
              className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-accent)]"
              placeholder="Optional"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-accent-dark)] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Suggestion"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-bold text-green-800">
          Thanks. The suggestion was sent.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
          {error || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}