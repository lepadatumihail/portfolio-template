import type { IndustrySource } from "../industries";

// Figures: Acme Clinic's Search Console data as published in lib/studies-content-en.ts / -es.ts; its Lighthouse scores (SEO 100, performance 96 — desktop test, home page) from Google PageSpeed Insights, 2 October 2026; build details from the Acme Clinic and London practitioner repositories.
export const aestheticClinics: IndustrySource = {
  key: "aesthetic-clinics",
  proofProjects: ["Acme Clinic", "Bloom Method"],
  highlightTier: 1,
  related: ["dental-clinics", "hotels", "law-firms"],
  en: {
    slug: "aesthetic-clinics",
    name: "Aesthetic clinics",
    summary:
      "Treatment pages, a readable price list, doctor profiles and a booking request, in English and Spanish, for aesthetic clinics on the Costa del Sol.",
    serviceName: "Aesthetic clinic website design",
    mailSubject: "Website for an aesthetic clinic",
    waMessage: "Hi Alex — I need a website for my aesthetic clinic. When can we do the 15-min call?",
    stats: [
      { value: "47", label: "Treatments on Acme's aesthetic price list" },
      { value: "6", label: "Specialist profiles with structured data" },
      { value: "3.6×", label: "Mobile vs desktop click-through, 12 months" },
      { value: "5.2×", label: "Monthly Google impressions, Jun 2025 → Aug 2026" },
    ],
    statsNote:
      "Acme Clinic Marbella, a dental and aesthetic clinic. The first two figures count what is on its site: the aesthetic price list and the specialist pages. The other two are from its Google Search Console: device click-through for the twelve months to 1 September 2026, and monthly impressions from 1,889 in June 2025 to 9,778 in August 2026 (a partial month).",
    statsSource: { label: "Read the Acme Clinic case study", href: "/case-studies/acme-clinic-marbella-seo" },
    og: {
      kicker: "Web design — aesthetic clinics",
      headline: "Aesthetic clinic websites for patients who compare first.",
    },
    copy: {
      metaTitle: "Aesthetic clinic & med spa website design in Marbella",
      metaDescription:
        "Websites for aesthetic clinics and med spas in Marbella: a page per treatment, a price list, online booking, English and Spanish. Fixed quote from €1,500.",
      hero: {
        label: "Web design for aesthetic clinics — Marbella & Costa del Sol",
        h1Main: "Aesthetic clinic website design in Marbella for patients who",
        h1Accent: "compare first.",
        sub: "A page for every treatment, a price list that reads on a phone, the doctors by name, and a booking request your clinic confirms. In English and Spanish. Fixed quote on a 15-minute call. Business sites from €1,500.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Aesthetic clinic website design has one visitor in mind: someone on a sofa on a Sunday evening with three clinics open in three tabs, checking what a treatment costs and who would perform it. The site that answers both, and takes the booking request before the tab closes, is the one still open at the end.",
        "The main proof is Acme Clinic, a dental and aesthetic clinic in Marbella. Its site has an aesthetics service page, an aesthetic price list of 47 treatments, six specialist profiles and a booking wizard that can open with aesthetic appointments already selected. It runs in English, Spanish and Swedish, and its Search Console data is published as a case study.",
        "The second is a small site I built in October 2026 for a solo aesthetics practitioner in the UK. It has a price list of 24 priced treatments, each row opening WhatsApp with that treatment's name already typed, and a before-and-after gallery. A clinic, med spa or skin clinic here gets a site coded on Next.js, with no WordPress, Wix or page builder underneath.",
      ],
      features: [
        {
          title: "Each treatment, its practitioner and its price",
          description:
            "Each treatment gets its own page: what it is, who performs it, what it costs or starts from, and a booking button that already knows which treatment the visitor was reading. Every page carries its own title, description and Service structured data. The clinical wording comes from you and is yours to approve.",
        },
        {
          title: "A price list that reads on a phone",
          description:
            "Exact or \"from\" prices, grouped the way a patient thinks about them and readable without pinching the screen. Acme Clinic's aesthetic price list holds 47 items in seven groups and is also published as structured data. On a UK practitioner's site I built, each of the 24 priced rows has its own WhatsApp link.",
        },
        {
          title: "Booking requests the clinic confirms",
          description:
            "The booking button on a treatment page already knows the treatment, so the patient has three things left to give: a slot, a location and contact details. On Acme Clinic's site the slots come from the appointment system the clinic uses, and the request goes back into it for the clinic to confirm. If you already run booking software, the site links or hands off to it.",
        },
        {
          title: "A before-and-after gallery",
          description:
            "Results photos served in the right size for each screen, so a long gallery does not stall on mobile data. Which photos appear, and with whose consent, is the clinic's decision. The disclaimers and consent wording you supply go where you want them. A UK practitioner's site I built has a gallery made this way.",
        },
        {
          title: "Doctors and team, by name",
          description:
            "A profile page for each doctor or practitioner, with the qualifications and photos you provide, linked from the treatments they perform. Acme Clinic's site has six specialist profiles, each published to search engines as a person attached to the clinic, plus a link out to its Google reviews.",
        },
        {
          title: "Two languages, built to rank",
          description:
            "English and Spanish as separate versions, each with its own URLs, titles and descriptions, linked with hreflang. Structured data for the clinic and its locations goes in from the start, and Search Console is connected on day one. Acme Clinic's site runs this way in English, Spanish and Swedish.",
        },
      ],
      localNote:
        "The proof here comes from Acme Clinic, which offers aesthetic medicine alongside dentistry in Marbella; from a small site for a solo aesthetics practitioner in the UK; and, for conversion work, from Bloom Method, a bilingual funnel for a digital course. I work from Marbella and cover the Costa del Sol, from Estepona to Málaga, where a patient comparing treatments may read English before Spanish.",
      processNote:
        "The four days below are the rhythm for a one-page site. A clinic site with treatment pages, a price list and two languages is a business site: one to two weeks, with the date fixed on the first call. Have ready your treatment list, prices, team details, the photos you may publish and the legal and consent wording you use.",
      faq: [
        {
          q: "How much does an aesthetic clinic website cost?",
          a: "An aesthetic clinic website with several treatment pages is a business site, from €1,500. A one-page site for a single practitioner starts at €500. A patient portal, payments or an AI assistant is platform work, from €3,000. You get the exact fixed quote on the first 15-minute call, and it does not change afterwards. The same quote states in writing what the site costs to run and how later changes, such as a new treatment page or a revised price list, are priced.",
        },
        {
          q: "How long does it take to build a website for an aesthetic clinic?",
          a: "A full aesthetic clinic website takes one to two weeks, with the delivery date fixed on the first call. A one-page site can be live 24-48 hours after that call. Either way you get a live preview link the next day and one revision round. The part that depends on you is the material: treatment descriptions, prices, doctor profiles and photos you may publish.",
        },
        {
          q: "Can patients book treatments online through the website?",
          a: "Yes, as a request the clinic confirms, and it starts from the treatment page. On Acme Clinic's site the Book button on the aesthetics page opens the booking wizard with the aesthetic appointment type already chosen, so the patient goes straight to the free slots, which the wizard reads from the appointment system the clinic uses, then picks a location. The request lands in that system and the clinic confirms by email or phone. If you already use booking software, the site links or hands off to it.",
        },
        {
          q: "What is the best website builder for an aesthetic clinic, or should I hire a web designer?",
          a: "A builder is enough for one page with a phone number. Hire someone once the site carries treatment pages, prices, two languages and booking. A clinic site from me is custom-coded on Next.js, with domain, code and data in accounts under your name. The technical side can be measured: Acme Clinic's site scores 100/100 for SEO and 96 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026). A clinic site is mostly photographs, so each image is served in the size the screen needs.",
        },
        {
          q: "Can an aesthetic clinic website run in English and Spanish?",
          a: "Yes — an aesthetic clinic website can run in English and Spanish as separate versions, each with its own URLs, titles, descriptions and content, linked with hreflang. More than one language is included in business sites from €1,500. The model is Acme Clinic's site, which has separate English, Spanish and Swedish versions. You check the treatment wording in each language before launch.",
        },
        {
          q: "Can I show before-and-after photos and treatment prices on a clinic website in Spain?",
          a: "A clinic website can carry before-and-after photos and treatment prices. What a clinic in Spain may publish is a matter for the clinic and its legal adviser, and I do not certify it. My part is the build: a gallery with images sized for phones, a price list with exact or \"from\" prices, and the disclaimers and consent wording you supply, placed where you want them.",
        },
        {
          q: "Will my clinic show up on Google when people search for an aesthetic clinic in Marbella?",
          a: "The site is built to rank for that search, but I cannot promise a position: that depends on the clinics you compete with, your domain's history and time. The groundwork goes in from the start — a page per treatment, structured data for the clinic and its doctors, a version per language, Search Console connected on day one. For a sense of pace: across all its searches, the site of Acme Clinic, a dental and aesthetic clinic in Marbella, went from 1,889 Google impressions a month in June 2025 to 9,778 in August 2026, a partial month (Google Search Console).",
        },
        {
          q: "Do you also build websites for med spas, skin clinics and beauty clinics?",
          a: "Yes — a med spa, a skin clinic and a beauty clinic need the same things from a site: treatments, prices, people, results and a way to book. The proof is Acme Clinic's aesthetics page and its price list of 47 treatments, and the site I built for a solo aesthetics practitioner in the UK, with 24 priced treatments and a before-and-after gallery. A one-page site starts at €500. Several treatment pages make it a business site, from €1,500.",
        },
      ],
      crossLinksBlurb:
        "Dentistry has its own page, and so do hotels and law firms. The last link is web design in Marbella in general.",
      ogAlt:
        "Aesthetic clinic website design in Marbella and the Costa del Sol — treatment pages, price list and online booking, from €1,500",
    },
  },
  es: {
    slug: "clinicas-esteticas",
    name: "Clínicas estéticas",
    summary:
      "Tratamientos explicados, precios a la vista, equipo médico y cita online, en español e inglés, para clínicas estéticas de la Costa del Sol.",
    serviceName: "Diseño web para clínicas estéticas",
    mailSubject: "Web para una clínica estética",
    waMessage:
      "Hola Alex — necesito una página web para mi clínica estética. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "47", label: "Tratamientos en la lista de precios de Acme" },
      { value: "6", label: "Fichas de especialistas con datos estructurados" },
      { value: "3,6×", label: "Tasa de clics, móvil frente a ordenador, 12 meses" },
      { value: "5,2×", label: "Impresiones/mes en Google, jun. 2025 → ago. 2026" },
    ],
    statsNote:
      "Acme Clinic Marbella, clínica dental y de medicina estética. Las dos primeras cifras cuentan lo que hay en su web: la lista de precios de estética y las fichas de especialistas. Las otras dos son de su Google Search Console: tasa de clics por dispositivo en los doce meses hasta el 1 de septiembre de 2026 e impresiones mensuales, de 1.889 en junio de 2025 a 9.778 en agosto de 2026 (mes incompleto).",
    statsSource: { label: "Lee el caso de Acme Clinic", href: "/es/casos/seo-clinica-acme-marbella" },
    og: {
      kicker: "Diseño web — clínicas estéticas",
      headline: "Webs para clínicas estéticas: tratamiento, precio y cita.",
    },
    copy: {
      metaTitle: "Diseño web para clínicas de medicina estética en Marbella",
      metaDescription:
        "Páginas web para clínicas estéticas y de medicina estética en Marbella y Málaga: tratamientos, precios, cita online y versión en inglés. Desde 1.500 €.",
      hero: {
        label: "Webs para clínicas estéticas — Marbella, Málaga y Costa del Sol",
        h1Main: "Diseño web para clínicas estéticas en Marbella, del tratamiento",
        h1Accent: "a la cita online.",
        sub: "Una página por tratamiento, los precios a la vista, el equipo médico con nombre y apellidos y una solicitud de cita que confirma tu clínica. En español e inglés. Presupuesto cerrado en una llamada de 15 minutos. Web de empresa desde 1.500 €.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "Quien se plantea un tratamiento de medicina estética compara tres clínicas desde el móvil antes de escribir a ninguna: qué cuesta, quién lo hace y cómo se pide cita. El diseño web para clínicas estéticas consiste en responder a esas tres preguntas antes de que cierre la pestaña.",
        "La referencia principal es Acme Clinic, una clínica dental y de medicina estética de Marbella. Su web tiene una página del servicio de estética, una lista de precios de estética con 47 tratamientos, seis fichas de especialistas y un asistente de cita por pasos que puede abrirse con la cita de estética ya elegida. Está en español, inglés y sueco, y sus datos de Search Console están publicados como caso de estudio.",
        "La segunda es una web pequeña que hice en octubre de 2026 para una profesional de la estética que trabaja sola en el Reino Unido. Tiene una lista de 24 tratamientos con precio en la que cada fila abre WhatsApp con el nombre del tratamiento ya escrito, y una galería de antes y después. Para tu clínica o centro de estética, la web va programada a medida en Next.js: ni WordPress, ni Wix, ni un constructor de páginas.",
      ],
      features: [
        {
          title: "Cita online que confirma la clínica",
          description:
            "El botón de cita de cada tratamiento ya sabe de qué tratamiento se trata, así que al paciente le quedan tres cosas por dar: hueco, centro y datos de contacto. En la web de Acme Clinic los huecos salen del sistema de agenda que usa la clínica y la solicitud vuelve a él para que la clínica la confirme. Si ya usas un programa de citas, la web enlaza o deriva a él.",
        },
        {
          title: "Cada tratamiento, con quién lo hace y cuánto cuesta",
          description:
            "Quien busca un tratamiento concreto llega a una página solo de ese tratamiento: en qué consiste, quién lo realiza y cuánto cuesta o desde cuánto. Desde ahí pide cita con el tratamiento ya elegido. Cada página lleva título, descripción y datos estructurados de servicio propios. El texto clínico lo aportas y lo apruebas tú.",
        },
        {
          title: "Precios a la vista",
          description:
            "Precios exactos o «desde», ordenados como los busca un paciente y legibles en el móvil sin hacer zoom. La lista de precios de estética de Acme Clinic tiene 47 conceptos en siete grupos. En la web que hice para una profesional de la estética del Reino Unido, cada una de las 24 filas con precio lleva su enlace de WhatsApp.",
        },
        {
          title: "Galería de antes y después",
          description:
            "Fotos de resultados que se cargan al tamaño de cada pantalla, para que una galería larga no se atasque con datos móviles. Qué fotos se publican, y con qué consentimiento, lo decide la clínica. Los avisos y textos de consentimiento que me pases van donde indiques.",
        },
        {
          title: "El equipo, con nombre y apellidos",
          description:
            "Antes de pedir cita, el paciente mira quién le atenderá. Cada médico o profesional tiene su ficha, con la titulación y las fotos que aportes, enlazada desde sus tratamientos. La web de Acme Clinic tiene seis fichas de especialistas, publicadas para los buscadores como personas vinculadas a la clínica, y un enlace a sus reseñas de Google.",
        },
        {
          title: "En español e inglés, hecha para Google",
          description:
            "Español e inglés como versiones separadas, cada una con sus URL, títulos y descripciones, enlazadas con hreflang. Los datos estructurados de la clínica y de sus centros van desde el principio, y Search Console queda conectado el primer día. La web de Acme Clinic funciona así en español, inglés y sueco.",
        },
      ],
      localNote:
        "Lo que enseño viene de Acme Clinic, que ofrece medicina estética junto a la odontología en Marbella; de una web pequeña para una profesional de la estética en el Reino Unido; y, para la parte de conversión, de Bloom Method, un embudo bilingüe para un curso digital. Trabajo desde Marbella para toda la Costa del Sol, de Estepona a Málaga capital.",
      processNote:
        "Los cuatro días de abajo son el ritmo de una web de una sola página. Una clínica con páginas de tratamiento, lista de precios y dos idiomas necesita una web de empresa: una o dos semanas, con la fecha cerrada en la primera llamada. Ten a mano tratamientos, precios, datos del equipo, fotos que puedas publicar y los textos legales y de consentimiento que uses.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para una clínica estética?",
          a: "La página web de una clínica estética cuesta desde 1.500 € si necesita varias páginas de tratamiento: es una web de empresa. Una web de una sola página parte de 500 €. Un portal de pacientes, pagos online o un bot con IA es trabajo de plataforma, desde 3.000 €. El presupuesto cerrado te lo doy en la primera llamada de 15 minutos y no cambia después. Los costes de funcionamiento y el trabajo posterior al lanzamiento se hablan en esa misma llamada y quedan escritos en el presupuesto.",
        },
        {
          q: "¿Cuánto se tarda en hacer la web de una clínica estética?",
          a: "Una o dos semanas para la web completa de una clínica, con la fecha cerrada en la primera llamada. Una web de una sola página puede estar online 24–48 horas después de esa llamada. En los dos casos tienes un enlace de vista previa real al día siguiente y una ronda de cambios. De ti depende el material: tratamientos, precios, fichas del equipo y fotos que puedas publicar.",
        },
        {
          q: "¿Qué debe tener una web de clínica estética?",
          a: "Una web de clínica estética debe tener seis cosas: una página por tratamiento, los precios, el equipo con nombre y titulación, resultados reales, una forma de pedir cita y una base técnica rápida que Google pueda leer. La última se puede medir: la web de Acme Clinic saca 100/100 en SEO y 96 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026). Una web de clínica estética es casi toda fotografía, así que cada imagen se sirve al tamaño de la pantalla que la abre.",
        },
        {
          q: "¿Se puede reservar cita online desde la web?",
          a: "Sí, como solicitud que la clínica confirma, y se pide desde la propia página del tratamiento. En la web de Acme Clinic el botón de cita de la página de estética abre el asistente con la cita de estética ya elegida: el paciente pasa directamente a los huecos libres, que el asistente lee del sistema de agenda que usa la clínica, y elige centro. La solicitud entra en ese sistema y la clínica la confirma por correo o por teléfono.",
        },
        {
          q: "¿Qué software es adecuado para clínicas estéticas y se puede conectar con la web?",
          a: "El programa de citas lo eliges tú; yo no recomiendo ninguno, y la web enlaza o deriva al sistema que ya uses. Qué conexión admite tu programa se mira en la primera llamada y queda escrito en el presupuesto. Un caso real: en la web de Acme Clinic cada solicitud de cita entra en el sistema de agenda de la clínica, pendiente de confirmación.",
        },
        {
          q: "¿Cómo promocionar un centro de estética en Google?",
          a: "Un centro de estética se promociona en Google con una web que Google pueda leer, con reseñas y una ficha de Google completa, y con tiempo. Una posición concreta no te la puedo prometer. La web aporta lo primero: una página por tratamiento, datos estructurados de la clínica y su equipo, una versión por idioma y Search Console conectado desde el primer día.",
        },
        {
          q: "¿Puedo mostrar precios y fotos de antes y después de los tratamientos?",
          a: "La web puede llevar precios y fotos de antes y después. Qué permite publicar a tu clínica la normativa de publicidad sanitaria es algo que debes ver con tu asesor jurídico; yo no lo certifico. Mi parte es construirlo: una galería con imágenes adaptadas al móvil, una lista con precios exactos o «desde», y los avisos y textos de consentimiento que me pases.",
        },
        {
          q: "¿La web de una clínica estética puede estar en español e inglés?",
          a: "Sí: la web de una clínica estética puede ir en español e inglés como versiones separadas, cada una con sus URL, títulos, descripciones y contenido, enlazadas con hreflang. Más de un idioma va incluido en la web de empresa desde 1.500 €. El modelo es la web de Acme Clinic, que tiene versiones separadas en español, inglés y sueco. El texto de los tratamientos lo revisas tú en cada idioma antes de publicar.",
        },
      ],
      crossLinksBlurb:
        "Si también ofreces odontología, tiene su propia página, igual que los hoteles y los despachos de abogados. El último enlace es la página general de diseño web.",
      ogAlt:
        "Diseño web para clínicas estéticas en Marbella y la Costa del Sol — páginas de tratamiento, precios y cita online, desde 1.500 €",
    },
  },
};
