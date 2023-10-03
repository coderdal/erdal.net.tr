import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/Sidebar/Sidebar";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed ERDAL | Software Developer",
  description: "Muhammed ERDAL | Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-screen flex max-md:flex-col`}>
        <SideBar />
        <main className="flex-1 max-w-3xl mx-auto my-20 pb-10 max-md:my-8 max-md:mx-2 leading-7 text-gray-700 animate__animated animate__fadeIn">
          {children}
        </main>
      </body>
    </html>
  );
}
