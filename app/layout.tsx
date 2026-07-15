import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
// import FloatingCTA from "@/components/site/FloatingCTA";
// import Script from "next/script";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/* =========================
   GLOBAL SEO METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://itssolution.in"), // Replace with your actual domain

  title: {
    default: "CALYBER — Learn Electro Dance with Akash Swami",
    template: "%s | CALYBER",
  },

  description:
    "Join CALYBER by Akash Swami and master Electro dance through structured online training, WhatsApp learning, live Zoom sessions, mentorship, and a thriving dance community.",

  keywords: [
    "CALYBER",
    "Akash Swami",
    "Electro Dance",
    "Electro Dance Course",
    "Online Dance Classes",
    "Dance Mentorship",
    "Electro Foundation",
    "Dance Training",
    "Freestyle Dance",
    "Dance Community",
    "Dance Course India",
    "WhatsApp Dance Course",
    "Online Electro Course",
    "Live Dance Classes",
    "Electro Dance Academy",
  ],

  authors: [
    {
      name: "Akash Swami",
    },
  ],

  creator: "Akash Swami",

  publisher: "CALYBER",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourdomain.com", // Replace with actual domain

    siteName: "CALYBER",

    title: "CALYBER — Learn Electro Dance with Akash Swami",

    description:
      "Build your dance foundation through CALYBER's structured Electro dance program featuring beginner courses, live Zoom classes, mentorship, WhatsApp learning, and community support.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CALYBER by Akash Swami",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CALYBER — Learn Electro Dance",

    description:
      "Structured Electro dance learning with Akash Swami. Beginner-friendly courses, live classes, mentorship and community.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
