import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xfactor Bizz | Find the perfect influencer for your brand",
  description: "create your brand story with Xfactor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${geistSans.className}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
