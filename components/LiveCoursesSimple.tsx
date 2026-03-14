'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Calendar, Clock, Star, UserCheck, Award, Play, BookOpen, Building2, Users, TrendingUp, Target, BarChart, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

// Mapeo de categorías async a cursos destacados de cada categoría
const asyncCategoryCoursesMap: Record<string, string[]> = {
  'analisis-datos': ['excel-pro', 'powerbi-express'],
  'negocios-finanzas': ['finanzas-smart', 'excel-finanzas', 'inversiones-principiantes', 'contabilidad-sin-complicaciones'],
  'gestion-procesos': ['notion-productividad', 'trello-asana'],
  'desarrollo-personal': ['productividad-10x', 'comunicacion-asertiva'],
  'tecnologia': ['python-desde-cero', 'ia-generativa'],
  'marketing-digital': ['marketing-digital-express', 'redes-sociales-pro', 'email-marketing-ia'],
};

type Props = {
  t: (k: string) => string;
  lang: 'es' | 'en';
  onCourseClick: (title: string) => void;
  onCatalogClick: () => void;
  onCorporateCTA?: () => void;
};

type TabType = 'live' | 'async' | 'corporate';

export default function LiveCoursesSimple({ t, lang, onCourseClick, onCatalogClick, onCorporateCTA }: Props) {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<TabType>('live');
  const [dbCourses, setDbCourses] = useState<any[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [asyncCarouselIndex, setAsyncCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const carouselTimer = useRef<NodeJS.Timeout | null>(null);
  const asyncCarouselTimer = useRef<NodeJS.Timeout | null>(null);

  const resetCarouselTimer = useCallback((courses: any[]) => {
    if (carouselTimer.current) clearInterval(carouselTimer.current);
    carouselTimer.current = setInterval(() => {
      setCarouselIndex(i => (i + 1) % Math.max(1, courses.length));
    }, 4000);
  }, []);

  const resetAsyncCarouselTimer = useCallback((courses: any[]) => {
    if (asyncCarouselTimer.current) clearInterval(asyncCarouselTimer.current);
    asyncCarouselTimer.current = setInterval(() => {
      setAsyncCarouselIndex(i => (i + 1) % Math.max(1, courses.length));
    }, 4000);
  }, []);

  // Fetch courses from Supabase
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false });

        if (!error && data) {
          setDbCourses(data);
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
      setLoadingCourses(false);
    };

    fetchCourses();
  }, []);

  // Start carousel auto-rotation when courses load
  useEffect(() => {
    if (dbCourses.length > 0) {
      resetCarouselTimer(dbCourses);
    }
    return () => { if (carouselTimer.current) clearInterval(carouselTimer.current); };
  }, [dbCourses, resetCarouselTimer]);

  // Reset carousel when filter changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedTag, activeTab]);

  // Corporate Training data
  const corporateMetrics = [
    { number: '500+', label: 'Empresas capacitadas', icon: Building2, color: '#0077FF' },
    { number: '15,000+', label: 'Profesionales formados', icon: Users, color: '#00F7EF' },
    { number: '95%', label: 'Satisfacción promedio', icon: Star, color: '#0077FF' },
    { number: '40%', label: 'Mejora promedio en KPIs', icon: TrendingUp, color: '#00F7EF' },
  ];

  const corporateBenefits = [
    { text: 'Diagnóstico inicial de necesidades', icon: Target },
    { text: 'Capacitación personalizada con mentores expertos', icon: Users },
    { text: 'Resultados medibles en el desempeño de los equipos', icon: BarChart },
  ];

  const successCases = [
    {
      company: 'TechCorp Argentina',
      industry: 'Tecnología',
      challenge: 'Mejorar liderazgo de equipos remotos',
      solution: 'Programa de Liderazgo Ágil',
      results: [
        { metric: '40%', label: 'aumento en productividad' },
        { metric: '85%', label: 'satisfacción del equipo' },
        { metric: '60%', label: 'reducción en rotación' }
      ],
      duration: '3 meses'
    },
    {
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Capacitar equipos de ventas',
      solution: 'Ventas Consultivas + Power BI',
      results: [
        { metric: '35%', label: 'incremento en ventas' },
        { metric: '90%', label: 'adopción de herramientas' },
        { metric: '25%', label: 'mejora en KPIs' }
      ],
      duration: '4 meses'
    }
  ];

  // Async courses data - featured courses to display as cards
  const asyncCoursesData = useMemo(() => [
    {
      id: 'analisis-datos',
      tag: 'Análisis de Datos',
      image: '/analisis-datos.webp',
      es: { titulo: 'Análisis de Datos', duracion: 'A tu ritmo', modalidad: 'Grabado', inicio: 'Disponible ahora' },
      en: { titulo: 'Data Analysis', duracion: 'Self-paced', modalidad: 'Recorded', inicio: 'Available now' }
    },
    {
      id: 'negocios-finanzas',
      tag: 'Negocios y Finanzas',
      image: '/negocios-finanzas.webp',
      es: { titulo: 'Negocios y Finanzas', duracion: 'A tu ritmo', modalidad: 'Grabado', inicio: 'Disponible ahora' },
      en: { titulo: 'Business & Finance', duracion: 'Self-paced', modalidad: 'Recorded', inicio: 'Available now' }
    },
    {
      id: 'gestion-procesos',
      tag: 'Gestión de Procesos',
      image: '/gestion-procesos.webp',
      es: { titulo: 'Gestión de Procesos', duracion: 'A tu ritmo', modalidad: 'Grabado', inicio: 'Disponible ahora' },
      en: { titulo: 'Process Management', duracion: 'Self-paced', modalidad: 'Recorded', inicio: 'Available now' }
    },
    {
      id: 'desarrollo-personal',
      tag: 'Desarrollo Personal',
      image: '/desarrollo-personal.webp',
      es: { titulo: 'Desarrollo Personal', duracion: 'A tu ritmo', modalidad: 'Grabado', inicio: 'Disponible ahora' },
      en: { titulo: 'Personal Development', duracion: 'Self-paced', modalidad: 'Recorded', inicio: 'Available now' }
    },
    {
      id: 'tecnologia',
      tag: 'Tecnología',
      image: '/tecnologia.webp',
      es: { titulo: 'Tecnología', duracion: 'A tu ritmo', modalidad: 'Grabado', inicio: 'Disponible ahora' },
      en: { titulo: 'Technology', duracion: 'Self-paced', modalidad: 'Recorded', inicio: 'Available now' }
    },
    {
      id: 'marketing-digital',
      tag: 'Marketing Digital',
      image: '/marketing-digital.webp',
      es: { titulo: 'Marketing Digital', duracion: 'A tu ritmo', modalidad: 'Grabado', inicio: 'Disponible ahora' },
      en: { titulo: 'Digital Marketing', duracion: 'Self-paced', modalidad: 'Recorded', inicio: 'Available now' }
    },
  ], []);

  const asyncCourses = useMemo(() => {
    return asyncCoursesData.map((c) => {
      const data = c[lang as 'es' | 'en'];
      return {
        id: c.id,
        title: data.titulo,
        tag: c.tag,
        duration: data.duracion,
        level: 'Todos los niveles',
        nextStart: data.inicio,
        rating: 4.8,
        students: 180,
        image: c.image,
      };
    });
  }, [lang, asyncCoursesData]);

  // Start async carousel
  useEffect(() => {
    resetAsyncCarouselTimer(asyncCourses);
    return () => { if (asyncCarouselTimer.current) clearInterval(asyncCarouselTimer.current); };
  }, [asyncCourses, resetAsyncCarouselTimer]);

  // Map database courses to display format
  const courses = useMemo(() => {
    // Map category to tag for display
    const categoryToTag: Record<string, string> = {
      'Ventas': 'Comercial',
      'Liderazgo': 'Liderazgo',
      'Marketing': 'Branding',
      'Productividad': 'Datos',
      'Datos': 'Datos',
      'Mindset': 'Mindset',
    };

    return dbCourses.map((c) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      tag: categoryToTag[c.category] || c.category || 'General',
      duration: c.duration_hours ? `${c.duration_hours} horas` : '4 semanas',
      level: c.level === 'beginner' ? 'Principiante' : c.level === 'intermediate' ? 'Intermedio' : 'Avanzado',
      nextStart: 'Febrero 2026',
      rating: 4.9,
      students: 250,
      image: c.thumbnail_url || null,
    }));
  }, [dbCourses]);

  const tags = ['All', ...Array.from(new Set(courses.map((c) => c.tag)))];
  const filteredCourses = selectedTag === 'All' ? courses : courses.filter((c) => c.tag === selectedTag);

  const getCategoryColor = (tag: string) => {
    const colors: Record<string, string> = {
      // Live courses
      'Comercial': '#0077FF',
      'Liderazgo': '#0055CC',
      'Datos': '#0077FF',
      'Mindset': '#00C4BE',
      'Branding': '#00F7EF',
      // Async courses
      'Análisis de Datos': '#8B5CF6',
      'Negocios y Finanzas': '#7C3AED',
      'Gestión de Procesos': '#8B5CF6',
      'Desarrollo Personal': '#7C3AED',
      'Tecnología': '#8B5CF6',
      'Marketing Digital': '#7C3AED',
    };
    return colors[tag] || '#0077FF';
  };

  const getCategoryFallbackImage = (tag: string) => {
    const images: Record<string, string> = {
      'Desarrollo Personal': '/desarrollo-personal.webp',
      'Branding': '/marca-personal.webp',
      'Comercial': '/ventas-consultivas.webp',
      'Liderazgo': '/liderazgo-agil.webp',
      'Datos': '/analisis-datos.webp',
      'Mindset': '/motivacion-habitos.webp',
      'Análisis de Datos': '/analisis-datos.webp',
      'Negocios y Finanzas': '/negocios-finanzas.webp',
      'Gestión de Procesos': '/gestion-procesos.webp',
      'Tecnología': '/tecnologia.webp',
      'Marketing Digital': '/marketing-digital.webp',
    };
    return images[tag] || '/hero.webp';
  };

  const getAsyncCategoryEmoji = (tag: string) => {
    const emojis: Record<string, string> = {
      'Análisis de Datos': '📊',
      'Negocios y Finanzas': '💰',
      'Gestión de Procesos': '⚙️',
      'Desarrollo Personal': '🎯',
      'Tecnología': '💻',
      'Marketing Digital': '📱',
    };
    return emojis[tag] || '📚';
  };

  return (
    <section style={{ background: 'white', padding: '2rem 1rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'live' as TabType, label: 'Cursos en Vivo', icon: Play, color: '#EF4444' },
            { id: 'async' as TabType, label: 'On Demand', icon: BookOpen, color: '#8B5CF6' },
            { id: 'corporate' as TabType, label: 'Corporate Training', icon: Building2, color: '#0077FF' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedTag('All');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: 'none',
                ...(activeTab === tab.id ? {
                  background: tab.color,
                  color: 'white',
                  boxShadow: `0 4px 14px ${tab.color}40`
                } : {
                  background: '#F1F5F9',
                  color: '#64748B',
                  border: '1px solid transparent'
                })
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = `${tab.color}18`;
                  e.currentTarget.style.color = tab.color;
                  e.currentTarget.style.borderColor = `${tab.color}40`;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = '#F1F5F9';
                  e.currentTarget.style.color = '#64748B';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {activeTab === 'live' && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(239,68,68,0.08)',
              color: '#EF4444',
              borderRadius: '9999px',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem',
              border: '1px solid rgba(239,68,68,0.2)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#EF4444',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></span>
              EN VIVO AHORA
            </div>
          )}

          {activeTab === 'async' && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(139,92,246,0.1)',
              color: '#8B5CF6',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: '9999px',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              <BookOpen size={16} />
              A TU RITMO
            </div>
          )}

          {activeTab === 'corporate' && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(0,119,255,0.1)',
              color: '#0077FF',
              border: '1px solid rgba(0,119,255,0.25)',
              borderRadius: '9999px',
              padding: '0.5rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              <Building2 size={18} />
              <span>Formación Corporativa</span>
            </div>
          )}

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#0F172A',
            marginBottom: '1rem'
          }}>
            {activeTab === 'live' && <>Programas en vivo que <span style={{background:'rgba(239,68,68,0.1)',color:'#C81E1E',fontWeight:800,borderRadius:'6px',padding:'2px 8px'}}>transforman tu carrera</span></>}
            {activeTab === 'async' && <>Aprende <span style={{background:'rgba(139,92,246,0.12)',color:'#6D28D9',fontWeight:800,borderRadius:'6px',padding:'2px 8px'}}>a tu propio ritmo</span></>}
            {activeTab === 'corporate' && (
              <>Formación a medida para <span style={{background:'rgba(0,119,255,0.12)',color:'#0055CC',fontWeight:800,borderRadius:'6px',padding:'2px 8px'}}>empresas</span></>
            )}
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#475569',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {activeTab === 'live' && 'Aprende junto a mentores que aplican lo que enseñan y llevá cada concepto directo a tu trabajo real.'}
            {activeTab === 'async' && 'Accede a contenido grabado de alta calidad, disponible 24/7 para que avances cuando quieras.'}
            {activeTab === 'corporate' && 'Programas in-company diseñados para potenciar a tus equipos en ventas, liderazgo, datos y más.'}
          </p>
        </div>

        {/* Filters */}
        {(activeTab === 'live' || activeTab === 'async') && (() => {
          const filterTags = activeTab === 'live'
            ? tags
            : ['All', ...Array.from(new Set(asyncCourses.map((c) => c.tag)))];
          const activeColor = activeTab === 'live'
            ? { bg: '#EF4444', shadow: 'rgba(239,68,68,0.35)' }
            : { bg: '#8B5CF6', shadow: 'rgba(139,92,246,0.35)' };
          return (
            <div className="filter-scroll" style={{ display: 'flex', flexWrap: isMobile ? 'nowrap' : 'wrap', overflowX: isMobile ? 'auto' : 'visible', justifyContent: isMobile ? 'flex-start' : 'center', gap: '0.625rem', marginBottom: '2.5rem', paddingBottom: '0.5rem', paddingLeft: isMobile ? '0.25rem' : 0, paddingRight: isMobile ? '1rem' : 0, WebkitOverflowScrolling: 'touch' as any, scrollbarWidth: 'none' as any }}>
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    ...(selectedTag === tag ? {
                      background: activeColor.bg,
                      color: 'white',
                      border: 'none',
                      boxShadow: `0 4px 14px ${activeColor.shadow}`
                    } : {
                      background: 'white',
                      color: '#374151',
                      border: '2px solid #E5E7EB'
                    })
                  }}
                >
                  {tag === 'All' ? 'Destacados' : tag}
                  {tag !== 'All' && activeTab === 'live' && ` (${courses.filter((c) => c.tag === tag).length})`}
                  {tag !== 'All' && activeTab === 'async' && ` (${asyncCourses.filter((c) => c.tag === tag).length})`}
                </button>
              ))}
            </div>
          );
        })()}

        {/* Async Courses - Carousel */}
        {activeTab === 'async' && (() => {
          const visibleCount = isMobile ? 1 : 3;
          const total = asyncCourses.length;
          const idx = asyncCarouselIndex % total;
          const visible = Array.from({length: visibleCount}, (_, i) => asyncCourses[(idx + i) % total]);
          return (
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)', gap: '1.5rem', transition: 'all 0.5s ease' }}>
          {visible.map((course) => (
            <div
              key={course.id}
              style={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Color bar */}
              <div style={{
                height: '0.5rem',
                background: getCategoryColor(course.tag)
              }}></div>

              {/* Course image */}
              <div style={{
                height: '12rem',
                background: '#F1F5F9',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={course.image || getCategoryFallbackImage(course.tag)}
                  alt={`Imagen del curso: ${course.title}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                {/* Category tag */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(139,92,246,0.08)',
                  color: '#8B5CF6',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  {getAsyncCategoryEmoji(course.tag)}
                  {' '}{course.tag}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  {course.title}
                </h3>

                {/* Meta info */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  fontSize: '0.875rem',
                  color: '#64748B',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <UserCheck size={16} />
                    {course.level}
                  </div>
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0F172A' }}>
                    {course.rating}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#64748B' }}>
                    ({course.students}+)
                  </span>
                </div>

                {/* Availability info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  background: '#EDE9FE',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <BookOpen size={16} color="#00F7EF" />
                  <span style={{ fontSize: '0.875rem', color: '#005FCC', fontWeight: '500' }}>
                    {course.nextStart}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/cursos-async/${asyncCategoryCoursesMap[course.id]?.[0] || course.id}`}
                  style={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    background: '#8B5CF6',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#7C3AED';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#8B5CF6';
                  }}
                >
                  <span>Ver cursos</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
            </div>
          </div>
          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {asyncCourses.map((_, i) => (
              <button key={i} onClick={() => { setAsyncCarouselIndex(i); resetAsyncCarouselTimer(asyncCourses); }}
                style={{ width: i === idx ? '24px' : '8px', height: '8px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === idx ? '#8B5CF6' : '#E5E7EB', padding: 0 }} />
            ))}
          </div>
          {/* Arrows */}
          <button onClick={() => { setAsyncCarouselIndex(i => (i - 1 + total) % total); resetAsyncCarouselTimer(asyncCourses); }}
            style={{ position: 'absolute', left: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #E5E7EB', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <ArrowRight size={18} style={{ transform: 'rotate(180deg)', color: '#1E1E1E' }} />
          </button>
          <button onClick={() => { setAsyncCarouselIndex(i => (i + 1) % total); resetAsyncCarouselTimer(asyncCourses); }}
            style={{ position: 'absolute', right: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #E5E7EB', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <ArrowRight size={18} style={{ color: '#1E1E1E' }} />
          </button>
        </div>
          );
        })()}

        {/* Course Cards Grid - Only for live courses */}
        {activeTab === 'live' && loadingCourses && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
            <Loader2 size={40} className="animate-spin" style={{ color: '#0077FF' }} />
          </div>
        )}
        {activeTab === 'live' && !loadingCourses && filteredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748B' }}>
            <BookOpen size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <p>No hay cursos publicados aún.</p>
          </div>
        )}
        {activeTab === 'live' && !loadingCourses && filteredCourses.length > 0 && (() => {
          const visibleCount = isMobile ? 1 : 3;
          const total = filteredCourses.length;
          const idx = carouselIndex % total;
          const visible = Array.from({length: visibleCount}, (_, i) => filteredCourses[(idx + i) % total]);
          return (
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Carousel wrapper */}
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)',
              gap: '1.5rem',
              transition: 'all 0.5s ease'
            }}>
          {visible.map((course) => (
            <div
              key={course.id}
              style={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Color bar */}
              <div style={{
                height: '0.5rem',
                background: getCategoryColor(course.tag)
              }}></div>

              {/* Course image */}
              <div style={{
                height: '12rem',
                background: '#F1F5F9',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={course.image || getCategoryFallbackImage(course.tag)}
                  alt={`Imagen del curso: ${course.title}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Badge - Live */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  background: '#EF4444',
                  color: 'white',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 10px rgba(239,68,68,0.4)'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  EN VIVO
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', color: '#1E1E1E' }}>
                {/* Category tag */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(0,119,255,0.08)',
                  color: '#0077FF',
                  border: '1px solid rgba(0,119,255,0.2)',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  {course.tag === 'Datos' && '📊'}
                  {course.tag === 'Liderazgo' && '👥'}
                  {course.tag === 'Comercial' && '💼'}
                  {course.tag === 'Mindset' && '🧠'}
                  {course.tag === 'Branding' && '🎨'}
                  {' '}{course.tag}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  {course.title}
                </h3>

                {/* Meta info */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  fontSize: '0.875rem',
                  color: '#64748B',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <UserCheck size={16} />
                    {course.level}
                  </div>
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0F172A' }}>
                    {course.rating}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#64748B' }}>
                    ({course.students}+)
                  </span>
                </div>

                {/* Next start */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  background: 'rgba(0,119,255,0.06)',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <Calendar size={16} color="#0077FF" />
                  <span style={{ fontSize: '0.875rem', color: '#0055CC', fontWeight: '500' }}>
                    Próximo inicio: {course.nextStart}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/cursos/${course.slug || course.id}`}
                  style={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    background: '#0077FF',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0,119,255,0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0055CC';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0077FF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Ver curso</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {filteredCourses.map((_, i) => (
              <button key={i} onClick={() => { setCarouselIndex(i); resetCarouselTimer(filteredCourses); }}
                style={{ width: i === idx ? '24px' : '8px', height: '8px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === idx ? '#0077FF' : '#E5E7EB', padding: 0 }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <button onClick={() => { setCarouselIndex(i => (i - 1 + total) % total); resetCarouselTimer(filteredCourses); }}
            style={{ position: 'absolute', left: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #E5E7EB', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <ArrowRight size={18} style={{ transform: 'rotate(180deg)', color: '#1E1E1E' }} />
          </button>
          <button onClick={() => { setCarouselIndex(i => (i + 1) % total); resetCarouselTimer(filteredCourses); }}
            style={{ position: 'absolute', right: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #E5E7EB', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <ArrowRight size={18} style={{ color: '#1E1E1E' }} />
          </button>
        </div>
          );
        })()}

        {/* Ver todos CTA */}
        {(activeTab === 'live' || activeTab === 'async') && (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onCatalogClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#0F172A',
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0077FF';
              e.currentTarget.style.background = '#F9FAFB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.background = 'white';
            }}
          >
            <span>Ver todos los cursos</span>
            <ArrowRight size={20} />
          </button>
        </div>
        )}

        {/* Corporate Training Content */}
        {activeTab === 'corporate' && (
          <>
            {/* Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {corporateMetrics.map((metric, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '1rem',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = metric.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 0.75rem',
                    background: `${metric.color}22`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <metric.icon size={24} color={metric.color} />
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: metric.color,
                    marginBottom: '0.25rem'
                  }}>
                    {metric.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#64748B'
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Benefits */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {corporateBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '1rem',
                      padding: '1rem',
                      background: '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      borderRadius: '0.75rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.borderColor = '#0077FF';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#F9FAFB';
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0077FF, #00F7EF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
                    }}>
                      <benefit.icon size={20} color="white" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        margin: 0,
                        fontSize: '0.9375rem',
                        fontWeight: '500',
                        color: '#0F172A',
                        lineHeight: '1.5'
                      }}>
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual + CTA */}
              <div>
                <div style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  position: 'relative'
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&auto=format&q=80"
                    alt="Equipo de trabajo en capacitación corporativa"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #DBEAFE, #E9D5FF)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <Building2 size={64} color="#0077FF" style={{ opacity: 0.5, margin: '0 auto 1rem' }} />
                      <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#0055CC', margin: 0 }}>
                        Formación Corporativa
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onCorporateCTA}
                  style={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'white',
                    background: 'linear-gradient(135deg, #0077FF, #00F7EF)',
                    border: 'none',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <span>Habla con Ventas</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Success Cases */}
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#0F172A',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Casos de Éxito <span style={{
                  background: 'linear-gradient(90deg, #00F7EF, #00C4BE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Reales</span>
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {successCases.map((case_, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'white',
                      border: '1px solid #E5E7EB',
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00F7EF';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(16, 185, 129, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '1rem'
                    }}>
                      <div>
                        <h4 style={{
                          fontSize: '1.125rem',
                          fontWeight: '700',
                          color: '#0F172A',
                          marginBottom: '0.25rem'
                        }}>
                          {case_.company}
                        </h4>
                        <p style={{
                          fontSize: '0.875rem',
                          color: '#64748B',
                          margin: 0
                        }}>
                          {case_.industry}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{
                          fontSize: '0.75rem',
                          color: '#64748B'
                        }}>
                          Duración
                        </div>
                        <div style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#00F7EF'
                        }}>
                          {case_.duration}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#475569',
                        marginBottom: '0.5rem'
                      }}>
                        <strong style={{ color: '#0F172A' }}>Desafío:</strong> {case_.challenge}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#475569'
                      }}>
                        <strong style={{ color: '#0F172A' }}>Solución:</strong> {case_.solution}
                      </div>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.75rem'
                    }}>
                      {case_.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          style={{
                            textAlign: 'center',
                            padding: '0.75rem',
                            background: '#F0FDF4',
                            border: '1px solid #BBF7D0',
                            borderRadius: '0.5rem'
                          }}
                        >
                          <div style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#00F7EF',
                            marginBottom: '0.25rem'
                          }}>
                            {result.metric}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#065F46',
                            lineHeight: '1.2'
                          }}>
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
