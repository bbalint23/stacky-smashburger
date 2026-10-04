"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Mi az a smash burger és mitől más a STACKY?",
    answer: "A smash burger egy speciális technika, ahol a 160g-os prémium Angus marhahúsgolyót a tűzforró rostlapra tesszük, majd egy nehéz préssel maximálisan kilapítjuk. Emiatt a hús szélei elképesztően ropogósra és karamellizáltra sülnek, miközben a közepe szaftos marad. Nálunk minden a húsról és a puha buciról szól."
  },
  {
    question: "Milyen húsokból és alapanyagokból dolgoztok?",
    answer: "Kizárólag a legmagasabb minőségű alapanyagokat használjuk: a smash burgereink és a Chopped Cheese szendvicsünk 100% Angus marhahúsból készülnek. A Cheesesteak szendvicsünkhöz valódi argentin rib-eye marhát használunk."
  },
  {
    question: "Milyen söröket kapni nálatok?",
    answer: "Büszkék vagyunk rá, hogy a prémium szendvicsek mellé prémium söröket kínálunk a békésszentandrási Szent András Sörfőzdétől! Az itallapunkon megtalálod a klasszikus Ogre pilsnert, a testes Mutti lagert, a valódi gyümölcsből készült Meggyest, és az autósokra, tudatosabbakra gondolva a 0%-os Majdnem IPA-t is."
  },
  {
    question: "Van vegetáriánus opció az étlapon?",
    answer: "Jelenleg a menünk a prémium marhás smash burgerekre és kiadós szendvicsekre épül, így teljesen húsmentes főételünk nincs. Köretként azonban kérhetsz fűszeres burgonyát."
  },
  {
    question: "Lehet előre rendelni vagy házhozszállítást kérni?",
    answer: "Természetesen! Telefonon is leadhatod a rendelésed, hogy mire megérkezel a Derű utca 20. alá, az ételed frissen, melegen várjon. Emellett Nyíregyháza területén házhoz is szállítunk a partnereinken (Wolt, Foodora) keresztül, vagy közvetlen telefonos egyeztetéssel."
  }
]

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void 
}) {
  return (
    <div className="border-b border-secondary/15 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-sans font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-foreground/80 font-normal leading-relaxed text-sm sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Strukturált adatok a Google számára
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background scroll-mt-24">
      {/* JSON-LD Script beillesztése */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FEJLÉC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl mb-4 border border-primary/20">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold tracking-wider uppercase text-primary">INFO</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl font-black text-primary tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Gyakori Kérdések
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto font-medium text-base sm:text-lg">
            Minden, amit a STACKY étlapjáról, rendelésről, a prémium húsainkról és a kézműves sörválasztékunkról tudni érdemes.
          </p>
        </motion.div>

        {/* GYIK LISTA container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl border border-secondary/20 shadow-2xl shadow-secondary/5 px-6 sm:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}