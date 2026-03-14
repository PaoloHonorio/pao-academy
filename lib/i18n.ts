export type Lang = "es" | "en";
export const THEMES = ["euro","aurora","saffron","sapphire","coral","emerald","amethyst"] as const;
export type Theme = typeof THEMES[number];

export const copy: Record<Lang, Record<string, string>> = {
  es: {
    brandTagline: "Formando personas que transforman empresas",
    heroTitle: "Formación práctica que acelera tu carrera",
    heroSubtitle: "Desarrollá habilidades reales, aplicá lo que aprendés y destacate en el mercado laboral. Clases en vivo con mentores expertos y proyectos que suman a tu portfolio.",
    heroDesc: "Clases en vivo y cursos asincrónicos que convierten el aprendizaje en resultados: más experiencia, más confianza, más oportunidades.",
    knowMore: "Ver curso",
    viewCatalog: "Ver catálogo completo",
    bullet1: "Mentores que aplican lo que enseñan",
    bullet2: "Proyectos reales y metodologías prácticas",
    bullet3: "Certificación que potencia tu perfil profesional",

    sectionPrograms: "Programas que transforman equipos y carreras",
    sectionProgramsDesc: "Formación práctica, mentores expertos y proyectos reales. Sin teorías vacías.",
    filterLabel: "Filtrar:",
    searchPlaceholder: "Buscar cursos (ej.: liderazgo, Power BI)",
    featured: "Cursos destacados",
    featuredDesc: "Descubrí los programas que mejor se adapten a tus objetivos profesionales.",
    nextCohort: "Próx. cohorte",

    whatTheySay: "Lo que dicen nuestros alumnos",
    companiesTrust: "Empresas que confían",
    satisfaction: "Satisfacción",
    students: "estudiantes",
    live: "EN VIVO",
    commercial: "Comercial",
    leadership: "Liderazgo",
    mindset: "Mindset",
    branding: "Branding",
    data: "Datos",
    productivity: "Productividad",
    companies: "Empresas",

    faq: "Preguntas frecuentes",
    q1: "¿Las clases son en vivo o grabadas?",
    a1: "Trabajamos con modalidad mixta: encuentros en vivo + contenido on-demand para reforzar y practicar.",
    q2: "¿Entregan certificación?",
    a2: "Sí, al completar los requisitos de cada programa emitimos un certificado digital verificable.",
    q3: "¿Ofrecen planes para empresas?",
    a3: "Sí, armamos cohortes in-company con objetivos y contenidos personalizados por área.",

    // Contact (clásico)
    contactTitle: "Conversemos tu objetivo",
    contactDesc: "Contanos qué querés lograr y te proponemos el programa ideal para vos o tu equipo.",
    name: "Nombre",
    email: "Email",
    interest: "Interés",
    interestPH: "Ej.: Ventas Consultivas, Ruta Power BI, etc.",
    message: "Mensaje",
    messagePH: "Dejanos tu consulta",
    writeOnWhatsApp: "Escribir por WhatsApp",
    callMe: "Quiero que me llamen",
    speak: "¡Hablemos!",
    contactLead: "Dejanos tus datos y te contactamos con más info sobre",

    // Contact (pro – formulario nuevo)
    contactTitlePro: "Impulsa tu carrera con programas avalados",
    contactDescPro: "Dejanos tu consulta y te proponemos el programa ideal para vos o tu equipo.",
    privacy: "Datos protegidos y soporte humano.",
    responseTime: "Respondemos en menos de 24 horas.",
    phonePH: "Teléfono",
    send: "Enviar",
    consentNote: "Al enviar, aceptás ser contactado para coordinar la mejor propuesta.",

    notFound: "No encontramos cursos para esa búsqueda. Probá con otro término o quitá el filtro.",
    catalog: "Catálogo",
    contact: "Contacto",
    paths: "Rutas",
    langLabel: "Idioma",
    themeLabel: "Tema",
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    close: "Cerrar",
    rights: "Todos los derechos reservados.",
    all: "Todos",
    learnMoreAbout: "Saber más sobre",

    // Header menu
    home: "Inicio",
    liveCourses: "Cursos en vivo",
    liveNow: "Cursos en vivo",
    viewAllCourses: "Ver todos los cursos",
    asyncCourses: "Cursos asincrónicos",
    areas: "Áreas",
    aboutUs: "Sobre nosotros",
    enrollNow: "Inscribite ahora",

    // Hero additional content
    whatsappCTA: "Hablar por WhatsApp",
    urgencyText: "CURSOS Y DIPLOMATURAS CON CERTIFICACIÓN UNIVERSITARIA",
    octoberStarts: "Inicios Octubre",
    microCopy: "Becas disponibles · Sin costo de inscripción inicial",
    microCopyDate: "Solo hasta fecha definida",

    // Live Courses Section
    liveCoursesTitle: "Programas en vivo que transforman tu carrera",
    liveCoursesDesc: "Aprendé junto a mentores que aplican lo que enseñan y llevá cada concepto directo a tu trabajo real.",
    seeFullCatalog: "Ver catálogo completo de cursos en vivo",
    wantToKnowMore: "Quiero saber más",

    // Paths (rutas)
    learningPaths: "Rutas de aprendizaje (Formación continua)",
    learningPathsDesc: "Diseñadas para avanzar por etapas y asegurar adopción real en el día a día.",
    wantThisPath: "Quiero esta ruta",

    // Course details
    salesConsultativeTitle: "Ventas Consultivas",
    salesConsultativeDesc: "Aprendé a detectar oportunidades y cerrar con técnicas modernas de prospección y discovery.",
    agileLeadershipTitle: "Liderazgo Ágil",
    agileLeadershipDesc: "Potenciá equipos de alto rendimiento con dinámicas ágiles, feedback constante y prácticas efectivas.",
    motivationHabitsTitle: "Motivación y Hábitos",
    motivationHabitsDesc: "Diseñá rutinas y sistemas que sostengan tu productividad y eleven tu mentalidad a otro nivel.",
    personalBrandTitle: "Marca Personal",
    personalBrandDesc: "Construí tu narrativa, aumentá tu visibilidad y diferenciá tu perfil en el mercado profesional.",
    powerBITitle: "Power BI desde Cero",
    powerBIDesc: "Transformá datos en decisiones con dashboards, métricas y reportes que generan impacto real.",
    dataAnalyticsTitle: "Data Analytics Bootcamp",
    dataAnalyticsDesc: "Domina SQL, ETL y métricas de negocio end-to-end para resolver problemas con analítica aplicada.",

    // Course recommendations
    alsoInterested: "También te puede interesar",
    relatedCourses: "Cursos relacionados en",
    topRecommended: "Top recomendados por estudiantes de",

    // Async Courses Section
    asyncCoursesTitle: "Cursos a tu ritmo, cuando quieras",
    asyncCoursesDesc: "Formación práctica grabada para avanzar de forma flexible y potenciar tu perfil.",
    exploreAsyncCourses: "Explorar cursos a tu ritmo",
    price: "Precio",
    aiPowered: "Con IA",

    // Corporate Training Section
    corporateTitle: "Formación a medida para empresas",
    corporateDesc: "Programas in-company diseñados para potenciar a tus equipos en ventas, liderazgo, datos y más.",
    corporateBullet1: "Diagnóstico inicial de necesidades",
    corporateBullet2: "Capacitación personalizada con mentores expertos",
    corporateBullet3: "Resultados medibles en el desempeño de los equipos",
    corporateCTA: "Solicitar propuesta para mi empresa",

    // Training Options Section
    optionsTitle: "Elegí la mejor opción para potenciar tu vida profesional",
    liveProgramsTitle: "Programas en Vivo",
    liveProgramsDesc: "Aprendé junto a mentores, con cohortes y proyectos reales.",
    liveProgramsCTA: "Ver todos los programas en vivo",
    asyncCoursesCTA: "Explorar cursos asincrónicos",
    corporateTrainingTitle: "Formación In-Company",
    corporateTrainingDesc: "Capacitaciones diseñadas a medida para empresas y equipos.",
    corporateTrainingCTA: "Solicitar propuesta corporativa",

    // Benefits Section
    benefitsTitle: "¿Por qué estudiar con nosotros?",
    benefit1Title: "Clases dinámicas y aplicables",
    benefit1Desc: "Aprendizaje conectado al mundo real y a tus desafíos profesionales.",
    benefit2Title: "Certificaciones con impacto",
    benefit2Desc: "Sumá avales que fortalecen tu perfil y abren puertas laborales.",
    benefit3Title: "Comunidad internacional",
    benefit3Desc: "Conectá con mentores y alumnos de distintos países y sectores.",
    benefit4Title: "Acceso desde cualquier dispositivo",
    benefit4Desc: "Formate en vivo o a tu ritmo, desde donde quieras.",
    benefit5Title: "Mentores expertos en la industria",
    benefit5Desc: "Aprendé de profesionales que aplican lo que enseñan en empresas reales.",
    benefit6Title: "Proyectos aplicables a tu trabajo",
    benefit6Desc: "No solo teoría: trabajás con casos reales y salís con experiencia práctica.",
    benefit7Title: "Enfoque en empleabilidad",
    benefit7Desc: "Todo lo que aprendas está orientado a mejorar tu perfil y oportunidades laborales.",
    benefit8Title: "Acompañamiento personalizado",
    benefit8Desc: "Soporte humano real para resolver dudas y guiarte en tu proceso.",
    benefit9Title: "Metodología ágil y flexible",
    benefit9Desc: "Estudiá en vivo, on-demand o en formato mixto, según tu disponibilidad.",
    benefit10Title: "Programas avalados por instituciones y empresas",
    benefit10Desc: "Reforzá tu credibilidad con formación reconocida.",

    // Newsletter Section
    newsletterTitle: "Suscribite para recibir becas y novedades",
    newsletterDesc: "Accedé a ofertas exclusivas, becas disponibles y las últimas actualizaciones de nuestros programas.",
    newsletterPlaceholder: "Tu email",
    newsletterButton: "Suscribirme",
    newsletterSuccess: "¡Gracias! Te mantendremos al tanto de las novedades.",

    // Footer sections
    footerContact: "Contacto",
    footerContactEmail: "contacto@glomind360.com",
    footerContactWhatsApp: "WhatsApp: (+54) 351-760-1441",
    footerSocialMedia: "Redes sociales: LinkedIn · Instagram · YouTube",
    footerLegal: "Legales",
    footerPrivacyPolicy: "Políticas de privacidad",
    footerTermsConditions: "Términos y condiciones",
    footerWithdrawalButton: "Botón de arrepentimiento",
    newsletterClose: "Cerrar",
  },

  en: {
    brandTagline: "Live and online training to transform your future",
    heroTitle: "Practical training that accelerates your career",
    heroSubtitle: "Develop real skills, apply what you learn, and stand out in the job market. Live classes with expert mentors and projects that add to your portfolio.",
    heroDesc: "Live classes and asynchronous courses that turn learning into results: more experience, more confidence, more opportunities.",
    knowMore: "View course",
    viewCatalog: "View complete catalog",
    bullet1: "Mentors who apply what they teach",
    bullet2: "Real projects and practical methodologies",
    bullet3: "Certification that boosts your professional profile",

    sectionPrograms: "Programs that transform teams and careers",
    sectionProgramsDesc: "Practical training, expert mentors and real projects. No fluff.",
    filterLabel: "Filter:",
    searchPlaceholder: "Search courses (e.g., leadership, Power BI)",
    featured: "Featured courses",
    featuredDesc: "Discover the programs that best fit your professional goals.",
    nextCohort: "Next cohort",

    whatTheySay: "What our students say",
    companiesTrust: "Trusted by companies",
    satisfaction: "Satisfaction",
    students: "students",
    live: "LIVE",
    commercial: "Commercial",
    leadership: "Leadership",
    mindset: "Mindset",
    branding: "Branding",
    data: "Data",
    productivity: "Productivity",
    companies: "Companies",

    faq: "FAQ",
    q1: "Are classes live or recorded?",
    a1: "We use a mixed format: live sessions + on-demand content to reinforce and practice.",
    q2: "Do you provide certification?",
    a2: "Yes, upon completing the program requirements we issue a verifiable digital certificate.",
    q3: "Do you offer plans for companies?",
    a3: "Yes, we run in-company cohorts with objectives and content tailored to each area.",

    // Contact (classic)
    contactTitle: "Let’s talk about your goal",
    contactDesc: "Tell us what you want to achieve and we’ll propose the ideal program for you or your team.",
    name: "Name",
    email: "Email",
    interest: "Interest",
    interestPH: "e.g., Consultative Sales, Power BI Path, etc.",
    message: "Message",
    messagePH: "Tell us your context",
    writeOnWhatsApp: "Write on WhatsApp",
    callMe: "Call me",
    speak: "Let’s talk!",
    contactLead: "Leave your details and we’ll reach out with more info about",

    // Contact (pro – new form)
    contactTitlePro: "Boost your career with endorsed programs",
    contactDescPro: "Share your context and we’ll recommend the best program for you or your team.",
    privacy: "Data protected and human support.",
    responseTime: "We reply within 24 hours.",
    phonePH: "Phone",
    send: "Send",
    consentNote: "By submitting, you agree to be contacted to coordinate the best proposal.",

    notFound: "No courses match your search. Try another term or remove the filter.",
    catalog: "Catalog",
    contact: "Contact",
    paths: "Paths",
    langLabel: "Language",
    themeLabel: "Theme",
    skip: "Skip to content",
    openMenu: "Open menu",
    close: "Close",
    rights: "All rights reserved.",
    all: "All",
    learnMoreAbout: "Learn more about",

    // Header menu
    home: "Home",
    liveCourses: "Live courses",
    liveNow: "Live courses",
    viewAllCourses: "View all courses",
    asyncCourses: "Asynchronous courses",
    areas: "Areas",
    aboutUs: "About us",
    enrollNow: "Enroll now",

    // Hero additional content
    whatsappCTA: "Talk on WhatsApp",
    urgencyText: "COURSES AND DIPLOMAS WITH UNIVERSITY CERTIFICATION",
    octoberStarts: "October starts",
    microCopy: "Scholarships available · No initial enrollment fee",
    microCopyDate: "Only until defined date",

    // Live Courses Section
    liveCoursesTitle: "Live programs that transform your career",
    liveCoursesDesc: "Learn alongside mentors who apply what they teach and take every concept directly to your real work.",
    seeFullCatalog: "View complete live courses catalog",
    wantToKnowMore: "I want to know more",

    // Paths (routes)
    learningPaths: "Learning paths (Continuous training)",
    learningPathsDesc: "Designed to progress in stages and ensure real adoption day-to-day.",
    wantThisPath: "I want this path",

    // Course details
    salesConsultativeTitle: "Consultative Sales",
    salesConsultativeDesc: "Learn to detect opportunities and close with modern prospecting and discovery techniques.",
    agileLeadershipTitle: "Agile Leadership",
    agileLeadershipDesc: "Empower high-performance teams with agile dynamics, constant feedback and effective practices.",
    motivationHabitsTitle: "Motivation & Habits",
    motivationHabitsDesc: "Design routines and systems that sustain your productivity and elevate your mindset to another level.",
    personalBrandTitle: "Personal Branding",
    personalBrandDesc: "Build your narrative, increase your visibility and differentiate your profile in the professional market.",
    powerBITitle: "Power BI from Zero",
    powerBIDesc: "Transform data into decisions with dashboards, metrics and reports that generate real impact.",
    dataAnalyticsTitle: "Data Analytics Bootcamp",
    dataAnalyticsDesc: "Master SQL, ETL and end-to-end business metrics to solve problems with applied analytics.",

    // Course recommendations
    alsoInterested: "You might also be interested in",
    relatedCourses: "Related courses in",
    topRecommended: "Top recommended by students of",

    // Async Courses Section
    asyncCoursesTitle: "Courses at your own pace, whenever you want",
    asyncCoursesDesc: "Practical recorded training to advance flexibly and boost your profile.",
    exploreAsyncCourses: "Explore courses at your own pace",
    price: "Price",
    aiPowered: "With AI",

    // Corporate Training Section
    corporateTitle: "Custom training for companies",
    corporateDesc: "In-company programs designed to empower your teams in sales, leadership, data and more.",
    corporateBullet1: "Initial needs assessment",
    corporateBullet2: "Personalized training with expert mentors",
    corporateBullet3: "Measurable results in team performance",
    corporateCTA: "Request proposal for my company",

    // Training Options Section
    optionsTitle: "Choose the best option to boost your professional life",
    liveProgramsTitle: "Live Programs",
    liveProgramsDesc: "Learn with mentors, with cohorts and real projects.",
    liveProgramsCTA: "See all live programs",
    asyncCoursesCTA: "Explore asynchronous courses",
    corporateTrainingTitle: "In-Company Training",
    corporateTrainingDesc: "Custom training designed for companies and teams.",
    corporateTrainingCTA: "Request corporate proposal",

    // Benefits Section
    benefitsTitle: "Why study with us?",
    benefit1Title: "Dynamic and applicable classes",
    benefit1Desc: "Learning connected to the real world and your professional challenges.",
    benefit2Title: "Impactful certifications",
    benefit2Desc: "Add credentials that strengthen your profile and open job opportunities.",
    benefit3Title: "International community",
    benefit3Desc: "Connect with mentors and students from different countries and sectors.",
    benefit4Title: "Access from any device",
    benefit4Desc: "Train live or at your own pace, from anywhere.",
    benefit5Title: "Industry expert mentors",
    benefit5Desc: "Learn from professionals who apply what they teach in real companies.",
    benefit6Title: "Projects applicable to your work",
    benefit6Desc: "Not just theory: work with real cases and come out with practical experience.",
    benefit7Title: "Focus on employability",
    benefit7Desc: "Everything you learn is oriented to improve your profile and job opportunities.",
    benefit8Title: "Personalized support",
    benefit8Desc: "Real human support to resolve doubts and guide you in your process.",
    benefit9Title: "Agile and flexible methodology",
    benefit9Desc: "Study live, on-demand or in mixed format, according to your availability.",
    benefit10Title: "Programs endorsed by institutions and companies",
    benefit10Desc: "Strengthen your credibility with recognized training.",

    // Newsletter Section
    newsletterTitle: "Subscribe to receive scholarships and news",
    newsletterDesc: "Access exclusive offers, available scholarships and the latest updates on our programs.",
    newsletterPlaceholder: "Your email",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Thank you! We'll keep you updated with the latest news.",

    // Footer sections
    footerContact: "Contact",
    footerContactEmail: "contacto@glomind360.com",
    footerContactWhatsApp: "WhatsApp: (+54) 351-760-1441",
    footerSocialMedia: "Social media: LinkedIn · Instagram · YouTube",
    footerLegal: "Legal",
    footerPrivacyPolicy: "Privacy policy",
    footerTermsConditions: "Terms and conditions",
    footerWithdrawalButton: "Withdrawal button",
    newsletterClose: "Close",
  },
};

export function translateTag(tag: string){
  switch(tag){
    case "Comercial": return "Commercial";
    case "Liderazgo": return "Leadership";
    case "Datos": return "Data";
    case "Mindset": return "Mindset";
    case "Branding": return "Branding";
    case "Productividad": return "Productivity";
    default: return tag;
  }
}

export const cursosBase = [
  { id: "ventas360", tag: "Comercial", image: "/ventas-consultivas.webp", es: { titulo: "Ventas Consultivas", duracion: "6 semanas", modalidad: "En vivo + mentoría", inicio: "Febrero 2026" }, en: { titulo: "Consultative Sales", duracion: "6 weeks", modalidad: "Live + mentorship", inicio: "February 2026" } },
  { id: "liderazgo", tag: "Liderazgo", image: "/liderazgo-agil.webp", es: { titulo: "Liderazgo Ágil", duracion: "5 semanas", modalidad: "En vivo", inicio: "Febrero 2026" }, en: { titulo: "Agile Leadership", duracion: "5 weeks", modalidad: "Live", inicio: "February 2026" } },
  { id: "habitos", tag: "Mindset", image: "/motivacion-habitos.webp", es: { titulo: "Motivación y Hábitos", duracion: "3 semanas", modalidad: "En vivo + sesiones", inicio: "Febrero 2026" }, en: { titulo: "Motivation & Habits", duracion: "3 weeks", modalidad: "Live + sessions", inicio: "February 2026" } },
  { id: "marcaPro", tag: "Branding", image: "/marca-personal.webp", es: { titulo: "Marca Personal", duracion: "4 semanas", modalidad: "En vivo + proyecto", inicio: "Febrero 2026" }, en: { titulo: "Personal Branding", duracion: "4 weeks", modalidad: "Live + project", inicio: "February 2026" } },
  { id: "powerbi", tag: "Datos", image: "/powerbi-desde-cero.webp", es: { titulo: "Power BI desde Cero", duracion: "6 semanas", modalidad: "En vivo + práctica", inicio: "Febrero 2026" }, en: { titulo: "Power BI from Zero", duracion: "6 weeks", modalidad: "Live + practice", inicio: "February 2026" } },
  { id: "analytics", tag: "Datos", image: "/data-analytics.webp", es: { titulo: "Data Analytics Bootcamp", duracion: "8 semanas", modalidad: "En vivo intensivo", inicio: "Febrero 2026" }, en: { titulo: "Data Analytics Bootcamp", duracion: "8 weeks", modalidad: "Live intensive", inicio: "February 2026" } },
] as const;

export const featureText = {
  es: {
    ventas: { title: "Ventas Consultivas", desc: "Prospección, discovery y cierres con playbooks accionables.", tag: "Comercial" },
    marca: { title: "Marca Personal", desc: "Narrativa, contenido y visibilidad para generar demanda.", tag: "Branding" },
    habitos: { title: "Motivación y Hábitos", desc: "Productividad, mentalidad y sistemas que sostienen resultados.", tag: "Mindset" },
    liderazgo: { title: "Liderazgo Ágil", desc: "Equipos de alto rendimiento, feedback y rituales efectivos.", tag: "Liderazgo" },
    powerbi: { title: "Power BI desde Cero", desc: "Modelado, DAX y dashboards que impulsan decisiones.", tag: "Datos" },
    analytics: { title: "Data Analytics Bootcamp", desc: "SQL, ETL, métricas y analítica de negocio end-to-end.", tag: "Datos" },
    datasci: { title: "Intro a Data Science", desc: "Python, notebooks y modelos básicos para casos reales.", tag: "Datos" },
  },
  en: {
    ventas: { title: "Consultative Sales", desc: "Prospecting, discovery and closing with actionable playbooks.", tag: "Commercial" },
    marca: { title: "Personal Branding", desc: "Narrative, content and visibility to generate demand.", tag: "Branding" },
    habitos: { title: "Motivation & Habits", desc: "Productivity, mindset and systems that sustain results.", tag: "Mindset" },
    liderazgo: { title: "Agile Leadership", desc: "High-performance teams, feedback and effective rituals.", tag: "Leadership" },
    powerbi: { title: "Power BI from Zero", desc: "Modeling, DAX and dashboards that drive decisions.", tag: "Data" },
    analytics: { title: "Data Analytics Bootcamp", desc: "SQL, ETL, metrics and end-to-end business analytics.", tag: "Data" },
    datasci: { title: "Intro to Data Science", desc: "Python, notebooks and basic models for real cases.", tag: "Data" },
  },
} as const;

// Microcursos asincrónicos
export const microcursos = [
  // Análisis de Datos
  { 
    id: "excel-pro", 
    categoria: "📊 Análisis de Datos", 
    precio: 29, 
    conIA: false,
    es: { titulo: "Excel Pro desde Cero", desc: "La herramienta esencial para cualquier empleo administrativo o analítico." },
    en: { titulo: "Excel Pro from Zero", desc: "The essential tool for any administrative or analytical job." }
  },
  { 
    id: "powerbi-express", 
    categoria: "📊 Análisis de Datos",
    precio: 39, 
    conIA: false,
    es: { titulo: "Power BI Express", desc: "Crea dashboards en minutos y convertí datos en decisiones." },
    en: { titulo: "Power BI Express", desc: "Create dashboards in minutes and turn data into decisions." }
  },

  // Gestión de Procesos
  { 
    id: "notion-productividad", 
    categoria: "⚙️ Gestión de Procesos", 
    precio: 24, 
    conIA: false,
    es: { titulo: "Notion para la Productividad", desc: "Organizá proyectos y tu vida laboral en un solo espacio." },
    en: { titulo: "Notion for Productivity", desc: "Organize projects and your work life in one space." }
  },
  { 
    id: "trello-asana", 
    categoria: "⚙️ Gestión de Procesos", 
    precio: 27, 
    conIA: false,
    es: { titulo: "Trello & Asana Ágil", desc: "Gestioná equipos y tareas con metodologías modernas." },
    en: { titulo: "Agile Trello & Asana", desc: "Manage teams and tasks with modern methodologies." }
  },

  // Negocios y Finanzas
  { 
    id: "finanzas-smart", 
    categoria: "💼 Negocios y Finanzas", 
    precio: 32, 
    conIA: false,
    es: { titulo: "Finanzas Smart", desc: "Organizá tus ingresos y gastos con técnicas simples." },
    en: { titulo: "Smart Finance", desc: "Organize your income and expenses with simple techniques." }
  },
  { 
    id: "excel-finanzas", 
    categoria: "💼 Negocios y Finanzas", 
    precio: 29, 
    conIA: false,
    es: { titulo: "Excel para Finanzas", desc: "Controlá presupuestos y números como un profesional." },
    en: { titulo: "Excel for Finance", desc: "Control budgets and numbers like a professional." }
  },
  { 
    id: "inversiones-principiantes", 
    categoria: "💼 Negocios y Finanzas", 
    precio: 35, 
    conIA: false,
    es: { titulo: "Inversiones para Principiantes", desc: "Dá tus primeros pasos en el mundo de la inversión." },
    en: { titulo: "Investments for Beginners", desc: "Take your first steps in the world of investment." }
  },
  { 
    id: "contabilidad-sin-complicaciones", 
    categoria: "💼 Negocios y Finanzas", 
    precio: 28, 
    conIA: false,
    es: { titulo: "Contabilidad Sin Complicaciones", desc: "Entendé balances y conceptos clave sin ser contador." },
    en: { titulo: "Accounting Without Complications", desc: "Understand balance sheets and key concepts without being an accountant." }
  },

  // Mindset y Desarrollo Personal
  { 
    id: "productividad-10x", 
    categoria: "🧠 Mindset y Desarrollo Personal", 
    precio: 34, 
    conIA: false,
    es: { titulo: "Productividad 10X", desc: "Diseñá rutinas que multipliquen tus resultados diarios." },
    en: { titulo: "10X Productivity", desc: "Design routines that multiply your daily results." }
  },
  { 
    id: "comunicacion-asertiva", 
    categoria: "🧠 Mindset y Desarrollo Personal", 
    precio: 31, 
    conIA: false,
    es: { titulo: "Comunicación Asertiva", desc: "Mejorá cómo transmitís tus ideas y generá impacto." },
    en: { titulo: "Assertive Communication", desc: "Improve how you convey your ideas and generate impact." }
  },

  // Tech
  { 
    id: "python-desde-cero", 
    categoria: "💻 Tech", 
    precio: 45, 
    conIA: false,
    es: { titulo: "Python desde Cero", desc: "Aprendé el lenguaje más popular del mercado laboral." },
    en: { titulo: "Python from Zero", desc: "Learn the most popular language in the job market." }
  },
  { 
    id: "ia-generativa", 
    categoria: "💻 Tech", 
    precio: 38, 
    conIA: true,
    es: { titulo: "IA Generativa para Todos", desc: "Aplicá inteligencia artificial en tu trabajo sin programar." },
    en: { titulo: "Generative AI for Everyone", desc: "Apply artificial intelligence in your work without programming." }
  },

  // Marketing Digital y Comunicación
  { 
    id: "marketing-digital-express", 
    categoria: "📢 Marketing Digital y Comunicación", 
    precio: 33, 
    conIA: false,
    es: { titulo: "Marketing Digital Express", desc: "Conocé las bases del marketing que usan las empresas." },
    en: { titulo: "Digital Marketing Express", desc: "Learn the marketing foundations that companies use." }
  },
  { 
    id: "redes-sociales-pro", 
    categoria: "📢 Marketing Digital y Comunicación", 
    precio: 36, 
    conIA: false,
    es: { titulo: "Redes Sociales Pro", desc: "Hacé crecer un negocio con estrategias en Instagram y Facebook." },
    en: { titulo: "Social Media Pro", desc: "Grow a business with Instagram and Facebook strategies." }
  },
  { 
    id: "email-marketing-ia", 
    categoria: "📢 Marketing Digital y Comunicación", 
    precio: 29, 
    conIA: true,
    es: { titulo: "Email Marketing con IA", desc: "Campañas efectivas en minutos con Mailchimp + Inteligencia Artificial." },
    en: { titulo: "Email Marketing with AI", desc: "Effective campaigns in minutes with Mailchimp + Artificial Intelligence." }
  },

  // Diseño y Creatividad
  { 
    id: "diseno-canva", 
    categoria: "🎨 Diseño y Creatividad", 
    precio: 25, 
    conIA: false,
    es: { titulo: "Diseño con Canva", desc: "Creá piezas atractivas sin ser diseñador." },
    en: { titulo: "Design with Canva", desc: "Create attractive pieces without being a designer." }
  },
  { 
    id: "ux-ui-fundamentals", 
    categoria: "🎨 Diseño y Creatividad", 
    precio: 42, 
    conIA: false,
    es: { titulo: "UX/UI Fundamentals", desc: "Los secretos del diseño digital centrado en el usuario." },
    en: { titulo: "UX/UI Fundamentals", desc: "The secrets of user-centered digital design." }
  },
  { 
    id: "photoshop-start", 
    categoria: "🎨 Diseño y Creatividad", 
    precio: 37, 
    conIA: false,
    es: { titulo: "Photoshop Start", desc: "Domina la edición de imágenes desde cero." },
    en: { titulo: "Photoshop Start", desc: "Master image editing from scratch." }
  },

  // Ventas y Customer Experience
  { 
    id: "ventas-101", 
    categoria: "🤝 Ventas y Customer Experience", 
    precio: 30, 
    conIA: false,
    es: { titulo: "Ventas 101", desc: "Aprendé las técnicas básicas para cerrar más negocios." },
    en: { titulo: "Sales 101", desc: "Learn the basic techniques to close more deals." }
  },
  { 
    id: "atencion-cliente-5star", 
    categoria: "🤝 Ventas y Customer Experience", 
    precio: 26, 
    conIA: false,
    es: { titulo: "Atención al Cliente 5⭐", desc: "Ofrecé experiencias memorables que fidelizan." },
    en: { titulo: "5⭐ Customer Service", desc: "Offer memorable experiences that build loyalty." }
  },
  { 
    id: "objeciones-bajo-control", 
    categoria: "🤝 Ventas y Customer Experience", 
    precio: 28, 
    conIA: false,
    es: { titulo: "Objeciones bajo Control", desc: "Responde con seguridad y convertí un \"no\" en oportunidad." },
    en: { titulo: "Objections Under Control", desc: "Respond with confidence and turn a \"no\" into an opportunity." }
  },

  // Soft Skills Profesionales
  { 
    id: "comunicacion-efectiva-pro", 
    categoria: "👩‍💻 Soft Skills Profesionales", 
    precio: 32, 
    conIA: false,
    es: { titulo: "Comunicación Efectiva Pro", desc: "Hablá con claridad y convencé en cualquier contexto." },
    en: { titulo: "Effective Communication Pro", desc: "Speak clearly and convince in any context." }
  },
  { 
    id: "presentaciones-impacto", 
    categoria: "👩‍💻 Soft Skills Profesionales", 
    precio: 29, 
    conIA: false,
    es: { titulo: "Presentaciones de Impacto", desc: "Creá exposiciones que cautiven y convenzan." },
    en: { titulo: "Impact Presentations", desc: "Create presentations that captivate and convince." }
  },
  { 
    id: "trabajo-equipo-remoto", 
    categoria: "👩‍💻 Soft Skills Profesionales", 
    precio: 27, 
    conIA: false,
    es: { titulo: "Trabajo en Equipo Remoto", desc: "Colaborá eficazmente desde cualquier lugar del mundo." },
    en: { titulo: "Remote Teamwork", desc: "Collaborate effectively from anywhere in the world." }
  },

  // Marca Personal y Creación de Contenido con IA
  { 
    id: "marca-personal-360", 
    categoria: "🌟 Marca Personal y Creación de Contenido con IA", 
    precio: 40, 
    conIA: true,
    es: { titulo: "Tu Marca Personal 360", desc: "Definí tu identidad profesional y diferenciá tu perfil." },
    en: { titulo: "Your 360 Personal Brand", desc: "Define your professional identity and differentiate your profile." }
  },
  { 
    id: "contenido-redes-ia", 
    categoria: "🌟 Marca Personal y Creación de Contenido con IA", 
    precio: 35, 
    conIA: true,
    es: { titulo: "Contenido para Redes con IA", desc: "Generá copies, guiones y diseños con Inteligencia Artificial." },
    en: { titulo: "Social Media Content with AI", desc: "Generate copies, scripts and designs with Artificial Intelligence." }
  },
  { 
    id: "linkedin-pro-ia", 
    categoria: "🌟 Marca Personal y Creación de Contenido con IA", 
    precio: 31, 
    conIA: true,
    es: { titulo: "LinkedIn Pro con IA", desc: "Optimizá tu perfil y publicaciones para empleabilidad." },
    en: { titulo: "LinkedIn Pro with AI", desc: "Optimize your profile and posts for employability." }
  },
  { 
    id: "reels-shorts-ia", 
    categoria: "🌟 Marca Personal y Creación de Contenido con IA", 
    precio: 33, 
    conIA: true,
    es: { titulo: "Reels y Shorts con IA", desc: "Crea videos virales con guiones y edición inteligente." },
    en: { titulo: "Reels and Shorts with AI", desc: "Create viral videos with intelligent scripts and editing." }
  },
  { 
    id: "edicion-visual-ia", 
    categoria: "🌟 Marca Personal y Creación de Contenido con IA", 
    precio: 28, 
    conIA: true,
    es: { titulo: "Edición Visual con IA", desc: "Transformá imágenes y videos en piezas profesionales." },
    en: { titulo: "Visual Editing with AI", desc: "Transform images and videos into professional pieces." }
  },
] as const;
