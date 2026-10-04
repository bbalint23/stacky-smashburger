"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openingHours = [
    { day: "Hétfő", hours: "Zárva", closed: true },
    { day: "Kedd", hours: "11:30 – 20:30" },
    { day: "Szerda", hours: "11:30 – 20:30" },
    { day: "Csütörtök", hours: "11:30 – 20:30" },
    { day: "Péntek", hours: "11:30 – 21:30" },
    { day: "Szombat", hours: "16:00 – 21:30" },
    { day: "Vasárnap", hours: "16:00 – 20:00" },
  ]

  return (
    <footer className="bg-white text-foreground pt-24 pb-12 border-t border-secondary/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FELSŐ RÉSZ: MONUMENTÁLIS NÉV & ÚTVONALTERV */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16">
          <div>
            <span className="text-7xl sm:text-8xl lg:text-[9rem] font-luckiest uppercase tracking-tight leading-[0.8] block text-primary/10 select-none">
              STACKY
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight mt-4 max-w-xl leading-tight text-primary">
              Megéheztél? Várunk a KERTVÁROSBAN.
            </h3>
          </div>

          <div>
            <a
              href="https://maps.app.goo.gl/G1HQpmrJf3vbEBVD9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#FF6B00] text-white px-8 py-5 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1 active:scale-95 group shadow-lg shadow-primary/20"
            >
              <span>Útvonaltervezés</span>

              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* KÖZÉPSŐ RÉSZ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-t border-b border-secondary/15 text-sm">

          {/* NYITVATARTÁS */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-6">
              Nyitvatartás
            </p>

            <div className="max-w-md space-y-3">
              {openingHours.map(({ day, hours, closed }) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b border-secondary/10 pb-3"
                >
                  <span className="font-bold text-foreground">
                    {day}
                  </span>

                  <span
                    className={
                      closed
                        ? "font-bold text-foreground/40"
                        : "font-bold text-secondary"
                    }
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-foreground/60 font-medium mt-5">
              * Pénteken és szombaton hosszabbított nyitvatartással nyomjuk.
            </p>
          </div>

          {/* KAPCSOLAT */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">
              Kapcsolat
            </p>

            <div className="space-y-1 font-bold">
              <p>
                <a
                  href="tel:+36301234567"
                  className="hover:text-secondary transition-colors"
                >
                  +36 30 123 4567
                </a>
              </p>

              <p>
                <a
                  href="mailto:hello@stackyburger.hu"
                  className="hover:text-secondary transition-colors"
                >
                  hello@stackyburger.hu
                </a>
              </p>
            </div>
          </div>

          {/* OLDALAK & SOCIAL */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">

            {/* OLDAL */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">
                Oldal
              </p>

              <div className="flex flex-col gap-1 font-bold">
                {["ÉTLAP", "GYIK", "KAPCSOLAT"].map((item) => {
                  const targetId =
                    item === "ÉTLAP"
                      ? "menu"
                      : item === "GYIK"
                        ? "faq"
                        : "contact"

                  return (
                    <a
                      key={item}
                      href={`#${targetId}`}
                      onClick={(e) => scrollToSection(e, targetId)}
                      className="hover:text-secondary transition-colors inline-block w-fit"
                    >
                      {item}
                    </a>
                  )
                })}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">
                Social
              </p>

              <div className="flex flex-col gap-1 font-bold">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-secondary transition-colors"
                >
                  Instagram
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-secondary transition-colors"
                >
                  Facebook
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ALSÓ SÁV */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-foreground/40">
          <p>© {currentYear} STACKY DELI</p>

          <div>
            <a
              href="#"
              className="hover:text-foreground transition-colors uppercase"
            >
              Adatkezelési tájékoztató
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}