"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Flame } from "lucide-react";
import Image from "next/image";

const monthlyBurger = {
  isActive: false,
  name: "BEKONY BOMB SMASH",
  description:
    "szkibidi szkibidi, szkibidi szkibidi yeah oh yeah szkibidi, igen szkibidi. szkibidi szkibidi, szkibidi szkibidi yeah oh yeah szkibidi, igen szkibidi.",
  price: "3.690 Ft",
  imageUrl: "/images/oklahoma-burger.webp",
};

export default function MonthlySpecial() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!monthlyBurger.isActive) return null;

  return (
    <>
      {/* FELSŐ NARANCS SÁV */}
      {mounted &&
        createPortal(
          <div className="fixed top-14 sm:top-16 left-0 right-0 z-40 bg-primary shadow-lg shadow-primary/20 border-b border-primary/30 transition-all duration-300">
            <a
              href="#special-section"
              className="flex items-center justify-center gap-2 py-2 px-4 text-center group hover:bg-primary/90 transition-colors"
            >
              <Flame className="w-4 h-4 text-white fill-white animate-pulse" />
              <span className="text-white text-xs sm:text-sm font-sans font-black tracking-[0.15em] uppercase">
                ELÉRHETŐ A HÓNAP AJÁNLATA! NÉZD MEG
              </span>
            </a>
          </div>,
          document.body
        )}

      {/* KÁRTYA */}
      <section
        id="special-section"
        className="w-full px-4 py-12 flex justify-center overflow-hidden pt-24 sm:pt-28"
      >
        <div className="w-full max-w-5xl bg-white rounded-[2rem] border-2 border-secondary/30 relative shadow-[0_20px_50px_rgba(0,122,255,0.15)] animate-gentle-bounce flex flex-col md:flex-row overflow-hidden">
          
          {/* OLDALSÓ SÁV */}
          <div className="bg-primary p-3 flex items-center justify-center md:w-16 order-2 md:order-1">
            <h2 className="text-white font-black text-lg md:-rotate-90 whitespace-nowrap uppercase tracking-[0.2em]">
              HÓNAP BURGERE
            </h2>
          </div>

          {/* KÉP */}
          <div className="w-full md:w-2/5 h-64 md:h-auto relative order-1 md:order-2 bg-secondary/5">
            <Image
              src={monthlyBurger.imageUrl}
              alt={monthlyBurger.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* SZÖVEG */}
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-center order-3">
            <div className="mb-6">
              <span className="text-primary font-black text-sm uppercase tracking-[0.3em] mb-4 block">
                // Limitált kiadás
              </span>

              <h3 className="text-primary text-5xl md:text-7xl font-black italic uppercase leading-[0.9] mb-6 drop-shadow-sm">
                {monthlyBurger.name}
              </h3>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                {monthlyBurger.description}
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl md:text-5xl font-black text-primary">
                {monthlyBurger.price}
              </span>
            </div>
          </div>
        </div>

        {/* ANIMÁCIÓ */}
        <style jsx>{`
          @keyframes gentle-bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-gentle-bounce {
            animation: gentle-bounce 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}