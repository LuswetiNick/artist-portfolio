import type { Metadata } from "next";
import { IBM_Plex_Sans, Ojuju } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { getDefaultMetadata } from "@/lib/seo";
import { SanityLive } from "@/sanity/lib/live";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ojujuMono = Ojuju({
  variable: "--font-ojuju",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = getDefaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${ibmPlexSans.variable} ${ojujuMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" />
        <SanityLive />
      </body>
    </html>
  );
}
