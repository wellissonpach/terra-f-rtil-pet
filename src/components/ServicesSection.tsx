import React from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { COMPANY_CONTACTS, buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';
import { 
  Stethoscope, 
  Scissors, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Heart
} from 'lucide-react';
import { Service } from '../types';

interface ServicesSectionProps {
  onOpenBookingModal: (service?: 'banho-e-tosa' | 'clinica') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#F5F7FA] relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Cuidados & Saúde Especializada
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#032866] font-heading tracking-tight">
            Saúde, beleza e bem-estar para o seu Pet
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium">
            Muito mais que um pet shop: oferecemos atendimento cuidadoso para a saúde e a estética do seu animal de estimação.
          </p>
        </div>

        {/* Services Cards Grid (2 Column High-Profile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Clínica Veterinária */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-[#063B98] shadow-sm transition-all duration-200 flex flex-col justify-between group">
            
            {/* Header & Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
              <img
                src={SERVICES_DATA[0].image}
                alt="Clínica Veterinária Terra Fértil Pet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#063B98] text-white text-xs font-bold shadow-xs">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
                <span>{SERVICES_DATA[0].badge}</span>
              </div>

              {/* Phone Tag */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#063B98]" />
                <span>{COMPANY_CONTACTS.phoneClinica}</span>
              </div>

              {/* Bottom Title on Image */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Atendimento em Saúde</p>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  {SERVICES_DATA[0].title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-bold text-[#032866] leading-snug">
                  {SERVICES_DATA[0].subtitle}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {SERVICES_DATA[0].description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 pt-2">
                  {SERVICES_DATA[0].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A651] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  id="service-clinic-whatsapp-btn"
                  href={buildWhatsAppUrl(PRESET_MESSAGES.clinic, COMPANY_CONTACTS.phoneClinicaClean)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-[#063B98] hover:bg-[#032866] transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar com a Clínica</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal('clinica')}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#063B98] bg-[#F5F7FA] hover:bg-gray-200 border border-gray-200 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#063B98]" />
                  <span>Solicitar Contato</span>
                </button>
              </div>

            </div>

          </div>

          {/* Card 2: Banho e Tosa */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-[#063B98] shadow-sm transition-all duration-200 flex flex-col justify-between group">
            
            {/* Header & Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
              <img
                src={SERVICES_DATA[1].image}
                alt="Banho e Tosa Terra Fértil Pet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00A651] text-white text-xs font-bold shadow-xs">
                <Scissors className="w-3.5 h-3.5 text-white" />
                <span>{SERVICES_DATA[1].badge}</span>
              </div>

              {/* Phone Tag */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                <MessageCircle className="w-3 h-3 text-[#00A651]" />
                <span>{COMPANY_CONTACTS.whatsappCentral}</span>
              </div>

              {/* Bottom Title on Image */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Estética & Higiene Pet</p>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  {SERVICES_DATA[1].title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-bold text-[#032866] leading-snug">
                  {SERVICES_DATA[1].subtitle}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {SERVICES_DATA[1].description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 pt-2">
                  {SERVICES_DATA[1].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A651] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  id="service-grooming-whatsapp-btn"
                  href={buildWhatsAppUrl(PRESET_MESSAGES.grooming)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Agendar no WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal('banho-e-tosa')}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#063B98] bg-[#F5F7FA] hover:bg-gray-200 border border-gray-200 transition-colors"
                >
                  <Scissors className="w-4 h-4" />
                  <span>Personalizar Agendamento</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
