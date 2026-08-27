import React from 'react';
import { Menu, HandMetal, Sparkles } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data/mockData';
import { UserRole } from '../types';

interface TopAppBarProps {
  userRole: UserRole;
  isLsegActive: boolean;
  onToggleLseg: () => void;
  onOpenDrawer: () => void;
  onGoToGateway: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  userRole,
  isLsegActive,
  onToggleLseg,
  onOpenDrawer,
  onGoToGateway,
}) => {
  return (
    <header className="bg-white/95 backdrop-blur-md text-[#001b49] border-b border-[#c4c6d1]/60 sticky top-0 z-40 w-full transition-all shadow-xs">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Menu Button */}
        <button
          id="btn-appbar-menu"
          onClick={onOpenDrawer}
          aria-label="Abrir menú"
          className="p-2 -ml-2 rounded-full hover:bg-[#f4f3f8] active:scale-95 text-[#444650] hover:text-[#001b49] transition-all flex items-center justify-center min-w-[44px] min-h-[44px]"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Center Logo / Crest */}
        <button 
          onClick={onGoToGateway}
          className="h-11 flex items-center gap-2 px-2 rounded-lg hover:bg-[#f4f3f8]/80 transition-colors group cursor-pointer"
          title="Ir a pantalla de inicio"
        >
          <img
            src={OFFICIAL_IMAGES.crestDetailed}
            alt="Escudo Cofradía del Santo Rosario"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-serif font-bold text-sm leading-tight text-[#001b49]">
              Cofradía del Rosario
            </span>
            <span className="font-sans text-[10px] text-[#7e5700] uppercase tracking-wider font-semibold">
              {userRole === 'cofrade' ? '✦ Acceso Cofrade' : 'Devoción Mariana'}
            </span>
          </div>
        </button>

        {/* Right Actions: LSEG Sign language toggle & Role pill */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {userRole === 'cofrade' && (
            <span className="hidden xs:inline-flex items-center gap-1 text-[11px] font-sans font-semibold bg-[#123068] text-[#fdbe50] px-2.5 py-1 rounded-full border border-[#fdbe50]/30 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#E5A93C]" />
              Cofrade
            </span>
          )}

          <button
            id="btn-appbar-lseg"
            onClick={onToggleLseg}
            aria-label="Alternar Lengua de Señas (LSEG)"
            title={isLsegActive ? 'Lengua de Señas activa' : 'Activar Lengua de Señas'}
            className={`p-2 rounded-full transition-all flex items-center justify-center min-w-[44px] min-h-[44px] relative ${
              isLsegActive
                ? 'bg-[#fdbe50] text-[#714d00] shadow-xs'
                : 'text-[#444650] hover:bg-[#f4f3f8] hover:text-[#001b49]'
            }`}
          >
            <HandMetal className="w-5 h-5" />
            {isLsegActive && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#001b49] rounded-full border-2 border-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
