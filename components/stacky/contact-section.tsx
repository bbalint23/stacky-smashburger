"use client"

import { motion } from "framer-motion"
import { MapPin, Send, MessageSquare } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Kapcsolat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary tracking-tight">
            Kérdésed van? Írj nekünk!
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Üzenetküldő Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background rounded-2xl shadow-xl shadow-secondary/5 p-6 sm:p-8 border border-secondary/10 h-full">
              <h3 className="text-lg font-medium text-secondary mb-6">Üzenet küldése</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-secondary font-medium">Köszönjük!</p>
                  <p className="text-secondary/60 text-sm mt-1 font-light">Hamarosan válaszolunk.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-secondary mb-1.5 uppercase tracking-wider">Név</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-secondary/15 bg-background text-secondary placeholder:text-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="Hogy hívnak?"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-secondary mb-1.5 uppercase tracking-wider">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-secondary/15 bg-background text-secondary placeholder:text-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="pelda@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-secondary mb-1.5 uppercase tracking-wider">Üzenet</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-secondary/15 bg-background text-secondary placeholder:text-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm"
                      placeholder="Miben segíthetünk?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-background font-medium py-4 px-6 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <span>Küldés...</span> : <><Send className="w-4 h-4" /><span>Üzenet elküldése</span></>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Cím és Térkép */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-background rounded-2xl shadow-xl shadow-secondary/5 overflow-hidden border border-secondary/10 h-full flex flex-col">
              <div className="p-4 border-b border-secondary/10 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <p className="text-xs text-secondary/70 font-medium uppercase tracking-widest">
                  4400 Nyíregyháza, xx utca
                </p>
              </div>
              
              <div className="flex-grow min-h-[300px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.530232789969!2d21.715025176823058!3d47.95817996363293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389fbd9b50b587%3A0x21fe4d778c1c0662!2zS29yesOz!5e1!3m2!1sen!2shu!4v1779605662179!5m2!1sen!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 opacity-90 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}