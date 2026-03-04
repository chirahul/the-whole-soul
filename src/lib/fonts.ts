import { Besley, Fraunces, Anonymous_Pro } from "next/font/google";

export const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-besley",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-fraunces",
  display: "swap",
});

export const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anonymous-pro",
  display: "swap",
});
