"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Icon } from "./Icons";
import { Container, Logo, PromoCard, QuoteCta } from "./ui";

const MENUS = ["what", "who", "about"];

function MenuLinks({ item, onNavigate }) {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-[34px] pb-[38px] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] lg:gap-x-10">
      {item.columns.map((column) => (
        <div key={column.title}>
          <p className="eyebrow mb-3.5 text-faint">{column.title}</p>
          <ul className="m-0 grid list-none gap-2.5 p-0">
            {column.links.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className="text-[14.5px] text-ink transition-colors duration-200 hover:text-teal"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <PromoCard kicker={item.promo.kicker} text={item.promo.text} />
    </div>
  );
}

export default function Header() {
  const [menu, setMenu] = useState(null);
  const [open, setOpen] = useState(false);
  const navId = useId();

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeAll() {
    setMenu(null);
    setOpen(false);
  }

  return (
    <header
      onMouseLeave={() => setMenu(null)}
      className="sticky top-0 z-50 border-b border-line bg-white"
    >
      <div className="bg-bar text-[13px] tracking-[0.02em] text-[#b7b9bc]">
        <Container className="flex flex-wrap items-center justify-between gap-x-7 gap-y-2 py-[9px]">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
            United Kingdom
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={SITE.phoneHref} className="text-[#e9eaeb] hover:text-white">
              {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="text-[#e9eaeb] hover:text-white">
              {SITE.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-8 py-3.5">
        <Link href="/#top" onClick={closeAll} className="shrink-0">
          <Logo height={40} priority />
        </Link>

        <nav
          id={navId}
          className="hidden items-center gap-x-[26px] gap-y-1.5 text-[15px] lg:flex"
        >
          {MENUS.map((key) => (
            <div
              key={key}
              onMouseEnter={() => setMenu(key)}
              onFocus={() => setMenu(key)}
              className="relative"
            >
              <Link
                href={NAV[key].href}
                className="inline-flex items-center gap-1.5 py-2 text-ink transition-colors duration-200 hover:text-teal"
                aria-expanded={menu === key}
                aria-haspopup="true"
              >
                {NAV[key].label}
                <Icon name="chevron" size={10} />
              </Link>
            </div>
          ))}
          <Link
            href="/#insights"
            onMouseEnter={() => setMenu(null)}
            className="py-2 text-ink transition-colors duration-200 hover:text-teal"
          >
            What we think
          </Link>
          <Link
            href="/#faq"
            onMouseEnter={() => setMenu(null)}
            className="py-2 text-ink transition-colors duration-200 hover:text-teal"
          >
            FAQ
          </Link>
          <QuoteCta onMouseEnter={() => setMenu(null)} />
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line text-ink transition-colors duration-200 hover:border-cyan hover:text-teal lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </Container>

      {menu && NAV[menu] ? (
        <div className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_18px_40px_rgba(20,20,20,0.08)] lg:block">
          <MenuLinks item={NAV[menu]} onNavigate={() => setMenu(null)} />
        </div>
      ) : null}

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <div className="grid gap-7 px-6 py-6">
            {MENUS.map((key) => (
              <div key={key}>
                <p className="eyebrow mb-3">{NAV[key].label}</p>
                <div className="grid gap-5">
                  {NAV[key].columns.map((column) => (
                    <div key={column.title}>
                      <p className="mb-2.5 text-[13px] font-semibold text-ink">{column.title}</p>
                      <ul className="m-0 grid list-none gap-2 p-0">
                        {column.links.map(([label, href]) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={closeAll}
                              className="text-[14.5px] text-ink-soft hover:text-teal"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/#insights" onClick={closeAll} className="text-[15px] font-medium">
              What we think
            </Link>
            <Link href="/#faq" onClick={closeAll} className="text-[15px] font-medium">
              FAQ
            </Link>
            <QuoteCta className="w-full" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
