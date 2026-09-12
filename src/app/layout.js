import { Figtree, IBM_Plex_Mono } from "next/font/google";
import HashScroll from "@/components/HashScroll";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: "Custom Software & AI Automation Agency London | Terioat Infotech",
  description:
    "AI automation, custom software development, mobile apps and dedicated teams for UK enterprises and agencies. Based in London.",
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
    title: "Custom Software & AI Automation Agency London | Terioat Infotech",
    description:
      "AI automation, custom software development, mobile apps and dedicated teams for UK enterprises and agencies. Based in London.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 900,
        alt: "Terioat Infotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Automation Agency London | Terioat Infotech",
    description:
      "AI automation, custom software development, mobile apps and dedicated teams for UK enterprises and agencies. Based in London.",
    images: ["/og.jpg"],
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
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans text-ink" suppressHydrationWarning>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <HashScroll />
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
