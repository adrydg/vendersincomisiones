'use client';

import { useState, useEffect } from 'react';

interface FloatingCTAProps {
  targetId?: string;
  text?: string;
}

export default function FloatingCTA({
  targetId = 'lead-form',
  text = 'Recibir Ofertas Gratis'
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón después de hacer scroll de 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Botón flotante móvil (bottom) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 md:hidden ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={scrollToForm}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 font-bold text-lg shadow-2xl hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center gap-2"
        >
          <span className="text-2xl">🎁</span>
          {text}
        </button>
      </div>

      {/* Botón flotante desktop (lado derecho) */}
      <div
        className={`hidden md:block fixed right-6 bottom-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToForm}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl hover:from-amber-600 hover:to-amber-700 transition-all hover:scale-105 flex items-center gap-2 group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🎁</span>
          {text}
        </button>
      </div>
    </>
  );
}
