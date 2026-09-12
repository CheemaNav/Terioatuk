import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/site";
import { Container } from "@/components/ui";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio | Terioat Infotech",
  description:
    "Live UK websites from Terioat Infotech — Magnus Removals and Sheryl Perry Solicitors.",
  alternates: { canonical: "/portfolio" },
};

const FEATURED = PORTFOLIO.filter((item) => item.featured);

function hostFrom(href) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function SiteFrame({ href, image, title, priority = false }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0c1118] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.04] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[10.5px] tracking-[0.04em] text-white/45">
          {hostFrom(href)}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-[#151a22]">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main id="top" className="min-w-0 overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-[#10151d] text-white">
        <div className="pointer-events-none absolute -top-32 right-[-12%] h-[520px] w-[520px] rounded-full bg-[#00beca]/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-8%] h-[420px] w-[420px] rounded-full bg-[#00beca]/8 blur-3xl" />
        <Container className="relative z-10 grid min-w-0 items-center gap-10 py-12 sm:gap-14 md:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:py-24">
          <div className="min-w-0">
            <p className="mb-5 font-mono text-[11px] tracking-[0.16em] text-cyan-bright uppercase">
              Portfolio · {String(PORTFOLIO.length).padStart(2, "0")} projects
            </p>
            <h1 className="max-w-[12ch] text-[clamp(32px,8vw,72px)] font-bold leading-[0.98] tracking-[-0.045em]">
              Websites,{" "}
              <span className="font-serif font-normal italic text-[#00beca]">
                apps
              </span>{" "}
              and platforms.
            </h1>
            <p className="mt-6 max-w-[42ch] text-[16.5px] leading-[1.65] text-[#c7cedd] sm:text-[18px]">
              The same live UK sites we show on the homepage — public work you
              can visit today.
            </p>
            <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[#00beca] px-7 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00aab5]"
              >
                Start a project
              </Link>
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-white/20 px-7 py-4 text-[15px] font-bold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                View the work
              </a>
            </div>
          </div>

          <div className="relative min-w-0 lg:min-h-[580px]">
            <a
              href={FEATURED[0].href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${FEATURED[0].title}`}
              className="relative z-10 block transition-transform duration-500 hover:-translate-y-1 lg:absolute lg:top-0 lg:left-0 lg:w-[82%]"
            >
              <SiteFrame
                href={FEATURED[0].href}
                image={FEATURED[0].image}
                title={FEATURED[0].title}
                priority
              />
            </a>
            <a
              href={FEATURED[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${FEATURED[1].title}`}
              className="relative z-20 mt-5 block transition-transform duration-500 hover:-translate-y-1 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[74%]"
            >
              <SiteFrame
                href={FEATURED[1].href}
                image={FEATURED[1].image}
                title={FEATURED[1].title}
              />
            </a>
          </div>
        </Container>
      </section>

      <PortfolioGrid />
    </main>
  );
}
