import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fizika 6 | Laboratori i Matjeve",
  description: "Laborator interaktiv për Kapitullin 2: Trupat dhe sistemet, për klasën e gjashtë në Kosovë.",
  other: {
    "theme-color": "#071522",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body className="antialiased">{children}</body>
    </html>
  );
}
