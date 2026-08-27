import React from 'react';
import { Home, Users, Disc3 } from 'lucide-react';
import { AppScreen } from '../types';

interface BottomNavBarProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentScreen, onNavigate }) => {
  const navItems: { id: AppScreen; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'comunidad', label: 'Comunidad', icon: Users },
    { id: 'rosario', label: 'Rosario', icon: Disc3 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#c4c6d1]/60 shadow-lg pb-safe">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center transition-all duration-200 min-w-[72px] min-h-[48px] rounded-full px-3 py-1 ${
                isActive
                  ? 'bg-[#fdbe50] text-[#714d00] font-semibold shadow-xs scale-105'
                  : 'text-[#444650] hover:text-[#001b49] hover:bg-[#f4f3f8]'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className="font-sans text-xs tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
