import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/ui/footer";
import Header from "@/components/ui/header";
import HeroesProvider from "./providers/heroes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaHumans",
  description: "Heroes battlefield.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col font-Poppins">
          <HeroesProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </HeroesProvider>
        </div>
      </body>
    </html>
  );
}
