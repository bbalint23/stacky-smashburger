import type { Metadata } from 'next'
import { Outfit, Space_Grotesk, Luckiest_Guy } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

// Betűtípusok beállítása
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-luckiest'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stackyburger.hu'),
  title: 'STACKY Smashburgers & more | Nyíregyháza',
  description: 'Valami készülődik Nyíregyházán, ami után már nem fogsz ugyanúgy nézni egy smashburgerre. A visszaszámlálás elindult. Készülj a STACKY élményre!',
  keywords: [
    'smash burger',
    'Nyíregyháza burger',
    'hamburger Nyíregyháza',
    'kajarendelés Nyíregyháza',
    'ételrendelés nyíregyháza',
    'street food nyíregyháza',
    'smashburger nyíregyháza',
    'smash burger nyíregyháza',
    'STACKY',
    'stacky nyíregyháza',
    'ebéd rendelés nyíregyháza',
    'vacsora Nyíregyháza'
  ],
  robots: 'index, follow',
  generator: 'v0.app',
  verification: {
    google: '9Oqyw2B77jK7QKLJdcpQnFNXRoP_HNJJ0Kn_GIzNkpE',
  },
  icons: {
    icon: [
      { url: "/stacky_logo.svg" },
      { url: "/icon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: 'STACKY Smashburgers & more | Nyíregyháza',
    description: 'Valami készülődik Nyíregyházán, ami után már nem fogsz ugyanúgy nézni egy smashburgerre. A visszaszámlálás elindult. Készülj a STACKY élményre!',
    url: 'https://stackyburger.hu',
    siteName: 'STACKY',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STACKY Smashburgers kínálata',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
}

// SEO Schema
function RestaurantSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "STACKY Smashburgers & more",
    "image": "https://stackyburger.hu/opengraph-image.jpg",
    "priceRange": "$$",
    "servesCuisine": "American, Smash Burger",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "KORZÓ 000",
      "addressLocality": "Nyíregyháza",
      "postalCode": "4400",
      "addressCountry": "HU"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.95823879533337,
      "longitude": 21.717593480377648
    },

    "hasMenu": {
      "@type": "Menu",
      "name": "Stacky Menü",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Burgerek",
          "itemListElement": [
            {
              "@type": "MenuItem",
              "name": "STACKY burger",
              "description": "burgonyás buci, dupla marhahús, dupla cheddar, STACKY black jam, jalapeño, STACKY szósz",
              "offers": {
                "@type": "Offer",
                "price": "3290",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Bacon burger",
              "description": "briós buci, dupla marhahús, cheddar, bacon, savanyú uborka, baconnaise",
              "offers": {
                "@type": "Offer",
                "price": "3090",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Oklahoma burger",
              "description": "burgonyás buci, dupla marhahús, cheddar, sült hagyma, savanyú uborka, mustár",
              "offers": {
                "@type": "Offer",
                "price": "2890",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Classic burger",
              "description": "burgonyás buci, dupla marhahús, cheddar, savanyú uborka, mustár",
              "offers": {
                "@type": "Offer",
                "price": "2790",
                "priceCurrency": "HUF"
              }
            }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Snackek & Köretek",
          "itemListElement": [
            {
              "@type": "MenuItem",
              "name": "Fűszeres burgonya",
              "offers": {
                "@type": "Offer",
                "price": "890",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Fullos burgonya",
              "description": "burgonya, STACKY black jam, bacon, jalapeño, cheddar, STACKY szósz",
              "offers": {
                "@type": "Offer",
                "price": "2490",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Jalapeño poppers",
              "description": "sajttal töltött, bundázott jalapeño",
              "offers": {
                "@type": "Offer",
                "price": "1990",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Chicken strips",
              "description": "bundázott csirkemellcsíkok",
              "offers": {
                "@type": "Offer",
                "price": "1690",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Buffalo falatok",
              "description": "bundázott, csípős csirkefalatkák, STACKY szósszal",
              "offers": {
                "@type": "Offer",
                "price": "1990",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Hagymakarikák",
              "description": "bundázott hagymakarikák",
              "offers": {
                "@type": "Offer",
                "price": "890",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Coleslaw",
              "description": "házi, majonézes káposztasaláta",
              "offers": {
                "@type": "Offer",
                "price": "790",
                "priceCurrency": "HUF"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <Script
      id="restaurant-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className="scroll-smooth bg-background">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} ${luckiestGuy.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <RestaurantSchema />
        <CookieBanner />
      </body>
    </html>
  );
}