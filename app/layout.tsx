import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beacon Hill Interiors — Private Home Services, Boston",
  description:
    "Private home care, interior painting, and residential refresh services for discerning homes in Boston's finest neighborhoods.",
  openGraph: {
    title: "Beacon Hill Interiors",
    description: "Quietly exceptional interiors thoughtfully managed.",
    siteName: "Beacon Hill Interiors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
