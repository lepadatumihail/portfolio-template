import type { HomeCopy } from "./types";

/**
 * The home page at /es, same shape as lib/home/en.ts and the same facts, in
 * Spain Spanish with «tú» like the other Spanish pages. Keys, numbers and
 * names stay as they are; only the locale formatting changes (500 €, 6,3M+).
 *
 * Every FAQ answer restates something the site already publishes (pricing,
 * process, guarantee, the service pages), so it should say what the es
 * pages say. The process steps, tiers and stats lines follow landingUi.es in
 * lib/landing.ts; change both together. One exception: the clicks figure is
 * «209 mil» here, in the hero and in the counter alike, so the page prints it
 * one way and keeps the rounding of the English 209K; the service pages still
 * print the «209.000» they have always published.
 */
export const homeEs: HomeCopy = {
  lang: "es",

  meta: {
    title: "Desarrollo web, SEO y automatización con IA en Marbella",
    description:
      "Páginas web rápidas, apps y automatizaciones con IA para negocios de Marbella. Online en días, desde 500 € — 6,3M+ impresiones en Google para clientes.",
  },
  og: {
    alt: "example.com — diseño web y automatización con IA en Marbella. Webs rápidas, apps y automatizaciones con IA para negocios de la Costa del Sol.",
    headline: "Webs que te traen clientes.",
    sub: "Diseño web y automatización con IA — Marbella y Costa del Sol",
    foot: "Online en días · desde 500 €",
  },

  hero: {
    availability: "Disponible para nuevos proyectos",
    h1Main: "Webs que te traen",
    h1Accent: "clientes.",
    sub: "Páginas web rápidas, pensadas para salir en Google, y automatizaciones prácticas con IA para negocios de Marbella y la Costa del Sol. Diseñadas, construidas y online en días.",
    cta: "Escríbeme por WhatsApp",
    waMessage: "Hola Alex — me gustaría hablar de un proyecto.",
    seeWork: "Ver proyectos recientes",
  },

  services: {
    chatbotsLink: "Ver automatización de WhatsApp, voz y Meta",
    heading: { title: "Más consultas.", accent: "Menos tareas repetitivas." },
    intro: "Webs que atraen clientes, búsquedas que les ayudan a encontrarte y herramientas que quitan trabajo diario a tu equipo. Diseño y construyo cada una según cómo funciona tu negocio.",
    includes: "Incluye",
    seenIn: "Míralo en",
    items: {
      "web-design": {
        title: "Webs pensadas para recibir consultas",
        summary: "Una propuesta clara, páginas rápidas y un siguiente paso sencillo. Da motivos para elegirte y facilita que tus visitas reserven, pregunten o se pongan en contacto.",
        description:
          "Webs rápidas y con el SEO como base para pequeños negocios — inmobiliarias, clínicas, reformas, restaurantes. Hechas para cargar al instante y convertir visitas en consultas: reservas paso a paso, captación por WhatsApp, reseñas y SEO en varios idiomas.",
        includes: [
          "Landings y webs de empresa completas",
          "Reservas y captación por WhatsApp",
          "Buscador de propiedades sobre un feed en directo",
          "Webs en tres idiomas, cada uno con su propio SEO",
        ],
        price: "desde 500 €",
        linkLabel: "Diseño web en Marbella",
        imageAlt: "Web de Acme Clinic — asistente de reservas y WhatsApp en todas las páginas",
      },
      seo: {
        title: "Que te encuentren en Google y la IA",
        summary: "Aparece donde buscan tus clientes: Google, Maps y respuestas de IA. Trabajo en tus páginas, fichas y configuración técnica para que sea más fácil encontrarte.",
        description:
          "Una puesta a punto que se hace una vez y un servicio mensual opcional, para que tu negocio esté donde miran tus clientes: los resultados de Google, Google Maps y asistentes de IA como ChatGPT. Unas comprobaciones automáticas vigilan los datos; lo que se cambia lo decido yo. Puesta a punto desde 500 €, servicio mensual desde 300 €, sin permanencia.",
        includes: [
          "Dónde estás hoy, en números claros",
          "Ficha de Google Maps creada y al día",
          "Páginas que un asistente de IA puede leer y citar",
          "Comprobaciones automáticas cada mes; los cambios, los decido yo",
        ],
        price: "desde 500 € · 300 €/mes",
        linkLabel: "SEO en Marbella",
        imageAlt: "Web de Atlas Graph",
      },
      "ai-automation": {
        title: "IA para el trabajo que se repite",
        summary: "Convierte PDFs en datos útiles, responde preguntas habituales y prepara la siguiente tarea. Tu equipo aprueba los pasos que necesitan una persona.",
        description:
          "Chatbots que responden a tus clientes, importaciones con IA que convierten PDFs en datos ordenados, agentes que se encargan del trabajo aburrido. Si tu equipo lo hace a mano cada día, lo más probable es que se pueda automatizar.",
        includes: [
          "Chatbots que responden a tus clientes",
          "PDFs y documentos convertidos en datos ordenados",
          "Un agente de IA que responde a partir de tu propia base de datos",
          "Agentes programados que preparan el borrador y esperan tu visto bueno",
        ],
        price: "3.000 €+",
        linkLabel: "Automatización con IA en Marbella",
        imageAlt: "Menu Atelier — la IA lee el PDF de un chef y lo convierte en un plan de menús semanal",
      },
      "app-development": {
        title: "Tu negocio, en un solo espacio",
        summary: "Clientes, reservas, documentos y pagos en un mismo lugar. Un espacio adaptado a tu forma de trabajar, para encontrar lo necesario y seguir avanzando.",
        description:
          "Herramientas internas que a tu equipo le gusta usar de verdad — portales de clientes, motores de reservas, facturación, gestión de expedientes. Construidas de principio a fin: autenticación, pagos, documentos y panel de administración.",
        includes: [
          "Portales de clientes con subida de documentos",
          "Motores de reservas y calendarios de citas",
          "Pagos y suscripciones con Stripe",
          "Un panel de administración para todo el proceso",
        ],
        price: "3.000 €+",
        linkLabel: "Desarrollo de apps en Marbella",
        imageAlt: "Panel de administración de la plataforma consular — expedientes, documentos, citas y facturas",
      },
    },
    sketches: {
      site: {
        business: "Tu negocio",
        headline: "Reserva en dos toques",
        day: "Vie 12",
        party: "2 personas",
        book: "Reservar",
        message: "¿Tenéis hueco el viernes?",
      },
      found: {
        domain: "tunegocio.es",
        result: "Tu negocio — Marbella",
        business: "Tu negocio",
        maps: "Maps",
        open: "Abierto",
        question: "¿Dónde comer cerca del puerto?",
        answerBefore: "Prueba",
        answerAfter: ", abierto ahora.",
      },
      automation: {
        file: "factura.pdf",
        read: "Leído por IA",
        client: "Cliente",
        date: "Fecha",
        dateValue: "12 oct",
        total: "Total",
        totalValue: "240 €",
        saved: "Guardado",
      },
      dashboard: {
        title: "Clientes",
        add: "+ Nuevo",
        rows: [
          { date: "Lun 14", status: "Pagado" },
          { date: "Mar 15", status: "Reservado" },
          { date: "Mié 16", status: "Nuevo" },
        ],
      },
    },
  },

  work: {
    heading: { title: "Proyectos", accent: "seleccionados" },
    imageAlt: "Web de {name}",
    projects: {
      "Northwind CRM": {
        description:
          "CRM para agentes inmobiliarios independientes — cada comprador, vendedor, visita y oferta en una sola ficha de cliente, con seguimientos antes de que un contacto se enfríe.",
        tags: ["SaaS", "Inmobiliario", "2 idiomas"],
      },
      "Bayside Car Rental": {
        description:
          "Alquiler de coches de lujo en Marbella — 57 coches con página propia y consultas por WhatsApp con las fechas ya puestas.",
        tags: ["Alquiler de coches", "5 idiomas", "SEO"],
      },
      "Harbor Homes": {
        description:
          "Portal inmobiliario de lujo para la Costa del Sol — anuncios con filtros, guías de zonas y embudo de valoración en cuatro idiomas.",
        tags: ["Inmobiliario", "4 idiomas", "SEO"],
      },
      "Signal AI": {
        description:
          "Plataforma de análisis cripto con IA — ocho agentes especializados, monederos multicadena y paneles de cartera.",
        tags: ["IA", "SaaS", "Cripto"],
      },
      "Acme Clinic": {
        description:
          "Clínica 24/7 en Marbella — reservas paso a paso, WhatsApp integrado y SEO propio en cada uno de sus tres idiomas.",
        tags: ["Salud", "Reservas", "3 idiomas"],
      },
      "Hillside Living": {
        description:
          "Plataforma inmobiliaria, de construcción y reformas — base de datos de propiedades con buscador y embudos de captación.",
        tags: ["Inmobiliario", "Construcción", "Captación"],
      },
      "Atlas Graph": {
        description:
          "SaaS de inteligencia de mercado con IA sobre el tejido empresarial suizo — agente de chat con IA, base de datos de empresas y suscripciones.",
        tags: ["IA", "SaaS", "4 idiomas"],
      },
      "Signal Labs": {
        description:
          "Monedero inteligente de autocustodia en más de 100 cadenas — copiloto de IA, futuros perpetuos y automatización DeFi. «Abstract the complex».",
        tags: ["Web3", "Fintech", "IA"],
      },
      "Bloom Method": {
        description:
          "Embudo de conversión bilingüe para un curso digital — contenidos gratuitos para captar contactos, testimonios y pago directo.",
        tags: ["E-commerce", "Embudo", "2 idiomas"],
      },
      "Summit Builders": {
        description:
          "Web de captación para una empresa alemana de calefacción y reforma de baños — el proceso explicado paso a paso, galería y contacto por WhatsApp.",
        tags: ["Negocio local", "Reformas", "Captación"],
      },
      "Hotel Aurora": {
        description:
          "Estudio de menús y comunicación con huéspedes para un hotel alpino — planificación semanal de menús, exportaciones trilingües para imprimir e importación de PDFs con IA.",
        tags: ["Hostelería", "Panel", "3 idiomas"],
        linkLabel: "demo en vivo",
      },
    },
  },

  process: {
    heading: { title: "De la llamada al lanzamiento,", accent: "en días" },
    steps: [
      {
        day: "Día 0",
        title: "La llamada",
        description:
          "15 minutos sobre tu negocio y lo que necesitas. Sales con un precio cerrado y una fecha de entrega en el momento — sin propuestas, sin esperas.",
      },
      {
        day: "Día 1",
        title: "Diseño y desarrollo",
        description:
          "Diseño y construyo en una sola pasada. Al día siguiente tienes un enlace de vista previa real — una web que puedes clicar, no un PDF.",
      },
      {
        day: "Día 2",
        title: "Tus cambios",
        description:
          "Una ronda de cambios enfocada, aplicada en directo sobre la vista previa mientras hablamos. La mayoría están hechos en menos de una hora.",
      },
      {
        day: "Día 3",
        title: "Lanzamiento",
        description:
          "Dominio, SEO, analítica, WhatsApp — todo conectado y online. Una landing sencilla puede lanzarse 24 horas después de la primera llamada.",
      },
    ],
    note: "Sin agencias, sin intermediarios, sin plazos de seis semanas. Hablas con la misma persona que lo construye — por eso es rápido.",
  },

  pricing: {
    heading: { title: "Precios", accent: "claros" },
    badge: "El más pedido",
    tiers: {
      landing: {
        name: "Landing",
        price: "desde 500 €",
        tagline: "Una página que vende",
        features: [
          "Landing diseñada y desarrollada",
          "Textos, SEO básico y analítica",
          "Captación por WhatsApp / contacto",
          "Online en 24–48 horas",
        ],
        cta: "Empieza con una landing",
        subject: "Landing",
      },
      business: {
        name: "Web de empresa",
        price: "desde 1.500 €",
        tagline: "Todo tu negocio, online",
        features: [
          "Web multipágina a medida",
          "Reservas y embudos de captación",
          "Multiidioma + SEO completo",
          "Reseñas de Google y analítica",
          "Online en 1–2 semanas",
        ],
        cta: "Quiero mi web",
        subject: "Web de empresa",
      },
      platform: {
        name: "Plataforma & IA",
        price: "3.000 €+",
        tagline: "A medida, definido contigo",
        features: [
          "Paneles y portales de clientes",
          "Bots de IA y automatizaciones",
          "Pagos, autenticación y documentos",
          "Plazo según alcance",
        ],
        cta: "Defínelo conmigo",
        subject: "Plataforma a medida / IA",
      },
    },
    note: "Todo lo que entrego carga rápido, está pensado primero para el móvil y sale listo para SEO. Los precios son puntos de partida: en la primera llamada te doy un presupuesto exacto y cerrado, y no cambia después.",
  },

  guarantee: {
    heading: { title: "La", accent: "garantía" },
    kicker: "Sin riesgo",
    titleMain: "Si no te gusta,",
    titleAccent: "no pagas.",
    body: "Es el trato en todos mis proyectos. Ves la web terminada y online antes de la factura final — y si no es lo que querías y no consigo dejarla bien, no me debes nada. En 25+ proyectos nadie ha tenido que recurrir a él: hasta ahora, todos los clientes han dado su visto bueno y han quedado contentos.",
    score: "clientes satisfechos",
    scoreNote: "25+ proyectos · 0 reembolsos",
    claim: "100 % de clientes satisfechos — 25+ proyectos, 0 reembolsos.",
    points: [
      {
        title: "Primero la ves funcionando",
        description:
          "La web terminada se publica en un enlace privado de vista previa antes de la factura final. Juzgas la web real, no una maqueta.",
      },
      {
        title: "¿Algo no encaja? Lo arreglo",
        description:
          "Dime qué no te convence y lo cambio mientras seguimos en la llamada. La mayoría de los cambios están hechos en menos de una hora.",
      },
      {
        title: "¿Sigue sin encajar? Te vas sin pagar",
        description:
          "Sin factura, sin discusiones, sin correos incómodos. Cada uno por su camino, y no me debes nada.",
      },
    ],
    note: "La garantía va por escrito en cada presupuesto, no escondida en la letra pequeña. A la larga, esto solo funciona si después me recomiendas — y ese es el listón con el que trabajo.",
  },

  results: {
    heading: { title: "Hechos, no promesas", accent: "" },
    intro: "Cifras y proyectos de clientes reales. Así se ve una web que hace más por tu negocio.",
    stats: {
      impressions: { suffix: "M", label: "impresiones en Google", note: "webs de clientes, últimos 6 meses" },
      clicks: { suffix: " mil", label: "clics desde buscadores", note: "webs de clientes, últimos 6 meses" },
      projects: { suffix: "+", label: "proyectos entregados", note: "y sumando" },
      languages: { suffix: "", label: "idiomas", note: "EN DE ES FR IT SV NL RU" },
    },
    note: "Tráfico de búsqueda medido en Google Search Console sobre webs de clientes. La velocidad es solo una de las cosas que mira Google; estos son los resultados de webs hechas para cargar rápido.",
  },

  caseStudies: {
    heading: { title: "Productos y", accent: "paneles" },
    demoLabel: "Abrir la demo en vivo",
    stack: "Tecnología",
    products: {
      "Menu Atelier": {
        client: "Hotel Aurora — hotel boutique alpino",
        description:
          "Un estudio trilingüe de menús y comunicación con huéspedes: el equipo planifica la rotación semanal de menús, redacta la nota diaria para los huéspedes con la previsión del tiempo actualizada en directo e imprime menús trilingües cuidados hasta el último píxel. La IA convierte el PDF de un chef en una plantilla semanal lista para aplicar en menos de un minuto.",
        features: [
          "PDFs importados con IA → menús estructurados",
          "Control de traducciones DE / EN / IT",
          "Vistas previas y exportaciones listas para imprimir",
          "Notas a huéspedes con la previsión del tiempo en directo",
        ],
      },
      "Consular Platform": {
        client: "Empresa de servicios consulares",
        description:
          "Gestión de expedientes de principio a fin para una empresa de servicios consulares: un portal de clientes trilingüe con subida de documentos, seguimiento de la apostilla en seis pasos, reserva de citas y facturación con Stripe — más un panel de administración que lleva todo el proceso, desde que entra el contacto hasta la factura.",
        features: [
          "Portal de clientes + panel de administración",
          "Archivo de documentos con URLs firmadas",
          "Motor de reserva de citas",
          "Facturación y webhooks de Stripe",
        ],
      },
    },
    sketches: {
      portal: {
        active: "Activo",
        steps: ["Solicitado", "Apostilla", "Listo"],
        documents: [
          { name: "Pasaporte", status: "Aceptado" },
          { name: "Partida de nacimiento", status: "Reenviar" },
          { name: "Traducción", status: "En revisión" },
        ],
        invoice: "Factura",
        paid: "Pagada",
      },
    },
  },

  studies: {
    heading: { title: "Los datos,", accent: "al detalle" },
    note: "Tres análisis con los datos en bruto adjuntos — exportaciones de Search Console, auditorías de PageSpeed y un estudio de 211 webs de negocios locales. Incluidas las búsquedas que todavía no se han ganado.",
  },

  // worded the way Spanish owners search; also the home page's FAQPage
  faq: {
    heading: { title: "Preguntas,", accent: "respondidas" },
    items: [
      {
        q: "¿Cuánto cuesta una página web en Marbella?",
        a: "Conmigo, una landing cuesta desde 500 €, una web de empresa completa desde 1.500 € y una plataforma a medida con paneles, IA o pagos desde 3.000 €. El SEO para la web que ya tienes parte de 500 € por la puesta a punto, con un servicio mensual opcional desde 300 € al mes. El precio te lo doy cerrado en la primera llamada de 15 minutos, y no cambia después.",
      },
      {
        q: "¿Cuánto se tarda en hacer una página web?",
        a: "Una landing puede estar online 24–48 horas después de la primera llamada, y una web de empresa completa tarda una o dos semanas. Al día siguiente de la llamada ya tienes un enlace de vista previa: una web real que puedes clicar, no una maqueta en PDF.",
      },
      {
        q: "¿Y si no me gusta el resultado?",
        a: "Entonces no pagas. Ves la web terminada en un enlace privado de vista previa antes de la factura final, y si algo no te convence, lo cambio mientras hablamos. Si aun así no es lo que querías, no me debes nada. En 25+ proyectos, nadie ha tenido que llegar a eso.",
      },
      {
        q: "Ya tengo página web. ¿Necesito una nueva?",
        a: "No necesariamente. Puedo hacer SEO sobre la web que ya tienes, esté hecha con WordPress, Wix, Shopify o a medida, desde 500 € la puesta a punto. Si el problema es la propia web, un rediseño cuesta lo mismo que una web nueva y normalmente conserva tu dominio y las posiciones que ya has ganado en Google.",
      },
      {
        q: "¿Puedo conseguir que ChatGPT recomiende mi negocio?",
        a: "Eso lo decide ChatGPT: nadie puede comprarlo ni garantizarlo, ni siquiera yo. Lo que sí puedo hacer es ponérselo fácil para que lea tu negocio: tus servicios, precios, horario y dirección escritos como texto, un resumen pensado para asistentes de IA y tu web conectada a Bing, además de a Google.",
      },
      {
        q: "¿Puedo tener mi página web en varios idiomas?",
        a: "Sí. He entregado webs de clientes en ocho idiomas: inglés, alemán, español, francés, italiano, sueco, holandés y ruso. Cada idioma lleva su propio SEO, no un plugin de traducción añadido por encima. La web de empresa, desde 1.500 €, ya incluye varios idiomas.",
      },
      {
        q: "¿Voy a trabajar contigo o con una agencia?",
        a: "Conmigo. Sin agencia, sin gestores de cuenta, sin intermediarios: quien te atiende en la primera llamada es quien construye tu web, y después del lanzamiento me escribes directamente a mí. Trabajo desde Marbella para toda la Costa del Sol, y clientes de Alemania, Suiza y Miami han trabajado conmigo en remoto.",
      },
    ],
  },

  industries: {
    heading: { title: "Webs por", accent: "sectores" },
    all: "Todos los sectores",
  },

  contact: {
    kicker: "¿Tienes un proyecto en mente?",
    titleMain: "",
    titleAccent: "Hablamos",
    links: {
      chatbots: "Chatbots y agentes de IA",
      "web-design": "Diseño web Marbella",
      "app-development": "Desarrollo de apps",
      "ai-automation": "Automatización con IA",
      seo: "SEO",
      "industry-hub": "Por sectores",
      "case-studies": "Casos reales",
      reviews: "Opiniones",
    },
    websitesFor: "Webs para",
    location: "Marbella, España",
  },

  compact: {
    review: {
      label: "Revisión web gratuita",
      title: "Descubre qué podría funcionar",
      accent: "mejor.",
      body: "Envíame tu web. Reviso su velocidad, cómo la ven Google y los asistentes de IA, y lo fácil que es contactarte. Recibes conclusiones claras y próximos pasos prácticos, y una llamada corta si quieres.",
      website: "Tu web",
      placeholder: "tunegocio.es",
      noSite: "Todavía no tengo web",
      missing: "Escribe tu web, o marca la casilla si todavía no tienes.",
      contact: "Tu email o teléfono",
      contactPlaceholder: "tu@tunegocio.es",
      missingContact: "Añade un email o teléfono para enviarte las conclusiones.",
      submit: "Pedir mi revisión gratis",
      sending: "Enviando…",
      sentTitle: "Gracias, ya está en mi lista.",
      sentBody: "Revisaré {site} y te enviaré las conclusiones a {contact}.",
      sentBodyNoSite: "Te responderé en {contact}.",
      failed: "No se ha podido enviar. Escríbeme por WhatsApp, por favor.",
      whatsapp: "O escríbeme por WhatsApp",
      message: "Hola Alex, me gustaría una revisión gratuita de mi web: {site}",
      messageNoSite: "Hola Alex, todavía no tengo web y me gustaría tu consejo para empezar.",
    },
    services: {
      heading: { title: "Hecho a la medida de", accent: "tu negocio" },
      items: {
        "web-design": {
          title: "Webs",
          line: "Webs de empresa, landings y reservas online que traen clientes.",
        },
        seo: {
          title: "Google y búsqueda con IA",
          line: "Que te encuentren en Google, Maps y asistentes como ChatGPT.",
        },
        "ai-automation": {
          title: "IA y automatización",
          line: "Chatbots, lectura de documentos y el trabajo que se repite cada día.",
        },
        "app-development": {
          title: "CRM e integraciones",
          line: "Clientes, reservas, pagos y documentos en un solo sitio.",
        },
      },
    },
    work: { previous: "Proyecto anterior", next: "Siguiente proyecto" },
    steps: [
      {
        day: "15 minutos",
        title: "Cuéntame tu idea",
        line: "Una llamada de 15 minutos o un WhatsApp sobre tu negocio y lo que necesitas.",
      },
      {
        day: "El mismo día",
        title: "Acordamos la solución",
        line: "Precio cerrado y fecha de entrega. Sin propuestas largas ni esperas.",
      },
      {
        day: "Online en días",
        title: "Construir, lanzar, mejorar",
        line: "Una vista previa en días, una ronda de cambios y el lanzamiento — y mantenimiento mensual si lo quieres.",
      },
    ],
  },

  markdown: {
    servicePages: "Páginas de servicios",
    caseStudies: "Casos reales",
    basedIn: "Con base en Marbella, España — trabajo en toda la Costa del Sol",
  },
};
