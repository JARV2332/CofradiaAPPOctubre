import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, HandMetal, Volume2, VolumeX, Sparkles, Check, ChevronDown } from 'lucide-react';
import { MYSTERY_SETS, OFFICIAL_IMAGES } from '../data/mockData';
import { MysteryType } from '../types';

interface RosaryPlayerScreenProps {
  isLsegActive: boolean;
  onToggleLseg: () => void;
  initialMysteryType?: MysteryType;
}

export const RosaryPlayerScreen: React.FC<RosaryPlayerScreenProps> = ({
  isLsegActive,
  onToggleLseg,
  initialMysteryType = 'gozosos',
}) => {
  const [selectedSetType, setSelectedSetType] = useState<MysteryType>(initialMysteryType);
  const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(135); // 02:15 default from mockup
  const [totalSeconds, setTotalSeconds] = useState(870); // 14:30 default from mockup
  const [aveMariaCount, setAveMariaCount] = useState(3);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  const timerRef = useRef<number | null>(null);

  const currentSet = MYSTERY_SETS[selectedSetType] || MYSTERY_SETS.gozosos;
  const currentMystery = currentSet.mysteries[currentMysteryIndex] || currentSet.mysteries[0];

  // Simulating realistic audio progress
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setPlaybackSeconds((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return totalSeconds;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, totalSeconds]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextMystery = () => {
    if (currentMysteryIndex < currentSet.mysteries.length - 1) {
      setCurrentMysteryIndex(currentMysteryIndex + 1);
      setPlaybackSeconds(0);
      setAveMariaCount(0);
    }
  };

  const handlePrevMystery = () => {
    if (currentMysteryIndex > 0) {
      setCurrentMysteryIndex(currentMysteryIndex - 1);
      setPlaybackSeconds(0);
      setAveMariaCount(0);
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setPlaybackSeconds(Math.floor(pos * totalSeconds));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col gap-5 pb-28">
      {/* Mystery Set Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {(Object.keys(MYSTERY_SETS) as MysteryType[]).map((type) => {
          const set = MYSTERY_SETS[type];
          const isSelected = selectedSetType === type;
          return (
            <button
              key={type}
              onClick={() => {
                setSelectedSetType(type);
                setCurrentMysteryIndex(0);
                setPlaybackSeconds(0);
                setAveMariaCount(0);
              }}
              className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#001b49] text-white shadow-xs'
                  : 'bg-white border border-[#c4c6d1] text-[#444650] hover:bg-[#f4f3f8]'
              }`}
            >
              {set.name.replace('Misterios ', '')}
            </button>
          );
        })}
      </div>

      {/* Video Player Area with LSEG PiP Overlay */}
      <section className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-[#c4c6d1]/50 group">
        <img
          src={OFFICIAL_IMAGES.templeVideoBg}
          alt="Altar de Santo Domingo"
          className="object-cover w-full h-full opacity-85"
          referrerPolicy="no-referrer"
        />

        {/* Video Atmosphere Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top left badge */}
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-sans flex items-center gap-1.5 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-[#fdbe50]" />
          <span>{currentSet.name}</span>
        </div>

        {/* PiP Overlay (Sign Language Interpreter) */}
        {isLsegActive && (
          <div
            id="pip-container"
            className="absolute bottom-3 right-3 w-1/3 max-w-[150px] sm:max-w-[170px] aspect-[3/4] bg-[#001b49] rounded-xl overflow-hidden border-2 border-[#E5A93C] shadow-2xl transition-all duration-300 animate-in zoom-in-95"
          >
            <img
              src={OFFICIAL_IMAGES.signLanguageInterpreter}
              alt="Intérprete en Lengua de Señas"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-sans text-white uppercase font-bold tracking-wider">
              LSEG
            </div>
          </div>
        )}
      </section>

      {/* Inclusive Switch: Activar Lengua de Señas */}
      <section className="flex items-center justify-between bg-white p-3.5 sm:p-4 rounded-xl border border-[#c4c6d1] shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fdbe50]/30 flex items-center justify-center text-[#714d00]">
            <HandMetal className="w-5 h-5 text-[#7e5700]" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm text-[#1a1b1f]">
              Activar Lengua de Señas
            </h3>
            <p className="font-sans text-xs text-[#444650]">
              Intérprete en pantalla (LSEG)
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <button
          id="lseg-toggle"
          onClick={onToggleLseg}
          role="switch"
          aria-checked={isLsegActive}
          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7e5700] relative ${
            isLsegActive ? 'bg-[#fdbe50]' : 'bg-[#e3e2e7]'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isLsegActive
                ? 'translate-x-6 bg-[#714d00]'
                : 'translate-x-0 bg-[#747781]'
            }`}
          />
        </button>
      </section>

      {/* Mystery Navigation Dots (1st to 5th) */}
      <div className="flex items-center justify-between px-1">
        <span className="font-sans text-xs text-[#747781] uppercase tracking-wider font-semibold">
          Misterio {currentMysteryIndex + 1} de 5
        </span>
        <div className="flex gap-1.5">
          {currentSet.mysteries.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                setCurrentMysteryIndex(idx);
                setPlaybackSeconds(0);
                setAveMariaCount(0);
              }}
              className={`w-7 h-7 rounded-full text-xs font-sans font-bold transition-all flex items-center justify-center ${
                currentMysteryIndex === idx
                  ? 'bg-[#001b49] text-white shadow-xs scale-105'
                  : 'bg-white border border-[#c4c6d1] text-[#444650] hover:bg-[#f4f3f8]'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Prayer Card */}
      <article className="religious-card rounded-xl p-5 sm:p-6 shadow-md border border-[#c4c6d1] border-t-2 border-t-[#E5A93C] relative">
        <h2 className="font-serif text-2xl font-bold text-[#001b49] mb-1.5">
          {currentMystery.orderText}
        </h2>
        <div className="h-[2px] bg-[#E5A93C] w-16 mb-4" />

        <div className="font-serif text-base sm:text-lg text-[#1a1b1f] leading-relaxed space-y-3">
          <p className="font-semibold text-lg text-[#001b49]">
            {currentMystery.title}
          </p>

          <p className="italic text-[#444650] bg-[#FFFDF5] p-3 rounded-lg border-l-2 border-[#E5A93C]">
            {currentMystery.verse}
            <span className="block not-italic font-sans text-xs text-[#7e5700] font-semibold mt-1">
              — {currentMystery.scripture}
            </span>
          </p>

          <p className="text-sm text-[#1a1b1f] pt-1">
            <strong>Reflexión:</strong> {currentMystery.reflection}
          </p>

          {/* Interactive Ave Maria Rosary Beads */}
          <div className="pt-3 border-t border-[#c4c6d1]/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-xs font-bold text-[#001b49] uppercase tracking-wider">
                Decenario de Ave Marías ({aveMariaCount} / 10)
              </span>
              <button
                onClick={() => setAveMariaCount((prev) => (prev < 10 ? prev + 1 : 0))}
                className="text-xs font-sans font-semibold text-[#7e5700] hover:underline"
              >
                {aveMariaCount === 10 ? 'Reiniciar decenario' : '+ Rezar cuenta'}
              </button>
            </div>
            
            <div className="flex items-center justify-between gap-1 py-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAveMariaCount(i + 1)}
                  title={`Cuenta ${i + 1}`}
                  className={`flex-1 h-3 rounded-full transition-all ${
                    i < aveMariaCount
                      ? 'bg-[#E5A93C] shadow-2xs'
                      : 'bg-[#e3e2e7] hover:bg-[#c4c6d1]'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-sm font-serif text-[#444650] pt-2">
            {currentMystery.prayer}
          </p>
        </div>
      </article>

      {/* Audio / Media Controls Box */}
      <section className="bg-white p-5 sm:p-6 rounded-xl border border-[#c4c6d1] shadow-md flex flex-col gap-4">
        {/* Progress Bar & Timing */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between font-sans text-xs font-semibold text-[#444650]">
            <span>{formatTime(playbackSeconds)}</span>
            <span>{formatTime(totalSeconds)}</span>
          </div>

          {/* Slider */}
          <div
            onClick={handleSeek}
            className="relative w-full h-2.5 bg-[#f4f3f8] rounded-full cursor-pointer overflow-hidden border border-[#c4c6d1]/40"
          >
            <div
              className="absolute top-0 left-0 h-full bg-[#fdbe50] rounded-full transition-all duration-150"
              style={{ width: `${(playbackSeconds / totalSeconds) * 100}%` }}
            />
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between pt-1">
          {/* Speed & Mute controls */}
          <div className="relative">
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="text-xs font-sans font-bold text-[#001b49] bg-[#f4f3f8] px-2.5 py-1.5 rounded-lg hover:bg-[#e9e7ed] transition-colors flex items-center gap-1"
            >
              <span>{playbackSpeed}x</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {showSpeedMenu && (
              <div className="absolute bottom-full left-0 mb-1 bg-white border border-[#c4c6d1] rounded-lg shadow-lg p-1 z-20 flex flex-col gap-0.5">
                {[0.75, 1.0, 1.25, 1.5].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => {
                      setPlaybackSpeed(speed);
                      setShowSpeedMenu(false);
                    }}
                    className={`px-3 py-1 rounded text-xs font-sans text-left ${
                      playbackSpeed === speed ? 'bg-[#fdbe50] font-bold text-[#714d00]' : 'hover:bg-[#f4f3f8]'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Core Player Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              id="btn-rosary-prev"
              onClick={handlePrevMystery}
              disabled={currentMysteryIndex === 0}
              aria-label="Misterio Anterior"
              className="p-3 text-[#001b49] hover:bg-[#f4f3f8] disabled:opacity-40 disabled:hover:bg-transparent rounded-full transition-colors flex items-center justify-center min-w-[48px] min-h-[48px]"
            >
              <SkipBack className="w-6 h-6 fill-current" />
            </button>

            {/* Large Play/Pause Button */}
            <button
              id="btn-rosary-play-pause"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-[#fdbe50] hover:bg-[#fabc4d] text-[#714d00] rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 border-2 border-[#E5A93C]"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
              ) : (
                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
              )}
            </button>

            <button
              id="btn-rosary-next"
              onClick={handleNextMystery}
              disabled={currentMysteryIndex === currentSet.mysteries.length - 1}
              aria-label="Siguiente Misterio"
              className="p-3 text-[#001b49] hover:bg-[#f4f3f8] disabled:opacity-40 disabled:hover:bg-transparent rounded-full transition-colors flex items-center justify-center min-w-[48px] min-h-[48px]"
            >
              <SkipForward className="w-6 h-6 fill-current" />
            </button>
          </div>

          {/* Sound / Volume Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            className="p-2 text-[#444650] hover:text-[#001b49] hover:bg-[#f4f3f8] rounded-full transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      </section>
    </div>
  );
};
