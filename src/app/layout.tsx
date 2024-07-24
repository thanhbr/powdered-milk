import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const poppins = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tiệm sữa mần xanh",
    template: "%s | Tiệm sữa mần xanh",
  },
  description: "Một ước mơ nhỏ từ gia đình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icons/logo.svg" type="image/png" sizes="32x32" />
      </Head>
      <body className={`${poppins.className} bg-sky-50`} suppressHydrationWarning={true}>
        <header className="p-4">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
