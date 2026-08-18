import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONTACTS, OPENING_HOURS, buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Instagram, 
  Facebook, 
  MapPin, 
  Heart, 
  Scissors, 
  Stethoscope, 
  Store,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onOpenBookingModal: (service?: 'banho-e-tosa' | 'clinica') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  return (
    <footer id="contato" className="bg-[#032866] text-white border-t border-blue-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="lg" />
            
            <p className="text-sm text-blue-100/90 leading-relaxed max-w-sm pt-2 font-normal">
              Tudo para o mundo do seu Pet. Rações selecionadas, farmácia, acessórios, clínica veterinária e banho e tosa com amor e respeito aos animais.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Terra Fértil Pet"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_CONTACTS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Terra Fértil Pet"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 border border-white/10"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Terra Fértil Pet"
                className="w-10 h-10 rounded-xl bg-[#00A651] hover:bg-[#008c44] flex items-center justify-center text-white transition-colors duration-200 shadow-xs"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 font-heading">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-blue-100/90 font-medium">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Categorias</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
              </li>
              <li>
                <a href="#nossas-lojas" className="hover:text-white transition-colors">Nossas Lojas</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Booking (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 font-heading">
              Serviços & Atendimento
            </h4>
            
            <ul className="space-y-3 text-sm text-blue-100/90 font-medium">
              <li>
                <button
                  onClick={() => onOpenBookingModal('clinica')}
                  className="flex items-center gap-2 text-left hover:text-white transition-colors text-blue-100"
                >
                  <Stethoscope className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clínica Veterinária</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBookingModal('banho-e-tosa')}
                  className="flex items-center gap-2 text-left hover:text-white transition-colors text-blue-100"
                >
                  <Scissors className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Banho e Tosa</span>
                </button>
              </li>
              <li>
                <a href="#nossas-lojas" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Store className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conhecer Nossas Lojas</span>
                </a>
              </li>
            </ul>

            {/* Operating Hours Box in Footer */}
            <div className="pt-3 border-t border-white/10 text-xs text-blue-200/90 space-y-1 font-medium">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Horário de Funcionamento:</span>
              </div>
              <p>• Seg a Sáb: 08h às 21h</p>
              <p>• Dom e Feriados: 08h às 18h</p>
            </div>
          </div>

          {/* Col 4: Contacts & Official Phones (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 font-heading">
              Contatos Oficiais
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-blue-100">
              
              {/* WhatsApp Central */}
              <div>
                <span className="text-[11px] text-blue-200/80 uppercase tracking-wider block font-bold">
                  WhatsApp Central
                </span>
                <a
                  href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <span>{COMPANY_CONTACTS.whatsappCentral}</span>
                </a>
              </div>

              {/* Clínica */}
              <div>
                <span className="text-[11px] text-blue-200/80 uppercase tracking-wider block font-bold">
                  Telefone / Clínica Veterinária
                </span>
                <a
                  href="tel:61995720394"
                  className="font-bold text-white hover:text-emerald-300 flex items-center gap-1.5"
                >
                  <Stethoscope className="w-4 h-4 text-emerald-400" />
                  <span>{COMPANY_CONTACTS.phoneClinica}</span>
                </a>
              </div>

              {/* Telefones da Fachada */}
              <div>
                <span className="text-[11px] text-blue-200/80 uppercase tracking-wider block font-bold">
                  Telefones da Loja
                </span>
                <div className="space-y-1">
                  <a
                    href="tel:6133749033"
                    className="font-semibold text-blue-100 hover:text-white flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>(61) 3374-9033</span>
                  </a>
                  <a
                    href="tel:6198070030"
                    className="font-semibold text-blue-100 hover:text-white flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>(61) 9807-0030</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80 font-medium">
          <p>© Terra Fértil Pet — Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>O mundo do seu Pet</span>
            <span>•</span>
            <span>Distrito Federal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
