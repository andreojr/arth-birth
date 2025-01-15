import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniversário de Arthur",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <audio autoPlay loop>
          <source src="/bita.mp3" type="audio/mpeg" />
          Your browser does not support the audio element
        </audio>
        <div className="bg-[#B3DCF6] min-h-screen flex justify-center items-center overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
