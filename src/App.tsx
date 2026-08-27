import React, { useState } from 'react';
import { GatewayScreen } from './components/GatewayScreen';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { DrawerMenu } from './components/DrawerMenu';
import { HomeScreen } from './components/HomeScreen';
import { CommunityScreen } from './components/CommunityScreen';
import { RosaryPlayerScreen } from './components/RosaryPlayerScreen';
import { CursorPromptModal } from './components/CursorPromptModal';
import { AppScreen, UserRole, MysteryType } from './types';
import { OFFICIAL_IMAGES } from './data/mockData';
import { Code2, HandMetal, Sparkles } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('gateway');
  const [userRole, setUserRole] = useState<UserRole>('devoto');
  const [isLsegActive, setIsLsegActive] = useState<boolean>(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState<boolean>(false);
  const [selectedMysteryType, setSelectedMysteryType] = useState<MysteryType>('gozosos');

  const handleSelectRole = (role: UserRole) => {
    setUserRole(role);
    setCurrentScreen('home');
  };

  const handleToggleLseg = () => {
    setIsLsegActive((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1a1b1f] flex flex-col font-serif-sacred">
      {/* 1. Gateway Screen (when active) */}
      {currentScreen === 'gateway' ? (
        <GatewayScreen
          onSelectRole={handleSelectRole}
          onOpenPromptHelper={() => setIsPromptModalOpen(true)}
        />
      ) : (
        /* 2. Main App Experience (Home, Community, Rosary) */
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top Desktop Navigation Cluster (Shown on md+ screens) */}
          <header className="hidden md:flex bg-white/95 backdrop-blur-md sticky top-0 items-center justify-between px-8 h-20 w-full z-40 border-b border-[#c4c6d1]/60 shadow-2xs">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-[#001b49] hover:bg-[#f4f3f8] p-2 rounded-full transition-colors flex items-center justify-center"
                aria-label="Abrir menú"
              >
                <span className="font-sans font-bold text-xl">☰</span>
              </button>
              
              <button
                onClick={() => setCurrentScreen('gateway')}
                className="flex items-center gap-3 text-left group"
              >
                <img
                  src={OFFICIAL_IMAGES.crestDetailed}
                  alt="Cofradía del Rosario"
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="font-serif font-bold text-lg text-[#001b49] leading-tight">
                    Cofradía del Santo Rosario
                  </h1>
                  <span className="font-sans text-xs text-[#7e5700] font-medium tracking-wide">
                    Basílica de Santo Domingo, Guatemala
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="flex gap-8">
              <button
                onClick={() => setCurrentScreen('home')}
                className={`font-sans text-sm font-semibold pb-1 border-b-2 transition-all ${
                  currentScreen === 'home'
                    ? 'border-[#7e5700] text-[#7e5700]'
                    : 'border-transparent text-[#444650] hover:text-[#001b49]'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => setCurrentScreen('comunidad')}
                className={`font-sans text-sm font-semibold pb-1 border-b-2 transition-all ${
                  currentScreen === 'comunidad'
                    ? 'border-[#7e5700] text-[#7e5700]'
                    : 'border-transparent text-[#444650] hover:text-[#001b49]'
                }`}
              >
                Comunidad
              </button>
              <button
                onClick={() => setCurrentScreen('rosario')}
                className={`font-sans text-sm font-semibold pb-1 border-b-2 transition-all ${
                  currentScreen === 'rosario'
                    ? 'border-[#7e5700] text-[#7e5700]'
                    : 'border-transparent text-[#444650] hover:text-[#001b49]'
                }`}
              >
                Rosario (LSEG)
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center gap-3">
              {/* LSEG indicator button */}
              <button
                onClick={handleToggleLseg}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold flex items-center gap-1.5 transition-all ${
                  isLsegActive
                    ? 'bg-[#fdbe50] text-[#714d00] shadow-2xs'
                    : 'bg-[#f4f3f8] text-[#444650] hover:bg-[#e9e7ed]'
                }`}
              >
                <HandMetal className="w-4 h-4" />
                <span>LSEG {isLsegActive ? 'Activada' : 'Desactivada'}</span>
              </button>

              {/* Flutter prompt button */}
              <button
                onClick={() => setIsPromptModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold bg-[#123068] text-[#fdbe50] hover:bg-[#001b49] transition-all flex items-center gap-1.5 border border-[#fdbe50]/30 shadow-2xs"
                title="Ver Prompt para Cursor (Flutter)"
              >
                <Code2 className="w-3.5 h-3.5" />
                Prompt Flutter
              </button>

              {/* Role badge */}
              <button
                onClick={() => setUserRole(userRole === 'devoto' ? 'cofrade' : 'devoto')}
                className="px-3 py-1.5 rounded-full text-xs font-sans font-semibold border border-[#c4c6d1] hover:bg-[#f4f3f8] text-[#001b49] transition-colors"
                title="Cambiar rol"
              >
                {userRole === 'cofrade' ? '✦ Modo Cofrade' : 'Modo Devoto'}
              </button>
            </div>
          </header>

          {/* Mobile Top AppBar */}
          <div className="md:hidden">
            <TopAppBar
              userRole={userRole}
              isLsegActive={isLsegActive}
              onToggleLseg={handleToggleLseg}
              onOpenDrawer={() => setIsDrawerOpen(true)}
              onGoToGateway={() => setCurrentScreen('gateway')}
            />
          </div>

          {/* Active Screen View */}
          <main className="flex-1">
            {currentScreen === 'home' && (
              <HomeScreen
                userRole={userRole}
                onNavigate={(screen) => setCurrentScreen(screen)}
                onSelectMysteryType={(type) => setSelectedMysteryType(type as MysteryType)}
              />
            )}

            {currentScreen === 'comunidad' && <CommunityScreen />}

            {currentScreen === 'rosario' && (
              <RosaryPlayerScreen
                isLsegActive={isLsegActive}
                onToggleLseg={handleToggleLseg}
                initialMysteryType={selectedMysteryType}
              />
            )}
          </main>

          {/* Mobile Bottom Navigation Bar */}
          <div className="md:hidden">
            <BottomNavBar
              currentScreen={currentScreen}
              onNavigate={(screen) => setCurrentScreen(screen)}
            />
          </div>
        </div>
      )}

      {/* Side Drawer Menu */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        userRole={userRole}
        onChangeRole={(role) => setUserRole(role)}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenPromptModal={() => setIsPromptModalOpen(true)}
      />

      {/* Cursor Prompt Helper Modal */}
      <CursorPromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
      />
    </div>
  );
}
