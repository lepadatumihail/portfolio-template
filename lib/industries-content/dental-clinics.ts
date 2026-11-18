import type { IndustrySource } from "../industries";

// Figures: Google Search Console for Acme Clinic Marbella, as published in lib/studies-content-en.ts and lib/studies-content-es.ts (acmeClinicEn / acmeClinicEs).
// Lighthouse scores: Google PageSpeed Insights, Acme Clinic home page, 2 October 2026 (SEO 100, desktop performance 96).
export const dentalClinics: IndustrySource = {
  key: "dental-clinics",
  proofProjects: ["Acme Clinic"],
  highlightTier: 1,
  related: ["aesthetic-clinics", "law-firms", "restaurants"],
  en: {
    slug: "dental-clinics",
    name: "Dental clinics",
    summary:
      "A dental clinic site has to turn a search into an appointment request: a page per treatment, booking, WhatsApp and a version per language.",
    serviceName: "Dental clinic website design",
    mailSubject: "Dental clinic website",
    waMessage: "Hi Alex — I need a website for my dental clinic. When can we do the 15-min call?",
    stats: [
      { value: "101,872", label: "Google impressions, Acme Clinic, 15 months" },
      { value: "1,894", label: "Clicks from Google in the same 15 months" },
      { value: "Top 3", label: "“Dentist Marbella” in German, French, Dutch" },
      { value: "27%", label: "Of clicks from outside Spain, last 12 months" },
    ],
    statsNote:
      "Google Search Console for Acme Clinic Marbella: impressions and clicks run from 1 June 2025 to 29 August 2026; the average positions for “zahnarzt marbella”, “dentiste marbella” and “tandarts marbella” (2.6, 2.3 and 2.9) and the share of clicks from outside Spain (441 of 1,643) cover the twelve months to 1 September 2026.",
    statsSource: {
      label: "Read the Acme Clinic case study",
      href: "/case-studies/acme-clinic-marbella-seo",
    },
    og: {
      kicker: "Web design — dental clinics",
      headline: "A dental clinic website built for the appointment request.",
    },
    copy: {
      metaTitle: "Dental clinic website design in Marbella & Costa del Sol",
      metaDescription:
        "Dental clinic website design in Marbella: treatment pages, appointment requests, English and Spanish. Fixed quote from €1,500, live in 1-2 weeks.",
      hero: {
        label: "Web design for dentists — Marbella & Costa del Sol",
        h1Main: "Dental clinic website design in Marbella, built in",
        h1Accent: "English and Spanish.",
        sub: "A page per treatment, an appointment request in a few taps on a phone, and English and Spanish as separate versions Google can index. Fixed quote and delivery date on the first call. Clinic sites from €1,500.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Dental clinic website design on the Costa del Sol has one job: turn a search into an appointment request. The patient may live in San Pedro, may be a Swedish resident, or may be a tourist with a broken crown on day two of a holiday. The site has to work for all three, on a phone, in their language.",
        "The proof is public. I built and maintain the website of Acme Clinic Marbella, a private clinic with dentistry, aesthetic medicine and general medicine, two locations and 24/7 emergency dental care, in English, Spanish and Swedish. Google Search Console recorded 101,872 impressions and 1,894 clicks for it between 1 June 2025 and 29 August 2026, and its monthly impressions grew from 1,889 in June 2025 to 10,268 in July 2026.",
        "Website design for dentists is mostly about the hours when reception is closed. At 22:00 the patient is still searching, so the site takes the appointment request and offers WhatsApp to anyone who would rather type than call. I code it on Next.js, the person on the call is the person who builds it, and clinic sites start at €1,500.",
      ],
      features: [
        {
          title: "A page for every treatment",
          description:
            "Implants, orthodontics, veneers, whitening, emergencies: each treatment gets its own page, saying what it is, who it suits, how many visits it takes and what patients ask before they call. Prices, a “from” figure or financing go here if you publish them. Each page has its own title, description and structured data.",
        },
        {
          title: "Appointment requests, step by step",
          description:
            "The appointment request is a short booking wizard: treatment, day and time, clinic, contact details. On Acme Clinic's site the request goes into the appointment system the clinic uses, and the clinic confirms by email or phone. On your site the request can hand off to the software you already use, or reach the front desk by email or WhatsApp.",
        },
        {
          title: "WhatsApp, call and emergency line",
          description:
            "A tap-to-call number and a WhatsApp button on every screen, with the emergency line in plain sight if you take urgent cases. Acme Clinic's WhatsApp widget has the visitor pick a topic, so the chat opens with the message already written. The phone is where it counts: in Google's results, that site's click-through rate was 2.92% on mobile against 0.81% on desktop (Search Console, twelve months to 1 September 2026).",
        },
        {
          title: "Dentists, cases and reviews",
          description:
            "Each dentist gets a profile: name, qualifications, registration number if you want it shown, languages and treatments. Acme Clinic's site has a page per specialist. Before-and-after cases go in a gallery sized for phones, when you have the patient's consent. Your Google reviews are quoted with a link to the full list.",
        },
        {
          title: "English and Spanish, built separately",
          description:
            "Each language is its own version with its own URLs, titles and text, linked with hreflang so Google can show the right one. Across Acme Clinic's English, Spanish and Swedish versions, 27% of Google clicks came from outside Spain (441 of 1,643, Search Console, twelve months to 1 September 2026).",
        },
        {
          title: "Local SEO groundwork and consent",
          description:
            "Dentist structured data for each location, with address, opening hours and a directions link, written as they appear on your Google Business Profile. The site ships with the legal pages and consent wording you provide, and a cookie banner connected to Google Consent Mode, so Google Analytics sets no cookies until the visitor chooses.",
        },
      ],
      localNote:
        "I have worked on the website of Acme Clinic Marbella since April 2025. It is a Marbella clinic with dentistry, aesthetic medicine and general medicine, and its home page scores 100/100 for SEO and 96 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026). I am based in Marbella and work across the Costa del Sol, from Estepona to Málaga.",
      processNote:
        "A clinic site with treatment pages, team profiles and booking is a business site: one to two weeks, with the first preview link the day after the call. A small practice that needs only one page can follow the day-by-day rhythm below.",
      faq: [
        {
          q: "How much does dental website design cost?",
          a: "A dental clinic website starts at €1,500: that covers a page per treatment, dentist profiles, the appointment-request wizard, English and Spanish versions, full SEO setup, Google reviews and analytics. A single-chair practice that only needs one page (treatments, hours, map, tap-to-call and WhatsApp) starts at €500. A patient portal, online payment or an AI bot belongs to the Platform & AI tier at €3,000+. The exact figure is a fixed quote you get on the first 15-minute call, and it does not change afterwards.",
        },
        {
          q: "How long does it take to build a dental clinic website?",
          a: "A dental clinic website with treatment pages, team profiles and booking takes one to two weeks; you hear the delivery date on the first call. The preview link arrives the day after that call: a real site you open on your own phone. Then one revision round, applied while we talk, and launch. Your part is the content: what each treatment involves, the team details and the legal wording.",
        },
        {
          q: "What should a dental clinic website include?",
          a: "A dental clinic website should include a page per treatment, the dentists by name, a way to request an appointment, and contact that works from a phone: tap-to-call, WhatsApp, and the emergency number if you take urgent cases. Then address, opening hours and directions for each location, Google reviews, the legal pages, and prices if you publish them. Underneath sits what patients never see: structured data telling Google this is a dentist at this address, and the tags that link each language version.",
        },
        {
          q: "Can patients book appointments online through the website?",
          a: "Yes, as a request that the clinic confirms. On Acme Clinic's site the patient picks a service, a time and a location and leaves contact details; the request goes into the appointment system the clinic uses, and the clinic confirms by email or phone. What I built is the booking wizard and its connection to that system. On your site the wizard hands off to the software you already use if it accepts outside requests; otherwise it reaches the front desk by email or WhatsApp.",
        },
        {
          q: "Can my dental clinic website be in English and Spanish?",
          a: "Yes, and multilingual versions are included in clinic sites from €1,500. Each language is a separate version, so Google can index both. Acme Clinic runs in English, Spanish and Swedish. In the twelve months to 1 September 2026 its Search Console data shows 95 clicks from Sweden at an average position of 6.7, and top-three average positions for “zahnarzt marbella”, “dentiste marbella” and “tandarts marbella” without a page in German, French or Dutch.",
        },
        {
          q: "Should I use a dental clinic website template or a custom build?",
          a: "A WordPress or Wix template is enough if the site only has to show an address, a phone number and opening hours, and I will tell you so on the call. What it rarely brings is what a clinic needs: a booking request that reaches your appointment book, language versions Google can index separately, and structured data for each dentist and location. Your site is custom-coded on Next.js — not WordPress, not Wix, not a page builder. The domain, code and data sit in accounts under your name.",
        },
        {
          q: "Will my clinic show up on Google when people search for a dental clinic in Marbella?",
          a: "Your clinic's site will be built to rank, and nobody can promise you a position. Acme Clinic's Search Console data shows what that looks like in practice: over the twelve months to 1 September 2026 it averaged position 4.1 for “emergency dentist marbella”, 8.2 for “dentista urgencias marbella” and 10.7 for “dentista marbella”. Ranking for the broadest searches takes more than a website: a steady flow of Google reviews, a complete Business Profile and pages that each answer one query.",
        },
        {
          q: "Is the website GDPR compliant for patient enquiry forms?",
          a: "I cannot certify compliance; that belongs to your data-protection adviser. Your appointment form asks for name, contact, treatment, clinic and preferred time, and I add no field that asks for medical history; an optional free-text note goes in only if you want one. The site ships with the privacy policy, legal notice and consent wording you provide, and with a cookie banner; on Acme Clinic's site that banner is connected to Google Consent Mode.",
        },
      ],
      crossLinksBlurb:
        "If your clinic also offers aesthetic medicine, start with the aesthetic clinic page. The other links cover different sectors, built through the same call and fixed-quote process.",
      ogAlt:
        "Dental clinic website design in Marbella and the Costa del Sol — treatment pages, appointment requests, English and Spanish versions, from €1,500",
    },
  },
  es: {
    slug: "clinicas-dentales",
    name: "Clínicas dentales",
    summary:
      "La web de una clínica dental tiene que llevar de la búsqueda a la solicitud de cita: tratamientos, cita online, WhatsApp y una versión por idioma.",
    serviceName: "Diseño web para clínicas dentales",
    mailSubject: "Web para clínica dental",
    waMessage:
      "Hola Alex — necesito una página web para mi clínica dental. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "101.872", label: "Impresiones en Google, Acme Clinic, 15 meses" },
      { value: "1.894", label: "Clics desde Google en esos mismos 15 meses" },
      { value: "Top 3", label: "Dentista Marbella: alemán, francés, neerlandés" },
      { value: "27 %", label: "Clics de fuera de España, últimos 12 meses" },
    ],
    statsNote:
      "Google Search Console de Acme Clinic Marbella: impresiones y clics del 1 de junio de 2025 al 29 de agosto de 2026; las posiciones medias de «zahnarzt marbella», «dentiste marbella» y «tandarts marbella» (2,6, 2,3 y 2,9) y los clics de fuera de España (441 de 1.643) son de los doce meses hasta el 1 de septiembre de 2026.",
    statsSource: {
      label: "Lee el caso completo de Acme Clinic",
      href: "/es/casos/seo-clinica-acme-marbella",
    },
    og: {
      kicker: "Diseño web — clínicas dentales",
      headline: "La web de tu clínica dental, pensada para pedir cita.",
    },
    copy: {
      metaTitle: "Diseño web para clínicas dentales en Marbella y Málaga",
      metaDescription:
        "Diseño web para clínicas dentales en Marbella y Málaga: tratamientos, cita online, español e inglés. Presupuesto cerrado desde 1.500 €, en 1–2 semanas.",
      hero: {
        label: "Páginas web para dentistas — Marbella y Costa del Sol",
        h1Main: "Diseño web para clínicas dentales en Marbella, hecho para",
        h1Accent: "pedir cita desde el móvil.",
        sub: "Una página por tratamiento, cita online paso a paso y WhatsApp a un toque. Español e inglés, cada idioma con su propia versión. Presupuesto cerrado en la primera llamada; la web de una clínica, desde 1.500 €.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "Son las once de la noche, a alguien se le ha partido una muela y escribe «dentista urgencias Marbella» en el móvil. El diseño web para clínicas dentales decide lo que pasa después: o encuentra tu teléfono, tu WhatsApp y una forma de pedir cita, o vuelve atrás y prueba con la clínica siguiente.",
        "Soy Alex Doe, desarrollador freelance en Marbella. Programo la página web de tu clínica en Next.js y hablas siempre conmigo, que soy quien la construye. Desde 1.500 €, y online en una o dos semanas.",
        "La prueba está publicada. Hice y mantengo la web de Acme Clinic Marbella, una clínica privada con odontología, medicina estética y general, dos sedes y urgencias dentales 24 horas, en español, inglés y sueco. Google Search Console registró 101.872 impresiones y 1.894 clics de esa web entre el 1 de junio de 2025 y el 29 de agosto de 2026, y sus impresiones mensuales pasaron de 1.889 en junio de 2025 a 10.268 en julio de 2026.",
      ],
      features: [
        {
          title: "Cita online paso a paso",
          description:
            "Un asistente de reserva por pasos: tratamiento, día y hora, sede y datos de contacto. En la web de Acme Clinic la solicitud entra en el sistema de agenda que usa la clínica, y la clínica confirma por correo o teléfono. En tu web, la solicitud puede pasar al programa que ya usas o llegar a recepción por correo o WhatsApp.",
        },
        {
          title: "Una página por tratamiento",
          description:
            "Implantes, ortodoncia invisible, carillas, blanqueamiento, urgencias: cada tratamiento tiene su página, que explica en qué consiste, para quién es y cuántas visitas lleva, y resuelve las dudas del paciente antes de llamar. Si publicas precios, un «desde» o financiación, van ahí. Cada página lleva su título, su descripción y sus datos estructurados.",
        },
        {
          title: "WhatsApp, llamada y urgencias",
          description:
            "Llamada a un toque y botón de WhatsApp en cada pantalla, con el teléfono de urgencias a la vista si las atiendes. En Acme Clinic el visitante elige el motivo y el chat se abre con el mensaje escrito. El móvil manda: en Google, la tasa de clics de su web fue del 2,92 % en móvil, frente al 0,81 % en ordenador (Search Console, doce meses hasta el 1 de septiembre de 2026).",
        },
        {
          title: "Equipo, casos y reseñas",
          description:
            "Cada dentista con su ficha: nombre, titulación, número de colegiado si quieres mostrarlo, idiomas y tratamientos. Los casos de antes y después van en una galería ajustada al móvil, con el consentimiento del paciente. Tus reseñas de Google se citan con enlace al listado completo.",
        },
        {
          title: "Español e inglés, cada uno con su web",
          description:
            "Cada idioma tiene su propia versión, con sus URL, títulos y textos, y todas van enlazadas con hreflang para que Google enseñe la que toca. El 27 % de los clics desde Google de Acme Clinic llegaron de fuera de España (441 de 1.643, Search Console, doce meses hasta el 1 de septiembre de 2026).",
        },
        {
          title: "SEO local y textos legales",
          description:
            "Datos estructurados de dentista para cada sede, con dirección, horario y enlace de cómo llegar, escritos igual que en tu ficha de Google. La web sale con los textos legales y de consentimiento que me facilites, y un banner de cookies conectado a Google Consent Mode, para que Google Analytics no guarde cookies hasta que el visitante decida.",
        },
      ],
      localNote:
        "Trabajo en la web de Acme Clinic Marbella desde abril de 2025. Es una clínica de Marbella con odontología, medicina estética y medicina general, y su página de inicio saca 100/100 en SEO y 96 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026). Estoy en Marbella y trabajo en toda la Costa del Sol, de Estepona a Málaga.",
      processNote:
        "La web de una clínica dental con tratamientos, equipo y cita online es una web de empresa: una o dos semanas, con el primer enlace de vista previa al día siguiente de la llamada. Si solo necesitas una página, vale el ritmo de cuatro días de abajo.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para una clínica dental?",
          a: "La página web de una clínica dental cuesta desde 1.500 €: eso cubre una página por tratamiento, las fichas de los dentistas, la cita online por pasos, versiones en español e inglés, SEO completo, reseñas de Google y analítica. Una consulta de un solo gabinete a la que le basta una página (tratamientos, horario, mapa, llamada a un toque y WhatsApp) parte de 500 €. Un portal de pacientes, el pago online o un bot con IA entran en Plataforma & IA, 3.000 €+. La cifra exacta te la doy cerrada en la primera llamada de 15 minutos y no cambia después.",
        },
        {
          q: "¿Cuánto se tarda en tener lista la web de la clínica?",
          a: "La web de una clínica dental con tratamientos, equipo y cita online tarda una o dos semanas; la fecha de entrega la sabes en la primera llamada. Al día siguiente tienes un enlace de vista previa: una web real que abres en tu móvil. Después, una ronda de cambios en directo mientras hablamos, y el lanzamiento. Tu parte es el contenido: tratamientos, equipo y textos legales.",
        },
        {
          q: "¿Se puede pedir cita online desde la web?",
          a: "Sí, como solicitud que la clínica confirma. En la web de Acme Clinic el paciente elige servicio, hora y sede y deja sus datos; la solicitud entra en el sistema de agenda de la clínica, que confirma por correo o teléfono. Lo que hice yo es el asistente y su conexión con ese sistema. En tu web, el asistente enlaza con el programa que ya uses si admite solicitudes externas; si no, la solicitud llega a recepción por correo o WhatsApp.",
        },
        {
          q: "¿Mi clínica aparecerá en Google cuando busquen «dentista en Marbella» o «dentista Málaga»?",
          a: "Tu web sale preparada para posicionar, en Marbella o en Málaga, con una página por tratamiento y datos estructurados por sede; una posición concreta no te la puede prometer nadie. Lo que sí puedo enseñarte son datos reales: en Search Console, en los doce meses hasta el 1 de septiembre de 2026, Acme Clinic tuvo una posición media de 8,2 para «dentista urgencias marbella», 10,7 para «dentista marbella» y 4,1 para «emergency dentist marbella», en inglés. Para las búsquedas más amplias hacen falta, además de la web, reseñas constantes, una ficha de Google completa y páginas que respondan cada una a una búsqueda concreta.",
        },
        {
          q: "¿Hay que pagar una cuota mensual o mantenimiento?",
          a: "En una clínica cambian los tratamientos, entra un dentista nuevo o se abre una segunda sede, y la web tiene que seguirlo. Lo que cuesta tenerla en marcha, y si quieres que yo me ocupe de esos cambios, lo hablamos en la primera llamada y queda por escrito en el mismo presupuesto que fija el precio de la construcción, un precio que no cambia después. Las cuentas del dominio, del código y de los datos están a nombre de la clínica desde el primer día. Cada cambio posterior se presupuesta antes de hacerlo: una página de tratamiento nueva, una ficha, un idioma.",
        },
        {
          q: "¿La web cumple con el RGPD y la protección de datos de los pacientes?",
          a: "No puedo certificarlo: eso le corresponde a tu asesor de protección de datos. Tu formulario de cita pide nombre, contacto, tratamiento, sede y franja horaria, y no añado ningún campo que pregunte por el historial médico; el campo de notas solo va si tú lo quieres. La web sale con el aviso legal, la política de privacidad y los textos de consentimiento que me facilites, y con un banner de cookies: el de Acme Clinic está conectado a Google Consent Mode.",
        },
        {
          q: "¿Puede estar la web en español e inglés para pacientes extranjeros?",
          a: "Sí, y el multiidioma va incluido en la web de clínica desde 1.500 €. Cada idioma es una versión completa que Google puede indexar por separado. Acme Clinic está en español, inglés y sueco. En los doce meses hasta el 1 de septiembre de 2026, según Search Console, recibió 95 clics desde Suecia, con una posición media de 6,7. En ese periodo estuvo de media entre los tres primeros resultados para «zahnarzt marbella», «dentiste marbella» y «tandarts marbella», sin páginas en alemán, francés ni neerlandés.",
        },
        {
          q: "¿WordPress con plantilla o web programada a medida para una clínica dental?",
          a: "Si la web solo tiene que enseñar la dirección, el teléfono y el horario, una plantilla de WordPress basta, y te lo diré en la llamada. Lo que rara vez trae es lo que una clínica necesita: una cita online que llegue a tu agenda, versiones por idioma que Google pueda indexar por separado y datos estructurados por dentista y por sede. Yo programo la web en Next.js: no uso WordPress, Wix ni maquetadores.",
        },
      ],
      crossLinksBlurb:
        "Si tu clínica también ofrece medicina estética, empieza por la página de clínicas estéticas. Las demás cubren otros sectores, con la misma llamada y presupuesto cerrado.",
      ogAlt:
        "Diseño web para clínicas dentales en Marbella y Málaga — tratamientos, cita online, versiones en español e inglés, desde 1.500 €",
    },
  },
};
