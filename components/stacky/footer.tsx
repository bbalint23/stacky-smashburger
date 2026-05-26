"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, MapPin, Clock } from "lucide-react"
import Link from "next/link"

const openingHours = [
  { day: "Hétfő", hours: "Zárva" },
  { day: "Kedd", hours: "12:00 - 20:00" },
  { day: "Szerda", hours: "12:00 - 20:00" },
  { day: "Csütörtök", hours: "12:00 - 20:00" },
  { day: "Péntek", hours: "12:00 - 21:00" },
  { day: "Szombat", hours: "12:00 - 21:00" },
  { day: "Vasárnap", hours: "Zárva" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block">
              <span className="text-3xl font-luckiest tracking-wide text-primary-foreground">
                STACKY
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-xs font-light">
              Smashburger úgy, ahogy kell. Gyere és kóstold meg!
            </p>
            
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors text-background"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors text-background"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary-foreground" />
              <h3 className="font-sans font-medium text-background">Nyitvatartás</h3>
            </div>
            <div className="space-y-2">
              {openingHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-background/60 font-light">{day}</span>
                  <span className={hours === "Zárva" ? "text-primary-foreground" : "text-background/90"}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary-foreground" />
              <h3 className="font-sans font-medium text-background">Címünk</h3>
            </div>
            <address className="not-italic text-primary-foreground/70 text-sm leading-relaxed font-light">
              <span className="font-semibold text-primary-foreground">STACKY Smashburgers - Nyíregyháza</span><br />
              <a 
                href="https://www.google.com/maps/place/Nyíregyháza,+Szarvas+u.+44,+4400/@47.9486603,21.7157729,74m/data=!3m1!1e3!4m6!3m5!1s0x47389fc1290736a3:0x542cbd2ab9f33ec2!8m2!3d47.9485933!4d21.7159714!16s%2Fg%2F11j72v59dq?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                4400 Nyíregyháza, xx utca xx.
              </a><br />
              Tel: <a href="tel:+36301234567" className="hover:primary transition-colors">+36 30 123 4567</a><br />
              Email: <a href="mailto:hello@stacky.hu" className="hover:chart-4 transition-colors">hello@stacky.hu</a>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/50 font-light"
        >
          <p>© {currentYear} STACKY Smashburgers. Minden jog fenntartva.</p>
        </motion.div>
      </div>
    </footer>
  )
}