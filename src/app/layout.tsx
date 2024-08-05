import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Marinho",
  description: "Desenvolvedor Web Full Stack | Fullstack Web Developer",
  openGraph: {
    title: "Matheus Marinho",
    description: "Desenvolvedor Web Full Stack | Fullstack Web Developer",
    url: "",
    siteName: "Matheus Marinho",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/98190301?v=4",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
