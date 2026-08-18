import React, { useState } from 'react';
import { MessageCircle, X, Scissors, Stethoscope, Store, ChevronRight } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onOpenBookingModal: (service?: 'banho-e-tosa' | 'clinica') => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBookingModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const channels = [
    {
      id: 'general',
      title: 'Atendimento Geral & Produtos',
      subtitle: 'Tire dúvidas sobre estoque e produtos',
      phone: COMPANY_CONTACTS.whatsappCentral,
      icon: MessageCircle,
      action: () => window.open(buildWhatsAppUrl(PRESET_MESSAGES.general), '_blank', 'noopener,noreferrer'),
      badge: 'Online',
    },
    {
      id: 'grooming',
      title: 'Banho e Tosa',
      subtitle: 'Agende o horário do seu pet',
      phone: COMPANY_CONTACTS.whatsappCentral,
      icon: Scissors,
      action: () => onOpenBookingModal('banho-e-tosa'),
      badge: 'Agendar',
    },
    {
      id: 'clinic',
      title: 'Clínica Veterinária',
      subtitle: 'Consultas e cuidados de saúde',
      phone: COMPANY_CONTACTS.phoneClinica,
      icon: Stethoscope,
      action: () => window.open(buildWhatsAppUrl(PRESET_MESSAGES.clinic, COMPANY_CONTACTS.phoneClinicaClean), '_blank', 'noopener,noreferrer'),
      badge: 'Plantão',
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="bg-[#032866] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00A651] text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-heading">Atendimento Terra Fértil</h4>
                <p className="text-[11px] text-emerald-300 font-medium">Como podemos ajudar seu pet hoje?</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar menu WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Channel List */}
          <div className="p-3 space-y-2 bg-[#F5F7FA]">
            {channels.map((channel) => {
              const IconComp = channel.icon;
              return (
                <button
                  key={channel.id}
                  onClick={() => {
                    setIsOpen(false);
                    channel.action();
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-emerald-50/60 border border-gray-200 hover:border-[#00A651] text-left transition-all group shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#00A651] group-hover:bg-[#00A651] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-[#032866] truncate group-hover:text-[#063B98]">
                        {channel.title}
                      </p>
                      <span className="text-[10px] font-bold text-[#00A651] bg-emerald-100/60 px-1.5 py-0.5 rounded-full">
                        {channel.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate font-normal">{channel.subtitle}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{channel.phone}</p>
                  </div>

                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00A651] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="px-4 py-2 bg-white text-[11px] text-gray-500 text-center border-t border-gray-100 font-medium">
            Seg a Sáb: 08h às 21h | Dom: 08h às 18h
          </div>

        </div>
      )}

      {/* Main Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir opções de atendimento WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00A651] hover:bg-[#008c44] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        )}

        {/* Floating tooltip badge */}
        {!isOpen && (
          <span className="hidden sm:inline-flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold whitespace-nowrap shadow-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Fale conosco no WhatsApp
          </span>
        )}
      </button>

    </div>
  );
};
