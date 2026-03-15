'use client';
import Image from 'next/image';
import { GraduationCap, Users, Globe, Award, ArrowRight } from 'lucide-react';

const PILARES = [
  {
    icon: GraduationCap,
    titulo: 'Mentores que lideran en la industria',
    desc: 'Aprende de profesionales que aplican estas estrategias todos los días en empresas reales.',
    color: '#0077FF',
  },
  {
    icon: Users,
    titulo: 'Metodología práctica',
    desc: 'Programas diseñados para resolver desafíos reales de negocio desde el primer módulo.',
    color: '#00F7EF',
  },
  {
    icon: Globe,
    titulo: 'Red profesional en Latinoamérica',
    desc: 'Conecta con profesionales y líderes de distintos países que comparten tu ambición de crecimiento.',
    color: '#0077FF',
  },
  {
    icon: Award,
    titulo: 'Certificaciones con impacto profesional',
    desc: 'Credenciales que fortalecen tu perfil y te posicionan mejor en el mercado laboral.',
    color: '#00F7EF',
  },
];

const STATS = [
  { valor: '+10K', label: 'Profesionales formados' },
  { valor: '12',   label: 'Países en Latinoamérica' },
  { valor: '94%',  label: 'Mejora su posición laboral' },
];

export default function BenefitsSimple({ t, cta }: { t: (k: string) => string; cta?: () => void }) {
  return (
    <section className="benefits-section" style={{
      background: 'linear-gradient(160deg,#0A0A12 0%,#0E0E1C 50%,#0C0C18 100%)',
      padding: '4rem 2.5rem 6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Puntos de fondo — igual que el hero */}
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px',pointerEvents:'none'}}/>

      {/* Glow azul top-right */}
      <div style={{position:'absolute',top:'-200px',right:'-150px',width:'700px',height:'700px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,119,255,0.07),transparent 65%)',pointerEvents:'none'}}/>

      <div style={{maxWidth:'1300px',margin:'0 auto',position:'relative',zIndex:1}}>

        {/* Encabezado centrado de sección */}
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.1))'}}/>
          <span style={{
            fontSize:'0.72rem',fontWeight:700,
            color:'rgba(255,255,255,0.35)',
            letterSpacing:'0.2em',
            textTransform:'uppercase',
            whiteSpace:'nowrap',
          }}>
            El Método Glomind360
          </span>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.1))'}}/>
        </div>

        {/* Layout dos columnas */}
        <div className="benefits-grid" style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'5rem',
          alignItems:'center',
        }}>

          {/* ── COLUMNA IZQUIERDA — contenido ── */}
          <div>

            {/* Título */}
            <h2 className="benefits-title" style={{
              fontSize:'clamp(1.5rem,2.5vw,2.1rem)',
              fontWeight:900,
              color:'#FFFFFF',
              lineHeight:1.2,
              letterSpacing:'-0.03em',
              marginBottom:'1.5rem',
            }}>
              Formamos profesionales que{' '}
              <span style={{background:'rgba(0,119,255,0.22)',color:'#fff',fontWeight:900,borderRadius:'6px',padding:'1px 8px'}}>transforman empresas</span>
              <br/>
              <span style={{color:'rgba(255,255,255,0.45)',fontWeight:700}}>y personas que evolucionan para </span>
              <span style={{color:'#0077FF',fontWeight:900}}>liderar el futuro.</span>
            </h2>

            {/* Párrafo intro */}
            <p style={{
              fontSize:'1rem',
              color:'rgba(255,255,255,0.45)',
              lineHeight:1.75,
              marginBottom:'2.5rem',
              maxWidth:'460px',
            }}>
              En <span style={{color:'rgba(255,255,255,0.75)',fontWeight:600}}>Glomind360</span> diseñamos programas ejecutivos enfocados en habilidades que generan
              impacto real en las empresas. Aprende con mentores activos, metodologías aplicadas
              y una comunidad profesional en crecimiento.
            </p>

            {/* Pilares */}
            <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
              {PILARES.map((p, i) => (
                <div key={i} style={{
                  display:'flex',alignItems:'center',gap:'1rem',
                  padding:'1rem 1.25rem',
                  background:'rgba(255,255,255,0.03)',
                  border:'1px solid rgba(255,255,255,0.07)',
                  borderLeft:`3px solid ${p.color}`,
                  borderRadius:'0.75rem',
                  transition:'all 0.25s',
                  cursor:'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
                }}
                >
                  <div style={{
                    flexShrink:0,width:'40px',height:'40px',borderRadius:'10px',
                    background:`${p.color}18`,
                    display:'flex',alignItems:'center',justifyContent:'center',
                  }}>
                    <p.icon size={20} color={p.color} />
                  </div>
                  <div>
                    <div style={{fontSize:'0.9rem',fontWeight:700,color:'rgba(255,255,255,0.9)',marginBottom:'0.15rem'}}>
                      {p.titulo}
                    </div>
                    <div style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.4)',lineHeight:1.5}}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── COLUMNA DERECHA — imagen + stats ── */}
          <div className="benefits-image-col" style={{position:'relative'}}>

            {/* Imagen */}
            <div style={{
              borderRadius:'1.5rem',
              overflow:'hidden',
              position:'relative',
              aspectRatio:'4/5',
              boxShadow:'0 40px 80px rgba(0,0,0,0.5)',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1702047094974-a3475a6e37f5?q=80&w=687&auto=format&fit=crop"
                alt="Equipo ejecutivo Glomind360"
                fill
                sizes="(max-width: 1200px) 50vw, 600px"
                style={{objectFit:'cover'}}
                loading="lazy"
              />
              {/* Overlay oscuro para coherencia */}
              <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(10,10,18,0.55) 0%,rgba(10,10,18,0.75) 100%)'}}/>
              {/* Capa adicional para neutralizar el amarillo */}
              <div style={{position:'absolute',inset:0,background:'rgba(10,10,30,0.45)',mixBlendMode:'multiply'}}/>
            </div>

            {/* Badge flotante — estilo glassmorphism del hero */}
            <div style={{
              position:'absolute',bottom:'-1.5rem',left:'-1.5rem',
              background:'rgba(15,15,30,0.9)',
              backdropFilter:'blur(20px)',
              WebkitBackdropFilter:'blur(20px)',
              border:'1px solid rgba(255,255,255,0.12)',
              borderRadius:'1rem',
              padding:'1.5rem 2rem',
            }}>
              <div style={{display:'flex',gap:'2rem'}}>
                {STATS.map((s, i) => (
                  <div key={i} style={{textAlign:'center'}}>
                    <div style={{fontSize:'1.6rem',fontWeight:900,color:'#FFFFFF',lineHeight:1,letterSpacing:'-0.03em'}}>
                      {s.valor}
                    </div>
                    <div style={{fontSize:'0.62rem',color:'rgba(255,255,255,0.4)',marginTop:'0.35rem',whiteSpace:'nowrap',letterSpacing:'0.03em'}}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* CTA centrado al final */}
        <div style={{textAlign:'center',marginTop:'3.5rem'}}>
          <button
            onClick={cta}
            style={{
              display:'inline-flex',alignItems:'center',gap:'0.6rem',
              background:'linear-gradient(135deg,#0066FF,#0044CC)',
              color:'#fff',fontWeight:700,fontSize:'1rem',
              border:'1px solid rgba(0,102,255,0.4)',
              borderRadius:'0.75rem',
              padding:'0.85rem 2rem',
              boxShadow:'0 8px 32px rgba(0,102,255,0.3)',
              cursor:'pointer',
              transition:'all 0.25s ease',
            }}
            onMouseEnter={e=>{
              e.currentTarget.style.background='linear-gradient(135deg,#1a7fff,#0055ee)';
              e.currentTarget.style.boxShadow='0 12px 40px rgba(0,102,255,0.55)';
              e.currentTarget.style.transform='translateY(-2px)';
            }}
            onMouseLeave={e=>{
              e.currentTarget.style.background='linear-gradient(135deg,#0066FF,#0044CC)';
              e.currentTarget.style.boxShadow='0 8px 32px rgba(0,102,255,0.3)';
              e.currentTarget.style.transform='translateY(0)';
            }}
          >
            Quiero iniciar ahora
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
