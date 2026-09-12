import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Icon } from "@/components/Icons";
import Reviews from "@/components/Reviews";
import TechStacks from "@/components/TechStacks";
import {
  Container,
  Eyebrow,
  IconTile,
  SectionTitle,
} from "@/components/ui";

export const metadata = {
  title: "About | Terioat Infotech",
  description:
    "A London-based software development company building custom software, AI automation and dedicated teams for UK enterprises and agencies.",
  alternates: { canonical: "/about" },
};

const STATS = [
  { stat: "150+", label: "Projects delivered", icon: "layers" },
  { stat: "10yr", label: "Building on the web", icon: "clock" },
  { stat: "98%", label: "Client retention", icon: "shield" },
  { stat: "24/7", label: "Support coverage", icon: "bolt" },
];

const STEPS = [
  {
    n: "01",
    title: "Brief",
    body: "Send the problem — a deck, a ticket dump, or a call. A UK lead replies and asks only what we need to price the work.",
  },
  {
    n: "02",
    title: "Written scope",
    body: "Within two working days you get approach, team shape and indicative cost. No obligation, no sales theatre.",
  },
  {
    n: "03",
    title: "Build",
    body: "Named engineers, UK hours overlap, weekly demos. Scope changes go through your London account lead — not a ticket queue overseas.",
  },
  {
    n: "04",
    title: "Handover",
    body: "Source, infrastructure-as-code, runbooks and IP assigned to you. Your team can take over the same week we finish.",
  },
];

const PARTNERS = [
  "Digital agencies — white label",
  "Enterprise IT",
  "Systems integrators",
  "Startups & scale-ups",
];

const FEATURED_CLIENTS = [
  {
    title: "Legal services",
    note: "Sheryl Perry Solicitors · Chelmsford",
    image: "/images/portfoio/sheryl.jpg",
    href: "https://sherylperrysolicitors.uk/",
  },
  {
    title: "Removals",
    note: "Magnus Removals · London",
    image: "/images/portfoio/magnus.jpg",
    href: "https://magnusremovals.co.uk/",
  },
];

const INDUSTRIES = [
  { title: "Logistics", icon: "server" },
  { title: "E-commerce & retail", icon: "growth" },
  { title: "Healthcare", icon: "shield" },
  { title: "Financial services", icon: "list" },
];

const PRACTICES = [
  {
    n: "01",
    icon: "agent",
    title: "AI automation",
    body: "Agents and workflow automation grounded in your data, integrated with the CRM, ERP and inboxes your team already uses.",
  },
  {
    n: "02",
    icon: "code",
    title: "Custom software",
    body: "Portals, platforms and internal systems on Laravel, Node and React — built for audit, access control and scale.",
  },
  {
    n: "03",
    icon: "people",
    title: "Dedicated teams",
    body: "Vetted engineers embedded in your sprints, under your brand if you are an agency. Monthly rolling, UK hours overlap.",
  },
  {
    n: "04",
    icon: "growth",
    title: "Search & growth",
    body: "Technical SEO, paid media and how your brand surfaces inside AI assistants — tied to pipeline, not vanity metrics.",
  },
];

export default function About() {
  return (
    <main id="top" className="min-w-0 overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-[#10151d] text-white">
        <Image
          src="/images/service-ai-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(12,17,25,0.96)_0%,rgba(12,17,25,0.84)_42%,rgba(12,17,25,0.62)_100%)]" />
        <Container className="relative z-10 py-[clamp(72px,14vw,120px)]">
          <div className="max-w-[920px]">
            <h1 className="mb-4 max-w-[16ch] text-[clamp(32px,8vw,56px)] font-bold leading-[1.1] text-white">
              About{" "}
              <span className="font-serif font-normal italic text-[#00beca]">
                Terioat
              </span>{" "}
              Infotech
            </h1>
            <p className="mb-8 max-w-[560px] text-[16px] leading-[1.5] text-[#c7cedd] sm:text-[18px]">
              A London-based software development company building custom
              software, AI automation and dedicated teams for UK enterprises and
              agencies.
            </p>
            <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[#00beca] px-7 py-4 text-center text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00aab5]"
              >
                Get a free consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] border-[1.5px] border-white/30 bg-transparent px-7 py-4 text-center text-[15px] font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                View our work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <SectionTitle className="max-w-[16ch]">
                A delivery partner built for procurement, not pitch decks
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              Scope, contracts and escalation stay with your UK account lead —
              no handoffs between vendors. Code and IP assigned to you on
              completion.
            </p>
          </div>
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden rounded-[14px] sm:min-h-[360px]">
              <Image
                src="/images/feat-search.jpg"
                alt="Terioat Infotech team collaborating"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="grid content-start gap-3.5 rounded-[14px] border border-line bg-white px-5 py-6 shadow-[0_1px_2px_rgba(20,20,20,0.04)] sm:px-[26px] sm:py-7"
                >
                  <IconTile>
                    <Icon name={item.icon} />
                  </IconTile>
                  <p className="m-0 font-sans text-[clamp(28px,3vw,36px)] font-bold tracking-[-0.035em]">
                    {item.stat}
                  </p>
                  <p className="m-0 text-[15px] leading-[1.6] text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <SectionTitle className="max-w-[16ch]">
                Reliable services that accelerate growth
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              From first brief to performance after launch. Engage one practice
              or the whole stack — with a named London lead on every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PRACTICES.map((item) => (
              <article
                key={item.n}
                className="grid content-start gap-5 rounded-[14px] border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(20,20,20,0.04)] transition-colors hover:border-cyan-soft sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <IconTile>
                    <Icon name={item.icon} />
                  </IconTile>
                  <span className="font-mono text-[12px] tracking-[0.16em] text-teal">
                    {item.n}
                  </span>
                </div>
                <h3 className="m-0 font-sans text-[22px] font-bold tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.65] text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Who we work with</Eyebrow>
              <SectionTitle className="max-w-[16ch]">
                UK operators, agencies and in-house IT
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              Live work in legal and removals — plus logistics, retail and
              in-house IT. Agencies use us under NDA; we never appear in front
              of your client.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {FEATURED_CLIENTS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[240px] overflow-hidden rounded-[14px] sm:min-h-[300px]"
              >
                <Image
                  src={item.image}
                  alt={item.note}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,24,0.12)_0%,rgba(20,22,24,0.55)_48%,rgba(16,18,20,0.94)_100%)]" />
                <span className="absolute inset-x-0 bottom-0 z-10 grid gap-1 p-6 sm:p-7">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-cyan-bright uppercase">
                    Live work
                  </span>
                  <span className="font-sans text-[22px] font-bold tracking-[-0.025em] text-white">
                    {item.title}
                  </span>
                  <span className="text-[14.5px] text-white/75">{item.note}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((item) => (
              <div
                key={item.title}
                className="grid content-start gap-3.5 rounded-[14px] border border-line bg-paper px-5 py-6 transition-colors hover:border-cyan-soft sm:px-6 sm:py-7"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <h3 className="m-0 font-sans text-[17px] font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-1 font-mono text-[11px] tracking-[0.16em] text-teal uppercase">
              Also
            </span>
            {PARTNERS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-paper px-4 py-2 text-[14.5px] text-ink-soft"
              >
                {item}
              </span>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-1 font-semibold text-teal hover:text-teal-dark"
            >
              Talk to the UK team <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-hero text-[#efeff0]">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-cyan-bright">How an engagement runs</Eyebrow>
              <SectionTitle className="max-w-[16ch] text-white">
                Four steps from brief to handover
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-[#c5c9cd]">
              No black box. You always know who is building, what is in scope,
              and when the work becomes yours.
            </p>
          </div>
          <ol className="m-0 grid list-none gap-5 p-0 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li
                key={step.n}
                className="relative grid content-start gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                {index < STEPS.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-10 right-[-12px] hidden h-px w-6 bg-cyan/50 lg:block"
                  />
                ) : null}
                <span className="font-mono text-[12px] tracking-[0.16em] text-cyan-bright">
                  {step.n}
                </span>
                <h3 className="m-0 font-sans text-[22px] font-bold tracking-[-0.025em] text-white">
                  {step.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.65] text-[#b0b2b6]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <TechStacks />
      <Reviews />

      <section>
        <Container className="py-[clamp(48px,6vw,96px)]">
          <div className="relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] px-5 py-10 text-white sm:gap-10 sm:rounded-[32px] sm:px-8 sm:py-12 md:flex-row md:items-center md:gap-16 md:px-14 md:py-16 lg:rounded-[40px] lg:px-16 lg:py-20">
            <Image
              src="/images/feat-agents.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#172e30f0_0%,#000000e0_48%,#0a2e33b8_100%)]" />

            <div className="relative z-10 min-w-0 max-w-[620px]">
              <h2 className="text-[clamp(28px,6vw,52px)] font-bold leading-[1.08] tracking-[-0.03em]">
                Free consultation, no pitch deck.
              </h2>
              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.65] text-white/90 md:text-[18px]">
                Partnering with us means a team that&apos;s genuinely happy to
                answer your questions. Get in touch and we&apos;ll tell you what
                the best-fit solution actually looks like.
              </p>
            </div>
            <div className="relative z-10 flex w-full min-w-0 max-w-[360px] flex-col gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-white px-7 py-4 text-center text-[15px] font-bold text-[#00beca] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e8fbff]"
              >
                Talk to sales
              </Link>
              <a
                href={SITE.emailHref}
                className="inline-flex min-h-12 items-center justify-center break-all rounded-[10px] border-[1.5px] border-white/30 bg-transparent px-5 py-4 text-center text-[14px] font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:px-7 sm:text-[15px]"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
