"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";
import { Icon } from "./Icons";
import { Container, Eyebrow, QuoteCta, SectionTitle } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-b border-line bg-white">
      <Container className="grid items-start gap-8 py-[clamp(56px,7vw,104px)] lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mb-[18px] max-w-[15ch] leading-[1.12]">
            Questions UK buyers ask us
          </SectionTitle>
          <p className="mb-7 max-w-[42ch] text-pretty text-[16.5px] leading-[1.7] text-muted">
            Cost, contracting, IP and how quickly a team can start. Anything not
            covered here, ask us directly.
          </p>
          <div className="grid w-full max-w-[360px] gap-3 rounded-[14px] border border-line bg-paper p-5 sm:p-6">
            <p className="m-0 font-sans text-[17px] font-semibold tracking-[-0.02em]">
              Still deciding?
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-muted">
              Book a 30-minute call with a UK engineer — no sales script, no
              obligation.
            </p>
            <QuoteCta className="w-full justify-self-start sm:w-auto" />
          </div>
        </div>
        <div className="grid gap-3.5">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_1px_2px_rgba(20,20,20,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[3.25rem] w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-4 py-4 text-left text-ink hover:bg-[#fafafa] sm:gap-[18px] sm:px-6 sm:py-[22px]"
                >
                  <span className="min-w-0 font-sans text-[16px] leading-[1.4] font-semibold tracking-[-0.02em] sm:text-[17px]">
                    {item.q}
                  </span>
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-cyan-soft bg-cyan-wash">
                    <Icon name={isOpen ? "minus" : "plus"} size={14} className="text-teal" />
                  </span>
                </button>
                {isOpen ? (
                  <p className="m-0 max-w-[70ch] px-4 pb-5 text-[15px] leading-[1.7] text-muted sm:px-6 sm:pb-6 sm:text-[15.5px]">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
