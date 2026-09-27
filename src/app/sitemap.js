import { INDEXABLE_PAGES } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  return INDEXABLE_PAGES.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
