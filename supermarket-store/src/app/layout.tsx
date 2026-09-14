import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superstore | Retail & Wholesale",
  description:
    "Shop groceries, household products and everyday essentials at competitive retail and wholesale prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}