import type { Metadata } from "next";
import "./globals.css";
import { inter, manrope, roboto } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học lập trình trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${roboto.variable} 
          ${inter.variable} 
          ${manrope.variable} 
          font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
