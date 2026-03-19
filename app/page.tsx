'use client';
import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import HeaderModern from '../components/HeaderModern';
// import HeroFixed from '../components/HeroFixed';
// import Hero from '../components/Hero';
import HeroSimple from '../components/HeroSimple';
// import HeroMinimal from '../components/Hero/variants/HeroMinimal';
// import HeroPremium from '../components/Hero/variants/HeroPremium';
import LiveCoursesSimple from '../components/LiveCoursesSimple';
import CareerOutcomesSimple from '../components/CareerOutcomesSimple';
import LoadingSpinner from '../components/LoadingSpinner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import ReservationForm from '../components/forms/ReservationForm';
import FooterSimple from '../components/FooterSimple';
import { copy, cursosBase, microcursos, type Lang } from '../lib/i18n';
import './globals.css';

// Lazy load components below the fold for better performance
const BenefitsSimple = dynamic(() => import('../components/BenefitsSimple'), {
  loading: () => <LoadingSpinner size="lg" />,
});
const SocialProofSimple = dynamic(() => import('../components/SocialProofSimple'), {
  loading: () => <LoadingSpinner size="lg" />,
});
const FAQSimple = dynamic(() => import('../components/FAQSimple'), {
  loading: () => <LoadingSpinner size="lg" />,
});
const CTASection = dynamic(() => import('../components/CTASection'));
const MobileStickyBar = dynamic(() => import('../components/MobileStickyBar'));
const NewsletterSectionSimple = dynamic(() => import('../components/NewsletterSectionSimple'), {
  loading: () => <LoadingSpinner size="lg" />,
});
const NewsletterModal = dynamic(() => import('../components/NewsletterModal'));
const WhatsAppFloat = dynamic(() => import('../components/WhatsAppFloat'));
const UrgencyPopup = dynamic(() => import('../components/UrgencyPopup'));

export default function Page(){
  const brandName = 'GLOMIND360';
  const phoneAR = '5493517601441';

  const [modalOpen,setModalOpen] = useState(false);
  const [newsletterOpen,setNewsletterOpen] = useState(false);
  const [urgencyPopupOpen,setUrgencyPopupOpen] = useState(false);
  const [interes,setInteres] = useState('');
  const [lang,setLang] = useState<Lang>('es');
  const [reducedMotion,setReducedMotion] = useState(false);

  const NEWSLETTER_SESSION_KEY = 'newsletter_shown_session';

  const openNewsletterOnce = () => {
    if (typeof window === 'undefined') return;
    try {
      if (sessionStorage.getItem(NEWSLETTER_SESSION_KEY) === '1') return;
      sessionStorage.setItem(NEWSLETTER_SESSION_KEY, '1');
    } catch {}
    setNewsletterOpen(true);
  };

  useEffect(()=>{
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = (e:MediaQueryListEvent)=>setReducedMotion(e.matches);
    mq.addEventListener?.('change',listener);
    return ()=>mq.removeEventListener?.('change',listener);
  },[]);

  // Desactivado: Popup de urgencia (muy intrusivo)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setUrgencyPopupOpen(true);
  //   }, 45000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Desactivado: Newsletter modal automático (muy intrusivo)
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   try {
  //     if (sessionStorage.getItem(NEWSLETTER_SESSION_KEY) === '1') return;
  //   } catch {}
  //   const timer = setTimeout(() => {
  //     openNewsletterOnce();
  //   }, 30000);
  //   return () => clearTimeout(timer);
  // }, []);

  const t = (k:string)=> copy[lang][k] || k;

  const whatsappUrl = useMemo(()=>{
    const msg = encodeURIComponent(`${lang==='es'?'Hola':'Hi'}, ${lang==='es'?'me interesa recibir más info sobre':"I'm interested in more info about"}: ${interes || (lang==='es'?'programas':'programs')}
${lang==='es'?'Vengo desde la web de':'I come from the website of'} ${brandName}.`);
    return `https://wa.me/${phoneAR}?text=${msg}`;
  },[interes,lang]);

  const testimonios = [
    { 
      es:{ 
        frase:'Duplicamos la tasa de cierre en 90 días aplicando el método de Ventas Consultivas.', 
        autor:'Mariana Pérez', 
        rol:'Líder Comercial, Grupo Andino',
        imagen:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
      }, 
      en:{ 
        frase:'We doubled the close rate in 90 days applying the Consultative Sales method.', 
        autor:'Mariana Pérez', 
        rol:'Head of Sales, Grupo Andino',
        imagen:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
      } 
    },
    { 
      es:{ 
        frase:'La ruta de Power BI nos permitió estandarizar reportes y tomar decisiones en tiempo real.', 
        autor:'Julián Coria', 
        rol:'Gerente de Operaciones, LogiSur',
        imagen:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
      }, 
      en:{ 
        frase:'The Power BI path helped us standardize reports and make real-time decisions.', 
        autor:'Julián Coria', 
        rol:'Operations Manager, LogiSur',
        imagen:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
      } 
    },
    { 
      es:{ 
        frase:'El programa de Marca Personal nos dio posicionamiento y clientes inbound en semanas.', 
        autor:'Belén Díaz', 
        rol:'Consultora Independiente',
        imagen:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
      }, 
      en:{ 
        frase:'Personal Branding gave us positioning and inbound clients within weeks.', 
        autor:'Belén Díaz', 
        rol:'Independent Consultant',
        imagen:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
      } 
    },
  ];
  const [idxTestimonio,setIdxTestimonio] = useState(0);
  useEffect(()=>{ const id=setInterval(()=>setIdxTestimonio(i=>(i+1)%testimonios.length),4500); return ()=>clearInterval(id); },[]);

  const cursos = cursosBase.map(c => ({ ...c[lang as 'es'|'en'], tag: c.tag }));
  const microcursosData = microcursos.map(c => ({ ...c[lang as 'es'|'en'], id: c.id, categoria: c.categoria, precio: c.precio, conIA: c.conIA }));

  useEffect(()=>{
    const tests:{name:string;pass:boolean;info?:string}[] = [];
    tests.push({ name:'WhatsApp URL construida', pass: typeof whatsappUrl==='string' && whatsappUrl.includes('wa.me') });
    if(tests.some(t=>!t.pass)) console.warn('Self-tests failing:', tests.filter(t=>!t.pass));
  },[whatsappUrl]);

  return (
    <div data-theme="euro">
      {/* Header Moderno - Tema claro */}
      <HeaderModern
        brandName={brandName}
        t={t}
        onClickCTA={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }}
        lang={lang}
        setLang={setLang}
      />

      <main id="main" role="main">
        {/* HERO SIMPLE - Sin animaciones para debugging */}
        <HeroSimple
          brandName={brandName}
          t={t}
          cta={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }}
        />

        {/* VARIANTES ALTERNATIVAS (descomenta para probar):

        <HeroModern
          brandName={brandName}
          t={t}
          cta={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }}
        />

        <HeroMinimal
          brandName={brandName}
          t={t}
          cta={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }}
        />

        <HeroPremium
          brandName={brandName}
          t={t}
          cta={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }}
        />
        */}

        {/* Por qué Glomind360 - inmediatamente después del hero */}
        <BenefitsSimple t={t} cta={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }} />

        {/* ¿A dónde te lleva Glomind360? */}
        <CareerOutcomesSimple />

        {/* Cursos en Vivo - Cards blancas simples */}
        <LiveCoursesSimple
          t={t}
          lang={lang}
          onCourseClick={(title)=>{ setInteres(title); setModalOpen(true); }}
          onCatalogClick={()=>{ setInteres(lang==='es'?'programas':'programs'); setModalOpen(true); }}
          onCorporateCTA={()=>{ setInteres('formación corporativa'); setModalOpen(true); }}
        />

      <LazyMotion features={domAnimation} strict>

        {/* Social proof - Diseño moderno limpio */}
        <SocialProofSimple
          t={t}
          lang={lang}
          testimonios={testimonios}
          idx={idxTestimonio}
        />

        <CTASection onCTA={() => { setInteres(lang === 'es' ? 'programas' : 'programs'); setModalOpen(true); }} />

        {/* FAQ */}
        <FAQSimple t={t} />

        {/* Newsletter Section - Inline, no modal */}
        <NewsletterSectionSimple t={t} />
      </LazyMotion>
      </main>

      {/* Footer con selector de idioma */}
      <FooterSimple brandName={brandName} t={t} lang={lang} setLang={setLang} />

      {/* Sticky bar mobile */}
      <MobileStickyBar onCTA={() => { setInteres(lang === 'es' ? 'programas' : 'programs'); setModalOpen(true); }} />

      {/* Modal de conversión */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="border-0 p-0 max-w-lg flex flex-col modal-conversion" style={{background:'#0B0B18',border:'1px solid rgba(0,119,255,0.18)',borderRadius:'1.25rem',boxShadow:'0 32px 80px rgba(0,0,0,0.6)',maxHeight:'90dvh'}}>
          {/* Header — fijo */}
          <div style={{background:'linear-gradient(135deg,rgba(0,60,160,0.3),rgba(0,20,60,0.5))',borderBottom:'1px solid rgba(0,119,255,0.12)',padding:'1.5rem 1.5rem 1.25rem',flexShrink:0}}>
            <DialogTitle className="text-xl font-bold" style={{color:'#FFFFFF',letterSpacing:'-0.02em',lineHeight:1.2,marginBottom:'0.3rem',textAlign:'center'}}>
              Reservá tu lugar
            </DialogTitle>
            <p style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.45)',margin:0,textAlign:'center'}}>
              Miles de profesionales ya dieron este paso.
            </p>
            <DialogDescription className="sr-only">
              Completá tus datos y te contactamos en menos de 24hs.
            </DialogDescription>
          </div>
          {/* Formulario — scrolleable */}
          <div className="modal-dark-form" style={{padding:'1.25rem 1.5rem 1.5rem',overflowY:'auto',WebkitOverflowScrolling:'touch',flex:1}}>
            <ReservationForm defaultCourse={interes} onSuccess={()=>setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

              {/* WhatsApp Floating Button */}
              <WhatsAppFloat
                phoneNumber={phoneAR}
                message={`¡Hola! Me interesa recibir más información sobre los cursos de ${brandName}. Vengo desde la web.`}
                brandName={brandName}
              />


        {/* Newsletter Modal */}
        <NewsletterModal
          t={t}
          isOpen={newsletterOpen}
          onClose={() => { try { if (typeof window !== 'undefined') sessionStorage.setItem(NEWSLETTER_SESSION_KEY, '1'); } catch {} setNewsletterOpen(false); }}
        />

        {/* Urgency Popup */}
        <UrgencyPopup
          isOpen={urgencyPopupOpen}
          onClose={() => setUrgencyPopupOpen(false)}
          onAction={() => {
            setInteres('urgencia');
            setModalOpen(true);
            setUrgencyPopupOpen(false);
          }}
        />
      </div>
    );
  }


