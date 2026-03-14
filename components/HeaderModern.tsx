'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Globe, GraduationCap, BookOpen, Users, Phone, ChevronRight, ChevronDown, Video, FileText, Menu, LogIn, UserPlus } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { createClient } from '@/lib/supabase/client';

export default function HeaderModern({
  brandName,
  onClickCTA,
  t,
  lang,
  setLang,
  promoMessage = "40% OFF en cursos y formaciones",
  promoSubMessage = "¡Aprovecha esta oferta limitada!",
  showPromoBar = true,
}: {
  brandName: string;
  onClickCTA: () => void;
  t: (k: string) => string;
  lang?: 'es' | 'en';
  setLang?: (lang: 'es' | 'en') => void;
  promoMessage?: string;
  promoSubMessage?: string;
  showPromoBar?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPromo, setShowPromo] = useState(showPromoBar);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileNestedOpen, setMobileNestedOpen] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [liveCourses, setLiveCourses] = useState<{ name: string; tag: string; href: string }[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        // Supabase not configured yet
        setUser(null);
      }
      setLoadingUser(false);
    };
    checkUser();
  }, []);

  // Fetch courses from database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('courses')
          .select('title, slug, category')
          .eq('is_published', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (!error && data) {
          const categoryToTag: Record<string, string> = {
            'Ventas': 'Comercial',
            'Liderazgo': 'Liderazgo',
            'Marketing': 'Branding',
            'Productividad': 'Datos',
            'Datos': 'Datos',
            'Mindset': 'Mindset',
          };
          setLiveCourses(data.map((c: any) => ({
            name: c.title,
            tag: categoryToTag[c.category] || c.category || 'General',
            href: `/cursos/${c.slug}`,
          })));
        }
      } catch (err) {
        // Supabase not configured yet
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : orig || '';
    return () => { document.body.style.overflow = orig; };
  }, [open]);

  // Use courses from database, or fallback to empty
  const liveCoursesList = liveCourses.length > 0 ? liveCourses : [];

  const asyncCoursesCategories: { name: string; href: string; tag?: string }[] = [
    { name: '📊 Análisis de Datos', href: 'https://wa.me/5493517601441?text=¡Hola! Me interesa información sobre cursos de Análisis de Datos asincrónicos.' },
    { name: '💼 Negocios y Finanzas', href: 'https://wa.me/5493517601441?text=¡Hola! Me interesa información sobre cursos de Negocios y Finanzas asincrónicos.' },
    { name: '⚙️ Gestión de Procesos', href: 'https://wa.me/5493517601441?text=¡Hola! Me interesa información sobre cursos de Gestión de Procesos asincrónicos.' },
    { name: '🚀 Desarrollo Personal', href: 'https://wa.me/5493517601441?text=¡Hola! Me interesa información sobre cursos de Desarrollo Personal asincrónicos.' },
    { name: '💻 Tecnología', href: 'https://wa.me/5493517601441?text=¡Hola! Me interesa información sobre cursos de Tecnología asincrónicos.' },
    { name: '📱 Marketing Digital', href: 'https://wa.me/5493517601441?text=¡Hola! Me interesa información sobre cursos de Marketing Digital asincrónicos.' },
  ];

  const coursesSubmenu = [
    {
      label: t('liveCourses'),
      icon: Video,
      description: 'Clases en vivo con mentores',
      nestedItems: liveCoursesList
    },
    {
      label: t('asyncCourses'),
      icon: FileText,
      description: 'Aprende a tu ritmo',
      nestedItems: asyncCoursesCategories
    },
  ];

  return (
    <>
      {/* Barra de Promoción */}
      {showPromo && (
        <div className="fixed top-0 left-0 right-0 z-[1001]" style={{background:'linear-gradient(90deg,#F97316,#EA580C)'}}>
          <div className="max-w-7xl mx-auto px-4 py-2.5 relative">
            <div className="flex items-center justify-center gap-3">
              <span className="font-bold text-xs sm:text-sm text-white">
                🔥 {promoMessage}
              </span>
              <span className="hidden sm:inline text-xs sm:text-sm text-white/90">
                {promoSubMessage}
              </span>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Cerrar promoción"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed ${showPromo ? 'top-[42px]' : 'top-0'} left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-200 shadow-md' : 'bg-transparent border-b border-white/10'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-all group-hover:shadow-xl" style={{
                background: 'linear-gradient(135deg, #0077FF, #00F7EF)',
                boxShadow: '0 4px 6px -1px rgba(0, 119, 255, 0.3)'
              }}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-lg leading-none block ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  {brandName}
                </span>
                <span className={`text-xs leading-none ${scrolled ? 'text-gray-500' : 'text-white/60'}`}>{t('brandTagline')}</span>
              </div>
            </a>

            {/* Desktop Navigation con shadcn NavigationMenu */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {/* Inicio */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#inicio"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                  >
                    {t('home')}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Cursos - Con Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent data-[state=open]:bg-transparent ${scrolled ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    Cursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {coursesSubmenu.map((category, idx) => (
                          <div key={idx} className="space-y-3">
                            <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                              <category.icon className="w-5 h-5 text-blue-600" />
                              <div>
                                <div className="font-semibold text-gray-900">{category.label}</div>
                                <div className="text-xs text-gray-500">{category.description}</div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              {category.nestedItems.map((course, courseIdx) => (
                                <NavigationMenuLink
                                  key={courseIdx}
                                  href={course.href}
                                  target={course.href.includes('wa.me') ? '_blank' : undefined}
                                  rel={course.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                                  className="block px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                        {course.name}
                                      </div>
                                      {course.tag && (
                                        <div className="text-xs text-gray-500">{course.tag}</div>
                                      )}
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                                  </div>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contacto */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="https://wa.me/5493517601441?text=¡Hola! Me interesa recibir más información sobre los cursos de GLOMIND360."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                  >
                    {t('contact')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {setLang && (
                <button
                  onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                  aria-label="Change language"
                >
                  <Globe className={`w-4 h-4 ${scrolled ? 'text-gray-600' : 'text-white/70'}`} />
                  <span className={`text-sm font-semibold ${scrolled ? 'text-gray-900' : 'text-white'}`}>{lang?.toUpperCase()}</span>
                </button>
              )}

              {/* Auth buttons */}
              {!loadingUser && (
                user ? (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-blue-500 bg-blue-50 hover:bg-blue-100 transition-all duration-200 text-blue-600 text-sm font-medium"
                  >
                    <Users className="w-4 h-4" />
                    Mi Panel
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all duration-200 text-sm font-medium ${scrolled ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700' : 'border-white/20 hover:border-white/40 text-white/80 hover:bg-white/10'}`}
                    >
                      <LogIn className="w-4 h-4" />
                      Ingresar
                    </Link>
                    <Link
                      href="/registro"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 text-white text-sm font-semibold" style={{background:'linear-gradient(90deg,#0077FF,#005FCC)'}}
                    >
                      <UserPlus className="w-4 h-4" />
                      Registrarse
                    </Link>
                  </>
                )
              )}
            </div>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[1100] ${
          open ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#0077FF,#00F7EF)'}}>
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg">{brandName}</h2>
              <p className="text-gray-500 text-sm">Academia Profesional</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {/* Inicio */}
          <a
            href="#inicio"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all text-gray-900"
            onClick={() => setOpen(false)}
          >
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{t('home')}</span>
          </a>

          {/* Cursos con submenu */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-all text-gray-900"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Cursos</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileCoursesOpen && (
              <div className="ml-4 space-y-1 mt-2">
                {coursesSubmenu.map((subitem, subIndex) => (
                  <div key={subIndex} className="space-y-1">
                    <button
                      onClick={() => setMobileNestedOpen(mobileNestedOpen === subitem.label ? null : subitem.label)}
                      className="w-full flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <subitem.icon className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div className="flex-1 text-left">
                        <div className="text-gray-900 font-semibold text-sm">
                          {subitem.label}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          {subitem.description}
                        </div>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${mobileNestedOpen === subitem.label ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileNestedOpen === subitem.label && (
                      <div className="ml-6 space-y-1 mt-1">
                        {subitem.nestedItems.map((course, courseIndex) => (
                          <a
                            key={courseIndex}
                            href={course.href}
                            target={course.href.includes('wa.me') ? '_blank' : undefined}
                            rel={course.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all"
                            onClick={() => {
                              if (!course.href.includes('wa.me')) {
                                setOpen(false);
                                setMobileCoursesOpen(false);
                                setMobileNestedOpen(null);
                              }
                            }}
                          >
                            <div className="flex-1">
                              <div className="text-gray-900 text-sm font-medium">
                                {course.name}
                              </div>
                              {course.tag && (
                                <div className="text-gray-500 text-xs">
                                  {course.tag}
                                </div>
                              )}
                            </div>
                            <ChevronRight className="w-3 h-3 text-gray-400" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contacto */}
          <a
            href="https://wa.me/5493517601441?text=¡Hola! Me interesa recibir más información sobre los cursos de GLOMIND360."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all text-gray-900"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{t('contact')}</span>
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white space-y-3">
          {/* Auth buttons mobile */}
          {!loadingUser && (
            user ? (
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold"
              >
                <Users className="w-4 h-4" />
                Mi Panel
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all text-gray-700 font-medium"
                >
                  <LogIn className="w-4 h-4" />
                  Ingresar
                </Link>
                <Link
                  href="/registro"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all text-white font-semibold" style={{background:'linear-gradient(90deg,#0077FF,#005FCC)'}}
                >
                  <UserPlus className="w-4 h-4" />
                  Registrarse
                </Link>
              </div>
            )
          )}

          {setLang && (
            <button
              onClick={() => {
                setLang(lang === 'es' ? 'en' : 'es');
                setOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900 font-medium">
                {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[1050] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
