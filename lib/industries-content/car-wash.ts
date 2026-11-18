import type { IndustrySource } from "../industries";

// Figures: Google Search Console across client properties (lib/data.ts) and Lighthouse via Google PageSpeed Insights
// (home pages, desktop test) on 2 Oct 2026, five client sites: SEO 100/100, performance 94–100.
export const carWash: IndustrySource = {
  key: "car-wash",
  proofProjects: ["Acme Clinic", "Summit Builders"],
  highlightTier: 0,
  related: ["car-rental", "restaurants", "construction"],
  en: {
    slug: "car-wash-detailing",
    name: "Car washes & detailers",
    summary:
      "A car wash site has to show each service with its starting price, prove the finish with before-and-after photos and let a driver ask for a slot from a phone.",
    serviceName: "Car wash and car detailing website design",
    mailSubject: "Website for a car wash or detailing center",
    waMessage:
      "Hi Alex — I run a car wash / detailing center and need a website. When can we do the 15-min call?",
    stats: [
      { value: "6.3M+", label: "Google impressions across client sites, 6 months" },
      { value: "100/100", label: "Lighthouse SEO score, five client sites" },
      { value: "94–100", label: "Lighthouse performance, same sites" },
      { value: "25+", label: "Sites shipped" },
    ],
    statsNote:
      "Impressions: Google Search Console across client properties, last six months. Lighthouse scores: Google PageSpeed Insights, desktop test, on 2 October 2026 for five client sites — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders and Bloom Method.",
    og: {
      kicker: "Web design — car washes & detailing",
      headline: "Car wash and detailing websites, with prices on the page.",
    },
    copy: {
      metaTitle: "Car wash & car detailing website design in Marbella",
      metaDescription:
        "Car detailing website design for the Costa del Sol: a page per service, your prices, booking requests by WhatsApp. One-page car wash sites from €500.",
      hero: {
        label: "Websites for car washes & detailing centers — Marbella & Costa del Sol",
        h1Main: "Car wash and car detailing website design in Marbella,",
        h1Accent: "with prices on the page.",
        sub: "A driver looking for a wash decides on a phone, often with the engine still running. Your site shows each service, its starting price and a Book button that opens WhatsApp with the service already written. One-page sites from €500, quoted on a 15-minute call.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Search for car wash website design or car detailing website design and you mostly get template galleries and website builders. This page is the other route: one developer in Marbella who builds the site for you — your services, your prices, a way to book — for a fixed price agreed on a 15-minute call.",
        "Right now I am building the detailing side of a site in English, Spanish and Swedish for a Costa del Sol car rental and detailing business. It has an overview page and a page for each service — hand wash, detailing, paint correction, ceramic coating and paint protection film among them — each with starting prices and what is included. The menu is generated from the owner's own price list, and the Book and Request-a-quote buttons open WhatsApp with the service already written.",
        "A detailing site is mostly photographs, so it has to stay quick with a full gallery on the page. Speed and SEO are part of every build, and I measure both: the sites I build score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026). Yours gets the same groundwork: photos compressed and sized for the screen they open on, a title and description on every page, and structured data with your address and opening hours.",
      ],
      features: [
        {
          title: "Your price list, as the menu",
          description:
            "Exterior wash, interior clean, full detail, packages: every service sits on the page with its starting price and what it includes. The menu is built from your own price list, so each price is written once and reads the same on every page and in every language.",
        },
        {
          title: "A page for each premium service",
          description:
            "Ceramic coating, paint protection film, wrapping, paint correction and dent repair are separate decisions for a customer, so each gets its own page: what the treatment is, what is included, the starting price and the questions people ask before paying. Each page carries its own title, description and structured data.",
        },
        {
          title: "Booking requests by WhatsApp",
          description:
            "Each service has a Book or Request-a-quote button that opens WhatsApp with the service name already written, in the visitor's language. You know what they want before you say hello. If you already use a booking system, the button hands off to it instead of opening the chat.",
        },
        {
          title: "Before-and-after photos that load",
          description:
            "A corrected hood under workshop lights explains paint correction better than a paragraph. The photos you already shoot are compressed and loaded as the visitor scrolls, so a long gallery does not hold up the first screen. Five client sites I built score 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026).",
        },
        {
          title: "Hours, map, phone, service area",
          description:
            "Address, opening hours, a Google Maps embed and a call button sit where a thumb reaches them. A mobile detailing business gets a service-area section in place of the map pin: the towns you drive to, named on the page. The same details go into the structured data Google reads.",
        },
        {
          title: "Spanish, English and the next one",
          description:
            "On the Costa del Sol the car in your bay may belong to someone who searches in English or Swedish. Each language gets its own URLs, title and description, linked with hreflang, so Google can index every version separately. Client sites have shipped in eight languages, Swedish among them.",
        },
      ],
      localNote:
        "The two projects on this page show the parts a car wash site is made of. Acme Clinic's site, for a clinic in Marbella, has a multi-step booking wizard and WhatsApp on every page. Summit Builders's, for a German heating and bath renovation company, has a page per service and a WhatsApp button. I'm based in Marbella and work across the Costa del Sol, from Estepona to Málaga: whether you run a fixed wash in San Pedro or a mobile detailing van covering Fuengirola and Mijas, it starts with the same 15-minute call.",
      processNote:
        "A single-location wash with one price board is a one-page job: bring the price list and a few photos to the call and the preview link arrives the next day. A detailing center with a page per treatment and two or three languages is a business site: one to two weeks.",
      faq: [
        {
          q: "How much does a car wash or car detailing website cost?",
          a: "A single-location car wash needs one page: the price board, opening hours, the map and a Book button that opens WhatsApp. That is a landing, from €500, with the copy, SEO basics and analytics in the price. A detailing center is a business site, from €1,500, because ceramic coating, PPF and paint correction each need a page of their own, plus a before-and-after gallery and a second language. Which one you need is usually clear from your price list. The exact quote is fixed on the first 15-minute call and does not change afterwards.",
        },
        {
          q: "How long does it take to build a car detailing website?",
          a: "One to two weeks for a detailing site with a page per service; a one-page car wash site can be live 24-48 hours after the first call. On that 15-minute call you get the price and the delivery date. A live preview link follows the next day, then one revision round, then launch. From you I need the price list and photos of your own work — the date I give assumes both exist.",
        },
        {
          q: "Can customers book a wash or a detail online from the website?",
          a: "Yes, as a booking request. Every service gets a Book button that opens WhatsApp with the service already written; you confirm the slot in the chat. A Business site can use a multi-step booking form, the pattern I built for Acme Clinic. If you already run a booking system, the site links to it. A live calendar with online payment or wash memberships is Platform work, €3,000+, scoped with you on the same call.",
        },
        {
          q: "Should I use a free car wash website template or hire a web designer?",
          a: "Use a free car wash website template if all you need online today is an address, opening hours and a phone number — it will do that. It gets harder when you want a separate page for ceramic coating, the same prices in Spanish and English, and a gallery that opens quickly on a phone. What I build is written in code on Next.js, with the copy and analytics included and no WordPress, Wix or page builder underneath.",
        },
        {
          q: "Is a single landing page enough for a car wash?",
          a: "Yes — for a car wash with one location and a short menu, a single landing page is enough: services and prices, opening hours, the map, a few photos, and the WhatsApp and call buttons. That is the Landing tier, from €500. Treatments people research by name, such as ceramic coating or PPF, each need their own page, which makes it a Business site, from €1,500. Adding those pages later is quoted the same way: a short call, a fixed price, a date.",
        },
        {
          q: "Can I show ceramic coating, PPF and detailing packages with prices?",
          a: "Yes, and I would publish them: a starting price for ceramic coating, PPF and each detailing package, with what it includes. On the detailing site I am building, the menu is generated from the owner's own price list, so each service shows the same starting price in English, Spanish and Swedish. Where the price depends on the size or condition of the car, the page says \"from\" and the Request-a-quote button opens WhatsApp with that service named. A driver comparing two detailers reads your figure before sending the first message.",
        },
        {
          q: "Will my car wash show up on Google and Google Maps in Marbella?",
          a: "The site ships with what Google needs to read it: a title and description for every page, structured data with your name, address and hours, and Search Console connected with a baseline recorded on day one. Five client sites I built score 100/100 for SEO in Google's Lighthouse test, which checks that a page can be crawled and read (Google PageSpeed Insights, 2 October 2026). On a Business site, from €1,500, each service people search by name also gets its own page. The position depends on competition and time, so I don't promise one. The map results come from your Google Business Profile and your reviews; the website supports them without replacing them.",
        },
        {
          q: "Can the website be in English and Spanish?",
          a: "Yes — a car wash website can be in English and Spanish, and the detailing site I am building has three languages: English, Spanish and Swedish. Each version has its own web address, title and description, and hreflang tells Google which is which. Client sites have shipped in eight: English, German, Spanish, French, Italian, Swedish, Dutch and Russian. Multilingual versions are part of the Business site, from €1,500.",
        },
      ],
      crossLinksBlurb:
        "Car rental is this page's closest neighbor: the site I am building covers both. Restaurants and construction firms have their own pages, and the general web design page covers the rest.",
      ogAlt:
        "Car wash and car detailing website design in Marbella — services, prices and WhatsApp booking requests, from €500",
    },
  },
  es: {
    slug: "lavaderos-de-coches",
    name: "Lavaderos y centros de detailing",
    summary:
      "La web de un lavadero tiene que enseñar cada servicio con su precio, demostrar el acabado con fotos del antes y el después y dejar pedir cita desde el móvil.",
    serviceName: "Diseño web para lavaderos de coches y detailing",
    mailSubject: "Web para lavadero o centro de detailing",
    waMessage:
      "Hola Alex — tengo un lavadero de coches / centro de detailing y necesito una página web. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "6,3M+", label: "Impresiones en Google de webs de clientes, 6 meses" },
      { value: "100/100", label: "SEO en Lighthouse, cinco webs de clientes" },
      { value: "94–100", label: "Rendimiento en Lighthouse, las mismas webs" },
      { value: "25+", label: "Webs entregadas" },
    ],
    statsNote:
      "Impresiones: Google Search Console, webs de clientes, últimos seis meses. Lighthouse: Google PageSpeed Insights, prueba de escritorio, 2 de octubre de 2026, en cinco webs de clientes — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders y Bloom Method.",
    og: {
      kicker: "Diseño web — lavaderos y detailing",
      headline: "Tu tarifa de lavado y detailing, del cartel al móvil.",
    },
    copy: {
      metaTitle: "Diseño web para lavaderos de coches y detailing en Marbella",
      metaDescription:
        "Páginas web para lavaderos de coches y centros de detailing en la Costa del Sol: servicios con precio, fotos y cita por WhatsApp. Una página, desde 500 €.",
      hero: {
        label: "Webs para lavaderos y centros de detailing — Marbella y Costa del Sol",
        h1Main: "Diseño web para lavaderos de coches y detailing en Marbella,",
        h1Accent: "del cartel al móvil.",
        sub: "Tu tarifa ya existe, en el cartel de la entrada o en un PDF. Yo la convierto en una página web con cada servicio, su precio de partida y un botón que abre WhatsApp con el servicio ya escrito. Desde 500 €, presupuesto cerrado en una llamada de 15 minutos.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "Si buscas diseño web para lavaderos de coches, lo que aparece son sobre todo creadores de páginas web con plantillas. Aquí la página web no la montas tú: estoy en Marbella y te la entrego hecha, con tus servicios, tus precios y un botón para pedir cita, a precio cerrado desde la primera llamada.",
        "Ahora mismo estoy construyendo la parte de car detailing de una web en inglés, español y sueco para un negocio de alquiler de coches y detailing de la Costa del Sol. Lleva una página general y una por servicio (lavado a mano, detailing, corrección de pintura, tratamiento cerámico y PPF, entre otros), cada una con precios de partida y lo que incluye. El listado sale de la tarifa del propio dueño, y los botones de Reservar y de Pedir presupuesto abren WhatsApp con el servicio ya escrito.",
        "Una web de detailing es casi todo fotos, y aun así tiene que abrir rápido con la galería entera en la página. La velocidad y el SEO forman parte del trabajo, y los mido: las webs que hago sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026). La tuya sale con la misma base: fotos comprimidas y ajustadas a la pantalla en la que se abren, título y descripción en cada página y datos estructurados con tu dirección y tu horario.",
      ],
      features: [
        {
          title: "Cita por WhatsApp, mensaje ya escrito",
          description:
            "Cada servicio lleva un botón de Reservar o de Pedir presupuesto que abre WhatsApp con el nombre del servicio ya escrito, en el idioma del visitante. Antes de saludar ya sabes qué quiere. Si trabajas con un sistema de reservas, el botón enlaza con él en lugar de abrir el chat.",
        },
        {
          title: "Tu tarifa, servicio por servicio",
          description:
            "Lavado exterior, limpieza interior, lavado completo, packs: cada servicio aparece con su precio de partida y con lo que incluye. El listado sale de tu propia tarifa, así que cada precio se escribe una sola vez y se lee igual en todas las páginas y en todos los idiomas.",
        },
        {
          title: "Cerámico, PPF, vinilado: cada uno en su página",
          description:
            "Quien va a pagar un tratamiento cerámico, un PPF, un vinilado o un pulido lo decide por separado, y cada uno tiene su página: en qué consiste, qué incluye, desde qué precio y las dudas que surgen antes de pagar. Cada página lleva su propio título, descripción y datos estructurados.",
        },
        {
          title: "Español, inglés y el siguiente",
          description:
            "En esta costa, el coche que entra en tu box puede ser de alguien que busca en inglés o en sueco. Cada idioma tiene sus propias URL, título y descripción, enlazados con hreflang para que Google indexe cada versión por separado. He entregado webs de clientes en ocho idiomas.",
        },
        {
          title: "Antes y después, sin esperas",
          description:
            "Un capó pulido bajo los focos explica la corrección de pintura mejor que un párrafo. Las fotos que ya haces se comprimen y se cargan según baja el visitante, así que una galería larga no frena la primera pantalla. Cinco webs de clientes que he hecho sacan entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026).",
        },
        {
          title: "Horario, mapa o zona de servicio",
          description:
            "Dirección, horario, mapa de Google y botón de llamada quedan donde llega el pulgar. Si haces detailing a domicilio, en lugar del mapa va una sección con las zonas a las que te desplazas, pueblo por pueblo. Esa misma información va en los datos estructurados que lee Google.",
        },
      ],
      localNote:
        "Los dos proyectos de esta página enseñan las piezas de las que está hecha la web de un lavadero. La web de Acme Clinic, una clínica de Marbella, lleva un asistente de reserva por pasos y WhatsApp en todas las páginas. La de Summit Builders, una empresa alemana de calefacción y baños, tiene una página por servicio y un botón de WhatsApp. Estoy en Marbella y trabajo en toda la Costa del Sol: tanto si tienes un lavadero en Estepona como si haces detailing a domicilio por Fuengirola y Mijas, todo empieza con la misma llamada de 15 minutos.",
      processNote:
        "A un lavadero con un solo local le basta una landing: trae la tarifa y unas fotos a la llamada y al día siguiente tienes el enlace de vista previa. Un centro de detailing con una página por tratamiento y dos o tres idiomas necesita una web de empresa: una o dos semanas.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para un lavadero de coches?",
          a: "Un lavadero con un solo local necesita una página: la tarifa, el horario, el mapa y un botón de Reservar que abre WhatsApp. Eso es una landing, desde 500 €, con los textos, el SEO básico y la analítica dentro del precio. Un centro de detailing necesita una web de empresa, desde 1.500 €, porque el tratamiento cerámico, el PPF y la corrección de pintura piden cada uno su página, además de una galería de antes y después y un segundo idioma. Cuál es tu caso suele verse en la propia tarifa. El presupuesto exacto queda cerrado en la primera llamada de 15 minutos y no cambia después.",
        },
        {
          q: "¿Cuánto se tarda en tener lista la web de un centro de detailing?",
          a: "Una o dos semanas si es una web de empresa con una página por tratamiento; una landing para un lavadero puede estar online 24–48 horas después de la primera llamada. De esa llamada de 15 minutos sales con precio y fecha, y al día siguiente tienes un enlace de vista previa. De ti necesito la tarifa y fotos de tu propio trabajo: la fecha da por hecho que las tienes.",
        },
        {
          q: "¿Pueden los clientes reservar cita online desde la web?",
          a: "Sí: la reserva online funciona como solicitud de cita. Cada servicio lleva un botón de Reservar que abre WhatsApp con el servicio ya escrito; la hora la confirmas tú en el chat. Una web de empresa admite un formulario de cita por pasos, como el que hice para Acme Clinic. Si ya trabajas con un sistema de reservas, la web enlaza con él. Un calendario con pago online o abonos de lavado es trabajo de plataforma, 3.000 €+, y su alcance lo definimos en la misma llamada.",
        },
        {
          q: "¿Es mejor una plantilla gratis o una web a medida para un lavado de coches?",
          a: "Si hoy solo necesitas tener en internet una dirección, un horario y un teléfono, la plantilla gratis te sirve. Se queda corta cuando quieres una página propia para el tratamiento cerámico, los mismos precios en español y en inglés y una galería que abra rápido en el móvil. Lo que yo entrego está programado a medida con Next.js: ni WordPress, ni Wix, ni un constructor de páginas.",
        },
        {
          q: "¿Qué debe tener la página web de un centro de detailing?",
          a: "La web de un lavadero necesita, como mínimo, cinco cosas: servicios con su precio de partida, fotos de tu propio trabajo, horario, dirección con mapa y una forma de pedir cita desde el móvil. Un centro de detailing añade una página por tratamiento, las reseñas de Google a la vista y una versión en inglés. Lo primero cabe en una landing, desde 500 €; lo segundo es una web de empresa, desde 1.500 €.",
        },
        {
          q: "Voy a montar un autolavado, ¿necesito la web desde el primer día?",
          a: "Desde el primer día basta con una página. Al abrir todavía no tienes fotos de trabajos tuyos ni sabes qué servicios te van a pedir más, así que una landing con dirección, horario, tarifa y botón de WhatsApp es suficiente, desde 500 €. Cuando quieras una página por servicio, la ampliación se presupuesta igual: una llamada corta, un precio cerrado y una fecha.",
        },
        {
          q: "¿Necesito web propia si ya aparezco en un directorio de centros de detailing?",
          a: "No es obligatorio, y puedes seguir en el directorio. Allí apareces junto a otros centros, con el diseño y el orden que decide el directorio. En tu web mandas tú: cada tratamiento tiene su página, con su precio de partida y tus fotos, y el botón de Reservar abre WhatsApp contigo, no con el centro de al lado. El dominio, el código y los datos están en cuentas a tu nombre. Y cada página lleva su propio título y su propia descripción, para que Google la indexe por separado.",
        },
        {
          q: "¿Saldrá mi lavadero en Google y en Google Maps cuando busquen en Marbella?",
          a: "La web sale con lo que Google necesita para leerla: título y descripción en cada página, datos estructurados con tu nombre, dirección y horario y Search Console conectado, con las cifras de partida anotadas desde el primer día. Cinco webs de clientes que he hecho sacan 100/100 en SEO en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026). En una web de empresa, desde 1.500 €, cada servicio que se busca por su nombre lleva además su propia página. El puesto depende de la competencia y del tiempo, así que no prometo ninguno. En Google Maps cuentan tu ficha de Google y tus reseñas; la web acompaña a la ficha, no la sustituye.",
        },
      ],
      crossLinksBlurb:
        "El alquiler de coches es el vecino más cercano: la web que estoy construyendo cubre los dos. Restaurantes y reformas tienen su propia página, y el diseño web general cubre el resto.",
      ogAlt:
        "Diseño web para lavaderos de coches y centros de detailing en Marbella — servicios, precios y cita por WhatsApp, desde 500 €",
    },
  },
};
