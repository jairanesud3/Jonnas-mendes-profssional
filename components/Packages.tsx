import React from 'react';
import { Check, Rocket } from 'lucide-react';
import { PACK_FEATURES, PROFILE_DATA } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Packages: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-md mx-auto">
        <ScrollReveal>
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-neonPurple to-transparent">
            <div className="bg-[#0A0A0A] rounded-3xl p-8 relative overflow-hidden">
              
              {/* Decorative Background */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-neonPurple/20 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-neonPurple/10 rounded-2xl flex items-center justify-center text-neonPurple border border-neonPurple/20">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Pack Presença Digital</h3>
                  <p className="text-gray-400 text-sm">Tudo o que você precisa</p>
                </div>
              </div>

              <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Valor</p>
                <p className="text-2xl font-bold text-white">Investimento Único</p>
                <p className="text-xs text-neonCyan mt-1 animate-pulse">Oferta por tempo limitado</p>
              </div>

              <ul className="space-y-4 mb-8">
                {PACK_FEATURES.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={PROFILE_DATA.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-4 bg-neonPurple hover:bg-neonPurple/90 text-white font-bold text-center rounded-xl transition-all shadow-[0_4px_20px_rgba(138,43,226,0.3)] hover:shadow-[0_4px_30px_rgba(138,43,226,0.5)] active:scale-95"
              >
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};