import { Figtree, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { JSON_LD, SITE } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title:
    "Software Development Company in London, UK | AI Automation Agency — Terioat Infotech",
  description:
    "Terioat Infotech is a UK software development company in London — custom software development, mobile app development, AI automation and AI agent development, plus dedicated and white-label development teams. Get a quote in 2 working days.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Terioat Infotech",
    url: "/",
    title: "Software Development Company in London, UK | Terioat Infotech",
    description:
      "Custom software development, mobile apps, AI automation and dedicated development teams for UK enterprises and agencies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in London, UK | Terioat Infotech",
    description:
      "Custom software development, mobile apps, AI automation and dedicated development teams for UK enterprises and agencies.",
  },
  icons: {
    icon: [{ url: "/terioat_fav.png", type: "image/png" }],
    shortcut: "/terioat_fav.png",
    apple: "/terioat_fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${figtree.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
