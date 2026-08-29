import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { EnquiryProvider } from "@/components/enquiry/EnquiryContext";
import EnquiryModal from "@/components/enquiry/EnquiryModal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurelia Estates — Curated Luxury Real Estate",
    template: "%s · Aurelia Estates",
  },
  description:
    "Aurelia Estates is a premium advisory for exceptional homes. Curated residences, discreet service and an eyewatering standard of care across the country's most desirable addresses.",
  keywords: [
    "luxury real estate",
    "premium homes",
    "property advisory",
    "Aurelia Estates",
    "commercial real estate",
  ],
};

export const viewport = {
  themeColor: "#f7f5f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        <EnquiryProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
