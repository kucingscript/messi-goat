import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "moment/locale/id";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messi GOAT",
  description: "Bang Messi Juara Piala Dunia Qatar 2022 Nih Boss, Senggol Dong",
  keywords: "Messi GOAT, kucingscript",
  authors: { name: "kucingscript", url: "https://github.com/kucingscript" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="container min-h-screen">{children}</main>
        <footer className="py-5 text-center bg-zinc-100 mt-[10px]">
          Build with 💕 by Kucingscript
        </footer>
      </body>
    </html>
  );
}
