import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Layout/Header/Header";
import Footer from "@/app/components/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Автомойка 24/7 Минск",
  description:
    "Круглосуточная автомойка в Минске. Полировка, мойка, скидки, акции.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
