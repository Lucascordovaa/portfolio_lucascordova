import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Home/Footer/Footer";

const font = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})



export const metadata: Metadata = {
  title: "Lucas Cordova | Dev",
  description: "Lucas Cordova - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${font.className} antialiased`}
      >
      <ResponsiveNav/>
        {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
