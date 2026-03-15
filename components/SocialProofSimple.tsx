'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Quote, Star, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function SocialProofSimple({
  t,
  lang,
  testimonios,
  idx
}: {
  t: (k: string) => string;
  lang: 'es' | 'en';
  testimonios: any[];
  idx: number;
}) {
  const test = testimonios[idx][lang];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const stats = [
    { icon: Users,      value: '10,000+', label: 'Estudiantes graduados',  color: '#0077FF' },
    { icon: Star,       value: '4.9/5',   label: 'Calificación promedio',   color: '#0077FF' },
    { icon: Briefcase,  value: '95%',     label: 'Consigue empleo',         color: '#00F7EF' },
    { icon: TrendingUp, value: '+40%',    label: 'Aumento salarial',        color: '#00F7EF' },
  ];

  return (
    <section style={{
      background: 'linear-gradient(160deg,#0C0C18 0%,#0A0A14 50%,#0E0E1C 100%)',
      padding: '5rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px',pointerEvents:'none'}}/>
      {/* Glow */}
      <div style={{position:'absolute',bottom:'-150px',left:'-100px',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,247,239,0.05),transparent 65%)',pointerEvents:'none'}}/>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position:'relative', zIndex:1 }}>

        {/* Section label */}
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.1))'}}/>
          <span style={{fontSize:'0.72rem',fontWeight:700,color:'rgba(255,255,255,0.35)',letterSpacing:'0.2em',textTransform:'uppercase',whiteSpace:'nowrap'}}>
            Lo que dicen nuestros estudiantes
          </span>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.1))'}}/>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {stats.map((stat, i) => (
            <div key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: `3px solid ${stat.color}`,
                borderRadius: '1rem',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.background='rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}
            >
              <div style={{width:'48px',height:'48px',margin:'0 auto 0.75rem',background:`${stat.color}18`,borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <stat.icon size={24} color={stat.color} />
              </div>
              <div style={{fontSize:'2rem',fontWeight:900,color:'#FFFFFF',marginBottom:'0.25rem',letterSpacing:'-0.03em'}}>
                {stat.value}
              </div>
              <div style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.4)'}}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          position: 'relative',
          boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
        }}>
          {/* Quote icon */}
          <div style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            width: '44px', height: '44px',
            background: 'rgba(0,119,255,0.15)',
            border: '1px solid rgba(0,119,255,0.2)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Quote size={20} color="#0077FF" />
          </div>

          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1.5rem'}}>
            {/* Avatar */}
            <div style={{
              width: '88px', height: '88px',
              borderRadius: '50%',
              border: '3px solid rgba(0,119,255,0.3)',
              overflow: 'hidden', position: 'relative',
              boxShadow: '0 0 0 6px rgba(0,119,255,0.08)',
            }}>
              <Image src={test.imagen} alt={`Foto de ${test.autor}`} fill sizes="88px" style={{objectFit:'cover'}} loading="lazy" />
            </div>

            {/* Stars */}
            <div style={{display:'flex',gap:'4px'}}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />)}
            </div>

            {/* Quote */}
            <blockquote style={{
              fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500,
              lineHeight: 1.65, textAlign: 'center', fontStyle: 'italic', margin: 0,
              maxWidth: '600px',
            }}>
              &ldquo;{test.frase}&rdquo;
            </blockquote>

            {/* Author */}
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:'1.05rem',fontWeight:800,color:'#FFFFFF',marginBottom:'0.2rem'}}>{test.autor}</div>
              <div style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.4)'}}>{test.rol}</div>
            </div>

            {/* Dots */}
            <div style={{display:'flex',gap:'0.5rem',marginTop:'0.5rem'}}>
              {testimonios.map((_, i) => (
                <div key={i} style={{
                  width: i === idx ? '28px' : '8px', height: '8px',
                  borderRadius: '9999px',
                  background: i === idx ? '#0077FF' : 'rgba(255,255,255,0.15)',
                  transition: 'all 0.3s',
                }}/>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
