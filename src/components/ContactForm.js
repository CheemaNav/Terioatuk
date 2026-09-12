"use client";

import { useState } from "react";


const EMPTY = { name: "", company: "", email: "", phone: "", message: "" };

function Field({ label, children }) {
  return (
    <label className="grid gap-[7px] text-[13px] font-medium text-ink-soft">
      {label}
      {children}
    </label>
  );
}

const inputClass =
  "w-full min-h-12 rounded-[10px] border border-line-strong bg-[#fafafa] px-[13px] py-3 text-base text-ink outline-none transition-colors focus:border-teal";

export default function  ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function update(key) {
    return (event) => setValues((current) => ({ ...current, [key]: event.target.value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Could not send your enquiry. Please email us instead.");
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
      If it is urgent, call the London line and ask for the delivery
      desk.
    </p>
    <button
      type="button"
      onClick={() => {
        setSent(false);
        setValues(EMPTY);
      }}
      className="mt-2 self-start cursor-pointer rounded-[10px] border border-[#cfcfcc] bg-transparent px-5 py-3 hover:border-ink"
    >
      Send another
    </button>
  </div>
) : (
  <form onSubmit={onSubmit} className="grid gap-4">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    <Field label="What are you looking to build?">
      <textarea
        rows={5}
        value={values.message}
        onChange={update("message")}
        className={`${inputClass} resize-y`}
      />
    </Field>
    {error ? <p className="m-0 text-[13.5px] text-[#b3261e]">{error}</p> : null}
    <button
      type="submit"
      disabled={pending}
      className="w-full min-h-12 cursor-pointer rounded-[10px] border-0 bg-ink px-[22px] py-[15px] font-medium text-white transition-colors hover:bg-cyan hover:text-[#14262a] disabled:opacity-60 sm:w-auto sm:justify-self-start"
    >
      {pending ? "Sending…" : "Request a quote"}
    </button>
    <p className="m-0 text-[12.5px] leading-[1.6] text-faint">
      We use your details only to respond to this enquiry. Happy to
      sign an NDA before you share anything sensitive.
    </p>
  </form>
)}
</div>
  );
}
