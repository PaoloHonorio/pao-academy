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
      'Análisis de Datos': '#7C3AED',
      'Negocios y Finanzas': '#7C3AED',
      'Gestión de Procesos': '#7C3AED',
      'Desarrollo Personal': '#7C3AED',
      'Tecnología': '#7C3AED',
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
    <section id="cursos-en-vivo" style={{
      background: 'linear-gradient(160deg,#06090F 0%,#080D18 50%,#070B14 100%)',
      padding: '5rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'radial-gradient(circle,#0077FF 1px,transparent 1px)',backgroundSize:'36px 36px',pointerEvents:'none'}}/>
      {/* Glow top-right */}
      <div style={{position:'absolute',top:'-200px',right:'-150px',width:'700px',height:'700px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,119,255,0.12),transparent 65%)',pointerEvents:'none'}}/>
      {/* Glow bottom-left */}
      <div style={{position:'absolute',bottom:'-100px',left:'-100px',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,247,239,0.04),transparent 65%)',pointerEvents:'none'}}/>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position:'relative', zIndex:1 }}>

        {/* Section label */}
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.1))'}}/>
          <span style={{fontSize:'0.72rem',fontWeight:700,color:'rgba(255,255,255,0.35)',letterSpacing:'0.2em',textTransform:'uppercase',whiteSpace:'nowrap'}}>
            Nuestros Programas
          </span>
          <div style={{flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.1))'}}/>
        </div>

        {/* Title + subtitle */}
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <h2 style={{fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,color:'#FFFFFF',letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'1rem'}}>
            Programas diseñados para{' '}
            <span style={{background:'rgba(0,119,255,0.25)',color:'#fff',fontWeight:900,borderRadius:'6px',padding:'2px 10px'}}>impacto real</span>
            {' '}en tu carrera
          </h2>
          <p style={{fontSize:'1.05rem',color:'rgba(255,255,255,0.45)',maxWidth:'560px',margin:'0 auto',lineHeight:1.7}}>
            Aprende con mentores activos, metodología aplicada y una comunidad profesional que impulsa tu crecimiento.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'live' as TabType, label: 'Cursos en Vivo', icon: Play, color: '#0077FF' },
            { id: 'async' as TabType, label: 'On Demand', icon: Clock, color: '#7C3AED' },
            { id: 'corporate' as TabType, label: 'Corporate Training', icon: Building2, color: '#0055CC' }
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
                padding: '0.65rem 1.4rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.25s',
                ...(activeTab === tab.id ? {
                  background: 'linear-gradient(135deg,#0066FF,#0044CC)',
                  color: 'white',
                  border: '1px solid rgba(0,102,255,0.4)',
                  boxShadow: `0 4px 20px rgba(0,102,255,0.4)`
                } : {
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                })
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }
              }}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {activeTab === 'live' && (
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)',
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', padding: '0.45rem 1rem',
                fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em',
                cursor: 'default', transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,247,239,0.5)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(0,247,239,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{width:'7px',height:'7px',background:'#FF4444',borderRadius:'50%',display:'inline-block',flexShrink:0,animation:'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',boxShadow:'0 0 6px rgba(255,68,68,0.8)'}}/>
              EN VIVO AHORA
            </div>
          )}
          {activeTab === 'async' && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(0,247,239,0.1)', color: '#00F7EF',
              border: '1px solid rgba(0,247,239,0.2)',
              borderRadius: '9999px', padding: '0.4rem 1rem',
              fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
            }}>
              A TU RITMO
            </div>
          )}
          {activeTab === 'corporate' && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(0,119,255,0.12)', color: '#0077FF',
              border: '1px solid rgba(0,119,255,0.25)',
              borderRadius: '9999px', padding: '0.4rem 1rem',
              fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
            }}>
              CORPORATE
            </div>
          )}
        </div>

        {/* Filters */}
        {(activeTab === 'live' || activeTab === 'async') && (() => {
          const filterTags = activeTab === 'live'
            ? tags
            : ['All', ...Array.from(new Set(asyncCourses.map((c) => c.tag)))];
          const activeColor = activeTab === 'live'
            ? { bg: '#0077FF', shadow: 'rgba(0,119,255,0.5)' }
            : { bg: '#7C3AED', shadow: 'rgba(124,58,237,0.5)' };
          return (
            <div className="filter-scroll" style={{ display: 'flex', flexWrap: isMobile ? 'nowrap' : 'wrap', overflowX: isMobile ? 'auto' : 'visible', justifyContent: isMobile ? 'flex-start' : 'center', gap: '0.5rem', marginBottom: '2.5rem', paddingBottom: '0.5rem', paddingLeft: isMobile ? '0.25rem' : 0, paddingRight: isMobile ? '1rem' : 0, WebkitOverflowScrolling: 'touch' as any, scrollbarWidth: 'none' as any }}>
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    ...(selectedTag === tag ? {
                      background: activeColor.bg,
                      color: 'white',
                      border: '1px solid transparent',
                      boxShadow: `0 4px 14px ${activeColor.shadow}`
                    } : {
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    })
                  }}
                  onMouseEnter={(e) => { if(selectedTag !== tag){ e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.color='rgba(255,255,255,0.85)'; }}}
                  onMouseLeave={(e) => { if(selectedTag !== tag){ e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.55)'; }}}
                >
                  {tag === 'All' ? 'Destacados' : tag}
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
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.border = '1px solid rgba(0,119,255,0.35)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,119,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Course image */}
              <div style={{ height: '12rem', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={course.image || getCategoryFallbackImage(course.tag)}
                  alt={`Imagen del curso: ${course.title}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(10,10,18,0.2) 0%,rgba(10,10,18,0.6) 100%)'}}/>
                {/* Modality badge */}
                <div style={{
                  position:'absolute', top:'0.75rem', left:'0.75rem',
                  display:'inline-flex', alignItems:'center', gap:'0.375rem',
                  background:'rgba(0,247,239,0.15)', color:'#00F7EF',
                  border:'1px solid rgba(0,247,239,0.3)',
                  backdropFilter:'blur(8px)',
                  borderRadius:'9999px', padding:'0.3rem 0.7rem',
                  fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.05em',
                }}>
                  On Demand
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem' }}>
                {/* Category tag */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.2rem 0.65rem',
                  background: 'rgba(0,119,255,0.12)', color: '#60A5FA',
                  border: '1px solid rgba(0,119,255,0.2)',
                  borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700,
                  marginBottom: '0.65rem',
                }}>
                  {getAsyncCategoryEmoji(course.tag)} {course.tag}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                  {course.title}
                </h3>

                {/* Meta */}
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={13} />{course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <UserCheck size={13} />{course.level}
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />)}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>{course.rating}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>({course.students}+)</span>
                </div>

                {/* Availability */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.55rem 0.75rem',
                  background: 'rgba(0,247,239,0.06)', border: '1px solid rgba(0,247,239,0.12)',
                  borderRadius: '0.5rem', marginBottom: '1rem',
                }}>
                  <BookOpen size={13} color="#00F7EF" />
                  <span style={{ fontSize: '0.8rem', color: 'rgba(0,247,239,0.85)', fontWeight: 600 }}>{course.nextStart}</span>
                </div>

                {/* CTA */}
                <Link
                  href={`/cursos-async/${asyncCategoryCoursesMap[course.id]?.[0] || course.id}`}
                  style={{
                    width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.7rem 1.25rem', fontSize: '0.875rem', fontWeight: 700,
                    color: 'white', background: 'linear-gradient(135deg,#0066FF,#0044CC)',
                    border: '1px solid rgba(0,102,255,0.4)', borderRadius: '0.6rem',
                    cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0,102,255,0.25)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#1a7fff,#0055ee)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#0066FF,#0044CC)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span>Ver curso</span>
                  <ArrowRight size={16} />
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
                style={{ width: i === idx ? '24px' : '8px', height: '8px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === idx ? '#0077FF' : 'rgba(255,255,255,0.15)', padding: 0 }} />
            ))}
          </div>
          {/* Arrows */}
          <button onClick={() => { setAsyncCarouselIndex(i => (i - 1 + total) % total); resetAsyncCarouselTimer(asyncCourses); }}
            style={{ position: 'absolute', left: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(15,15,30,0.9)', backdropFilter:'blur(12px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowRight size={16} style={{ transform: 'rotate(180deg)', color: 'rgba(255,255,255,0.7)' }} />
          </button>
          <button onClick={() => { setAsyncCarouselIndex(i => (i + 1) % total); resetAsyncCarouselTimer(asyncCourses); }}
            style={{ position: 'absolute', right: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(15,15,30,0.9)', backdropFilter:'blur(12px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
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
          <div style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.35)' }}>
            <BookOpen size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
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
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.border = '1px solid rgba(0,119,255,0.35)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,119,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Accent line top */}
              <div style={{height:'3px', background:`linear-gradient(90deg,${getCategoryColor(course.tag)},transparent)`}}/>

              {/* Image */}
              <div style={{ height: '11rem', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={course.image || getCategoryFallbackImage(course.tag)}
                  alt={`Imagen del curso: ${course.title}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(10,10,18,0.1) 0%,rgba(10,10,18,0.75) 100%)'}}/>
                {/* Live indicator chip */}
                <div style={{
                  position:'absolute', top:'0.75rem', left:'0.75rem',
                  display:'inline-flex', alignItems:'center', gap:'0.4rem',
                  background:'rgba(0,0,0,0.5)', backdropFilter:'blur(10px)',
                  border:'1px solid rgba(255,255,255,0.1)',
                  borderRadius:'6px', padding:'0.3rem 0.6rem',
                }}>
                  <span style={{width:'7px',height:'7px',background:'#FF4444',borderRadius:'50%',display:'inline-block',flexShrink:0,animation:'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',boxShadow:'0 0 6px rgba(255,68,68,0.8)'}}/>
                  <span style={{fontSize:'0.65rem',fontWeight:800,color:'rgba(255,255,255,0.75)',letterSpacing:'0.08em'}}>EN VIVO</span>
                </div>
                {/* Category overlaid bottom-left */}
                <div style={{
                  position:'absolute', bottom:'0.75rem', left:'0.75rem',
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.25rem 0.65rem',
                  background: 'rgba(0,0,0,0.5)', backdropFilter:'blur(8px)',
                  border: `1px solid ${getCategoryColor(course.tag)}40`,
                  borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700,
                  color: '#fff',
                }}>
                  {course.tag === 'Datos' && '📊'}
                  {course.tag === 'Liderazgo' && '👥'}
                  {course.tag === 'Comercial' && '💼'}
                  {course.tag === 'Mindset' && '🧠'}
                  {course.tag === 'Branding' && '🎨'}
                  {course.tag === 'Desarrollo Personal' && '🎯'}
                  {' '}{course.tag}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem' }}>
                {/* category pill removed — now on image */}

                {/* Title */}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                  {course.title}
                </h3>

                {/* Meta */}
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={13} />{course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <UserCheck size={13} />{course.level}
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />)}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>{course.rating}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>({course.students}+)</span>
                </div>

                {/* Next start */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.55rem 0.75rem',
                  background: 'rgba(0,119,255,0.08)', border: '1px solid rgba(0,119,255,0.18)',
                  borderRadius: '0.5rem', marginBottom: '1rem',
                }}>
                  <Calendar size={13} color="#60A5FA" />
                  <span style={{ fontSize: '0.8rem', color: 'rgba(96,165,250,0.9)', fontWeight: 600 }}>
                    Próximo inicio: {course.nextStart}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/cursos/${course.slug || course.id}`}
                  style={{
                    width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.7rem 1.25rem', fontSize: '0.875rem', fontWeight: 700,
                    color: 'white', background: 'linear-gradient(135deg,#0066FF,#0044CC)',
                    border: '1px solid rgba(0,102,255,0.4)', borderRadius: '0.6rem',
                    cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0,102,255,0.25)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#1a7fff,#0055ee)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#0066FF,#0044CC)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span>Ver curso</span>
                  <ArrowRight size={16} />
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
                style={{ width: i === idx ? '24px' : '8px', height: '8px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === idx ? '#0077FF' : 'rgba(255,255,255,0.15)', padding: 0 }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <button onClick={() => { setCarouselIndex(i => (i - 1 + total) % total); resetCarouselTimer(filteredCourses); }}
            style={{ position: 'absolute', left: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(15,15,30,0.9)', backdropFilter:'blur(12px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowRight size={16} style={{ transform: 'rotate(180deg)', color: 'rgba(255,255,255,0.7)' }} />
          </button>
          <button onClick={() => { setCarouselIndex(i => (i + 1) % total); resetCarouselTimer(filteredCourses); }}
            style={{ position: 'absolute', right: '-20px', top: '40%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(15,15,30,0.9)', backdropFilter:'blur(12px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
          </button>
        </div>
          );
        })()}

        {/* Ver todos CTA */}
        {(activeTab === 'live' || activeTab === 'async') && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={onCatalogClick}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.8rem 2rem', fontSize: '0.9rem', fontWeight: 700,
              color: 'rgba(255,255,255,0.75)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '0.75rem', cursor: 'pointer', transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
            }}
          >
            <span>Ver todos los cursos</span>
            <ArrowRight size={16} />
          </button>
        </div>
        )}

        {/* Corporate Training Content */}
        {activeTab === 'corporate' && (
          <>
            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
              {corporateMetrics.map((metric, index) => (
                <div key={index}
                  style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${metric.color}`, borderRadius: '1rem', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: '44px', height: '44px', margin: '0 auto 0.75rem', background: `${metric.color}18`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <metric.icon size={22} color={metric.color} />
                  </div>
                  <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.25rem', letterSpacing: '-0.03em' }}>{metric.number}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {/* Benefits */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {corporateBenefits.map((benefit, index) => (
                  <div key={index}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid #0077FF', borderRadius: '0.75rem', transition: 'all 0.25s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,119,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <benefit.icon size={20} color="#0077FF" />
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{benefit.text}</p>
                  </div>
                ))}
              </div>

              {/* Visual + CTA */}
              <div>
                <div style={{ width: '100%', height: '280px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem', position: 'relative', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&auto=format&q=80"
                    alt="Equipo de trabajo en capacitación corporativa"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { const t = e.target as HTMLImageElement; t.style.display='none'; }}
                  />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(10,10,18,0.2) 0%,rgba(10,10,18,0.6) 100%)'}}/>
                </div>
                <button onClick={onCorporateCTA}
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg,#0066FF,#0044CC)', border: '1px solid rgba(0,102,255,0.4)', borderRadius: '0.75rem', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,102,255,0.35)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,102,255,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,102,255,0.35)'; }}
                >
                  <span>Habla con Ventas</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Success Cases */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF', textAlign: 'center', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                Casos de Éxito{' '}
                <span style={{ background: 'linear-gradient(90deg,#00F7EF,#0077FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Reales</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {successCases.map((case_, index) => (
                  <div key={index}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,247,239,0.3)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,247,239,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>{case_.company}</h4>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{case_.industry}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>Duración</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00F7EF' }}>{case_.duration}</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem' }}>
                        <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Desafío:</strong> {case_.challenge}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                        <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Solución:</strong> {case_.solution}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                      {case_.results.map((result, resultIndex) => (
                        <div key={resultIndex} style={{ textAlign: 'center', padding: '0.65rem', background: 'rgba(0,247,239,0.06)', border: '1px solid rgba(0,247,239,0.12)', borderRadius: '0.5rem' }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#00F7EF', marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>{result.metric}</div>
                          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.3 }}>{result.label}</div>
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
