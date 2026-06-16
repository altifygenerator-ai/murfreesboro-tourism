"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactAdvertisingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: "Murfreesboro Advertising Request",
      businessName: String(formData.get("businessName") || ""),
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      businessType: String(formData.get("businessType") || ""),
      location: String(formData.get("location") || ""),
      website: String(formData.get("website") || ""),
      interest: String(formData.get("interest") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. You can still email the project directly.");
    }
  }

  return (
    <div
      id="advertising-form"
      className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-xl md:p-7"
    >
      <p className="eyebrow">Get Listed</p>

      <h2 className="mt-2 font-heading text-3xl font-black leading-tight text-[color:var(--color-text)]">
        Request advertising info
      </h2>

      <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
        Send over a few details and we will follow up about getting your
        business listed or featured on the Murfreesboro Arkansas guide.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Business name"
            name="businessName"
            placeholder="Business name"
            required
          />

          <Field
            label="Your name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <Field
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Select
            label="Business type"
            name="businessType"
            options={[
              "Restaurant or cafe",
              "Cabin or vacation rental",
              "RV park or campground",
              "Local shop",
              "Attraction",
              "Outdoor recreation",
              "Guide or rental",
              "Local service business",
              "Event or venue",
              "Other",
            ]}
          />

          <Field
            label="City / area"
            name="location"
            placeholder="Murfreesboro, Lake Greeson, Kirby..."
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Website or Facebook"
            name="website"
            placeholder="Website or Facebook link"
          />

          <Select
            label="Interested in"
            name="interest"
            options={[
              "Basic listing",
              "Featured listing",
              "Business spotlight page",
              "Advertising options",
              "Not sure yet",
            ]}
          />
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs font-bold text-[color:var(--color-text)]">
            What would you like us to know?
          </span>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your business, what you offer, and what kind of visibility you are interested in."
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--color-text)] outline-none transition placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-accent)] focus:ring-4 focus:ring-[color:var(--color-accent)]/10"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-1 rounded-full bg-[color:var(--color-accent-dark)] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Request"}
        </button>

        {status === "success" && (
          <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
            Request sent. We will follow up soon.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
            {error}{" "}
            <a
              href="mailto:naturalstatetourismproject@gmail.com"
              className="underline underline-offset-4"
            >
              Email us here.
            </a>
          </p>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-[color:var(--color-text)]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--color-text)] outline-none transition placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-accent)] focus:ring-4 focus:ring-[color:var(--color-accent)]/10"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-[color:var(--color-text)]">
        {label}
      </span>
      <select
        name={name}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)] focus:ring-4 focus:ring-[color:var(--color-accent)]/10"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}