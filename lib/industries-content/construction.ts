import type { IndustrySource } from "../industries";

// Figures: the site-wide Search Console totals (lib/data.ts) and Lighthouse scores of five client sites (Google PageSpeed Insights, home pages, desktop test, 2 October 2026). Shown as two scores only, SEO and "performance"; the word "desktop" appears only in statsNote.
export const construction: IndustrySource = {
  key: "construction",
  proofProjects: ["Hillside Living", "Summit Builders"],
  // quoted after the proof cards; lib/reviews.ts checks the words against the review
  review: {
    author: "Thomas Keller",
    excerpt:
      "Alex hat unsere Webseite gebaut und wir sind mit dem Ergebnis sehr zufrieden. Die Umsetzung war schnell, professionell und unkompliziert.",
  },
  highlightTier: 1,
  related: ["real-estate", "car-wash", "hotels"],
  en: {
    slug: "construction-companies",
    name: "Construction companies",
    summary:
      "A builder's site has to show finished work, explain each type of job and turn a visit from a phone into a quote request.",
    serviceName: "Construction company website design",
    mailSubject: "Website for a construction company",
    waMessage:
      "Hi Alex — I run a construction and renovation company and need a website. When can we do the 15-min call?",
    stats: [
      { value: "6.3M+", label: "Google impressions across client sites, 6 months" },
      { value: "100/100", label: "Lighthouse SEO score, five client sites" },
      { value: "94–100", label: "Lighthouse performance, same sites" },
      { value: "25+", label: "Sites shipped" },
    ],
    statsNote:
      "Impressions: Google Search Console across client properties, last six months. Lighthouse scores: Google PageSpeed Insights, desktop test, 2 October 2026, for five client sites — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders and Bloom Method.",
    reviewTranslation:
      "Alex built our website and we are very happy with the result. The work was quick, professional and hassle-free.",
    og: {
      kicker: "Web design — construction & renovation",
      headline: "A builder's website that leads with the finished job.",
    },
    copy: {
      metaTitle: "Construction company website design in Marbella",
      metaDescription:
        "Web design for builders and renovation firms in Marbella: service pages, before-and-after project pages, quote forms, English and Spanish. From €1,500.",
      hero: {
        label: "Web design for builders and renovation firms — Marbella & Costa del Sol",
        h1Main: "Construction company website design in Marbella that leads with",
        h1Accent: "the finished job.",
        sub: "A homeowner compares three builders on a phone and calls one. Your site gets a page per type of work, a page per finished project with its before and after, and a quote form that reaches you. Fixed price on the first call; business sites from €1,500.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Construction company website design often stops at a logo, a stock photo of a crane and a contact page. You have better material: the kitchens, bathrooms and villas you've already handed over. I build the site around those jobs, for builders, contractors and renovation firms in Marbella and along the Costa del Sol.",
        "Nobody hires a builder on a slogan. The homeowner wants to see a job like theirs, finished, and to know who will be in the house for three months. So each type of work gets its own page — refurbishments, kitchens, bathrooms, extensions, new builds — and so does each finished project, with its before and after. Every page ends in a short quote form, a phone number and WhatsApp.",
        "Hillside Living, a construction, renovation and property-development company on the Costa del Sol, runs on a site I built: service pages written around what people search for, structured data, and enquiry forms with spam protection. Summit Builders, a heating, plumbing and bathroom-renovation company in southern Germany, has a page per service and a six-step renovation process. In Google's Lighthouse test both home pages score 100/100 for SEO and 97–100 for performance (Google PageSpeed Insights, 2 October 2026).",
      ],
      features: [
        {
          title: "A page for each type of work",
          description:
            "On a construction company website, refurbishments, kitchens, bathrooms, extensions and new builds each get their own page, title and photos, so a search for a bathroom renovation lands on bathrooms. Summit Builders's site works this way: complete bathrooms, heating, air conditioning and emergency call-outs each have a page.",
        },
        {
          title: "Project pages with before and after",
          description:
            "Each finished job gets a page: the same room before and after, a gallery, a few lines on what was done. I'm building this now for a home-renovation company on the Costa del Sol, with draggable before-and-after sliders, galleries and video. Every image has a fixed size and a placeholder, so the page doesn't jump while it loads.",
        },
        {
          title: "Phone photos, turned into fast pages",
          description:
            "For the renovation site in progress I built a pipeline that turns photos and videos straight from a phone into fast web formats and strips the location data, so the position of a client's home never travels with the picture. Hillside Living and Summit Builders also serve their photos in modern web formats. On your site, each photo is sized for the screen it opens on and loads as the visitor scrolls.",
        },
        {
          title: "Quote requests that reach you",
          description:
            "A short form asks for the type of work, the town and a phone number. On Hillside Living the forms post to a webhook behind spam protection and only confirm once delivery has succeeded; on Summit Builders each request lands in the company inbox. On your site, the phone number and WhatsApp sit on every page.",
        },
        {
          title: "Built to be found in your towns",
          description:
            "Page titles carry the service and the town. Structured data tells Google you're a general contractor, what you do and where. A sitemap lists every service and project page, the site links to your Google Business Profile, and Search Console is connected from day one. Hillside Living and Summit Builders both score 100/100 for SEO in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026). No position is promised.",
        },
        {
          title: "English and Spanish, a version each",
          description:
            "The owner of a villa on the Costa del Sol may read English, German or Swedish before Spanish. Each language gets its own URLs, titles and text rather than a widget over one version, so Google can show the English page to someone searching in English. Acme Clinic, a dental clinic in Marbella, runs this way in Spanish, English and Swedish, with per-locale SEO.",
        },
      ],
      localNote:
        "Two live sites back this page, and one is on this coast. Hillside Living builds, renovates and develops property on the Costa del Sol; its site is in English. Summit Builders is in southern Germany, and its site is in German. A third, a project portfolio for a home-renovation company here, is in progress. I'm based in Marbella and work across the Costa del Sol, from Estepona to Málaga, where a homeowner planning a refurbishment may search in English, German or Swedish as well as Spanish.",
      processNote:
        "A builder's site is mostly photographs, so that's where the time goes. On the call we pick the types of work and the finished jobs that deserve a page; you send the photos as they sit on your phone. A single-page site can follow the four days below as written; a full site with service and project pages takes one to two weeks.",
      faq: [
        {
          q: "How much does a construction company website cost?",
          a: "From €1,500 for a full business site, the tier a building or renovation firm usually needs: service pages, project pages, a quote form and more than one language. A single page with your services, a gallery and a way to reach you starts at €500. Anything with a client portal, payments or a dashboard starts at €3,000. The exact fixed quote comes on the first 15-minute call and doesn't change afterwards.",
        },
        {
          q: "What is the best website design for a construction company?",
          a: "The best website design for a construction company is the one that lets a homeowner find a job like theirs in two taps: each type of work on its own page, each finished project on its own page with before-and-after photos, real photographs of your own jobs, a quote form and a phone number throughout, and the facts people check before letting a crew into their house — years trading, insurance, who's on the team. It's judged by someone with a damp wall and three tabs open.",
        },
        {
          q: "How long does it take to build a website for a building or renovation company?",
          a: "A full construction company website with service and project pages takes one to two weeks; a single-page site can be live 24-48 hours after the first call. You get the delivery date on that call, with the price, and a live preview link the next day to open on your phone between jobs. What takes time on a builder's site is the material: photos of finished jobs and the list of services.",
        },
        {
          q: "Should I use a website builder like Wix instead of hiring a web designer?",
          a: "A website builder like Wix is a fair choice if you need one page with a phone number and have a free weekend. The trade-off is control: image compression, URL structure and a second language work the way the platform's settings allow. I custom-code on Next.js — not WordPress, not Wix, not a page builder — so those are decided in the code, site by site. A single-page site from me starts at €500.",
        },
        {
          q: "Can my website be in English and Spanish for clients on the Costa del Sol?",
          a: "Yes — a business site from €1,500 includes more than one language, each with its own URLs, page titles and text instead of a translation widget. Google can show the English page to a homeowner searching in English, who then reads the project descriptions and fills in the quote form in English; the Spanish version works the same way. Acme Clinic, a dental clinic in Marbella, runs in Spanish, English and Swedish, and Harbor Homes, a property portal, in English, Swedish, Dutch and German.",
        },
        {
          q: "How do I show completed projects and before-and-after photos on my website?",
          a: "With a page per project, not one endless gallery. Each page carries the before and after of the same room, a set of photos and a few lines on what was done; the before-and-after can be a slider the visitor drags. This is what I'm building now for a home-renovation company on the Costa del Sol, with galleries and video. Each project page gets its own title, share image and sitemap entry, so a finished kitchen is a page Google can show on its own.",
        },
        {
          q: "Will my company show up on Google when people search for builders in Marbella?",
          a: "Your site will be built to be found for those searches, but nobody can promise where it will rank. The groundwork is mine: a page per service, titles naming the service and the town, contractor structured data, a sitemap, and Search Console connected from day one. That groundwork can be measured: five client sites I built score 100/100 for SEO in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026). The map results lean on your Google Business Profile and reviews, which a website can't supply.",
        },
        {
          q: "Are hosting, domain and maintenance included?",
          a: "The quote covers the build, with domain setup, analytics and WhatsApp wired at launch, and it doesn't change afterwards. The domain, the code and the data sit in accounts under your own name; nothing is rented from me or locked to a platform. Running costs, and whether you want further work after launch, are settled on the first 15-minute call and written into the quote. Later changes — a new service page, a new language — are quoted the same way: a short call, a fixed price, a date.",
        },
      ],
      crossLinksBlurb:
        "If your company also sells what it builds, the estate-agency page is the next one to read. The others start from the same place: someone on a phone who wants to see the work before getting in touch.",
      ogAlt:
        "Construction company website design in Marbella — service pages, project pages with before-and-after photos and quote forms, from €1,500",
    },
  },
  es: {
    slug: "empresas-de-reformas",
    name: "Empresas de reformas",
    summary:
      "La web de una empresa de reformas tiene que enseñar obras terminadas, explicar cada servicio y convertir la visita en una solicitud de presupuesto.",
    serviceName: "Diseño web para empresas de reformas",
    mailSubject: "Web para empresa de reformas",
    waMessage:
      "Hola Alex — tengo una empresa de reformas y necesito una página web. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "6,3M+", label: "Impresiones en Google de webs de clientes, 6 meses" },
      { value: "100/100", label: "SEO en Lighthouse, cinco webs de clientes" },
      { value: "94–100", label: "Rendimiento en Lighthouse, las mismas webs" },
      { value: "25+", label: "Webs entregadas" },
    ],
    statsNote:
      "Impresiones: Google Search Console, webs de clientes, últimos seis meses. Lighthouse: Google PageSpeed Insights, prueba de escritorio, 2 de octubre de 2026, en cinco webs de clientes — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders y Bloom Method.",
    reviewTranslation:
      "Alex hizo nuestra web y estamos muy contentos con el resultado. El trabajo fue rápido, profesional y sin complicaciones.",
    og: {
      kicker: "Diseño web — reformas y constructoras",
      headline: "La web de tu empresa de reformas, con tus obras por delante.",
    },
    copy: {
      metaTitle: "Diseño web para empresas de reformas en Marbella y Málaga",
      metaDescription:
        "Páginas web para empresas de reformas y constructoras en Marbella y Málaga: obras con antes y después, formulario de presupuesto, SEO local. Desde 1.500 €.",
      hero: {
        label: "Páginas web para reformas y constructoras — Marbella y Costa del Sol",
        h1Main: "Diseño web para empresas de reformas en Marbella, para que te pidan",
        h1Accent: "presupuesto.",
        sub: "Quien va a reformar su casa mira dos o tres webs en el móvil y escribe a la que tiene una obra como la suya. Tu página web enseña cada obra con su antes y su después, explica cada servicio y deja el presupuesto a un toque. Precio cerrado en la primera llamada; web de empresa desde 1.500 €.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "El diseño web para empresas de reformas se queda muchas veces en un logo, cuatro fotos de banco de imágenes y un «presupuesto sin compromiso». Tú tienes mejor material: las cocinas, los baños y las casas que ya has entregado. Yo monto la web a partir de esas obras, para empresas de reformas y constructoras de Marbella y la Costa del Sol.",
        "La web de Hillside Living, empresa de construcción, reformas y promoción en la Costa del Sol, la hice yo: páginas de servicio pensadas para lo que la gente busca, datos estructurados y formularios con protección antispam. La de Summit Builders, empresa de calefacción, fontanería y reforma de baños del sur de Alemania, tiene una página por servicio y la reforma explicada en seis pasos. En la prueba Lighthouse de Google, las dos portadas sacan 100/100 en SEO y entre 97 y 100 en rendimiento (Google PageSpeed Insights, 2 de octubre de 2026).",
        "Una reforma integral no se contrata por un eslogan. El cliente quiere ver una obra parecida a la suya, terminada, y saber quién va a estar tres meses en su casa. Por eso cada tipo de trabajo tiene su página — reformas integrales, cocinas, baños, obra nueva — y cada obra terminada, la suya, con su antes y su después. Todas acaban igual: un formulario corto de presupuesto, un teléfono y WhatsApp.",
      ],
      features: [
        {
          title: "Cada obra, con su propia página",
          description:
            "Cada trabajo terminado tiene su página: la misma estancia antes y después, una galería y unas líneas sobre lo que se hizo. Es lo que estoy montando ahora en la web de una empresa de reformas de viviendas de la Costa del Sol, con comparadores de antes y después que se arrastran, galerías y vídeo. Cada imagen tiene un tamaño fijo, así que la página no da saltos mientras carga.",
        },
        {
          title: "Una página por tipo de reforma",
          description:
            "Reformas integrales, cocinas, baños, ampliaciones, obra nueva: cada servicio con su página, su título y sus fotos, para que quien busca reformar un baño caiga en baños. La web de Summit Builders está hecha así: baño completo, calefacción, climatización y urgencias tienen cada uno su página.",
        },
        {
          title: "Presupuesto por formulario o WhatsApp",
          description:
            "Un formulario corto pide el tipo de obra, la localidad y un teléfono. En Hillside Living los formularios llegan a un webhook con protección antispam y solo dan el envío por bueno cuando se ha entregado; en Summit Builders cada solicitud entra en el correo de la empresa. En tu web, el teléfono y WhatsApp están en todas las páginas.",
        },
        {
          title: "Fotos del móvil, páginas rápidas",
          description:
            "Para la web de reformas que tengo en desarrollo monté un proceso que convierte fotos y vídeos tal cual salen del teléfono a formatos web ligeros y les quita la ubicación, para que la dirección de tu cliente no viaje con la foto. Hillside Living y Summit Builders también sirven sus fotos en formatos modernos. En tu web, cada foto sale a la medida de la pantalla y se carga según baja el visitante.",
        },
        {
          title: "Hecha para salir en tu zona",
          description:
            "Los títulos llevan el servicio y la localidad. Los datos estructurados le dicen a Google que eres una empresa de construcción y reformas, qué haces y dónde. Un sitemap recoge cada servicio y cada obra, la web enlaza a tu ficha de Google y Search Console queda conectado desde el primer día. Hillside Living y Summit Builders sacan 100/100 en SEO en Lighthouse (Google PageSpeed Insights, 2 de octubre de 2026). Posiciones no prometo.",
        },
        {
          title: "En español y en inglés",
          description:
            "Parte de quienes reforman una casa en la Costa del Sol leen en inglés, alemán o sueco antes que en español. Cada idioma lleva sus propias URL, títulos y textos, sin un traductor automático encima de una única versión, para que Google pueda enseñar la página en inglés a quien busca en inglés. Así funciona Acme Clinic, una clínica dental de Marbella: en español, inglés y sueco, con SEO propio por idioma.",
        },
      ],
      localNote:
        "Dos webs publicadas respaldan esta página, y una es de esta costa. Hillside Living construye, reforma y promueve en la Costa del Sol; su web está en inglés. Summit Builders está en el sur de Alemania y su web, en alemán. Una tercera, un catálogo de obras para una empresa de reformas de viviendas de aquí, está en desarrollo. Estoy en Marbella y trabajo en toda la Costa del Sol, de Estepona a Málaga, donde quien encarga una reforma puede buscar en español, pero también en inglés, alemán o sueco.",
      processNote:
        "La web de una empresa de reformas es sobre todo fotos, y ahí se va el tiempo. En la llamada elegimos los tipos de trabajo y las obras que merecen página propia; las fotos me las mandas tal cual están en el móvil. Una web de una sola página puede seguir los cuatro días de abajo; una completa, con servicios y obras, lleva de una a dos semanas.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para una empresa de reformas?",
          a: "Desde 1.500 € una web de empresa completa, lo que suele necesitar una empresa de reformas o una constructora: páginas de servicio, obras, formulario de presupuesto y más de un idioma. Una sola página con tus servicios, una galería y el contacto parte de 500 €. Lo que lleve portal de clientes, pagos o un panel empieza en 3.000 €. El presupuesto cerrado te lo doy en la primera llamada de 15 minutos y no cambia después.",
        },
        {
          q: "¿Cómo captar clientes para reformas con una página web?",
          a: "Enseñando obras parecidas a la que el cliente tiene en la cabeza y dejándole pedir presupuesto sin buscar el botón. Hacen falta páginas de servicio que respondan a lo que se busca — reforma de baño, reforma integral, obra nueva —, obras terminadas con fotos reales del antes y el después, y contacto en cada página. Y lo que la gente comprueba antes de meter a alguien en casa: años de oficio, seguro, equipo. Un número de solicitudes no lo prometo.",
        },
        {
          q: "¿Cuánto se tarda en hacer la página web de una empresa de reformas o una constructora?",
          a: "De una a dos semanas una web completa con servicios y obras; una web de una sola página puede estar online 24–48 horas después de la primera llamada. La fecha de entrega la tienes en esa llamada, junto con el precio, y al día siguiente un enlace de vista previa real que puedes abrir desde la obra. Lo que más tarda es el material: las fotos de obras terminadas y la lista de servicios.",
        },
        {
          q: "¿Puedo enseñar mis obras con fotos de antes y después?",
          a: "Sí, y lo mejor es una página por obra en lugar de una galería interminable. Cada página lleva el antes y el después de la misma estancia, una galería de fotos y unas líneas sobre lo que se hizo; el antes y después puede ser un comparador que el visitante arrastra. Es justo lo que estoy montando ahora en la web de una empresa de reformas de viviendas de la Costa del Sol, con galerías y vídeo. Cada obra lleva su propio título, su imagen para compartir y su entrada en el sitemap, así que una cocina terminada es una página que Google puede enseñar por sí sola.",
        },
        {
          q: "¿Saldrá mi empresa en Google cuando busquen reformas en Marbella o Málaga?",
          a: "Tu web saldrá preparada para esas búsquedas; una posición concreta no te la puede prometer nadie que sea honrado. La base es cosa mía: una página por servicio, títulos con el servicio y la localidad, datos estructurados de empresa de construcción y reformas, un sitemap y Search Console conectado desde el primer día. Esa base se puede medir: cinco webs de clientes que he hecho sacan 100/100 en SEO en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026). El mapa de Google va por otro lado: depende de tu ficha de empresa y de tus reseñas.",
        },
        {
          q: "¿Puedo recibir solicitudes de presupuesto por formulario y por WhatsApp?",
          a: "Sí, por los dos, y también por llamada directa desde el móvil. En tu web, el formulario pide lo justo para presupuestar — tipo de obra, localidad, teléfono — y llega a tu correo o al sistema que ya uses, con protección antispam. WhatsApp es un enlace que abre el chat con tu número, sin respuestas automáticas, y está en todas las páginas de tu web, igual que el teléfono. En la web de Summit Builders, el formulario entra en el correo de la empresa y el botón de WhatsApp acompaña cada página.",
        },
        {
          q: "¿La web puede estar en español e inglés para clientes extranjeros?",
          a: "Sí: la web de empresa desde 1.500 € incluye más de un idioma, cada uno con sus propias URL, títulos y textos en vez de un traductor automático. Google puede enseñar la página en inglés a quien busca en inglés, que lee tus obras y pide presupuesto en su idioma; en español, lo mismo. Así funcionan Acme Clinic, una clínica dental de Marbella, en español, inglés y sueco, cada idioma con su propio SEO, y Harbor Homes, un portal inmobiliario, en inglés, sueco, neerlandés y alemán.",
        },
        {
          q: "¿El precio incluye hosting, dominio y mantenimiento?",
          a: "El presupuesto cubre la construcción de la web, con dominio configurado, analítica y WhatsApp funcionando en el lanzamiento, y no cambia después. El dominio, el código y los datos quedan en cuentas a tu nombre; no me alquilas nada ni quedas atado a una plataforma. Los costes de funcionamiento, y si quieres que siga trabajando en ella tras el lanzamiento, se deciden en la primera llamada de 15 minutos y quedan escritos en el presupuesto. Los cambios posteriores — una página de servicio nueva, un idioma más — se presupuestan igual: una llamada corta, un precio cerrado y una fecha.",
        },
      ],
      crossLinksBlurb:
        "Si tu empresa también vende lo que construye, la página de inmobiliarias es la siguiente que te conviene leer. Las demás parten del mismo sitio: alguien con el móvil en la mano que quiere ver el trabajo antes de escribir.",
      ogAlt:
        "Diseño web para empresas de reformas en Marbella y Málaga — páginas de servicio, obras con antes y después y formulario de presupuesto, desde 1.500 €",
    },
  },
};
