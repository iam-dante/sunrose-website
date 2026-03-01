import "./globals.css";
import { Inter, Bebas_Neue, Space_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Sunrose — Screen Analysis Assistant",
  description:
    "One question, three inputs, one answer. Sunrose receives screenshot, document, and voice—and synthesizes them before responding.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
