import { Playfair_Display, DM_Sans, Fraunces } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-fraunces",
  display: "swap",
});
