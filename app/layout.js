import "./globals.css";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Sunrose — Screen Analysis Assistant",
  description:
    "One question, three inputs, one answer. Sunrose receives screenshot, document, and voice—and synthesizes them before responding."
};

export default function RootLayout({ children }) {
  return <html lang="en" className={spaceMono.variable}><body>{children}</body></html>;
}
