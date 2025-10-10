import type { LayoutProps } from "@/types";
import type { Metadata } from "next";
import {
  Abril_Fatface,
  Bebas_Neue,
  Inter,
  Montserrat,
  Oswald,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril-fatface",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jennifer Baum - Portfolio",
  description:
    "Professional portfolio showcasing web development projects and experience",
  keywords: [
    "portfolio",
    "web developer",
    "frontend",
    "react",
    "nextjs",
    "typescript",
  ],
  authors: [{ name: "Jennifer Baum" }],
  creator: "Jennifer Baum",
  publisher: "Jennifer Baum",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jenniferbaum.dev",
    title: "Jennifer Baum - Portfolio",
    description:
      "Professional portfolio showcasing web development projects and experience",
    siteName: "Jennifer Baum Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jennifer Baum Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennifer Baum - Portfolio",
    description:
      "Professional portfolio showcasing web development projects and experience",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${oswald.variable} ${bebas.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JB Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2048-2732.jpg"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
