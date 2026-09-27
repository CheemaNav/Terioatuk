"use client";

import { useState } from "react";
import Link from "next/link";

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const PROJECT_TYPES = [
  "Business website",
  "E-commerce",
  "Web app or portal",
  "Website rebuild",
  "White-label",
  "Other",
];

// TODO [CONFIRM]: replace budget options with real bands when ready to publish prices
const BUDGETS = ["Happy to discuss after the brief"];

function Field({ label, children }) {
  return (
    <label className="grid gap-[7px] text-[13px] font-medium text-ink-soft">
      {label}
      {children}
    </label>
  );
}

const inputClass =
  "w-full max-w-full min-h-12 rounded-[10px] border border-line-strong bg-[#fafafa] px-[13px] py-3 text-base text-ink outline-none transition-colors focus:border-teal";

export default function WebDevContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function update(key) {
    return (event) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const message = [
        values.projectType ? `Project type: ${values.projectType}` : "",
        values.budget ? `Budget range: ${values.budget}` : "",
        values.message,
      ]
        .filter(Boolean)
        .join("\n\n");

      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          message,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          data.error || "Could not send your enquiry. Please email us instead.",
        );
      }
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-w-0 rounded-2xl border border-[#e1e2e2] bg-white p-4 text-ink shadow-[0_14px_34px_rgba(20,20,20,0.06)] sm:p-[clamp(26px,3vw,38px)]">
      {sent ? (
        <div className="flex min-h-[280px] flex-col justify-center gap-3.5 sm:min-h-[360px]">
          <p className="eyebrow m-0">Received</p>
          <h3 className="m-0 font-sans text-[clamp(22px,5vw,28px)] font-bold">
            Thank you — we will reply within two working days.
          </h3>
          <p className="m-0 text-[15.5px] leading-[1.65] text-muted">
            If it is urgent, call the London line and ask for the delivery desk.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setValues(EMPTY);
            }}
            className="mt-2 cursor-pointer self-start rounded-[10px] border border-[#cfcfcc] bg-transparent px-5 py-3 hover:border-ink"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Name">
              <input
                required
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                className={inputClass}
              />
            </Field>
            <Field label="Company">
              <input
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={update("company")}
                className={inputClass}
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Work email">
              <input
                required
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                className={inputClass}
              />
            </Field>
            <Field label="Phone">
              <input
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={update("phone")}
                className={inputClass}
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Project type">
              <select
                value={values.projectType}
                onChange={update("projectType")}
                className={inputClass}
              >
                <option value="">Select</option>
                {PROJECT_TYPES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Budget range">
              <select
                value={values.budget}
                onChange={update("budget")}
                className={inputClass}
              >
                <option value="">Optional</option>
                {BUDGETS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Message">
            <textarea
              required
              rows={5}
              value={values.message}
              onChange={update("message")}
              className={`${inputClass} resize-y`}
            />
          </Field>
          {error ? (
            <p className="m-0 text-[13.5px] text-[#b3261e]">{error}</p>
          ) : null}
          <button
            type="submit"
            disabled={pending}
            className="min-h-12 w-full cursor-pointer rounded-[10px] border-0 bg-ink px-[22px] py-[15px] font-medium text-white transition-colors hover:bg-cyan hover:text-[#14262a] disabled:opacity-60 sm:w-auto sm:justify-self-start"
          >
            {pending ? "Sending…" : "Request a quote"}
          </button>
          <p className="m-0 text-[12.5px] leading-[1.6] text-faint">
            By submitting, you agree to our{" "}
            <Link href="/privacy" className="font-semibold text-teal hover:text-teal-dark">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  );
}
