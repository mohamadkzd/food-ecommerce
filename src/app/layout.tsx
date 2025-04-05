import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header/Header";


export const metadata: Metadata = {
  title: "FoodEcommerce",
  description: "kzd food ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className=""
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
