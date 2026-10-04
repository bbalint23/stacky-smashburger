"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
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

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-16 flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* BAL OLDAL: SZÖVEGEK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >

            {/* HELYSZÍN */}
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#007AFF]/55 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white mb-6">
              <MapPin className="h-3.5 w-3.5 text-white" />
              Nyíregyháza, Derű utca 20.
            </div>

            {/* FŐCÍM */}
            <h1 className="leading-[0.95]">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-luckiest uppercase tracking-wide text-primary block">
                STACKY DELI
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-lg mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Ha szaftos{" "}
              <strong className="font-extrabold text-foreground">
                ANGUS SMASHBURGER
              </strong>
              , argentin rib-eye{" "}
              <strong className="font-extrabold text-foreground">
                PHILLY CHEESESTEAK
              </strong>
              , egy csöpögős{" "}
              <strong className="font-extrabold text-foreground">
                NY CHOPPED CHEESE
              </strong>
              , vagy egy ropogós{" "}
              <strong className="font-extrabold text-foreground">
                SÜLT BURGONYA
              </strong>{" "}
              a kívánságod: Nyíregyháza, Derű utca 20.
            </motion.p>

            {/* GOMBOK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* ÉTLAP */}
              <a
                href="#menu"
                onClick={(e) => scrollToSection(e, "menu")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40 active:scale-95 w-full sm:w-auto"
              >
                IRÁNY AZ ÉTLAP
              </a>

              {/* KAPCSOLAT */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007AFF]/55 px-8 py-4 text-base font-bold text-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6B00]/25 active:scale-95 w-full sm:w-auto"
              >
                Kapcsolat
              </a>
            </motion.div>
          </motion.div>

          {/* JOBB OLDAL: KÉP */}
          <div className="relative flex justify-center lg:justify-start w-full lg:h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-xl lg:max-w-none lg:w-[50vw] h-full aspect-[4/3] lg:aspect-auto mr-0 lg:mr-[-8vw] xl:mr-[-12vw]"
            >
              <Image
                src="/images/hero-image.png"
                alt="STACKY DELI"
                fill
                className="object-cover lg:object-left"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}