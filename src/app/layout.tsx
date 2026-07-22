import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const siteUrl = "https://fresco.xarp.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fresco AI — To Do Lists that build themselves, and come back signed.",
    template: "%s · Fresco AI",
  },
  description:
    "Fresco AI is a general-purpose Field Service Management (FSM) mobile app. A spoken walk-through becomes a structured To Do List, dispatched to the right team member as a text link, and returned to the dispatcher signed.",
  keywords: [
    "field service management",
    "FSM mobile app",
    "to do list app for teams",
    "punch list app",
    "dispatch software",
    "job sign-off app",
    "construction punch list software",
    "inspection reporting app",
    "trades management app",
  ],
  openGraph: {
    title: "Fresco AI — To Do Lists that build themselves, and come back signed.",
    description:
      "Voice, text, or an annotated photo becomes a structured To Do List, dispatched by text link and returned to the dispatcher automatically, ready to forward.",
    url: siteUrl,
    siteName: "Fresco AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresco AI — To Do Lists that build themselves, and come back signed.",
    description:
      "A deterministic engine turns a spoken walk-through into a dispatched To Do List — with a verified report returned to the dispatcher automatically.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
