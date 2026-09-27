import WebDevelopmentPage from "@/components/WebDevelopmentPage";
import {
  WEB_DEV_JSON_LD,
  WEB_DEV_META,
  WEB_DEV_URL,
} from "@/lib/web-development";

export const metadata = {
  title: { absolute: WEB_DEV_META.title },
  description: WEB_DEV_META.description,
  alternates: { canonical: WEB_DEV_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: WEB_DEV_URL,
    title: WEB_DEV_META.title,
    description: WEB_DEV_META.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 900,
        alt: "Web development that ships — Terioat Infotech Ltd",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {WEB_DEV_JSON_LD.map((block) => (
        <script
          key={block["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <WebDevelopmentPage />
    </>
  );
}
