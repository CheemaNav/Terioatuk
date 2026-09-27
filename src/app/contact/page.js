import Image from "next/image";
import { SITE } from "@/lib/site";
import { GOOGLE_MAPS_URL } from "@/lib/external-links";
import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Contact Us – Get a Free Quote",
  description:
    "Free consultation, no pitch deck. Tell Terioat Infotech what you need and we will come back with a clear next step.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 900,
        alt: "Terioat Infotech",
      },
    ],
  },
};

const details = [
  {
    label: "Call",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Mon–Fri, 9:00–18:00",
  },
  {
    label: "Email",
    value: SITE.email,
    href: SITE.emailHref,
    note: "We reply within one working day",
  },
  {
    label: "Visit",
    value: SITE.addressBlock,
    href: GOOGLE_MAPS_URL,
    note: "Walsall, West Midlands",
    multiline: true,
    external: true,
  },
];

export default function ContactPage() {
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
            <h1 className="mb-4 text-[clamp(32px,8vw,56px)] font-bold leading-[1.1] text-white">
              Contact{" "}
              <br className="hidden sm:block" />
              <span className="font-serif font-normal italic text-[#00beca]">
                Terioat{" "}
              </span>
              Infotech
            </h1>
            <p className="mb-0 max-w-[560px] text-[16px] leading-[1.5] text-[#c7cedd] sm:text-[18px]">
              Free consultation, no pitch deck. Tell us what you need and
              we&apos;ll come back with a clear, practical next step.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfaf8] text-[#10151d]">
        <Container className="grid min-w-0 items-start gap-10 py-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="max-w-[520px] text-[clamp(26px,5.4vw,40px)] font-bold leading-[1.1] tracking-[-0.03em]">
              Tell us about your project.
            </h2>
            <p className="mt-4 max-w-[540px] text-[16px] leading-[1.65] text-[#5b6472] md:text-[17px]">
              Share a few details and we&apos;ll let you know the best-fit
              approach, timeline and what it would take to get started.
            </p>
            <div className="mt-8 sm:mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="min-w-0 lg:pt-16">
            <div className="space-y-6 rounded-[22px] border border-[#e4e8ef] bg-white p-5 sm:space-y-8 sm:p-8">
              {details.map((item) => (
                <div key={item.label} className="min-w-0">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#00beca]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`mt-2 block break-words text-[17px] font-bold text-[#0b1220] transition-colors hover:text-[#00beca] sm:text-[18px]${item.multiline ? " whitespace-pre-line" : ""}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className={`mt-2 break-words text-[17px] font-bold text-[#0b1220] sm:text-[18px]${item.multiline ? " whitespace-pre-line" : ""}`}
                    >
                      {item.value}
                    </p>
                  )}
                  <p className="mt-1 text-[14px] text-[#667085]">{item.note}</p>
                </div>
              ))}
            </div>

            {GOOGLE_MAPS_URL ? (
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex min-h-12 items-center justify-between gap-4 rounded-[22px] border border-[#e4e8ef] bg-white p-5 transition-colors hover:border-[#00beca] sm:p-6"
              >
                <span>
                  <span className="block text-[13px] font-semibold uppercase tracking-[0.14em] text-[#00beca]">
                    Google Business Profile
                  </span>
                  <span className="mt-2 block text-[17px] font-bold text-[#0b1220] sm:text-[18px]">
                    View us on Google
                  </span>
                  <span className="mt-1 block text-[14px] text-[#667085]">
                    Directions, hours and listing
                  </span>
                </span>
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#e4e8ef] text-[#00beca]"
                >
                  ↗
                </span>
              </a>
            ) : null}
          </aside>
        </Container>
      </section>
    </main>
  );
}
