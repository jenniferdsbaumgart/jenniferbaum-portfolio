import { Inter, Kumar_One, Abril_Fatface } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '700'],
});

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril-fatface',
});

const kumarOne = Kumar_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kumar-one',
});

export const metadata = {
  title: "Jennifer Baum",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abrilFatface.variable} ${kumarOne.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
