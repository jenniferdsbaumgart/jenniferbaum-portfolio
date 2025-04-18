import { Inter, Oswald, Abril_Fatface, Bebas_Neue, Montserrat } from "next/font/google";
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

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600', '700'], // você pode escolher os pesos que quiser
  variable: '--font-oswald',
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue só tem um peso
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // você escolhe os pesos que quer usar
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Jennifer Baum",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abrilFatface.variable} ${oswald.variable} ${bebas.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
