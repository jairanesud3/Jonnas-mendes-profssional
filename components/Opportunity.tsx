import React from 'react';
import { ArrowRight, TrendingDown, EyeOff, AlertTriangle, Activity } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { PROFILE_DATA } from '../constants';

export const Opportunity: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden">
            
            {/* Background Gradient - Subtle & Professional */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">
              
              {/* Left Content - Persuasive Copy */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span className="text-orange-100 text-xs font-semibold tracking-wide uppercase">Alerta de Oportunidade</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                  Seu cliente está <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">procurando agora.</span>
                </h2>
                
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  Mas sem um posicionamento digital profissional, você não aparece. Seu concorrente agradece.
                </p>

                <div className="pt-4">
                  <a 
                    href={PROFILE_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                  >
                    Mudar esse cenário
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Visual - Premium Business Widget */}
              <div className="w-full md:w-[400px]">
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                    
                    {/* Header Widget */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400">
                                <Activity className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Performance Atual</p>
                                <p className="text-sm text-white font-semibold">Auditoria Digital</p>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] font-bold text-red-400 uppercase">
                            Crítico
                        </div>
                    </div>

                    {/* Main Metric */}
                    <div className="text-center py-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 mb-4 shadow-inner">
                            <EyeOff className="w-7 h-7 text-gray-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">Invisível</h3>
                        <p className="text-sm text-gray-500">Sua marca não aparece nas buscas</p>
                    </div>

                    {/* Stats List */}
                    <div className="mt-8 space-y-3">
                        <div className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-red-500/10 rounded-lg text-red-400">
                                    <TrendingDown className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-gray-300 font-medium">Novos Clientes</span>
                            </div>
                            <span className="text-sm font-bold text-gray-500">Baixo</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-orange-500/10 rounded-lg text-orange-400">
                                    <AlertTriangle className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-gray-300 font-medium">Autoridade</span>
                            </div>
                            <span className="text-sm font-bold text-gray-500">Limitada</span>
                        </div>
                    </div>

                </div>
                
                {/* Decorative Elements behind */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-b from-white/5 to-transparent rounded-[40px] blur-2xl opacity-50"></div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};