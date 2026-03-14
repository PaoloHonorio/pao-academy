'use client';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

export default function HeroSimple({
  brandName, t, cta
}:{ brandName:string; t:(k:string)=>string; cta:()=>void; }){

  return (
    <section className="relative pt-36 pb-20 px-4 min-h-[780px] flex items-center overflow-hidden" style={{background:'linear-gradient(135deg,#060d1f 0%,#0a1628 50%,#0d1f3c 100%)'}}>

      {/* Fondo con patrón de puntos sutil */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle, #0077FF 1px, transparent 1px)',backgroundSize:'40px 40px'}}></div>

      {/* Glow azul superior izquierdo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background:'#0077FF'}}></div>
      {/* Glow aqua inferior derecho */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{background:'#00F7EF'}}></div>

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="text-center">

          {/* Etiqueta de autoridad */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{background:'rgba(0,119,255,0.15)',color:'#0077FF',border:'1px solid rgba(0,119,255,0.3)'}}>
            <Award size={13} />
            Academia Profesional N°1 en Latinoamérica
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-black text-white mb-6 leading-[1.1] tracking-tight">
            Aprende las habilidades que{' '}
            <span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#0077FF,#00F7EF)'}}>
              demandan las empresas
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Formación práctica con mentores expertos que te preparan para los desafíos reales del mercado laboral. Clases en vivo, certificación válida.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-4 justify-center mb-12 flex-wrap">
            <button
              onClick={cta}
              className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold text-white border-none rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
              style={{background:'#0077FF', boxShadow:'0 12px 32px rgba(0,119,255,0.4)'}}
            >
              <span>Inscribirme Ahora</span>
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => {
                document.getElementById('cursos-en-vivo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold bg-transparent border-2 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-white/50"
              style={{color:'#fff',borderColor:'rgba(255,255,255,0.2)'}}
            >
              <Play size={18} />
              <span>Ver todos los cursos</span>
            </button>
          </div>

          {/* Credibilidad */}
          <div className="flex flex-wrap justify-center gap-8 pt-8" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'rgba(0,119,255,0.15)'}}>
                <Users size={18} color="#0077FF" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg leading-none">10,000+</div>
                <div className="text-slate-500 text-xs mt-0.5">Estudiantes graduados</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'rgba(0,247,239,0.12)'}}>
                <Star size={18} color="#00F7EF" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg leading-none">4.9/5</div>
                <div className="text-slate-500 text-xs mt-0.5">Calificación promedio</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'rgba(0,119,255,0.15)'}}>
                <Award size={18} color="#0077FF" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg leading-none">95%</div>
                <div className="text-slate-500 text-xs mt-0.5">Consiguen empleo</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
