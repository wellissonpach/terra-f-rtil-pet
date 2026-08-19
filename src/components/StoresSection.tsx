import React from 'react';
import { STORE_UNITS_DATA } from '../data/mockData';
import { 
  Store, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Navigation,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { buildWhatsAppUrl, PRESET_MESSAGES, COMPANY_CONTACTS } from '../utils/whatsapp';

export const StoresSection: React.FC = () => {
  return (
    <section id="nossas-lojas" className="py-16 md:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="reveal-init reveal-delay-1 inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Rede de Atendimento
          </span>

          <h2 className="reveal-init reveal-delay-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#032866] font-heading tracking-tight">
            Nossas Lojas
          </h2>

          <p className="reveal-init reveal-delay-3 mt-3 text-base sm:text-lg text-gray-600 font-medium">
            Encontre a Terra Fértil Pet mais próxima e venha desfrutar de um atendimento caloroso e focado no seu pet.
          </p>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8">
          {STORE_UNITS_DATA.map((unit, index) => (
            <div
              key={unit.id}
              className={`reveal-init reveal-delay-${(index % 4) + 2} bg-[#F5F7FA] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-[#063B98] shadow-sm p-6 sm:p-8 transition-all duration-200`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Unit Details */}
                <div className="md:col-span-7 space-y-5">
                  
                  {/* Status & Name */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-[#00A651] text-xs font-bold border border-emerald-200 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{unit.statusBadge}</span>
                    </div>

                    <h3 className="text-2xl font-black font-heading text-[#032866]">
                      {unit.name}
                    </h3>
                  </div>

                  {/* Location & City */}
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-[#063B98] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900">{unit.cityState}</p>
                        <p className="text-xs text-gray-500 font-medium">{unit.address}</p>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <Clock className="w-5 h-5 text-[#00A651] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-gray-700">
                        <p className="font-bold">{unit.hoursWeekday}</p>
                        <p className="text-gray-500">{unit.hoursSunday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Phones Grid */}
                  <div className="p-3.5 rounded-xl bg-white border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-500 block">Telefone Fixo da Loja:</span>
                      <a href="tel:6133749033" className="font-bold text-[#063B98] hover:underline flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#00A651]" />
                        <span>(61) 3374-9033</span>
                      </a>
                    </div>

                    <div>
                      <span className="text-gray-500 block">Celular da Loja:</span>
                      <a href="tel:6198070030" className="font-bold text-slate-900 hover:underline flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#00A651]" />
                        <span>(61) 9807-0030</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Actions & Map Button */}
                <div className="md:col-span-5 flex flex-col justify-center space-y-3 pt-4 md:pt-0 md:border-l md:border-gray-200 md:pl-8">
                  
                  <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 space-y-1 mb-2">
                    <p className="font-bold text-[#032866]">Informações & Rota</p>
                    <p className="text-gray-600">Peça a localização no WhatsApp ou abra o mapa direto no seu celular.</p>
                  </div>

                  <a
                    id={`store-whatsapp-btn-${unit.id}`}
                    href={buildWhatsAppUrl(PRESET_MESSAGES.storeLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#063B98] bg-white hover:bg-gray-100 border border-gray-200 transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#063B98]" />
                    <span>Ver no mapa / Traçar rota</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
