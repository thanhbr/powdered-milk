import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

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
  const headerStyle = {
    backgroundColor: "lightblue",
    padding: "1rem",
  };

  const footerStyle = {
    position: "fixed",
    bottom: "0",
    backgroundColor: "ghostwhite",
    padding: "1rem",
    width: "100%",
  } as React.CSSProperties;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/png" sizes="32x32" />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <header style={headerStyle}>
          <p>Header</p>
        </header>
        {children}
        <footer style={footerStyle}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
