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
  title: "Ioda Academy | Video Course",
  description: "Pilihan Kelas Business Development Digital Marketing Human Resources Tax & Accounting Semua Kelas Human Resources",
  authors: [{ name: "Ioda Academy", url: "https://iodacademy.id/" }],
  icons: "https://iodacademy.id/wp-content/uploads/2024/06/logo-ioda-aja-tanpa-bg-300x300.webp",
  //for social media
  openGraph: {
    title: "Ioda Academy | Video Course",
    description: "Pilihan Kelas Business Development Digital Marketing Human Resources Tax & Accounting Semua Kelas Human Resources",
    url: "https://iodacademy.id/",
    siteName: "Ioda Academy",
    images: [
      {
        url: "logo-ioda-aja-tanpa-bg-300x300.ico",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  //for twitter
  twitter: {
    card: "summary_large_image",
    title: "Ioda Academy | Video Course",
    description: "Pilihan Kelas Business Development Digital Marketing Human Resources Tax & Accounting Semua Kelas Human Resources",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
