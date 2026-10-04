"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function MenuSection() {
  return (
    <section id="menu" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="font-luckiest text-[#FF6B00]">
            ÉTLAPUNK
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[#007AFF] md:text-lg">
            Válaszd ki a kedvencedet, és ugorj be hozzánk egy igazán jó burgerre!
          </p>
        </motion.div>

        {/* Menu image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-6xl"
        >
          {/* Mobile menu */}
          <div className="block md:hidden">
            <Image
              src="/images/mobile_menu.jpg"
              alt="STACKY DELI étlap"
              width={1200}
              height={1800}
              className="mx-auto h-auto w-full max-w-[500px] rounded-2xl"
              priority={false}
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <Image
              src="/images/desktop_menu.jpg"
              alt="STACKY DELI étlap"
              width={1920}
              height={1080}
              className="mx-auto h-auto w-full max-w-[750px] rounded-2xl"
              priority={false}
            />
          </div>
        </motion.div>

        {/* Mobile hint */}
        <p className="mt-4 text-center text-sm text-[#1E2022]/60 md:hidden">
          Húzz lefelé az étlap megtekintéséhez
        </p>

        {/* Packaging fee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center text-sm font-medium text-[#007AFF]"
        >
          Csomagolási díj: 200 Ft
        </motion.p>
      </div>
    </section>
  )
}