'use client';
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Phone, User, Mail, BookOpen, Check, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  defaultCourse?: string;
  onSuccess?: () => void;
  lang?: 'es' | 'en';
};

type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  country?: string;
  course: string;
  motivation: string;
  referralCode?: string | null;
};

const PROGRAMAS_EN_VIVO = [
  'Ventas Consultivas',
  'Liderazgo Ágil',
  'Motivación y Hábitos',
  'Marca Personal',
  'Power BI desde Cero',
  'Data Analytics Bootcamp',
];

const PROGRAMAS_ASYNC = [
  'Excel Pro desde Cero',
  'Power BI Express',
  'Notion para la Productividad',
  'Trello & Asana Ágil',
  'Finanzas Smart',
  'Excel para Finanzas',
  'Inversiones para Principiantes',
  'Contabilidad Sin Complicaciones',
  'Productividad 10X',
  'Comunicación Asertiva',
  'Python desde Cero',
  'IA Generativa para Todos',
  'Marketing Digital Express',
  'Redes Sociales Pro',
  'Email Marketing con IA',
  'Diseño con Canva',
  'UX/UI Fundamentals',
  'Photoshop Start',
  'Ventas 101',
  'Atención al Cliente 5⭐',
  'Objeciones bajo Control',
  'Comunicación Efectiva Pro',
  'Presentaciones de Impacto',
  'Trabajo en Equipo Remoto',
  'Tu Marca Personal 360',
  'Contenido para Redes con IA',
  'LinkedIn Pro con IA',
  'Reels y Shorts con IA',
  'Edición Visual con IA',
];

const MOTIVACIONES = [
  'Quiero cambiar de trabajo',
  'Quiero ascender en mi empresa',
  'Quiero emprender',
  'Mi empresa me lo pidió',
  'Quiero aprender algo nuevo',
];

const GENERIC_COURSES = ['programas', 'programs', 'formación corporativa', ''];

// Prefijos telefónicos por país
const PHONE_PREFIXES: Record<string, string> = {
  AR: '+54', MX: '+52', CO: '+57', PE: '+51',
  CL: '+56', UY: '+598', BR: '+55', US: '+1',
  ES: '+34', BO: '+591', PY: '+595', EC: '+593',
};

type FieldStatus = 'idle' | 'valid' | 'invalid';

export default function ReservationForm({ defaultCourse, onSuccess, lang = 'es' }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+54');
  const [course, setCourse] = useState(defaultCourse || '');
  const [motivation, setMotivation] = useState('');
  const [country, setCountry] = useState('AR');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isGeneric = GENERIC_COURSES.includes((defaultCourse || '').toLowerCase());

  useEffect(() => {
    if (defaultCourse && !GENERIC_COURSES.includes(defaultCourse.toLowerCase())) {
      setCourse(defaultCourse);
    } else {
      setCourse('');
    }
  }, [defaultCourse]);

  // Auto-detectar país por IP
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data.country_code) {
          setCountry(data.country_code);
          const prefix = PHONE_PREFIXES[data.country_code];
          if (prefix) setPhonePrefix(prefix);
        }
      })
      .catch(() => {}); // silencioso si falla
  }, []);

  const validateField = useCallback((field: string, value: string): { error: string | null; status: FieldStatus } => {
    switch (field) {
      case 'name':
        if (!value.trim()) return { error: null, status: 'idle' };
        if (value.trim().length < 2) return { error: 'Mínimo 2 caracteres', status: 'invalid' };
        return { error: null, status: 'valid' };
      case 'email':
        if (!value.trim()) return { error: null, status: 'idle' };
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { error: 'Email inválido', status: 'invalid' };
        return { error: null, status: 'valid' };
      case 'phone':
        if (!value.trim()) return { error: null, status: 'idle' };
        if (!/^[\d\s\-]{6,15}$/.test(value.trim())) return { error: 'Teléfono inválido', status: 'invalid' };
        return { error: null, status: 'valid' };
      default:
        return { error: null, status: 'idle' };
    }
  }, []);

  const nameV = useMemo(() => validateField('name', name), [name, validateField]);
  const emailV = useMemo(() => validateField('email', email), [email, validateField]);
  const phoneV = useMemo(() => validateField('phone', phone), [phone, validateField]);

  const isValid = useMemo(() => {
    return nameV.status === 'valid' &&
      emailV.status === 'valid' &&
      phoneV.status === 'valid' &&
      course.trim().length >= 2 &&
      motivation.length > 0;
  }, [nameV.status, emailV.status, phoneV.status, course, motivation]);

  const handleBlur = (field: string) => setTouched(prev => ({ ...prev, [field]: true }));

  const courseError = touched.course && !course ? 'Seleccioná un programa' : null;
  const motivationError = touched.motivation && !motivation.trim() ? 'Este campo es obligatorio' : null;

  const getFieldClasses = (field: string, validation: { status: FieldStatus }) => {
    const base = 'input-modern input-with-icon transition-all duration-200';
    if (!touched[field]) return base;
    if (validation.status === 'valid') return `${base} border-green-500 focus:border-green-500 focus:ring-green-500/20`;
    if (validation.status === 'invalid') return `${base} border-red-500 focus:border-red-500 focus:ring-red-500/20`;
    return base;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, course: true, motivation: true });
    if (!isValid) return;

    setLoading(true);
    setError(null);

    try {
      const referralCode = typeof window !== 'undefined'
        ? (localStorage.getItem('ref_code') || sessionStorage.getItem('ref_code'))
        : null;

      const payload: ReservationPayload = {
        name,
        email,
        phone: `${phonePrefix} ${phone}`,
        country,
        course,
        motivation,
        referralCode,
      };

      const res = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Error al enviar el formulario');
      setOk(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err?.message || 'Error al enviar el formulario');
    } finally {
      setLoading(false);
    }
  }

  if (ok) {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">¡Reserva recibida!</h3>
        <p className="text-[var(--text-secondary)]">Te contactamos en menos de 24hs para confirmar tu lugar.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

      {/* Nombre */}
      <div>
        <div className="input-group relative">
          <User className="input-icon" />
          <input
            className={getFieldClasses('name', nameV)}
            placeholder="Nombre y Apellido"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
          />
          {touched.name && nameV.status === 'valid' && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
          )}
        </div>
        {touched.name && nameV.error && (
          <p className="text-red-500 text-xs mt-1">{nameV.error}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <div className="input-group relative">
          <Mail className="input-icon" />
          <input
            type="email"
            className={getFieldClasses('email', emailV)}
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
          />
          {touched.email && emailV.status === 'valid' && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
          )}
        </div>
        {touched.email && emailV.error && (
          <p className="text-red-500 text-xs mt-1">{emailV.error}</p>
        )}
      </div>

      {/* Teléfono con prefijo */}
      <div>
        <div className="relative flex gap-2 items-center">
          <div className="relative flex-shrink-0 flex items-center gap-1 border border-[#E2E8F0] rounded-lg bg-white px-3" style={{ height: '44px' }}>
            <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <select
              value={phonePrefix}
              onChange={e => setPhonePrefix(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '0.875rem',
                color: '#0F172A',
                background: 'transparent',
                cursor: 'pointer',
                width: '58px',
              }}
            >
              {Object.entries(PHONE_PREFIXES).map(([code, prefix]) => (
                <option key={code} value={prefix}>{prefix}</option>
              ))}
            </select>
          </div>
          <div className="relative flex-1">
            <input
              type="tel"
              className={getFieldClasses('phone', phoneV).replace('input-with-icon', 'input-modern')}
              placeholder="Número de teléfono"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onBlur={() => handleBlur('phone')}
            />
            {touched.phone && phoneV.status === 'valid' && (
              <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>
        {touched.phone && phoneV.error && (
          <p className="text-red-500 text-xs mt-1">{phoneV.error}</p>
        )}
      </div>

      {/* Programa */}
      {isGeneric ? (
        <div>
          <Select value={course} onValueChange={val => { setCourse(val); handleBlur('course'); }}>
            <SelectTrigger className={`select-trigger-modern h-11 w-full ${courseError ? 'border-red-500' : ''}`}>
              <div className="flex items-center gap-2 w-full overflow-hidden">
                <BookOpen className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-sm truncate text-slate-500">
                  {course || 'Seleccioná un programa'}
                </span>
              </div>
            </SelectTrigger>
            <SelectContent className="select-content-modern max-h-72">
              {PROGRAMAS_EN_VIVO.map(p => (
                <SelectItem key={p} value={p} className="select-item-modern">{p}</SelectItem>
              ))}
              <SelectItem value="Formación Corporativa" className="select-item-modern">Formación Corporativa</SelectItem>
            </SelectContent>
          </Select>
          {courseError && <p className="text-red-500 text-xs mt-1">{courseError}</p>}
        </div>
      ) : (
        <div className="input-group relative">
          <BookOpen className="input-icon" />
          <input
            className="input-modern input-with-icon bg-slate-50"
            value={course}
            readOnly
            style={{ cursor: 'default', color: '#475569' }}
          />
        </div>
      )}

      {/* ¿Por qué te interesa? */}
      <div>
        <textarea
          className={`input-modern resize-none py-3 ${motivationError ? 'border-red-500' : ''}`}
          rows={4}
          placeholder="¿Qué esperás aplicar de este programa en tu desarrollo profesional?"
          value={motivation}
          onChange={e => setMotivation(e.target.value)}
          onBlur={() => handleBlur('motivation')}
          style={{ minHeight: '100px' }}
        />
        {motivationError && <p className="text-red-500 text-xs mt-1">{motivationError}</p>}
      </div>

      {error && (
        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg" role="alert">{error}</div>
      )}

      <button
        type="submit"
        disabled={!isValid || loading}
        className="btn-primary w-full h-12 text-base"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          'Reservar mi lugar'
        )}
      </button>
    </form>
  );
}
