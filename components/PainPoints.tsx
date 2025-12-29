import React from 'react';
import { PAIN_POINTS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-deepBlack to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seu site atual está <span className="text-red-500">afastando clientes?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A internet não perdoa amadores. Se sua presença digital tem um desses problemas, você está deixando dinheiro na mesa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 group h-full">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};