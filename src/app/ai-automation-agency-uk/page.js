import AIAutomationPage from "@/components/AIAutomationPage";
import {
  AI_AUTO_JSON_LD,
  AI_AUTO_META,
  AI_AUTO_URL,
} from "@/lib/ai-automation";

export const metadata = {
  title: AI_AUTO_META.title,
  description: AI_AUTO_META.description,
  alternates: { canonical: AI_AUTO_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: AI_AUTO_URL,
    title: AI_AUTO_META.title,
    description: AI_AUTO_META.description,
    images: [
      {
        // TODO: replace with 1200×630 OG (“AI that earns its place” + logo) when the asset is ready
        url: "/og.jpg",
        width: 1200,
        height: 900,
        alt: "AI that earns its place — Terioat Infotech Ltd",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {AI_AUTO_JSON_LD.map((block) => (
        <script
          key={block["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <AIAutomationPage />
    </>
  );
}
