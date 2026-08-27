import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, Smartphone, Code, FileCode } from 'lucide-react';

interface CursorPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FLUTTER_CURSOR_PROMPT = `Actúa como un Desarrollador Senior Experto en Flutter y Dart. 
Crea una aplicación móvil completa y profesional para la "Cofradía del Santo Rosario" (Basílica de Nuestra Señora del Rosario, Templo de Santo Domingo, Guatemala), basada en el sistema de diseño Sacred Devotional ("Blanco Marfil y Oro Imperial").

### 1. ARQUITECTURA Y DEPENDENCIAS RECOMENDADAS:
- Framework: Flutter 3.x con Dart 3.x (Null Safety estricto).
- Estado: Riverpod (flutter_riverpod) o Flutter Bloc / Provider.
- Audio y Video: just_audio, audio_video_progress_bar, video_player (o chewie con soporte PiP).
- UI y Fuentes: google_fonts ('Source Serif 4' para textos sagrados y litúrgicos; 'Work Sans' para botones y UI).
- Iconos: material_symbols_icons o lucide_icons.
- Navegación: go_router con ShellRoute para la barra de navegación persistente.

### 2. PALETA DE COLORES Y TEMA (Sacred Devotional):
- Background / Surface Level 0: Color(0xFFFFFDF5) (Blanco Marfil)
- Primary / Azul Mariano: Color(0xFF001B49)
- Primary Container: Color(0xFF123068)
- Secondary / Oro Imperial: Color(0xFFE5A93C) / Color(0xFF7E5700)
- Secondary Container: Color(0xFFFDBE50)
- Tertiary / Carmesí Litúrgico: Color(0xFF6D0007) / Color(0xFF991B1B)
- Neutral Outline: Color(0xFFC4C6D1)
- Surface Card Level 1: Colors.white con borde fino y "Sacred Top Border" dorado de 2px.

### 3. PANTALLAS Y MÓDULOS OBLIGATORIOS:

A) GatewayScreen (Pantalla de Bienvenida / Acceso):
- Fondo Marfil con patrón radial sutil.
- Escudo/Monograma central de la Cofradía en círculo blanco con resplandor dorado suave.
- Título "Cofradía del Santo Rosario" (Source Serif 4, 32px, Azul Mariano) y subtítulo "Devoción y Tradición" (itálica).
- Botón Secundario (Outline azul): "Entrar como Devoto" (User icon).
- Botón Primario (Azul Marino sólido con texto y detalles en Oro Imperial): "Acceso Cofrade" (Church icon).
- Pie de página: "Basílica de Santo Domingo, Guatemala".

B) HomeScreen (Inicio Devoto / Dashboard Cofrade):
- TopAppBar personalizado con drawer, escudo de la cofradía y botón toggle de Lengua de Señas (LSEG).
- Tarjeta "Misterio del Día": Imagen sacra con gradiente hacia marfil, título dinámico del misterio según el día de la semana y botón de rezo rápido.
- Tarjeta "Tu División / Cofrade" (destacada en modo Cofrade): Próxima actividad (Turno de Velación, fecha, capilla) y botón "Confirmar Asistencia" interactivo.
- Feed de "Anuncios y Cultos": Tarjetas con badges temáticos (Culto Solemne, Informativo, Convocatoria).
- FloatingActionButton: "Iniciar Rezo de Hoy" en Oro Imperial con icono de denario.

C) CommunityScreen (Muro de la Cofradía):
- Cabecera: "Muro de la Cofradía - Noticias, eventos e intenciones".
- Card "Circular de Octubre" (Documento Oficial): Descripción, botón para leer en visor PDF integrado y botón de descarga.
- Card "Galería de Cultos": Cuadrícula de fotos con visor fullscreen (Lightbox) de alta resolución.
- Card "Intenciones de la Semana" (Oración Continua): Lista de peticiones con contador de oraciones ("Rezar"), y botón modal "Añadir Intención" con formulario interactivo.

D) RosaryPlayerScreen (Reproductor de Rosario Inclusivo):
- Selector de tipos de misterios (Gozosos, Luminosos, Dolorosos, Gloriosos) y selector de misterio del 1 al 5.
- Visor de video/imagen de templo con ventana flotante Picture-in-Picture (PiP) para la Intérprete en Lengua de Señas de Guatemala (LSEG).
- Switch interactivo: "Activar Lengua de Señas" que oculta/muestra el recuadro PiP con animación.
- Tarjeta del Misterio Actual: Título, cita bíblica en itálica destacada, reflexión, decenario interactivo de 10 cuentas de Ave María y oración.
- Controles de Audio: Barra de tiempo interactiva (02:15 / 14:30), selector de velocidad (0.75x, 1.0x, 1.25x), botón anterior, Play/Pausa central grande dorado (64-80dp) y siguiente misterio.

E) BottomNavigationBar (Navegación Móvil):
- 3 Tabs con indicador píldora dorada: Inicio, Comunidad, Rosario.

Genera la estructura de carpetas limpia (lib/models, lib/views, lib/widgets, lib/theme, lib/providers), código Dart completo, sin placeholders truncados y listo para compilar con 'flutter run'.`;

export const CursorPromptModal: React.FC<CursorPromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(FLUTTER_CURSOR_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001b49]/60 backdrop-blur-xs">
      <div className="bg-[#FFFDF5] rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl border border-[#c4c6d1] max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex justify-between items-start pb-3 border-b border-[#c4c6d1]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#fdbe50]/30 text-[#714d00] rounded-xl">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#001b49]">
                Prompt para Cursor (Flutter & Dart)
              </h3>
              <p className="font-sans text-xs text-[#444650]">
                Copia y pega este prompt directamente en Cursor para generar la app nativa
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#747781] hover:text-[#1a1b1f] hover:bg-[#f4f3f8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prompt Content */}
        <div className="overflow-y-auto py-3 my-2 font-mono text-xs text-[#1a1b1f] leading-relaxed bg-white p-4 rounded-xl border border-[#c4c6d1]/60 flex-1 whitespace-pre-wrap selection:bg-[#fdbe50]">
          {FLUTTER_CURSOR_PROMPT}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
          <span className="text-[11px] font-sans text-[#7e5700] flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Optimizado para Cursor AI + Flutter 3.x
          </span>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full font-sans text-xs font-semibold text-[#444650] hover:bg-[#f4f3f8]"
            >
              Cerrar
            </button>
            <button
              onClick={handleCopy}
              className="px-6 py-2.5 rounded-full font-sans text-xs font-semibold bg-[#001b49] text-[#fdbe50] hover:bg-[#123068] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95 border border-[#fdbe50]/30"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#fdbe50]" />
                  <span>¡Copiado al Portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Prompt para Cursor</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
