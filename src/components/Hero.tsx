import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Store, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

interface HeroProps {
  onOpenBookingModal: (service?: 'banho-e-tosa' | 'clinica') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal: _onOpenBookingModal }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle depth calculation during scroll (fade and subtle translate)
  // Max out at 500px scroll
  const scrollProgress = Math.min(Math.max(scrollY / 500, 0), 1);
  const contentOpacity = Math.max(1 - scrollProgress * 0.75, 0.25);
  const contentTranslateY = scrollProgress * 24;
  const bgTranslateY = scrollProgress * 15; // Extremely subtle background parallax

  return (
    <section id="inicio" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-[#021330] pt-28 pb-16 lg:py-0">
      {/* Background Video with Subtle Parallax Depth */}
      <div 
        className="absolute inset-0 w-full h-[108%] -top-[4%] z-0 pointer-events-none overflow-hidden transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translate3d(0, ${bgTranslateY}px, 0)` }}
      >
        {/* Instant Fallback Poster Image (Zero-Delay Paint) */}
        <img
          src="/background/poster.webp"
          alt="Terra Fértil Pet"
          className="absolute inset-0 w-full h-full object-cover object-[40%_center] md:object-center"
          loading="eager"
          // @ts-ignore
          fetchpriority="high"
        />

        {/* Background Video with Instant Buffer Preload */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          poster="/background/poster.webp"
          className="absolute inset-0 w-full h-full object-cover object-[40%_center] md:object-center transition-opacity duration-500"
        >
          <source src="/background/dogs2.mp4" type="video/mp4" />
        </video>
        
        {/* Dramatic Left-to-Right Navy Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021330] via-[#021330]/90 via-35% md:via-48% to-transparent"></div>
        
        {/* Subtle Vignette Top & Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021330]/90 via-transparent to-[#021330]/50"></div>
        
        {/* Light Darkening Tint */}
        <div className="absolute inset-0 bg-[#021330]/20"></div>
      </div>

      {/* Main Content with Progressive Stagger Reveal & Scroll Reaction */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full transition-all duration-75 ease-out will-change-transform"
        style={{
          opacity: contentOpacity,
          transform: `translate3d(0, ${contentTranslateY}px, 0)`
        }}
      >
        <div className="max-w-2xl">
          {/* 1. Eyebrow Badge */}
          <div className="reveal-init reveal-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062454]/90 border border-emerald-500/40 text-emerald-400 text-xs font-bold tracking-wider mb-6 backdrop-blur-md shadow-md">
            <span>🐾</span>
            <span className="tracking-widest uppercase font-extrabold text-[11px] text-white">O MUNDO DO SEU PET</span>
          </div>

          {/* 2. Main Headline */}
          <h1 className="reveal-init reveal-delay-2 text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-5 drop-shadow-md">
            Tudo para o <br />
            <span className="text-[#00C853] italic">mundo</span> do seu Pet
          </h1>

          {/* 3. Subtitle */}
          <p className="reveal-init reveal-delay-3 text-base sm:text-lg lg:text-xl text-white/85 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-sm">
            Produtos, cuidados e serviços para deixar a vida do seu pet mais saudável, feliz e completa.
          </p>

          {/* 4 & 5. CTA Buttons with progressive stagger */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              id="hero-primary-whatsapp-btn"
              href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-init reveal-delay-4 inline-flex items-center justify-center gap-2.5 bg-[#00C853] hover:bg-[#00B048] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(0,200,83,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar pelo WhatsApp</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </a>

            <a
              id="hero-secondary-stores-btn"
              href="#nossas-lojas"
              className="reveal-init reveal-delay-5 inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Store className="w-5 h-5 text-white/90" />
              <span>Conhecer nossas lojas</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </div>
      </div>

      {/* Mouse / Scroll Down Indicator at Bottom Center */}
      <div className="reveal-init reveal-delay-6 absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          href="#horarios"
          aria-label="Rolar para baixo"
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5 backdrop-blur-sm">
            <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-white/60 animate-pulse -mt-0.5" />
        </a>
      </div>
    </section>
  );
};


