import { SITE } from "@/lib/site";
import { AI_AUTO_URL } from "@/lib/ai-automation";
import { WEB_DEV_URL } from "@/lib/web-development";

export const CANONICAL_ORIGIN = SITE.canonicalOrigin.replace(/\/$/, "");

export const INDEXABLE_PAGES = [
  { url: `${CANONICAL_ORIGIN}/`, changeFrequency: "weekly", priority: 1 },
  { url: WEB_DEV_URL, changeFrequency: "weekly", priority: 0.9 },
  { url: AI_AUTO_URL, changeFrequency: "weekly", priority: 0.9 },
  {
    url: `${CANONICAL_ORIGIN}/portfolio`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${CANONICAL_ORIGIN}/about`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${CANONICAL_ORIGIN}/contact`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${CANONICAL_ORIGIN}/privacy`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];
