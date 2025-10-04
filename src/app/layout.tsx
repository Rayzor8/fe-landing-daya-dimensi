import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daya Dimensi Indonesia",
  description: "Daya Dimensi Indonesia is a world-class company preferred by individual and organizations transforming their managers, leaders, and teams to become exceptional leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ urbanist.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
