import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONTACTS, OPENING_HOURS, getStoreCurrentStatus, buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  ChevronRight, 
  Sparkles,
  Stethoscope,
  Scissors
} from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: (service?: 'banho-e-tosa' | 'clinica') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [storeStatus, setStoreStatus] = useState(getStoreCurrentStatus());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const interval = setInterval(() => {
      setStoreStatus(getStoreCurrentStatus());
    }, 60000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Nossas Lojas', href: '#nossas-lojas' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#032866] text-white border-b border-blue-900/40 text-xs sm:text-sm py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Status & Hours */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-medium">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className={storeStatus.isOpen ? 'text-emerald-300 font-semibold' : 'text-amber-200'}>
                {storeStatus.text}
              </span>
              <span className="text-blue-200/80">• {storeStatus.nextEvent}</span>
            </div>

            <div className="hidden lg:flex items-center gap-1 text-blue-200/90 text-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Seg–Sáb: 08h–21h | Dom: 08h–18h</span>
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:6133749033`}
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Loja: (61) 3374-9033</span>
            </a>

            <a
              href={`tel:61995720394`}
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
            >
              <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
              <span>Clínica: (61) 99572-0394</span>
            </a>

            <a
              href={COMPANY_CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-200 hover:text-white transition-colors pl-2 border-l border-blue-800"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>{COMPANY_CONTACTS.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#063B98]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-blue-950/60'
            : 'bg-[#063B98] py-3.5 border-b border-blue-900/40 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#inicio" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg flex items-center">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal('banho-e-tosa')}
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Scissors className="w-3.5 h-3.5 text-emerald-300" />
              Agendar Banho
            </button>

            <a
              id="header-whatsapp-cta"
              href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-md active:scale-95 green-shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-300" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#032866] border-b border-blue-900 shadow-2xl px-5 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 text-white">
          {/* Mobile Status Header */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15 mb-4">
            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="text-xs font-bold text-white">{storeStatus.text}</span>
            </div>
            <span className="text-xs text-blue-200">{storeStatus.nextEvent}</span>
          </div>

          {/* Nav List */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-sm font-bold text-blue-50 hover:text-emerald-300 hover:bg-white/10 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-blue-300/70" />
              </a>
            ))}
          </div>

          {/* Quick Action CTAs */}
          <div className="mt-5 pt-4 border-t border-white/10 space-y-2.5">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#00A651] hover:bg-[#008f45] shadow-md green-shadow"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Falar no WhatsApp (Central)
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal('banho-e-tosa');
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
              >
                <Scissors className="w-4 h-4 text-emerald-300" />
                Banho e Tosa
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal('clinica');
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-emerald-300" />
                Clínica Vet
              </button>
            </div>
          </div>

          {/* Mobile Direct Phones */}
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-blue-200 space-y-1.5">
            <div className="flex justify-between items-center">
              <span>Telefone da Loja:</span>
              <a href="tel:6133749033" className="font-semibold text-white hover:text-emerald-300">
                (61) 3374-9033
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span>Clínica Veterinária:</span>
              <a href="tel:61995720394" className="font-semibold text-emerald-300 hover:underline">
                (61) 99572-0394
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
