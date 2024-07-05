import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/layout/Sidebar";
import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sparkademy",
  description: "Nền tảng học lập trình trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
