"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#fff5ec] text-[#00674b] pt-24 pb-12 border-t border-[#00674b]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FELSŐ RÉSZ: MONUMENTÁLIS NÉV & ÚTVONALTERV */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16">
          <div>
            <span className="text-7xl sm:text-8xl lg:text-[9rem] font-luckiest uppercase tracking-tight leading-[0.8] block text-[#00674b]/10 select-none">
              STACKY
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight mt-4 max-w-xl leading-tight">
              Megéheztél? Várunk a KERTVÁROSBAN.
            </h3>
          </div>

          <div>
            <a 
              href="https://maps.app.goo.gl/G1HQpmrJf3vbEBVD9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#00674b] text-[#fff5ec] px-8 py-5 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#22c55e] hover:-translate-y-1 active:scale-95 group shadow-lg shadow-[#00674b]/10"
            >
              <span>Útvonaltervezés</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* KÖZÉPSŐ RÉSZ: MODERNEBB, VIZUÁLIS ELRENDEZÉS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-t border-b border-[#00674b]/10 text-sm">
          
         {/* NYITVATARTÁS - VIZUÁLIS IDŐVONAL (6 oszlop széles az extra helyért) */}
<div className="lg:col-span-6">
  <p className="text-xs font-bold uppercase tracking-widest text-[#00674b]/40 mb-6">
    Nyitvatartás
  </p>
  
  {/* Vizuális naptár chipek */}
  <div className="flex flex-wrap gap-2 mb-4">
    {[
      { day: "H", hours: "Zárva", closed: true },
      { day: "K", hours: "11:30-20:30", closed: false },
      { day: "Sze", hours: "11:30-20:30", closed: false },
      { day: "Cs", hours: "11:30-20:30", closed: false },
    ].map(({ day, hours, closed }) => (
      <div 
        key={day} 
        className={`px-4 py-3 rounded-xl font-bold text-center min-w-[50px] border ${
          closed
            ? "border-[#00674b]/10 text-[#00674b]/30 bg-[#00674b]/5" 
            : "border-[#00674b]/20 bg-white text-[#00674b]"
        }`}
      >
        <span className="block text-xs uppercase opacity-60 mb-1">{day}</span>
        <span className="text-xs block">{hours}</span>
      </div>
    ))}
    
    {[
      { day: "P", hours: "11:30-21:30" },
      { day: "Szo", hours: "16:00-21:30" },
    ].map(({ day, hours }) => (
      <div 
        key={day} 
        className="px-4 py-3 rounded-xl font-bold text-center min-w-[50px] border border-[#22c55e] bg-[#22c55e]/10 text-[#00674b]"
      >
        <span className="block text-xs uppercase text-[#22c55e] mb-1">{day}</span>
        <span className="text-xs block">{hours}</span>
      </div>
    ))}

    <div className="px-4 py-3 rounded-xl font-bold text-center min-w-[50px] border border-[#00674b]/20 bg-white text-[#00674b]">
      <span className="block text-xs uppercase opacity-60 mb-1">V</span>
      <span className="text-xs block">16:00-20:00</span>
    </div>
  </div>

  <p className="text-xs text-[#00674b]/60 font-medium">
    * Pénteken és szombaton hosszabbított nyitvatartással nyomjuk.
  </p>
</div>

          {/* KAPCSOLAT (3 oszlop) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00674b]/40 mb-4">Kapcsolat</p>
            <div className="space-y-1 font-bold">
              <p><a href="tel:+36301234567" className="hover:text-[#22c55e] transition-colors">+36 30 123 4567</a></p>
              <p><a href="mailto:hello@stacky.hu" className="hover:text-[#22c55e] transition-colors">hello@stacky.hu</a></p>
            </div>
          </div>

          {/* OLDALAK & SOCIAL (3 oszlop) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00674b]/40 mb-4">Oldal</p>
              <div className="flex flex-col gap-1 font-bold">
                {["ÉTLAP", "GYIK", "KAPCSOLAT"].map((item) => {
                  const targetId = item === "ÉTLAP" ? "menu" : item === "GYIK" ? "faq" : "contact"
                  return (
                    <a
                      key={item}
                      href={`#${targetId}`}
                      onClick={(e) => scrollToSection(e, targetId)}
                      className="hover:text-[#22c55e] transition-colors inline-block w-fit"
                    >
                      {item}
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00674b]/40 mb-4">Social</p>
              <div className="flex flex-col gap-1 font-bold">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#22c55e] transition-colors">
                  Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#22c55e] transition-colors">
                  Facebook <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ALSÓ SÁV */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#00674b]/40">
          <p>© {currentYear} STACKY DELI</p>
          <div>
            <a href="#" className="hover:text-[#00674b] transition-colors uppercase">Adatkezelési tájékoztató</a>
          </div>
        </div>

      </div>
    </footer>
  )
}