'use client';
import React from 'react';
import { ArrowLeft, Clock, Award, CheckCircle2, Star, Database, BarChart3, Users, ArrowRight, LineChart } from 'lucide-react';
import Link from 'next/link';
import { copy, type Lang } from '../../../lib/i18n';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';

export default function DataAnalyticsPage() {
  const [lang, setLang] = React.useState<Lang>('es');
  const [modalOpen, setModalOpen] = React.useState(false);
  const t = (k: string) => copy[lang][k] || k;

  const courseData = {
    es: {
      title: 'Data Analytics Bootcamp',
      category: 'Datos',
      description: 'Domina SQL, ETL y metricas de negocio end-to-end para resolver problemas con analitica aplicada.',
      objectives: [
        'Dominar SQL desde cero hasta consultas avanzadas',
        'Implementar procesos ETL para transformacion de datos',
        'Crear dashboards y reportes que impulsen decisiones de negocio',
        'Aplicar analisis estadistico a casos reales de empresas'
      ],
      methodology: [
        'Clases en vivo intensivas con practica guiada',
        'Proyectos reales con datasets de empresas',
        'Mentoria personalizada y code reviews',
        'Acceso a plataforma con ejercicios y recursos'
      ],
      duration: '8 semanas - Modalidad intensiva en vivo',
      certification: 'Certificado de Glomind360 en Data Analytics con validacion de competencias tecnicas',
      technologies: ['SQL', 'Python', 'Power BI', 'Excel Avanzado', 'ETL', 'BigQuery'],
      testimonials: [
        {
          name: 'Federico R.',
          quote: 'Pase de no saber nada de SQL a crear dashboards profesionales para mi empresa. El bootcamp es intensivo pero vale cada hora.',
          role: 'Analista de Negocios, Mercado Libre'
        },
        {
          name: 'Carolina T.',
          quote: 'Los proyectos reales fueron clave. Ahora tengo un portfolio que me abrio puertas en empresas tech de primer nivel.',
          role: 'Data Analyst, Globant'
        },
        {
          name: 'Diego M.',
          quote: 'La mentoria personalizada hizo la diferencia. Cada duda se resolvia en tiempo real y el aprendizaje fue exponencial.',
          role: 'BI Developer, Banco Galicia'
        }
      ],
      partners: ['Mercado Libre', 'Globant', 'Banco Galicia', 'Despegar'],
      recommendedCourses: [
        {
          id: 'powerbi',
          slug: 'power-bi-desde-cero',
          title: 'Power BI desde Cero',
          description: 'Complementa tu analisis con visualizaciones profesionales'
        },
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Liderazgo Agil',
          description: 'Lidera equipos de datos con metodologias agiles'
        },
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Ventas Consultivas',
          description: 'Aplica insights de datos para potenciar ventas'
        }
      ]
    },
    en: {
      title: 'Data Analytics Bootcamp',
      category: 'Data',
      description: 'Master SQL, ETL and end-to-end business metrics to solve problems with applied analytics.',
      objectives: [
        'Master SQL from zero to advanced queries',
        'Implement ETL processes for data transformation',
        'Create dashboards and reports that drive business decisions',
        'Apply statistical analysis to real company cases'
      ],
      methodology: [
        'Intensive live classes with guided practice',
        'Real projects with company datasets',
        'Personalized mentorship and code reviews',
        'Access to platform with exercises and resources'
      ],
      duration: '8 weeks - Intensive live modality',
      certification: 'Glomind360 Certificate in Data Analytics with technical competency validation',
      technologies: ['SQL', 'Python', 'Power BI', 'Advanced Excel', 'ETL', 'BigQuery'],
      testimonials: [
        {
          name: 'Federico R.',
          quote: 'I went from knowing nothing about SQL to creating professional dashboards for my company. The bootcamp is intensive but worth every hour.',
          role: 'Business Analyst, Mercado Libre'
        },
        {
          name: 'Carolina T.',
          quote: 'The real projects were key. Now I have a portfolio that opened doors at top-tier tech companies.',
          role: 'Data Analyst, Globant'
        },
        {
          name: 'Diego M.',
          quote: 'The personalized mentorship made the difference. Every question was resolved in real-time and learning was exponential.',
          role: 'BI Developer, Banco Galicia'
        }
      ],
      partners: ['Mercado Libre', 'Globant', 'Banco Galicia', 'Despegar'],
      recommendedCourses: [
        {
          id: 'powerbi',
          slug: 'power-bi-desde-cero',
          title: 'Power BI from Zero',
          description: 'Complement your analysis with professional visualizations'
        },
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Agile Leadership',
          description: 'Lead data teams with agile methodologies'
        },
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Consultative Sales',
          description: 'Apply data insights to boost sales'
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
                fontSize: '0.875rem',
                transition: 'color 0.2s'
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
                  transition: 'all 0.2s',
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
                  transition: 'all 0.2s',
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
          {/* Badge de categoria */}
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
            <Database size={16} color={categoryColor} />
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
            boxShadow: '0 10px 25px rgba(0,119,255,0.4)',
            transition: 'all 0.3s'
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <Database size={60} color={categoryColor} style={{ opacity: 0.4 }} />
              <BarChart3 size={60} color="#8B5CF6" style={{ opacity: 0.4 }} />
              <LineChart size={60} color={categoryColor} style={{ opacity: 0.4 }} />
            </div>
            <p style={{ color: '#64748B', fontSize: '1.125rem' }}>
              {lang === 'es' ? 'Transforma datos en decisiones estrategicas' : 'Transform data into strategic decisions'}
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
          {/* Objetivos */}
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

          {/* Metodologia */}
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

        {/* Duracion, Certificacion y Tecnologias */}
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
            {lang === 'es' ? 'Tecnologias que aprenderas' : 'Technologies you will learn'}
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
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s'
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
            {lang === 'es' ? 'Empresas donde trabajan nuestros egresados' : 'Companies where our graduates work'}
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
                  transition: 'all 0.3s',
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
            {lang === 'es' ? 'Listo para convertirte en Data Analyst?' : 'Ready to become a Data Analyst?'}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            {lang === 'es'
              ? 'Unete al bootcamp mas intensivo y practico del mercado. Transforma tu carrera con habilidades que las empresas necesitan.'
              : 'Join the most intensive and practical bootcamp on the market. Transform your career with skills that companies need.'}
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
            <ReservationForm defaultCourse="Data Analytics Bootcamp" onSuccess={() => setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
