import Image from "next/image";
import Link from "next/link";
import {
  ABOUT_CARDS,
  CAPABILITY_COLUMNS,
  ENGAGEMENTS,
  IMPACT,
  INSIGHTS,
  REVIEWS,
  SERVICES,
  STACK_LOGOS,
  TICKER,
} from "@/lib/site";
import { GoogleMark, Icon } from "./Icons";
import {
  Container,
  Eyebrow,
  GhostButton,
  QuoteCta,
  IconTile,
  MediaPanel,
  PrimaryButton,
  SectionTitle,
  TextLink,
} from "./ui";
import Faq from "./Faq";
import QuoteForm from "./QuoteForm";
import HeroVideo from "./HeroVideo";
import WorkSlider from "./WorkSlider";

function TickerItem({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Icon name={icon} size={16} className="text-cyan-bright" />
      {label}
    </span>
  );
}

export default function HomePage() {
  return (
    <main id="top" className="min-w-0 overflow-x-clip">
      <section className="relative isolate min-h-[min(78dvh,840px)] overflow-hidden bg-hero text-[#efeff0]">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,30,32,0.58)_0%,rgba(29,30,32,0.72)_48%,rgba(29,30,32,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(16,184,204,0.16),transparent_62%)]" />
        <div className="relative mx-auto flex min-h-[min(78dvh,840px)] max-w-[900px] flex-col justify-center px-4 py-[clamp(64px,12vw,140px)] text-center sm:px-6">
          <p className="mb-4 text-pretty font-mono text-[10.5px] leading-relaxed tracking-[0.12em] text-cyan-bright uppercase sm:mb-[22px] sm:text-[11.5px] sm:tracking-[0.16em]">
            Software development company in London · AI automation agency UK
          </p>
          <h1 className="mb-5 text-balance font-sans text-[clamp(32px,8.4vw,72px)] font-bold leading-[1.06] tracking-[-0.035em] text-white sm:mb-6 sm:leading-[1.04]">
            Software that ships.
            <br />
            <em className="italic text-cyan-bright">AI that earns its place.</em>
          </h1>
          <p className="mx-auto mb-7 max-w-[60ch] text-pretty text-[15.5px] leading-[1.65] text-[#b0b2b6] sm:mb-8 sm:text-[clamp(16px,1.3vw,19px)]">
            Terioat Infotech is a London-based software development company
            delivering custom software development, mobile app development and AI
            automation for UK enterprises — plus dedicated and white-label
            development teams for agencies. Delivery managed from London,
            engineered at offshore rates.
          </p>
          <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <PrimaryButton href="/#quote">Get a quote</PrimaryButton>
            <GhostButton href="/#capabilities">See how we engage</GhostButton>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-bar py-4 text-[#dddee1]">
        <div className="marquee-track flex w-max font-mono text-[11px] tracking-[0.12em] uppercase sm:text-[12.5px] sm:tracking-[0.14em]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-6 pr-6 sm:gap-10 sm:pr-10"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {TICKER.map(([icon, label]) => (
                <TickerItem key={`${copy}-${label}`} icon={icon} label={label} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="services" className="border-b border-line bg-white">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <SectionTitle>Six practices, one accountable delivery team</SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              Engage one practice or the whole stack. Scope, contracts and
              escalation stay with your UK account lead — no handoffs between
              vendors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href="/#quote"
                className={`relative flex min-h-0 flex-col overflow-hidden rounded-[14px] p-6 shadow-[0_1px_2px_rgba(20,20,20,0.04)] transition-shadow hover:shadow-[0_16px_34px_rgba(20,20,20,0.10)] sm:p-8 ${
                  service.featured
                    ? "border border-hero text-white"
                    : "border border-line bg-white text-ink hover:border-cyan-soft"
                }`}
              >
                {service.featured ? (
                  <>
                    <Image
                      src="/images/service-ai-bg.jpg"
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(20,22,24,0.58)_0%,rgba(18,19,21,0.78)_48%,rgba(16,18,20,0.9)_100%)]" />
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_15%_0%,rgba(16,184,204,0.22),transparent_58%)]" />
                    <span className="absolute top-[22px] right-6 z-10 rounded-full bg-cyan px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-navy uppercase">
                      New
                    </span>
                  </>
                ) : null}
                <div className="relative z-10 flex flex-1 flex-col gap-4">
                  <Icon
                    name={service.icon}
                    size={30}
                    className={service.featured ? "text-cyan-bright" : "text-teal"}
                  />
                  <h3
                    className={`m-0 font-sans text-[22px] font-bold tracking-[-0.025em] ${
                      service.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`m-0 flex-1 text-[15.5px] leading-[1.65] ${
                      service.featured ? "text-[#b0b2b6]" : "text-muted"
                    }`}
                  >
                    {service.body}
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 text-[14.5px] font-semibold ${
                      service.featured ? "text-cyan-bright" : "text-teal"
                    }`}
                  >
                    Learn more <Icon name="arrow" size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="border-b border-line bg-paper">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(32px,4vw,52px)] grid items-start gap-7 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <SectionTitle className="max-w-[16ch] text-[clamp(30px,3.4vw,44px)] leading-[1.12]">
                A delivery partner built for procurement, not pitch decks
              </SectionTitle>
            </div>
            <div>
              <p className="mb-4 text-pretty text-[16.5px] leading-[1.7] text-ink-soft">
                Terioat Infotech works with UK enterprises and the agencies that
                serve them. Fixed-scope statements of work, named engineers, code
                and IP assigned to you on completion, and documentation your own
                team can pick up.
              </p>
              <p className="mb-6 text-pretty text-[16.5px] leading-[1.7] text-ink-soft">
                We keep the commercial relationship in the UK and the build cost
                sensible with blended teams. When AI genuinely reduces work we
                use it; when it does not, we say so.
              </p>
              <Link
                href="/#quote"
                className="border-b-2 border-cyan pb-0.5 font-semibold text-teal hover:text-teal-dark"
              >
                Talk to our UK team
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {ABOUT_CARDS.map((card) => (
              <div
                key={card.title}
                className="grid content-start gap-3.5 rounded-[14px] border border-line bg-white px-5 py-6 transition-colors hover:border-cyan sm:px-[26px] sm:py-7"
              >
                <IconTile>
                  <Icon name={card.icon} />
                </IconTile>
                <h3 className="m-0 font-sans text-[18px] font-semibold tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.6] text-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="overflow-hidden border-b border-line bg-white"
        aria-label="Technologies we build with"
      >
        <Container className="pt-[clamp(48px,6vw,80px)] pb-8 text-center">
          <Eyebrow className="mb-[18px]">We build with</Eyebrow>
          <h2 className="mx-auto mb-4 max-w-[18ch] text-balance font-sans text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.12] tracking-[-0.035em]">
            Next-gen tech stacks
          </h2>
          <p className="mx-auto m-0 max-w-[62ch] text-pretty text-[16.5px] leading-[1.7] text-muted">
            By harnessing the capabilities of the most advanced technologies, we
            develop cutting-edge web and mobile applications that push the
            boundaries of innovation.
          </p>
        </Container>
        <div className="stack-scroller pb-[clamp(40px,5vw,64px)]">
          <div className="stack-track mb-px">
            {[0, 1].map((copy) => (
              <div key={`row-a-${copy}`} className="flex" aria-hidden={copy === 1}>
                {STACK_LOGOS.slice(0, 12).map((item, index) => (
                  <div
                    key={`${copy}-${item.name}-${index}`}
                    className="stack-cell is-top"
                  >
                    <img
                      src={item.src}
                      alt={copy === 0 ? item.name : ""}
                      className="h-9 w-auto max-w-[140px] object-contain sm:h-11"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="stack-track stack-track-reverse">
            {[0, 1].map((copy) => (
              <div key={`row-b-${copy}`} className="flex" aria-hidden={copy === 1}>
                {STACK_LOGOS.slice(12).map((item, index) => (
                  <div
                    key={`${copy}-${item.name}-${index}`}
                    className="stack-cell"
                  >
                    <img
                      src={item.src}
                      alt={copy === 0 ? item.name : ""}
                      className="h-9 w-auto max-w-[140px] object-contain sm:h-11"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-line bg-white">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <div className="mb-[clamp(28px,3.5vw,44px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>How we engage</Eyebrow>
              <SectionTitle className="max-w-[18ch]">
                Three ways UK teams work with us
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              Fixed-scope delivery, embedded teams, or quiet capacity behind your
              agency&apos;s brand.
            </p>
          </div>
          <div className="grid gap-5">
            {ENGAGEMENTS.map((item) => (
              <article
                key={item.id}
                className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(20,20,20,0.04)] lg:grid-cols-2"
              >
                <div className={item.imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <MediaPanel
                    src={item.image}
                    alt={item.label}
                    number={item.id}
                    caption={item.label}
                    className="min-h-[240px] h-full sm:min-h-[330px]"
                  />
                </div>
                <div
                  className={`grid content-center gap-4 p-6 sm:p-[clamp(28px,3.2vw,48px)] ${
                    item.imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="eyebrow m-0">{item.kicker}</p>
                  <h3 className="m-0 text-balance font-sans text-[clamp(22px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="m-0 max-w-[56ch] text-pretty text-base leading-[1.7] text-muted">
                    {item.body}
                  </p>
                  <TextLink href="/#quote">
                    {item.cta} <Icon name="arrow" size={16} />
                  </TextLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper">
        <Container className="py-[clamp(52px,6vw,88px)]">
          <div className="mb-[clamp(28px,3.5vw,44px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Impact</Eyebrow>
              <SectionTitle className="text-[clamp(28px,3.2vw,42px)]">
                What you can hold us to
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              Commitments, not vanity metrics. Add your own track-record figures
              here once they are signed off.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {IMPACT.map((item) => (
              <div
                key={item.stat}
                className="grid content-start gap-3.5 rounded-[14px] border border-line bg-white px-5 py-6 shadow-[0_1px_2px_rgba(20,20,20,0.04)] sm:px-[26px] sm:py-7"
              >
                <IconTile>
                  <Icon name={item.icon} />
                </IconTile>
                <p className="m-0 font-sans text-[clamp(28px,3vw,36px)] font-bold tracking-[-0.035em]">
                  {item.stat}
                </p>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="work" className="overflow-hidden border-b border-line bg-[#f6f5f2]">
        <Container className="pt-[clamp(56px,7vw,104px)] pb-8">
          <div className="mb-[clamp(28px,4vw,48px)] grid items-end gap-6 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <Eyebrow>Portfolio</Eyebrow>
              <SectionTitle className="max-w-[18ch]">Our portfolio</SectionTitle>
            </div>
            <QuoteCta className="w-full self-start sm:w-auto lg:self-end">See the portfolio</QuoteCta>
          </div>
        </Container>
        <WorkSlider />
        <div className="h-[clamp(36px,5vw,72px)]" />
      </section>

      <section id="stack" className="border-b border-line bg-paper">
        <Container className="py-[clamp(56px,7vw,104px)]">
          <Eyebrow>Capabilities</Eyebrow>
          <SectionTitle className="mb-[clamp(32px,4vw,52px)] max-w-[22ch]">
            Everything we can take on
          </SectionTitle>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {CAPABILITY_COLUMNS.map((column) => (
              <div
                key={column.title}
                className="grid content-start gap-[18px] rounded-[14px] border border-line bg-white px-5 py-6 shadow-[0_1px_2px_rgba(20,20,20,0.04)] sm:px-7 sm:py-[30px]"
              >
                <IconTile>
                  <Icon name={column.icon} />
                </IconTile>
                <h3 className="m-0 font-sans text-xl font-bold tracking-[-0.025em]">
                  {column.title}
                </h3>
                <ul className="m-0 grid list-none gap-[11px] p-0 text-[15px] text-muted">
                  {column.items.map((entry) => (
                    <li key={entry} className="flex gap-2.5">
                      <span className="font-bold text-cyan">·</span>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="insights" className="border-b border-line bg-white">
        <Container className="py-[clamp(52px,6vw,88px)]">
          <div className="mb-[clamp(28px,3.5vw,44px)] grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <SectionTitle className="text-[clamp(28px,3.2vw,42px)]">
                Notes from the delivery floor
              </SectionTitle>
            </div>
            <p className="m-0 max-w-[44ch] text-[16.5px] leading-[1.65] text-muted">
              Practical writing on AI, software and procurement for UK teams —
              replace these three with your first posts.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((post) => (
              <Link
                key={post.title}
                href="/#insights"
                className="flex flex-col overflow-hidden rounded-[14px] border border-line bg-white text-ink transition-colors hover:border-cyan"
              >
                <MediaPanel
                  src={post.image}
                  alt={post.title}
                  overlay={false}
                  className="h-[180px] border-b border-line"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="grid gap-2.5 px-6 pt-6 pb-[26px]">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                    {post.kicker}
                  </span>
                  <h3 className="m-0 font-sans text-[19px] leading-[1.35] font-semibold tracking-[-0.02em]">
                    {post.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.6] text-muted">
                    {post.standfirst}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper">
        <Container className="py-[clamp(56px,7vw,100px)]">
          <div className="mb-[clamp(28px,3.5vw,44px)] text-center">
            <h2 className="mb-[22px] font-sans text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.12] tracking-[-0.035em]">
              What our clients say
            </h2>
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-full border border-[#e9eaea] bg-white px-4 py-2.5 shadow-[0_1px_2px_rgba(20,20,20,0.05)] sm:px-[22px] sm:py-[11px]">
              <GoogleMark />
              <span className="text-[17px] font-bold tracking-[-0.02em]">4.9</span>
              <span className="text-[15px] tracking-widest text-[#f5a623]">★★★★★</span>
              <span className="text-[14.5px] text-muted">187 Google reviews</span>
            </div>
            <div className="mt-3.5">
              <Link href="/#quote" className="text-[14.5px] font-semibold text-teal">
                See all reviews →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {REVIEWS.map((review) => (
              <article
                key={review.name}
                className="grid content-start gap-[18px] rounded-2xl border border-[#e9eaea] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(20,20,20,0.04)] sm:px-[26px] sm:py-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[15px] tracking-widest text-[#f5a623]">★★★★★</span>
                  <GoogleMark />
                </div>
                <p className="m-0 text-[15.5px] leading-[1.65]">&ldquo;{review.quote}&rdquo;</p>
                <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-2">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span
                      className={`relative block h-11 w-11 shrink-0 overflow-hidden rounded-full ${review.tint}`}
                    >
                      {review.photo ? (
                        <Image
                          src={review.photo}
                          alt={review.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-[15px] font-semibold text-ink-soft">
                          {review.initials}
                        </span>
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-semibold tracking-[-0.01em]">
                        {review.name}
                      </span>
                      <span className="block text-[13.5px] text-faint">{review.role}</span>
                    </span>
                  </div>
                  <span className="shrink-0 self-end text-[12.5px] whitespace-nowrap text-[#9a9ca0]">
                    {review.when}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Faq />
      <QuoteForm />
    </main>
  );
}
