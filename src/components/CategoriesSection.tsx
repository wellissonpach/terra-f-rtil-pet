import React from 'react';
import { CATEGORIES_DATA } from '../data/mockData';
import { buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Category } from '../types';

interface CategoriesSectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="reveal-init reveal-delay-1 inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Variedade para todas as espécies
          </span>
          
          <h2 className="reveal-init reveal-delay-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#032866] font-heading tracking-tight">
            Tudo o que seu pet precisa em um só lugar
          </h2>
          
          <p className="reveal-init reveal-delay-3 mt-3 text-base sm:text-lg text-gray-600 font-medium">
            Navegue pelos principais segmentos da Terra Fértil Pet e encontre nutrição, conforto, higiene e cuidados sob medida.
          </p>
        </div>

        {/* Categories Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((category: Category, index: number) => (
            <div
              key={category.id}
              className={`reveal-init reveal-delay-${(index % 6) + 1} group bg-[#F5F7FA] hover:bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#063B98] transition-all duration-200 hover:shadow-md flex flex-col justify-between`}
            >
              {/* Card Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={category.image}
                  alt={`Produtos para ${category.name} na Terra Fértil Pet`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#063B98] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {category.tag}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black font-heading text-white">
                    {category.name}
                  </h3>
                  <p className="text-xs text-blue-100 font-medium">{category.subtitle}</p>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Popular Items Pills */}
                <div>
                  <p className="text-[11px] font-bold text-[#063B98] uppercase tracking-wider mb-2">
                    Destaques da Categoria:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.popularItems.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00A651] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-3 border-t border-gray-200">
                  <a
                    id={`category-whatsapp-${category.id}`}
                    href={buildWhatsAppUrl(PRESET_MESSAGES.categoryInquiry(category.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-[#063B98] bg-white hover:bg-[#063B98] hover:text-white border border-gray-200 hover:border-[#063B98] transition-all duration-200 shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" />
                    <span>Consultar no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Banner */}
        <div className="reveal-init mt-10 p-6 rounded-2xl bg-[#F5F7FA] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-[#063B98] text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#032866]">Procurando uma marca ou produto específico?</h4>
              <p className="text-xs sm:text-sm text-gray-600">Nossa equipe verifica a disponibilidade na hora pelo WhatsApp Central.</p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm"
          >
            Falar com Atendente
          </a>
        </div>

      </div>
    </section>
  );
};
