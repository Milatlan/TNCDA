import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";

/* ============================= */
/* PREMIUM FONT SYSTEM */
/* ============================= */

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F4B49",
};

export const metadata: Metadata = {
  title: "TNCNA – Tamil Nadu Construction Development Association",
  description:
    "Tamil Nadu Construction Development Association (TNCNA) — the premier professional body for builders, contractors, and real estate developers across Tamil Nadu and Chennai.",
  keywords: [
    "Tamil Nadu Construction Association",
    "TNCNA",
    "Chennai builders association",
    "Tamil Nadu builders",
    "construction company Tamil Nadu",
    "real estate developers Chennai",
    "contractors association Tamil Nadu",
    "building industry Tamil Nadu",
    "construction network Chennai",
  ],

  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },  // ← fixed type (was "images/png")
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "TNCNA – Tamil Nadu Construction Development Association",
    description:
      "Connecting Tamil Nadu's construction industry. Join 200+ members across 45+ chapters.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "TNCNA" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}