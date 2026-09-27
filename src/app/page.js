import HomePage from "@/components/HomePage";
import { JSON_LD } from "@/lib/site";

export const metadata = {
  title: {
    absolute: "Software Development Company London | Terioat Infotech Ltd",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <HomePage />
    </>
  );
}
