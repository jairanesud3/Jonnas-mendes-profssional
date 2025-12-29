import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { ChevronRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-neonPurple/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Método <span className="text-neonCyan">Acelerado</span>
            </h2>
            <p className="text-gray-400">Do zero ao online sem dor de cabeça.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-neonCyan/30 transition-colors">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-white/10 font-sans">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                
                {/* Connector line for mobile (visual only) */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-10 bottom-0 transform translate-y-full w-px h-6 bg-white/10 md:hidden"></div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};