import React, { useState, useEffect } from 'react';
import { MessageCircle, Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-md border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-neonPurple/50 transition-colors">
            <Code2 className="w-5 h-5 text-white group-hover:text-neonPurple transition-colors" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            Jonnas<span className="text-gray-500">.dev</span>
          </span>
        </div>

        {/* Action Button */}
        <a 
          href={PROFILE_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
            ${scrolled 
              ? 'bg-neonPurple text-white hover:bg-neonPurple/90 shadow-[0_0_15px_rgba(138,43,226,0.4)]' 
              : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10'
            }
          `}
        >
          <span className="hidden md:inline">Falar Agora</span>
          <MessageCircle className="w-4 h-4" />
        </a>

      </div>
    </header>
  );
};