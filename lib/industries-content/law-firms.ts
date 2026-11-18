import type { IndustrySource } from "../industries";

// Figures: Google Search Console for Acme Clinic Marbella, as published in lib/studies-content-en.ts and lib/studies-content-es.ts; Lighthouse scores from Google PageSpeed Insights, measured on five client sites on 2 October 2026.
export const lawFirms: IndustrySource = {
  key: "law-firms",
  proofProjects: ["Harbor Homes", "Acme Clinic"],
  highlightTier: 1,
  related: ["real-estate", "dental-clinics", "aesthetic-clinics"],
  en: {
    slug: "law-firms",
    name: "Law firms",
    summary:
      "A law firm site has to be found and trusted from abroad: a page per practice area, the lawyers by name, and a separate version per language.",
    serviceName: "Law firm website design",
    mailSubject: "Law firm website",
    waMessage: "Hi Alex — I need a website for my law firm. When can we do the 15-min call?",
    stats: [
      { value: "27%", label: "Clicks from outside Spain, Acme Clinic" },
      { value: "2.3–2.9", label: "Avg. position: dentist searches in DE, FR, NL" },
      { value: "6.7", label: "Average position in Sweden, 95 clicks" },
      { value: "2.92%", label: "Mobile click-through; 0.81% on desktop" },
    ],
    statsNote:
      "Google Search Console figures for Acme Clinic Marbella, a dental and aesthetic clinic whose site I built in English, Spanish and Swedish, for the twelve months to 1 September 2026. The German, French and Dutch positions came without a page in those languages.",
    statsSource: {
      label: "Read the Acme Clinic case study",
      href: "/case-studies/acme-clinic-marbella-seo",
    },
    og: {
      kicker: "Web design — law firms",
      headline: "A law firm website your foreign clients can read.",
    },
    copy: {
      metaTitle: "Law firm website design in Marbella & Costa del Sol",
      metaDescription:
        "Law firm website design in Marbella and the Costa del Sol for lawyers and solicitors: a page per practice area, a version per language. From €1,500.",
      hero: {
        label: "Websites for law firms and solicitors — Marbella & Costa del Sol",
        h1Main: "Law firm website design in Marbella, for clients who search",
        h1Accent: "in their own language.",
        sub: "A page for each practice area in plain language, the lawyers by name, and the phone number on every screen. English and Spanish as separate versions, with German or French where you advise in them. Fixed quote on the first call; firm sites from €1,500.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "A buyer in Manchester has had an offer accepted on a house in Marbella and searches for a lawyer on her phone. Law firm website design on the Costa del Sol is judged by what she finds next: a page about property purchases she can follow, the name of the solicitor who would handle it, and a way to ask a question.",
        "Clients abroad search in their own language, and the search data of a clinic on this coast shows how much. Acme Clinic Marbella is a dental and aesthetic clinic whose site I built in English, Spanish and Swedish. In Google Search Console, over the twelve months to 1 September 2026, 27% of its clicks came from outside Spain, and it averaged a top-three position for “dentist Marbella” in German, French and Dutch, without a page in those languages.",
        "Web design for lawyers and solicitors on this coast comes down to structure: one page per area of law, one profile per lawyer, and one version per language that Google can index on its own. There is no agency between the firm and the code: the partner who explains the practice on the call is talking to the developer who writes it, on Next.js. Firm sites start at €1,500, quoted fixed on that call.",
      ],
      features: [
        {
          title: "A page for each practice area",
          description:
            "Property purchases, residency, tax, inheritance, litigation: each area gets its own page, with its own URL and title. It says what the firm does in that kind of matter, who handles it and what clients ask before they call. One long “Services” page gives Google a single page to show.",
        },
        {
          title: "A version per language you advise in",
          description:
            "A conveyancing page in English and its Spanish counterpart are two pages, each with its own address, title and text, tied together with hreflang, which tells Google which version belongs to which language. Harbor Homes runs this way in four languages (English, Swedish, Dutch, German) and Acme Clinic in three (English, Spanish, Swedish). The legal wording in each language is the firm's: a lawyer approves it before launch.",
        },
        {
          title: "Lawyers by name, with credentials",
          description:
            "A profile for each lawyer: name, photo, practice areas, languages and bar registration number if you want it shown. The founding year and office address sit on the home page's first screen. A client abroad is choosing a person to trust, and wants to see who that is.",
        },
        {
          title: "Phone and enquiry form on every page",
          description:
            "The office number is tap-to-call at the top of every screen, and an enquiry form closes every practice page. It asks for a name, a contact, the area of law and a short message. A WhatsApp button goes in if the firm answers there. The legal pages ship with the wording you provide.",
        },
        {
          title: "Local SEO, practice by practice",
          description:
            "Each practice page carries the area of law and the town in its title, and the site publishes structured data naming the firm, its address and its languages. Search Console is connected at launch. That is groundwork. A position in Google depends on competition, the domain's history and time.",
        },
        {
          title: "Sober design that loads fast",
          description:
            "Navigation by practice area, type that reads on a phone, and text a lawyer at the firm approves before launch. Images are sized for the screen they load on. Five client sites I built score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026).",
        },
      ],
      localNote:
        "For a document services firm in Miami that handles Italian consular paperwork I built the client portal: trilingual, with document uploads that staff accept or reject with a reason, a six-step tracker from “requested” through apostille to “ready”, appointment booking and invoices paid by card through Stripe. My multilingual search results come from two sites, Harbor Homes and Acme Clinic: their Search Console data shows searches in English, Swedish, German, French and Dutch as well as Spanish. I work from Marbella with firms between Estepona and Málaga, and can come to the office before quoting if the partners prefer a meeting to a call.",
      processNote:
        "Come to the call with three lists: the practice areas, the lawyers who will have a profile, and the languages you advise in. Those set the size of the site and the date. The four steps below are written for a one-page site; a firm's site follows the same order over one to two weeks, and the longest step is yours: a lawyer reading each page before it goes live.",
      faq: [
        {
          q: "How much does law firm website design cost?",
          a: "From €1,500 for a firm with several practice areas, and from €500 for a sole practitioner; what moves the figure is how many areas and languages go online. One page (who you are, what you handle, how to reach you) is a landing. A page per practice area, a profile per lawyer and English and Spanish versions make a business site, with enquiry forms, full SEO setup and analytics in the price. A client area where people upload documents or pay an invoice is platform work, €3,000+. I count the areas, lawyers and languages with you on the first 15-minute call and give you one figure, and that figure does not change afterwards.",
        },
        {
          q: "How long does it take to build a website for a law firm?",
          a: "One to two weeks for a site with practice-area pages, lawyer profiles and two languages, provided a partner reads and approves each page inside that window. On a firm's site the date hangs on sign-off more than on the build, and it is set on the first call. A preview link follows the next day, so the partners comment on a working site instead of a PDF, in one revision round. A single page for a sole practitioner can be live 24-48 hours after the call.",
        },
        {
          q: "What pages does a law firm website need?",
          a: "A law firm website needs a home page that says who the firm is and where, a page for each practice area, a profile for each lawyer, and a contact page with phone, form, address and directions. Then the legal notice, privacy policy and cookie text, with the wording you provide. All of it exists once per language. Whether you also need a guides section is decided on the call.",
        },
        {
          q: "Can my law firm website be in English, Spanish, German and French?",
          a: "Yes: a law firm website can run in English, Spanish, German and French, and multilingual versions are included in firm sites from €1,500. Google can index each language as its own set of pages. German and French are two of the eight languages client sites of mine have shipped in; the others are English, Spanish, Italian, Swedish, Dutch and Russian. Harbor Homes runs in English, Swedish, Dutch and German; Acme Clinic in English, Spanish and Swedish. The firm approves the legal wording in each language.",
        },
        {
          q: "Does SEO work for law firms in Marbella?",
          a: "It can, when Google has a page to show for what the client types: the area of law and the town. Your site gets one for each practice area, in each language you advise in. Clients abroad do search in their own language: Acme Clinic Marbella, a dental and aesthetic clinic whose site I built in English, Spanish and Swedish, averaged positions 2.6, 2.3 and 2.9 for “zahnarzt marbella”, “dentiste marbella” and “tandarts marbella” over the twelve months to 1 September 2026 (Google Search Console), and 27% of its clicks came from outside Spain. Nobody can promise a position.",
        },
        {
          q: "What is the best website builder for law firms, and should I use a template, WordPress or a custom site?",
          a: "For a sole practitioner whose clients arrive by referral, a website builder and one of its stock templates will do: the site only confirms that the office exists. It stops being enough when strangers have to find the firm by what it handles, in a language other than Spanish. That takes a page per practice area and a separately indexable version per language, which is the part I write in code, on Next.js, with no WordPress, Wix or page builder underneath.",
        },
        {
          q: "Can I see examples of law firm websites you would build?",
          a: "Your own example comes first: the day after the call you get a preview link to a working site for your firm, not a PDF. Before that, you can open two live sites that run a separate version per language: Harbor Homes, a property portal in four languages, and Acme Clinic Marbella, a clinic site in three. For a document services firm in Miami that handles Italian consular paperwork I built a private client portal in three languages, with document uploads, a six-step tracker, appointment booking and invoices paid by card.",
        },
        {
          q: "Is there a monthly cost for hosting, domain and maintenance?",
          a: "What the site costs to keep running is something I tell you on the first call, alongside the price of the build, and both are written into the quote; the build price does not change afterwards. A firm's site changes slowly after that: a new partner's profile, a practice area added, a fourth language. Each of those is quoted when you ask for it, in a short call, at a fixed price. The domain, the code and the enquiry data are registered to the firm, not to me.",
        },
      ],
      crossLinksBlurb:
        "If the firm works with property buyers, the real estate page covers the agency side of the same purchase. The clinic pages use the same Acme Clinic search data.",
      ogAlt:
        "Law firm website design in Marbella and the Costa del Sol — practice-area pages, lawyer profiles, English and Spanish versions, from €1,500",
    },
  },
  es: {
    slug: "abogados",
    name: "Abogados",
    summary:
      "La web de un despacho tiene que encontrarla y entenderla un cliente de fuera: una página por área, los abogados con nombre y una versión por idioma.",
    serviceName: "Diseño web para abogados",
    mailSubject: "Web para despacho de abogados",
    waMessage:
      "Hola Alex — necesito una página web para mi despacho de abogados. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "27 %", label: "Clics de fuera de España, Acme Clinic" },
      { value: "2,3–2,9", label: "Posición media: «dentista» en tres idiomas" },
      { value: "6,7", label: "Posición media en Suecia, con 95 clics" },
      { value: "2,92 %", label: "Tasa de clics en móvil; en ordenador, 0,81 %" },
    ],
    statsNote:
      "Datos de Google Search Console de Acme Clinic Marbella, una clínica dental y estética cuya web hice en español, inglés y sueco, en los doce meses anteriores al 1 de septiembre de 2026. Las posiciones en alemán, francés y neerlandés llegaron sin páginas en esos idiomas.",
    statsSource: {
      label: "Lee el caso completo de Acme Clinic",
      href: "/es/casos/seo-clinica-acme-marbella",
    },
    og: {
      kicker: "Diseño web — abogados",
      headline: "La web del despacho, en el idioma de cada cliente.",
    },
    copy: {
      metaTitle: "Diseño web para abogados en Marbella y Málaga",
      metaDescription:
        "Diseño web para abogados y despachos en Marbella y Málaga: una página por área de práctica, varios idiomas y SEO local. Presupuesto cerrado desde 1.500 €.",
      hero: {
        label: "Webs para abogados y despachos — Marbella y Costa del Sol",
        h1Main: "Diseño web para abogados en Marbella y Málaga, área por área,",
        h1Accent: "idioma por idioma.",
        sub: "Una página por cada área del despacho, con el teléfono y el formulario a mano. Español e inglés como versiones separadas, y alemán o francés si atiendes en ellos. Presupuesto cerrado en la primera llamada; la web de un despacho, desde 1.500 €.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "Un comprador alemán ha visto una casa en Estepona y, antes de firmar nada, busca abogado desde el móvil, en alemán. El diseño web para abogados en la Costa del Sol se juega en ese momento: o tu despacho aparece con una página que él entiende y un teléfono a la vista, o aparece el despacho de al lado.",
        "La estructura es lo que decide: cada área de práctica tiene su página, cada abogado su ficha y cada idioma su propia versión. La web la programo yo, Alex Doe, desarrollador freelance en Marbella, en Next.js, y el socio que explica el despacho en la llamada habla con quien escribe el código. La web de un despacho parte de 1.500 €, con presupuesto cerrado en esa primera llamada de 15 minutos, y está online en una o dos semanas.",
        "El cliente de fuera busca en su idioma, y los datos de búsqueda de una clínica de esta costa enseñan cuánto. Acme Clinic Marbella es una clínica dental y estética cuya web hice en español, inglés y sueco. Según Google Search Console, en los doce meses anteriores al 1 de septiembre de 2026 el 27 % de sus clics llegó de fuera de España, y la web estuvo de media entre los tres primeros resultados para «dentista Marbella» en alemán, francés y neerlandés, sin páginas en esos idiomas.",
      ],
      features: [
        {
          title: "Una página por área de práctica",
          description:
            "Compraventa, extranjería, fiscal, herencias, mercantil, laboral, penal: cada área con su página, su URL y su título. Cuenta qué hace el despacho en ese tipo de asunto, quién lo lleva y qué dudas tiene el cliente antes de llamar. Una sola página de «Servicios» le deja a Google una única página que enseñar.",
        },
        {
          title: "SEO local: ciudad y especialidad",
          description:
            "Cada página lleva el área y la ciudad en el título, y la web publica datos estructurados con el nombre del despacho, la dirección y los idiomas de atención. Search Console queda conectado en el lanzamiento. Eso es la base técnica. La posición en Google depende de la competencia, del historial del dominio y del tiempo.",
        },
        {
          title: "Una versión por idioma en el que atiendes",
          description:
            "La página de compraventas en español y la de inglés son dos páginas distintas, cada una con su dirección, su título y su texto, enlazadas con hreflang para que Google sepa qué versión corresponde a cada idioma. Harbor Homes funciona así en inglés, sueco, neerlandés y alemán, y Acme Clinic en español, inglés y sueco. El texto jurídico de cada idioma es del despacho: un abogado lo aprueba antes de publicarlo.",
        },
        {
          title: "Abogados con nombre y colegiación",
          description:
            "Una ficha por abogado: nombre, foto, áreas, idiomas y número de colegiado si quieres mostrarlo. El año de fundación y la dirección van en la portada, en la primera pantalla. Quien confía una compraventa a un despacho quiere ver antes a quién se la confía.",
        },
        {
          title: "Teléfono y formulario siempre a mano",
          description:
            "El teléfono está arriba en todas las pantallas y se llama con un toque; cada página de área termina en un formulario de consulta: nombre, contacto, área y un mensaje breve. El botón de WhatsApp se añade si atiendes por ahí. Los textos legales se publican con la redacción que me facilites.",
        },
        {
          title: "Diseño sobrio, texto sin tecnicismos",
          description:
            "Navegación clara, letra legible y nada que se mueva porque sí. Los textos van en lenguaje llano, y un abogado del despacho revisa cada página antes de publicarla. La web se programa en Next.js y se piensa primero para el móvil, con las imágenes ajustadas a la pantalla en la que cargan.",
        },
      ],
      localNote:
        "Para una empresa de Miami que tramita documentación consular italiana hice el portal de clientes: trilingüe, con documentos que el personal acepta o rechaza indicando el motivo, un seguimiento en seis pasos (de «solicitado» a «listo», pasando por la apostilla), reserva de citas y facturas que se pagan con tarjeta mediante Stripe. Mis resultados de búsqueda en varios idiomas vienen de dos webs, Harbor Homes y Acme Clinic: sus datos de Search Console recogen búsquedas en inglés, sueco, alemán, francés y neerlandés, además de en español. Trabajo desde Marbella con despachos de Estepona a Málaga, y puedo pasar por el despacho antes de presupuestar si los socios prefieren una reunión a una llamada.",
      processNote:
        "Ven a la llamada con tres listas: las áreas de práctica, los abogados que tendrán ficha y los idiomas en los que atiendes. De ahí salen el tamaño de la web y la fecha. Los cuatro pasos de abajo están pensados para una web de una sola página; la de un despacho sigue el mismo orden a lo largo de una o dos semanas, y el paso más largo es tuyo: que un abogado lea cada página antes de publicarla.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para un despacho de abogados?",
          a: "Depende de cuántas áreas e idiomas necesite el despacho. Un abogado que ejerce solo y quiere una página (quién eres, qué asuntos llevas, cómo contactarte) necesita una landing, desde 500 €. Un despacho con una página por área, una ficha por abogado y versiones en español e inglés necesita una web de empresa, desde 1.500 €, con formularios de consulta, SEO completo y analítica dentro del precio. Un área de clientes para subir documentos o pagar una minuta es trabajo de plataforma, 3.000 €+. En la primera llamada de 15 minutos contamos áreas, abogados e idiomas y te doy una sola cifra, que no cambia después.",
        },
        {
          q: "¿Cuánto se tarda en tener lista la web del despacho?",
          a: "Entre una y dos semanas cuando hay áreas de práctica, fichas de abogados y dos idiomas, y siempre que un socio lea y apruebe cada página dentro de ese plazo. En la web de un despacho la fecha depende más del visto bueno que de la construcción, y se fija en la primera llamada. Al día siguiente llega un enlace de vista previa, para que los socios opinen sobre una web que funciona y no sobre un PDF, en una única ronda de cambios. Una sola página para un abogado que ejerce solo puede estar online 24–48 horas después de la llamada.",
        },
        {
          q: "¿Qué no puede faltar en una página web para abogados?",
          a: "Una página por cada área de práctica, los abogados con nombre y un teléfono que se vea sin buscarlo. Luego, una portada que diga quién es el despacho y dónde está, un formulario de consulta corto, dirección y horario, y el aviso legal, la política de privacidad y la de cookies con los textos que me facilites. Si tus clientes vienen de fuera, todo eso va completo en cada idioma.",
        },
        {
          q: "¿Qué errores hay que evitar en la web de un despacho de abogados?",
          a: "El primer error en la web de un despacho es meter todas las áreas en una sola página de «Servicios»: Google solo tiene esa página para enseñar. El segundo, poner un botón de traducción automática en vez de una versión real por idioma. El tercero, subir las imágenes sin optimizar a un alojamiento lento. Las tres cosas se deciden al construir la web. Como referencia, cinco webs que he hecho para clientes sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026).",
        },
        {
          q: "¿La web incluye posicionamiento SEO para aparecer en Marbella y Málaga?",
          a: "Sí, el SEO técnico y local va incluido: cada área con su página, la ciudad en el título, datos estructurados y Search Console conectado desde el lanzamiento. Lo que nadie te puede prometer es una posición concreta. Como referencia, Acme Clinic Marbella, una clínica dental y estética cuya web hice en español, inglés y sueco, tuvo una posición media de 2,6, 2,3 y 2,9 para «zahnarzt marbella», «dentiste marbella» y «tandarts marbella» en los doce meses anteriores al 1 de septiembre de 2026, según Google Search Console, y el 27 % de sus clics llegó de fuera de España.",
        },
        {
          q: "¿Puede estar la web del despacho en español, inglés y otros idiomas?",
          a: "Sí: español e inglés como mínimo, y alemán o francés si el despacho atiende en ellos; las versiones por idioma entran en la web de un despacho, desde 1.500 €, y Google puede indexar cada una por separado. El alemán y el francés están entre los ocho idiomas en los que he entregado webs de clientes; los otros son español, inglés, italiano, sueco, neerlandés y ruso. Harbor Homes está en inglés, sueco, neerlandés y alemán; Acme Clinic, en español, inglés y sueco. El texto jurídico de cada versión lo aprueba el despacho.",
        },
        {
          q: "¿La web del despacho se hace con WordPress o programada a medida?",
          a: "No trabajo con WordPress: programo la web del despacho a medida en Next.js, sin Wix ni maquetadores visuales. A un abogado que vive de las recomendaciones le vale un creador de webs con su plantilla: la web solo confirma que el despacho existe. Deja de valer cuando quien no te conoce tiene que encontrarte por el asunto que llevas y en un idioma que no es el español; eso pide una página por área y una versión indexable por idioma. El código es estándar: otro desarrollador podría continuarlo.",
        },
        {
          q: "¿Hay algún coste mensual de hosting, dominio o mantenimiento?",
          a: "La web de un despacho cambia poco: un socio nuevo, un área que se añade, un cuarto idioma. Cada uno de esos cambios se presupuesta cuando lo pides, con una llamada corta y un precio cerrado. En la primera llamada, además del precio de la construcción, que no cambia después, te digo qué cuesta mantener la web en funcionamiento, y las dos cifras quedan en el presupuesto por escrito. El dominio, el código y los datos de los formularios se registran a nombre del despacho, no al mío.",
        },
      ],
      crossLinksBlurb:
        "Si el despacho lleva compraventas, la página de inmobiliarias cubre el otro lado de la operación. Las páginas de clínicas usan los mismos datos de Acme Clinic.",
      ogAlt:
        "Diseño web para abogados en Marbella y Málaga — una página por área de práctica, fichas de abogados, versiones en español e inglés, desde 1.500 €",
    },
  },
};
