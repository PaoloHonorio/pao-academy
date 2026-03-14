'use client';
import { useState, useEffect } from 'react';
import { Linkedin, Instagram, Youtube, GraduationCap } from 'lucide-react';
import type { Lang } from '../lib/i18n';

const linkStyle = {
  fontSize: '0.875rem',
  color: '#64748B',
  textDecoration: 'none' as const,
  transition: 'color 0.2s',
  whiteSpace: 'nowrap' as const,
};

export default function FooterSimple({
  brandName, t,
  lang: _lang,
  setLang: _setLang
}: {
  brandName: string;
  t: (k: string) => string;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const year = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const socialLinks = [
    { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: <Linkedin size={18} />, hover: '#0077B5' },
    { href: 'https://www.instagram.com/', label: 'Instagram', icon: <Instagram size={18} />, hover: '#E1306C' },
    { href: 'https://www.youtube.com/', label: 'YouTube', icon: <Youtube size={18} />, hover: '#FF0000' },
  ];

  const cols = [
    {
      title: 'Cursos',
      links: [
        { label: 'Cursos en Vivo', href: '#cursos-en-vivo' },
        { label: 'On Demand', href: '#cursos-en-vivo' },
        { label: 'Corporate', href: '#corporate-training' },
        { label: 'Beneficios', href: '#beneficios' },
      ]
    },
    {
      title: 'Información',
      links: [
        { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contacto', href: 'https://wa.me/5493517601441' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '/politicas-privacidad' },
        { label: 'Términos', href: '/terminos-condiciones' },
        { label: 'Arrepentimiento', href: '/arrepentimiento' },
      ]
    },
  ];

  return (
    <footer style={{ background: '#0F172A', padding: '3rem 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Top gradient line */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #0077FF, #00F7EF)', borderRadius: '9999px', marginBottom: '3rem' }} />

        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? '2rem' : '3rem',
          marginBottom: '2.5rem'
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #0077FF, #00F7EF)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GraduationCap size={20} color="white" />
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: '800', color: 'white', letterSpacing: '-0.01em' }}>{brandName}</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '280px' }}>
              Formación en vivo y online para transformar tu futuro profesional
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', transition: 'all 0.2s', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = s.hover; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {isMobile ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {cols.map((col) => (
                <div key={col.title}>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{col.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#00F7EF'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                        >{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            cols.map((col) => (
              <div key={col.title}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{col.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#00F7EF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                      >{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © {year} {brandName}. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
