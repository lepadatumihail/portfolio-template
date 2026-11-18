import type { Lang } from "./i18n";
import type { LandingConfig } from "./landing";

/** A dedicated service page; the four homepage service categories stay unchanged. */
export type ChatbotsConfig = LandingConfig & {
  key: "chatbots";
  linkLabel: string;
  labels: { secondary: string; sectionTitle: string; sectionAccent: string; priceTitle: string; priceAccent: string; faqTitle: string };
  visual: {
    caption: string; business: string; assistant: string; channel: string;
    incoming: string; reply: string; followup: string; saved: string;
    voiceTitle: string; voiceLine: string; voiceStatus: string;
    metaTitle: string; metaStatus: string;
    /** one day of the Meta workflow, in plain words: two insight checks 12 hours apart, a budget move, a post, a pause */
    metaLog: { kind: "insights" | "budget" | "post" | "pause"; time: string; title: string; detail: string }[];
  };
  /** one WhatsApp link per feature, in copy.features order, each with its own pre-filled message */
  asks: { label: string; waMessage: string }[];
  /**
   * The hero's looping conversation: a clinic's assistant answering at 23:47
   * with a treatment price and two free slots, then booking one. Illustrative,
   * and the caption says so.
   */
  demo: {
    caption: string; status: string; time: string; ask: string;
    treatment: string; detail: string; price: string;
    slotsLabel: string; slots: string[]; pick: string; booked: string; saved: string;
  };
  /**
   * The work behind the third feature, shown as a case: an AI setup that
   * looked after a product's Facebook ads. The numbers below are sample data;
   * put in your own campaign's totals (spend, link clicks, landing page views).
   *
   * `estimate` is a projection, labelled as one on the page, never mixed into
   * the real rows. EUR 500 at about EUR 0.25 a click: as spend grows the ad
   * reaches past its best audience, so CPM rises from EUR 1.92 towards 2.75
   * and link CTR falls from 1.42% towards 1.1%. That gives ~2,000 clicks and,
   * at the real 80% click-to-visit rate, ~1,600 visits.
   */
  proof: {
    title: string; accent: string; intro: string; does: string[];
    report: {
      title: string; status: string; value: string; unit: string;
      rows: { label: string; value: string }[];
      estimate: { label: string; rows: { label: string; value: string }[] };
      caption: string;
    };
  };
};

import { chatbotsRuConfig } from "./ru/chatbots";

export const chatbotsEnConfig: ChatbotsConfig = {
  "slug": "/chatbots-marbella",
  "lang": "en",
  "key": "chatbots",
  "linkLabel": "Chatbots & AI agents",
  "serviceName": "WhatsApp chatbots, AI voice agents & Meta automation",
  "siblings": [
    {
      "label": "AI workflow automation",
      "href": "/ai-automation-marbella"
    },
    {
      "label": "Web design",
      "href": "/web-design-marbella"
    },
    {
      "label": "Apps & client portals",
      "href": "/app-development-marbella"
    }
  ],
  "proofProjects": [],
  "hideProof": true,
  "highlightTier": -1,
  "tiers": [
    {
      "name": "Chatbots & AI agents",
      "price": "from €250/month",
      "minPrice": 250,
      "per": "month",
      "tagline": "One assistant to start: WhatsApp, phone, or Facebook & Instagram.",
      "features": [],
      "cta": "Chat on WhatsApp"
    }
  ],
  "mailSubject": "Chatbots & AI agents",
  "waMessage": "Hi Alex — I’d like to discuss a chatbot, voice assistant or Meta automation for my business.",
  "pricingFootnote": "The monthly price depends on the channels, the integrations and how much the assistant handles, and you get the exact figure in writing before anything is built. Messaging, call minutes, AI usage and ad spend are separate running costs, agreed before launch.",
  "process": {
    "heading": {
      "title": "Built around",
      "accent": "your day."
    },
    "steps": [
      {
        "day": "01",
        "title": "Pick the job",
        "description": "We map the enquiry, call or campaign from start to finish. You decide what the assistant handles and when your team steps in."
      },
      {
        "day": "02",
        "title": "Connect & test",
        "description": "I connect your content, calendar or Meta accounts, then we test real scenarios together before anything goes live."
      },
      {
        "day": "03",
        "title": "Launch & refine",
        "description": "We start with an agreed scope, review the conversations or campaign insights, and refine the workflow as it gets used."
      }
    ],
    "footnote": "Your accounts, your tone of voice, your working process. I build around them."
  },
  "og": {
    "kicker": "Chatbots & AI agents",
    "headline": "Keep the conversation going. Keep your day free.",
    "foot": "WhatsApp · Voice · Meta"
  },
  "copy": {
    "metaTitle": "WhatsApp Chatbots & AI Agents in Spain | Alex Doe",
    "metaDescription": "Custom WhatsApp chatbots, AI phone assistants for clinics, and Facebook & Instagram content and ad automation for businesses across Spain, from €250 a month.",
    "hero": {
      "label": "WhatsApp chatbots, AI voice agents & Meta automation",
      "h1Main": "Keep the conversation going.",
      "h1Accent": "Keep your day free.",
      "sub": "WhatsApp chatbots, AI phone assistants, and Facebook & Instagram automation. I build the systems that answer your customers, keep your content moving and turn ad insights into action.",
      "ctaLabel": "Chat on WhatsApp"
    },
    "intro": [
      "A customer sends a message. Someone calls while reception is busy. Your next post is still a blank page. These are different jobs — and each can have an assistant built around the way you work.",
      "Start with one useful workflow. I connect it to your information and tools, test it with you, and build from there. For clinics, agencies, hospitality and service businesses in Marbella, on the Costa del Sol and anywhere in Spain: it all runs remotely."
    ],
    "features": [
      {
        "title": "WhatsApp that gets back to people.",
        "description": "An assistant that knows your services, hours and booking process. It answers routine questions, captures the details you need and helps an enquiry take the next step, even when your team is busy.",
        "includes": [
          "Answers grounded in your business information",
          "Appointment requests connected to your booking flow",
          "Multilingual conversations and lead qualification",
          "A handover to your team with the conversation attached"
        ]
      },
      {
        "title": "A helpful voice on the other end.",
        "description": "An AI phone receptionist for clinics and other appointment-led businesses. It can answer incoming calls, handle opening-hours and service questions, collect appointment requests and pass the useful details to your team.",
        "includes": [
          "A voice and greeting suited to your business",
          "Bookings or callback requests in your existing workflow",
          "Call summaries with the details your team needs",
          "Clinic reception support, with clinical questions passed to staff"
        ]
      },
      {
        "title": "Content and ads that keep moving.",
        "description": "A connected workflow for Facebook and Instagram: generate on-brand images and copy, schedule daily posts, publish approved ads, then check the insights and adjust what runs next.",
        "includes": [
          "AI-generated ad creatives and daily social content",
          "A publishing calendar for your Facebook Page and Instagram",
          "Daily checks of spend, clicks, leads and cost per result",
          "Creative tests, pauses and budget adjustments within agreed limits"
        ]
      }
    ],
    "localNote": "",
    "processNote": "You don’t need to automate everything. We choose the first job that is worth taking off your plate.",
    "faq": [
      {
        "q": "Can it work with my existing WhatsApp number?",
        "a": "I check your current WhatsApp setup and the available Business Platform connection first. Where supported, we can keep the number your customers already use. Any account changes, messaging costs and template requirements are scoped before the build."
      },
      {
        "q": "Can the AI create posts and adjust my Facebook ads?",
        "a": "Yes. I can build a workflow that generates images and copy, schedules daily posts, publishes approved ads and checks Meta insights. It can test new creatives, pause ads or adjust budgets within rules we agree. You can keep approval steps for content and larger changes. Access depends on your connected business accounts and Meta permissions."
      },
      {
        "q": "What can a voice bot do for a clinic?",
        "a": "Handle reception tasks: answer routine questions, take appointment or callback requests and leave a clear summary for staff. A booking integration is scoped around the system you already use. Clinical questions go to your team; the assistant’s role is reception."
      },
      {
        "q": "Can it answer in different languages?",
        "a": "Yes. We choose the languages your customers use and test the wording, pronunciation and handovers in each one. Your business information remains the source for the answers."
      },
      {
        "q": "Does it run by itself or do I approve things?",
        "a": "We choose that per action. Routine replies and approved posts can run automatically. New ad concepts, larger budget changes or conversations that need judgment can wait for a person. You decide the limits before launch."
      },
      {
        "q": "How soon can we launch?",
        "a": "A focused first workflow can be built quickly, but the exact date depends on integrations, account access and testing. I give you a scope and timeline before starting. Ongoing ad adjustments are measured against your goals; results are not guaranteed."
      }
    ],
    "crossLinksBlurb": "Need the website or internal workflow behind it too?",
    "ogAlt": "WhatsApp chatbots, AI voice agents & Meta automation — Alex Doe"
  },
  "labels": {
    "secondary": "See what I can build",
    "sectionTitle": "Three ways to get",
    "sectionAccent": "time back.",
    "priceTitle": "A clear scope.",
    "priceAccent": "A clear quote.",
    "faqTitle": "A few useful answers."
  },
  "visual": {
    "caption": "Illustrative workflows · built around your business",
    "business": "Your clinic",
    "assistant": "AI reception assistant",
    "channel": "WhatsApp",
    "incoming": "Hi, can I book a consultation this week?",
    "reply": "Of course. Would you prefer a morning or an afternoon?",
    "followup": "An afternoon, please.",
    "saved": "Appointment request ready for reception",
    "voiceTitle": "A call, taken care of.",
    "voiceLine": "“I’d like to move my appointment to Friday.”",
    "voiceStatus": "Callback request sent to reception",
    "metaTitle": "What the AI did on Monday",
    "metaStatus": "Facebook & Instagram",
    "metaLog": [
      { "kind": "insights", "time": "08:00", "title": "Insights updated", "detail": "“Whitening” brings the cheapest enquiries" },
      { "kind": "budget", "time": "08:01", "title": "Budget moved", "detail": "More to “Whitening”, within your limit" },
      { "kind": "post", "time": "09:30", "title": "Post published", "detail": "“Whitening week”, written and designed by AI" },
      { "kind": "pause", "time": "20:00", "title": "Ad paused", "detail": "“Summer offer” cost more for fewer enquiries" }
    ]
  },
  "asks": [
    {
      "label": "Ask about a WhatsApp assistant",
      "waMessage": "Hi Alex — I’d like a WhatsApp assistant for my business."
    },
    {
      "label": "Ask about a phone receptionist",
      "waMessage": "Hi Alex — I’d like an AI phone receptionist for my business."
    },
    {
      "label": "Ask about content & ads",
      "waMessage": "Hi Alex — I’d like to automate my Facebook & Instagram posts and ads."
    }
  ],
  "demo": {
    "caption": "Illustrative: a clinic’s WhatsApp assistant, after hours",
    "status": "AI assistant · replies 24/7",
    "time": "23:47 · clinic closed",
    "ask": "Hi! How much is teeth whitening? Is Saturday morning free?",
    "treatment": "Teeth whitening",
    "detail": "In the clinic · about an hour",
    "price": "€320",
    "slotsLabel": "Free on Saturday",
    "slots": ["10:00", "11:30"],
    "pick": "10:00, please",
    "booked": "You’re booked for Saturday at 10:00. We’ll send a reminder on Friday.",
    "saved": "Added to the clinic calendar at 23:48"
  },
  "proof": {
    "title": "Done for",
    "accent": "Northwind CRM.",
    "intro": "Northwind CRM, a CRM for estate agents on the Costa del Sol, ran its Facebook ads on this setup. The AI handles everything for you:",
    "does": [
      "Tracks every euro of ad spend against your budget",
      "Updates the insights every 12 hours: clicks, visits, cost per click",
      "Checks every ad and pauses one that wastes money"
    ],
    "report": {
      "title": "Northwind CRM · Facebook ads",
      "status": "Updated every 12 hours",
      "value": "€0.14",
      "unit": "per click",
      "rows": [
        { "label": "Clicks", "value": "185" },
        { "label": "Visits to the site", "value": "148" },
        { "label": "Ad spend", "value": "€24.96" }
      ],
      "estimate": {
        "label": "At €500 a month, estimated",
        "rows": [
          { "label": "Clicks", "value": "≈ 2,000" },
          { "label": "Visits to the site", "value": "≈ 1,600" },
          { "label": "Cost per click", "value": "≈ €0.25" }
        ]
      },
      "caption": "Real numbers from Northwind CRM’s last campaign. The €500 figures are an estimate: the cost per click rises as an ad reaches more people."
    }
  }
};

export const chatbotsEsConfig: ChatbotsConfig = {
  "slug": "/es/chatbots-marbella",
  "lang": "es",
  "key": "chatbots",
  "linkLabel": "Chatbots y agentes de IA",
  "serviceName": "Chatbots de WhatsApp, agentes de voz y automatización de Meta",
  "siblings": [
    {
      "label": "Automatización de procesos con IA",
      "href": "/es/automatizacion-ia-marbella"
    },
    {
      "label": "Diseño web",
      "href": "/es/diseno-web-marbella"
    },
    {
      "label": "Apps y portales de clientes",
      "href": "/es/desarrollo-apps-marbella"
    }
  ],
  "proofProjects": [],
  "hideProof": true,
  "highlightTier": -1,
  "tiers": [
    {
      "name": "Chatbots y agentes de IA",
      "price": "desde 250 €/mes",
      "minPrice": 250,
      "per": "month",
      "tagline": "Un asistente para empezar: WhatsApp, teléfono o Facebook e Instagram.",
      "features": [],
      "cta": "Escríbeme por WhatsApp"
    }
  ],
  "mailSubject": "Chatbots y agentes de IA",
  "waMessage": "Hola Alex — me gustaría hablar de un chatbot, asistente de voz o automatización de Meta para mi negocio.",
  "pricingFootnote": "El precio mensual depende de los canales, las integraciones y de cuánto resuelva el asistente, y tienes la cifra exacta por escrito antes de empezar. Mensajes, minutos de llamada, uso de IA e inversión publicitaria son costes de funcionamiento aparte, acordados antes del lanzamiento.",
  "process": {
    "heading": {
      "title": "Adaptado a",
      "accent": "tu día a día."
    },
    "steps": [
      {
        "day": "01",
        "title": "Elegimos la tarea",
        "description": "Repasamos la consulta, llamada o campaña de principio a fin. Tú decides qué resuelve el asistente y cuándo interviene tu equipo."
      },
      {
        "day": "02",
        "title": "Conecto y probamos",
        "description": "Conecto tu contenido, calendario o cuentas de Meta. Después probamos casos reales juntos antes de ponerlo en marcha."
      },
      {
        "day": "03",
        "title": "Lanzamos y afinamos",
        "description": "Empezamos con un alcance acordado, revisamos conversaciones o resultados de campañas y ajustamos el proceso con el uso."
      }
    ],
    "footnote": "Tus cuentas, tu tono de voz y tu forma de trabajar. Desarrollo el sistema alrededor de ellos."
  },
  "og": {
    "kicker": "Chatbots y agentes de IA",
    "headline": "Que la conversación siga. Que tu día quede libre.",
    "foot": "WhatsApp · Voz · Meta"
  },
  "copy": {
    "metaTitle": "Chatbots de WhatsApp para empresas en España | Alex Doe",
    "metaDescription": "Chatbots de WhatsApp, asistentes telefónicos para clínicas y automatización de contenido y anuncios en Facebook e Instagram, en toda España, desde 250 €/mes.",
    "hero": {
      "label": "Chatbots de WhatsApp, agentes de voz y automatización de Meta",
      "h1Main": "Que la conversación siga.",
      "h1Accent": "Que tu día quede libre.",
      "sub": "Chatbots de WhatsApp, asistentes telefónicos con IA y automatización de Facebook e Instagram. Desarrollo sistemas que atienden a tus clientes, mantienen tu contenido al día y convierten los datos de tus anuncios en acciones.",
      "ctaLabel": "Escríbeme por WhatsApp"
    },
    "intro": [
      "Un cliente escribe. Suena el teléfono mientras recepción está ocupada. La próxima publicación sigue sin hacerse. Son tareas distintas, y cada una puede tener un asistente adaptado a tu forma de trabajar.",
      "Empezamos por un proceso útil. Lo conecto a tu información y tus herramientas, lo probamos juntos y seguimos desde ahí. Para clínicas, agencias, hostelería y negocios de servicios de Marbella, la Costa del Sol y el resto de España: todo funciona en remoto."
    ],
    "features": [
      {
        "title": "Un WhatsApp que sí responde.",
        "description": "Un asistente que conoce tus servicios, horarios y proceso de reserva. Responde preguntas habituales, recoge los datos necesarios y ayuda a dar el siguiente paso, incluso cuando tu equipo está ocupado.",
        "includes": [
          "Respuestas basadas en la información de tu negocio",
          "Solicitudes de cita conectadas a tu proceso de reserva",
          "Conversaciones en varios idiomas y clasificación de consultas",
          "Traspaso a tu equipo con el historial de la conversación"
        ]
      },
      {
        "title": "Una voz útil al otro lado.",
        "description": "Un recepcionista telefónico con IA para clínicas y negocios que trabajan con citas. Atiende llamadas, responde sobre horarios y servicios, recoge solicitudes de cita y pasa los datos útiles a tu equipo.",
        "includes": [
          "Una voz y un saludo adecuados para tu negocio",
          "Reservas o solicitudes de devolución de llamada",
          "Resúmenes de llamadas con los datos que necesita tu equipo",
          "Apoyo a recepción; las preguntas clínicas pasan al personal"
        ]
      },
      {
        "title": "Contenido y anuncios que avanzan.",
        "description": "Un proceso conectado para Facebook e Instagram: generar imágenes y textos de tu marca, programar publicaciones diarias, publicar anuncios aprobados, revisar los resultados y ajustar lo que viene después.",
        "includes": [
          "Creatividades publicitarias y contenido diario generados con IA",
          "Calendario de publicación para tu página de Facebook e Instagram",
          "Revisión diaria de gasto, clics, contactos y coste por resultado",
          "Pruebas de creatividades, pausas y ajustes de presupuesto acordados"
        ]
      }
    ],
    "localNote": "",
    "processNote": "No hace falta automatizarlo todo. Elegimos la primera tarea que merece salir de tu lista.",
    "faq": [
      {
        "q": "¿Puede funcionar con mi número actual de WhatsApp?",
        "a": "Primero reviso tu configuración de WhatsApp y la conexión disponible con Business Platform. Cuando es compatible, podemos mantener el número que ya usan tus clientes. Los cambios de cuenta, costes de mensajería y requisitos de plantillas se definen antes del desarrollo."
      },
      {
        "q": "¿La IA puede crear publicaciones y ajustar mis anuncios?",
        "a": "Sí. Puedo crear un proceso que genere imágenes y textos, programe publicaciones diarias, publique anuncios aprobados y revise los datos de Meta. Puede probar creatividades, pausar anuncios o ajustar presupuestos siguiendo reglas acordadas. Puedes mantener pasos de aprobación para el contenido y los cambios importantes. El acceso depende de tus cuentas de empresa y los permisos de Meta."
      },
      {
        "q": "¿Qué puede hacer un bot de voz para una clínica?",
        "a": "Tareas de recepción: responder preguntas habituales, recoger solicitudes de cita o de devolución de llamada y dejar un resumen claro al personal. La integración de reservas se define según el sistema que ya utilizas. Las preguntas clínicas pasan a tu equipo; el asistente se ocupa de recepción."
      },
      {
        "q": "¿Puede responder en varios idiomas?",
        "a": "Sí. Elegimos los idiomas que utilizan tus clientes y probamos los textos, la pronunciación y el traspaso al equipo en cada uno. La información de tu negocio sigue siendo la fuente de las respuestas."
      },
      {
        "q": "¿Funciona solo o tengo que aprobar las acciones?",
        "a": "Lo decidimos para cada acción. Las respuestas habituales y las publicaciones aprobadas pueden funcionar automáticamente. Las nuevas ideas de anuncios, cambios importantes de presupuesto o conversaciones que requieren criterio pueden esperar a una persona. Tú defines los límites antes del lanzamiento."
      },
      {
        "q": "¿Cuándo podemos ponerlo en marcha?",
        "a": "Un primer proceso bien definido puede desarrollarse rápido, pero la fecha depende de las integraciones, el acceso a las cuentas y las pruebas. Te doy un alcance y un plazo antes de empezar. Los ajustes publicitarios se miden según tus objetivos; no se garantizan resultados."
      }
    ],
    "crossLinksBlurb": "¿También necesitas la web o las herramientas internas que lo acompañan?",
    "ogAlt": "Chatbots de WhatsApp, agentes de voz y automatización de Meta — Alex Doe"
  },
  "labels": {
    "secondary": "Mira lo que puedo crear",
    "sectionTitle": "Tres formas de recuperar",
    "sectionAccent": "tu tiempo.",
    "priceTitle": "Alcance definido.",
    "priceAccent": "Precio claro.",
    "faqTitle": "Respuestas útiles."
  },
  "visual": {
    "caption": "Ejemplos de procesos · adaptados a tu negocio",
    "business": "Tu clínica",
    "assistant": "Asistente de recepción con IA",
    "channel": "WhatsApp",
    "incoming": "Hola, ¿puedo reservar una consulta esta semana?",
    "reply": "Claro. ¿Prefieres por la mañana o por la tarde?",
    "followup": "Por la tarde, por favor.",
    "saved": "Solicitud de cita lista para recepción",
    "voiceTitle": "Una llamada atendida.",
    "voiceLine": "«Me gustaría cambiar mi cita al viernes».",
    "voiceStatus": "Solicitud de llamada enviada a recepción",
    "metaTitle": "Lo que hizo la IA el lunes",
    "metaStatus": "Facebook e Instagram",
    "metaLog": [
      { "kind": "insights", "time": "08:00", "title": "Resultados actualizados", "detail": "«Blanqueamiento» trae las consultas más baratas" },
      { "kind": "budget", "time": "08:01", "title": "Presupuesto ajustado", "detail": "Más para «Blanqueamiento», dentro de tu límite" },
      { "kind": "post", "time": "09:30", "title": "Nueva publicación", "detail": "«Semana del blanqueamiento», con texto e imagen de la IA" },
      { "kind": "pause", "time": "20:00", "title": "Anuncio pausado", "detail": "«Oferta de verano» costaba más por menos consultas" }
    ]
  },
  "asks": [
    {
      "label": "Pregúntame por el asistente de WhatsApp",
      "waMessage": "Hola Alex — me interesa un asistente de WhatsApp para mi negocio."
    },
    {
      "label": "Pregúntame por el recepcionista telefónico",
      "waMessage": "Hola Alex — me interesa un recepcionista telefónico con IA para mi negocio."
    },
    {
      "label": "Pregúntame por contenido y anuncios",
      "waMessage": "Hola Alex — me gustaría automatizar las publicaciones y los anuncios de Facebook e Instagram."
    }
  ],
  "demo": {
    "caption": "Ejemplo ilustrativo: el asistente de WhatsApp de una clínica, fuera de horario",
    "status": "Asistente con IA · responde 24/7",
    "time": "23:47 · clínica cerrada",
    "ask": "¡Hola! ¿Cuánto cuesta el blanqueamiento dental? ¿Tenéis hueco el sábado por la mañana?",
    "treatment": "Blanqueamiento dental",
    "detail": "En clínica · 1 hora aprox.",
    "price": "320 €",
    "slotsLabel": "Libre el sábado",
    "slots": ["10:00", "11:30"],
    "pick": "A las 10:00, por favor",
    "booked": "Reservado: sábado a las 10:00. Te enviaremos un recordatorio el viernes.",
    "saved": "Cita añadida al calendario de la clínica a las 23:48"
  },
  "proof": {
    "title": "Hecho para",
    "accent": "Northwind CRM.",
    "intro": "Northwind CRM, un CRM para agentes inmobiliarios de la Costa del Sol, llevó sus anuncios de Facebook con este sistema. La IA se encarga de todo por ti:",
    "does": [
      "Controla cada euro de inversión frente a tu presupuesto",
      "Actualiza los resultados cada 12 horas: clics, visitas y coste por clic",
      "Revisa cada anuncio y pausa el que malgasta dinero"
    ],
    "report": {
      "title": "Northwind CRM · anuncios de Facebook",
      "status": "Se actualiza cada 12 horas",
      "value": "0,14 €",
      "unit": "por clic",
      "rows": [
        { "label": "Clics", "value": "185" },
        { "label": "Visitas a la web", "value": "148" },
        { "label": "Inversión", "value": "24,96 €" }
      ],
      "estimate": {
        "label": "Con 500 € al mes, estimación",
        "rows": [
          { "label": "Clics", "value": "≈ 2.000" },
          { "label": "Visitas a la web", "value": "≈ 1.600" },
          { "label": "Coste por clic", "value": "≈ 0,25 €" }
        ]
      },
      "caption": "Datos reales de la última campaña de Northwind CRM. Las cifras con 500 € son una estimación: el coste por clic sube cuando el anuncio llega a más gente."
    }
  }
};

export const CHATBOTS_CONFIGS: Record<Lang, ChatbotsConfig> = { en: chatbotsEnConfig, es: chatbotsEsConfig, ru: chatbotsRuConfig };
