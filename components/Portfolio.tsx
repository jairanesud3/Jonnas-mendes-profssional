import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Portfolio: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Sites de <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonCyan">Demonstração</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Modelos visuais para você conhecer a qualidade do design e estrutura.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8">
        {PROJECTS.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 150}>
            <div className="group relative bg-deepBlack border border-white/10 rounded-3xl overflow-hidden hover:border-neonPurple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)]">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-neonPurple/20 backdrop-blur-md px-3 py-1 rounded-full border border-neonPurple/30 flex items-center gap-1.5 text-xs text-neonCyan font-medium">
                  <Layers className="w-3 h-3" />
                  Modelo Visual
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 -mt-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
                  <span className="text-neonCyan text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link"
                  >
                    Ver Demonstração
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};