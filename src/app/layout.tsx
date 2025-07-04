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
        <link rel="canonical" href="https://full-rewell.ru/" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://full-rewell.ru/" />
        <meta property="og:title" content="Full-Rewell — Фулфилмент, который не подводит" />
        <meta property="og:description" content="Фулфилмент-услуги для маркетплейсов: хранение, упаковка, доставка. Ваше спокойствие — наша работа!" />
        <meta property="og:image" content="https://full-rewell.ru/og-image.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://full-rewell.ru/" />
        <meta name="twitter:title" content="Full-Rewell — Фулфилмент, который не подводит" />
        <meta name="twitter:description" content="Фулфилмент-услуги для маркетплейсов: хранение, упаковка, доставка. Ваше спокойствие — наша работа!" />
        <meta name="twitter:image" content="https://full-rewell.ru/og-image.jpg" />
        <meta name="keywords" content="фулфилмент, склад, маркетплейс, хранение товаров, упаковка, доставка, Full-Rewell, логистика, услуги склада, fulfillment, Wildberries, Ozon, маркетплейсы, логистические услуги, Москва, Россия" />
        <meta name="description" content="Full-Rewell — фулфилмент-услуги для маркетплейсов: хранение, упаковка, доставка. Ваше спокойствие — наша работа! Минимализм, акцентный цвет #ff5c33, SEO-оптимизация." />
        <title>Full-Rewell — Фулфилмент, который не подводит</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Full-Rewell",
          "url": "https://full-rewell.ru/",
          "logo": "https://full-rewell.ru/logo.svg",
          "description": "Фулфилмент-услуги для маркетплейсов: хранение, упаковка, доставка.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://full-rewell.ru/#contact"
          }
        }` }} />
      </head>
      <body>
        <Navbar />
        <div className="pt-20 md:pt-28 px-2 md:px-8 lg:px-16">
        {children}
        </div>
      </body>
    </html>
  );
}
