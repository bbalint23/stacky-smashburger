"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Megnézzük, elfogadta-e már korábban
    const consent = localStorage.getItem('stacky-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('stacky-cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-sm bg-white border border-secondary/20 p-6 rounded-2xl z-[100] shadow-2xl shadow-secondary/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍪</span>
          <h3 className="font-bold text-foreground leading-none text-base">Süti beállítások</h3>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed font-normal">
          Az oldal sütiket használ a legjobb élmény érdekében. Ha maradnál, fogadd el, vagy nézz rá a 
          <Link href="/jogi-nyilatkozat" className="text-primary underline ml-1 hover:text-secondary transition-colors font-semibold">
            jogi részre
          </Link>.
        </p>
        <button 
          onClick={acceptCookies}
          className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-md shadow-primary/20"
        >
          ELFOGADOM
        </button>
      </div>
    </div>
  );
}