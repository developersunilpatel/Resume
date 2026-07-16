import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunil Patel | Frontend Engineer",
  description:
    "Frontend Developer specialized in React.js, Next.js, TypeScript and modern UI development.",
  keywords: [
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "TypeScript",
  ],
  authors: [{ name: "Sunil Patel" }],
  openGraph: {
    title: "Sunil Patel Portfolio",
    description: "Modern frontend developer portfolio",
    url: "https://yourdomain.com",
    siteName: "Sunil Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-orange-700 selection:text-white">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
