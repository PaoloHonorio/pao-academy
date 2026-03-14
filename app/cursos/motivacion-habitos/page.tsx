'use client';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Award, CheckCircle2, Star, Brain, Sparkles, Target, Users, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { copy, type Lang } from '../../../lib/i18n';
import { createClient } from '@/lib/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';

function getEmbedUrl(url: string): string {
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }
  return url;
}

export default function MotivacionHabitosPage() {
  const [lang, setLang] = React.useState<Lang>('es');
  const [promoVideoUrl, setPromoVideoUrl] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const t = (k: string) => copy[lang][k] || k;
  const supabase = createClient();

  useEffect(() => {
    const loadCourseVideo = async () => {
      const { data } = await (supabase
        .from('courses') as any)
        .select('promo_video_url')
        .eq('slug', 'motivacion-habitos')
        .single();
      if (data?.promo_video_url) {
        setPromoVideoUrl(data.promo_video_url);
      }
    };
    loadCourseVideo();
  }, [supabase]);

  const courseData = {
    es: {
      title: 'Motivacion y Habitos',
      category: 'Mindset',
      description: 'Disena rutinas y sistemas que sostengan tu productividad y eleven tu mentalidad a otro nivel.',
      objectives: [
        'Construir habitos sostenibles que impulsen tu productividad',
        'Desarrollar una mentalidad de crecimiento y resiliencia',
        'Crear sistemas personales para mantener la motivacion a largo plazo'
      ],
      methodology: [
        'Clases en vivo con ejercicios practicos de introspeccion',
        'Sesiones de coaching grupal e individual',
        'Herramientas y templates para disenar tu sistema de habitos'
      ],
      duration: '3 semanas - Clases en vivo + sesiones de seguimiento',
      certification: 'Certificado de Glomind360 en Desarrollo Personal y Productividad',
      testimonials: [
        {
          name: 'Laura M.',
          quote: 'Este programa cambio mi forma de organizar mi dia. Ahora tengo claridad sobre mis prioridades y energia para cumplirlas.',
          role: 'Emprendedora, Cordoba'
        },
        {
          name: 'Martin G.',
          quote: 'Logre crear una rutina matutina que me permite empezar cada dia con foco y motivacion. Increible transformacion.',
          role: 'Gerente de Ventas, Buenos Aires'
        },
        {
          name: 'Sofia P.',
          quote: 'Las herramientas de mindset que aprendi me ayudaron a superar bloqueos que tenia hace anos. Muy recomendado.',
          role: 'Disenadora UX, Madrid'
        }
      ],
      partners: ['MindfulWork', 'ProductivityHub', 'GrowthMindset Co.'],
      recommendedCourses: [
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Liderazgo Agil',
          description: 'Lidera equipos con la mentalidad correcta'
        },
        {
          id: 'marca',
          slug: 'marca-personal',
          title: 'Marca Personal',
          description: 'Proyecta tu mejor version al mundo'
        },
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Ventas Consultivas',
          description: 'Aplica la motivacion a resultados comerciales'
        }
      ]
    },
    en: {
      title: 'Motivation & Habits',
      category: 'Mindset',
      description: 'Design routines and systems that sustain your productivity and elevate your mindset to another level.',
      objectives: [
        'Build sustainable habits that boost your productivity',
        'Develop a growth mindset and resilience',
        'Create personal systems to maintain long-term motivation'
      ],
      methodology: [
        'Live classes with practical introspection exercises',
        'Group and individual coaching sessions',
        'Tools and templates to design your habit system'
      ],
      duration: '3 weeks - Live classes + follow-up sessions',
      certification: 'Glomind360 Certificate in Personal Development and Productivity',
      testimonials: [
        {
          name: 'Laura M.',
          quote: 'This program changed the way I organize my day. Now I have clarity about my priorities and energy to accomplish them.',
          role: 'Entrepreneur, Cordoba'
        },
        {
          name: 'Martin G.',
          quote: 'I managed to create a morning routine that allows me to start each day with focus and motivation. Incredible transformation.',
          role: 'Sales Manager, Buenos Aires'
        },
        {
          name: 'Sofia P.',
          quote: 'The mindset tools I learned helped me overcome blocks I had for years. Highly recommended.',
          role: 'UX Designer, Madrid'
        }
      ],
      partners: ['MindfulWork', 'ProductivityHub', 'GrowthMindset Co.'],
      recommendedCourses: [
        {
          id: 'liderazgo',
          slug: 'liderazgo-agil',
          title: 'Agile Leadership',
          description: 'Lead teams with the right mindset'
        },
        {
          id: 'marca',
          slug: 'marca-personal',
          title: 'Personal Branding',
          description: 'Project your best version to the world'
        },
        {
          id: 'ventas',
          slug: 'ventas-consultivas',
          title: 'Consultative Sales',
          description: 'Apply motivation to commercial results'
        }
      ]
    }
  };

  const course = courseData[lang];
  const categoryColor = '#F97316'; // Orange for Mindset

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
            <Brain size={16} color={categoryColor} />
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

      {/* Video promocional o imagen del curso */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          background: promoVideoUrl ? '#000' : `linear-gradient(135deg, ${categoryColor}15, ${categoryColor}08)`,
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: promoVideoUrl ? 'none' : `1px solid ${categoryColor}22`
        }}>
          {promoVideoUrl ? (
            <iframe
              src={getEmbedUrl(promoVideoUrl)}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Brain size={80} color={categoryColor} style={{ opacity: 0.4, marginBottom: '1rem' }} />
              <p style={{ color: '#64748B', fontSize: '1.125rem' }}>
                {lang === 'es' ? 'Desarrolla tu potencial mental y crea habitos duraderos' : 'Develop your mental potential and create lasting habits'}
              </p>
            </div>
          )}
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

        {/* Duracion y Certificacion */}
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
            {lang === 'es' ? 'Listo para transformar tu mentalidad y habitos?' : 'Ready to transform your mindset and habits?'}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            {lang === 'es'
              ? 'Unete a cientos de profesionales que ya disenaron sistemas de productividad que funcionan.'
              : 'Join hundreds of professionals who have already designed productivity systems that work.'}
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
            <ReservationForm defaultCourse="Motivación y Hábitos" onSuccess={() => setModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
