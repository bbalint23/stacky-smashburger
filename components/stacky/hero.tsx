"use client"

import { motion } from "framer-motion"
import { ArrowDown, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* BAL OLDAL: SZÖVEGEK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              <MapPin className="h-3.5 w-3.5" />
              Nyíregyháza, belváros
            </div>

            {/* FŐCÍM: Letisztult, sallangmentes, monumentális */}
            <h1 className="leading-[1.1] text-secondary">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-luckiest uppercase tracking-wide text-primary block">
                STACKY
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight block mt-2 text-secondary">
                SMASHBURGERS
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-secondary/70 max-w-lg mx-auto lg:mx-0 font-light"
            >
              Smashburger úgy, ahogy kell. Dupla marhahús, ropogós szélek, olvadós sajt és brutális fullos burgonyák.
            </motion.p>

            {/* GOMBOK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#22c55e] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#22c55e]/50 active:scale-95 w-full sm:w-auto"
              >
                Irány az étlap
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-secondary/10 bg-transparent px-7 py-4 text-base font-bold text-secondary transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/5 active:scale-95 w-full sm:w-auto"
              >
                Kapcsolat
              </Link>
            </motion.div>
          </motion.div>

          {/* JOBB OLDAL: KÉP */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 0.8, delay: 0.4 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="relative w-full max-w-md lg:max-w-lg aspect-square select-none"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10 border border-secondary/5">
                <Image
                  src="/images/hero-burger.jpg"
                  alt="STACKY Smashburger"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* LEFELÉ NYÍL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-5 h-5 text-secondary/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}