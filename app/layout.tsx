import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SayBaBa",
  description: "Lost and Found Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
