'use client';
import { Linkedin, Instagram, Youtube, GraduationCap } from 'lucide-react';
import type { Lang } from '../lib/i18n';

export default function FooterSimple({
  brandName,
  t,
  lang: _lang,
  setLang: _setLang
}: {
  brandName: string;
  t: (k: string) => string;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#F8FAFC',
      padding: '3rem 1rem 2rem',
      borderTop: '1px solid #E5E7EB'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>

        {/* Top gradient line */}
        <div style={{
          height: '4px',
          background: 'linear-gradient(90deg, #0077FF, #00F7EF, #00F7EF)',
          borderRadius: '9999px',
          marginBottom: '3rem'
        }}></div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>

          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #0077FF, #00F7EF)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
              }}>
                <GraduationCap size={24} color="white" />
              </div>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A'
              }}>
                {brandName}
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#64748B',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Formación en vivo y online para transformar tu futuro profesional
            </p>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '0.75rem'
            }}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F1F5F9',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0077FF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={20} color="#64748B" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F1F5F9',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E1306C';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram size={20} color="#64748B" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F1F5F9',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FF0000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Youtube size={20} color="#64748B" />
              </a>
            </div>
          </div>

          {/* Cursos Column */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#0F172A',
              marginBottom: '1rem'
            }}>
              Cursos
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <a
                  href="#cursos-en-vivo"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Cursos en Vivo
                </a>
              </li>
              <li>
                <a
                  href="#corporate-training"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Formación Corporativa
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Beneficios
                </a>
              </li>
            </ul>
          </div>

          {/* Información Column */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#0F172A',
              marginBottom: '1rem'
            }}>
              Información
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <a
                  href="/sobre-nosotros"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493517601441"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#0F172A',
              marginBottom: '1rem'
            }}>
              Legal
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <a
                  href="/politicas-privacidad"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('footerPrivacyPolicy') || 'Políticas de Privacidad'}
                </a>
              </li>
              <li>
                <a
                  href="/terminos-condiciones"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('footerTermsConditions') || 'Términos y Condiciones'}
                </a>
              </li>
              <li>
                <a
                  href="/arrepentimiento"
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0077FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('footerWithdrawalButton') || 'Botón de Arrepentimiento'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #E5E7EB',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#64748B',
            margin: 0
          }}>
            © {year} {brandName}. {t('rights') || 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
