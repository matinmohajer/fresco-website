import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://fresco.xarp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fresco AI — Field reports that write themselves.",
    template: "%s · Fresco AI",
  },
  description:
    "Fresco AI turns a voice note, a photo, and a video clip from the job site into a structured, professional report — automatically. Built for trades, construction, inspections, and municipal field teams.",
  keywords: [
    "field service management",
    "field service software",
    "AI field reports",
    "voice to report",
    "construction reporting software",
    "inspection reporting app",
    "trades management app",
  ],
  openGraph: {
    title: "Fresco AI — Field reports that write themselves.",
    description:
      "Voice note, photo, video — Fresco AI turns it into a structured, reviewed, approved field report automatically.",
    url: siteUrl,
    siteName: "Fresco AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresco AI — Field reports that write themselves.",
    description:
      "AI-native voice-to-report generation with a real admin review-and-approve workflow.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
