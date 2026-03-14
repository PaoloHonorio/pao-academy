'use client';
import React from 'react';
import { ArrowLeft, Clock, Award, CheckCircle2, Star, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { copy, type Lang } from '../../../lib/i18n';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';

export default function PowerBIDesdeCeroPage() {
  const [lang, setLang] = React.useState<Lang>('es');
  const [modalOpen, setModalOpen] = React.useState(false);
  const t = (k: string) => copy[lang][k] || k;

  const courseData = {
    es: {
      title: 'Power BI desde Cero',
      category: 'Datos',
      description: 'Transforma datos en decisiones con dashboards, metricas y reportes que generan impacto real.',
      objectives: [
        'Crear dashboards interactivos desde cero',
        'Dominar DAX y modelado de datos',
        'Automatizar reportes y metricas de negocio'
      ],
      methodology: [
        'Clases en vivo con ejercicios practicos',
        'Proyecto final: dashboard completo',
        'Material complementario y datasets reales'
      ],
      duration: '6 semanas - 2 encuentros semanales en vivo',
      certification: 'Certificado de Glomind360 validando competencias en Power BI',
      technologies: ['Power BI Desktop', 'DAX', 'Power Query', 'Data Modeling', 'Visualizaciones'],
      testimonials: [
        {
          name: 'Julian C.',
          quote: 'La ruta de Power BI nos permitio estandarizar reportes y tomar decisiones en tiempo real.',
          role: 'Gerente de Operaciones, LogiSur'
        },
        {
          name: 'Maria F.',
          quote: 'Aprendi a crear dashboards que realmente impactan en la toma de decisiones. Ahora soy la referente en datos de mi empresa.',
          role: 'Analista de Datos, RetailCorp'
        },
        {
          name: 'Diego L.',
          quote: 'El curso me dio las herramientas para automatizar todos mis reportes. Ahorro 10 horas semanales.',
          role: 'Business Analyst, TechStart'
        }
      ],
      partners: ['LogiSur', 'RetailCorp', 'TechStart'],
      recommendedCourses: [
        {
          id: 'analytics',
          slug: 'data-analytics',
          title: 'Data Analytics Bootcamp',
          description: 'Profundiza en SQL y analisis de datos'
        },
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Liderazgo Agil',
          description: 'Lidera equipos basandote en datos'
        },
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Ventas Consultivas',
          description: 'Usa datos para potenciar tus ventas'
        }
      ]
    },
    en: {
      title: 'Power BI from Zero',
      category: 'Data',
      description: 'Transform data into decisions with dashboards, metrics and reports that generate real impact.',
      objectives: [
        'Create interactive dashboards from scratch',
        'Master DAX and data modeling',
        'Automate reports and business metrics'
      ],
      methodology: [
        'Live classes with practical exercises',
        'Final project: complete dashboard',
        'Supplementary material and real datasets'
      ],
      duration: '6 weeks - 2 weekly live sessions',
      certification: 'Glomind360 certificate validating Power BI competencies',
      technologies: ['Power BI Desktop', 'DAX', 'Power Query', 'Data Modeling', 'Visualizations'],
      testimonials: [
        {
          name: 'Julian C.',
          quote: 'The Power BI path allowed us to standardize reports and make decisions in real time.',
          role: 'Operations Manager, LogiSur'
        },
        {
          name: 'Maria F.',
          quote: 'I learned to create dashboards that really impact decision making. Now I am the data reference in my company.',
          role: 'Data Analyst, RetailCorp'
        },
        {
          name: 'Diego L.',
          quote: 'The course gave me the tools to automate all my reports. I save 10 hours a week.',
          role: 'Business Analyst, TechStart'
        }
      ],
      partners: ['LogiSur', 'RetailCorp', 'TechStart'],
      recommendedCourses: [
        {
          id: 'analytics',
          slug: 'data-analytics',
          title: 'Data Analytics Bootcamp',
          description: 'Deepen your SQL and data analysis skills'
        },
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Agile Leadership',
          description: 'Lead teams based on data'
        },
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Consultative Sales',
          description: 'Use data to boost your sales'
        }
      ]
    }
  };

  const course = courseData[lang];
  const categoryColor = '#3B82F6'; // Blue for Data

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '0.875rem'
              }}
            >
              <ArrowLeft size={20} />
              <span>{lang === 'es' ? 'Volver al catalogo' : 'Back to catalog'}</span>
            </Link>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setLang('es')}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  background: lang === 'es' ? '#3B82F6' : 'rgba(255,255,255,0.1)',
                  color: lang === 'es' ? 'white' : 'rgba(255,255,255,0.6)'
                }}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  background: lang === 'en' ? '#3B82F6' : 'rgba(255,255,255,0.1)',
                  color: lang === 'en' ? 'white' : 'rgba(255,255,255,0.6)'
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        padding: '4rem 1rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            background: `${categoryColor}22`,
            border: `1px solid ${categoryColor}44`,
            marginBottom: '1.5rem'
          }}>
            <BarChart3 size={16} color={categoryColor} />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: categoryColor }}>
              {course.category}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            {course.title}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '700px',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            {course.description}
          </p>

          <button
            onClick={() => setModalOpen(true)}
            style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'white',
            background: '#0077FF',
            border: 'none',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,119,255,0.4)'
          }}>
            {lang === 'es' ? 'Quiero inscribirme' : 'I want to enroll'}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Imagen del curso */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${categoryColor}15, #8B5CF615)`,
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${categoryColor}22`
        }}>
          <div style={{ textAlign: 'center' }}>
            <BarChart3 size={80} color={categoryColor} style={{ opacity: 0.4, marginBottom: '1rem' }} />
            <p style={{ color: '#64748B', fontSize: '1.125rem' }}>
              {lang === 'es' ? 'Crea dashboards que transforman datos en decisiones' : 'Create dashboards that transform data into decisions'}
            </p>
          </div>
        </div>
      </section>

      {/* Detalles del curso */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem' }}>
              {lang === 'es' ? 'Que vas a lograr' : 'What you will achieve'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {course.objectives.map((objective, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle2 size={20} color={categoryColor} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#475569', lineHeight: 1.6 }}>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem' }}>
              {lang === 'es' ? 'Metodologia' : 'Methodology'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {course.methodology.map((method, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle2 size={20} color={categoryColor} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#475569', lineHeight: 1.6 }}>{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.5rem',
            background: '#F8FAFC',
            borderRadius: '0.75rem',
            border: '1px solid #E2E8F0'
          }}>
            <Clock size={24} color={categoryColor} />
            <div>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '0.25rem' }}>
                {lang === 'es' ? 'Duracion' : 'Duration'}
              </p>
              <p style={{ fontWeight: 600, color: '#0F172A' }}>{course.duration}</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.5rem',
            background: '#F8FAFC',
            borderRadius: '0.75rem',
            border: '1px solid #E2E8F0'
          }}>
            <Award size={24} color={categoryColor} />
            <div>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '0.25rem' }}>
                {lang === 'es' ? 'Certificacion' : 'Certification'}
              </p>
              <p style={{ fontWeight: 600, color: '#0F172A' }}>{course.certification}</p>
            </div>
          </div>
        </div>

        {/* Tecnologias */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F172A', marginBottom: '1rem' }}>
            {lang === 'es' ? 'Tecnologias que dominaras' : 'Technologies you will master'}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {course.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.5rem 1rem',
                  background: `${categoryColor}15`,
                  border: `1px solid ${categoryColor}33`,
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: categoryColor
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section style={{ background: '#F8FAFC', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#0F172A',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            {lang === 'es' ? 'Lo que dicen nuestros alumnos' : 'What our students say'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {course.testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <p style={{
                  color: '#475569',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  lineHeight: 1.6
                }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: 600, color: '#0F172A' }}>{testimonial.name}</p>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#0F172A',
            marginBottom: '2rem'
          }}>
            {lang === 'es' ? 'Empresas que confian en nosotros' : 'Companies that trust us'}
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            {course.partners.map((partner, index) => (
              <div
                key={index}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#F8FAFC',
                  borderRadius: '0.5rem',
                  border: '1px solid #E2E8F0',
                  color: '#64748B',
                  fontWeight: 500
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos recomendados */}
      <section style={{ background: '#F8FAFC', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#0F172A',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            {lang === 'es' ? 'Tambien te puede interesar' : 'You might also be interested in'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {course.recommendedCourses.map((recCourse) => (
              <Link
                key={recCourse.id}
                href={`/cursos/${recCourse.slug}`}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid #E2E8F0',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  marginBottom: '0.5rem'
                }}>
                  {recCourse.title}
                </h3>
                <p style={{
                  color: '#64748B',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
                  {recCourse.description}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#3B82F6',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  {lang === 'es' ? 'Ver curso' : 'View course'}
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
            {lang === 'es' ? 'Listo para dominar Power BI?' : 'Ready to master Power BI?'}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            {lang === 'es'
              ? 'Unete a cientos de profesionales que ya transforman datos en decisiones estrategicas.'
              : 'Join hundreds of professionals who already transform data into strategic decisions.'}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'white',
            background: '#0077FF',
            border: 'none',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,119,255,0.4)'
          }}>
            {lang === 'es' ? 'Inscribirme ahora' : 'Enroll now'}
            <ArrowRight size={20} />
          </button>
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
            <ReservationForm defaultCourse="Power BI desde Cero" onSuccess={() => setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
