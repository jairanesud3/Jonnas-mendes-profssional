import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset state when modal opens
      setTimeLeft(10);
      setCanClose(false);
      
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClose(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300"
        onClick={canClose ? onClose : undefined}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#050505] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(138,43,226,0.2)] flex flex-col max-h-[85vh] animate-modal-pop overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neonPurple/10 rounded-lg border border-neonPurple/20">
               <ShieldCheck className="w-5 h-5 text-neonPurple" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
          </div>
          
          {/* Close button */}
          <button 
            onClick={onClose} 
            className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-500 ease-out ${canClose ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Scrollable Text */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-[#050505]">
          <div className="text-gray-300 text-sm leading-7 whitespace-pre-line font-light opacity-90">
            {content}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-[#0a0a0a]">
          <button
            onClick={canClose ? onClose : undefined}
            disabled={!canClose}
            className={`
              w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-500 flex items-center justify-center gap-2
              ${canClose 
                ? 'bg-neonPurple text-white hover:bg-neonPurple/90 shadow-[0_0_30px_rgba(138,43,226,0.6)] scale-100 cursor-pointer transform hover:scale-[1.02]' 
                : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5 grayscale opacity-60'
              }
            `}
          >
            {canClose ? (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Li e Concordo</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neonPurple animate-[spin_3s_linear_infinite]" />
                <span>Leia o documento ({timeLeft}s)</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};