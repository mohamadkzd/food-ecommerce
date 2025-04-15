import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header/Header";
import vazirFont from "@/theme/fonts";
import Footer from "@/layouts/footer/Footer";
import Provider from "@/provider/reactQuery";

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
      <body className={`${vazirFont.className}`}>
        <Provider >
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
