import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fizika-6-laboratori.vullnetg.chatgpt.site"),
  title: "Fizika 6 | Laboratori i Matjeve",
  description: "Laborator interaktiv për Kapitullin 2: Trupat dhe sistemet, për klasën e gjashtë në Kosovë.",
  openGraph: {
    title: "Fizika 6 | Laboratori i Matjeve",
    description: "Hyr në laborator, bëj parashikime, mat dhe zbulo si mendon një fizikant.",
    locale: "sq_XK",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fizika 6, Laboratori i Matjeve" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizika 6 | Laboratori i Matjeve",
    description: "Hyr në laborator, bëj parashikime, mat dhe zbulo si mendon një fizikant.",
    images: ["/og.png"],
  },
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
