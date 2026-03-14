'use client';
import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Gift, Sparkles } from 'lucide-react';

interface NewsletterSectionProps {
  t: (key: string) => string;
}

export default function NewsletterSectionSimple({ t }: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);

    // Simular envío (reemplazar con tu API real)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubscribed(true);
    setLoading(false);
    setEmail('');

    // Reset después de 5 segundos
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section style={{
      background: 'white',
      padding: '4rem 1rem'
    }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #EFF6FF, #F0F9FF)',
          border: '1px solid #BFDBFE',
          borderRadius: '1.5rem',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>

          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(90deg, #0077FF, #00F7EF)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(40px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(90deg, #0077FF, #00F7EF)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(40px)'
          }}></div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>

            {/* Icon */}
            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(90deg, #0077FF, #00F7EF)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
            }}>
              <Mail size={32} color="white" />
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1rem'
            }}>
              📬 Mantenete actualizado
            </h2>

            {/* Description */}
            <p style={{
              fontSize: '1.125rem',
              color: '#475569',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Recibí tips prácticos, novedades de cursos y contenido exclusivo para acelerar tu carrera profesional.
            </p>

            {/* Benefits */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem'
              }}>
                <Gift size={16} color="#0077FF" />
                <span style={{ color: '#0F172A', fontWeight: '500' }}>Contenido exclusivo</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem'
              }}>
                <CheckCircle size={16} color="#00F7EF" />
                <span style={{ color: '#0F172A', fontWeight: '500' }}>Sin spam</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem'
              }}>
                <Sparkles size={16} color="#F59E0B" />
                <span style={{ color: '#0F172A', fontWeight: '500' }}>Descuentos anticipados</span>
              </div>
            </div>

            {/* Form or Success */}
            {!subscribed ? (
              <form onSubmit={handleSubmit} style={{
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    style={{
                      padding: '1rem 1.5rem',
                      background: 'white',
                      border: '2px solid #E5E7EB',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      color: '#0F172A',
                      outline: 'none',
                      transition: 'all 0.2s'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#0077FF';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '1rem 2rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'white',
                      background: loading ? '#94A3B8' : 'linear-gradient(90deg, #0077FF, #00F7EF)',
                      border: 'none',
                      borderRadius: '0.75rem',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(59, 130, 246, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(59, 130, 246, 0.3)';
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                        <span>Suscribiendo...</span>
                      </>
                    ) : (
                      <>
                        <span>Suscribirme</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#64748B',
                  marginTop: '0.75rem'
                }}>
                  Al suscribirte, aceptás recibir emails con novedades. Podés cancelar cuando quieras.
                </p>
              </form>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '2rem 0'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#D1FAE5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle size={32} color="#00F7EF" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '0.5rem'
                  }}>
                    ¡Listo! Ya estás suscrito 🎉
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: '#64748B'
                  }}>
                    Revisá tu email para confirmar tu suscripción.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
