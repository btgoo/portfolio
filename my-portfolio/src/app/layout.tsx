import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Metadata } from "next";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hostGrotesk.className} min-h-screen`}>
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Ot B Portfolio",
  description: "Portfolio of the works I've done",
};
