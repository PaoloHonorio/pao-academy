'use client';
import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft, ArrowRight, Clock, Award, CheckCircle2, Star,
  Cpu, ChevronDown, BarChart2,
  Palette, Zap, Shield, Trophy, Users, Briefcase, GraduationCap,
  TrendingUp, Download, Target, RefreshCw, Heart
} from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';
import ProfessionalRoadmap from '@/components/ProfessionalRoadmap';
import { useCarouselNavigation } from '@/components/LiveCourses/hooks/useCarouselNavigation';
import { useResponsive } from '@/components/LiveCourses/hooks/useResponsive';

// ─── DATA ────────────────────────────────────────────────────────────────────

const profiles = [
  { icon: Briefcase, title: 'Profesional en actividad', desc: 'Querés integrar IA a tu trabajo diario sin convertirte en programador.', color: '#0077FF', badge: 'Tus colegas ya avanzan' },
  { icon: TrendingUp, title: 'Emprendedor o freelancer', desc: 'Buscás automatizar procesos y escalar tu negocio con menos recursos.', color: '#0EA5E9', badge: 'Competencia activa' },
  { icon: Users, title: 'Líder o manager', desc: 'Necesitás tomar mejores decisiones y liderar equipos en la era digital.', color: '#0077FF', badge: 'Decidí con datos' },
  { icon: GraduationCap, title: 'Profesional en transición', desc: 'Querés diferenciarte en el mercado y acceder a roles mejor remunerados.', color: '#0EA5E9', badge: 'Mercado en cambio' },
  { icon: Zap, title: '¿Simplemente querés aprender?', desc: 'Sin experiencia previa. Si no aprendés IA ahora, el mundo laboral te va a dejar atrás.', color: '#00F7EF', badge: 'Actuá ahora' },
];

const outcomes = [
  { icon: Cpu, text: 'Usás ChatGPT, Copilot y Gemini para automatizar tareas en horas, no días.' },
  { icon: Target, text: 'Creás prompts precisos con la técnica ROCE para obtener resultados profesionales.' },
  { icon: BarChart2, text: 'Analizás datos y generás reportes inteligentes sin saber programar.' },
  { icon: Palette, text: 'Producís contenido visual, presentaciones y videos con herramientas de IA.' },
  { icon: Zap, text: 'Diseñás flujos de automatización que ahorran horas de trabajo manual.' },
  { icon: Shield, text: 'Tomás decisiones responsables frente al impacto ético de la IA.' },
];

const metodoPillars = [
  { icon: Heart, title: 'Andragogía emocional', desc: 'Clases centradas en la experiencia y el sentido del aprendizaje adulto.' },
  { icon: RefreshCw, title: 'Aprendizaje experiencial', desc: 'Cada encuentro combina teoría, práctica y aplicación inmediata al trabajo real.' },
  { icon: Briefcase, title: 'Proyectos reales', desc: 'Cada estudiante desarrolla un caso o proyecto integrador con su propia realidad.' },
  { icon: Users, title: 'Comunidad activa', desc: 'Red de pares, recursos complementarios y acceso continuo post-certificación.' },
  { icon: TrendingUp, title: 'Evaluación por impacto', desc: 'Lo que importa no es repetir conocimiento — es transformar resultados.' },
];

const modules = [
  {
    num: 1, title: 'Introducción a la IA Generativa',
    desc: 'Entendés el ecosistema IA actual, sus herramientas principales y cómo tomar decisiones estratégicas con ellas.',
    topics: ['Qué es la IA generativa y cómo funciona', 'Mapa de herramientas: ChatGPT, Copilot, Gemini, Claude', 'Técnica ROCE de prompting profesional', 'Casos de uso reales por industria'],
    duration: '2 encuentros · 6 h totales',
  },
  {
    num: 2, title: 'Generación de Textos y Comunicación',
    desc: 'Dominás la redacción estratégica con IA: emails, informes, propuestas y contenido digital de alto impacto.',
    topics: ['Redacción ejecutiva con IA', 'Emails, propuestas y comunicación interna', 'Contenido para LinkedIn, blogs y redes', 'Edición y mejora de textos existentes'],
    duration: '1 encuentro · 3 h totales',
  },
  {
    num: 3, title: 'IA Aplicada a Planillas y Datos',
    desc: 'Integrás IA a Excel, Google Sheets y herramientas de datos para generar análisis e insights en minutos.',
    topics: ['Fórmulas inteligentes con IA', 'Análisis de datos y generación de insights', 'Reportes automáticos y dashboards simples', 'Power BI + IA: primeros pasos'],
    duration: '2 encuentros · 6 h totales',
  },
  {
    num: 4, title: 'Diseño, Imagen y Comunicación Visual',
    desc: 'Creás contenido visual profesional con Midjourney, DALL-E, Canva IA y herramientas de video generativo.',
    topics: ['Generación de imágenes con IA', 'Diseño de presentaciones con IA', 'Video corto y reel con IA', 'Identidad visual asistida por IA'],
    duration: '2 encuentros · 6 h totales',
  },
  {
    num: 5, title: 'Automatización y Flujos Inteligentes',
    desc: 'Diseñás automatizaciones reales con Make, Zapier y N8N integradas con IA, sin necesidad de programar.',
    topics: ['Qué es la automatización sin código', 'Make y Zapier con IA integrada', 'Flujos de trabajo inteligentes', 'Chatbots y asistentes personalizados'],
    duration: '2 encuentros · 6 h totales',
  },
  {
    num: 6, title: 'Aspectos Éticos y Responsabilidad Digital',
    desc: 'Desarrollás criterio profesional para usar la IA con responsabilidad, transparencia y visión de largo plazo.',
    topics: ['Sesgos y limitaciones de la IA', 'Marco ético para decisiones con IA', 'Regulación y tendencias globales', 'Liderazgo responsable en la era IA'],
    duration: '1 encuentro · 3 h totales',
  },
  {
    num: 7, title: 'Proyecto Integrador Final (PIN)',
    desc: 'Diseñás y presentás una solución real con IA aplicada a tu contexto profesional ante un comité académico.',
    topics: ['Diagnóstico de oportunidad en tu área', 'Diseño de solución con IA', 'Construcción y validación del proyecto', 'Presentación y defensa ante comité'],
    duration: '2 encuentros · 4 h + defensa',
  },
];

const salaries = [
  {
    level: 'Certificado 1–2',
    role: 'Especialista IA y Comunicación',
    range: '$1.200 – $2.500',
    currency: 'USD / mes',
    growth: '+35%',
    growthBar: 25,
    skills: ['Prompting profesional', 'Redacción con IA', 'Contenido digital'],
  },
  {
    level: 'Certificado 3–4',
    role: 'Analista de Datos con IA',
    range: '$2.500 – $4.500',
    currency: 'USD / mes',
    growth: '+90%',
    growthBar: 50,
    skills: ['Análisis con IA', 'Dashboards inteligentes', 'Diseño visual IA'],
  },
  {
    level: 'Certificado 5–6',
    role: 'Consultor de Automatización IA',
    range: '$4.000 – $7.000',
    currency: 'USD / mes',
    growth: '+160%',
    growthBar: 72,
    skills: ['Automatización sin código', 'Flujos inteligentes', 'Integración IA'],
  },
  {
    level: 'Certificado Final',
    role: 'Arquitecto de Soluciones IA',
    range: '$6.000 – $12.000',
    currency: 'USD / mes',
    growth: '+300%',
    growthBar: 100,
    skills: ['Diseño de soluciones IA', 'Liderazgo estratégico', 'Visión ejecutiva'],
    final: true,
  },
];

const certTabs = [
  {
    id: 1, color: '#0077FF',
    label: 'IA Generativa y Comunicación',
    modules: 'Módulos 1–2', hours: '20 h',
    encounters: [
      {
        num: 1, module: 'Módulo 1', title: 'Qué es la IA Generativa',
        topics: ['Cómo funciona la IA generativa', 'Mapa de herramientas: ChatGPT, Copilot, Gemini', 'Demos en vivo con casos reales'],
        hours: '3 h', deliverable: 'Mapa de herramientas personalizado',
      },
      {
        num: 2, module: 'Módulo 1', title: 'Prompting con Técnica ROCE',
        topics: ['Técnica ROCE paso a paso', 'Prompts para tu rol y sector', 'Práctica guiada con feedback en vivo'],
        hours: '3 h', deliverable: 'Set de prompts ROCE para tu trabajo',
      },
      {
        num: 3, module: 'Módulo 2', title: 'Comunicación y Textos con IA',
        topics: ['Redacción ejecutiva con IA', 'Emails, propuestas y comunicación interna', 'Contenido para LinkedIn y redes'],
        hours: '3 h', deliverable: 'Kit de comunicación profesional con IA',
      },
    ],
  },
  {
    id: 2, color: '#0EA5E9',
    label: 'Diseño, Datos y Productividad',
    modules: 'Módulos 3–4', hours: '20 h',
    encounters: [
      {
        num: 4, module: 'Módulo 3', title: 'IA + Planillas y Datos I',
        topics: ['Fórmulas inteligentes con IA', 'Análisis y generación de insights', 'Reportes automáticos desde cero'],
        hours: '3 h', deliverable: 'Reporte de datos con IA',
      },
      {
        num: 5, module: 'Módulo 3', title: 'Visualización y Power BI con IA',
        topics: ['Dashboards simples con IA', 'Power BI + IA: primeros pasos', 'Presentación de datos ejecutiva'],
        hours: '3 h', deliverable: 'Dashboard + análisis visual',
      },
      {
        num: 6, module: 'Módulo 4', title: 'Diseño Visual e Imagen IA',
        topics: ['Generación de imágenes: Midjourney, DALL-E', 'Diseño de presentaciones con IA', 'Identidad visual asistida por IA'],
        hours: '3 h', deliverable: 'Pack de imágenes y diseño profesional',
      },
      {
        num: 7, module: 'Módulo 4', title: 'Video y Comunicación Visual',
        topics: ['Video corto y reel con IA', 'Canva IA y herramientas generativas', 'Diseño orientado a resultados reales'],
        hours: '3 h', deliverable: 'Reel o presentación visual completa',
      },
    ],
  },
  {
    id: 3, color: '#00F7EF',
    label: 'Automatización y Ética IA',
    modules: 'Módulos 5–6', hours: '20 h',
    encounters: [
      {
        num: 8, module: 'Módulo 5', title: 'Automatización sin Código I',
        topics: ['Qué es automatizar sin programar', 'Make y Zapier con IA integrada', 'Construcción del primer flujo inteligente'],
        hours: '3 h', deliverable: 'Primer flujo automatizado funcionando',
      },
      {
        num: 9, module: 'Módulo 5', title: 'Automatización sin Código II',
        topics: ['Flujos avanzados y condicionales', 'Chatbots con IA personalizados', 'Asistentes virtuales para tu negocio'],
        hours: '3 h', deliverable: 'Chatbot o asistente personalizado',
      },
      {
        num: 10, module: 'Módulo 6', title: 'Ética y Responsabilidad Digital',
        topics: ['Sesgos y limitaciones de la IA', 'Marco ético para decisiones estratégicas', 'Liderazgo responsable en la era IA'],
        hours: '3 h', deliverable: 'Marco ético profesional para tu rol',
      },
    ],
  },
  {
    id: 4, color: '#F59E0B', final: true,
    label: 'Proyecto Integrador Final',
    modules: 'Módulo 7', hours: '10 h + defensa',
    encounters: [
      {
        num: 11, module: 'Módulo 7', title: 'Diagnóstico y Diseño del Proyecto',
        topics: ['Diagnóstico de oportunidad en tu área', 'Diseño de solución real con IA', 'Validación y feedback del tutor'],
        hours: '2 h', deliverable: 'Propuesta de proyecto aprobada',
      },
      {
        num: 12, module: 'Módulo 7', title: 'Construcción del Proyecto Integrador',
        topics: ['Construcción del proyecto paso a paso', 'Iteración con feedback del tutor', 'Preparación de presentación ejecutiva'],
        hours: '2 h', deliverable: 'Proyecto integrador completo',
      },
      {
        num: 13, module: 'Módulo 7', title: 'Defensa ante Comité Académico',
        topics: ['Presentación ejecutiva del proyecto', 'Q&A con el comité académico', 'Evaluación y obtención del certificado'],
        hours: '1 h + defensa', deliverable: 'Certificado Profesional con aval universitario',
      },
    ],
  },
];

const testimonials = [
  {
    name: 'Martina Garza',
    role: 'Analista de Marketing · AgenciaON',
    quote: 'En la primera semana ya estaba haciendo en 20 minutos lo que antes me llevaba 3 horas. El cambio fue inmediato.',
    result: 'Ahorra 12 horas semanales con IA',
    avatar: 'MG',
    color: '#0077FF',
  },
  {
    name: 'Diego Fernández',
    role: 'Jefe de Proyectos · ConstructoraMax',
    quote: 'Aprendí a hablarle bien a la IA. Eso parece simple pero marca toda la diferencia entre resultados mediocres y resultados extraordinarios.',
    result: 'Automatizó su área de reportes al 80%',
    avatar: 'DF',
    color: '#0077FF',
  },
  {
    name: 'Valeria Ramos',
    role: 'Coordinadora RRHH · GrupoNorte',
    quote: 'Nunca pensé que iba a poder usar IA en mi trabajo. El programa es claro, práctico y los resultados se ven desde el primer encuentro.',
    result: 'Pasó a liderar el área de innovación digital',
    avatar: 'VR',
    color: '#00F7EF',
  },
];

const trustedSectors = [
  'Tecnología', 'Finanzas', 'Marketing', 'Recursos Humanos',
  'Educación', 'Retail', 'Salud', 'Construcción',
];

const relatedCourses = [
  {
    slug: 'data-analytics', title: 'Data Analytics Bootcamp',
    desc: 'Dominá el análisis de datos con herramientas reales. Pasá de planillas a decisiones basadas en datos.',
    tag: 'Datos', tagColor: '#0077FF',
    gradient: 'linear-gradient(135deg, rgba(0,119,255,0.25) 0%, rgba(0,60,160,0.15) 100%)',
    accentColor: '#0077FF', icon: BarChart2,
    highlights: ['Power BI · SQL · Python', '8 semanas en vivo', 'Certificado profesional'],
  },
  {
    slug: 'power-bi-desde-cero', title: 'Power BI desde Cero',
    desc: 'Creá dashboards interactivos y reportes ejecutivos que impresionan. Con IA integrada desde el primer día.',
    tag: 'Datos', tagColor: '#0EA5E9',
    gradient: 'linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(0,80,160,0.12) 100%)',
    accentColor: '#0EA5E9', icon: TrendingUp,
    highlights: ['Power BI · DAX · IA', '4 semanas en vivo', 'Proyecto real incluido'],
  },
  {
    slug: 'liderazgo-agil', title: 'Liderazgo Ágil',
    desc: 'Liderá equipos modernos con metodologías ágiles y herramientas digitales para la era del trabajo remoto.',
    tag: 'Liderazgo', tagColor: '#00F7EF',
    gradient: 'linear-gradient(135deg, rgba(0,247,239,0.15) 0%, rgba(0,119,255,0.1) 100%)',
    accentColor: '#00F7EF', icon: Users,
    highlights: ['Scrum · OKRs · Gestión', '6 semanas en vivo', 'Certificado con aval'],
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function IaEnLaPracticaPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(null);

  const [showSticky, setShowSticky] = useState(false);
  const [showFomo, setShowFomo] = useState(false);
  const [fomoClosed, setFomoClosed] = useState(false);
  const { isMobile } = useResponsive();
  const { currentSlide: salaryIdx, nextSlide: salaryNext, prevSlide: salaryPrev, setCurrentSlide: setSalaryIdx } = useCarouselNavigation(salaries.length);
  const { currentSlide: testimonialIdx, nextSlide: testimonialNext, prevSlide: testimonialPrev, setCurrentSlide: setTestimonialIdx } = useCarouselNavigation(testimonials.length);
  const { currentSlide: relatedIdx, nextSlide: relatedNext, prevSlide: relatedPrev, setCurrentSlide: setRelatedIdx } = useCarouselNavigation(relatedCourses.length);
  const { currentSlide: profileIdx, nextSlide: profileNext, prevSlide: profilePrev, setCurrentSlide: setProfileIdx } = useCarouselNavigation(profiles.length);

  useEffect(() => {
    const s = setInterval(salaryNext, 4000);
    return () => clearInterval(s);
  }, [salaryNext]);

  useEffect(() => {
    const t = setInterval(testimonialNext, 5000);
    return () => clearInterval(t);
  }, [testimonialNext]);

  useEffect(() => {
    const r = setInterval(relatedNext, 4500);
    return () => clearInterval(r);
  }, [relatedNext]);

  useEffect(() => {
    const p = setInterval(profileNext, 3500);
    return () => clearInterval(p);
  }, [profileNext]);


  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochureName, setBrochureName] = useState('');
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureLoading, setBrochureLoading] = useState(false);
  const [brochureDone, setBrochureDone] = useState(false);

  async function handleBrochureSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!brochureName.trim() || !brochureEmail.trim()) return;
    setBrochureLoading(true);
    try {
      await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: brochureName,
          email: brochureEmail,
          course: 'Brochure - IA en la Práctica',
        }),
      });
    } catch {}
    // Trigger download regardless of API result
    const link = document.createElement('a');
    link.href = '/brochures/ia-en-la-practica.pdf';
    link.download = 'brochure-ia-en-la-practica.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setBrochureDone(true);
    setBrochureLoading(false);
  }

  useEffect(() => {
    const onScroll = () => {
      setShowSticky(window.scrollY > 500);
      setShowFomo(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categoryColor = '#0077FF';

  // ── Cupos dinámicos por fecha ──────────────────────────────────────────
  // Actualizá COHORT_START cuando cambie la cohorte
  const COHORT_START = new Date('2026-04-07');   // Fecha de inicio
  const ENROLLMENT_START = new Date('2026-03-07'); // 31 días antes
  const TOTAL_SPOTS = 12;

  const spotsLeft = useMemo(() => {
    const now = new Date();
    if (now >= COHORT_START) return 1;
    const totalMs = COHORT_START.getTime() - ENROLLMENT_START.getTime();
    const elapsedMs = Math.max(0, now.getTime() - ENROLLMENT_START.getTime());
    const ratio = Math.min(1, elapsedMs / totalMs);
    return Math.max(1, Math.round(TOTAL_SPOTS * (1 - ratio)));
  }, []);

  const moduleEncounters: Record<number, { num: number; title: string; hours: string; deliverable: string; topics: string[] }[]> = {
    1: certTabs[0].encounters.slice(0, 2),
    2: certTabs[0].encounters.slice(2, 3),
    3: certTabs[1].encounters.slice(0, 2),
    4: certTabs[1].encounters.slice(2, 4),
    5: certTabs[2].encounters.slice(0, 2),
    6: certTabs[2].encounters.slice(2, 3),
    7: certTabs[3].encounters,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#020817', color: '#FFFFFF' }}>

      {/* ── STICKY CTA ── */}
      {showSticky && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 100,
        }}>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 1.5rem',
              background: 'linear-gradient(135deg, #0077FF, #0055CC)',
              color: 'white', border: 'none', borderRadius: '9999px',
              fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,119,255,0.5)',
            }}
          >
            Reservar mi lugar <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ── SOCIAL PROOF BUBBLE ── */}
      {showFomo && !fomoClosed && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '1rem', zIndex: 100,
          width: '220px',
          background: 'rgba(10,18,40,0.96)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1rem', padding: '1rem 1rem 0.875rem',
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
          animation: 'fomo-in 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <button onClick={() => setFomoClosed(true)} style={{ position: 'absolute', top: '0.5rem', right: '0.6rem', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.25)', fontSize: '1rem', lineHeight: 1, padding: 0 }}>×</button>
          <div style={{ display: 'flex', gap: '0.1rem', marginBottom: '0.6rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill='#FBBF24' color='#FBBF24' />)}
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, margin: 0 }}>
            <strong style={{ color: '#FFFFFF', fontWeight: 800 }}>+500 profesionales</strong> ya transformaron su trabajo con IA
          </p>
        </div>
      )}

      {/* ── HEADER ── */}
      <header style={{
        background: 'rgba(2,8,23,0.9)', backdropFilter: 'blur(12px)',
        padding: '1rem 0', position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>
            <ArrowLeft size={18} />
            <span>Volver al catálogo</span>
          </Link>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: categoryColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            IA en la Práctica
          </span>
        </div>
      </header>

      {/* ── 1. HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '0 1.5rem' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '40%', width: '55%', height: '90%', background: 'radial-gradient(ellipse, rgba(0,119,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '35%', height: '60%', background: 'radial-gradient(ellipse, rgba(0,247,239,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div className="hero-landing" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 0 4rem', position: 'relative' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            {/* Left: text */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.875rem', borderRadius: '9999px', background: 'rgba(0,119,255,0.1)', border: '1px solid rgba(0,119,255,0.25)', marginBottom: '1.25rem', width: 'fit-content' }}>
                <Cpu size={13} color={categoryColor} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: categoryColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Programa en vivo · Nivel profesional
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
                IA en la{' '}
                <span style={{ color: '#3B9EFF' }}>
                  Práctica
                </span>
              </h1>

              {/* AVAL — prominente, justo bajo el título */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1.25rem', borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,165,0,0.04) 100%)',
                border: '1px solid rgba(255,215,0,0.25)',
                marginBottom: '1.5rem', width: 'fit-content',
              }}>
                <Trophy size={18} color='#FFD700' />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFD700', lineHeight: 1 }}>Con aval universitario</div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255,215,0,0.5)', marginTop: '0.2rem' }}>Certificación con respaldo institucional</div>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '400px' }}>
                Aprendé a usar la IA como herramienta de trabajo real. Automatizá tareas, tomá mejores decisiones y transformá tu productividad — desde el primer encuentro.
              </p>

              {/* Stats */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', overflow: 'hidden', width: 'fit-content' }}>
                  {[
                    { val: '70 h', label: 'Certificables' },
                    { val: '4', label: 'Certificados' },
                    { val: '13', label: 'Encuentros' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      padding: '0.75rem 1.25rem', textAlign: 'center',
                      borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>{s.val}</div>
                      <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.3rem' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
                <button
                  onClick={() => setModalOpen(true)}
                  style={{
                    position: 'relative', overflow: 'hidden',
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '1rem 2rem', fontSize: '0.975rem', fontWeight: 800,
                    color: 'white', background: 'linear-gradient(135deg, #1A8AFF, #0055CC)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '0.875rem', cursor: 'pointer',
                    boxShadow: '0 4px 24px rgba(0,119,255,0.4), 0 1px 0 rgba(255,255,255,0.1) inset',
                    letterSpacing: '0.01em',
                  }}
                >
                  Quiero inscribirme <ArrowRight size={18} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '0.25rem' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 6px #EF4444', flexShrink: 0, animation: 'dot-pulse 2s infinite' }} />
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
                    Solo quedan <strong style={{ color: '#FF6B6B', fontWeight: 800 }}>{spotsLeft} cupos</strong> · Próximo inicio: <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>7 de Abril</strong>
                  </span>
                </div>
              </div>

            </div>

            {/* Right: video */}
            <div style={{ position: 'relative' }}>
              {/* Glow halo */}
              <div style={{
                position: 'absolute', top: '15%', left: '10%', right: '10%', bottom: '15%',
                background: 'radial-gradient(ellipse, rgba(0,119,255,0.25) 0%, transparent 70%)',
                filter: 'blur(24px)', zIndex: 0,
              }} />
              {/* Border gradient wrapper */}
              <div style={{
                position: 'relative', padding: '1.5px', borderRadius: '1.25rem',
                background: 'linear-gradient(135deg, rgba(0,119,255,0.6) 0%, rgba(0,247,239,0.3) 50%, rgba(0,119,255,0.1) 100%)',
                zIndex: 1,
              }}>
                <div style={{ borderRadius: '1.2rem', overflow: 'hidden', aspectRatio: '16/9', position: 'relative', background: '#000' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/JMUxmLyrhSk?rel=0&modestbranding=1"
                    title="Inteligencia Artificial en 5 minutos"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fomo-in {
            0% { opacity: 0; transform: translateY(12px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(2); opacity: 0; }
          }
          @keyframes dot-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @media (max-width: 640px) {
            /* Hero */
            .hero-landing { padding: 2.5rem 0 2rem !important; }
            .hero-social-bar { flex-wrap: nowrap !important; }
            .hero-stats { width: 100% !important; }
            .hero-stats > div { flex: 1 !important; }
            /* Secciones */
            .section-mobile { padding: 3rem 1rem !important; }
            /* Encounter cards — una columna en mobile */
            .encounter-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── 2. PARA QUIÉN ES ── */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Para quién es" />
          <h2 style={sectionTitle}>¿Este programa es para vos?</h2>

          {/* Desktop: grid · Mobile: carrusel */}
          <div className="profiles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginTop: '2.5rem' }}>
            {profiles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className={`profile-card profile-card-${i}`} style={{
                  padding: '1.75rem 1.5rem', borderRadius: '1.1rem',
                  background: `linear-gradient(145deg, ${p.color}22 0%, ${p.color}0A 100%)`,
                  border: `1px solid ${p.color}55`,
                  display: 'flex', flexDirection: 'column', gap: '1.1rem',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: `0 4px 32px ${p.color}18, inset 0 1px 0 ${p.color}20`,
                }}>
                  {/* Línea superior sólida */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2.5px', background: p.color, opacity: 0.9 }} />
                  {/* Glow corner */}
                  <div style={{ position: 'absolute', top: '-2rem', right: '-2rem', width: '6rem', height: '6rem', borderRadius: '50%', background: p.color, opacity: 0.06, filter: 'blur(20px)', pointerEvents: 'none' }} />
                  {/* Ícono + badge */}
                  <div>
                    <span style={{ fontSize: '0.58rem', fontWeight: 800, color: p.color, letterSpacing: '0.1em', textTransform: 'uppercase' as const, background: `${p.color}20`, padding: '0.25rem 0.6rem', borderRadius: '9999px', border: `1px solid ${p.color}50` }}>
                      {p.badge}
                    </span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF', lineHeight: 1.3 }}>{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Controles carrusel — solo mobile */}
          <div className="profiles-controls">
            <CarouselControls total={profiles.length} current={profileIdx} onPrev={profilePrev} onNext={profileNext} onDot={setProfileIdx} />
          </div>

          <style>{`
            .profiles-controls { display: none; }
            @media (max-width: 768px) {
              .profiles-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
              ${profiles.map((_, i) => `.profile-card-${i} { display: ${i === profileIdx ? 'flex' : 'none'} !important; }`).join(' ')}
              .profiles-controls { display: block; }
            }
          `}</style>
        </div>
      </section>

      {/* ── 3. QUÉ VAS A LOGRAR ── */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(0,119,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Resultados" />
          <h2 style={sectionTitle}>Qué vas a lograr</h2>
          <p style={sectionSubtitle}>Al terminar este programa, vas a poder...</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
            {outcomes.map((o, i) => {
              return (
                <div key={i} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.25rem', borderRadius: '0.875rem',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <CheckCircle2 size={20} color={categoryColor} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{o.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CAMINO DE CERTIFICACIÓN ── */}
      <ProfessionalRoadmap />

      {/* ── 5. SALARIOS Y EMPLEABILIDAD ── */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Empleabilidad" />
          <h2 style={sectionTitle}>Lo que vale en el mercado</h2>
          <p style={sectionSubtitle}>A mayor certificación, mayor proyección. Rangos reales del mercado tech LATAM & remoto.</p>

          {/* Carrusel salarios */}
          {(() => {
            const visibleCount = isMobile ? 1 : 3;
            const visible = Array.from({ length: visibleCount }, (_, i) => salaries[(salaryIdx + i) % salaries.length]);
            return (
              <div style={{ marginTop: '2.5rem', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, gap: '1.25rem' }}>
                  {visible.map((s, vi) => (
                    <div key={vi} style={{ padding: '1.75rem', borderRadius: '1.125rem', background: 'rgba(255,255,255,0.025)', border: s.final ? '1px solid rgba(255,215,0,0.2)' : '1px solid rgba(0,119,255,0.15)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'all 0.3s' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: s.final ? 'linear-gradient(90deg, rgba(255,215,0,0.6), rgba(255,215,0,0.1))' : 'linear-gradient(90deg, rgba(0,119,255,0.7), rgba(0,119,255,0.1))' }} />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.final ? 'rgba(255,215,0,0.8)' : 'rgba(0,119,255,0.9)', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: s.final ? 'rgba(255,215,0,0.08)' : 'rgba(0,119,255,0.08)', border: s.final ? '1px solid rgba(255,215,0,0.2)' : '1px solid rgba(0,119,255,0.2)' }}>{s.level}</span>
                        {s.final && <Trophy size={15} color='rgba(255,215,0,0.7)' />}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.35 }}>{s.role}</div>
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.range}</div>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.3rem', fontWeight: 600, textTransform: 'uppercase' }}>{s.currency}</div>
                      </div>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>vs. mercado</span>
                          <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0077FF' }}>{s.growth}</span>
                        </div>
                        <div style={{ height: '3px', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${s.growthBar}%`, borderRadius: '9999px', background: 'linear-gradient(90deg, rgba(0,119,255,0.5), #0077FF)', transition: 'width 0.5s' }} />
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {s.skills.map((sk, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle2 size={13} color='rgba(0,119,255,0.6)' style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>{sk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <CarouselControls total={salaries.length} current={salaryIdx} onPrev={salaryPrev} onNext={salaryNext} onDot={setSalaryIdx} />
              </div>
            );
          })()}
          <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', marginTop: '1.25rem' }}>
            * Datos de mercado basados en plataformas de empleo tech LATAM. Los resultados individuales dependen de la experiencia y el mercado local.
          </p>
        </div>
      </section>

      {/* ── 6. CÓMO APRENDÉS ── */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Metodología" />
          <h2 style={sectionTitle}>Método Glomind360</h2>
          <p style={sectionSubtitle}>
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)' }}>
              &ldquo;Aprender haciendo, sentir comprendiendo, aplicar transformando.&rdquo;
            </em>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
            {metodoPillars.map((p, i) => {
              const Icon = p.icon;
              const colors = [categoryColor, '#00F7EF', categoryColor, '#00F7EF', categoryColor];
              const c = colors[i];
              return (
                <div key={i} style={{
                  padding: '1.5rem', borderRadius: '1rem', textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)', border: `1px solid ${c}20`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
                }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: `${c}15`, border: `1px solid ${c}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color={c} />
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>{p.title}</div>
                  <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. CONTENIDO DEL PROGRAMA ── */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionLabel label="Contenido" />
          <h2 style={sectionTitle}>El programa módulo a módulo</h2>
          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {modules.map((m) => {
              const isOpen = openModule === m.num;
              const certColor = m.num <= 2 ? '#0077FF' : m.num <= 4 ? '#0EA5E9' : m.num <= 6 ? '#00F7EF' : '#F59E0B';
              const certAfter = certTabs.find((_, i) => [2, 4, 6, 7][i] === m.num);
              return (
                <React.Fragment key={m.num}>
                  <div style={{
                    borderRadius: '0.875rem', overflow: 'hidden',
                    border: isOpen ? `1px solid ${certColor}40` : '1px solid rgba(255,255,255,0.07)',
                    background: isOpen ? `${certColor}08` : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.2s',
                  }}>
                    <button
                      onClick={() => setOpenModule(isOpen ? null : m.num)}
                      style={{
                        width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        cursor: 'pointer', textAlign: 'left', gap: '1rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{
                          width: '2rem', height: '2rem', borderRadius: '0.5rem', flexShrink: 0,
                          background: isOpen ? `${certColor}25` : 'rgba(255,255,255,0.06)',
                          border: isOpen ? `1px solid ${certColor}50` : '1px solid transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.75rem', fontWeight: 800,
                          color: isOpen ? certColor : 'rgba(255,255,255,0.4)',
                          transition: 'all 0.2s',
                        }}>
                          {String(m.num).padStart(2, '0')}
                        </span>
                        <div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{m.title}</div>
                          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.15rem' }}>
                            <span style={{ color: certColor, fontWeight: 700, opacity: 0.7 }}>Módulo {m.num}</span>
                            <span style={{ margin: '0 0.35rem', opacity: 0.3 }}>·</span>
                            {m.duration}
                          </div>
                        </div>
                      </div>
                      <div style={{
                        flexShrink: 0, width: '1.75rem', height: '1.75rem', borderRadius: '50%',
                        background: isOpen ? `${certColor}20` : 'rgba(255,255,255,0.05)',
                        border: `1px solid ${isOpen ? certColor + '50' : 'rgba(255,255,255,0.1)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}>
                        {isOpen
                          ? <ChevronDown size={14} color={certColor} />
                          : <span style={{ fontSize: '1.1rem', lineHeight: 1, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>+</span>}
                      </div>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 1.25rem 1.25rem' }}>
                        <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0.25rem 1rem', paddingBottom: '1rem', borderBottom: `1px solid rgba(255,255,255,0.05)` }}>{m.desc}</p>

                        {/* Encounter cards — always visible, no second click */}
                        <div className="encounter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                          {(moduleEncounters[m.num] || []).map((enc) => (
                            <div key={enc.num} style={{
                              borderRadius: '0.875rem',
                              border: `1px solid ${certColor}25`,
                              background: `${certColor}08`,
                              overflow: 'hidden',
                            }}>
                              {/* Card header */}
                              <div style={{
                                padding: '0.875rem 1rem',
                                borderBottom: `1px solid ${certColor}15`,
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                  <span style={{
                                    flexShrink: 0,
                                    width: '2rem', height: '2rem', borderRadius: '0.5rem',
                                    background: `${certColor}20`, border: `1px solid ${certColor}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.6rem', fontWeight: 900, color: certColor, letterSpacing: '0.04em',
                                  }}>E{enc.num}</span>
                                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3 }}>
                                    {enc.title}
                                  </span>
                                </div>
                                <span style={{
                                  flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.25rem',
                                  fontSize: '0.72rem', fontWeight: 700, color: certColor,
                                  background: `${certColor}15`, border: `1px solid ${certColor}25`,
                                  padding: '0.2rem 0.6rem', borderRadius: '9999px',
                                }}>
                                  <Clock size={10} color={certColor} />{enc.hours}
                                </span>
                              </div>

                              {/* Topics list */}
                              <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                {enc.topics.map((topic, ti) => (
                                  <div key={ti} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: certColor, flexShrink: 0, marginTop: '0.45rem', opacity: 0.7 }} />
                                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{topic}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Deliverable */}
                              <div style={{
                                margin: '0 1rem 0.875rem',
                                padding: '0.5rem 0.75rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                              }}>
                                <CheckCircle2 size={12} color={certColor} style={{ flexShrink: 0, opacity: 0.8 }} />
                                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>
                                  {enc.deliverable}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Certificate card after cert-milestone modules */}
                  {certAfter && (
                    <div style={{
                      margin: '0.25rem 0 0.75rem',
                      borderRadius: '0.875rem', overflow: 'hidden',
                      border: `1px solid ${certAfter.color}30`,
                      background: certAfter.final
                        ? 'linear-gradient(135deg, #1A1300 0%, #0F172A 100%)'
                        : `linear-gradient(135deg, ${certAfter.color}08 0%, rgba(0,0,0,0.3) 100%)`,
                    }}>
                      <div style={{ height: '2px', background: certAfter.final ? 'linear-gradient(90deg, #FFD700, #FFA500)' : `linear-gradient(90deg, ${certAfter.color}, ${certAfter.color}44)` }} />
                      <div style={{ padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '2.25rem', height: '2.25rem', flexShrink: 0, borderRadius: '0.625rem',
                          background: certAfter.final ? 'rgba(255,215,0,0.12)' : `${certAfter.color}15`,
                          border: `1px solid ${certAfter.final ? 'rgba(255,215,0,0.3)' : certAfter.color + '40'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Award size={14} color={certAfter.color} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: certAfter.color, opacity: 0.85, marginBottom: '0.15rem' }}>
                            {certAfter.final ? '★ Certificado Final · Con aval universitario' : `Certificado ${certAfter.id}`}
                          </div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>{certAfter.label}</div>
                        </div>
                        <div style={{ flexShrink: 0, textAlign: 'right' }}>
                          <div style={{ fontSize: '1rem', fontWeight: 900, color: certAfter.color }}>{certAfter.hours}</div>
                          <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{certAfter.modules}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Download CTA */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => { setBrochureDone(false); setBrochureName(''); setBrochureEmail(''); setBrochureOpen(true); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.875rem 2rem', fontSize: '0.9rem', fontWeight: 700,
                color: 'white', background: 'rgba(0,119,255,0.12)',
                border: '1px solid rgba(0,119,255,0.3)', borderRadius: '0.875rem', cursor: 'pointer',
              }}
            >
              <Download size={16} />
              Descargar brochure completo del programa
            </button>
          </div>
        </div>
      </section>

      {/* ── 9. CASOS DE ÉXITO ── */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Testimonios" />
          <h2 style={sectionTitle}>Transformaciones reales</h2>
          {/* Testimonios: grid en desktop, carrusel en mobile */}
          <div style={{ marginTop: '2.5rem' }}>
            {isMobile ? (
              <>
                {(() => { const t = testimonials[testimonialIdx]; return (
                  <div style={{ padding: '1.75rem', borderRadius: '1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'all 0.3s' }}>
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} fill='#FBBF24' color='#FBBF24' />)}
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontStyle: 'italic', margin: 0 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div style={{ padding: '0.5rem 0.875rem', borderRadius: '0.5rem', background: `${t.color}12`, border: `1px solid ${t.color}25`, fontSize: '0.75rem', fontWeight: 700, color: t.color, width: 'fit-content' }}>
                      ✓ {t.result}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`, border: `1.5px solid ${t.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900, color: '#FFFFFF' }}>
                        {t.avatar}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>{t.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ); })()}
                <CarouselControls total={testimonials.length} current={testimonialIdx} onPrev={testimonialPrev} onNext={testimonialNext} onDot={setTestimonialIdx} />
              </>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                {testimonials.map((t, i) => (
                  <div key={i} style={{ padding: '1.75rem', borderRadius: '1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} fill='#FBBF24' color='#FBBF24' />)}
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontStyle: 'italic', margin: 0 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div style={{ padding: '0.5rem 0.875rem', borderRadius: '0.5rem', background: `${t.color}12`, border: `1px solid ${t.color}25`, fontSize: '0.75rem', fontWeight: 700, color: t.color, width: 'fit-content' }}>
                      ✓ {t.result}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginTop: 'auto' }}>
                      <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`, border: `1.5px solid ${t.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900, color: '#FFFFFF' }}>
                        {t.avatar}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>{t.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 10. CONFÍAN EN NOSOTROS ── */}
      <section style={{ padding: '3rem 1.5rem', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.5rem' }}>
            Profesionales de estas industrias ya estudian con nosotros
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {trustedSectors.map((s) => (
              <span key={s} style={{
                padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.8rem',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.45)', fontWeight: 500,
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CTA FINAL ── */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.2rem', borderRadius: '9999px', marginBottom: '2rem',
            background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)',
          }}>
            <Trophy size={14} color='#FFD700' />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFD700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Con aval universitario
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            ¿Listo para transformar tu trabajo con IA?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Sumate a los profesionales que ya usan la IA para trabajar más inteligente. Próxima cohorte: plazas limitadas.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '1.1rem 2.5rem', fontSize: '1.05rem', fontWeight: 800,
              color: 'white', background: 'linear-gradient(135deg, #0077FF, #0055CC)',
              border: 'none', borderRadius: '0.875rem', cursor: 'pointer',
              boxShadow: '0 12px 40px rgba(0,119,255,0.45)',
            }}
          >
            Inscribirme ahora <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* ── 12. PROGRAMAS SUGERIDOS ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Seguí creciendo" />
          <h2 style={{ ...sectionTitle, marginBottom: '0.75rem' }}>También te puede interesar</h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', marginBottom: '3rem' }}>
            Programas en vivo que complementan tu formación en IA
          </p>

          {/* Desktop: grid · Mobile: carrusel automático */}
          <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {relatedCourses.map((c, idx) => {
              const Icon = c.icon;
              return (
                <Link key={c.slug} href={`/cursos/${c.slug}`} className={`related-card related-card-${idx}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ borderRadius: '1.25rem', overflow: 'hidden', border: `1px solid ${c.accentColor}22`, background: 'rgba(255,255,255,0.02)', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${c.accentColor}44`; (e.currentTarget as HTMLDivElement).style.borderColor = `${c.accentColor}55`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = `${c.accentColor}22`; }}
                  >
                    <div style={{ padding: '2rem 1.75rem 1.5rem', background: c.gradient, position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1rem', opacity: 0.07 }}>
                        <Icon size={80} color={c.accentColor} />
                      </div>
                      <span style={{ display: 'inline-block', padding: '0.25rem 0.7rem', borderRadius: '9999px', fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.1em', background: `${c.accentColor}20`, color: c.accentColor, border: `1px solid ${c.accentColor}40`, marginBottom: '1rem' }}>
                        {c.tag}
                      </span>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, margin: 0 }}>{c.title}</h3>
                    </div>
                    <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {c.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: c.accentColor, flexShrink: 0 }} />
                            <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)' }}>{h}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: c.accentColor, fontWeight: 700, fontSize: '0.82rem' }}>
                        Ver programa <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Controles del carrusel — solo mobile */}
          <div className="related-controls">
            <CarouselControls
              total={relatedCourses.length}
              current={relatedIdx}
              onPrev={relatedPrev}
              onNext={relatedNext}
              onDot={setRelatedIdx}
            />
          </div>

          <style>{`
            .related-controls { display: none; }
            @media (max-width: 768px) {
              .related-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
              .related-card-0 { display: ${relatedIdx === 0 ? 'block' : 'none'}; }
              .related-card-1 { display: ${relatedIdx === 1 ? 'block' : 'none'}; }
              .related-card-2 { display: ${relatedIdx === 2 ? 'block' : 'none'}; }
              .related-controls { display: block; }
            }
          `}</style>
        </div>
      </section>

      {/* ── MODAL BROCHURE ── */}
      <Dialog open={brochureOpen} onOpenChange={setBrochureOpen}>
        <DialogContent className="border-0 p-0 max-w-sm" style={{ background: '#0B0B18', border: '1px solid rgba(0,119,255,0.2)', borderRadius: '1.25rem' }}>
          <div style={{ padding: '1.75rem' }}>
            {!brochureDone ? (
              <>
                <div style={{ marginBottom: '1.25rem' }}>
                  <DialogTitle style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                    Descargá el brochure
                  </DialogTitle>
                  <DialogDescription style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
                    Dejanos tu nombre y mail — la descarga empieza automáticamente.
                  </DialogDescription>
                </div>
                <form onSubmit={handleBrochureSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <input
                    required
                    placeholder="Tu nombre"
                    value={brochureName}
                    onChange={e => setBrochureName(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.625rem',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#FFFFFF', fontSize: '0.875rem', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Tu email"
                    value={brochureEmail}
                    onChange={e => setBrochureEmail(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.625rem',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#FFFFFF', fontSize: '0.875rem', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={brochureLoading}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      padding: '0.875rem', borderRadius: '0.625rem', border: 'none', cursor: 'pointer',
                      background: 'linear-gradient(135deg, #0077FF, #0055CC)',
                      color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem',
                    }}
                  >
                    <Download size={16} />
                    {brochureLoading ? 'Descargando...' : 'Descargar brochure'}
                  </button>
                  <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center', margin: 0 }}>
                    Sin spam. Solo te contactamos si te interesa el programa.
                  </p>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(0,119,255,0.15)', border: '1px solid rgba(0,119,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <Download size={20} color='#0077FF' />
                </div>
                <DialogTitle style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  ¡Listo! La descarga comenzó.
                </DialogTitle>
                <DialogDescription style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
                  Si no se descargó automáticamente, revisá tu carpeta de descargas.
                </DialogDescription>
                <button
                  onClick={() => setBrochureOpen(false)}
                  style={{ marginTop: '1.25rem', padding: '0.625rem 1.5rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '0.82rem' }}
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── MODAL ── */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-[#0A1628] border-[rgba(0,119,255,0.2)] max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-white">¡Asegurá tu lugar!</DialogTitle>
            <DialogDescription className="text-[rgba(255,255,255,0.5)]">
              Te contactamos en menos de 24 hs para confirmar tu inscripción.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReservationForm defaultCourse="IA en la Práctica" onSuccess={() => setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function CarouselControls({ total, current, onPrev, onNext, onDot }: { total: number; current: number; onPrev: () => void; onNext: () => void; onDot: (i: number) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
      <button onClick={onPrev} style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>‹</button>
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} onClick={() => onDot(i)} style={{ width: i === current ? '1.5rem' : '0.4rem', height: '0.4rem', borderRadius: '9999px', background: i === current ? '#0077FF' : 'rgba(255,255,255,0.15)', cursor: 'pointer', transition: 'all 0.3s' }} />
        ))}
      </div>
      <button onClick={onNext} style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>›</button>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
      <div style={{ width: '0.25rem', height: '1rem', borderRadius: '9999px', background: '#0077FF' }} />
      <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
        {label}
      </span>
    </div>
  );
}

const sectionTitle: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
  fontWeight: 800,
  color: '#FFFFFF',
  lineHeight: 1.2,
  marginBottom: '0.75rem',
  textAlign: 'center',
};

const sectionSubtitle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'rgba(255,255,255,0.4)',
  lineHeight: 1.6,
  textAlign: 'center',
  maxWidth: '540px',
  margin: '0 auto',
};
