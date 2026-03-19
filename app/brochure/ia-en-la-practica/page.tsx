'use client';
import React from 'react';

// ─── PALETTE (matches website) ───────────────────────────────────────────────
const C = {
  bg: '#020817',
  bgCard: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.08)',
  blue: '#0077FF',
  aqua: '#00F7EF',
  gold: '#F59E0B',
  white: '#FFFFFF',
  muted: 'rgba(255,255,255,0.5)',
  faint: 'rgba(255,255,255,0.25)',
  ghost: 'rgba(255,255,255,0.08)',
};

// ─── A4 PAGE SHELL ────────────────────────────────────────────────────────────
function Page({ children, accent = C.blue }: { children: React.ReactNode; accent?: string }) {
  return (
    <div style={{
      width: '794px', height: '1123px',
      background: C.bg, color: C.white,
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      position: 'relative', overflow: 'hidden',
      flexShrink: 0,
      pageBreakAfter: 'always', breakAfter: 'page',
    }}>
      {/* Left accent */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: accent }} />
      {/* Content */}
      <div style={{ padding: '44px 52px 36px 56px', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        {children}
      </div>
    </div>
  );
}

// ─── SHARED ───────────────────────────────────────────────────────────────────
function Label({ text }: { text: string }) {
  return (
    <div style={{
      display: 'inline-block', marginBottom: '10px',
      padding: '2px 10px', borderRadius: '3px',
      background: 'rgba(0,119,255,0.12)', border: '1px solid rgba(0,119,255,0.3)',
      fontSize: '8px', fontWeight: 700, letterSpacing: '1.8px',
      textTransform: 'uppercase' as const, color: C.blue,
    }}>{text}</div>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1.05, margin: '0 0 10px', letterSpacing: '-0.5px' }}>{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: '24px', fontWeight: 900, lineHeight: 1.15, margin: '0 0 6px' }}>{children}</h2>;
}

function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ fontSize: '11px', color: C.muted, lineHeight: 1.75, margin: 0, ...style }}>{children}</p>;
}

function Rule() {
  return <div style={{ height: '1px', background: C.border, margin: '16px 0' }} />;
}

function Foot({ n, total = 7 }: { n: number; total?: number }) {
  return (
    <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '2px', color: C.blue }}>GLOMIND360</span>
      <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)' }}>Inteligencia Artificial en la Práctica · {n}/{total}</span>
    </div>
  );
}

// ─── PAGE 1: COVER ────────────────────────────────────────────────────────────
function Cover() {
  return (
    <Page accent={`linear-gradient(180deg, ${C.blue} 0%, ${C.aqua} 100%)`}>
      {/* Top rule */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${C.blue}, ${C.aqua})` }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px' }}>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '3px', color: C.blue }}>GLOMIND360</div>
          <div style={{ fontSize: '8px', color: C.faint, letterSpacing: '1px', marginTop: '2px' }}>EDUCACIÓN EJECUTIVA DIGITAL</div>
        </div>
        <div style={{ padding: '4px 12px', borderRadius: '3px', border: `1px solid rgba(245,158,11,0.4)`, background: 'rgba(245,158,11,0.07)', fontSize: '8px', fontWeight: 700, color: C.gold, letterSpacing: '1px' }}>
          AVAL UNIVERSITARIO · UNC
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2.5px', color: C.blue, textTransform: 'uppercase' as const, marginBottom: '18px' }}>
          Programa Profesional · Online en Vivo · 2025
        </div>
        <H1>
          Inteligencia<br />Artificial en<br />
          <span style={{ color: C.blue }}>la Práctica</span>
        </H1>
        <Body style={{ maxWidth: '420px', marginTop: '12px', marginBottom: '36px' }}>
          El programa más completo de LATAM para dominar la IA generativa sin saber programar. 7 módulos, 13 encuentros en vivo y 4 certificados acumulativos con aval universitario.
        </Body>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '36px' }}>
          {[['70 h', 'Certificables'], ['13', 'Encuentros en vivo'], ['4', 'Certificados'], ['7', 'Módulos']].map(([v, l], i) => (
            <div key={i} style={{ padding: '12px 18px', borderRadius: '6px', border: `1px solid ${C.border}`, background: C.bgCard, textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: C.white, lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: '8px', color: C.faint, marginTop: '4px', letterSpacing: '0.5px' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Cert strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
          {[
            { n: '01', label: 'IA Generativa y Comunicación', h: '20 h', final: false },
            { n: '02', label: 'Diseño, Datos y Productividad', h: '20 h', final: false },
            { n: '03', label: 'Automatización y Ética IA', h: '20 h', final: false },
            { n: '★', label: 'Proyecto Integrador Final', h: '10 h + def.', final: true },
          ].map((c, i) => (
            <div key={i} style={{
              padding: '10px 12px', borderRadius: '5px',
              borderTop: `2px solid ${c.final ? C.gold : C.blue}`,
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderTopWidth: '2px', borderTopColor: c.final ? C.gold : C.blue,
              borderTopStyle: 'solid',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: c.final ? C.gold : C.blue, marginBottom: '4px' }}>{c.n}</div>
              <div style={{ fontSize: '9.5px', fontWeight: 700, color: C.white, lineHeight: 1.35 }}>{c.label}</div>
              <div style={{ fontSize: '8px', color: C.faint, marginTop: '4px' }}>{c.h}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: `1px solid ${C.border}` }}>
        <span style={{ fontSize: '8px', color: C.faint }}>glomind360.com</span>
        <span style={{ fontSize: '8px', color: C.faint }}>Universidad Nacional de Córdoba · FCEFyN</span>
      </div>
    </Page>
  );
}

// ─── PAGE 2: ABOUT + FOR WHOM ─────────────────────────────────────────────────
function PageAbout() {
  return (
    <Page>
      <Label text="El programa" />
      <H2>Diseñado para transformar<br />tu trabajo con IA</H2>
      <Body style={{ maxWidth: '500px', marginBottom: '18px', marginTop: '4px' }}>
        No es un curso de herramientas. Es un programa de evolución profesional donde cada módulo te convierte en una versión más capaz, estratégica y valiosa en el mercado laboral.
      </Body>
      <Rule />

      {/* Chars */}
      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', color: C.faint, textTransform: 'uppercase' as const, marginBottom: '8px' }}>Características generales</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px', marginBottom: '20px' }}>
        {[['Modalidad', 'Online en vivo'], ['Duración', '3 meses'], ['Encuentros', '13 en vivo'], ['Dedicación', '~5 h / semana']].map(([l, v], i) => (
          <div key={i} style={{ padding: '11px 13px', borderRadius: '5px', border: `1px solid rgba(0,119,255,0.2)`, background: 'rgba(0,119,255,0.04)' }}>
            <div style={{ fontSize: '7.5px', color: C.faint, letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: '5px' }}>{l}</div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: C.white }}>{v}</div>
          </div>
        ))}
      </div>
      <Rule />

      {/* For whom */}
      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', color: C.faint, textTransform: 'uppercase' as const, marginBottom: '8px' }}>¿Para quién es?</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', marginBottom: '18px' }}>
        {[
          ['Profesional en actividad', 'Querés integrar IA a tu trabajo diario sin ser programador.'],
          ['Emprendedor o freelancer', 'Automatizás y escalás tu negocio con menos recursos.'],
          ['Líder o manager', 'Tomás mejores decisiones y liderás equipos en la era digital.'],
          ['Profesional en transición', 'Te diferenciás y accedés a roles mejor remunerados.'],
        ].map(([t, d], i) => (
          <div key={i} style={{ padding: '11px 13px', borderRadius: '5px', border: `1px solid ${C.border}`, background: C.bgCard }}>
            <div style={{ fontSize: '10.5px', fontWeight: 700, color: C.white, marginBottom: '3px' }}>{t}</div>
            <div style={{ fontSize: '9.5px', color: C.muted, lineHeight: 1.6 }}>{d}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '11px 15px', borderRadius: '5px', border: `1px solid ${C.border}`, background: C.bgCard }}>
        <span style={{ fontSize: '10px', color: C.muted, lineHeight: 1.6 }}>
          <span style={{ color: C.blue, fontWeight: 700 }}>Requisito único:</span> PC, tablet o celular. No se requieren conocimientos previos en tecnología ni programación.
        </span>
      </div>

      <Foot n={2} />
    </Page>
  );
}

// ─── PAGE 3: 4 CERTS ─────────────────────────────────────────────────────────
function PageCerts() {
  const items = [
    { n: 1, label: 'IA Generativa y Comunicación', mod: 'Módulos 1–2', h: '20 h', role: 'Especialista IA y Comunicación', outcomes: ['Dominás ChatGPT, Copilot y Gemini con técnica ROCE', 'Generás textos ejecutivos, emails y contenido digital', 'Comunicación estratégica potenciada con IA'] },
    { n: 2, label: 'Diseño, Datos y Productividad', mod: 'Módulos 3–4', h: '20 h', role: 'Analista de Datos con IA', outcomes: ['Analizás datos y generás reportes con IA', 'Creás imágenes, videos y presentaciones con IA', 'Dashboard e insights sin programar'] },
    { n: 3, label: 'Automatización y Ética IA', mod: 'Módulos 5–6', h: '20 h', role: 'Consultor de Automatización IA', outcomes: ['Diseñás flujos inteligentes con Make y Zapier', 'Creás chatbots y asistentes personalizados', 'Marco ético para decisiones responsables con IA'] },
    { n: 4, label: 'Proyecto Integrador Final', mod: 'Módulo 7', h: '10 h + defensa', role: 'Arquitecto de Soluciones IA', outcomes: ['Diseñás una solución real con IA para tu trabajo', 'Presentás ante comité académico calificado', 'Certificado profesional con aval universitario UNC'], final: true },
  ];
  return (
    <Page accent={`linear-gradient(180deg, ${C.blue} 0%, ${C.aqua} 100%)`}>
      <Label text="Certificación progresiva" />
      <H2>4 certificados acumulativos</H2>
      <Body style={{ marginBottom: '16px', marginTop: '4px' }}>Podés salir en cualquier etapa con credencial en mano. Cada bloque certifica un perfil profesional distinto.</Body>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
        {items.map((c) => (
          <div key={c.n} style={{
            borderRadius: '6px', overflow: 'hidden',
            border: `1px solid ${c.final ? `rgba(245,158,11,0.3)` : C.border}`,
            background: c.final ? 'rgba(245,158,11,0.04)' : C.bgCard,
          }}>
            <div style={{ height: '2px', background: c.final ? C.gold : C.blue }} />
            <div style={{ padding: '11px 14px', display: 'grid', gridTemplateColumns: '1fr 110px', gap: '12px', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '1px', color: c.final ? C.gold : C.blue, textTransform: 'uppercase' as const }}>
                    {c.final ? '★ Certificado Final · Con aval UNC' : `Certificado ${c.n} · ${c.mod}`}
                  </span>
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: C.white, marginBottom: '6px' }}>{c.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {c.outcomes.map((o, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: c.final ? C.gold : C.blue, flexShrink: 0 }} />
                      <span style={{ fontSize: '9.5px', color: C.muted }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: 900, color: c.final ? C.gold : C.blue }}>{c.h}</div>
                <div style={{ fontSize: '7.5px', color: C.faint, marginBottom: '6px' }}>certificables</div>
                <div style={{ fontSize: '8.5px', fontWeight: 700, color: c.final ? C.gold : C.blue, lineHeight: 1.4 }}>{c.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '12px', padding: '9px 14px', borderRadius: '5px', border: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: C.faint }}>Certificación Profesional Internacional (estándar mínimo 60 h)</span>
        <span style={{ fontSize: '16px', fontWeight: 900, color: C.blue }}>70 h totales</span>
      </div>

      <Foot n={3} />
    </Page>
  );
}

// ─── PAGE 4: PROGRAM 1 ────────────────────────────────────────────────────────
function PageProg1() {
  const mods = [
    { n: 1, title: 'Introducción a la IA Generativa', dur: '2 encuentros · 6 h', enc: ['E1 — Qué es la IA Generativa', 'E2 — Prompting con Técnica ROCE'] },
    { n: 2, title: 'Generación de Textos y Comunicación', dur: '1 encuentro · 3 h', enc: ['E3 — Comunicación y Textos con IA'] },
    { n: 3, title: 'IA Aplicada a Planillas y Datos', dur: '2 encuentros · 6 h', enc: ['E4 — IA + Planillas y Datos I', 'E5 — Visualización y Power BI con IA'] },
    { n: 4, title: 'Diseño, Imagen y Comunicación Visual', dur: '2 encuentros · 6 h', enc: ['E6 — Diseño Visual e Imagen IA', 'E7 — Video y Comunicación Visual'] },
  ];
  return (
    <Page>
      <Label text="Programa · Parte 1" />
      <H2>Módulos 1 al 4</H2>
      <Body style={{ marginBottom: '16px', marginTop: '4px' }}>Certificados 1 y 2 · 9 encuentros · 30 horas certificables</Body>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {mods.map((m) => (
          <div key={m.n} style={{ borderRadius: '6px', border: `1px solid ${C.border}`, background: C.bgCard, overflow: 'hidden' }}>
            <div style={{ width: '2px', position: 'absolute', display: 'none' }} />
            <div style={{ padding: '11px 14px', borderLeft: `3px solid ${C.blue}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '8.5px', fontWeight: 800, color: C.blue, opacity: 0.7 }}>{String(m.n).padStart(2, '0')}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: C.white }}>{m.title}</span>
                </div>
                <span style={{ fontSize: '8px', color: C.faint, flexShrink: 0 }}>{m.dur}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' as const }}>
                {m.enc.map((e, j) => (
                  <span key={j} style={{ fontSize: '8.5px', padding: '2px 8px', borderRadius: '3px', background: C.ghost, color: C.muted, border: `1px solid ${C.border}` }}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Rule />
      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', color: C.faint, textTransform: 'uppercase' as const, marginBottom: '8px' }}>Se obtienen al finalizar</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { label: 'Certificado 1 · IA Generativa y Comunicación', mod: 'Módulos 1–2', h: '20 h' },
          { label: 'Certificado 2 · Diseño, Datos y Productividad', mod: 'Módulos 3–4', h: '20 h' },
        ].map((c, i) => (
          <div key={i} style={{ padding: '10px 14px', borderRadius: '5px', border: `1px solid rgba(0,119,255,0.25)`, background: 'rgba(0,119,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px' }}>🏅</span>
              <div>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: C.white }}>{c.label}</div>
                <div style={{ fontSize: '8px', color: C.faint }}>{c.mod}</div>
              </div>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 900, color: C.blue }}>{c.h}</span>
          </div>
        ))}
      </div>

      <Foot n={4} />
    </Page>
  );
}

// ─── PAGE 5: PROGRAM 2 ────────────────────────────────────────────────────────
function PageProg2() {
  const mods = [
    { n: 5, title: 'Automatización y Flujos Inteligentes', dur: '2 encuentros · 6 h', enc: ['E8 — Automatización sin Código I', 'E9 — Automatización sin Código II'] },
    { n: 6, title: 'Aspectos Éticos y Responsabilidad Digital', dur: '1 encuentro · 3 h', enc: ['E10 — Ética y Responsabilidad Digital'] },
    { n: 7, title: 'Proyecto Integrador Final (PIN)', dur: '3 encuentros · 10 h + defensa', enc: ['E11 — Diagnóstico y Diseño del Proyecto', 'E12 — Construcción del Proyecto', 'E13 — Defensa ante Comité Académico'] },
  ];
  return (
    <Page>
      <Label text="Programa · Parte 2" />
      <H2>Módulos 5 al 7</H2>
      <Body style={{ marginBottom: '16px', marginTop: '4px' }}>Certificados 3 y Final · 6 encuentros · 40 horas certificables</Body>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {mods.map((m) => (
          <div key={m.n} style={{ borderRadius: '6px', border: `1px solid ${C.border}`, background: C.bgCard, overflow: 'hidden' }}>
            <div style={{ padding: '11px 14px', borderLeft: `3px solid ${m.n === 7 ? C.gold : C.blue}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '8.5px', fontWeight: 800, color: m.n === 7 ? C.gold : C.blue, opacity: 0.8 }}>{String(m.n).padStart(2, '0')}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: C.white }}>{m.title}</span>
                </div>
                <span style={{ fontSize: '8px', color: C.faint, flexShrink: 0 }}>{m.dur}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' as const }}>
                {m.enc.map((e, j) => (
                  <span key={j} style={{ fontSize: '8.5px', padding: '2px 8px', borderRadius: '3px', background: C.ghost, color: C.muted, border: `1px solid ${C.border}` }}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Rule />
      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', color: C.faint, textTransform: 'uppercase' as const, marginBottom: '8px' }}>Se obtienen al finalizar</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { label: 'Certificado 3 · Automatización y Ética IA', mod: 'Módulos 5–6', h: '20 h', gold: false },
          { label: '★ Certificado Final · Profesional en IA en la Práctica', mod: 'Módulo 7 + Defensa · Con aval UNC', h: '10 h+', gold: true },
        ].map((c, i) => (
          <div key={i} style={{
            padding: '10px 14px', borderRadius: '5px',
            border: `1px solid ${c.gold ? 'rgba(245,158,11,0.35)' : 'rgba(0,119,255,0.25)'}`,
            background: c.gold ? 'rgba(245,158,11,0.05)' : 'rgba(0,119,255,0.05)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px' }}>{c.gold ? '🏆' : '🏅'}</span>
              <div>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: C.white }}>{c.label}</div>
                <div style={{ fontSize: '8px', color: C.faint }}>{c.mod}</div>
              </div>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 900, color: c.gold ? C.gold : C.blue }}>{c.h}</span>
          </div>
        ))}
      </div>

      <Foot n={5} />
    </Page>
  );
}

// ─── PAGE 6: SALARIES + METHOD ────────────────────────────────────────────────
function PageSalMethod() {
  return (
    <Page>
      <Label text="Empleabilidad" />
      <H2>El mercado te está esperando</H2>
      <Body style={{ marginBottom: '14px', marginTop: '4px' }}>
        La demanda de profesionales con IA crece un 40% anual en LATAM. Rangos de referencia 2024–2025.
      </Body>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
        {[
          { cert: 'Certificados 1–2', role: 'Especialista IA y Comunicación', range: '$1.200 – $2.500 USD / mes', growth: '+35%', bar: 25 },
          { cert: 'Certificados 3–4', role: 'Analista de Datos con IA', range: '$2.500 – $4.500 USD / mes', growth: '+90%', bar: 50 },
          { cert: 'Certificados 5–6', role: 'Consultor de Automatización IA', range: '$4.000 – $7.000 USD / mes', growth: '+160%', bar: 72 },
          { cert: 'Certificado Final', role: 'Arquitecto de Soluciones IA', range: '$6.000 – $12.000 USD / mes', growth: '+300%', bar: 100 },
        ].map((s, i) => (
          <div key={i} style={{ padding: '10px 14px', borderRadius: '5px', border: `1px solid ${C.border}`, background: C.bgCard }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div>
                <div style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '1px', color: C.blue, textTransform: 'uppercase' as const, marginBottom: '2px' }}>{s.cert}</div>
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: C.white }}>{s.role}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: 900, color: C.white }}>{s.range}</div>
                <div style={{ fontSize: '8px', color: C.blue, fontWeight: 700 }}>{s.growth} crecimiento salarial</div>
              </div>
            </div>
            <div style={{ height: '2px', background: C.ghost, borderRadius: '9999px' }}>
              <div style={{ height: '100%', width: `${s.bar}%`, borderRadius: '9999px', background: `linear-gradient(90deg, ${C.blue}, ${C.aqua})` }} />
            </div>
          </div>
        ))}
      </div>

      <Rule />
      <Label text="Método Glomind360" />
      <div style={{ fontSize: '10px', fontStyle: 'italic', color: C.faint, marginBottom: '10px' }}>"No enseñamos herramientas. Despertamos capacidades."</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
        {[
          ['Andragogía emocional', 'Aprendizaje centrado en la experiencia y el sentido del adulto profesional.'],
          ['Aprendizaje experiencial', 'Teoría, práctica e impacto inmediato en tu trabajo real.'],
          ['Proyectos reales', 'Cada participante trabaja con su propia realidad laboral.'],
          ['Comunidad activa', 'Red de pares y recursos continuos post-certificación.'],
          ['Evaluación por impacto', 'Medimos transformación de resultados, no repetición de contenido.'],
        ].map(([t, d], i) => (
          <div key={i} style={{ padding: '9px 12px', borderRadius: '5px', border: `1px solid ${C.border}`, background: C.bgCard }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: C.white, marginBottom: '2px' }}>{t}</div>
            <div style={{ fontSize: '9px', color: C.muted, lineHeight: 1.55 }}>{d}</div>
          </div>
        ))}
      </div>

      <Foot n={6} />
    </Page>
  );
}

// ─── PAGE 7: CLOSE ────────────────────────────────────────────────────────────
function PageClose() {
  return (
    <Page accent={`linear-gradient(180deg, ${C.blue} 0%, ${C.aqua} 100%)`}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${C.blue}, ${C.aqua})` }} />

      {/* Aval */}
      <div style={{ padding: '14px 18px', borderRadius: '6px', border: `1px solid rgba(245,158,11,0.3)`, background: 'rgba(245,158,11,0.05)', marginBottom: '20px' }}>
        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const, color: C.gold, marginBottom: '4px' }}>Aval universitario</div>
        <div style={{ fontSize: '13px', fontWeight: 800, color: C.white }}>Universidad Nacional de Córdoba</div>
        <div style={{ fontSize: '9px', color: C.muted, marginTop: '2px' }}>Facultad de Ciencias Exactas, Físicas y Naturales · FCEFyN — Una de las más prestigiosas de Latinoamérica</div>
      </div>

      {/* CTA section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px 40px' }}>
        <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2px', color: C.blue, textTransform: 'uppercase' as const, marginBottom: '16px' }}>¿Estás listo/a?</div>
        <div style={{ fontSize: '36px', fontWeight: 900, lineHeight: 1.15, marginBottom: '14px' }}>
          Tu próximo paso<br />empieza <span style={{ color: C.blue }}>hoy</span>
        </div>
        <Body style={{ maxWidth: '360px', marginBottom: '28px' }}>
          +500 profesionales ya transformaron su carrera con Glomind360. Inscribite al próximo ciclo y comenzá tu evolución con IA.
        </Body>

        <div style={{ display: 'inline-block', padding: '12px 36px', borderRadius: '6px', background: `linear-gradient(135deg, ${C.blue}, #0055CC)`, fontSize: '12px', fontWeight: 800, color: C.white, marginBottom: '28px' }}>
          Reservar mi lugar →
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', width: '100%', maxWidth: '380px' }}>
          {[['Web', 'glomind360.com'], ['Email', 'info@glomind360.com'], ['Instagram', '@glomind360']].map(([l, v], i) => (
            <div key={i} style={{ padding: '9px', borderRadius: '5px', textAlign: 'center', border: `1px solid ${C.border}`, background: C.bgCard }}>
              <div style={{ fontSize: '7px', color: C.faint, letterSpacing: '1px', marginBottom: '3px', textTransform: 'uppercase' as const }}>{l}</div>
              <div style={{ fontSize: '9px', fontWeight: 600, color: C.blue }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: `1px solid ${C.border}` }}>
        <span style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '2px', color: C.blue }}>GLOMIND360</span>
        <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)' }}>© 2025 · Todos los derechos reservados</span>
        <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)' }}>7 / 7</span>
      </div>
    </Page>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function BrochurePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: #0D1117 !important; }
        @media print {
          @page { size: A4 portrait; margin: 0; }
          html, body { background: #020817 !important; }
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}} />

      <div className="no-print" style={{
        position: 'fixed', top: '14px', right: '14px', zIndex: 999,
        display: 'flex', gap: '8px', fontFamily: 'Inter, sans-serif',
      }}>
        <button onClick={() => window.print()} style={{
          padding: '7px 16px', borderRadius: '5px',
          background: C.blue, color: '#fff',
          fontWeight: 700, fontSize: '11px', border: 'none', cursor: 'pointer',
        }}>Exportar PDF</button>
        <a href="/cursos/ia-en-la-practica" style={{
          padding: '7px 12px', borderRadius: '5px',
          background: C.bgCard, border: `1px solid ${C.border}`,
          color: C.muted, fontWeight: 600, fontSize: '11px', textDecoration: 'none',
        }}>← Volver</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '52px 0 52px' }}>
        <Cover />
        <PageAbout />
        <PageCerts />
        <PageProg1 />
        <PageProg2 />
        <PageSalMethod />
        <PageClose />
      </div>
    </>
  );
}
