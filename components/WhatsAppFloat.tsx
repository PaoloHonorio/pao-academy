'use client';
import { useState, useCallback, useMemo, memo } from 'react';

// Componente de icono de WhatsApp personalizado - memoizado
const WhatsAppIcon = memo(({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
));

WhatsAppIcon.displayName = 'WhatsAppIcon';

function WhatsAppFloat({
  phoneNumber,
  message,
  brandName
}: {
  phoneNumber: string;
  message: string;
  brandName: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Memoizar la URL de WhatsApp para evitar recalcularla en cada render
  const whatsappUrl = useMemo(() => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }, [phoneNumber, message]);

  // Usar useCallback para memoizar los handlers
  const handleWhatsAppClick = useCallback(() => {
    window.open(whatsappUrl, '_blank');
  }, [whatsappUrl]);

  const handleToggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div
      className="fixed z-[9999] whatsapp-float-desktop"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999
      }}
    >
      {/* Botón principal expandible */}
      <div className="relative">
        {/* Mensaje de burbuja */}
        {isExpanded && (
          <div className="absolute bottom-16 left-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  ¡Hola! 👋
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  ¿Tienes dudas sobre nuestros cursos? ¡Estamos aquí para ayudarte!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                  aria-label="Abrir WhatsApp para chatear"
                >
                  Chatear por WhatsApp
                </button>
              </div>
              <button
                onClick={handleToggleExpanded}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar mensaje de WhatsApp"
              >
                ✕
              </button>
            </div>
            
            {/* Flecha */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
          </div>
        )}

        {/* Botón principal */}
        <button
          onClick={isExpanded ? handleWhatsAppClick : handleToggleExpanded}
          className="relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group bg-green-500 hover:bg-green-600 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          aria-label={isExpanded ? "Abrir chat de WhatsApp" : "Mostrar mensaje de WhatsApp"}
        >
          {/* Efecto de pulso - solo en hover */}
          <div className="absolute inset-0 rounded-full bg-green-400 group-hover:animate-ping opacity-0 group-hover:opacity-30 transition-opacity" />

          {/* Icono de WhatsApp */}
          <WhatsAppIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />

          {/* Indicador de notificación - pulso suave en lugar de bounce */}
          {!isExpanded && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xs text-white font-bold">!</span>
            </div>
          )}
        </button>
      </div>

      {/* Efecto de ondas - removido para mejor performance */}
    </div>
  );
}

// Exportar componente memoizado para evitar re-renders innecesarios
export default memo(WhatsAppFloat);

