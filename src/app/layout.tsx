import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const overpass = localFont({
  src: "./fonts/Overpass-VariableFont_wght.ttf",
  variable: "--font-overpass",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ra's safe haven",
  description: "marunio/risoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${overpass.variable} antialiased bg-black`}
        style={{

      }}        
      >
        {children}
      </body>
    </html>
  );
}
