import React from 'react';
import { Store, MapPin, Phone, Clock, MessageCircle, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export const StoreShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA] relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="reveal-init bg-[#032866] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/10 p-6 sm:p-10 lg:p-12 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Store Message & CTAs */}
            <div className="reveal-init reveal-delay-1 lg:col-span-7 space-y-6">
              
              <span className="inline-block px-3.5 py-1 bg-white/10 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider">
                Espaço Físico Completo
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                Venha conhecer a <br />
                <span className="text-[#00A651] italic">Terra Fértil Pet</span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-xl">
                Encontre produtos, cuidados e soluções para o seu pet em um ambiente preparado para atender diferentes necessidades.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Pet shop completo com milhares de itens',
                  'Atendimento atencioso e especializado',
                  'Ambiente climatizado e confortável',
                  'Estacionamento e fácil acesso',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-blue-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00A651] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Store Contacts Pill Bar */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-blue-100 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Telefone: <strong>(61) 3374-9033</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Celular: <strong>(61) 9807-0030</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-200 pt-1 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Segunda a sábado: 08h às 21h | Domingos e feriados: 08h às 18h</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <a
                  id="store-how-to-get-btn"
                  href={buildWhatsAppUrl(PRESET_MESSAGES.storeLocation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como chegar (Consultar no WhatsApp)</span>
                </a>

                <a
                  href="#nossas-lojas"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  <Store className="w-4 h-4 text-emerald-300" />
                  <span>Ver detalhes das unidades</span>
                </a>
              </div>

            </div>

            {/* Right Column: Store Atmosphere Photo */}
            <div className="reveal-scale-init reveal-delay-2 lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop"
                  alt="Fachada e Loja Terra Fértil Pet"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#032866]/90 via-black/20 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#063B98] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Terra Fértil Pet</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Estrutura Completa</p>
                  <h4 className="text-lg font-black font-heading">O melhor para quem você ama</h4>
                  <p className="text-xs text-blue-100 mt-0.5">Visite-nos ou peça pelo WhatsApp</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
