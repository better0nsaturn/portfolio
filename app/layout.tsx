import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

const suisse = localFont({
  src: [
    { path: "../public/fonts/SuisseIntl-Thin.otf",       weight: "100", style: "normal" },
    { path: "../public/fonts/SuisseIntl-UltraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/SuisseIntl-Light.otf",      weight: "300", style: "normal" },
    { path: "../public/fonts/SuisseIntl-Book.otf",       weight: "350", style: "normal" },
    { path: "../public/fonts/SuisseIntl-Regular.otf",    weight: "400", style: "normal" },
    { path: "../public/fonts/SuisseIntl-Medium.otf",     weight: "500", style: "normal" },
    { path: "../public/fonts/SuisseIntl-SemiBold.otf",   weight: "600", style: "normal" },
    { path: "../public/fonts/SuisseIntl-Bold.otf",       weight: "700", style: "normal" },
    { path: "../public/fonts/SuisseIntl-Black.otf",      weight: "900", style: "normal" },
    { path: "../public/fonts/SuisseIntl-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/SuisseIntl-LightItalic.otf",   weight: "300", style: "italic" },
  ],
  variable: "--font-suisse",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Арина Бражникова — Product Designer",
  description:
    "Портфолио продуктового дизайнера. Проектирую цифровые продукты с фокусом на пользовательский опыт, системное мышление и визуальную точность.",
  keywords: ["product designer", "UX/UI", "портфолио", "дизайнер"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={suisse.variable}>
      <body className="min-h-dvh flex flex-col">
        <TopBar />
        <main className="flex-1 content-with-nav">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
