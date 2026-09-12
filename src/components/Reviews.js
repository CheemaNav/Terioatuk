import Link from "next/link";
import { REVIEWS } from "@/lib/site";
import { GoogleMark } from "./Icons";
import { Container } from "./ui";

export default function Reviews() {
  return (
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
            <span className="text-[14.5px] text-muted">18 Google reviews</span>
          </div>
          <div className="mt-3.5">
            <Link href="/#quote" className="text-[14.5px] font-semibold text-teal">
              See all reviews →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-ink-soft ${review.tint}`}
                  >
                    {review.initials}
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
  );
}
