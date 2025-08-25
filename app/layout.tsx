import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-rafi.vercel.app"),
  alternates: {
    canonical: "https://muhammad-rafi.vercel.app",
  },
  title: "Muhammad Rafi - Software Engineer",
  description: "Muhammad Rafi - Software Engineer",
  keywords:
    "Muhammad Rafi, Software Engineer, Web2, Senior Software Engineer, Product Designer, AI, Web3, Finance, User Experience, UI/UX Design, Design Systems, Front-end Development, Decentralized Finance, DeFi, Virtualstaff, Staffadoo, Stealth Startup, Technology, Innovation, Human-Centered Design",
  openGraph: {
    locale: "en_US",
    siteName: "Muhammad Rafi",
    type: "website",
    title: "Muhammad Rafi",
    description: "Muhammad Rafi is a Software engineer, developer & founder.",
    url: "https://muhammad-rafi.vercel.app",
    images: [
      {
        url: "./avatar.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
