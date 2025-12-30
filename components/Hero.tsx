import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      
      {/* Background Ambience - Radial, Soft (No lines) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 w-full">
        
        {/* AVATAR / LOGO CONTAINER - Strictly Centered */}
        <ScrollReveal>
          <div className="w-full flex justify-center mb-6">
            <div className="relative group mx-auto">
              {/* Soft Radial Glow - No Lines */}
              <div className="absolute inset-0 bg-neonPurple rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Circular Container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-b from-white/10 to-transparent mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-black relative flex items-center justify-center">
                      <img 
                        src={PROFILE_DATA.avatarUrl} 
                        alt={PROFILE_DATA.name}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                        loading="eager"
                        width={224}
                        height={224}
                      />
                  </div>
                  
                  {/* Status Badge - Interactive */}
                  <div className="absolute bottom-4 right-4 z-20 flex items-center group/status cursor-help">
                    <div className="relative flex items-center justify-center w-6 h-6 bg-green-500 border-4 border-black rounded-full shadow-[0_0_10px_#22c55e]">
                         <div className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    
                    {/* Sliding Text */}
                    <div className="absolute right-3 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-l-full -z-10 opacity-0 translate-x-4 group-hover/status:opacity-100 group-hover/status:translate-x-[-10px] transition-all duration-300 whitespace-nowrap">
                        Disponível
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Text Content */}
        <div className="space-y-6">
          <ScrollReveal delay={100}>
            <h2 className="text-sm font-bold text-neonCyan tracking-[0.3em] uppercase opacity-80">
              {PROFILE_DATA.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.05]">
              Do Anônimo à
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                Autoridade Máxima
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {PROFILE_DATA.slogan}
            </p>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="flex flex-col items-center gap-4 pt-4">
            <a 
              href={PROFILE_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};