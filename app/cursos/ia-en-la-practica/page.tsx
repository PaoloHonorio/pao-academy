'use client';
import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, Play, Clock, Award, CheckCircle2, Star,
  Cpu, ChevronDown, ChevronUp, Compass, MessageSquare, BarChart2,
  Palette, Zap, Shield, Trophy, Users, Briefcase, GraduationCap,
  TrendingUp, Download, BookOpen, Target, Lightbulb, RefreshCw, Heart
} from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';
import ProfessionalRoadmap from '@/components/ProfessionalRoadmap';

// ─── DATA ────────────────────────────────────────────────────────────────────

const profiles = [
  { icon: Briefcase, title: 'Profesional en actividad', desc: 'Querés integrar IA a tu trabajo diario sin convertirte en programador.' },
  { icon: TrendingUp, title: 'Emprendedor o freelancer', desc: 'Buscás automatizar procesos y escalar tu negocio con menos recursos.' },
  { icon: Users, title: 'Líder o manager', desc: 'Necesitás tomar mejores decisiones y liderar equipos en la era digital.' },
  { icon: GraduationCap, title: 'Profesional en transición', desc: 'Querés diferenciarte en el mercado y acceder a roles mejor remunerados.' },
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
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.06)',
    skills: ['Prompting profesional', 'Redacción con IA', 'Contenido digital'],
  },
  {
    level: 'Certificado 3–4',
    role: 'Analista de Datos con IA',
    range: '$2.500 – $4.500',
    currency: 'USD / mes',
    growth: '+90%',
    growthBar: 50,
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.06)',
    skills: ['Análisis con IA', 'Dashboards inteligentes', 'Diseño visual IA'],
  },
  {
    level: 'Certificado 5–6',
    role: 'Consultor de Automatización IA',
    range: '$4.000 – $7.000',
    currency: 'USD / mes',
    growth: '+160%',
    growthBar: 72,
    color: '#10B981',
    bg: 'rgba(16,185,129,0.06)',
    skills: ['Automatización sin código', 'Flujos inteligentes', 'Integración IA'],
  },
  {
    level: 'Certificado Final',
    role: 'Arquitecto de Soluciones IA',
    range: '$6.000 – $12.000',
    currency: 'USD / mes',
    growth: '+300%',
    growthBar: 100,
    color: '#F59E0B',
    bg: 'rgba(255,215,0,0.06)',
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
    id: 2, color: '#8B5CF6',
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
    id: 3, color: '#10B981',
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
    color: '#00C4BE',
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
  { slug: 'data-analytics', title: 'Data Analytics Bootcamp', desc: 'Llevá tus análisis al siguiente nivel con datos reales.', tag: 'Datos', color: '#0077FF' },
  { slug: 'power-bi-desde-cero', title: 'Power BI desde Cero', desc: 'Visualizá datos y creá dashboards con IA integrada.', tag: 'Datos', color: '#0077FF' },
  { slug: 'liderazgo-agil', title: 'Liderazgo Ágil', desc: 'Liderá equipos modernos en la era digital.', tag: 'Liderazgo', color: '#8B5CF6' },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function IaEnLaPracticaPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openEncounter, setOpenEncounter] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categoryColor = '#0077FF';

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

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 0 4rem', position: 'relative' }}>

          {/* Social proof bar */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.875rem',
            padding: '0.6rem 1rem', borderRadius: '9999px',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
            marginBottom: '2.5rem',
          }}>
            <div style={{ display: 'flex' }}>
              {['#0077FF', '#00C4BE', '#00F7EF', '#8B5CF6'].map((c, i) => (
                <div key={i} style={{
                  width: '2.1rem', height: '2.1rem', borderRadius: '50%',
                  background: `${c}25`, border: `2px solid #020817`,
                  marginLeft: i > 0 ? '-0.6rem' : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.58rem', fontWeight: 800, color: c,
                }}>
                  {['MG', 'DF', 'VR', 'AL'][i]}
                </div>
              ))}
            </div>
            <div style={{ width: '1px', height: '1.2rem', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', gap: '0.15rem' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill='#FBBF24' color='#FBBF24' />)}
            </div>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
              <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>+500 profesionales</strong> ya transformaron su trabajo con IA
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            {/* Left: text */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.875rem', borderRadius: '9999px', background: 'rgba(0,119,255,0.1)', border: '1px solid rgba(0,119,255,0.25)', marginBottom: '1.25rem', width: 'fit-content' }}>
                <Cpu size={13} color={categoryColor} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: categoryColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Programa en vivo · Nivel profesional
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1rem', letterSpacing: '-0.025em' }}>
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
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.22)', paddingLeft: '0.25rem' }}>
                  Sin compromiso · Cupos limitados · Te contactamos en 24 hs
                </span>
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
                <div style={{
                  borderRadius: '1.2rem', overflow: 'hidden',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #050D1F 0%, #091527 60%, #050D1F 100%)',
                  position: 'relative',
                }}>
                  {/* Grid */}
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.09,
                    backgroundImage: 'linear-gradient(rgba(0,119,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,255,1) 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                  }} />
                  {/* Radial center glow */}
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 45%, rgba(0,119,255,0.2) 0%, transparent 55%)', pointerEvents: 'none' }} />

                  {/* Floating chips */}
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.4rem' }}>
                    {['ChatGPT', 'Copilot', 'Gemini'].map(t => (
                      <span key={t} style={{ padding: '0.2rem 0.5rem', borderRadius: '9999px', fontSize: '0.6rem', fontWeight: 700, background: 'rgba(0,119,255,0.15)', border: '1px solid rgba(0,119,255,0.3)', color: 'rgba(255,255,255,0.5)' }}>{t}</span>
                    ))}
                  </div>

                  {/* Play button */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.875rem' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', border: '1px solid rgba(0,119,255,0.25)', animation: 'pulse-ring 2.5s ease-out infinite' }} />
                      <div style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', border: '1px solid rgba(0,119,255,0.12)', animation: 'pulse-ring 2.5s ease-out infinite 0.5s' }} />
                      <div style={{
                        width: '5rem', height: '5rem', borderRadius: '50%',
                        background: 'rgba(0,119,255,0.2)', border: '2px solid rgba(0,119,255,0.6)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', backdropFilter: 'blur(8px)',
                        boxShadow: '0 0 24px rgba(0,119,255,0.3)',
                      }}>
                        <Play size={26} color='#fff' fill='#fff' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', margin: 0, letterSpacing: '0.06em' }}>
                      Ver presentación del programa
                    </p>
                  </div>

                  {/* Bottom bar */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1rem 1.25rem',
                    background: 'linear-gradient(0deg, rgba(5,13,31,0.98) 0%, transparent 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00F7EF', boxShadow: '0 0 10px #00F7EF', animation: 'dot-pulse 2s ease-in-out infinite' }} />
                      <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Próxima cohorte</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Marzo 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(2); opacity: 0; }
          }
          @keyframes dot-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </section>

      {/* ── 2. PARA QUIÉN ES ── */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Para quién es" />
          <h2 style={sectionTitle}>¿Este programa es para vos?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
            {profiles.map((p, i) => {
              const Icon = p.icon;
              const isFeature = i === 0;
              return (
                <div key={i} style={{
                  padding: '1.75rem', borderRadius: '1rem',
                  background: isFeature ? 'linear-gradient(135deg, rgba(0,119,255,0.1) 0%, rgba(0,119,255,0.04) 100%)' : 'rgba(255,255,255,0.02)',
                  border: isFeature ? '1px solid rgba(0,119,255,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', flexDirection: 'column', gap: '0.875rem',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {isFeature && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #0077FF, #00F7EF44)' }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                      background: isFeature ? 'rgba(0,119,255,0.2)' : 'rgba(255,255,255,0.05)',
                      border: isFeature ? '1px solid rgba(0,119,255,0.35)' : '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} color={isFeature ? categoryColor : 'rgba(255,255,255,0.4)'} />
                    </div>
                    {isFeature && (
                      <span style={{ fontSize: '0.62rem', fontWeight: 700, color: categoryColor, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,119,255,0.12)', padding: '0.2rem 0.5rem', borderRadius: '9999px', border: '1px solid rgba(0,119,255,0.2)' }}>
                        Más común
                      </span>
                    )}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isFeature ? '#FFFFFF' : 'rgba(255,255,255,0.8)' }}>{p.title}</div>
                  <div style={{ fontSize: '0.82rem', color: isFeature ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>{p.desc}</div>
                </div>
              );
            })}
          </div>
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
              const Icon = o.icon;
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
            {salaries.map((s, i) => (
              <div key={i} style={{
                padding: '1.75rem',
                borderRadius: '1.125rem',
                background: s.final ? 'linear-gradient(160deg, #0F0A00 0%, #0A0F1E 100%)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${s.color}30`,
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${s.color}, ${s.color}33)` }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: s.bg, pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.color, padding: '0.2rem 0.6rem', borderRadius: '9999px', background: `${s.color}12`, border: `1px solid ${s.color}28` }}>
                    {s.level}
                  </span>
                  {s.final && <Trophy size={15} color='#F59E0B' />}
                </div>
                <div style={{ position: 'relative', minHeight: '2.8rem', display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.35 }}>{s.role}</div>
                </div>
                <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: s.color, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.range}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.22)', marginTop: '0.3rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.currency}</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>vs. mercado</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 800, color: s.color }}>{s.growth}</span>
                  </div>
                  <div style={{ height: '4px', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.growthBar}%`, borderRadius: '9999px', background: `linear-gradient(90deg, ${s.color}66, ${s.color})` }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', position: 'relative' }}>
                  {s.skills.map((sk, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={13} color={s.color} style={{ opacity: 0.6, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              const colors = [categoryColor, '#00C4BE', '#00F7EF', categoryColor, '#00C4BE'];
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
              const certColor = m.num <= 2 ? '#0077FF' : m.num <= 4 ? '#8B5CF6' : m.num <= 6 ? '#10B981' : '#F59E0B';
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
                          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.15rem' }}>{m.duration}</div>
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
                          : <ArrowRight size={14} color='rgba(255,255,255,0.4)' />}
                      </div>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 1.25rem 1.25rem' }}>
                        <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0.25rem 1rem', paddingBottom: '1rem', borderBottom: `1px solid rgba(255,255,255,0.05)` }}>{m.desc}</p>

                        {/* Nested encounter rows */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {(moduleEncounters[m.num] || []).map((enc) => {
                            const encOpen = openEncounter === enc.num;
                            return (
                              <div key={enc.num} style={{
                                borderRadius: '0.75rem', overflow: 'hidden',
                                border: encOpen ? `1px solid ${certColor}45` : `1px solid ${certColor}22`,
                                background: encOpen ? `${certColor}0F` : 'rgba(255,255,255,0.03)',
                                transition: 'all 0.2s',
                              }}>
                                {/* Encounter header button */}
                                <button
                                  onClick={() => setOpenEncounter(encOpen ? null : enc.num)}
                                  style={{
                                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                                    padding: '0.75rem 1rem', display: 'flex', alignItems: 'center',
                                    justifyContent: 'space-between', gap: '0.75rem', textAlign: 'left',
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{
                                      flexShrink: 0, padding: '0.18rem 0.55rem', borderRadius: '9999px',
                                      fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.06em',
                                      background: encOpen ? `${certColor}25` : `${certColor}15`,
                                      color: certColor, border: `1px solid ${certColor}30`,
                                    }}>E{enc.num}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: encOpen ? '#fff' : 'rgba(255,255,255,0.75)' }}>
                                      {enc.title}
                                    </span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
                                    <span style={{ fontSize: '0.7rem', color: certColor, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                      <Clock size={10} color={certColor} />{enc.hours}
                                    </span>
                                    <div style={{
                                      width: '1.4rem', height: '1.4rem', borderRadius: '50%',
                                      background: encOpen ? `${certColor}20` : 'rgba(255,255,255,0.04)',
                                      border: `1px solid ${encOpen ? certColor + '40' : 'rgba(255,255,255,0.08)'}`,
                                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                      {encOpen
                                        ? <ChevronDown size={11} color={certColor} />
                                        : <ArrowRight size={11} color='rgba(255,255,255,0.35)' />}
                                    </div>
                                  </div>
                                </button>

                                {/* Topic cards inside encounter */}
                                {encOpen && (
                                  <div style={{ padding: '0 1rem 1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.4rem', alignItems: 'stretch' }}>
                                      {enc.topics.map((topic, ti) => (
                                        <div key={ti} style={{
                                          padding: '0.65rem 0.875rem',
                                          borderRadius: '0.5rem',
                                          borderLeft: `3px solid ${certColor}`,
                                          background: `${certColor}12`,
                                          border: `1px solid ${certColor}20`,
                                          borderLeftWidth: '3px',
                                          display: 'flex', alignItems: 'center',
                                        }}>
                                          <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.4 }}>{topic}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
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
              onClick={() => setModalOpen(true)}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                padding: '1.75rem', borderRadius: '1.25rem',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
              }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill='#FBBF24' color='#FBBF24' />)}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Result badge */}
                <div style={{
                  padding: '0.5rem 0.875rem', borderRadius: '0.5rem',
                  background: `${t.color}12`, border: `1px solid ${t.color}25`,
                  fontSize: '0.75rem', fontWeight: 700, color: t.color,
                }}>
                  ✓ {t.result}
                </div>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`,
                    border: `1.5px solid ${t.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', fontWeight: 900, color: '#FFFFFF',
                    letterSpacing: '0.02em',
                    boxShadow: `0 0 12px ${t.color}25`,
                  }}>
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
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', textAlign: 'center' }}>
            También te puede interesar
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {relatedCourses.map((c) => (
              <Link key={c.slug} href={`/cursos/${c.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '1.5rem', borderRadius: '1rem',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'border-color 0.2s',
                }}>
                  <span style={{
                    display: 'inline-block', padding: '0.25rem 0.6rem', borderRadius: '9999px', fontSize: '0.65rem',
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                    background: `${c.color}15`, color: c.color, marginBottom: '0.75rem',
                  }}>
                    {c.tag}
                  </span>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>{c.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, marginBottom: '1rem' }}>{c.desc}</div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: c.color }}>
                    Ver programa <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
