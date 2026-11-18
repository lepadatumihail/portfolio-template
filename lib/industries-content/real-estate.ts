import type { IndustrySource } from "../industries";

// Figures: impressions from the Harbor Homes case study in lib/studies-content-en.ts / -es.ts (Google Search Console, 26 Nov 2025 – 29 Aug 2026); Lighthouse scores from Google PageSpeed Insights, home pages of Harbor Homes and Hillside Living, 2 Oct 2026. The performance range (94–97) is the desktop test; labels and running copy say "performance" only, the stats note names the test.
export const realEstate: IndustrySource = {
  key: "real-estate",
  proofProjects: ["Harbor Homes", "Hillside Living", "Northwind CRM"],
  // quoted after the proof cards; lib/reviews.ts checks the words against the review
  review: {
    author: "Daniel Reyes",
    excerpt:
      "Alex built our agency website in under two weeks. He handled every change we asked for along the way, and the new enquiry forms brought in more qualified leads in the first month.",
  },
  highlightTier: 1,
  related: ["construction", "hotels", "law-firms"],
  en: {
    slug: "real-estate",
    name: "Real estate agencies",
    summary:
      "An estate agency site has to put the search first: filters, a page per listing or development, and an enquiry by form or WhatsApp on each.",
    serviceName: "Real estate web design",
    mailSubject: "Real estate website",
    waMessage: "Hi Alex — I need a website for my estate agency. When can we do the 15-min call?",
    stats: [
      { value: "22,417", label: "Google impressions, Harbor Homes, nine months" },
      { value: "100/100", label: "Lighthouse SEO score, both property sites" },
      { value: "94–97", label: "Lighthouse performance, both property sites" },
      { value: "4", label: "Languages on Harbor Homes, each on its own URLs" },
    ],
    statsNote:
      "Impressions: Google Search Console for Harbor Homes, 26 November 2025 to 29 August 2026. Lighthouse: Google PageSpeed Insights on 2 October 2026 for Harbor Homes and Hillside Living; performance is the desktop test.",
    og: {
      kicker: "Web design — real estate",
      headline: "Real estate websites built around the property search.",
    },
    copy: {
      metaTitle: "Real estate web design in Marbella & Costa del Sol",
      metaDescription:
        "Real estate web design in Marbella: search on the Resales Online feed, a page per development, brochure agency sites from €1,500. Fixed quote in 15 min.",
      hero: {
        label: "Websites for estate agencies & developers — Marbella & Costa del Sol",
        h1Main: "Real estate web design in Marbella, built around",
        h1Accent: "the property search.",
        sub: "Search by area, type, price and bedrooms on the home page. A page for every listing and every development, each with an enquiry form and WhatsApp. I have connected the Resales Online feed on two Costa del Sol property sites.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Real estate web design in Marbella comes down to one screen: a buyer in Stockholm at 23:40, phone in hand, filtering by area, price and bedrooms. If the search drags or the listing gives her no way to ask a question, she is back on a portal a minute later. I build estate agency websites and developer sites around that screen.",
        "I have built that search twice on the Costa del Sol. Harbor Homes is a property portal on the Resales Online feed — sales, new developments and rentals — in English, Swedish, Dutch and German. For Hillside Living I connected the same feed to a filtered search, listing pages and an enquiry form that also sent the enquiry to Resales as a lead. Harbor Homes collected 22,417 Google impressions between 26 November 2025 and 29 August 2026 (Google Search Console). Both sites score 100/100 for SEO and 94–97 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026).",
        "Both sites run on Next.js — not WordPress, not Wix, not a page builder. Listings are read from the feed on every search, so the site holds no second copy of your stock. On your site the usual agency pages sit around the search: about, services, contact and the legal pages, carrying the wording your business provides. I also build Northwind CRM, my own CRM for independent estate agents, in English and Spanish.",
      ],
      features: [
        {
          title: "Search with filters, on the home page",
          description:
            "The home page of an estate agency website opens with the property search: area, property type, price range and bedrooms. The filters are written into the URL, so a buyer can send a search to a partner. I have built this filter set on the Resales Online feed twice, both times with bathrooms and sort order.",
        },
        {
          title: "Listing pages that take the enquiry",
          description:
            "Every property gets its own page: a gallery that opens full screen, price, features, reference, a map of the area and an enquiry form. On a phone, a fixed bar keeps Enquire and WhatsApp one thumb away. The form only confirms once the enquiry has been delivered, and the phone field checks the country prefix.",
        },
        {
          title: "A page for every development",
          description:
            "Each new development gets its own page with gallery, price range, completion date, payment terms, features, map and enquiry form. It is one template filled from the feed, and I have built it on both property sites. On your project, unit types, floor plans and a prices-from table are built into that template once; every later development is content added to it.",
        },
        {
          title: "The Resales Online feed, connected",
          description:
            "Resales Online only answers requests from an approved server address, so the integration includes a small proxy server. I have set that up on two property sites: search, property details and, on one, enquiries also sent to Resales as leads. For another feed or CRM, the site hands off to the system you already use.",
        },
        {
          title: "Every language on its own URLs",
          description:
            "Each language gets its own URLs, titles and hreflang tags, so Google can index every version separately, with no translation widget in between. Harbor Homes runs in English, Swedish, Dutch and German from one codebase, and the listing text is requested from the feed in the visitor's language. Across those four languages it collected 22,417 Google impressions between 26 November 2025 and 29 August 2026 (Search Console).",
        },
        {
          title: "Built so Google can read the stock",
          description:
            "Each listing page carries RealEstateListing structured data. The sitemap is generated from the feed, so new properties can be found without anyone submitting them. Filtered and paginated results point back to one canonical page, and area pages get their own titles and copy. Both property sites score 100/100 for SEO in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026); a position in the results is something nobody can promise.",
        },
      ],
      localNote:
        "I have built two client sites with a property search, both on the Costa del Sol: Harbor Homes, a property portal, and Hillside Living, a construction and renovation company with a property arm. Harbor Homes carries sales, new developments and rentals in English, Swedish, Dutch and German, with area guides, an interactive area map and calculators for purchase costs, mortgage and rental yield. For Hillside Living I built the search, the listing and development pages and an enquiry form that also sent each enquiry to Resales Online as a lead. I'm based in Marbella and work from Estepona to Málaga, where buyers search in English, Swedish, Dutch and German as well as Spanish.",
      processNote:
        "The four days below describe a landing page, or the first preview of an agency site that is live in one to two weeks. A portal with a feed takes longer: its date depends on scope and is fixed on the call. Resales Online's approval of the server address is the one step I can't hurry.",
      faq: [
        {
          q: "How much does a real estate website cost in Marbella?",
          a: "A brochure-style estate agency website sits in the Business site tier, from €1,500; a portal with a live feed and property search is quoted on the call, and I say there which tier it falls in. The exact figure is fixed on the first 15-minute call and does not change afterwards. Two sites — say new developments and resales — and any extra development pages are quoted on that same call, each as a fixed figure.",
        },
        {
          q: "How long does it take to build a real estate website?",
          a: "One to two weeks for a brochure-style agency site; a single landing page can be live in 24–48 hours. A portal with a live feed and search takes longer, and its date is fixed on the first call. In every case you review a real preview link and get one focused revision round. With Resales Online, approval of the server address runs on their clock.",
        },
        {
          q: "Can you connect my website to Resales Online?",
          a: "Yes — I have connected Resales Online for Harbor Homes and Hillside Living. The integration uses the Resales Online Web API for search and property details, through a small proxy server, because the API only accepts requests from an approved server address. The site reads your own Resales Online account, so that account needs API access. Listings are not stored in a database on the site; it keeps only a list of references for the sitemap.",
        },
        {
          q: "Can every new development have its own landing page with floor plans, prices from and an enquiry form?",
          a: "Yes — every new development can have its own landing page. It is one template filled from the feed: gallery, price range, completion date, payment terms, features, map and enquiry form. I have built that template on both property sites. On your project, floor plans, unit types and a prices-from table are built into it once; each later development is content added to it. What an additional one costs is quoted on the call, as a fixed figure.",
        },
        {
          q: "Will the property search have filters for area, property type, price and bedrooms?",
          a: "Yes — the property search filters by area, property type, minimum and maximum price and bedrooms, plus bathrooms and sort order. I built that set for Harbor Homes and Hillside Living, on the Resales Online feed. Results come back as listing cards with pagination, and the filters are written into the URL, so a search can be shared. The search sits on your home page.",
        },
        {
          q: "Is hosting included, and is there a monthly cost for maintenance?",
          a: "Both are settled on the first call and written into the quote, next to the build price, which is fixed. A property site has running parts a brochure site does not: your own Resales Online account, and the small proxy server its API requires, so on that call I go through what keeps the site running. The domain, the code and the data are set up under the agency's name, so the site is not tied to me. Work after launch (a template for a new development, another language, a second feed) gets its own short call and its own fixed price.",
        },
        {
          q: "Can the website be in English and Spanish, with enquiries by form and WhatsApp?",
          a: "Yes — on your site each language gets its own URLs, titles and hreflang tags, and every listing gets a form and a WhatsApp click-to-chat button that opens with the property reference already written. For reference: Harbor Homes runs in English, Swedish, Dutch and German; Hillside Living in English; Northwind CRM, my own product, in English and Spanish. Spanish on your site is built the same way as any other language: its own URLs and titles, no translation widget.",
        },
        {
          q: "Can listings sync with my CRM and portals like Idealista or Rightmove?",
          a: "With Resales Online, yes — that is the feed I have connected, and on one site enquiries went back into it as leads. For Idealista, Rightmove or another portal, it depends on whether the portal or your CRM offers a feed or an API the site can read from or send to; we check that on the call, before I quote. For a CRM, the enquiry form hands off to the system you already use, provided it accepts leads from outside.",
        },
      ],
      crossLinksBlurb:
        "A property sale rarely ends at the agency. These pages cover the neighbouring trades: builders and renovation firms, hotels, and the law firms that handle the purchase.",
      ogAlt:
        "Real estate web design in Marbella — property search, listing pages and development pages for estate agencies and developers on the Costa del Sol",
    },
  },
  es: {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    summary:
      "La web de una inmobiliaria empieza por el buscador: filtros, una ficha por propiedad o promoción y contacto por formulario o WhatsApp en cada una.",
    serviceName: "Diseño web para inmobiliarias",
    mailSubject: "Web para inmobiliaria",
    waMessage: "Hola Alex — necesito una web para mi inmobiliaria. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "22.417", label: "Impresiones en Google, Harbor Homes, nueve meses" },
      { value: "100/100", label: "SEO en Lighthouse, las dos webs inmobiliarias" },
      { value: "94–97", label: "Rendimiento en Lighthouse, las mismas dos webs" },
      { value: "4", label: "Idiomas en Harbor Homes, cada uno con sus URL" },
    ],
    statsNote:
      "Impresiones: Google Search Console de Harbor Homes, del 26 de noviembre de 2025 al 29 de agosto de 2026. Lighthouse: Google PageSpeed Insights, 2 de octubre de 2026, en Harbor Homes y Hillside Living; el rendimiento es el de la prueba de escritorio.",
    reviewTranslation:
      "Alex hizo la web de nuestra agencia en menos de dos semanas. Atendió cada cambio que le pedimos por el camino, y los nuevos formularios de contacto nos trajeron más clientes cualificados ya el primer mes.",
    og: {
      kicker: "Diseño web — inmobiliarias",
      headline: "Webs inmobiliarias con buscador, fichas y obra nueva.",
    },
    copy: {
      metaTitle: "Diseño web para inmobiliarias en Marbella y Costa del Sol",
      metaDescription:
        "Diseño web para inmobiliarias en Marbella: buscador con feed de Resales Online, páginas de obra nueva y web corporativa desde 1.500 €. Llamada de 15 min.",
      hero: {
        label: "Webs para inmobiliarias y promotoras — Marbella y Costa del Sol",
        h1Main: "Diseño de páginas web para inmobiliarias en Marbella:",
        h1Accent: "buscador, fichas y obra nueva.",
        sub: "Buscador por zona, tipo, precio y dormitorios, una ficha por propiedad y una página por promoción. He conectado el feed de Resales Online en dos webs inmobiliarias de la Costa del Sol. Presupuesto cerrado en una llamada de 15 minutos.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "El diseño web para inmobiliarias en Marbella se decide en el buscador. Un comprador en Gotemburgo filtra por zona, precio y dormitorios desde el móvil; si la búsqueda tarda o la ficha no le deja preguntar, vuelve al portal de siempre. Hago webs de agencia y de promotora pensadas para ese momento.",
        "Programo cada web inmobiliaria a medida con Next.js: ni WordPress, ni Wix, ni un constructor de páginas. Las propiedades se leen del feed en cada búsqueda, así que la web no guarda una segunda copia de tu cartera. Alrededor del buscador van las páginas de siempre — quiénes somos, servicios, contacto — y las legales, con los textos que aporte tu empresa.",
        "El buscador de propiedades con feed lo he montado dos veces en la Costa del Sol. Harbor Homes es un portal inmobiliario conectado al feed de Resales Online — venta, obra nueva y alquiler — en inglés, sueco, neerlandés y alemán. Para Hillside Living conecté el mismo feed a un buscador con filtros, fichas y un formulario que además enviaba el contacto a Resales como lead. Harbor Homes suma 22.417 impresiones en Google entre el 26 de noviembre de 2025 y el 29 de agosto de 2026 (Google Search Console). Las dos webs sacan 100/100 en SEO y entre 94 y 97 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026).",
      ],
      features: [
        {
          title: "Feed de Resales Online, conectado",
          description:
            "Resales Online solo responde a direcciones de servidor autorizadas, así que la integración lleva un pequeño servidor intermedio. Lo he montado en dos webs inmobiliarias: búsqueda, detalle de propiedad y, en una de ellas, el envío del contacto a Resales como lead. Con otro feed o CRM, la web enlaza con el sistema que ya uses.",
        },
        {
          title: "Buscador con filtros en la portada",
          description:
            "La portada abre con el buscador de propiedades: zona, tipo de propiedad, precio mínimo y máximo y dormitorios. Los filtros quedan escritos en la URL, así que un comprador puede mandarle la búsqueda a su pareja. Ese juego de filtros lo he construido dos veces con el feed de Resales Online, las dos con baños y orden de resultados.",
        },
        {
          title: "Fichas con formulario y WhatsApp",
          description:
            "Cada propiedad tiene su ficha: galería a pantalla completa, precio, características, referencia, un mapa de la zona y el formulario. En el móvil, una barra fija deja Consultar y WhatsApp siempre a mano. El formulario solo confirma el envío cuando el contacto ha llegado, y el campo de teléfono valida el prefijo del país.",
        },
        {
          title: "Una página por cada promoción",
          description:
            "Cada promoción de obra nueva tiene su página con galería, rango de precios, fecha de entrega, forma de pago, características, mapa y formulario. Es una plantilla que se rellena desde el feed, y la he montado en las dos webs inmobiliarias. En tu proyecto, las tipologías, los planos y la tabla de precios «desde» se incorporan a esa plantilla una sola vez; cada promoción posterior es contenido que se añade.",
        },
        {
          title: "Cada idioma con sus propias URL",
          description:
            "Cada idioma lleva sus URL, títulos y etiquetas hreflang, para que Google indexe cada versión por separado, sin widget de traducción. Harbor Homes funciona en inglés, sueco, neerlandés y alemán con un solo código, y el texto de cada propiedad se pide al feed en el idioma del visitante. Entre los cuatro idiomas suma 22.417 impresiones en Google del 26 de noviembre de 2025 al 29 de agosto de 2026 (Search Console).",
        },
        {
          title: "Preparada para que Google la lea",
          description:
            "Cada ficha lleva datos estructurados RealEstateListing. El sitemap se genera desde el feed, así que Google puede encontrar las propiedades nuevas sin que nadie se las envíe. Los resultados filtrados y paginados apuntan a una sola página canónica, y las páginas de zona tienen títulos y textos propios. Las dos webs inmobiliarias sacan 100/100 en SEO en Lighthouse (Google PageSpeed Insights, 2 de octubre de 2026); la posición no la puede prometer nadie.",
        },
      ],
      localNote:
        "Tengo dos webs de cliente con buscador de propiedades en la Costa del Sol: Harbor Homes, un portal inmobiliario, y Hillside Living, una empresa de construcción y reformas con área inmobiliaria. Harbor Homes reúne venta, obra nueva y alquiler en inglés, sueco, neerlandés y alemán, con guías de zona, un mapa interactivo y calculadoras de gastos de compra, hipoteca y rentabilidad del alquiler. Para Hillside Living monté el buscador, las fichas, las páginas de promoción y un formulario que además enviaba el contacto a Resales Online como lead. Trabajo desde Marbella con negocios de Estepona a Málaga, donde el comprador busca en inglés, sueco, neerlandés o alemán además de en español.",
      processNote:
        "Los cuatro días de abajo describen una landing, o la primera vista previa de una web de agencia que está online en una o dos semanas. Un portal con feed lleva más tiempo: el plazo depende del alcance y queda cerrado en la llamada. Que Resales Online autorice el servidor es el único paso que no puedo acelerar.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para una inmobiliaria?",
          a: "Una web corporativa para una inmobiliaria entra en el nivel Web de empresa, desde 1.500 €; un portal con buscador y feed en tiempo real se presupuesta en la llamada, y ahí te digo en qué nivel entra. La cifra exacta te la doy cerrada en la primera llamada de 15 minutos y no cambia después. Dos webs — obra nueva y segunda mano — y las páginas de promoción adicionales se presupuestan en esa misma llamada, cada una con su precio cerrado.",
        },
        {
          q: "¿Cuánto se tarda en hacer una web inmobiliaria?",
          a: "Una web corporativa para una inmobiliaria se hace en una o dos semanas; una landing de una sola página puede estar online en 24–48 horas. Un portal con buscador y feed en tiempo real lleva más tiempo, y la fecha queda cerrada en la primera llamada. En todos los casos revisas un enlace de vista previa real y tienes una ronda de cambios. Con Resales Online, la autorización del servidor va a su ritmo.",
        },
        {
          q: "¿Merece la pena una página web inmobiliaria gratis o con plantilla?",
          a: "A veces sí. Si empiezas con pocas propiedades y solo necesitas estar online, una página web inmobiliaria gratis o de plantilla cumple. Se queda corta cuando necesitas algo que esa plataforma no te deja hacer — un feed determinado, una página por promoción, URL propias por idioma —, y conviene comprobarlo antes de contratarla. Yo no trabajo sobre esas plataformas: escribo el código sobre Next.js, sin WordPress, Wix ni constructores de páginas, y el dominio, el código y los datos quedan en cuentas a tu nombre.",
        },
        {
          q: "¿Se puede conectar la web con Resales Online, Inmobalia o Idealista?",
          a: "Con Resales Online, sí: lo he conectado en Harbor Homes y Hillside Living, con su API y el servidor intermedio que exige. La web lee tu propia cuenta de Resales Online, así que esa cuenta necesita acceso a la API. Con Inmobalia, Idealista u otro sistema, depende de si deja leer las propiedades desde fuera, con una API o una exportación; lo comprobamos en la llamada, antes de darte el presupuesto.",
        },
        {
          q: "¿Qué CRM inmobiliario se puede integrar con la web?",
          a: "El que ya uses, siempre que acepte contactos desde fuera; lo comprobamos en la llamada. Lo que tengo hecho: en Hillside Living el formulario enviaba también el contacto a Resales Online como lead. Además, desarrollo Northwind CRM, mi propio CRM para agentes independientes, en español e inglés: compradores, vendedores, visitas y reservas. Es un producto aparte de la web, pensado para el día a día del agente.",
        },
        {
          q: "¿Puedo tener una landing para cada promoción de obra nueva, con planos, tipologías y precios desde?",
          a: "Sí, cada promoción puede tener su landing. Es una plantilla que se rellena desde el feed: galería, rango de precios, fecha de entrega, forma de pago, características, mapa y formulario. Esa plantilla la he montado en las dos webs inmobiliarias. En tu proyecto, los planos, las tipologías y la tabla de precios «desde» se incorporan a ella una sola vez; después, cada promoción es contenido que se añade. Cuánto cuesta una adicional te lo digo en la llamada, con precio cerrado.",
        },
        {
          q: "¿El hosting y el mantenimiento están incluidos o hay una cuota mensual?",
          a: "Una web inmobiliaria con feed tiene piezas que una web corporativa no tiene: tu propia cuenta de Resales Online y el pequeño servidor intermedio que exige su API. En la llamada repasamos qué hace falta para mantenerla en marcha y cuánto cuesta, y queda escrito en el presupuesto junto al precio del desarrollo, que es cerrado y no cambia después. El dominio, el código y los datos se dan de alta a nombre de la agencia, así que la web no depende de mí. Lo que venga después (la plantilla de una promoción nueva, otro idioma, un segundo feed) tiene su propia llamada y su precio cerrado.",
        },
        {
          q: "¿La web puede estar en español e inglés y recibir contactos por WhatsApp?",
          a: "Sí: en tu web cada idioma lleva sus propias URL, títulos y hreflang, y cada ficha, un formulario y un botón de WhatsApp que abre el chat con la referencia de la propiedad ya escrita. Como referencia: Harbor Homes está en inglés, sueco, neerlandés y alemán; Hillside Living, en inglés; Northwind CRM, mi propio producto, en español e inglés. El español de tu web se monta igual que cualquier otro idioma: con sus URL y sus títulos, sin widget de traducción.",
        },
      ],
      crossLinksBlurb:
        "Una compraventa rara vez acaba en la inmobiliaria. Estas páginas cubren los sectores vecinos: constructoras y reformas, hoteles y los despachos de abogados que llevan la operación.",
      ogAlt:
        "Diseño web para inmobiliarias en Marbella — buscador de propiedades, fichas y páginas de obra nueva para agencias y promotoras de la Costa del Sol",
    },
  },
};
