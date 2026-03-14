'use client';
import Image from 'next/image';
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  CheckCircle
} from 'lucide-react';

export default function BenefitsSimple({ t }: { t: (k: string) => string }) {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Mentores expertos',
      desc: 'Aprende de profesionales que aplican lo que enseñan en empresas reales.',
      color: '#0077FF'
    },
    {
      icon: Users,
      title: 'Acompañamiento personalizado',
      desc: 'Soporte humano real para resolver dudas y guiarte en tu proceso.',
      color: '#00F7EF'
    },
    {
      icon: Globe,
      title: 'Comunidad internacional',
      desc: 'Conectá con mentores y alumnos de distintos países y sectores.',
      color: '#00F7EF'
    },
    {
      icon: Award,
      title: 'Certificaciones con impacto',
      desc: 'Sumá avales que fortalecen tu perfil y abren puertas laborales.',
      color: '#0055CC'
    },
  ];

  const highlights = [
    'Clases dinámicas y aplicables al mundo real',
    'Proyectos prácticos con casos reales',
    'Acceso desde cualquier dispositivo',
    'Metodología ágil y flexible'
  ];

  return (
    <section style={{
      background: '#F0F4FF',
      padding: '5rem 1rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>

          {/* Left Column - Image/Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              aspectRatio: '4/3'
            }}>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Estudiantes colaborando en un ambiente de aprendizaje moderno"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ objectFit: 'cover' }}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITFBUWFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEEQA/wDNtO6ouFmhIhxXI6WkqKgFRgSSTz3VH+qul0dqcW4ynL1/aUoTXIqKp//Z"
              />
            </div>

            {/* Floating Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '-1rem',
              background: 'white',
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
              border: '1px solid #E5E7EB'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0077FF, #00F7EF)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={24} color="white" />
                </div>
                <div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#0F172A'
                  }}>
                    +5,000
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#64748B'
                  }}>
                    Estudiantes activos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(0,119,255,0.08)',
                color: '#0077FF',
                border: '1px solid rgba(0,119,255,0.3)',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                <Award size={16} />
                <span>Nuestra Diferencia</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: '900',
                color: '#0F172A',
                marginBottom: '1rem',
                lineHeight: '1.2',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em'
              }}>
                ¿Por qué estudiar con{' '}
                <span style={{background:'rgba(0,119,255,0.12)',color:'#0055CC',fontWeight:800,borderRadius:'6px',padding:'2px 10px'}}>
                  nosotros
                </span>?
              </h2>

              <p style={{
                fontSize: '1.125rem',
                color: '#475569',
                lineHeight: '1.7',
                margin: 0
              }}>
                Formación práctica con mentores expertos que te preparan para los
                desafíos reales del mercado laboral.
              </p>
            </div>

            {/* Benefits List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.75rem',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = benefit.color;
                    e.currentTarget.style.boxShadow = '0 4px 12px -2px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: `${benefit.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <benefit.icon size={22} color={benefit.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#0F172A',
                      marginBottom: '0.25rem'
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748B',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem'
            }}>
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle size={18} color="#0077FF" />
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#475569'
                  }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
