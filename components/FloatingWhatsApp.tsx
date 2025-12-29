import React from 'react';
import { PROFILE_DATA } from '../constants';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={PROFILE_DATA.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-wiggle"
      aria-label="Contact on WhatsApp"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Orçamento Rápido
      </span>
      <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 border-2 border-white/10">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
        
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-2 border-deepBlack flex items-center justify-center text-[10px] font-bold text-white animate-pulse">
          1
        </span>
      </div>
    </a>
  );
};