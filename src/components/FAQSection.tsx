import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA] relative border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Tire Suas Dúvidas
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032866] font-heading tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium">
            Respostas rápidas para as principais dúvidas sobre nossos produtos e serviços.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#032866] hover:text-[#063B98] transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-heading">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00A651]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 font-medium mb-3">
            Ainda ficou com alguma dúvida sobre o atendimento ou produto?
          </p>
          <a
            href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#063B98] hover:text-[#032866] hover:underline"
          >
            <MessageCircle className="w-4 h-4 text-[#00A651]" />
            <span>Fale diretamente com nossa equipe no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
