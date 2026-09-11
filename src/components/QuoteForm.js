"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "./Icons";
import { ContactLine, Container, Eyebrow, SectionTitle } from "./ui";

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

export default function QuoteForm() {
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
      const response = await fetch("/api/quote", {
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
    <section id="quote" className="border-b border-line bg-canvas text-ink">
      <Container className="grid gap-9 py-[clamp(56px,7vw,104px)] lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <Eyebrow>Get a quote</Eyebrow>
          <SectionTitle className="mb-[22px] max-w-[18ch] leading-[1.14]">
            Tell us what needs building
          </SectionTitle>
          <p className="mb-8 max-w-[48ch] text-pretty text-[16.5px] leading-[1.7] text-ink-soft">
            Send the brief — or just the problem. You will get a written outline
            of approach, team shape and indicative cost within two working days,
            from a UK contact, with no obligation.
          </p>
          <div className="grid gap-4">
            <ContactLine icon={<Icon name="call" size={18} />} label="Call">
              <a href={SITE.phoneHref} className="font-medium text-ink hover:text-teal">
                {SITE.phone}
              </a>
            </ContactLine>
            <ContactLine icon={<Icon name="mail" size={18} />} label="Email">
              <a href={SITE.emailHref} className="font-medium text-ink hover:text-teal">
                {SITE.email}
              </a>
            </ContactLine>
            <ContactLine icon={<Icon name="pin" size={18} />} label="London office">
              {SITE.addressLine}
            </ContactLine>
          </div>
        </div>
        <div className="rounded-2xl border border-[#e1e2e2] bg-white p-5 text-ink shadow-[0_14px_34px_rgba(20,20,20,0.06)] sm:p-[clamp(26px,3vw,38px)]">
          {sent ? (
            <div className="flex min-h-[360px] flex-col justify-center gap-3.5">
              <p className="eyebrow m-0">Received</p>
              <h3 className="m-0 font-sans text-[28px] font-bold">
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
      </Container>
    </section>
  );
}
