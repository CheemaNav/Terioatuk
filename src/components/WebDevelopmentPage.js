import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Icon } from "@/components/Icons";
import TechStacks from "@/components/TechStacks";
import WebDevContactForm from "@/components/WebDevContactForm";
import {
  Container,
  ContactLine,
  Eyebrow,
  IconTile,
  SectionTitle,
} from "@/components/ui";
import {
  WEB_DEV_ENGAGE,
  WEB_DEV_FAQS,
  WEB_DEV_INDUSTRIES,
  WEB_DEV_REASONS,
  WEB_DEV_SERVICES,
  WEB_DEV_STEPS,
  WEB_DEV_TRUST,
  WEB_DEV_WORK,
} from "@/lib/web-development";

export default function WebDevelopmentPage() {
  return (
    <main id="top" className="min-w-0 overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-hero text-[#efeff0]">
        <Image
          src="/images/service-ai-bg.jpg"
          alt="Web development company in London — Terioat Infotech Ltd"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,30,32,0.48)_0%,rgba(29,30,32,0.68)_48%,rgba(29,30,32,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_18%,rgba(16,184,204,0.12),transparent_60%)]" />
        <div className="relative mx-auto flex w-full min-w-0 max-w-[900px] flex-col justify-center px-4 pt-[clamp(48px,10vw,120px)] pb-[clamp(88px,16vw,128px)] text-center sm:px-6 md:min-h-[min(68dvh,720px)]">
          <p className="mb-3 text-pretty font-mono text-[10px] leading-relaxed tracking-[0.1em] text-cyan-bright uppercase sm:mb-[22px] sm:text-[11.5px] sm:tracking-[0.16em]">
            Web development company in London
          </p>
          <h1 className="mb-4 text-balance break-words font-sans text-[clamp(26px,8vw,56px)] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:mb-6">
            Web Development Company in London
          </h1>
          <p className="mb-4 text-balance font-sans text-[clamp(20px,5.4vw,40px)] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:mb-5">
            Websites that load fast.
            <br />
            <em className="italic text-cyan">Web apps that do real work.</em>
          </p>
          <p className="mx-auto mb-6 max-w-[60ch] text-pretty text-[15px] leading-[1.65] text-[#c5c9cd] sm:mb-8 sm:text-[clamp(16px,1.3vw,19px)]">
            Terioat Infotech Ltd builds custom websites, web applications and
            customer portals for UK businesses, from London firms to agencies
            that need extra development capacity. Fixed-scope quotes, a UK
            contract and full source code handed over at the end.
          </p>
          <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 py-3.5 text-center font-semibold text-navy transition-colors duration-200 hover:bg-cyan hover:text-navy sm:w-auto sm:px-[30px] sm:py-4"
            >
              Get a quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] border border-white/40 px-6 py-3.5 text-center font-medium text-white transition-colors duration-200 hover:border-cyan-bright hover:text-cyan-bright sm:w-auto sm:px-[30px] sm:py-4"
            >
              See our work
            </Link>
          </div>
          <ul className="mx-auto mt-6 grid w-full max-w-[720px] list-none grid-cols-1 gap-2.5 p-0 text-left min-[480px]:grid-cols-2 sm:mt-8 sm:gap-3">
            {WEB_DEV_TRUST.map((item) => (
              <li
                key={item}
                className="rounded-[10px] border border-white/12 bg-white/6 px-3.5 py-2.5 text-[13px] leading-[1.5] text-[#d5d8dc] sm:px-4 sm:py-3 sm:text-[13.5px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <Eyebrow>Why bespoke</Eyebrow>
              <SectionTitle className="mb-6 max-w-[18ch] text-[clamp(26px,7vw,46px)]">
                Bespoke web development for UK businesses
              </SectionTitle>
              <div className="grid gap-5">
                <p className="m-0 text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
                  Off-the-shelf website builders are fine until your business needs
                  something they cannot do: a customer login area, a booking system
                  connected to your calendar, a quote calculator, or a website that
                  talks to your CRM and accounting software.
                </p>
                <p className="m-0 text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
                  That is where we come in. Terioat Infotech Ltd designs and builds
                  websites and web applications around how your business actually
                  works. Whether you need a fast marketing website, a custom portal
                  for your customers, or a rebuild of a site another agency left
                  behind, our team plans it properly, builds it to modern standards
                  and hands it over with documentation your own team can use.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-[14px]">
              <Image
                src="/images/feat-product.jpg"
                alt="Web development company in London — Terioat Infotech Ltd"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>What we build</Eyebrow>
              <SectionTitle className="max-w-[16ch] text-[clamp(26px,7vw,46px)]">
                Web development services
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-pretty text-[15.5px] leading-[1.65] text-muted sm:text-[16.5px]">
              From a five-page business website to a full web platform, one
              accountable team.
            </p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {WEB_DEV_SERVICES.map((service) => {
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

      <section className="relative isolate overflow-hidden border-b border-line bg-hero text-[#efeff0]">
        <Image
          src="/images/feat-agents.jpg"
          alt="Website chat assistants and AI features built into a web project"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#172e30f0_0%,#000000e0_48%,#0a2e33b8_100%)]" />
        <Container className="relative z-10 py-[clamp(48px,7vw,104px)]">
          <Eyebrow className="text-cyan-bright">AI inside your website</Eyebrow>
          <h2 className="m-0 mb-4 max-w-[18ch] text-balance font-sans text-[clamp(26px,6.4vw,46px)] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:mb-5">
            Websites with AI built in, where it actually helps
          </h2>
          <p className="m-0 mb-7 max-w-[68ch] text-pretty text-[15.5px] leading-[1.7] text-[#c5c9cd] sm:mb-8 sm:text-[16.5px]">
            We add AI features when they save time or improve the customer
            experience, not as a gimmick: website chat assistants trained on
            your own content, smart search, automatic lead qualification and
            document processing, using OpenAI, Claude and Gemini. When AI will
            not genuinely help, we tell you.
          </p>
          <Link
            href="/ai-automation-agency-uk"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-cyan px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-white sm:w-auto"
          >
            Explore AI automation
          </Link>
        </Container>
      </section>

      <TechStacks
        eyebrow="Technology"
        title="Technologies we build with"
        subtext="We choose the stack that suits your project, not the one we happen to prefer."
      />
      {/* TODO [CONFIRM]: Integrations row (Stripe, PayPal, Xero, QuickBooks, HubSpot, Salesforce, Zoho, Google Workspace, Microsoft 365, WhatsApp Business) when confirmed. */}

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <Eyebrow>Process</Eyebrow>
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            How we deliver your web project
          </SectionTitle>
          <ol className="m-0 grid min-w-0 list-none gap-4 p-0 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WEB_DEV_STEPS.map((step) => (
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
          <Eyebrow>Industries</Eyebrow>
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            Industries we work with
          </SectionTitle>
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WEB_DEV_INDUSTRIES.map((item) => (
              <article
                key={item.title}
                className="grid min-w-0 content-start gap-3.5 rounded-[14px] border border-line bg-paper p-5 last:sm:max-lg:col-span-2 last:lg:col-span-1 sm:p-6 sm:py-7"
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

      <section className="border-b border-line bg-paper text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(28px,4vw,56px)] grid min-w-0 items-end gap-5 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <Eyebrow>Recent work</Eyebrow>
              <SectionTitle className="max-w-[16ch] text-[clamp(26px,7vw,46px)]">
                Recent web development projects
              </SectionTitle>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 self-start rounded-[10px] border border-line bg-white px-5 font-semibold text-teal hover:border-cyan hover:text-teal-dark sm:w-auto lg:justify-self-end"
            >
              See the full portfolio <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="grid min-w-0 gap-5 lg:grid-cols-2">
            {WEB_DEV_WORK.map((item) => (
              <article
                key={item.title}
                className="flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_1px_2px_rgba(20,20,20,0.04)]"
              >
                <div className="relative aspect-[16/10] w-full bg-[#151a22]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:p-6">
                  <p className="eyebrow m-0">{item.kicker}</p>
                  <h3 className="m-0 text-balance font-sans text-[clamp(18px,4.2vw,22px)] font-bold leading-[1.2] tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="m-0 flex-1 text-pretty text-[15px] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-teal hover:text-teal-dark"
                  >
                    Visit site <Icon name="arrow" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white text-ink">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <Eyebrow>Ways to work with us</Eyebrow>
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[16ch] text-[clamp(26px,7vw,46px)]">
            Three ways to work with us
          </SectionTitle>
          <div className="grid min-w-0 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WEB_DEV_ENGAGE.map((item) => (
              <article
                key={item.n}
                className="grid min-w-0 content-start gap-3 rounded-[14px] border border-line bg-paper p-5 last:md:max-lg:col-span-2 last:lg:col-span-1 sm:p-7"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <span className="font-mono text-[12px] tracking-[0.16em] text-teal">
                  {item.n}
                </span>
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
          <Eyebrow>Why us</Eyebrow>
          <SectionTitle className="mb-[clamp(28px,4vw,56px)] max-w-[18ch] text-[clamp(26px,7vw,46px)]">
            Why UK businesses choose Terioat Infotech Ltd
          </SectionTitle>
          <div className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2">
            {WEB_DEV_REASONS.map((item) => (
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
        <Container className="grid min-w-0 items-start gap-8 py-[clamp(48px,7vw,104px)] lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle className="mb-[18px] max-w-[15ch] text-[clamp(26px,7vw,46px)] leading-[1.12]">
              Web development FAQs
            </SectionTitle>
            <p className="m-0 max-w-[42ch] text-pretty text-[15.5px] leading-[1.7] text-muted sm:text-[16.5px]">
              Cost, timelines, ownership and how we take over existing sites.
            </p>
          </div>
          <div className="grid min-w-0 gap-3.5">
            {WEB_DEV_FAQS.map((item, index) => (
              <details
                key={item.q}
                className="min-w-0 overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_1px_2px_rgba(20,20,20,0.04)]"
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

      <section
        id="quote"
        className="scroll-mt-[7.25rem] border-b border-line bg-canvas text-ink md:scroll-mt-[8.5rem]"
      >
        <Container className="grid min-w-0 gap-8 py-[clamp(48px,7vw,104px)] pb-[clamp(72px,10vw,104px)] lg:grid-cols-2 lg:gap-[72px]">
          <div className="min-w-0">
            <Eyebrow>Get a quote</Eyebrow>
            <SectionTitle className="mb-[22px] max-w-[18ch] text-[clamp(26px,7vw,46px)] leading-[1.14]">
              Tell us what you need built
            </SectionTitle>
            <p className="mb-8 max-w-[48ch] text-pretty text-[15.5px] leading-[1.7] text-ink-soft sm:text-[16.5px]">
              Share your idea, your existing website or a rough brief. Within 2
              days you will get a written approach, team shape and indicative
              cost. No pitch deck, no obligation.
            </p>
            <div className="grid gap-4">
              <ContactLine icon={<Icon name="call" size={18} />} label="Call">
                <a href={SITE.phoneHref} className="font-medium break-all text-ink hover:text-teal">
                  {SITE.phone}
                </a>
              </ContactLine>
              <ContactLine icon={<Icon name="mail" size={18} />} label="Email">
                <a href={SITE.emailHref} className="font-medium break-all text-ink hover:text-teal">
                  {SITE.email}
                </a>
              </ContactLine>
            </div>
          </div>
          <div className="min-w-0">
            <WebDevContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
