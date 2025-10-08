import {
  Inter,
  Oswald,
  Abril_Fatface,
  Bebas_Neue,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import type { LayoutProps } from "@/types";

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
  title: "Jennifer Baum",
  description: "Portfolio website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${oswald.variable} ${bebas.variable} ${montserrat.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
