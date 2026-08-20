import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "./_components/LightRays";
import { SquareArrowOutUpRight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MintBriq",
  description: "MintBriq recommends GitHub projects based on your experience",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <body className="h-dvh w-full overflow-hidden bg-black text-white">
        <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
          <LightRays
            raysSpeed={0.5}
            lightSpread={0.25}
            rayLength={100}
          />
        </div>

        <div className="relative z-10 h-full overflow-hidden">
          <main className="flex h-full min-w-0 overflow-hidden">
            {children}
          </main>

          <footer className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center gap-4 px-4 text-xs text-slate-400 sm:h-24 sm:px-6 sm:text-sm">
            <p>&copy; {new Date().getFullYear()} <span className="text-teal-400 font-bold">MintBriq</span></p>
            <a
              href="https://github.com/lasjdhu/mintbriq"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white flex items-center gap-1"
            >
              Source <SquareArrowOutUpRight width={16} height={16} />
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
