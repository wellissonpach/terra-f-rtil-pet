import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';
import { OPENING_HOURS, getStoreCurrentStatus, buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export const OpeningHoursSection: React.FC = () => {
  const [status, setStatus] = useState(getStoreCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-[#F5F7FA] relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Status & Title */}
            <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider">
                Horário de Atendimento
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#032866] font-heading tracking-tight">
                Estamos abertos para você e seu Pet
              </h3>

              {/* Dynamic Status Card */}
              <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#F5F7FA] border border-gray-200 text-left">
                <span
                  className={`w-3 h-3 rounded-full shrink-0 ${
                    status.isOpen ? 'bg-[#00A651] animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <div>
                  <p className="text-xs font-extrabold text-slate-900">
                    Status: <span className={status.isOpen ? 'text-[#00A651]' : 'text-amber-600'}>{status.text}</span>
                  </p>
                  <p className="text-[11px] text-gray-500">{status.nextEvent}</p>
                </div>
              </div>
            </div>

            {/* Middle: Schedule Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-2.5">
              
              {/* Monday to Saturday */}
              <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-gray-200 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase text-[#063B98] tracking-wider block">
                    Segunda a Sábado
                  </span>
                  <span className="text-xs text-gray-600 font-medium">Atendimento Completo</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold text-[#032866] font-heading block">
                    08h às 21h
                  </span>
                  <span className="text-[10px] text-[#00A651] font-bold">Horário Estendido</span>
                </div>
              </div>

              {/* Sundays and Holidays */}
              <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-gray-200 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase text-[#00A651] tracking-wider block">
                    Domingos e Feriados
                  </span>
                  <span className="text-xs text-gray-600 font-medium">Loja & Cuidados</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold text-[#032866] font-heading block">
                    08h às 18h
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold">Aberto para você</span>
                </div>
              </div>

            </div>

            {/* Right: Quick Action */}
            <div className="lg:col-span-3 text-center lg:text-right space-y-2.5">
              <p className="text-xs text-gray-500 font-medium">Dúvidas sobre o funcionamento hoje?</p>
              <a
                href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirmar no WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
