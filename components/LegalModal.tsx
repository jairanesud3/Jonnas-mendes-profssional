import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-neonPurple" />
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          {/* Close X only appears after timer if you want strict enforcement, 
              but usually UX allows closing via X, just not "Agreeing". 
              Let's keep X hidden until timer ends to force attention. */}
          {canClose && (
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scrollable Text */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-light">
            {content}
          </div>
        </div>

        {/* Footer with Timer Button */}
        <div className="p-6 border-t border-white/5 bg-black/20 rounded-b-2xl">
          <button
            onClick={canClose ? onClose : undefined}
            disabled={!canClose}
            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-500 flex items-center justify-center gap-2
              ${canClose 
                ? 'bg-neonPurple text-white hover:bg-neonPurple/90 shadow-[0_0_20px_rgba(138,43,226,0.4)] cursor-pointer' 
                : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
              }
            `}
          >
            {canClose ? (
              <>
                <Lock className="w-4 h-4" />
                Li e Concordo
              </>
            ) : (
              <span>Leia o documento ({timeLeft}s)</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};