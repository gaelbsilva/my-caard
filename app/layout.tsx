import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import { Press_Start_2P } from 'next/font/google'
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
});

export const metadata: Metadata = {
  title: "my caard",
  description: "this is my card !",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.className} ${pressStart2P.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
