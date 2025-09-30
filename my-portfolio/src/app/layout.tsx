import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Ot B Portfolio",
  description: "Portfolio of the works I've done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen"
      ><ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
