import "./globals.css";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Surose — Screen Analysis Assistant",
  description:
    "One question, three inputs, one answer. Surose receives screenshot, document, and voice—and synthesizes them before responding."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
