import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/public/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { ShabnamFont } from "@/utils/font";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "سیستم دریافت کد مرسوله پستی",
  description: "دریافت کد مرسوله برای رهگیری در سامانه پست",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
      <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={ShabnamFont.variable}>
      <Toaster />
      <NextTopLoader
              color="#0ea5e9"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
            />
      <Header />
      <SubHeader />
      <main className="container h-screen flex flex-col items-center justify-center my-7">
        {children}
      </main>
      <Footer />
        </body>
    </html>
  );
}
