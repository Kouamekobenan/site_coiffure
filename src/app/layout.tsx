import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Chez Monsieur K",
  description: "Site vitrine du salon de coiffure",
  verification: {
    google: "82g5U_dAM6cNpBMDgsZBcwitt7TtJdoEaveCMTgaulM",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
