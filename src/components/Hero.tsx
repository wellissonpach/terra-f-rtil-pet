import React from 'react';
import { 
  MessageCircle, 
  Store, 
  Clock, 
  Dog,
  Cat,
  Bird,
  Fish,
  Stethoscope,
  Scissors,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { buildWhatsAppUrl, PRESET_MESSAGES, COMPANY_CONTACTS } from '../utils/whatsapp';

interface HeroProps {
  onOpenBookingModal: (service?: 'banho-e-tosa' | 'clinica') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const quickSpecies = [
    { label: 'Cães', subtitle: 'Rações e Acessórios', icon: Dog },
    { label: 'Gatos', subtitle: 'Alimentos e Higiene', icon: Cat },
    { label: 'Pássaros', subtitle: 'Gaiolas e Mixes', icon: Bird },
    { label: 'Roedores', subtitle: 'Pequenos Animais', icon: Dog },
    { label: 'Aquarismo', subtitle: 'Peixes e Filtros', icon: Fish },
  ];

  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 md:pt-32 pb-12 bg-[#F5F7FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geometric Balance Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          
          {/* Left Column (8 cols): Main Hero & CTAs */}
          <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white via-white to-[#F5F7FA]">
            <div className="max-w-2xl space-y-6">
              
              {/* Category Eyebrow Badge */}
              <span className="inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider">
                Completa para você
              </span>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#032866] leading-[1.1] tracking-tight">
                Tudo para o <br />
                <span className="text-[#00A651] italic">mundo</span> do seu Pet
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                Produtos, cuidados e serviços para deixar a vida do seu pet mais saudável, feliz e completa. Atendimento local com o carinho e respeito que ele merece.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  id="hero-primary-whatsapp-btn"
                  href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#00A651] hover:bg-[#008c44] text-white px-8 py-4 rounded-xl font-bold shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Falar pelo WhatsApp</span>
                </a>

                <a
                  id="hero-secondary-stores-btn"
                  href="#nossas-lojas"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#063B98] text-[#063B98] hover:bg-white px-8 py-4 rounded-xl font-bold transition-all shadow-xs"
                >
                  <Store className="w-5 h-5 text-[#063B98]" />
                  <span>Conhecer Lojas</span>
                </a>
              </div>

              {/* Value Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200">
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#063B98] font-heading">
                    {COMPANY_CONTACTS.instagramFollowers}+
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Seguidores no Insta</div>
                </div>

                <div className="text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#00A651] font-heading">
                    Até 21h
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Segunda a Sábado</div>
                </div>

                <div className="text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#032866] font-heading">
                    100%
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Dedicação Animal</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (4 cols): Geometric Dark Aside Panel */}
          <div className="lg:col-span-4 bg-[#032866] text-white p-6 sm:p-8 flex flex-col justify-between relative border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="space-y-6">
              
              {/* Horário de Funcionamento */}
              <div>
                <h3 className="text-[#00A651] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horário de Funcionamento</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/80">Segunda a Sábado</span>
                    <span className="font-bold text-white">08h às 21h</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/80">Domingos e Feriados</span>
                    <span className="font-bold text-emerald-300">08h às 18h</span>
                  </div>
                </div>
              </div>

              {/* Serviços em Destaque */}
              <div>
                <h3 className="text-[#00A651] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Serviços em Destaque</span>
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {/* Clínica Veterinária */}
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
                        Clínica Especializada
                      </h4>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-blue-200">
                        {COMPANY_CONTACTS.phoneClinica}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mb-2">Cuidados médicos para a saúde do seu melhor amigo.</p>
                    <button
                      onClick={() => onOpenBookingModal('clinica')}
                      className="text-[10px] uppercase font-bold text-[#00A651] underline underline-offset-4 hover:text-emerald-300 transition-colors"
                    >
                      Saiba mais / Falar com a Clínica
                    </button>
                  </div>

                  {/* Banho e Tosa */}
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5 text-emerald-400" />
                        Banho e Tosa
                      </h4>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                        Agendamento
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mb-2">Seu pet limpo, cuidado e ainda mais bonito.</p>
                    <button
                      onClick={() => onOpenBookingModal('banho-e-tosa')}
                      className="text-[10px] uppercase font-bold text-[#00A651] underline underline-offset-4 hover:text-emerald-300 transition-colors"
                    >
                      Agendar atendimento
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Dark Panel Footer Contact */}
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white/60 mb-0.5">Contatos:</div>
                <div className="text-base font-bold text-white">{COMPANY_CONTACTS.whatsappCentral}</div>
                <div className="text-xs text-white/80">{COMPANY_CONTACTS.instagram}</div>
              </div>
              
              <a
                href={COMPANY_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Geometric Ribbon: Species Categories & Why Us Ticker */}
        <div className="mt-4 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Left Species Cards */}
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {quickSpecies.map((species) => (
              <a
                key={species.label}
                href="#categorias"
                className="min-w-[130px] flex flex-col items-center bg-[#F5F7FA] hover:bg-blue-50 p-2.5 rounded-xl border border-gray-100 transition-colors text-center shrink-0"
              >
                <span className="text-[10px] font-bold uppercase text-[#063B98] mb-0.5">
                  {species.label}
                </span>
                <span className="text-[9px] text-gray-500">{species.subtitle}</span>
              </a>
            ))}
          </div>

          {/* Right Why Us Highlights */}
          <div className="text-center md:text-right shrink-0">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 italic">
              Por que nós?
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-5">
              <div className="text-xs font-bold text-[#032866]">Variedade</div>
              <span className="text-gray-300">•</span>
              <div className="text-xs font-bold text-[#032866]">Praticidade</div>
              <span className="text-gray-300">•</span>
              <div className="text-xs font-bold text-[#032866]">Cuidado</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
