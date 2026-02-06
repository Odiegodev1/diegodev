import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner';
const geistSans = Kanit({
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: {
    default: "diegodev | Frontend Developer",
    template: "%s | diegodev",
  },
  description:
    "Portfólio de Diego Mendes, desenvolvedor Frontend especializado em React, Next.js e Tailwind CSS. Criação de interfaces modernas, responsivas e focadas em performance.",
  keywords: [
    "diegodev",
    "Diego Mendes",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portfólio",
    "Desenvolvedor Web",
  ],
  authors: [{ name: "Diego Mendes" }],
  creator: "Diego Mendes",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "diegodev | Frontend Developer",
    description:
      "Conheça o portfólio de Diego Mendes, desenvolvedor Frontend focado em React, Next.js e experiências web modernas.",
    url: "https://diegodev.vercel.app",
    siteName: "diegodev",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "diegodev | Frontend Developer",
    description:
      "Portfólio de Diego Mendes — React, Next.js e Tailwind CSS.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.className} dark antialiased`}
      ><Toaster />
        {children}
      </body>
    </html>
  );
}
