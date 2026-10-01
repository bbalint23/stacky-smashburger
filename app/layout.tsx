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
  title: 'STACKY DELI | Nyíregyháza',
  description: 'Szaftos Angus smashburgerek, argentin rib-eye cheesesteak, csöpögős chopped cheese és ropogós burgonya Nyíregyházán. Keresd a STACKY DELI-t a Derű utcában!',
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
    'DELI',
    'STACKY DELI',
    'STACKY Smash and Sandwich',
    'stacky nyíregyháza',
    'classic burger nyíregyháza',
    'oklahoma burger nyíregyháza',
    'loaded fries nyíregyháza',
    'vacsora Nyíregyháza',
    'cheesesteak nyíregyháza',
    'kertváros étterem nyíregyháza',
    'prémium szendvics nyíregyháza',
    'angus burger nyíregyháza',
    'meleg szendvics nyíregyháza'
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
    title: 'STACKY DELI | Nyíregyháza',
    description: 'Szaftos Angus smashburgerek, argentin rib-eye cheesesteak, csöpögős chopped cheese és ropogós burgonya Nyíregyházán. Keresd a STACKY DELI-t a Derű utcában!',
    url: 'https://stackyburger.hu',
    siteName: 'STACKY',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STACKY DELI kínálata',
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
    "name": "STACKY DELI",
    "image": "https://stackyburger.hu/opengraph-image.jpg",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "servesCuisine": "American, Smash Burger, Beef, Sandwich, NY Chopped cheese, Philly Cheesesteak, fries, sauce",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Derű utca 20",
      "addressLocality": "Nyíregyháza",
      "postalCode": "4400",
      "addressCountry": "HU"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.956899,
      "longitude": 21.689940
    },
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
    "opens": "11:30",
    "closes": "20:30"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Friday",
    "opens": "11:30",
    "closes": "21:30"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "16:00",
    "closes": "21:30"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "16:00",
    "closes": "20:00"
  }
],
    "hasMenu": {
      "@type": "Menu",
      "name": "STACKY DELI Menü",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Smashburger",
          "itemListElement": [
            {
              "@type": "MenuItem",
              "name": "Classic Smash",
              "description": "burgonyás buci, 160g Angus marhahús, amerikai sajt, savanyú uborka, STACKY SZÓSZ",
              "offers": {
                "@type": "Offer",
                "price": "2990",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Oklahoma Smash",
              "description": "burgonyás buci, 160g Angus marhahús, amerikai sajt, sült hagyma, savanyú uborka, mustár",
              "offers": {
                "@type": "Offer",
                "price": "2990",
                "priceCurrency": "HUF"
              }
            }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Burger Combo",
          "itemListElement": [
            {
              "@type": "MenuItem",
              "name": "Single Combo (Classic/Oklahoma)",
              "description": "1x BURGER, 1x BURGONYA",
              "offers": {
                "@type": "Offer",
                "price": "3590",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Double Combo (Classic/Oklahoma)",
              "description": "BURGER x2, BURGONYA x2",
              "offers": {
                "@type": "Offer",
                "price": "6990",
                "priceCurrency": "HUF"
              }
            }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Sandwich",
          "itemListElement": [
            {
              "@type": "MenuItem",
              "name": "Philly Cheesesteak",
              "description": "burgonyás roll, 130g ARGENTIN RIB-EYE steak, amerikai sajt, sült hagyma, majonéz",
              "offers": {
                "@type": "Offer",
                "price": "4690",
                "priceCurrency": "HUF"
              }
            },
            {
              "@type": "MenuItem",
              "name": "NY Chopped Cheese",
              "description": "burgonyás roll, 160g Angus marhahús, amerikai sajt, sült hagyma, saláta, paradicsom, Stacky szósz",
              "offers": {
                "@type": "Offer",
                "price": "3590",
                "priceCurrency": "HUF"
              }
            },
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Side",
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
              "name": "Stacky szósz",
              "offers": {
                "@type": "Offer",
                "price": "450",
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