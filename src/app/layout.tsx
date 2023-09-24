import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/Sidebar/Sidebar";

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
      <body className={`${inter.className} w-full h-screen flex`}>
        <SideBar />
        <main className="flex-1 bg-blue-300">
          {children}
        </main>
      </body>
    </html>
  );
}
