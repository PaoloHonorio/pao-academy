'use client';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const TESTIMONIOS = [
  { nombre:'Carolina M.', rol:'Directora de Marketing', texto:'Pasé de ejecutiva a directora en 8 meses.', foto:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
  { nombre:'Rodrigo V.', rol:'Gerente Comercial', texto:'El diplomado cambió mi forma de vender.', foto:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { nombre:'Paola S.', rol:'Analista de Datos', texto:'Hoy trabajo con datos en una multinacional.', foto:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face' },
  { nombre:'Andrés T.', rol:'Emprendedor', texto:'Aprendí más en 3 meses que en 3 años.', foto:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face' },
];

const HERO_IMAGES = [
  'https://plus.unsplash.com/premium_photo-1689607810126-68dc3eed28f8?w=900&h=1100&fit=crop&q=90',
  'https://images.unsplash.com/photo-1610387785204-6daf4e50e2ed?q=80&w=1170&auto=format&fit=crop',
];

export default function HeroSimple({
  brandName, t, cta
}:{ brandName:string; t:(k:string)=>string; cta:()=>void; }){

  const [activeImg, setActiveImg] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % TESTIMONIOS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position:'relative',
      minHeight:'100vh',
      overflow:'hidden',
      background:'linear-gradient(140deg,#0C0C14 0%,#111120 45%,#0E0E1C 100%)',
      display:'flex',
      alignItems:'center'
    }}>

      {/* Puntos de fondo */}
      <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px'}}></div>

      {/* ── IMAGEN — slideshow automático cada 5s ── */}
      <div style={{position:'absolute',top:0,right:0,bottom:0,width:'58%',zIndex:0}}>
        {HERO_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Profesional Glomind360"
            fill
            sizes="58vw"
            style={{
              objectFit:'cover',
              objectPosition:'55% 20%',
              opacity: activeImg === i ? 1 : 0,
              transition:'opacity 1.8s ease-in-out',
              filter: i === 0 ? 'saturate(0.45) brightness(0.9)' : 'none',
            }}
            priority={i === 0}
          />
        ))}
        {/* Fade desde la izquierda */}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,#0C0C14 0%,rgba(12,12,20,0.95) 18%,rgba(12,12,20,0.55) 45%,rgba(12,12,20,0.15) 75%,rgba(12,12,20,0.35) 100%)',zIndex:1}}></div>
        {/* Fade inferior */}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,#0C0C14 0%,transparent 45%)',zIndex:1}}></div>
        {/* Tinte frío sutil */}
        <div style={{position:'absolute',inset:0,background:'rgba(10,15,40,0.2)',mixBlendMode:'multiply',zIndex:1}}></div>
      </div>

      {/* Glow aqua bottom-left */}
      <div style={{position:'absolute',bottom:'-150px',left:'-100px',width:'700px',height:'700px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,247,239,0.06),transparent 65%)',pointerEvents:'none',zIndex:1}}></div>

      {/* ── CONTENIDO — izquierda, sobre la imagen ── */}
      <div style={{position:'relative',zIndex:2,width:'100%',maxWidth:'1300px',margin:'0 auto',padding:'9rem 2.5rem 3.5rem'}}>

        {/* HEADLINE — ancho completo, texto fluye a la izquierda */}
        <div style={{marginBottom:'2rem'}}>

          {/* Intro muted */}
          <p style={{
            fontSize:'clamp(1rem,1.8vw,1.5rem)',
            fontWeight:600,
            color:'rgba(255,255,255,0.3)',
            letterSpacing:'0.05em',
            textTransform:'uppercase',
            marginBottom:'0.1rem',
            lineHeight:1.2
          }}>
            Hay un momento en tu carrera en el que sabes que necesitas
          </p>

          {/* EVOLUCIONAR — masivo, se extiende hasta donde alcance */}
          <h1 style={{
            fontSize:'clamp(4rem,8vw,8rem)',
            fontWeight:800,
            letterSpacing:'-0.045em',
            lineHeight:0.88,
            margin:0
          }}>
            {['E','V','O','L','U','C','I','O','N','A','R'].map((l,i) => (
              <span key={i} style={{color:'#FFFFFF'}}>{l}</span>
            ))}
            <span className="cursor-blink" style={{
              color:'rgba(255,255,255,0.8)',
              fontWeight:200,
              fontSize:'0.85em'
            }}>_</span>
          </h1>

        </div>

        {/* CONTENIDO INFERIOR — solo izquierda, imagen visible a la derecha */}
        <div style={{maxWidth:'420px'}}>

          {/* Subtítulo */}
          <p style={{
            fontSize:'1rem',
            color:'rgba(255,255,255,0.5)',
            lineHeight:1.75,
            marginBottom:'2rem'
          }}>
            El mundo laboral ya cambió.{' '}
            <span style={{color:'rgba(255,255,255,0.85)',fontWeight:600}}>
              Prepárate con las habilidades
            </span>{' '}
            que hoy marcan la diferencia.
          </p>

          {/* Botones flotantes */}
          <div style={{display:'flex',flexDirection:'column',gap:'0.75rem',width:'fit-content',marginBottom:'2rem'}}>

            <button
              onClick={() => document.getElementById('cursos-en-vivo')?.scrollIntoView({behavior:'smooth'})}
              style={{
                display:'inline-flex',alignItems:'center',gap:'0.75rem',
                background:'rgba(255,255,255,0.05)',
                backdropFilter:'blur(16px)',
                WebkitBackdropFilter:'blur(16px)',
                color:'rgba(255,255,255,0.75)',fontWeight:600,fontSize:'0.95rem',
                border:'1px solid rgba(255,255,255,0.12)',
                borderRadius:'0.75rem',
                padding:'0.55rem 1rem',
                boxShadow:'0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
                cursor:'pointer',
                transition:'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget;
                btn.style.background = 'rgba(255,255,255,0.1)';
                btn.style.border = '1px solid rgba(255,255,255,0.25)';
                btn.style.color = '#fff';
                btn.style.transform = 'translateY(-1px)';
                const icon = btn.querySelector('.btn-icon') as HTMLElement;
                if(icon) icon.style.transform = 'translateX(3px)';
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget;
                btn.style.background = 'rgba(255,255,255,0.05)';
                btn.style.border = '1px solid rgba(255,255,255,0.12)';
                btn.style.color = 'rgba(255,255,255,0.75)';
                btn.style.transform = 'translateY(0)';
                const icon = btn.querySelector('.btn-icon') as HTMLElement;
                if(icon) icon.style.transform = 'translateX(0)';
              }}
            >
              <span>Explorar programas</span>
              <Play size={13} className="btn-icon" style={{opacity:0.6, transition:'transform 0.25s ease'}} />
            </button>

            <button
              onClick={cta}
              style={{
                display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'0.6rem',
                background:'linear-gradient(135deg,#0066FF,#0044CC)',
                backdropFilter:'blur(16px)',
                WebkitBackdropFilter:'blur(16px)',
                color:'#fff',fontWeight:800,fontSize:'0.95rem',
                border:'1px solid rgba(0,102,255,0.4)',
                borderRadius:'0.75rem',
                padding:'0.55rem 1rem',
                boxShadow:'0 8px 32px rgba(0,102,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
                cursor:'pointer',
                transition:'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget;
                btn.style.background = 'linear-gradient(135deg,#1a7fff,#0055ee)';
                btn.style.boxShadow = '0 12px 40px rgba(0,102,255,0.6), inset 0 1px 0 rgba(255,255,255,0.2)';
                btn.style.transform = 'translateY(-2px) scale(1.02)';
                const icon = btn.querySelector('.btn-arrow') as HTMLElement;
                if(icon) icon.style.transform = 'translateX(3px)';
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget;
                btn.style.background = 'linear-gradient(135deg,#0066FF,#0044CC)';
                btn.style.boxShadow = '0 8px 32px rgba(0,102,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15)';
                btn.style.transform = 'translateY(0) scale(1)';
                const icon = btn.querySelector('.btn-arrow') as HTMLElement;
                if(icon) icon.style.transform = 'translateX(0)';
              }}
            >
              <span>Quiero empezar</span>
              <ArrowRight size={18} className="btn-arrow" style={{transition:'transform 0.25s ease',opacity:0.8}} />
            </button>

          </div>

          {/* Social proof */}
          <div style={{display:'flex',alignItems:'center',gap:'0.6rem'}}>
            <div style={{display:'flex'}}>
              {TESTIMONIOS.slice(0,3).map((t, i) => (
                <div key={i} style={{width:'26px',height:'26px',borderRadius:'50%',overflow:'hidden',border:'2px solid #0C0C14',marginLeft:i===0?0:'-8px',flexShrink:0}}>
                  <Image src={t.foto} alt={t.nombre} width={26} height={26} style={{objectFit:'cover'}} />
                </div>
              ))}
            </div>
            <div>
              <div style={{fontSize:'0.8rem',fontWeight:700,color:'#F59E0B'}}>
                ★★★★★ <span style={{color:'rgba(255,255,255,0.85)'}}>4.9</span>
              </div>
              <div style={{fontSize:'0.65rem',color:'rgba(255,255,255,0.35)'}}>+10.000 profesionales ya evolucionaron</div>
            </div>
          </div>

        </div>

        {/* Cards flotantes de testimonios */}
        <div style={{position:'absolute',right:'38%',top:'46%',transform:'translateY(-50%)',zIndex:3,width:'220px'}}>
          {TESTIMONIOS.map((t, i) => (
            <div key={i} style={{
              position:'absolute',top:0,left:0,width:'100%',
              background:'rgba(15,15,30,0.75)',
              backdropFilter:'blur(20px)',
              WebkitBackdropFilter:'blur(20px)',
              border:'1px solid rgba(255,255,255,0.15)',
              borderRadius:'1rem',
              padding:'1rem',
              opacity: activeCard === i ? 1 : 0,
              transform: activeCard === i ? 'translateY(0)' : 'translateY(12px)',
              transition:'opacity 0.7s ease, transform 0.7s ease',
              pointerEvents: activeCard === i ? 'auto' : 'none',
            }}>
              <div style={{display:'flex',alignItems:'center',gap:'0.6rem',marginBottom:'0.6rem'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'50%',overflow:'hidden',flexShrink:0,border:'2px solid rgba(0,247,239,0.3)'}}>
                  <Image src={t.foto} alt={t.nombre} width={36} height={36} style={{objectFit:'cover'}} />
                </div>
                <div>
                  <div style={{fontSize:'0.75rem',fontWeight:700,color:'rgba(255,255,255,0.9)'}}>{t.nombre}</div>
                  <div style={{fontSize:'0.6rem',color:'rgba(255,255,255,0.4)'}}>{t.rol}</div>
                </div>
              </div>
              <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.65)',lineHeight:1.5,margin:0}}>"{t.texto}"</p>
              <div style={{marginTop:'0.5rem',fontSize:'0.65rem',color:'#F59E0B'}}>★★★★★</div>
            </div>
          ))}
        </div>

        {/* Faja empresas — marquee infinito */}
        <div style={{borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:'1.25rem',marginTop:'1.25rem'}}>
          <span style={{display:'block',textAlign:'center',fontSize:'0.6rem',fontWeight:600,color:'rgba(255,255,255,0.16)',letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'1rem'}}>
            Confían en nuestros graduados
          </span>
          <div style={{overflow:'hidden',width:'100%',height:'48px',display:'flex',alignItems:'center'}}>
            <div className="marquee-track">
              {[...['techstart','datacorp','retailpro','financemax','edutech','logisur'],...['techstart','datacorp','retailpro','financemax','edutech','logisur']].map((slug,i) => (
                <Image
                  key={i}
                  src={`/logos/${slug}.svg`}
                  alt={slug}
                  width={150}
                  height={38}
                  style={{opacity:0.25,filter:'brightness(0) invert(1)',flexShrink:0}}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 49%{opacity:1} 50%,99%{opacity:0} }
        .cursor-blink { animation: blink 1.1s step-end infinite; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 3rem;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

    </section>
  );
}
