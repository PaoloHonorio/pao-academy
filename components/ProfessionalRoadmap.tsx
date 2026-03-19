'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MessageSquare, BarChart2, Palette, Zap, Shield, Trophy, Award } from 'lucide-react';

const levels = [
  {
    num: 1,
    name: 'Explorador IA',
    module: 'Módulo 1',
    desc: 'Entendés cómo funciona la IA generativa y tomás tus primeras decisiones con ella.',
    strength: 'Pensamiento estratégico frente a la IA',
    icon: Compass,
    color: '#0077FF',
  },
  {
    num: 2,
    name: 'Comunicador IA',
    module: 'Módulo 2',
    desc: 'Dominás la generación de textos y la comunicación con IA.',
    strength: 'Comunicación efectiva y escritura estratégica',
    icon: MessageSquare,
    color: '#0077FF',
    cert: 1,
  },
  {
    num: 3,
    name: 'Analista IA',
    module: 'Módulo 3',
    desc: 'Integrás la IA a planillas, reportes y visualizaciones de datos.',
    strength: 'Pensamiento analítico, gestión inteligente de datos',
    icon: BarChart2,
    color: '#0EA5E9',
  },
  {
    num: 4,
    name: 'Creador Visual IA',
    module: 'Módulo 4',
    desc: 'Usás IA para diseño, imagen y comunicación visual de impacto.',
    strength: 'Comunicación visual, diseño orientado a resultados',
    icon: Palette,
    color: '#0EA5E9',
    cert: 2,
  },
  {
    num: 5,
    name: 'Automatizador IA',
    module: 'Módulo 5',
    desc: 'Diseñás flujos inteligentes y automatizaciones sin programar.',
    strength: 'Visión sistémica, pensamiento en procesos',
    icon: Zap,
    color: '#00F7EF',
  },
  {
    num: 6,
    name: 'Ético Digital',
    module: 'Módulo 6',
    desc: 'Tomás decisiones responsables frente al impacto de la IA.',
    strength: 'Liderazgo responsable, criterio ético',
    icon: Shield,
    color: '#00F7EF',
    cert: 3,
  },
  {
    num: 7,
    name: 'Arquitecto de Soluciones IA',
    module: 'Módulo 7',
    desc: 'Diseñás y presentás soluciones reales con IA ante un comité académico.',
    strength: 'Liderazgo innovador, visión estratégica',
    icon: Trophy,
    color: '#FFD700',
    cert: 4,
  },
];

const certs = [
  {
    id: 1,
    name: 'IA Generativa y Comunicación',
    modules: 'Módulos 1–2',
    hours: '20 h',
    afterLevel: 2,
    color: '#0077FF',
  },
  {
    id: 2,
    name: 'Diseño, Datos y Productividad con IA',
    modules: 'Módulos 3–4',
    hours: '20 h',
    afterLevel: 4,
    color: '#0EA5E9',
  },
  {
    id: 3,
    name: 'Automatización Ética y Flujos Inteligentes',
    modules: 'Módulos 5–6',
    hours: '20 h',
    afterLevel: 6,
    color: '#00F7EF',
  },
  {
    id: 4,
    name: 'Profesional en Inteligencia Artificial en la Práctica',
    modules: 'Módulo 7',
    hours: '10 h + PIN',
    afterLevel: 7,
    color: '#FFD700',
    final: true,
  },
];

export default function ProfessionalRoadmap() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #020817 0%, #050E1F 50%, #020817 100%)',
      padding: '5rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%', width: '40%', height: '40%',
        background: 'radial-gradient(circle, rgba(0,119,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%', width: '40%', height: '40%',
        background: 'radial-gradient(circle, rgba(0,247,239,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @media (max-width: 640px) {
          .roadmap-central-line { left: 1.5rem !important; transform: none !important; }
          .roadmap-row { flex-direction: column !important; align-items: flex-start !important; padding-left: 3.5rem !important; margin-bottom: 1.25rem !important; }
          .roadmap-node { position: absolute !important; left: 0 !important; top: 0.5rem !important; transform: none !important; width: 2.5rem !important; height: 2.5rem !important; }
          .roadmap-left-slot, .roadmap-right-slot { flex: none !important; opacity: 1 !important; visibility: visible !important; padding: 0 !important; justify-content: flex-start !important; width: 100% !important; }
        }
      `}</style>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            background: 'rgba(0,119,255,0.12)',
            border: '1px solid rgba(0,119,255,0.3)',
            color: '#0077FF',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Método Glomind360
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Tu mapa de evolución profesional
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Tu crecimiento no es solo académico. Es evolutivo, estratégico y humano.
            <br />
            <em style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.95rem' }}>
              &ldquo;No enseñamos herramientas. Despertamos capacidades.&rdquo;
            </em>
          </p>
        </div>

        {/* Roadmap */}
        <div style={{ position: 'relative' }}>

          {/* Central glowing line */}
          <div className="roadmap-central-line" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(180deg, #0077FF 0%, #00F7EF 40%, #00F7EF 70%, #FFD700 100%)',
            opacity: 0.25,
          }} />

          {levels.map((level, i) => {
            const isLeft = i % 2 === 0;
            const Icon = level.icon;
            const cert = certs.find(c => c.afterLevel === level.num);

            return (
              <React.Fragment key={level.num}>
                {/* Level node row */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="roadmap-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0,
                    marginBottom: cert ? '0' : '2rem',
                    position: 'relative',
                  }}>
                  {/* Left card */}
                  <div className="roadmap-left-slot" style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '2rem',
                    opacity: isLeft ? 1 : 0,
                    visibility: isLeft ? 'visible' : 'hidden',
                  }}>
                    {isLeft && <LevelCard level={level} Icon={Icon} />}
                  </div>

                  {/* Center node */}
                  <div className="roadmap-node" style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: `${level.color}18`,
                    border: `2px solid ${level.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 0 16px ${level.color}55`,
                    zIndex: 2,
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: level.color }}>
                      {level.num}
                    </span>
                  </div>

                  {/* Right card */}
                  <div className="roadmap-right-slot" style={{
                    flex: 1,
                    paddingLeft: '2rem',
                    opacity: !isLeft ? 1 : 0,
                    visibility: !isLeft ? 'visible' : 'hidden',
                  }}>
                    {!isLeft && <LevelCard level={level} Icon={Icon} />}
                  </div>
                </motion.div>

                {/* Connector to cert or next node */}
                {cert && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0.75rem 0',
                  }}>
                    <div style={{
                      width: '2px',
                      height: '1.5rem',
                      background: `linear-gradient(180deg, ${level.color}60, ${cert.color}60)`,
                    }} />
                  </div>
                )}

                {/* Certificate banner */}
                {cert && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                  <div style={{
                    marginBottom: '2rem',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    border: `1px solid ${cert.color}30`,
                    background: cert.final
                      ? `linear-gradient(135deg, #1A1300 0%, #0F172A 100%)`
                      : `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0.02) 100%)`,
                    backdropFilter: 'blur(8px)',
                  }}>
                    {/* Top accent bar */}
                    <div style={{
                      height: '3px',
                      background: cert.final
                        ? 'linear-gradient(90deg, #FFD700, #FFA500)'
                        : `linear-gradient(90deg, ${cert.color}, ${cert.color}44)`,
                    }} />

                    <div style={{
                      padding: '1.25rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                    }}>
                      {/* Icon */}
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '0.75rem',
                        background: cert.final ? 'rgba(255,215,0,0.12)' : `${cert.color}15`,
                        border: `1px solid ${cert.final ? 'rgba(255,215,0,0.3)' : cert.color + '40'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Award size={20} color={cert.color} />
                      </div>

                      {/* Text */}
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: cert.color,
                          marginBottom: '0.2rem',
                          opacity: 0.85,
                        }}>
                          {cert.final ? '★ Certificado Final' : `Certificado ${cert.id}`}
                          {cert.final && ' · Con aval universitario'}
                        </div>
                        <div style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                        }}>
                          {cert.name}
                        </div>
                      </div>

                      {/* Hours badge */}
                      <div style={{
                        textAlign: 'center',
                        flexShrink: 0,
                      }}>
                        <div style={{
                          fontSize: '1.1rem',
                          fontWeight: 900,
                          color: cert.color,
                          lineHeight: 1,
                        }}>
                          {cert.hours}
                        </div>
                        <div style={{
                          fontSize: '0.65rem',
                          color: 'rgba(255,255,255,0.35)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginTop: '0.2rem',
                        }}>
                          {cert.modules}
                        </div>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Footer total */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 900,
            background: 'linear-gradient(90deg, #0077FF, #00F7EF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
          }}>
            70 horas certificables
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.9rem',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            4 certificados acumulativos + Proyecto Integrador Final.
            Estándar de Certificación Profesional Internacional (mín. 60 h).
          </p>
        </div>

      </div>
    </section>
  );
}

function LevelCard({ level, Icon }: { level: typeof levels[0]; Icon: React.ElementType }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${level.color}22`,
      borderRadius: '0.875rem',
      padding: '1rem 1.25rem',
      maxWidth: '340px',
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
        <div style={{
          width: '1.75rem',
          height: '1.75rem',
          borderRadius: '0.5rem',
          background: `${level.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={14} color={level.color} />
        </div>
        <div>
          <div style={{
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontWeight: 600,
          }}>
            Nivel {level.num} · {level.module}
          </div>
          <div style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: level.color,
            lineHeight: 1.2,
          }}>
            {level.name}
          </div>
        </div>
      </div>
      <p style={{
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.5)',
        lineHeight: 1.5,
        margin: 0,
      }}>
        {level.desc}
      </p>
      <p style={{
        fontSize: '0.72rem',
        color: level.color,
        opacity: 0.7,
        fontWeight: 600,
        marginTop: '0.4rem',
        marginBottom: 0,
      }}>
        ↗ {level.strength}
      </p>
    </div>
  );
}
