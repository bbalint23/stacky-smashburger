"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed } from "lucide-react"

export function MenuSection() {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-[#fff5ec] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FEJLÉC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#00674b]/10 text-[#00674b] px-4 py-2 rounded-xl mb-4 border border-[#00674b]/20">
            <UtensilsCrossed className="w-4 h-4" />
            <span className="text-sm font-bold tracking-widest uppercase">KÍNÁLATUNK</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl font-black text-[#00674b] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Étlapunk
          </h2>
        </motion.div>

        {/* ÉTLAP KÉP TARTÁLY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full flex flex-col items-center">
            
            {/* MOBIL NÉZET KERET */}
            <div className="block md:hidden w-full max-w-[393px] bg-white rounded-3xl shadow-2xl shadow-[#00674b]/10 overflow-hidden border border-[#00674b]/10">
              <img
                src="/images/menu_telefon_atdolgozott.jpg"
                alt="STACKY Mobil Étlap"
                className="w-full h-auto block"
              />
            </div>

            {/* ASZTALI NÉZET KERET */}
            <div className="hidden md:block w-full max-w-[536px] bg-white rounded-3xl shadow-2xl shadow-[#00674b]/10 overflow-hidden border border-[#00674b]/10">
              <img
                src="/images/menu_asztal_atdolgozott.jpg"
                alt="STACKY Asztali Étlap"
                className="w-full h-auto block"
              />
            </div>
            
            {/* MOBIL SEGÍTSÉG */}
            <p className="text-center mt-6 text-[#00674b]/50 text-[10px] font-bold uppercase tracking-[0.2em] md:hidden">
              Húzz lefelé a teljes kínálathoz
            </p>

            {/* LÁBJEGYZET */}
            <div className="text-center pt-8 mt-4 text-[#00674b]/70 text-[11px] font-medium tracking-wide space-y-2">
              <p>Áraink forintban értendők és tartalmazzák az áfát.</p>
              <p className="font-bold">Csomagolás díja 150 Ft.</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}