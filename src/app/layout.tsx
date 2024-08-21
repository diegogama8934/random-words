import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FavoriteWordsProvider } from "@/contexts/FavoriteWordsContext";
import "./globals.css";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search word",
  description: "Search a word in english and learn something about it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
      </head>
      <FavoriteWordsProvider>
        <body className={roboto.className}>{children}</body>
      </FavoriteWordsProvider>
    </html>
  );
}
