'use client';
import { ArrowRight } from 'lucide-react';

export default function MobileStickyBar({ onCTA }: { onCTA: () => void }) {
  const whatsappUrl = 'https://wa.me/5493517601441?text=¡Hola! Tengo preguntas sobre los cursos de Glomind360.';

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9998,
      background: 'white',
      borderTop: '1px solid #E5E7EB',
      padding: '0.75rem 1rem',
      display: 'flex',
      gap: '0.75rem',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
    }}
    className="mobile-sticky-bar"
    >
      <button
        onClick={onCTA}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1rem',
          background: '#0077FF',
          color: 'white',
          border: 'none',
          borderRadius: '0.75rem',
          fontWeight: '700',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(0,119,255,0.4)'
        }}
      >
        Inscribirme Ahora <ArrowRight size={20} />
      </button>
    </div>
  );
}
