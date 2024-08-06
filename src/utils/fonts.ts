import { Inter, Roboto, Nunito } from "next/font/google";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontRoboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const fontNunito = Nunito({
  weight: "400",
  subsets: ["vietnamese"],
  variable: "--sans-serif",
});
