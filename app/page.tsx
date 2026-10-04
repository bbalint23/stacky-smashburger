"use client"; // Fontos a kliensoldali animációkhoz

import { Header } from "@/components/stacky/header"
import { Hero } from "@/components/stacky/hero"
import MonthlySpecial from '@/components/MonthlySpecial' // Az új komponens importálása
import MenuSection from "@/components/stacky/menu-section"
import { FAQSection } from "@/components/stacky/faq-section"
import { ContactSection } from "@/components/stacky/contact-section"
import { Footer } from "@/components/stacky/footer"

export default function Home() {
  const isComingSoon = true;  // true/false kapcsoló a coming soon oldalhoz -- ha true akkor coming soon felirat

  if (isComingSoon) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6">
        
        {/* LOGO - Minimalista verzió a Luckiest Guy betűvel */}
        <div className="mb-16">
          <div className="h-20 w-20 rounded-xl bg-[#FF6B00] flex items-center justify-center shadow-2xl">
            <span className="text-5xl font-luckiest text-white pt-1">S</span>
          </div>
        </div>
        
        {/* SZÖVEG */}
        <div className="text-center mb-12">
          <h1 className="font-luckiest text-4xl md:text-6xl text-primary tracking-wide">
            STACKY DELI
          </h1>
          <p className="mt-4 font-space-grotesk text-secondary text-sm md:text-base tracking-[0.2em] uppercase font-bold">
            Nyíregyháza, kertváros // HAMAROSAN
          </p>
        </div>

        {/* KOCKÁS TÖLTŐSÁV ANIMÁCIÓ */}
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="h-3 w-3 md:h-4 md:w-4 bg-[#FF6B00] rounded-sm animate-pulse"
              style={{ 
                animationDelay: `${i * 200}ms`,
                opacity: 0.2 
              }}
            />
          ))}
        </div>

        {/* LÁBJEGYZET */}
        <div className="absolute bottom-10">
          <p className="text-secondary/60 font-space-grotesk text-[10px] uppercase tracking-[0.5em] font-bold">
            TÖLTŐDÜNK...
          </p>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          .animate-pulse {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Hero />
      
      {/* Itt jelenik meg a Hónap Burgere ajánlat */}
      <MonthlySpecial />
      
      <MenuSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}