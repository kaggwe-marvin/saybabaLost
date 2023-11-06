import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | foundug",
    default: "foundug",
  },
  description:
    "The official Centralized Lost and Found Application around campus.",
  metadataBase: new URL("https://foundug.com"),
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
