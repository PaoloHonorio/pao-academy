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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubscribed(true);
    setLoading(false);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className="newsletter-section" style={{
      background: 'linear-gradient(160deg,#0C0C18 0%,#0A0A14 50%,#0E0E1C 100%)',
      padding: '4rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px',pointerEvents:'none'}}/>
      {/* Glow */}
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'600px',height:'300px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,119,255,0.07),transparent 70%)',pointerEvents:'none'}}/>

      <div style={{ maxWidth: '640px', margin: '0 auto', position:'relative', zIndex:1 }}>
        <div className="newsletter-card" style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(0,119,255,0.2)',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,119,255,0.05)',
        }}>
          {/* Inner glow */}
          <div style={{position:'absolute',top:'-60px',right:'-60px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,119,255,0.12),transparent 70%)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:'-60px',left:'-60px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,247,239,0.08),transparent 70%)',pointerEvents:'none'}}/>

          <div style={{ position: 'relative', zIndex: 1 }}>

            {/* Icon */}
            <div style={{
              width: '60px', height: '60px', margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg,#0066FF,#0044CC)',
              borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,102,255,0.35)',
            }}>
              <Mail size={28} color="white" />
            </div>

            {/* Title */}
            <h2 style={{fontSize:'clamp(1.5rem,3.5vw,2rem)',fontWeight:900,color:'#FFFFFF',marginBottom:'0.75rem',letterSpacing:'-0.03em'}}>
              Mantente{' '}
              <span style={{background:'rgba(0,119,255,0.25)',color:'#fff',fontWeight:900,borderRadius:'6px',padding:'2px 8px'}}>actualizado</span>
            </h2>

            {/* Description */}
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.45)',marginBottom:'2rem',lineHeight:1.7,maxWidth:'480px',margin:'0 auto 2rem'}}>
              Recibí tips prácticos, novedades de cursos y contenido exclusivo para acelerar tu carrera profesional.
            </p>

            {/* Benefits */}
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0.5rem',marginBottom:'2rem'}}>
              {[
                { icon: Gift,       color: '#0077FF', label: 'Contenido exclusivo' },
                { icon: CheckCircle, color: '#00F7EF', label: 'Sin spam' },
                { icon: Sparkles,   color: '#FBBF24', label: 'Descuentos anticipados' },
              ].map(({ icon: Icon, color, label }, i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap:'0.4rem',
                  background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
                  borderRadius:'9999px', padding:'0.4rem 0.9rem', fontSize:'0.8rem',
                }}>
                  <Icon size={14} color={color} />
                  <span style={{color:'rgba(255,255,255,0.7)',fontWeight:600}}>{label}</span>
                </div>
              ))}
            </div>

            {/* Form or Success */}
            {!subscribed ? (
              <form onSubmit={handleSubmit} style={{maxWidth:'440px',margin:'0 auto'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'0.65rem'}}>
                  <input
                    type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com" required
                    style={{
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '0.75rem',
                      fontSize: '0.95rem', color: '#FFFFFF',
                      outline: 'none', transition: 'all 0.2s',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor='rgba(0,119,255,0.5)'; e.currentTarget.style.boxShadow='0 0 0 3px rgba(0,119,255,0.1)'; e.currentTarget.style.background='rgba(255,255,255,0.08)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}
                  />
                  <button
                    type="submit" disabled={loading}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      padding: '0.9rem 2rem', fontSize: '0.95rem', fontWeight: 700, color: 'white',
                      background: loading ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg,#0066FF,#0044CC)',
                      border: '1px solid rgba(0,102,255,0.4)', borderRadius: '0.75rem',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: loading ? 'none' : '0 8px 24px rgba(0,102,255,0.3)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { if(!loading){ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(0,102,255,0.45)'; }}}
                    onMouseLeave={(e) => { if(!loading){ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,102,255,0.3)'; }}}
                  >
                    {loading ? (
                      <>
                        <div style={{width:'18px',height:'18px',border:'2px solid rgba(255,255,255,0.3)',borderTop:'2px solid white',borderRadius:'50%',animation:'spin 1s linear infinite'}}/>
                        <span>Suscribiendo...</span>
                      </>
                    ) : (
                      <>
                        <span>Suscribirme</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
                <p style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.3)',marginTop:'0.65rem'}}>
                  Al suscribirte, aceptás recibir emails con novedades. Podés cancelar cuando quieras.
                </p>
              </form>
            ) : (
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem',padding:'2rem 0'}}>
                <div style={{width:'56px',height:'56px',background:'rgba(0,247,239,0.1)',border:'1px solid rgba(0,247,239,0.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <CheckCircle size={28} color="#00F7EF" />
                </div>
                <div style={{textAlign:'center'}}>
                  <h3 style={{fontSize:'1.1rem',fontWeight:800,color:'#FFFFFF',marginBottom:'0.35rem'}}>¡Listo! Ya estás suscrito</h3>
                  <p style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.45)'}}>Revisá tu email para confirmar tu suscripción.</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </section>
  );
}
