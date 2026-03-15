'use client';
import { useState } from 'react';
import { ArrowRight, BarChart2, TrendingUp, LineChart, Target, Users, Zap } from 'lucide-react';

const ROLES = [
  {
    Icon: BarChart2,
    cargo: 'Data Analyst',
    area: 'Análisis de Datos',
    desc: 'Interpreta datos para guiar decisiones estratégicas en empresas de tecnología, retail y finanzas.',
    salario: '$1,800 – $3,500',
    demanda: 'Muy alta',
    color: '#0077FF',
  },
  {
    Icon: TrendingUp,
    cargo: 'Gerente Comercial',
    area: 'Ventas & Negocios',
    desc: 'Lidera equipos de ventas y desarrolla estrategias para escalar ingresos en organizaciones B2B.',
    salario: '$2,000 – $4,000',
    demanda: 'Alta',
    color: '#0077FF',
  },
  {
    Icon: LineChart,
    cargo: 'BI Lead',
    area: 'Business Intelligence',
    desc: 'Diseña dashboards ejecutivos y automatiza reportes para la toma de decisiones en tiempo real.',
    salario: '$2,500 – $5,000',
    demanda: 'Muy alta',
    color: '#0077FF',
  },
  {
    Icon: Target,
    cargo: 'Head of Marketing',
    area: 'Marketing Digital',
    desc: 'Dirige la estrategia digital, campañas de adquisición y posicionamiento de marca.',
    salario: '$2,000 – $4,500',
    demanda: 'Alta',
    color: '#0077FF',
  },
  {
    Icon: Users,
    cargo: 'Team Lead',
    area: 'Liderazgo & Gestión',
    desc: 'Conduce equipos de alto rendimiento, gestiona talento y coordina proyectos estratégicos.',
    salario: '$1,800 – $3,800',
    demanda: 'Alta',
    color: '#0077FF',
  },
  {
    Icon: Zap,
    cargo: 'Fundador / Emprendedor',
    area: 'Negocio Propio',
    desc: 'Lanza y escala proyectos propios aplicando ventas, datos y liderazgo desde el primer día.',
    salario: 'Potencial ilimitado',
    demanda: 'Creciente',
    color: '#0077FF',
  },
];

const COMPANIES = ['MercadoLibre', 'Globant', 'Santander', 'Unilever', 'Accenture', 'Google', 'Rappi'];

export default function CareerOutcomesSimple() {
  const [idx, setIdx] = useState(0);
  const total = ROLES.length;
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);
  const visible = [ROLES[idx % total], ROLES[(idx + 1) % total]];

  return (
    <section style={{
      background: 'linear-gradient(160deg,#0A0A12 0%,#0C0C18 50%,#0A0A12 100%)',
      padding: '5rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'700px',height:'350px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,119,255,0.05),transparent 70%)',pointerEvents:'none'}}/>

      <div style={{maxWidth:'900px',margin:'0 auto',position:'relative',zIndex:1}}>

        {/* Label */}
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.1))'}}/>
          <span style={{fontSize:'0.72rem',fontWeight:700,color:'rgba(255,255,255,0.35)',letterSpacing:'0.2em',textTransform:'uppercase',whiteSpace:'nowrap'}}>Empleabilidad & Resultados</span>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.1))'}}/>
        </div>

        {/* Title */}
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <h2 style={{fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,color:'#FFFFFF',letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'0.85rem'}}>
            ¿A dónde te lleva{' '}
            <span style={{background:'rgba(0,119,255,0.25)',color:'#fff',fontWeight:900,borderRadius:'6px',padding:'2px 10px'}}>Glomind360?</span>
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.45)',maxWidth:'480px',margin:'0 auto',lineHeight:1.7}}>
            Nuestros graduados consiguen roles de alto impacto en empresas líderes de Latinoamérica.
          </p>
        </div>

        {/* Carousel */}
        <div style={{position:'relative',marginBottom:'2rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem'}}>
            {visible.map((r, i) => (
              <div key={`${idx}-${i}`}
                style={{
                  background:'rgba(255,255,255,0.03)',
                  border:'1px solid rgba(255,255,255,0.08)',
                  borderLeft:'3px solid #0077FF',
                  borderRadius:'1rem',
                  padding:'2rem',
                  display:'flex',
                  flexDirection:'column',
                  gap:'1rem',
                  transition:'all 0.3s ease',
                  cursor:'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 40px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
              >
                {/* Icon */}
                <div style={{
                  width:'48px',height:'48px',borderRadius:'12px',
                  background:'linear-gradient(135deg,rgba(0,102,255,0.2),rgba(0,68,204,0.1))',
                  border:'1px solid rgba(0,119,255,0.2)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  boxShadow:'0 4px 16px rgba(0,102,255,0.15)',
                }}>
                  <r.Icon size={22} color="#60A5FA" strokeWidth={1.8}/>
                </div>

                {/* Cargo + área */}
                <div>
                  <div style={{fontSize:'1.2rem',fontWeight:900,color:'#FFFFFF',letterSpacing:'-0.02em',marginBottom:'0.2rem'}}>{r.cargo}</div>
                  <div style={{fontSize:'0.78rem',fontWeight:600,color:'rgba(96,165,250,0.8)',textTransform:'uppercase',letterSpacing:'0.08em'}}>{r.area}</div>
                </div>

                {/* Descripción */}
                <p style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.45)',lineHeight:1.65,margin:0}}>
                  {r.desc}
                </p>

                {/* Salario + demanda */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'0.5rem',paddingTop:'0.75rem',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                  <div>
                    <div style={{fontSize:'0.65rem',fontWeight:700,color:'rgba(255,255,255,0.3)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'0.2rem'}}>Salario promedio / mes</div>
                    <div style={{fontSize:'1rem',fontWeight:800,color:'#60A5FA'}}>{r.salario} <span style={{fontSize:'0.72rem',fontWeight:500,color:'rgba(255,255,255,0.35)'}}>USD</span></div>
                  </div>
                  <div style={{
                    display:'inline-flex',alignItems:'center',gap:'0.3rem',
                    background:'rgba(0,119,255,0.08)',
                    border:'1px solid rgba(0,119,255,0.2)',
                    borderRadius:'6px',padding:'0.3rem 0.65rem',
                    fontSize:'0.72rem',fontWeight:700,color:'rgba(96,165,250,0.9)',
                  }}>
                    <span style={{width:'5px',height:'5px',background:'#60A5FA',borderRadius:'50%',display:'inline-block'}}/>
                    Demanda {r.demanda}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={prev} style={{position:'absolute',left:'-22px',top:'50%',transform:'translateY(-50%)',width:'40px',height:'40px',borderRadius:'50%',border:'1px solid rgba(255,255,255,0.12)',background:'rgba(15,15,30,0.9)',backdropFilter:'blur(12px)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(0,119,255,0.4)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.12)';}}>
            <ArrowRight size={16} style={{transform:'rotate(180deg)',color:'rgba(255,255,255,0.7)'}}/>
          </button>
          <button onClick={next} style={{position:'absolute',right:'-22px',top:'50%',transform:'translateY(-50%)',width:'40px',height:'40px',borderRadius:'50%',border:'1px solid rgba(255,255,255,0.12)',background:'rgba(15,15,30,0.9)',backdropFilter:'blur(12px)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(0,119,255,0.4)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.12)';}}>
            <ArrowRight size={16} style={{color:'rgba(255,255,255,0.7)'}}/>
          </button>
        </div>

        {/* Dots */}
        <div style={{display:'flex',justifyContent:'center',gap:'0.5rem',marginBottom:'3.5rem'}}>
          {Array.from({length: total}).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              style={{width:i===idx?'24px':'8px',height:'8px',borderRadius:'9999px',border:'none',cursor:'pointer',transition:'all 0.3s',background:i===idx?'#0077FF':'rgba(255,255,255,0.15)',padding:0}}/>
          ))}
        </div>

        {/* Companies */}
        <div style={{textAlign:'center'}}>
          <p style={{fontSize:'0.72rem',fontWeight:700,color:'rgba(255,255,255,0.25)',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'1.25rem'}}>
            Nuestros graduados trabajan en
          </p>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0.6rem'}}>
            {COMPANIES.map((c, i) => (
              <div key={i} style={{padding:'0.4rem 1rem',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'9999px',fontSize:'0.8rem',fontWeight:600,color:'rgba(255,255,255,0.4)',transition:'all 0.2s',cursor:'default'}}
              onMouseEnter={e=>{e.currentTarget.style.color='rgba(255,255,255,0.7)';e.currentTarget.style.borderColor='rgba(255,255,255,0.2)';}}
              onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.4)';e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';}}>
                {c}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
