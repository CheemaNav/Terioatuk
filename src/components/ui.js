import Link from "next/link";
import Image from "next/image";

export function Logo({ height = 40, inverted = false, priority = false, className = "" }) {
  const width = Math.round((height / 40) * 180);

  return (
    <span
      className={`inline-flex items-center ${inverted ? "bg-white rounded-[10px] px-3.5 py-2.5" : ""} ${className}`}
    >
      <Image
        src="/terioat-logo.webp"
        alt="Terioat Infotech — software development company London"
        width={width}
        height={height}
        className="block h-full w-auto"
        style={{ height, width: "auto" }}
        priority={priority}
      />
    </span>
  );
}

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <p className={`eyebrow m-0 mb-[18px] ${className}`}>{children}</p>;
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`m-0 max-w-[20ch] text-balance font-sans text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.15] tracking-[-0.03em] text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

export function IconTile({ children }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-soft bg-cyan-wash text-teal">
      {children}
    </div>
  );
}

export function TextLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 self-start font-semibold text-teal transition-colors duration-200 hover:text-teal-dark ${className}`}
    >
      {children}
    </Link>
  );
}

export function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[10px] bg-cyan px-[30px] py-4 font-semibold text-navy transition-colors duration-200 hover:bg-white hover:text-navy ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[10px] border border-[#55575B] px-[30px] py-4 font-medium text-white transition-colors duration-200 hover:border-cyan-bright hover:text-cyan-bright ${className}`}
    >
      {children}
    </Link>
  );
}

export function QuoteCta({ children = "Get a quote", className = "", ...props }) {
  return (
    <Link
      href="/#quote"
      className={`inline-flex items-center justify-center rounded-[10px] bg-cyan px-[22px] py-3 text-[15px] font-semibold text-navy transition-colors duration-200 hover:bg-teal hover:text-white ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function PromoCard({ kicker, text }) {
  return (
    <div className="grid content-start gap-2.5 rounded-[14px] border border-cyan-soft bg-cyan-wash p-[22px]">
      <p className="eyebrow m-0 text-teal">{kicker}</p>
      <p className="m-0 text-[14.5px] leading-[1.55] text-ink">{text}</p>
      <Link
        href="/#quote"
        className="justify-self-start border-b-2 border-cyan pb-0.5 text-[14.5px] font-semibold text-teal transition-colors duration-200 hover:text-teal-dark"
      >
        Get a quote
      </Link>
    </div>
  );
}

export function MediaPanel({
  src,
  alt = "",
  caption,
  number,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  overlay = true,
}) {
  return (
    <div className={`relative min-h-[230px] overflow-hidden bg-hero text-[#efeff0] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : null}
      {overlay && (number || caption) ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent via-[rgba(29,30,32,0.45)] to-[rgba(29,30,32,0.88)] px-[30px] py-[26px]">
          {number ? (
            <p className="m-0 font-sans text-[60px] font-bold leading-[0.88] tracking-[-0.045em] text-white/40">
              {number}
            </p>
          ) : null}
          {caption ? (
            <p className="mt-1.5 mb-0 font-sans text-[23px] font-bold tracking-[-0.03em] text-white">
              {caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function ContactLine({ icon, label, children }) {
  return (
    <div className="flex gap-3 text-[15.5px] text-ink-soft">
      <span className="mt-0.5 shrink-0 text-teal">{icon}</span>
      <span>
        {label ? (
          <span className="mb-1 block font-mono text-[11px] tracking-[0.16em] text-teal uppercase">
            {label}
          </span>
        ) : null}
        {children}
      </span>
    </div>
  );
}
