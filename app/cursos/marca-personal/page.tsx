'use client';
import React from 'react';
import { ArrowLeft, Clock, Award, CheckCircle2, Star, Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { copy, type Lang } from '../../../lib/i18n';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';

export default function MarcaPersonalPage() {
  const [lang, setLang] = React.useState<Lang>('es');
  const [modalOpen, setModalOpen] = React.useState(false);
  const t = (k: string) => copy[lang][k] || k;

  const courseData = {
    es: {
      title: 'Marca Personal',
      category: 'Branding',
      description: 'Construi tu narrativa, aumenta tu visibilidad y diferencia tu perfil en el mercado profesional.',
      objectives: [
        'Desarrollar una narrativa personal solida',
        'Aumentar la visibilidad profesional',
        'Diferenciarse en el mercado laboral'
      ],
      methodology: [
        'Clases en vivo con ejercicios practicos',
        'Proyecto final: estrategia de marca personal',
        'Material complementario y templates descargables'
      ],
      duration: '4 semanas - 2 encuentros semanales en vivo',
      certification: 'Certificado de Glomind360 validando competencias de branding personal',
      testimonials: [
        {
          name: 'Belen D.',
          quote: 'El programa de Marca Personal nos dio posicionamiento y clientes inbound en semanas.',
          role: 'Consultora Independiente'
        },
        {
          name: 'Roberto M.',
          quote: 'Aprendi a comunicar mi valor profesional de manera efectiva. Ahora recibo 3x mas propuestas de trabajo.',
          role: 'Desarrollador Senior, TechCorp'
        },
        {
          name: 'Laura C.',
          quote: 'Mi perfil de LinkedIn se transformo completamente. Ahora soy reconocida como experta en mi area.',
          role: 'Marketing Manager, DigitalFlow'
        }
      ],
      partners: ['DigitalFlow', 'TechCorp', 'BrandStudio'],
      recommendedCourses: [
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Ventas Consultivas',
          description: 'Aplica tu marca para cerrar mas ventas'
        },
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Liderazgo Agil',
          description: 'Lidera con tu marca personal como diferencial'
        },
        {
          id: 'habitos',
          slug: 'motivacion-habitos',
          title: 'Motivacion y Habitos',
          description: 'Construye habitos para mantener tu marca'
        }
      ]
    },
    en: {
      title: 'Personal Branding',
      category: 'Branding',
      description: 'Build your narrative, increase your visibility and differentiate your profile in the professional market.',
      objectives: [
        'Develop a solid personal narrative',
        'Increase professional visibility',
        'Differentiate yourself in the job market'
      ],
      methodology: [
        'Live classes with practical exercises',
        'Final project: personal brand strategy',
        'Supplementary material and downloadable templates'
      ],
      duration: '4 weeks - 2 weekly live sessions',
      certification: 'Glomind360 certificate validating personal branding competencies',
      testimonials: [
        {
          name: 'Belen D.',
          quote: 'The Personal Branding program gave us positioning and inbound clients in weeks.',
          role: 'Independent Consultant'
        },
        {
          name: 'Roberto M.',
          quote: 'I learned to communicate my professional value effectively. Now I receive 3x more job proposals.',
          role: 'Senior Developer, TechCorp'
        },
        {
          name: 'Laura C.',
          quote: 'My LinkedIn profile was completely transformed. Now I am recognized as an expert in my area.',
          role: 'Marketing Manager, DigitalFlow'
        }
      ],
      partners: ['DigitalFlow', 'TechCorp', 'BrandStudio'],
      recommendedCourses: [
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Consultative Sales',
          description: 'Apply your brand to close more sales'
        },
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Agile Leadership',
          description: 'Lead with your personal brand as a differentiator'
        },
        {
          id: 'habitos',
          slug: 'motivacion-habitos',
          title: 'Motivation & Habits',
          description: 'Build habits to maintain your brand'
        }
      ]
    }
  };

  const course = courseData[lang];
  const categoryColor = '#EAB308'; // Yellow for Branding

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
            <Megaphone size={16} color={categoryColor} />
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
          background: `linear-gradient(135deg, ${categoryColor}15, ${categoryColor}08)`,
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${categoryColor}22`
        }}>
          <div style={{ textAlign: 'center' }}>
            <Megaphone size={80} color={categoryColor} style={{ opacity: 0.4, marginBottom: '1rem' }} />
            <p style={{ color: '#64748B', fontSize: '1.125rem' }}>
              {lang === 'es' ? 'Construye tu marca personal unica' : 'Build your unique personal brand'}
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
            {lang === 'es' ? 'Listo para construir tu marca personal?' : 'Ready to build your personal brand?'}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            {lang === 'es'
              ? 'Unete a cientos de profesionales que ya destacan en su industria con una marca personal solida.'
              : 'Join hundreds of professionals who already stand out in their industry with a solid personal brand.'}
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
            <ReservationForm defaultCourse="Marca Personal" onSuccess={() => setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
