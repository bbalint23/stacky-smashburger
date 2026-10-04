"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Clock, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

// A napok nevei magyarul a kiíráshoz
const dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"]

const openingHours: Record<number, { open: string; close: string } | null> = {
  0: { open: "16:00", close: "20:00" }, // Vasárnap
  1: null, // Hétfő
  2: { open: "11:30", close: "20:30" }, // Kedd
  3: { open: "11:30", close: "20:30" }, // Szerda
  4: { open: "11:30", close: "20:30" }, // Csütörtök
  5: { open: "11:30", close: "21:30" }, // Péntek
  6: { open: "16:00", close: "21:30" }, // Szombat
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [statusText, setStatusText] = useState<string>("Betöltés...")
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false)

  useEffect(() => {
    const now = new Date()
    const day = now.getDay()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTimeInMinutes = currentHour * 60 + currentMinute

    const todayHours = openingHours[day]
    let openToday = false

    if (todayHours) {
      const [openH, openM] = todayHours.open.split(":").map(Number)
      const [closeH, closeM] = todayHours.close.split(":").map(Number)
      
      const openTimeInMinutes = openH * 60 + openM
      const closeTimeInMinutes = closeH * 60 + closeM

      // Ha a mai napon belül a nyitvatartási időben vagyunk
      if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        openToday = true
        setIsOpenNow(true)
        setStatusText(`NYITVA • ${todayHours.open} - ${todayHours.close}`)
      }
    }

    // Ha ZÁRVA van (vagy ma nincs nyitva, vagy már/még bezárt)
    if (!openToday) {
      setIsOpenNow(false)
      
      // Megnézzük, hogy MA nyit-e még (ha korán reggel nézi a user)
      if (todayHours) {
        const [openH, openM] = todayHours.open.split(":").map(Number)
        if (currentTimeInMinutes < (openH * 60 + openM)) {
          setStatusText(`ZÁRVA • Nyitás: Ma ${todayHours.open}-kor`)
          return
        }
      }

      // Keresünk egy jövőbeli nyitónapot (maximum 7 napot nézünk előre)
      let nextDayOffset = 1
      let foundNextOpen = false

      while (nextDayOffset <= 7 && !foundNextOpen) {
        const nextDayIndex = (day + nextDayOffset) % 7
        const nextDayHours = openingHours[nextDayIndex]

        if (nextDayHours) {
          foundNextOpen = true
          // Ha holnap nyit, akkor azt írjuk, különben a nap nevét
          const dayString = nextDayOffset === 1 ? "Holnap" : dayNames[nextDayIndex]
          setStatusText(`ZÁRVA • Nyitás: ${dayString} ${nextDayHours.open}`)
        } else {
          nextDayOffset++
        }
      }

      // Végszükség esetére, ha minden nap zárva lenne
      if (!foundNextOpen) {
        setStatusText("ZÁRVA")
      }
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-2xl border border-[#007AFF]/20 shadow-xl shadow-[#007AFF]/5 pointer-events-auto overflow-hidden"
      >
        <div className="px-6 flex items-center justify-between h-16">
          
          {/* LOGÓ */}
          <a href="#" className="flex items-center group">
            <span className="text-2xl sm:text-3xl font-luckiest tracking-wide text-[#FF6B00] transition-transform group-hover:scale-105 pt-1">
              STACKY DELI
            </span>
          </a>

          {/* DESKTOP MENÜPONTOK */}
          <nav className="hidden md:flex items-center gap-6">
            {["ÉTLAP", "GYIK", "KAPCSOLAT"].map((item) => {
              const targetId = item === "ÉTLAP" ? "menu" : item === "GYIK" ? "faq" : "contact"
              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  onClick={(e) => scrollToSection(e, targetId)}
                  className="relative text-[#FF6B00]/80 hover:text-[#007AFF] transition-colors text-xs font-black tracking-widest px-3 py-2 rounded-lg hover:bg-[#007AFF]/10"
                >
                  {item}
                </a>
              )
            })}
          </nav>

          {/* OKOS NYITVATARTÁS STATUS BADGE */}
          <div className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-bold tracking-wide shadow-md transition-colors duration-300 ${
            isOpenNow 
              ? "bg-[#FF6B00] text-white shadow-[#FF6B00]/20" 
              : "bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 shadow-none"
          }`}>
            <div className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? 'bg-white' : 'bg-[#007AFF]'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpenNow ? 'bg-white' : 'bg-[#007AFF]'}`}></span>
            </div>
            <span>{statusText}</span>
          </div>

          {/* MOBIL MENÜ GOMB */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#FF6B00] hover:bg-[#FF6B00]/10 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBIL MENÜ LENYILÓ */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-[#007AFF]/10"
            >
              <div className="flex flex-col gap-2 p-4">
                {/* Mobil státusz kijelzés */}
                <div className={`flex items-center gap-2.5 text-sm font-bold px-3 py-2 rounded-xl mb-2 ${
                  isOpenNow ? "bg-[#FF6B00]/10 text-[#FF6B00]" : "bg-[#007AFF]/10 text-[#007AFF]"
                }`}>
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{statusText}</span>
                </div>
                
                {["ÉTLAP", "GYIK", "KAPCSOLAT"].map((item) => {
                  const targetId = item === "ÉTLAP" ? "menu" : item === "GYIK" ? "faq" : "contact"
                  return (
                    <a
                      key={item}
                      href={`#${targetId}`}
                      onClick={(e) => scrollToSection(e, targetId)}
                      className="text-[#FF6B00] hover:bg-[#FF6B00]/10 p-3 rounded-xl transition-colors text-base font-extrabold tracking-wide"
                    >
                      {item}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}