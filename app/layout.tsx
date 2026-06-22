import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hazemmeqdad.com"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  keywords: [
    "Hazem Meqdad",
    "Full Stack Developer",
    "Next.js",
    ".NET",
    "React Native",
    "Flutter",
    "portfolio",
    "حازم المقداد",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    url: "https://www.hazemmeqdad.com",
    siteName: `${profile.name} — Portfolio`,
    type: "website",
    images: [{ url: "/avatar.jpeg", width: 460, height: 460, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    images: ["/avatar.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
