"use client"

import { motion } from "framer-motion"

export function MenuSection() {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-[#fff5ec] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FŐ FEJLÉC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
          className="flex justify-center mb-20 lg:mb-28"
        >
          <div className="relative w-full flex flex-col items-center">
            
            {/* MOBIL NÉZET KERET (ÉTLAP) */}
            <div className="block md:hidden w-full max-w-[393px] bg-white rounded-3xl shadow-2xl shadow-[#00674b]/10 overflow-hidden border border-[#00674b]/10">
              <img
                src="/images/tel_jav_vegleges.jpg"
                alt="STACKY Mobil Étlap"
                className="w-full h-auto block"
              />
            </div>

            {/* ASZTALI NÉZET KERET (ÉTLAP) */}
            <div className="hidden md:block w-full max-w-[536px] bg-white rounded-3xl shadow-2xl shadow-[#00674b]/10 overflow-hidden border border-[#00674b]/10">
              <img
                src="/images/desk_jav_vegleges.jpg"
                alt="STACKY Asztali Étlap"
                className="w-full h-auto block"
              />
            </div>
            
            {/* MOBIL SEGÍTSÉG (ÉTLAP) */}
            <p className="text-center mt-6 text-[#00674b]/50 text-[10px] font-bold uppercase tracking-[0.2em] md:hidden">
              Húzz lefelé a teljes kínálathoz
            </p>

          </div>
        </motion.div>

        {/* ITALLAP FEJLÉC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl sm:text-5xl font-black text-[#00674b] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Itallapunk
          </h2>
        </motion.div>

        {/* ITALLAP KÉP TARTÁLY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full flex flex-col items-center">
            
            {/* MOBIL NÉZET KERET (ITALLAP) */}
            <div className="block md:hidden w-full max-w-[393px] bg-white rounded-3xl shadow-2xl shadow-[#00674b]/10 overflow-hidden border border-[#00674b]/10">
              <img
                src="/images/tel_ital.jpg" 
                alt="STACKY Mobil Itallap"
                className="w-full h-auto block"
              />
            </div>

            {/* ASZTALI NÉZET KERET (ITALLAP) */}
            <div className="hidden md:block w-full max-w-[536px] bg-white rounded-3xl shadow-2xl shadow-[#00674b]/10 overflow-hidden border border-[#00674b]/10">
              <img
                src="/images/desk_ital.jpg" 
                alt="STACKY Asztali Itallap"
                className="w-full h-auto block"
              />
            </div>
            
            {/* MOBIL SEGÍTSÉG (ITALLAP) */}
            <p className="text-center mt-6 text-[#00674b]/50 text-[10px] font-bold uppercase tracking-[0.2em] md:hidden">
              Húzz lefelé a teljes kínálathoz
            </p>

            {/* KÖZÖS LÁBJEGYZET A LAPOK ALATT */}
            <div className="text-center pt-12 mt-4 text-[#00674b]/70 text-[11px] font-medium tracking-wide space-y-2">
              <p className="font-bold">Csomagolás díja 200 Ft.</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}