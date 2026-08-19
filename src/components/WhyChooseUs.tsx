import React from 'react';
import { 
  PackageCheck, 
  Award, 
  Clock, 
  HeartHandshake, 
  MessageCircle, 
  CalendarCheck,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data/mockData';

const iconMap: Record<string, React.ElementType> = {
  PackageCheck,
  Award,
  Clock,
  HeartHandshake,
  MessageCircle,
  CalendarCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="reveal-init reveal-delay-1 inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Nossos Diferenciais
          </span>

          <h2 className="reveal-init reveal-delay-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#032866] font-heading tracking-tight">
            Por que escolher a Terra Fértil Pet?
          </h2>

          <p className="reveal-init reveal-delay-3 mt-3 text-base sm:text-lg text-gray-600 font-medium">
            Combinamos variedade, conveniência e amor pelos animais para proporcionar a melhor experiência para você e seu pet.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS_DATA.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || CheckCircle;
            return (
              <div
                key={item.id}
                className={`reveal-init reveal-delay-${(index % 6) + 1} p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] hover:bg-white border border-gray-200 hover:border-[#063B98] transition-all duration-200 hover:shadow-md group flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#063B98] text-[#063B98] group-hover:text-white border border-gray-200 group-hover:border-[#063B98] flex items-center justify-center transition-colors duration-200 shadow-2xs mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-[#032866] mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 flex items-center gap-2 text-xs font-bold text-[#00A651]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Compromisso com o seu Pet</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
