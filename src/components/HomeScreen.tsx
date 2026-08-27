import React, { useState } from 'react';
import { Megaphone, Church, Calendar, MapPin, Disc3, CheckCircle2, ChevronRight } from 'lucide-react';
import { MYSTERY_SETS, INITIAL_ANNOUNCEMENTS, COFRADE_ACTIVITY } from '../data/mockData';
import { UserRole, AppScreen, Announcement } from '../types';

interface HomeScreenProps {
  userRole: UserRole;
  onNavigate: (screen: AppScreen) => void;
  onSelectMysteryType?: (type: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  userRole,
  onNavigate,
  onSelectMysteryType,
}) => {
  const [announcements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [activityConfirmed, setActivityConfirmed] = useState(COFRADE_ACTIVITY.confirmed);
  const [showRsvpToast, setShowRsvpToast] = useState(false);

  // Determine current day mystery
  const activeMystery = MYSTERY_SETS.gozosos;
  const firstMystery = activeMystery.mysteries[0];

  const handleConfirmActivity = () => {
    setActivityConfirmed(!activityConfirmed);
    setShowRsvpToast(true);
    setTimeout(() => setShowRsvpToast(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-5 flex flex-col gap-6 pb-28">
      {/* Toast Notification */}
      {showRsvpToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#001b49] text-white px-5 py-2.5 rounded-full shadow-lg border border-[#fdbe50]/40 flex items-center gap-2 text-xs sm:text-sm font-sans animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#fdbe50]" />
          <span>
            {activityConfirmed
              ? '¡Asistencia confirmada para el Turno de Velación!'
              : 'Asistencia cancelada.'}
          </span>
        </div>
      )}

      {/* 1. Misterio del Día Card */}
      <section aria-labelledby="misterio-title" className="w-full">
        <div 
          onClick={() => {
            if (onSelectMysteryType) onSelectMysteryType('gozosos');
            onNavigate('rosario');
          }}
          className="bg-white rounded-xl shadow-sm border border-[#c4c6d1]/40 overflow-hidden relative group cursor-pointer hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          {/* Top gold bar */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E5A93C] z-10" />

          {/* Image & Gradient Backdrop */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={activeMystery.image}
              alt="Misterio del Día - Anunciación"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF5] via-[#FFFDF5]/40 to-transparent" />

            {/* Bottom text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <span className="text-[#001b49] font-sans text-xs font-bold uppercase tracking-wider mb-1 block">
                ✦ Misterio del Día
              </span>
              <h2
                id="misterio-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1b1f] mb-1 leading-snug"
              >
                {firstMystery.title}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <p className="font-serif text-sm sm:text-base text-[#444650] italic">
                  {activeMystery.name} ({activeMystery.days})
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-[#7e5700] bg-[#fdbe50]/30 px-3 py-1 rounded-full border border-[#E5A93C]/40 group-hover:bg-[#fdbe50] transition-colors">
                  <Disc3 className="w-3.5 h-3.5" />
                  Rezar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cofrade / Hermandad Section */}
      <section aria-labelledby="cofrade-act-title">
        <div className="bg-[#123068] text-white rounded-xl p-5 sm:p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#001b49]/30 shadow-md">
          {/* Subtle watermark church icon */}
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
            <Church className="w-40 h-40 text-white" />
          </div>

          <div className="z-10 w-full md:w-auto">
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#d9e2ff] font-semibold mb-1 block">
              {userRole === 'cofrade' ? 'Tu División • Hermandad' : 'Comunidad Cofrade'}
            </span>
            <h3
              id="cofrade-act-title"
              className="font-serif text-xl sm:text-2xl font-bold text-[#d9e2ff] mb-2"
            >
              {COFRADE_ACTIVITY.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/90 font-sans">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#fdbe50]" />
                {COFRADE_ACTIVITY.dateTime}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#fdbe50]" />
                {COFRADE_ACTIVITY.location}
              </span>
            </div>
          </div>

          <button
            id="btn-confirm-activity"
            onClick={handleConfirmActivity}
            className={`font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all z-10 w-full md:w-auto text-center shadow-md active:scale-95 flex items-center justify-center gap-2 ${
              activityConfirmed
                ? 'bg-[#fdbe50] text-[#714d00] hover:bg-[#fabc4d]'
                : 'bg-[#7e5700] text-white hover:bg-[#604100]'
            }`}
          >
            {activityConfirmed ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Asistencia Confirmada
              </>
            ) : (
              'Confirmar Asistencia'
            )}
          </button>
        </div>
      </section>

      {/* 3. Anuncios y Cultos Feed */}
      <section aria-labelledby="anuncios-title" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2
            id="anuncios-title"
            className="font-serif text-xl sm:text-2xl font-bold text-[#001b49] flex items-center gap-2"
          >
            <Megaphone className="w-5 h-5 text-[#7e5700]" />
            Anuncios y Cultos
          </h2>
          <span className="text-xs font-sans text-[#747781]">Actualizado hoy</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {announcements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAnnouncement(item)}
              className="bg-white rounded-xl border border-[#c4c6d1]/50 p-5 flex flex-col justify-between gap-3 hover:shadow-md transition-all cursor-pointer group hover:border-[#E5A93C]/50"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wider ${
                      item.badgeStyle === 'solemn'
                        ? 'bg-[#991B1B] text-white'
                        : item.badgeStyle === 'warning'
                        ? 'bg-[#fabc4d] text-[#714d00]'
                        : 'bg-[#fdbe50]/30 text-[#714d00]'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-[#747781] font-sans text-xs">{item.timeLabel}</span>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1a1b1f] group-hover:text-[#001b49] transition-colors">
                  {item.title}
                </h4>
                <p className="font-serif text-sm text-[#444650] mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#c4c6d1]/30 text-xs font-sans text-[#7e5700] font-semibold">
                <span>Ver detalles del culto</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button: Iniciar Rezo de Hoy */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-30">
        <button
          id="btn-fab-start-rosary"
          onClick={() => onNavigate('rosario')}
          className="bg-[#fdbe50] hover:bg-[#fabc4d] text-[#714d00] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full flex items-center gap-3 pr-6 pl-4 py-3.5 group active:scale-95 border border-[#E5A93C]"
        >
          <div className="bg-white rounded-full p-2 flex items-center justify-center text-[#001b49] group-hover:text-[#7e5700] transition-colors shadow-2xs">
            <Disc3 className="w-5 h-5 animate-spin-slow" />
          </div>
          <span className="font-sans font-bold text-sm sm:text-base">
            Iniciar Rezo de Hoy
          </span>
        </button>
      </div>

      {/* Announcement Modal Details */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001b49]/40 backdrop-blur-xs">
          <div className="bg-[#FFFDF5] rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#c4c6d1] animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] font-sans font-bold px-2.5 py-1 rounded bg-[#fdbe50]/30 text-[#714d00] uppercase tracking-wider">
                {selectedAnnouncement.badge}
              </span>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="text-[#747781] hover:text-[#1a1b1f] text-sm font-sans font-bold p-1"
              >
                ✕
              </button>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#001b49] mb-3">
              {selectedAnnouncement.title}
            </h3>

            <p className="font-serif text-base text-[#1a1b1f] leading-relaxed mb-4">
              {selectedAnnouncement.fullDetails || selectedAnnouncement.description}
            </p>

            {selectedAnnouncement.dateStr && (
              <div className="bg-white p-3 rounded-xl border border-[#c4c6d1]/60 text-xs font-sans text-[#444650] space-y-1 mb-5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#7e5700]" />
                  <span><strong>Fecha:</strong> {selectedAnnouncement.dateStr}</span>
                </div>
                {selectedAnnouncement.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#7e5700]" />
                    <span><strong>Lugar:</strong> {selectedAnnouncement.location}</span>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="w-full py-3 bg-[#001b49] text-white font-sans font-semibold rounded-full hover:bg-[#123068] transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
