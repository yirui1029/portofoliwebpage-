import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Head from "next/head"; // ✅ Import de Head
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "my portfolio page of developer web",
  description: "This covers my achievements in web development and provides an overview of my background",
  authors: [{ name: "yirui Dupuy", url: "https://www.linkedin.com/in/yirui-dupuy-23078347" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ Meta tag pour rendre le site responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
