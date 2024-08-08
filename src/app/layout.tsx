import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import { fontNunito } from "@/utils/fonts";

export const metadata: Metadata = {
  title: {
    default: "bebé store",
    template: "%s | bebé store",
  },
  description: "Một ước mơ nhỏ từ gia đình",
  icons: {
    icon: {
      url: "/icons/logo.svg",
      type: "image/png",
      sizes: "32x32",
    },
  },
  alternates: {
    canonical: "https://nextjs.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontNunito.className} bg-container-md`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
