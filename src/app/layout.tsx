import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/global.css";
import { Providers } from "@/components/navigation-bar/Providers";
import { NavBar } from "@/components/navigation-bar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import FooterBar from "@/components/footer-bar/FootBar";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MEMORA NFT (DEMO)",
  description:
    "This DEMO is intended to offer the creation of a product that is expected to consistently run well and as well as possible, according to the income generated and the value formed by its users.",
};

function getThemeClass() {
  const prefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkMode ? "dark" : "";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={getThemeClass()}>
      <body
        className={`bg-background dark:bg-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <NavBar />
          {children}
          <Analytics />
          <FooterBar />
        </Providers>
      </body>
    </html>
  );
}
