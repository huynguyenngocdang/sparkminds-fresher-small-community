import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const inter = localFont({
  src: "../app/Inter-Regular.ttf",
  display: "swap",
  variable: "--font-inter",
});

export { manrope, roboto, inter };
