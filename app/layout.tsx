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
  title: "Beacon Hill Interiors — Interior Services, Boston",
  description:
    "Residential care, commercial cleaning, interior construction, and construction closeout services for Boston's most demanding properties. Licensed. Insured. One accountable team.",
  openGraph: {
    title: "Beacon Hill Interiors",
    description: "One team. Four capabilities. One point of accountability.",
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
