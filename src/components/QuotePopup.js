"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";

const QuotePopupContext = createContext(null);

const START_DATES = [
  "Immediately",
  "Within 2 weeks",
  "Within a month",
  "In 1–3 months",
  "Not sure yet",
];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  startDate: "Immediately",
  message: "",
};

const inputClass =
  "w-full min-h-12 rounded-[10px] border border-line-strong bg-[#fafafa] px-[13px] py-3 text-base text-ink outline-none transition-colors focus:border-teal";

export function useQuotePopup() {
  const context = useContext(QuotePopupContext);
  if (!context) {
    throw new Error("useQuotePopup must be used within QuotePopupProvider");
  }
  return context;
}

export function QuotePopupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => setOpen(false), []);

  return (
    <QuotePopupContext.Provider value={{ open, openQuote, closeQuote }}>
      {children}
      <QuotePopupModal />
    </QuotePopupContext.Provider>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="grid gap-[7px] text-[13px] font-medium text-ink">
      {label}
      {children}
    </label>
  );
}

function QuotePopupModal() {
  const { open, closeQuote } = useQuotePopup();
  const titleId = useId();
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const startId = useId();
  const messageId = useId();
  const nameRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => nameRef.current?.focus());
    function onKey(event) {
      if (event.key === "Escape") closeQuote();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeQuote]);

  useEffect(() => {
    if (open) return;
    const timer = window.setTimeout(() => {
      setValues(EMPTY);
      setSent(false);
      setError("");
      setPending(false);
    }, 200);
    return () => window.clearTimeout(timer);
  }, [open]);

  function update(key) {
    return (event) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setPending(true);
    const details = [
      `Best start date: ${values.startDate}`,
      values.message.trim()
        ? `Questions / requirements:\n${values.message.trim()}`
        : "",
    ]
      .filter(Boolean)
      .join("\n\n");
    try {
      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: "",
          message: details,
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close quote form"
        className="absolute inset-0 bg-[rgba(16,21,29,0.55)]"
        onClick={closeQuote}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[min(92dvh,720px)] w-full overflow-y-auto rounded-t-[22px] bg-white p-5 shadow-[0_24px_60px_rgba(16,21,29,0.28)] sm:max-w-[560px] sm:rounded-[22px] sm:p-8"
      >
        <button
          type="button"
          onClick={closeQuote}
          aria-label="Close"
          className="absolute top-4 right-4 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-muted transition-colors hover:border-cyan hover:text-teal"
        >
          <Icon name="close" size={16} />
        </button>

        {sent ? (
          <div className="flex min-h-[280px] flex-col justify-center gap-3.5 pr-8">
            <p className="eyebrow m-0">Received</p>
            <h2
              id={titleId}
              className="m-0 font-sans text-[clamp(24px,5vw,32px)] font-bold tracking-[-0.03em] text-ink"
            >
              Thank you — we will reply within two working days.
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.65] text-muted">
              If it is urgent, call the London line and ask for the delivery
              desk.
            </p>
            <button
              type="button"
              onClick={closeQuote}
              className="mt-2 min-h-12 w-full cursor-pointer rounded-full bg-cyan px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-teal hover:text-white sm:w-auto sm:self-start"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="pr-10">
              <h2
                id={titleId}
                className="m-0 font-sans text-[clamp(24px,5vw,32px)] font-bold tracking-[-0.03em] text-ink"
              >
                Request a quote
              </h2>
              <p className="mt-1.5 mb-0 text-[15px] text-muted">
                It&apos;s fast, easy and free.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name" htmlFor={nameId}>
                <input
                  ref={nameRef}
                  id={nameId}
                  required
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={update("name")}
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor={emailId}>
                <input
                  id={emailId}
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={update("email")}
                  className={inputClass}
                />
              </Field>
              <Field label="Phone" htmlFor={phoneId}>
                <input
                  id={phoneId}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+44 Phone"
                  value={values.phone}
                  onChange={update("phone")}
                  className={inputClass}
                />
              </Field>
              <Field label="Best start date" htmlFor={startId}>
                <div className="relative">
                  <select
                    id={startId}
                    value={values.startDate}
                    onChange={update("startDate")}
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    {START_DATES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-muted">
                    <Icon name="chevron" size={10} />
                  </span>
                </div>
              </Field>
            </div>

            <Field label="Message" htmlFor={messageId}>
              <textarea
                id={messageId}
                rows={5}
                placeholder="Questions / requirements"
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
              className="min-h-12 w-full cursor-pointer rounded-full bg-cyan px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-teal hover:text-white disabled:opacity-60"
            >
              {pending ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-[10px] bg-cyan px-5 py-3 text-[15px] font-semibold text-navy transition-colors duration-200 hover:bg-teal hover:text-white sm:px-[22px]";

const onDarkClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 py-3.5 text-center font-semibold text-navy transition-colors duration-200 hover:bg-cyan hover:text-navy sm:w-auto sm:px-[30px] sm:py-4";

const textClass =
  "justify-self-start border-b-2 border-cyan bg-transparent p-0 pb-0.5 text-[14.5px] font-semibold text-teal transition-colors duration-200 hover:text-teal-dark";

const VARIANT_CLASS = {
  button: buttonClass,
  onDark: onDarkClass,
  text: textClass,
};

export function PromoCard({ kicker, text }) {
  return (
    <div className="grid content-start gap-2.5 rounded-[14px] border border-cyan-soft bg-cyan-wash p-[22px]">
      <p className="eyebrow m-0 text-teal">{kicker}</p>
      <p className="m-0 text-[14.5px] leading-[1.55] text-ink">{text}</p>
      <QuoteCta variant="text">Get a quote</QuoteCta>
    </div>
  );
}

export function QuoteCta({
  children = "Get a quote",
  className = "",
  href,
  variant = "button",
  onClick,
  ...props
}) {
  const { openQuote } = useQuotePopup();
  const opensPopup = !href || href === "/contact";
  const classes = `${VARIANT_CLASS[variant] || VARIANT_CLASS.button} ${className}`;

  if (!opensPopup) {
    return (
      <Link href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`cursor-pointer ${classes}`}
      onClick={(event) => {
        onClick?.(event);
        openQuote();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
