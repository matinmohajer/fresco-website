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

const siteUrl = "https://fresco.xarp.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fresco AI — To Do Lists that create themselves, and sign themselves off.",
    template: "%s · Fresco AI",
  },
  description:
    "A spoken walk-through becomes a structured To Do List, dispatched to the right team member as a text link, and returned as a verified, signed-off report. Think DocuSign, built for the job site.",
  keywords: [
    "field service management",
    "field service software",
    "to do list app for teams",
    "punch list app",
    "dispatch software",
    "job sign-off app",
    "construction punch list software",
    "inspection reporting app",
    "trades management app",
  ],
  openGraph: {
    title: "Fresco AI — To Do Lists that create themselves, and sign themselves off.",
    description:
      "Voice, text, or an annotated photo becomes a structured To Do List, dispatched by text link and returned as a verified, signed-off report.",
    url: siteUrl,
    siteName: "Fresco AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresco AI — To Do Lists that create themselves, and sign themselves off.",
    description:
      "A deterministic engine turns a spoken walk-through into a dispatched, signed-off To Do List — with a verified report returned automatically.",
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
