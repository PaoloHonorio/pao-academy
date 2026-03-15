'use client';
import { ArrowRight, Users, Star } from 'lucide-react';

export default function CTASection({ onCTA }: { onCTA: () => void }) {
  return (
    <section className="cta-section" style={{
      background: 'linear-gradient(135deg, #07090E 0%, #080D18 50%, #09101C 100%)',
      padding: '5rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glow decorativo */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(0,119,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="cta-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>

        {/* Trust line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#FBBF24', fontSize: '1.1rem' }}>★</span>)}
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginLeft: '0.25rem' }}>+10,000 graduados en Latinoamérica</span>
        </div>

        {/* Título */}
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '900',
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          lineHeight: '1.05',
          marginBottom: '1.5rem'
        }}>
          Tu carrera empieza{' '}
          <span style={{ background: 'linear-gradient(90deg, #0077FF, #00F7EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            hoy
          </span>
        </h2>

        {/* Subtítulo */}
        <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          Inscribite ahora y empezá a aprender con mentores que trabajan en empresas reales.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onCTA}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2rem', fontSize: '1.125rem', fontWeight: '700',
              color: 'white', background: '#0077FF', border: 'none',
              borderRadius: '0.75rem', cursor: 'pointer',
              boxShadow: '0 12px 32px rgba(0,119,255,0.4)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,119,255,0.5)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,119,255,0.4)'; }}
          >
            Inscribirme Ahora <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}
