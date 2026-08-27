import React, { useState } from 'react';
import { FileText, Image as ImageIcon, Heart, Download, Plus, Check, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { INITIAL_DOCUMENTS, GALLERY_PHOTOS, INITIAL_INTENTIONS } from '../data/mockData';
import { CommunityDocument, GalleryPhoto, PrayerIntention } from '../types';

export const CommunityScreen: React.FC = () => {
  const [documents] = useState<CommunityDocument[]>(INITIAL_DOCUMENTS);
  const [intentions, setIntentions] = useState<PrayerIntention[]>(INITIAL_INTENTIONS);
  const [selectedDoc, setSelectedDoc] = useState<CommunityDocument | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  
  // Add intention modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newIntentionText, setNewIntentionText] = useState('');
  const [newIntentionAuthor, setNewIntentionAuthor] = useState('');
  const [showSubmittedToast, setShowSubmittedToast] = useState(false);

  const handleTogglePray = (id: string) => {
    setIntentions((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const hasPrayed = !item.hasPrayed;
          return {
            ...item,
            hasPrayed,
            prayersCount: hasPrayed ? item.prayersCount + 1 : Math.max(0, item.prayersCount - 1),
          };
        }
        return item;
      })
    );
  };

  const handleAddIntention = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIntentionText.trim()) return;

    const newInt: PrayerIntention = {
      id: `int-${Date.now()}`,
      text: newIntentionText.trim(),
      author: newIntentionAuthor.trim() || 'Devoto Anónimo',
      prayersCount: 1,
      hasPrayed: true,
      date: 'Hoy',
    };

    setIntentions([newInt, ...intentions]);
    setNewIntentionText('');
    setNewIntentionAuthor('');
    setIsAddModalOpen(false);
    setShowSubmittedToast(true);
    setTimeout(() => setShowSubmittedToast(false), 3500);
  };

  const handleDownloadDoc = (doc: CommunityDocument) => {
    // Generate text blob for demonstration download
    const blob = new Blob([doc.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-5 flex flex-col gap-6 pb-28">
      {/* Toast */}
      {showSubmittedToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#001b49] text-white px-5 py-2.5 rounded-full shadow-lg border border-[#fdbe50]/40 flex items-center gap-2 text-xs sm:text-sm font-sans animate-in fade-in slide-in-from-top-4 duration-300">
          <Sparkles className="w-4 h-4 text-[#fdbe50]" />
          <span>Intención comunitaria agregada con bendición.</span>
        </div>
      )}

      {/* Page Header */}
      <div className="text-center my-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#001b49] mb-1.5">
          Muro de la Cofradía
        </h1>
        <p className="font-serif text-sm sm:text-base text-[#444650] max-w-lg mx-auto">
          Noticias, eventos e intenciones de nuestra comunidad.
        </p>
      </div>

      {/* Activity Feed */}
      <div className="flex flex-col gap-6">
        {/* Card 1: Circular de Octubre */}
        {documents.map((doc) => (
          <article
            key={doc.id}
            className="religious-card sacred-top-border rounded-xl p-5 sm:p-6 shadow-sm border border-[#c4c6d1]"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="inline-block bg-[#fdbe50] text-[#714d00] font-sans text-xs font-bold px-2.5 py-1 rounded-full mb-1.5 uppercase tracking-wider">
                  {doc.badge}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#001b49]">
                  {doc.title}
                </h2>
              </div>
              <div className="bg-[#f4f3f8] p-3 rounded-full text-[#001b49]">
                <FileText className="w-6 h-6" />
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#E5A93C] opacity-40 mb-3" />

            <p className="font-serif text-base text-[#1a1b1f] mb-5 leading-relaxed">
              {doc.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setSelectedDoc(doc)}
                className="bg-[#001b49] text-white font-sans font-semibold text-sm py-3 px-6 rounded-full hover:bg-[#123068] transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-95"
              >
                <FileText className="w-4 h-4" />
                Leer Documento
              </button>
              <button
                onClick={() => handleDownloadDoc(doc)}
                className="border border-[#001b49] text-[#001b49] font-sans font-semibold text-sm py-3 px-6 rounded-full hover:bg-[#d9e2ff]/30 transition-colors flex items-center justify-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Descargar {doc.fileSize}
              </button>
            </div>
          </article>
        ))}

        {/* Card 2: Galería de Cultos */}
        <article className="religious-card rounded-xl p-5 sm:p-6 shadow-sm border border-[#c4c6d1]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="inline-block bg-[#e9e7ed] text-[#444650] font-sans text-xs font-bold px-2.5 py-1 rounded-full mb-1.5 uppercase tracking-wider">
                Galería
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#001b49]">
                Galería de Cultos
              </h2>
            </div>
            <div className="bg-[#f4f3f8] p-3 rounded-full text-[#7e5700]">
              <ImageIcon className="w-6 h-6" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#E5A93C] opacity-40 mb-3" />

          <p className="font-serif text-base text-[#1a1b1f] mb-4">
            Imágenes recientes de las celebraciones en el Templo de Santo Domingo.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {GALLERY_PHOTOS.slice(0, 2).map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(idx)}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative shadow-2xs"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-sans font-medium line-clamp-1">
                    {photo.title}
                  </span>
                </div>
              </div>
            ))}

            {/* View all tile */}
            <div
              onClick={() => setActivePhotoIndex(2)}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative shadow-2xs bg-[#2f3034]"
            >
              <img
                src={GALLERY_PHOTOS[2]?.url}
                alt="Ver más fotos"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center text-white">
                <span className="font-sans font-bold text-lg sm:text-xl">
                  +{GALLERY_PHOTOS.length} fotos
                </span>
                <span className="text-[11px] font-sans text-white/80">
                  Explorar galería
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3: Intenciones de la Semana */}
        <article className="religious-card rounded-xl p-5 sm:p-6 shadow-sm border border-[#c4c6d1]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="inline-block bg-[#6d0007] text-[#ffdad6] font-sans text-xs font-bold px-2.5 py-1 rounded-full mb-1.5 uppercase tracking-wider">
                Oración Continua
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#001b49]">
                Intenciones de la Semana
              </h2>
            </div>
            <div className="bg-[#f4f3f8] p-3 rounded-full text-[#6d0007]">
              <Heart className="w-6 h-6" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#E5A93C] opacity-40 mb-3" />

          <p className="font-serif text-sm sm:text-base text-[#444650] italic mb-4">
            Unámonos en oración por las siguientes intenciones especiales presentadas por nuestros hermanos cofrades:
          </p>

          <div className="space-y-3">
            {intentions.map((intent) => (
              <div
                key={intent.id}
                className="p-3.5 rounded-lg bg-[#FFFDF5] border border-[#c4c6d1]/50 flex items-start justify-between gap-3 hover:border-[#E5A93C] transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#7e5700] mt-2 shrink-0" />
                  <div>
                    <p className="font-serif text-sm sm:text-base text-[#1a1b1f]">
                      {intent.text}
                    </p>
                    <span className="text-[11px] font-sans text-[#747781] mt-0.5 block">
                      Por: {intent.author} • {intent.date}
                    </span>
                  </div>
                </div>

                {/* Pray count button */}
                <button
                  onClick={() => handleTogglePray(intent.id)}
                  title={intent.hasPrayed ? 'Ya has rezado por esta intención' : 'Unirme en oración'}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all ${
                    intent.hasPrayed
                      ? 'bg-[#001b49] text-[#fdbe50]'
                      : 'bg-white border border-[#c4c6d1] text-[#444650] hover:bg-[#f4f3f8] hover:text-[#001b49]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${intent.hasPrayed ? 'fill-current' : ''}`} />
                  <span>{intent.prayersCount}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <button
              id="btn-add-intention-modal"
              onClick={() => setIsAddModalOpen(true)}
              className="bg-white text-[#001b49] border-2 border-[#001b49] font-sans font-semibold text-sm py-2.5 px-6 rounded-full hover:bg-[#f4f3f8] transition-all shadow-xs active:scale-95 inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Añadir Intención
            </button>
          </div>
        </article>
      </div>

      {/* Document Reader Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001b49]/50 backdrop-blur-xs">
          <div className="bg-[#FFFDF5] rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-[#c4c6d1] max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start pb-3 border-b border-[#c4c6d1]">
              <div>
                <span className="text-[11px] font-sans font-bold text-[#714d00] bg-[#fdbe50]/30 px-2.5 py-0.5 rounded uppercase">
                  {selectedDoc.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#001b49] mt-1">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-1 rounded-full text-[#747781] hover:text-[#1a1b1f] hover:bg-[#f4f3f8]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto py-4 font-serif text-base text-[#1a1b1f] leading-relaxed whitespace-pre-line flex-1 border-b border-[#c4c6d1]/60">
              {selectedDoc.content}
            </div>

            <div className="pt-4 flex justify-between items-center">
              <span className="text-xs font-sans text-[#747781]">
                Tamaño: {selectedDoc.fileSize}
              </span>
              <button
                onClick={() => handleDownloadDoc(selectedDoc)}
                className="bg-[#001b49] text-white font-sans font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full hover:bg-[#123068] flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar Documento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Lightbox */}
      {activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-[#fdbe50] p-2 z-10"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev === null || prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1
              )
            }
            className="absolute left-4 p-3 text-white hover:text-[#fdbe50] bg-white/10 rounded-full hover:bg-white/20 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-3xl w-full flex flex-col items-center">
            <img
              src={GALLERY_PHOTOS[activePhotoIndex].url}
              alt={GALLERY_PHOTOS[activePhotoIndex].alt}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="font-serif text-xl font-bold">
                {GALLERY_PHOTOS[activePhotoIndex].title}
              </h4>
              <p className="font-sans text-xs text-white/80 mt-1">
                {GALLERY_PHOTOS[activePhotoIndex].subtitle} • Foto {activePhotoIndex + 1} de {GALLERY_PHOTOS.length}
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev === null || prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 p-3 text-white hover:text-[#fdbe50] bg-white/10 rounded-full hover:bg-white/20 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Add Intention Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001b49]/40 backdrop-blur-xs">
          <form
            onSubmit={handleAddIntention}
            className="bg-[#FFFDF5] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#c4c6d1] animate-in zoom-in-95 duration-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-2xl font-bold text-[#001b49]">
                Presentar Intención
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#747781] hover:text-[#1a1b1f] p-1"
              >
                ✕
              </button>
            </div>

            <p className="font-serif text-sm text-[#444650] mb-4">
              Su petición será leída e incluida en las oraciones comunitarias y en el rezo del Santo Rosario de la Cofradía.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-[#001b49] uppercase tracking-wider mb-1">
                  Intención o Petición *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newIntentionText}
                  onChange={(e) => setNewIntentionText(e.target.value)}
                  placeholder="Por la salud de..., por el trabajo de..., en acción de gracias por..."
                  className="w-full rounded-xl border border-[#c4c6d1] p-3 text-sm font-serif bg-white focus:outline-none focus:ring-2 focus:ring-[#fdbe50] focus:border-[#001b49]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#001b49] uppercase tracking-wider mb-1">
                  Nombre o Familia (Opcional)
                </label>
                <input
                  type="text"
                  value={newIntentionAuthor}
                  onChange={(e) => setNewIntentionAuthor(e.target.value)}
                  placeholder="Ej. Familia Rodríguez o Anónimo"
                  className="w-full rounded-xl border border-[#c4c6d1] p-3 text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-[#fdbe50] focus:border-[#001b49]"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2.5 rounded-full font-sans text-xs font-semibold text-[#444650] hover:bg-[#f4f3f8]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full font-sans text-xs font-semibold bg-[#001b49] text-white hover:bg-[#123068] transition-colors shadow-xs"
              >
                Enviar a Oración
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
