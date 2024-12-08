import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I Ching Art & Poetry",
  description: "I Ching Art & Poetry with Meryl Ann Butler and Josh Mitteldorf"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="font-default min-h-[calc(100vh-182px)]">
          {children}
        </div>
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-28J2ZDLR3P" />
    </html>
  );
}
