'use client';
import React from 'react';
import { ArrowLeft, Clock, Award, CheckCircle2, Star, Play, BookOpen, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { type Lang } from '../../../lib/i18n';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';

export default function ContabilidadSinComplicacionesPage() {
  const [lang, setLang] = React.useState<Lang>('es');
  const [modalOpen, setModalOpen] = React.useState(false);

  const courseData = {
    es: {
      title: 'Contabilidad Sin Complicaciones',
      category: 'Negocios y Finanzas',
      categoryIcon: '💼',
      price: 28,
      description: 'Entendé balances y conceptos clave sin ser contador. Aprende lo esencial de contabilidad para tomar mejores decisiones de negocio.',
      highlights: ['Estados financieros básicos', 'Balance general simplificado', 'Estado de resultados', 'Flujo de efectivo práctico'],
      modules: ['Introducción a la contabilidad', 'Activos, pasivos y patrimonio', 'El balance general paso a paso', 'Estado de resultados explicado', 'Flujo de efectivo simplificado', 'Análisis de ratios clave'],
      duration: '5 horas de contenido', format: '100% on-demand', access: 'Acceso de por vida', certificate: 'Certificado digital incluido',
      testimonials: [
        { name: 'Fernanda K.', quote: 'Por fin puedo leer los estados financieros de mi empresa y entenderlos.', role: 'Gerente General' },
        { name: 'Pablo V.', quote: 'Ideal para emprendedores que necesitan entender sus números.', role: 'Emprendedor' },
        { name: 'Luciana M.', quote: 'Simple y al punto. Me ayudó a tomar mejores decisiones de inversión.', role: 'Inversionista' }
      ],
      relatedCourses: [
        { id: 'finanzas-smart', title: 'Finanzas Smart', description: 'Gestión financiera personal' },
        { id: 'excel-finanzas', title: 'Excel para Finanzas', description: 'Análisis con Excel' },
        { id: 'inversiones-principiantes', title: 'Inversiones para Principiantes', description: 'Invierte tu dinero' }
      ]
    },
    en: {
      title: 'Accounting Without Complications',
      category: 'Business & Finance',
      categoryIcon: '💼',
      price: 28,
      description: 'Understand balance sheets and key concepts without being an accountant. Learn essential accounting to make better business decisions.',
      highlights: ['Basic financial statements', 'Simplified balance sheet', 'Income statement', 'Practical cash flow'],
      modules: ['Introduction to accounting', 'Assets, liabilities and equity', 'Balance sheet step by step', 'Income statement explained', 'Simplified cash flow', 'Key ratio analysis'],
      duration: '5 hours of content', format: '100% on-demand', access: 'Lifetime access', certificate: 'Digital certificate included',
      testimonials: [
        { name: 'Fernanda K.', quote: 'I can finally read my company\'s financial statements and understand them.', role: 'General Manager' },
        { name: 'Pablo V.', quote: 'Ideal for entrepreneurs who need to understand their numbers.', role: 'Entrepreneur' },
        { name: 'Luciana M.', quote: 'Simple and to the point. It helped me make better investment decisions.', role: 'Investor' }
      ],
      relatedCourses: [
        { id: 'finanzas-smart', title: 'Smart Finance', description: 'Personal financial management' },
        { id: 'excel-finanzas', title: 'Excel for Finance', description: 'Analysis with Excel' },
        { id: 'inversiones-principiantes', title: 'Investments for Beginners', description: 'Invest your money' }
      ]
    }
  };

  const course = courseData[lang];
  const categoryColor = '#EAB308';

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <header style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/#cursos-async" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem' }}><ArrowLeft size={20} /><span>{lang === 'es' ? 'Volver a cursos' : 'Back to courses'}</span></Link>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setLang('es')} style={{ padding: '0.375rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer', background: lang === 'es' ? '#3B82F6' : 'rgba(255,255,255,0.1)', color: lang === 'es' ? 'white' : 'rgba(255,255,255,0.6)' }}>ES</button>
              <button onClick={() => setLang('en')} style={{ padding: '0.375rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer', background: lang === 'en' ? '#3B82F6' : 'rgba(255,255,255,0.1)', color: lang === 'en' ? 'white' : 'rgba(255,255,255,0.6)' }}>EN</button>
            </div>
          </div>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '4rem 1rem', color: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', background: `${categoryColor}22`, border: `1px solid ${categoryColor}44` }}><span>{course.categoryIcon}</span><span style={{ fontSize: '0.875rem', fontWeight: 600, color: categoryColor }}>{course.category}</span></div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.4)' }}><Play size={16} color="#A78BFA" /><span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#A78BFA' }}>{lang === 'es' ? 'Curso Asincrónico' : 'Async Course'}</span></div>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}>{course.title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', marginBottom: '2rem', lineHeight: 1.6 }}>{course.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: categoryColor }}>USD ${course.price}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}><Clock size={16} /><span style={{ fontSize: '0.875rem' }}>{course.duration}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}><Zap size={16} /><span style={{ fontSize: '0.875rem' }}>{course.access}</span></div>
            </div>
          </div>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.125rem', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', border: 'none', borderRadius: '0.75rem', cursor: 'pointer', boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}>{lang === 'es' ? 'Comprar ahora' : 'Buy now'}<ArrowRight size={20} /></button>
        </div>
      </section>

      <section style={{ padding: '0', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)', borderRadius: '0 0 1rem 1rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
            <div style={{ textAlign: 'center', color: '#64748B' }}><BookOpen size={64} style={{ marginBottom: '1rem', opacity: 0.5 }} /><p style={{ fontSize: '1rem' }}>{lang === 'es' ? 'Vista previa del curso' : 'Course preview'}</p></div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '2rem', textAlign: 'center' }}>{lang === 'es' ? '¿Qué vas a aprender?' : 'What will you learn?'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {course.highlights.map((item, i) => (<div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', border: '1px solid #E2E8F0' }}><CheckCircle2 size={24} color={categoryColor} style={{ flexShrink: 0, marginTop: '2px' }} /><span style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.5 }}>{item}</span></div>))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '2rem', textAlign: 'center' }}>{lang === 'es' ? 'Contenido del curso' : 'Course content'}</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto', background: '#FFFFFF', borderRadius: '1rem', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            {course.modules.map((module, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', borderBottom: i < course.modules.length - 1 ? '1px solid #E2E8F0' : 'none' }}><div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: `${categoryColor}22`, color: categoryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.875rem', flexShrink: 0 }}>{i + 1}</div><span style={{ fontSize: '1rem', color: '#334155' }}>{module}</span></div>))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '1rem', textAlign: 'center', color: 'white' }}><Clock size={32} style={{ marginBottom: '1rem', color: '#3B82F6' }} /><div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{course.duration}</div><div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{lang === 'es' ? 'De contenido práctico' : 'Of practical content'}</div></div>
            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '1rem', textAlign: 'center', color: 'white' }}><Play size={32} style={{ marginBottom: '1rem', color: '#8B5CF6' }} /><div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{course.format}</div><div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{lang === 'es' ? 'A tu ritmo' : 'At your pace'}</div></div>
            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '1rem', textAlign: 'center', color: 'white' }}><Zap size={32} style={{ marginBottom: '1rem', color: '#22C55E' }} /><div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{course.access}</div><div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{lang === 'es' ? 'Sin límites' : 'No limits'}</div></div>
            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '1rem', textAlign: 'center', color: 'white' }}><Award size={32} style={{ marginBottom: '1rem', color: '#F97316' }} /><div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{lang === 'es' ? 'Certificado' : 'Certificate'}</div><div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{lang === 'es' ? 'Digital verificable' : 'Verifiable digital'}</div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '2rem', textAlign: 'center' }}>{lang === 'es' ? 'Lo que dicen nuestros estudiantes' : 'What our students say'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {course.testimonials.map((testimonial, i) => (<div key={i} style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}><div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>{[...Array(5)].map((_, j) => (<Star key={j} size={16} fill="#EAB308" color="#EAB308" />))}</div><p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>“{testimonial.quote}”</p><div><div style={{ fontWeight: 600, color: 'white' }}>{testimonial.name}</div><div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{testimonial.role}</div></div></div>))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '2rem', textAlign: 'center' }}>{lang === 'es' ? 'Cursos relacionados' : 'Related courses'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {course.relatedCourses.map((related, i) => (<Link key={i} href={`/cursos-async/${related.id}`} style={{ padding: '1.5rem', background: '#FFFFFF', borderRadius: '1rem', border: '1px solid #E2E8F0', textDecoration: 'none', transition: 'all 0.2s' }}><h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.5rem' }}>{related.title}</h3><p style={{ fontSize: '0.875rem', color: '#64748B' }}>{related.description}</p></Link>))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>{lang === 'es' ? '¿Listo para entender la contabilidad?' : 'Ready to understand accounting?'}</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>{lang === 'es' ? 'Empezá hoy y tomá mejores decisiones de negocio.' : 'Start today and make better business decisions.'}</p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.125rem', fontWeight: 700, color: '#3B82F6', background: 'white', border: 'none', borderRadius: '0.75rem', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}>{lang === 'es' ? 'Comprar por USD $28' : 'Buy for USD $28'}<ArrowRight size={20} /></button>
        </div>
      </section>

      {/* Modal inscripción */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white border-[#E2E8F0] max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-[#0F172A]">¡Asegurá tu lugar!</DialogTitle>
            <DialogDescription className="text-[#64748B]">
              Te contactamos en menos de 24hs para confirmar tu inscripción.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReservationForm defaultCourse="Contabilidad Sin Complicaciones" onSuccess={() => setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
