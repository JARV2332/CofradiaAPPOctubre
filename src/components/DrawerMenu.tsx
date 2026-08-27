import React from 'react';
import { X, User, Church, BookOpen, Clock, Heart, Shield, Code2, ExternalLink } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data/mockData';
import { UserRole, AppScreen } from '../types';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: UserRole;
  onChangeRole: (role: UserRole) => void;
  onNavigate: (screen: AppScreen) => void;
  onOpenPromptModal: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  onClose,
  userRole,
  onChangeRole,
  onNavigate,
  onOpenPromptModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#001b49]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="relative w-full max-w-xs bg-[#FFFDF5] text-[#1a1b1f] h-full shadow-2xl flex flex-col justify-between border-r border-[#c4c6d1] z-10 animate-in slide-in-from-left duration-300">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-[#c4c6d1]/60 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_IMAGES.crestDetailed}
                alt="Escudo Cofradía"
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-serif font-bold text-sm text-[#001b49]">
                  Cofradía del Rosario
                </h3>
                <p className="font-sans text-[11px] text-[#7e5700] font-medium">
                  Templo Santo Domingo, GT
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#f4f3f8] text-[#444650] hover:text-[#001b49]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Role Switcher */}
          <div className="p-4 bg-[#f4f3f8]/70 border-b border-[#c4c6d1]/40">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#444650] block mb-2">
              Modo de Experiencia
            </span>
            <div className="grid grid-cols-2 gap-2 bg-white p-1 rounded-xl border border-[#c4c6d1]">
              <button
                onClick={() => onChangeRole('devoto')}
                className={`py-2 px-2.5 rounded-lg text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  userRole === 'devoto'
                    ? 'bg-[#001b49] text-white shadow-xs'
                    : 'text-[#444650] hover:bg-[#f4f3f8]'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                Devoto
              </button>
              <button
                onClick={() => onChangeRole('cofrade')}
                className={`py-2 px-2.5 rounded-lg text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  userRole === 'cofrade'
                    ? 'bg-[#123068] text-[#fdbe50] shadow-xs'
                    : 'text-[#444650] hover:bg-[#f4f3f8]'
                }`}
              >
                <Church className="w-3.5 h-3.5 text-[#E5A93C]" />
                Cofrade
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-3 space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#1a1b1f] hover:bg-white hover:text-[#001b49] transition-all"
            >
              <Church className="w-4 h-4 text-[#001b49]" />
              Inicio y Cultos
            </button>

            <button
              onClick={() => {
                onNavigate('rosario');
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#1a1b1f] hover:bg-white hover:text-[#001b49] transition-all"
            >
              <Heart className="w-4 h-4 text-[#7e5700]" />
              Rezo del Santo Rosario (LSEG)
            </button>

            <button
              onClick={() => {
                onNavigate('comunidad');
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#1a1b1f] hover:bg-white hover:text-[#001b49] transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#450003]" />
              Muro Cofrade e Intenciones
            </button>

            <div className="pt-3 pb-1">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#747781] px-3">
                Información y Ayuda
              </span>
            </div>

            <button
              onClick={() => {
                onOpenPromptModal();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-sans font-semibold text-[#001b49] bg-[#fdbe50]/20 border border-[#E5A93C]/40 hover:bg-[#fdbe50]/30 transition-all"
            >
              <span className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-[#7e5700]" />
                Prompt para Cursor (Flutter)
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#7e5700]" />
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#c4c6d1]/60 bg-white/70">
          <div className="flex items-center gap-2 text-xs text-[#444650] font-sans">
            <Clock className="w-4 h-4 text-[#7e5700]" />
            <span>Misas: Lun a Sáb 06:30, 12:00, 19:00</span>
          </div>
          <p className="text-[10px] text-[#747781] font-sans mt-2">
            Basílica de Nuestra Señora del Rosario, 10a. Calle y 12 Av. Zona 1, Ciudad de Guatemala.
          </p>
        </div>
      </div>
    </div>
  );
};
