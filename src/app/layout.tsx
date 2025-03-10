import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./component/NavBar";
import Image from "next/image"
import ahmed from "../app/assets/Comp 10.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  h-full relative `} 
        
      ><Image src={ahmed} alt="Description of Mizu" className="object-cover h-screen -z-10" layout="fill" objectFit="cover"/><NavBar /> 
        {children}
      </body>
    </html>
  );
}
