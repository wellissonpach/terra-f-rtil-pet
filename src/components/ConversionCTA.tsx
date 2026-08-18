import React from 'react';
import { MessageCircle, Heart, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl, PRESET_MESSAGES, COMPANY_CONTACTS } from '../utils/whatsapp';

export const ConversionCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#032866] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-lg border border-white/10 text-center">
          
          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <span className="inline-block px-3.5 py-1 bg-white/10 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider">
              Cuidado e Carinho para o seu Companheiro
            </span>

            {/* Section 14 Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              Seu pet merece o melhor.
            </h2>

            {/* Section 14 Subtitle */}
            <p className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed">
              Encontre o que precisa na Terra Fértil Pet.
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-blue-200 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A651]" />
                Atendimento Rápido
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A651]" />
                Rações & Acessórios
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A651]" />
                Clínica & Banho e Tosa
              </span>
            </div>

            {/* Main CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                id="conversion-section-whatsapp-cta"
                href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Falar com a Terra Fértil Pet</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACTS.phoneStoreLandline.replace(/\D/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-emerald-300" />
                <span>Ligar na Loja: {COMPANY_CONTACTS.phoneStoreLandline}</span>
              </a>
            </div>

            <p className="text-xs text-blue-300/80 pt-2">
              WhatsApp Central: {COMPANY_CONTACTS.whatsappCentral} • Aberto de segunda a sábado até às 21h
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
