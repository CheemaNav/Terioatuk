"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function headerOffset() {
  const header = document.querySelector("header");
  return (header?.getBoundingClientRect().height ?? 112) + 12;
}

function scrollToId(id, behavior = "smooth") {
  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const el = document.getElementById(id);
  if (!el) return false;

  const top = window.scrollY + el.getBoundingClientRect().top - headerOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const timers = [];

    function go(behavior = "smooth") {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      if (scrollToId(id, behavior)) return;
      timers.push(window.setTimeout(() => scrollToId(id, behavior), 80));
    }

    timers.push(window.setTimeout(() => go("auto"), 0));
    timers.push(window.setTimeout(() => go("smooth"), 120));
    timers.push(window.setTimeout(() => go("smooth"), 280));

    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = event.target.closest("a[href]");
      if (!link) return;

      let url;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin || !url.hash) return;
      if (url.pathname !== window.location.pathname) return;

      event.preventDefault();
      const id = decodeURIComponent(url.hash.slice(1));
      window.history.pushState(null, "", url.hash);
      scrollToId(id);
    }

    function onHashChange() {
      go("smooth");
    }

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
