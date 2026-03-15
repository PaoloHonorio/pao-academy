'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSimple({ t }: { t: (k: string) => string }) {
  const items = [
    [t('q1'), t('a1')],
    [t('q2'), t('a2')],
    [t('q3'), t('a3')]
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{
      background: 'linear-gradient(160deg,#0A0A12 0%,#0E0E1C 50%,#0C0C18 100%)',
      padding: '5rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px',pointerEvents:'none'}}/>
      {/* Glow top-right */}
      <div style={{position:'absolute',top:'-100px',right:'-100px',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,119,255,0.06),transparent 65%)',pointerEvents:'none'}}/>

      <div style={{ maxWidth: '860px', margin: '0 auto', position:'relative', zIndex:1 }}>

        {/* Section label */}
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.1))'}}/>
          <span style={{fontSize:'0.72rem',fontWeight:700,color:'rgba(255,255,255,0.35)',letterSpacing:'0.2em',textTransform:'uppercase',whiteSpace:'nowrap'}}>
            Preguntas Frecuentes
          </span>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.1))'}}/>
        </div>

        {/* Title */}
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <h2 style={{fontSize:'clamp(1.6rem,3.5vw,2.4rem)',fontWeight:900,color:'#FFFFFF',letterSpacing:'-0.03em',lineHeight:1.1}}>
            {t('faq')}{' '}
            <span style={{background:'rgba(0,119,255,0.25)',color:'#fff',fontWeight:900,borderRadius:'6px',padding:'2px 10px'}}>resueltas</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
          {items.map(([q, a], index) => (
            <div key={index}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: openIndex === index ? '1px solid rgba(0,119,255,0.3)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { if(openIndex !== index){ e.currentTarget.style.borderColor='rgba(255,255,255,0.18)'; e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}}
              onMouseLeave={(e) => { if(openIndex !== index){ e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.4rem 1.5rem', textAlign: 'left',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  fontSize: '1rem', fontWeight: 700,
                  color: openIndex === index ? '#FFFFFF' : 'rgba(255,255,255,0.8)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color='#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = openIndex === index ? '#FFFFFF' : 'rgba(255,255,255,0.8)'; }}
              >
                <span style={{paddingRight:'1rem',lineHeight:1.5}}>{q}</span>
                <div style={{
                  flexShrink:0, width:'30px', height:'30px',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  borderRadius:'50%',
                  background: openIndex === index ? 'linear-gradient(135deg,#0066FF,#0044CC)' : 'rgba(255,255,255,0.07)',
                  border: openIndex === index ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  transition: 'all 0.3s',
                }}>
                  {openIndex === index
                    ? <Minus size={15} color="white" />
                    : <Plus size={15} color="rgba(255,255,255,0.6)" />
                  }
                </div>
              </button>

              {/* Answer */}
              <div style={{ maxHeight: openIndex === index ? '500px' : '0', overflow:'hidden', transition:'max-height 0.35s ease-in-out' }}>
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{paddingTop:'1rem'}}>{a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div style={{
          marginTop: '3rem', padding: '2rem 2.5rem',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(0,119,255,0.2)',
          borderLeft: '3px solid #0077FF',
          borderRadius: '1rem', textAlign: 'center',
        }}>
          <h3 style={{fontSize:'1.1rem',fontWeight:800,color:'#FFFFFF',marginBottom:'0.4rem'}}>
            ¿Tienes más preguntas?
          </h3>
          <p style={{fontSize:'0.88rem',color:'rgba(255,255,255,0.45)',marginBottom:'1.25rem'}}>
            Nuestro equipo está listo para ayudarte. Contáctanos por WhatsApp.
          </p>
          <a
            href="https://wa.me/5493517601441?text=¡Hola! Tengo algunas preguntas sobre los cursos de GLOMIND360."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.7rem 1.5rem', fontSize: '0.9rem', fontWeight: 700,
              color: 'white', background: '#22C55E',
              border: '1px solid rgba(34,197,94,0.4)',
              borderRadius: '0.6rem', textDecoration: 'none', transition: 'all 0.2s',
              boxShadow: '0 4px 14px rgba(34,197,94,0.25)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background='#16A34A'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background='#22C55E'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Contactar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
