'use client';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

export default function HeroSimple({
  brandName, t, cta
}:{ brandName:string; t:(k:string)=>string; cta:()=>void; }){

  return (
    <section className="relative pt-36 pb-20 px-4 min-h-[780px] flex items-center overflow-hidden" style={{background:'linear-gradient(135deg,#0044AA 0%,#0055CC 50%,#0066EE 100%)'}}>

      {/* Fondo con patrón de puntos sutil */}
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle, #0077FF 1px, transparent 1px)',backgroundSize:'40px 40px'}}></div>

      {/* Glow azul superior izquierdo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{background:'#0077FF'}}></div>
      {/* Glow aqua inferior derecho */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{background:'#00F7EF'}}></div>

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="text-center">


          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-black text-white mb-6 leading-[1.05] tracking-tight uppercase">
            Aprende las habilidades que{' '}
            <span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#7DD3FC,#00F7EF)'}}>
              demandan las empresas
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Formación práctica con <span style={{background:'rgba(255,255,255,0.15)', color:'#fff', fontWeight:600, borderRadius:'4px', padding:'2px 8px'}}>mentores expertos</span> que te preparan para los <span style={{background:'rgba(0,247,239,0.2)', color:'#00F7EF', fontWeight:600, borderRadius:'4px', padding:'2px 8px'}}>desafíos reales</span> del mercado laboral.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-3 justify-center mb-12" style={{flexWrap:'nowrap'}}>
            <button
              onClick={cta}
              className="inline-flex items-center gap-2 py-4 text-base font-bold border-none rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
              style={{background:'#ffffff', color:'#0044AA', boxShadow:'0 12px 32px rgba(0,0,0,0.25)', padding:'1rem 1.5rem', whiteSpace:'nowrap'}}
            >
              <span>Inscribirme Ahora</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                document.getElementById('cursos-en-vivo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 py-4 text-base font-semibold bg-transparent border-2 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
              style={{color:'#fff', borderColor:'rgba(255,255,255,0.35)', padding:'1rem 1.5rem', whiteSpace:'nowrap'}}
            >
              <Play size={18} />
              <span>Ver cursos</span>
            </button>
          </div>

          {/* Faja de empresas */}
          <div className="pt-8" style={{borderTop:'1px solid rgba(255,255,255,0.15)'}}>
            <p style={{color:'rgba(255,255,255,0.5)',fontSize:'0.8rem',fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',textAlign:'center',marginBottom:'1.25rem'}}>
              — Empresas que confían en nuestros graduados —
            </p>
            <div style={{overflow:'hidden', position:'relative'}}>
              {/* Fade izquierda */}
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:'80px',background:'linear-gradient(to right,#0055CC,transparent)',zIndex:1}}></div>
              {/* Fade derecha */}
              <div style={{position:'absolute',right:0,top:0,bottom:0,width:'80px',background:'linear-gradient(to left,#0055CC,transparent)',zIndex:1}}></div>
              <div style={{
                display:'flex',
                gap:'4rem',
                alignItems:'center',
                animation:'marquee 28s linear infinite',
                width:'max-content'
              }}>
                {[
                  {name:'TechStart', src:'/logos/techstart.svg'},
                  {name:'DataCorp', src:'/logos/datacorp.svg'},
                  {name:'RetailPro', src:'/logos/retailpro.svg'},
                  {name:'FinanceMax', src:'/logos/financemax.svg'},
                  {name:'EduTech', src:'/logos/edutech.svg'},
                  {name:'LogiSur', src:'/logos/logisur.svg'},
                  {name:'Grupo Andino', src:'/logos/grupoandino.svg'},
                  {name:'TechCorp', src:'/logos/techcorp.svg'},
                  {name:'RetailMax', src:'/logos/retailmax.svg'},
                  {name:'InnovateLab', src:'/logos/innovatelab.svg'},
                ].map((company, i) => (
                  <img key={i} src={company.src} alt={company.name} style={{height:'40px',width:'auto',opacity:0.75,flexShrink:0,filter:'brightness(0) invert(1)'}} />
                ))}
                {/* Duplicado para loop continuo */}
                {[
                  {name:'TechStart', src:'/logos/techstart.svg'},
                  {name:'DataCorp', src:'/logos/datacorp.svg'},
                  {name:'RetailPro', src:'/logos/retailpro.svg'},
                  {name:'FinanceMax', src:'/logos/financemax.svg'},
                  {name:'EduTech', src:'/logos/edutech.svg'},
                  {name:'LogiSur', src:'/logos/logisur.svg'},
                  {name:'Grupo Andino', src:'/logos/grupoandino.svg'},
                  {name:'TechCorp', src:'/logos/techcorp.svg'},
                  {name:'RetailMax', src:'/logos/retailmax.svg'},
                  {name:'InnovateLab', src:'/logos/innovatelab.svg'},
                ].map((company, i) => (
                  <img key={`b${i}`} src={company.src} alt={company.name} style={{height:'40px',width:'auto',opacity:0.75,flexShrink:0,filter:'brightness(0) invert(1)'}} />
                ))}
              </div>
            </div>
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

        </div>
      </div>
    </section>
  );
}
