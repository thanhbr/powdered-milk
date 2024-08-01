import { Inter, Roboto } from "next/font/google";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontRoboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
