import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import AIAuditForm from "@/components/AIAuditForm";
import {
  Container,
  Eyebrow,
  IconTile,
  SectionTitle,
} from "@/components/ui";
import {
  AI_AUTO_CTA_POINTS,
  AI_AUTO_FAQS,
  AI_AUTO_FEATURES,
  AI_AUTO_INDUSTRIES,
  AI_AUTO_REASONS,
  AI_AUTO_RELATED,
  AI_AUTO_SERVICES,
  AI_AUTO_STEPS,
  AI_AUTO_TOOLS,
  AI_AUTO_TRUST,
  AI_AUTO_USE_CASES,
} from "@/lib/ai-automation";

export default function AIAutomationPage() {
  return (
    <main id="top" className="min-w-0 overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-hero text-[#efeff0]">
        <Image
          src="/images/service-ai-bg.jpg"
          alt="AI automation agency UK — Terioat Infotech Ltd"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,30,32,0.48)_0%,rgba(29,30,32,0.68)_48%,rgba(29,30,32,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_18%,rgba(16,184,204,0.12),transparent_60%)]" />
        <Container className="relative grid min-w-0 items-center gap-8 pt-[clamp(48px,10vw,120px)] pb-[clamp(72px,12vw,104px)] lg:grid-cols-2 lg:gap-12 lg:py-[clamp(72px,10vw,120px)]">
          <div className="min-w-0">
            <p className="mb-3 text-pretty font-mono text-[10px] leading-relaxed tracking-[0.1em] text-cyan-bright uppercase sm:mb-[18px] sm:text-[11.5px] sm:tracking-[0.16em]">
              AI automation agency · UK &amp; London
            </p>
            <h1 className="mb-5 text-balance break-words font-sans text-[clamp(26px,6.4vw,48px)] font-bold leading-[1.1] tracking-[-0.035em] text-white">
              AI Automation Agency in the UK — turning manual work into
              automated workflows
            </h1>
            <p className="mb-6 max-w-[54ch] text-pretty text-[15px] leading-[1.7] text-[#c5c9cd] sm:mb-8 sm:text-[16.5px]">
              Terioat Infotech Ltd builds AI agents, chatbots and workflow
              automations that take repetitive admin off your team&apos;s plate.
              From answering customer enquiries on WhatsApp to processing
              invoices and updating your CRM, we automate the work that slows UK
              businesses down.
            </p>
            <div className="mb-6 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="#quote"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 py-3.5 text-center font-semibold text-navy transition-colors duration-200 hover:bg-cyan hover:text-navy sm:w-auto sm:px-[30px] sm:py-4"
              >
                Book a free automation audit
              </Link>
              <Link
                href="#services"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] border border-white/40 px-6 py-3.5 text-center font-medium text-white transition-colors duration-200 hover:border-cyan-bright hover:text-cyan-bright sm:w-auto sm:px-[30px] sm:py-4"
              >
                See what we automate
              </Link>
            </div>
            <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 min-[480px]:grid-cols-2">
              {AI_AUTO_TRUST.map((item) => (
                <li
                  key={item}
                  className="rounded-[10px] border border-white/12 bg-white/6 px-3.5 py-2.5 text-[13px] leading-[1.5] text-[#d5d8dc] sm:px-4 sm:py-3 sm:text-[13.5px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="quote" className="min-w-0 scroll-mt-[7.25rem] md:scroll-mt-[8.5rem]">
            <AIAuditForm compact />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <Eyebrow>The problem</Eyebrow>
              <SectionTitle className="mb-6 max-w-[22ch] text-[clamp(26px,7vw,46px)]">
                Your team doesn&apos;t need more AI demos. They need the work to
                get done.
              </SectionTitle>
              <div className="grid gap-5">
                <p className="m-0 text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
                  Most UK businesses have tried ChatGPT. Far fewer have AI doing
                  real work: replying to enquiries, qualifying leads, reading
                  documents or updating systems without someone copying and
                  pasting.
                </p>
                <p className="m-0 text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
                  That gap is where we work. Terioat Infotech Ltd connects AI to
                  your actual tools, data and processes, so automation runs
                  inside your business every day, with a human checking the
                  steps that matter.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-[14px]">
              <Image
                src="/images/feat-agents.jpg"
                alt="AI handling customer enquiries while a team member reviews the work"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        id="services"
        className="scroll-mt-[7.25rem] border-b border-line bg-white text-ink md:scroll-mt-[8.5rem]"
      >
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[18ch] text-[clamp(26px,7vw,46px)]">
            AI automation services for UK businesses
          </SectionTitle>
          {/* TODO [CONFIRM]: workflow tools (n8n, Make, Zapier) once the published stack is signed off */}
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AI_AUTO_SERVICES.map((service) => {
              const inner = (
                <>
                  <IconTile>
                    <Icon name={service.icon} />
                  </IconTile>
                  <h3 className="m-0 text-balance font-sans text-[clamp(18px,4.2vw,22px)] font-bold leading-[1.25] tracking-[-0.025em]">
                    {service.title}
                  </h3>
                  <p className="m-0 flex-1 text-pretty text-[15px] leading-[1.65] text-muted sm:text-[15.5px]">
                    {service.body}
                  </p>
                </>
              );
              const className =
                "grid min-w-0 content-start gap-3.5 rounded-[14px] border border-line bg-white p-5 text-ink shadow-[0_1px_2px_rgba(20,20,20,0.04)] sm:gap-4 sm:p-8";
              return service.href ? (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`${className} transition-colors hover:border-cyan-soft`}
                >
                  {inner}
                </Link>
              ) : (
                <article key={service.title} className={className}>
                  {inner}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[18ch] text-[clamp(26px,7vw,46px)]">
            AI agents need context, tools and boundaries
          </SectionTitle>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AI_AUTO_FEATURES.map((item) => (
              <article
                key={item.title}
                className="grid min-w-0 content-start gap-3 rounded-[14px] border border-line bg-white p-5 sm:p-7"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <h3 className="m-0 text-balance font-sans text-[clamp(17px,4vw,19px)] font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="m-0 text-pretty text-[15px] leading-[1.65] text-muted sm:text-[15.5px]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[18ch] text-[clamp(26px,7vw,46px)]">
            Business process automation for UK companies
          </SectionTitle>
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AI_AUTO_USE_CASES.map((item) => (
              <article
                key={item.title}
                className="grid min-w-0 content-start gap-3.5 rounded-[14px] border border-line bg-paper p-5 sm:p-8"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <h3 className="m-0 text-balance font-sans text-[clamp(18px,4.2vw,22px)] font-bold tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="m-0 text-pretty text-[15px] leading-[1.65] text-muted sm:text-[15.5px]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            Industries we automate across the UK
          </SectionTitle>
          {/* TODO [CONFIRM]: keep only sectors Terioat can genuinely serve */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AI_AUTO_INDUSTRIES.map((item) => (
              <article
                key={item.title}
                className="grid min-w-0 content-start gap-3 rounded-[14px] border border-line bg-white p-5"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <h3 className="m-0 text-balance font-sans text-[17px] font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="m-0 text-pretty text-[15px] leading-[1.6] text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            AI models and tools we work with
          </SectionTitle>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AI_AUTO_TOOLS.map((group) => (
              <article
                key={group.title}
                className="grid min-w-0 content-start gap-4 rounded-[14px] border border-line bg-paper p-5 sm:p-7"
              >
                <h3 className="m-0 font-sans text-[17px] font-semibold tracking-[-0.02em]">
                  {group.title}
                </h3>
                <ul className="m-0 grid list-none gap-2.5 p-0 text-[15px] leading-[1.55] text-muted">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white ring-1 ring-line">
                        <img
                          src={item.logo}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                      <span className="min-w-0 break-words">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            How our AI automation agency works
          </SectionTitle>
          <ol className="m-0 grid min-w-0 list-none gap-4 p-0 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {AI_AUTO_STEPS.map((step) => (
              <li
                key={step.n}
                className="grid min-w-0 content-start gap-3 rounded-[14px] border border-line bg-white p-5 shadow-[0_1px_2px_rgba(20,20,20,0.04)] sm:p-7"
              >
                <span className="font-mono text-[12px] tracking-[0.16em] text-teal">
                  {step.n}
                </span>
                <h3 className="m-0 text-balance font-sans text-[clamp(18px,4.2vw,22px)] font-bold tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="m-0 text-pretty text-[15px] leading-[1.65] text-muted sm:text-[15.5px]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[20ch] text-[clamp(26px,7vw,46px)]">
            Why UK businesses choose Terioat Infotech Ltd as their AI automation
            agency
          </SectionTitle>
          {/* TODO [CONFIRM]: add data hosting region, e.g. UK/EU, only if true */}
          <div className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AI_AUTO_REASONS.map((item) => (
              <article
                key={item.title}
                className="grid min-w-0 content-start gap-3 rounded-[14px] border border-line bg-paper p-5 sm:p-7"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <h3 className="m-0 text-balance font-sans text-[clamp(17px,4vw,19px)] font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="m-0 text-pretty text-[15px] leading-[1.65] text-muted sm:text-[15.5px]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <SectionTitle className="mb-6 max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            How much does AI automation cost in the UK?
          </SectionTitle>
          {/* TODO [CONFIRM]: starting-price table (single workflow, chatbot, AI agent, monthly support) once real figures are signed off */}
          <div className="grid max-w-[72ch] gap-5">
            <p className="m-0 text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
              Cost depends on how many steps, systems and AI actions a process
              involves.
            </p>
            <p className="m-0 text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
              The free audit gives you a fixed GBP quote before any work starts.
              Remember to budget for AI usage and automation platform fees,
              which are billed by the provider based on volume.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="grid min-w-0 items-start gap-8 py-[clamp(48px,7vw,104px)] lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle className="mb-[18px] max-w-[18ch] text-[clamp(26px,7vw,46px)] leading-[1.12]">
              AI automation in the UK — frequently asked questions
            </SectionTitle>
            {/* TODO [CONFIRM]: publish more specific delivery timelines when signed off */}
          </div>
          <div className="grid min-w-0 gap-3.5">
            {AI_AUTO_FAQS.map((item, index) => (
              <details
                key={item.q}
                className="min-w-0 overflow-hidden rounded-[14px] border border-line bg-paper shadow-[0_1px_2px_rgba(20,20,20,0.04)]"
                open={index === 0}
              >
                <summary className="flex min-h-[3.25rem] cursor-pointer list-none items-start justify-between gap-3 px-4 py-4 text-left text-ink hover:bg-[#fafafa] sm:items-center sm:gap-[18px] sm:px-6 sm:py-[22px]">
                  <span className="min-w-0 break-words font-sans text-[15px] leading-[1.4] font-semibold tracking-[-0.02em] sm:text-[17px]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-cyan-soft bg-cyan-wash sm:mt-0">
                    <Icon name="plus" size={14} className="text-teal" />
                  </span>
                </summary>
                <p className="m-0 max-w-[70ch] px-4 pb-5 text-[15px] leading-[1.7] text-muted sm:px-6 sm:pb-6 sm:text-[15.5px]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-[7.25rem] border-b border-line bg-canvas text-ink md:scroll-mt-[8.5rem]">
        <Container className="grid min-w-0 gap-8 py-[clamp(48px,7vw,104px)] pb-[clamp(72px,10vw,104px)] lg:grid-cols-2 lg:gap-[72px]">
          <div className="min-w-0">
            <Eyebrow>Get a quote</Eyebrow>
            <SectionTitle className="mb-[22px] max-w-[18ch] text-[clamp(26px,7vw,46px)] leading-[1.14]">
              Ready to automate? Book a free AI automation audit
            </SectionTitle>
            <p className="mb-8 max-w-[48ch] text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
              Bring us one process your team is tired of doing manually. We will
              map your workflow and give you a clear, prioritised plan for what
              to automate first, with a fixed GBP quote.
            </p>
            <ul className="mb-8 grid list-none gap-3 p-0">
              {AI_AUTO_CTA_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-[1.55] text-ink-soft"
                >
                  <span className="mt-0.5 text-teal">
                    <Icon name="arrow" size={16} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {AI_AUTO_RELATED.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14.5px] font-semibold text-teal hover:text-teal-dark"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <AIAuditForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
