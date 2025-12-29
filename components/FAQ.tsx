import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          Dúvidas <span className="text-neonPurple">Frequentes</span>
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div 
              className={`bg-white/5 border ${openIndex === index ? 'border-neonPurple/50 bg-white/10' : 'border-white/10'} rounded-2xl transition-all duration-300 overflow-hidden`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-neonPurple flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {item.answer}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};