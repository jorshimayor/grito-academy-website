import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grito Africa",
  description: "Hire African Talents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>{children}</body>
    </html>
  );
}
