import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Privacy Policy | Terioat Infotech",
  description:
    "How Terioat Infotech collects, uses and protects personal data, including contact forms and Google Analytics.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
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

const SECTIONS = [
  {
    title: "Who we are",
    body: [
      `Terioat Infotech (“we”, “us”) is a software engineering and AI automation company based in ${SITE.city}. For UK GDPR, we are the controller of personal data collected through this website.`,
      `Questions about this notice: ${SITE.email} or ${SITE.phone}.`,
    ],
  },
  {
    title: "Data we collect",
    body: [
      "When you use the quote or contact form we collect the details you submit: name, company, email, phone number and project description.",
      "If you email or call us, we keep the correspondence needed to reply and deliver the work.",
      "Our site uses Google Analytics (measurement ID G-PHLL27S7BB). Google may collect technical data such as pages viewed, approximate location, device and browser type, and a client identifier stored in cookies or similar technologies.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "To respond to enquiries, prepare quotes and deliver contracted work.",
      "To operate, secure and improve this website, including understanding which pages are used.",
      "We do not sell your personal data. We do not use form submissions for unrelated marketing unless you ask us to stay in touch.",
    ],
  },
  {
    title: "Legal basis",
    body: [
      "Enquiries and project delivery: legitimate interests, and contract where we have agreed to work together.",
      "Analytics cookies: legitimate interests in understanding how the site is used. You can block analytics cookies in your browser.",
      "Legal obligations: where we must keep records for tax, accounting or a lawful request.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Essential cookies keep the site working. Analytics cookies are set by Google Analytics so we can see aggregated usage.",
      "You can refuse or delete cookies in your browser settings. Blocking analytics cookies will not stop you using the site.",
    ],
  },
  {
    title: "Who we share data with",
    body: [
      "Hosting and email providers that process data on our instructions.",
      "Google Ireland Limited (Google Analytics). Google may process data outside the UK under its own terms and safeguards.",
      "Professional advisers or public authorities if the law requires it.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "Enquiry records: up to 24 months after last contact, unless we start a project (then for the life of the contract plus any legal retention period).",
      "Analytics: retained according to our Google Analytics settings, typically up to 14 months.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under UK GDPR you can ask for access, correction, deletion, restriction, objection, or a copy of your data. You can also complain to the Information Commissioner’s Office at ico.org.uk.",
      `To exercise a right, email ${SITE.email}. We may need to confirm who you are before we act.`,
    ],
  },
];

export default function PrivacyPage() {
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
            <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-[#00beca] uppercase">
              Legal
            </p>
            <h1 className="mb-4 text-[clamp(32px,8vw,56px)] font-bold leading-[1.1] text-white">
              Privacy{" "}
              <span className="font-serif font-normal italic text-[#00beca]">
                policy
              </span>
            </h1>
            <p className="mb-0 max-w-[560px] text-[16px] leading-[1.5] text-[#c7cedd] sm:text-[18px]">
              How we collect, use and look after personal data on this website.
              Last updated 27 September 2026.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper text-ink">
        <Container className="max-w-[800px] py-[clamp(48px,6vw,88px)]">
          <div className="grid gap-10">
            {SECTIONS.map((section) => (
              <article key={section.title}>
                <h2 className="m-0 mb-3 font-sans text-[22px] font-bold tracking-[-0.025em]">
                  {section.title}
                </h2>
                <div className="grid gap-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="m-0 text-[15.5px] leading-[1.7] text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[14px] border border-line bg-white p-6 sm:p-8">
            <p className="m-0 mb-4 text-[15.5px] leading-[1.65] text-muted">
              Need a copy of your data, or want an enquiry removed? Email us and
              we will handle it.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.emailHref}
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-cyan px-6 py-3.5 text-[15px] font-semibold text-navy hover:bg-teal hover:text-white"
              >
                {SITE.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-line px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-cyan hover:text-teal"
              >
                Contact form
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
