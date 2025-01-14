import { Geist, Geist_Mono, Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hong Yu's Portfolio",
  description: "Lai Hong Yu's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
