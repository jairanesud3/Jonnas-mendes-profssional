import React from 'react';
import { TECH_TAGS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-2xl mx-auto">
      <ScrollReveal>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          {/* Decorative shine */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-neonPurple rounded-full"></span>
            Sobre Mim
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Desenvolvo sites de <span className="text-neonCyan font-semibold">alta performance</span> focados em conversão. Entrego seu projeto pronto e online em tempo recorde, transformando visitantes em clientes reais.
          </p>

          <div className="flex flex-wrap gap-3">
            {TECH_TAGS.map((tech, index) => (
              <div 
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 rounded-full text-sm text-gray-300 hover:border-neonPurple hover:text-white transition-colors cursor-default"
              >
                <tech.icon className="w-4 h-4 text-neonPurple" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};