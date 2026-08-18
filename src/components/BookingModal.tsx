import React, { useState } from 'react';
import { X, MessageCircle, Scissors, Stethoscope, Check, Calendar, Heart, Shield } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: 'banho-e-tosa' | 'clinica';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'banho-e-tosa',
}) => {
  const [serviceType, setServiceType] = useState<'banho-e-tosa' | 'clinica'>(initialService);
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState<'cao' | 'gato' | 'outro'>('cao');
  const [petBreed, setPetBreed] = useState('');
  const [preferredShift, setPreferredShift] = useState('manha');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceName = serviceType === 'banho-e-tosa' ? 'Banho e Tosa' : 'Clínica Veterinária';
    const petTypeLabel = petType === 'cao' ? 'Cão' : petType === 'gato' ? 'Gato' : 'Outro Pet';
    const shiftLabel = preferredShift === 'manha' ? 'Manhã (08h às 12h)' : preferredShift === 'tarde' ? 'Tarde (13h às 18h)' : 'Qualquer horário disponível';

    const messageLines = [
      `Olá! Vim pelo site da Terra Fértil Pet e gostaria de solicitar atendimento para:`,
      `🐾 *Serviço:* ${serviceName}`,
      `🐶 *Pet:* ${petName ? petName : 'Não informado'} (${petTypeLabel}${petBreed ? ` - Raça/Porte: ${petBreed}` : ''})`,
      `⏰ *Preferência de Horário:* ${shiftLabel}`,
    ];

    if (notes.trim()) {
      messageLines.push(`📝 *Observações:* ${notes.trim()}`);
    }

    messageLines.push(`Gostaria de verificar os horários e informações disponíveis. Obrigado!`);

    const fullMessage = messageLines.join('\n');
    const targetNumber = serviceType === 'clinica' ? COMPANY_CONTACTS.phoneClinicaClean : COMPANY_CONTACTS.whatsappCentralClean;
    const url = buildWhatsAppUrl(fullMessage, targetNumber);

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#032866] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00A651] text-white flex items-center justify-center font-bold">
              {serviceType === 'banho-e-tosa' ? <Scissors className="w-5 h-5" /> : <Stethoscope className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">
                {serviceType === 'banho-e-tosa' ? 'Agendar Banho e Tosa' : 'Atendimento da Clínica'}
              </h3>
              <p className="text-xs text-blue-200 font-medium">
                Preencha os dados e envie direto para o WhatsApp da equipe.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Service Selector Tabs */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Escolha o Serviço
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setServiceType('banho-e-tosa')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                  serviceType === 'banho-e-tosa'
                    ? 'bg-[#063B98] text-white border-[#063B98] shadow-xs'
                    : 'bg-[#F5F7FA] text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <Scissors className="w-4 h-4" />
                <span>Banho e Tosa</span>
              </button>

              <button
                type="button"
                onClick={() => setServiceType('clinica')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                  serviceType === 'clinica'
                    ? 'bg-[#00A651] text-white border-[#00A651] shadow-xs'
                    : 'bg-[#F5F7FA] text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>Clínica Veterinária</span>
              </button>
            </div>
          </div>

          {/* Pet Type Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Tipo do Animal
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'cao', label: 'Cachorro 🐕' },
                { id: 'gato', label: 'Gato 🐈' },
                { id: 'outro', label: 'Outro Pet 🐾' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPetType(item.id as any)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border text-center transition-all ${
                    petType === item.id
                      ? 'bg-blue-50 border-[#063B98] text-[#063B98] font-bold shadow-2xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pet Name & Breed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Nome do Pet
              </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Ex: Thor, Mel, Luna..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#063B98] text-sm text-gray-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Raça / Porte (opcional)
              </label>
              <input
                type="text"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
                placeholder="Ex: Shih-tzu, Vira-lata, Médio..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#063B98] text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Preferred Shift */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Preferência de Horário
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'manha', label: 'Manhã' },
                { id: 'tarde', label: 'Tarde' },
                { id: 'qualquer', label: 'Qualquer' },
              ].map((shift) => (
                <button
                  key={shift.id}
                  type="button"
                  onClick={() => setPreferredShift(shift.id)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border text-center transition-all ${
                    preferredShift === shift.id
                      ? 'bg-emerald-50 border-[#00A651] text-[#00A651] font-bold'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {shift.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Observações ou dúvidas (opcional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Precisa de tosa higiênica, pelagem com nós, consulta de rotina..."
              rows={2}
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#063B98] text-sm text-gray-800 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-base font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-sm active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Continuar no WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-gray-500 mt-2 font-medium">
              Você será direcionado diretamente para a equipe da Terra Fértil Pet.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
