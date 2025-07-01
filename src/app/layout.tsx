import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Full-Rewell",
  description: "Одностраничный лэндинг с формой обратной связи. Минимализм, акцентный цвет #ff5c33, SEO-оптимизация.",
  openGraph: {
    title: "Full-Rewell",
    description: "Одностраничный лэндинг с формой обратной связи. Минимализм, акцентный цвет #ff5c33, SEO-оптимизация.",
    url: "https://rewell.ru/",
    siteName: "Rewell",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Rewell",
    description: "Одностраничный лэндинг с формой обратной связи. Минимализм, акцентный цвет #ff5c33, SEO-оптимизация.",
  },
  metadataBase: new URL("https://rewell.ru/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rewell.ru/" />
      </head>
      <body>
        <Navbar />
        <div style={{paddingLeft: '20%', paddingRight: '20%'}} className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
