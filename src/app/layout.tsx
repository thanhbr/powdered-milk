import type { Metadata } from "next";

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fontRoboto } from "@/utils/fonts";


export const metadata: Metadata = {
  title: {
    default: "Tiệm sữa mần xanh",
    template: "%s | Tiệm sữa mần xanh",
  },
  description: "Một ước mơ nhỏ từ gia đình",
  icons: {
    icon: {
      url: "/icons/logo.svg",
      type: "image/png",
      sizes: "32x32"
    }
  },
  alternates: {
    canonical: "https://nextjs.org",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontRoboto.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
