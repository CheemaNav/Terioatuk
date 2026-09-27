import { STACK_LOGOS } from "@/lib/site";
import { Container, Eyebrow } from "./ui";

export default function TechStacks({
  eyebrow = "We build with",
  title = "Next-gen tech stacks",
  subtext = "By harnessing the capabilities of the most advanced technologies, we develop cutting-edge web and mobile applications that push the boundaries of innovation.",
}) {
  return (
    <section
      className="overflow-hidden border-b border-line bg-white"
      aria-label="Technologies we build with"
    >
      <Container className="pt-[clamp(48px,6vw,80px)] pb-8 text-center">
        {eyebrow ? <Eyebrow className="mb-[18px]">{eyebrow}</Eyebrow> : null}
        <h2 className="mx-auto mb-4 max-w-[18ch] text-balance font-sans text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.12] tracking-[-0.035em]">
          {title}
        </h2>
        {subtext ? (
          <p className="mx-auto m-0 max-w-[62ch] text-pretty text-[16.5px] leading-[1.7] text-muted">
            {subtext}
          </p>
        ) : null}
      </Container>
      <div className="stack-scroller pb-[clamp(40px,5vw,64px)]">
        <div className="stack-track mb-px">
          {[0, 1].map((copy) => (
            <div key={`row-a-${copy}`} className="flex" aria-hidden={copy === 1}>
              {STACK_LOGOS.slice(0, 12).map((item, index) => (
                <div key={`${copy}-${item.name}-${index}`} className="stack-cell is-top">
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
                <div key={`${copy}-${item.name}-${index}`} className="stack-cell">
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
  );
}
