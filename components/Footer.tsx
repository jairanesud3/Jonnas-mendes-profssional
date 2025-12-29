import React, { useState } from 'react';
import { Instagram, Smartphone, MapPin, Shield, Lock } from 'lucide-react';
import { PROFILE_DATA, LEGAL_CONTENT } from '../constants';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="pt-20 pb-8 border-t border-white/10 bg-[#020202] relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">{PROFILE_DATA.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Transformando negócios através de design estratégico e tecnologia de ponta. Sua vitrine digital merece excelência.
              </p>
              <div className="flex gap-4">
                <a 
                  href={PROFILE_DATA.instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-neonPurple transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={PROFILE_DATA.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-green-500 transition-all"
                >
                  <Smartphone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-neonCyan" />
                  <a href={PROFILE_DATA.whatsappLink} className="hover:text-white transition-colors">WhatsApp Comercial</a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-neonCyan" />
                  <a href={PROFILE_DATA.instagramLink} className="hover:text-white transition-colors">@jonnasmendes.web</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neonCyan" />
                  <span>Brasil (Atendimento Global)</span>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => setModalOpen('privacy')}
                    className="flex items-center gap-2 hover:text-white transition-colors text-left"
                  >
                    <Shield className="w-3 h-3" /> Política de Privacidade
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setModalOpen('terms')}
                    className="flex items-center gap-2 hover:text-white transition-colors text-left"
                  >
                    <Lock className="w-3 h-3" /> Termos de Uso
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>&copy; {currentYear} Jonnas Mendes. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Sistema Operacional: Online</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LegalModal 
        isOpen={modalOpen === 'privacy'}
        onClose={() => setModalOpen(null)}
        title={LEGAL_CONTENT.privacy.title}
        content={LEGAL_CONTENT.privacy.content}
      />
      <LegalModal 
        isOpen={modalOpen === 'terms'}
        onClose={() => setModalOpen(null)}
        title={LEGAL_CONTENT.terms.title}
        content={LEGAL_CONTENT.terms.content}
      />
    </>
  );
};