import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheswin Vaddi — AI/ML Engineer & Full Stack Developer",
  description:
    "Cheswin Vaddi is a Computer Science undergraduate exploring AI/ML, data analysis, and full stack development. Explore selected projects, experience, skills, and contact details.",
  keywords: [
    "Cheswin Vaddi",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Python",
    "FastAPI",
    "Data Analysis",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: "Cheswin Vaddi — AI/ML Engineer & Full Stack Developer",
    description:
      "Computer Science undergraduate exploring AI/ML, data analysis, and full stack development.",
    type: "website",
    siteName: "Cheswin Vaddi Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Cheswin Vaddi — AI/ML Engineer & Full Stack Developer",
    description:
      "Explore projects, experience, and skills across AI/ML and full stack development.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
