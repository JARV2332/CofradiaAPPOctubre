import React from 'react';
import { User, Church, Sparkles, BookOpen } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data/mockData';
import { UserRole } from '../types';

interface GatewayScreenProps {
  onSelectRole: (role: UserRole) => void;
  onOpenPromptHelper?: () => void;
}

export const GatewayScreen: React.FC<GatewayScreenProps> = ({ onSelectRole, onOpenPromptHelper }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center text-[#1a1b1f] overflow-hidden bg-[#FFFDF5]">
      {/* Decorative subtle background dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #001b49 1.5px, transparent 0)', 
          backgroundSize: '28px 28px' 
        }} 
      />

      {/* Top Bar with Flutter Prompt modal button & subtle badge */}
      <header className="w-full max-w-md px-5 pt-4 z-20 flex justify-between items-center">
        <span className="text-[11px] uppercase tracking-widest font-sans font-medium text-[#7e5700] bg-[#fdbe50]/20 px-3 py-1 rounded-full border border-[#E5A93C]/30 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#E5A93C]" />
          Guatemala • 1559
        </span>

        {onOpenPromptHelper && (
          <button
            onClick={onOpenPromptHelper}
            className="text-[11px] font-sans font-semibold text-[#001b49] bg-white/90 hover:bg-white px-3 py-1 rounded-full border border-[#c4c6d1] shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5"
            title="Ver Prompt para Cursor (Flutter & Dart)"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#001b49]" />
            Prompt Flutter
          </button>
        )}
      </header>

      {/* Top Spacer */}
      <div className="flex-1 w-full" />

      {/* Center Content: Crest, Name and Subtitle */}
      <div className="flex flex-col items-center justify-center z-10 w-full px-5 text-center transition-all duration-700 animate-in fade-in zoom-in-95">
        {/* Monogram / Crest Container */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#c4c6d1]/40 flex items-center justify-center shadow-md bg-white relative group">
          {/* Subtle gold glow */}
          <div className="absolute inset-0 rounded-full bg-[#fdbe50]/15 blur-xl z-0 scale-110 group-hover:scale-125 transition-transform duration-700" />
          <img 
            src={OFFICIAL_IMAGES.crestColor} 
            alt="Escudo Cofradía del Santo Rosario" 
            className="w-32 h-32 sm:w-40 sm:h-40 z-10 object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#001b49] font-bold mt-6 tracking-tight">
          Cofradía del Santo Rosario
        </h1>
        <p className="font-serif text-base sm:text-lg text-[#444650] mt-1.5 italic">
          Devoción y Tradición
        </p>
      </div>

      {/* Bottom Spacer */}
      <div className="flex-1 w-full" />

      {/* Bottom Actions */}
      <div className="w-full max-w-md px-5 pb-safe z-10 mb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3 w-full">
          {/* Secondary Action: Entrar como Devoto (Outline Blue) */}
          <button 
            id="btn-gateway-devoto"
            onClick={() => onSelectRole('devoto')}
            className="w-full h-14 rounded-full border-2 border-[#001b49] text-[#001b49] font-sans font-semibold text-base flex items-center justify-center hover:bg-[#d9e2ff]/50 active:scale-[0.98] transition-all duration-200 shadow-xs group"
          >
            <span className="flex items-center gap-2.5">
              <User className="w-5 h-5 text-[#001b49] group-hover:scale-110 transition-transform" />
              Entrar como Devoto
            </span>
          </button>

          {/* Primary Action: Acceso Cofrade (Solid Navy with Gold Text) */}
          <button 
            id="btn-gateway-cofrade"
            onClick={() => onSelectRole('cofrade')}
            className="w-full h-14 rounded-full bg-[#123068] text-[#E5A93C] font-sans font-semibold text-base flex items-center justify-center shadow-md hover:shadow-lg hover:bg-[#001b49] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-2.5">
              <Church className="w-5 h-5 text-[#E5A93C] group-hover:scale-110 transition-transform" />
              Acceso Cofrade
            </span>
          </button>
        </div>

        {/* Footer Text */}
        <p className="font-sans text-[11px] text-[#444650] text-center opacity-80 tracking-widest uppercase mt-2">
          Basílica de Santo Domingo • Guatemala
        </p>
      </div>
    </div>
  );
};
