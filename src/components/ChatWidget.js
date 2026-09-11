"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[80] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_44px_rgba(20,20,20,0.16)]">
          <div className="flex items-center justify-between gap-3 bg-hero px-[18px] py-4 text-white">
            <div>
              <p className="m-0 text-[15px] font-semibold">Terioat Infotech</p>
              <p className="mt-0.5 mb-0 text-[12.5px] text-[#b0b2b6]">
                UK team · replies in minutes
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 text-[18px] leading-none text-[#b0b2b6]"
            >
              ×
            </button>
          </div>
          <div className="p-[18px]">
            <p className="mb-4 text-[14.5px] leading-[1.6] text-ink-soft">
              Hi — tell us what you are building, or ask for indicative cost. A
              UK engineer will reply, not a bot.
            </p>
            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="block rounded-[10px] bg-cyan py-3 text-center font-semibold text-navy transition-colors hover:bg-teal hover:text-white"
            >
              Start an enquiry
            </Link>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-12 items-center gap-2.5 rounded-full bg-cyan px-4 py-[13px] text-[15px] font-semibold text-navy shadow-[0_10px_26px_rgba(16,184,204,0.35)] transition-colors hover:bg-teal hover:text-white sm:px-5"
      >
        <Icon name="chat" size={18} />
        Chat with us
      </button>
    </div>
  );
}
