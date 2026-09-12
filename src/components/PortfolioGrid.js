import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/site";
import { Icon } from "./Icons";

export default function PortfolioGrid() {
  return (
    <section id="work" className="scroll-mt-[8.5rem] border-b border-line bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[clamp(56px,7vw,104px)] sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-12">
          <p className="eyebrow m-0 mb-[18px]">Selected work</p>
          <h2 className="m-0 max-w-[18ch] text-balance font-sans text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.15] tracking-[-0.03em]">
            Websites, apps and platforms
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PORTFOLIO.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_1px_2px_rgba(20,20,20,0.04)]"
            >
              <div className="relative aspect-[16/10] bg-[#151a22]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span className="rounded-full bg-white/92 px-3 py-1 font-mono text-[10.5px] tracking-[0.14em] text-teal uppercase">
                    {item.kind}
                  </span>
                  {item.href ? (
                    <span className="rounded-full bg-[#00beca] px-3 py-1 font-mono text-[10.5px] tracking-[0.14em] text-white uppercase">
                      Live
                    </span>
                  ) : (
                    <span className="rounded-full bg-[#10151d]/80 px-3 py-1 font-mono text-[10.5px] tracking-[0.14em] text-white uppercase">
                      NDA
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <p className="eyebrow m-0">{item.kicker}</p>
                <h3 className="m-0 font-sans text-[22px] font-bold leading-[1.2] tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="m-0 flex-1 text-[15px] leading-[1.65] text-muted">
                  {item.body}
                </p>
                <p className="m-0 font-mono text-[11px] tracking-[0.12em] text-teal uppercase">
                  {item.stack}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start font-semibold text-teal hover:text-teal-dark"
                  >
                    Visit site <Icon name="arrow" size={16} />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 self-start font-semibold text-teal hover:text-teal-dark"
                  >
                    Ask for a walkthrough <Icon name="arrow" size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
