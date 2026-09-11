"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CASES } from "@/lib/site";
import { Icon } from "./Icons";

const COUNT = CASES.length;

function realFromTrack(track) {
  if (track <= 0) return COUNT - 1;
  if (track >= COUNT + 1) return 0;
  return track - 1;
}

export default function WorkSlider() {
  const scrollerRef = useRef(null);
  const slideRefs = useRef([]);
  const trackRef = useRef(1);
  const jumping = useRef(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [track, setTrack] = useState(1);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(
    () => [
      { ...CASES[COUNT - 1], id: "clone-last", real: COUNT - 1 },
      ...CASES.map((item, real) => ({ ...item, id: `real-${real}`, real })),
      { ...CASES[0], id: "clone-first", real: 0 },
    ],
    [],
  );

  const scrollToTrack = useCallback((index, behavior = "smooth") => {
    const root = scrollerRef.current;
    const next = Math.max(0, Math.min(slides.length - 1, index));
    const node = slideRefs.current[next];
    if (!root || !node) return;
    const left = node.offsetLeft - (root.clientWidth - node.offsetWidth) / 2;
    root.scrollTo({ left, behavior });
    trackRef.current = next;
    setTrack(next);
  }, [slides.length]);

  const settle = useCallback(() => {
    const root = scrollerRef.current;
    if (!root || jumping.current || drag.current.active) return;

    const mid = root.scrollLeft + root.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slideRefs.current.forEach((node, index) => {
      if (!node) return;
      const center = node.offsetLeft + node.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });

    if (best === 0 || best === COUNT + 1) {
      jumping.current = true;
      const realTrack = best === 0 ? COUNT : 1;
      root.style.scrollSnapType = "none";
      root.style.scrollBehavior = "auto";
      scrollToTrack(realTrack, "auto");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.style.scrollSnapType = "";
          root.style.scrollBehavior = "";
          jumping.current = false;
        });
      });
      return;
    }

    trackRef.current = best;
    setTrack(best);
  }, [scrollToTrack]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const onScroll = () => {
      if (jumping.current) return;
      const mid = root.scrollLeft + root.clientWidth / 2;
      let best = trackRef.current;
      let bestDist = Infinity;
      slideRefs.current.forEach((node, index) => {
        if (!node) return;
        const center = node.offsetLeft + node.offsetWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      if (best !== trackRef.current && best !== 0 && best !== COUNT + 1) {
        trackRef.current = best;
        setTrack(best);
      }
    };

    let settleTimer;
    const onScrollEnd = () => settle();
    const onScrollDebounced = () => {
      onScroll();
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, 90);
    };

    scrollToTrack(1, "auto");
    root.addEventListener("scroll", onScrollDebounced, { passive: true });
    root.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", () => scrollToTrack(trackRef.current, "auto"));
    return () => {
      window.clearTimeout(settleTimer);
      root.removeEventListener("scroll", onScrollDebounced);
      root.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", () => scrollToTrack(trackRef.current, "auto"));
    };
  }, [scrollToTrack, settle]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || paused) return undefined;
    const timer = window.setInterval(() => {
      scrollToTrack(trackRef.current + 1);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, scrollToTrack]);

  const onPointerDown = (event) => {
    const root = scrollerRef.current;
    if (!root || event.pointerType === "touch") return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: root.scrollLeft,
      moved: false,
    };
    root.style.scrollBehavior = "auto";
    root.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    const root = scrollerRef.current;
    if (!root || !drag.current.active) return;
    const dx = event.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    root.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (event) => {
    const root = scrollerRef.current;
    if (!root || !drag.current.active) return;
    drag.current.active = false;
    root.style.scrollBehavior = "";
    const dx = event.clientX - drag.current.startX;
    if (Math.abs(dx) > 70) {
      scrollToTrack(trackRef.current + (dx < 0 ? 1 : -1));
    } else {
      scrollToTrack(trackRef.current);
    }
  };

  const activeReal = realFromTrack(track);

  return (
    <div
      className="work-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="work-scroller"
        role="region"
        aria-roledescription="carousel"
        aria-label="Portfolio"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {slides.map((item, index) => (
          <article
            key={item.id}
            ref={(node) => {
              slideRefs.current[index] = node;
            }}
            className={`work-slide ${index === track ? "is-active" : ""}`}
            onClick={() => {
              if (drag.current.moved) return;
              if (index !== track) scrollToTrack(index);
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 62rem, 86vw"
              className="object-cover"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,24,0.08)_0%,rgba(20,22,24,0.28)_42%,rgba(16,18,20,0.88)_100%)]" />
            <div className="relative z-10 mt-auto max-w-[36rem] p-[clamp(22px,4vw,42px)] text-white">
              <p className="m-0 mb-2 font-mono text-[11px] tracking-[0.16em] text-white/70 uppercase">
                {item.kicker}
              </p>
              <h3 className="m-0 font-sans text-[clamp(26px,3vw,40px)] font-bold leading-[1.12] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-3 mb-0 max-w-[46ch] text-[15px] leading-[1.6] text-white/80">
                {item.body}
              </p>
              <Link
                href={item.href || "/#quote"}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                className="pointer-events-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2.5 text-[14.5px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
                onClick={(event) => event.stopPropagation()}
              >
                {item.href ? "Visit site" : "View project"}
                <Icon name="arrow" size={15} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5">
        {CASES.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            aria-current={index === activeReal ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeReal ? "w-7 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/50"
            }`}
            onClick={() => scrollToTrack(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
