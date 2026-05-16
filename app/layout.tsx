import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Playfair_Display, DM_Sans } from "next/font/google";

/* =========================================
   PREMIUM FONT SYSTEM
========================================= */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

/* =========================================
   VIEWPORT
========================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F4B49",
};

/* =========================================
   SEO + METADATA
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://tncna.co"),

  title: "TNCNA – Tamil Nadu Construction Network Association",

  description:
    "Tamil Nadu Construction Network Association (TNCNA) — the premier professional body for builders, contractors, and real estate developers across Tamil Nadu and Chennai.",

  keywords: [
    "Tamil Nadu Construction Network Association",
    "TNCNA",
    "Chennai builders association",
    "Tamil Nadu builders",
    "construction company Tamil Nadu",
    "real estate developers Chennai",
    "contractors association Tamil Nadu",
    "construction network Chennai",
    "Tamil Nadu infrastructure development",
    "builders community Chennai",
  ],

  alternates: {
    canonical: "https://tncna.co",
  },

  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/logo.png",
  },

  openGraph: {
    title: "TNCNA – Tamil Nadu Construction Network Association",

    description:
      "Connecting Tamil Nadu's construction industry through leadership, networking, innovation, and professional growth across 45+ chapters.",

    url: "https://tncna.co",

    siteName: "TNCNA",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TNCNA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "TNCNA – Tamil Nadu Construction Network Association",

    description:
      "Connecting Tamil Nadu's construction industry across 45+ chapters.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "TNCNA",
    },
  ],
};

/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="bg-white text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}