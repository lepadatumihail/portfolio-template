import type { IndustrySource } from "../industries";

// Figures: Google Search Console across client properties (lib/data.ts); Lighthouse scores of five client sites' home pages (SEO 100/100, performance 94–100, desktop test) from Google PageSpeed Insights, 2 Oct 2026; and the Acme Clinic case study (Google Search Console) in lib/studies-content-*.ts.
export const hotels: IndustrySource = {
  key: "hotels",
  proofProjects: ["Hotel Aurora", "Harbor Homes"],
  // quoted after the proof cards; lib/reviews.ts checks the words against the review
  review: {
    author: "Hannah Weber",
    excerpt:
      "We hired Alex to build a booking and housekeeping tool for our small hotel. It replaced three spreadsheets and the team picked it up in a day. […] Would hire again.",
  },
  highlightTier: 1,
  related: ["restaurants", "real-estate", "car-rental"],
  en: {
    slug: "hotels-holiday-rentals",
    name: "Hotels & holiday rentals",
    summary:
      "A hotel or holiday rental site has to load on a phone, speak the guest's language and hand them to your booking engine before they return to the portal.",
    serviceName: "Hotel and holiday rental website design",
    mailSubject: "Website for a hotel or holiday rental",
    waMessage: "Hi Alex — I need a website for my hotel / holiday rentals. When can we do the 15-min call?",
    stats: [
      { value: "6.3M+", label: "Google impressions across client sites, 6 months" },
      { value: "100/100", label: "Lighthouse SEO score, five client sites" },
      { value: "94–100", label: "Lighthouse performance, same sites" },
      { value: "25+", label: "Sites shipped" },
    ],
    statsNote:
      "Impressions: Google Search Console across client properties, last six months. Lighthouse scores: Google PageSpeed Insights, desktop test, on 2 October 2026 for five client sites — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders and Bloom Method.",
    og: {
      kicker: "Web design — hotels & holiday rentals",
      headline: "Hotel and rental websites, one tap from your booking engine.",
    },
    copy: {
      metaTitle: "Hotel website design Marbella — holiday rental websites",
      metaDescription:
        "Hotel website design in Marbella and the Costa del Sol, holiday rentals included: fast, multilingual pages linked to your booking engine. From €1,500.",
      hero: {
        label: "Web design for hotels & holiday rentals — Marbella & Costa del Sol",
        h1Main: "Hotel and holiday rental website design in Marbella,",
        h1Accent: "one tap from your booking engine.",
        sub: "A guest compares three properties on a phone and books the one that loads and speaks their language. That is the site I'd build for you: a page per room or apartment, several languages, and a book-now button that hands over to the booking engine you already pay for. Fixed quote on a 15-minute call.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Hotel website design on the Costa del Sol is a contest between two tabs. A guest in Amsterdam has found you on a booking portal and typed your name into Google to see the property itself; the portal is still open. Your site has to load on that phone, read in Dutch and show rooms, a price and a book-now button before the guest goes back.",
        "I don't sell a booking engine, and I don't replace the one you have. Availability, rates and payment stay in the system you already pay for; the website does everything before that click. Every room type, apartment or villa gets its own page, with photos sized for a phone and a from-price. The button hands over to your engine or, if you take bookings by message, opens a request with the dates and guest count already written.",
        "On Harbor Homes I built the rental sections: short-term and long-term rentals pulled from a property feed into filterable listings, in four languages. The case for languages comes from a clinic in the same town: on Acme Clinic's site in Marbella, 27% of clicks from Google came from outside Spain (441 of 1,643; Google Search Console, twelve months to 1 September 2026). And the sites I build score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026).",
      ],
      features: [
        {
          title: "A page for every room or apartment",
          description:
            "Each room type, apartment or villa gets its own URL with photos, capacity, bedrooms, a from-price and a way to book. A two-bedroom apartment with a pool in Estepona becomes a page Google can show to someone searching for exactly that. With many units, the list filters by area, capacity or bedrooms.",
        },
        {
          title: "Book-now into your booking engine",
          description:
            "The book-now button sits in the header of every page and hands the guest to the booking engine you already use. Availability, rates and payment stay in one system, with no second calendar to keep in sync. Your provider's link or widget is the first thing we check on the call.",
        },
        {
          title: "Booking requests for small properties",
          description:
            "Three villas or a guesthouse with no booking engine: the form asks for dates, guests and a name, then opens WhatsApp or email with the request already written. I built this flow for the villa pages of a Marbella luxury rental company, a first-phase project still in development, whose client stays unnamed here. You confirm the request yourself; the form takes no payment.",
        },
        {
          title: "The languages your guests search in",
          description:
            "Spanish and English as the base, then German, Swedish, Dutch or French, depending on where your guests come from. Each language is its own set of URLs, so the German room page has a German title and German text and links to its versions in the other languages. Harbor Homes runs this way in four languages (English, Swedish, Dutch and German); across client sites I have shipped seven.",
        },
        {
          title: "Heavy galleries, light pages",
          description:
            "Accommodation sells on photographs, and photographs slow a site down. Your gallery is compressed, sized for each screen and loaded as the guest scrolls, so the first room photo doesn't wait for the twentieth. That matters most on mobile data, where a guest comparing three properties gives each one a few seconds before going back to the portal.",
        },
        {
          title: "Location, reviews and local search",
          description:
            "A location section with a Google Maps embed and what is nearby. Each page gets its own title and description, plus lodging structured data, so Google can read the property as accommodation. Your Google reviews appear on the site, and Search Console is connected from launch. What I can't promise is a ranking position.",
        },
      ],
      localNote:
        "The two projects shown here: Harbor Homes, where I built rental listings, area guides and an interactive area map in four languages, and Hotel Aurora, the menu and guest-letter tool I work on for an alpine hotel, shown as a public demo on invented data. A third is in progress: the first phase of a villa catalogue for a Marbella luxury rental company. I'm based in Marbella and take on projects across the Costa del Sol, from Estepona to Málaga. On the two Marbella sites whose Search Console data I have published, a clinic and a property portal, searches arrive in English, German, French, Swedish and Dutch as well as Spanish.",
      processNote:
        "The call sets the scope: how many room types or units, which languages, and where bookings go. A one-page site for a single villa can be live a day or two later. A hotel or a rental portfolio with a page per unit in several languages takes one to two weeks. From you I need the photos you have, your rates and the booking link.",
      faq: [
        {
          q: "How much does hotel website design cost in Marbella?",
          a: "Hotel website design costs from €1,500 for a hotel or holiday rental site with a page per room or unit and more than one language; that is the business-site tier. A one-page site for a single villa or apartment starts at €500. Guest accounts, online payment or a custom dashboard make it platform work, €3,000+. Once I know the number of units and languages, you get the exact fixed quote on the first 15-minute call, and it doesn't change afterwards.",
        },
        {
          q: "How long does it take to build a hotel or holiday rental website?",
          a: "One to two weeks for a multi-page hotel or rental site, and 24-48 hours after the first call for a one-page site for a single property. On the 15-minute call we cover room count, languages and the booking link, and you get a fixed price and a delivery date. The next day you get a live preview link to open on your phone, as a guest would. Guest accounts or online payment take longer, on a timeline set on the call.",
        },
        {
          q: "Can the website connect to my booking engine or vacation rental PMS?",
          a: "Yes, by handing off: the book-now button on the website links to the booking engine or vacation rental software you already use, so availability, prices and payment stay where they are and there is no second calendar to keep in sync. A property with no engine gets a booking request instead: the form takes dates, guests and a name, then opens WhatsApp or email with the request already written, for you to confirm. Connections I have wired into client projects include the Resales Online property feed, WhatsApp links that open with the message already written, Stripe payments and Google Maps embeds.",
        },
        {
          q: "Can I take direct bookings on my own site instead of relying on Airbnb and Booking.com?",
          a: "Yes, alongside Airbnb and Booking.com: your own site takes the booking through your engine, or as a request you confirm by WhatsApp or email. The portals bring guests who have never heard of you. Your site is for the ones who look you up by name before they pay, and for the ones coming back. I make no promise about how many will book direct; that is down to your rates and your reviews.",
        },
        {
          q: "What is the best website builder for vacation rentals, and when is a custom site worth it?",
          a: "For one vacation rental with a calendar and little else, a website builder or the site module in your rental software is often enough. A custom site earns its price when you need a page per unit that Google can index, language versions with their own URLs, and large galleries that still load on a phone. I write these sites in code, on Next.js, so there is no WordPress install, Wix plan or page builder between the gallery and the guest's phone, and the code sits in your account.",
        },
        {
          q: "Can my hotel website be in English and Spanish?",
          a: "Yes. A hotel website built as a business site (from €1,500) is multilingual: Spanish and English first, then the further languages we agree on the call, each with its own URLs, titles and content. Visitors to Marbella search in their own language: the site of Acme Clinic, a dental clinic in Marbella, averages a top-three position for “zahnarzt marbella” (2.6), “dentiste marbella” (2.3) and “tandarts marbella” (2.9), the German, French and Dutch searches for a dentist in Marbella, with no page in those languages (Google Search Console, 1 September 2025 – 1 September 2026). A room page written in German gives Google a German page to show.",
        },
        {
          q: "Do you build websites for hotels and rentals outside Marbella, elsewhere on the Costa del Sol?",
          a: "Yes. I'm based in Marbella and take on hotels and rentals across the Costa del Sol: Estepona, San Pedro, Fuengirola, Mijas, Benalmádena and Málaga. Seeing a hotel in person is easy at that distance, but the process doesn't depend on it; an owner who lives abroad and rents out a villa here can do everything by phone and preview link. For rentals spread along the coast, each unit's page names its own town.",
        },
        {
          q: "How do I design a hotel website that gets direct bookings?",
          a: "To design a hotel website that gets direct bookings, start from the phone and work backwards from the booking. The book-now button is on screen before any scrolling. Every room has its own page with its own photos and from-price. A WhatsApp link answers the question that would otherwise send the guest back to the portal. The gallery loads quickly, because a room photo that stalls ends the visit. No website can promise bookings, and this page doesn't.",
        },
      ],
      crossLinksBlurb:
        "Accommodation has neighbours. The hotel restaurant needs its menu online, a rental portfolio sits close to real estate, and guests ask about a car. Each has its own page.",
      ogAlt:
        "Hotel website design in Marbella — websites for hotels and holiday rentals with a book-now button, from €1,500",
    },
  },
  es: {
    slug: "hoteles-apartamentos-turisticos",
    name: "Hoteles y apartamentos turísticos",
    summary:
      "La web de un hotel o unos apartamentos tiene que cargar en el móvil, hablar el idioma del huésped y llevarlo a tu motor de reservas sin perderlo por el camino.",
    serviceName: "Diseño web para hoteles y apartamentos turísticos",
    mailSubject: "Web para hotel o apartamentos turísticos",
    waMessage:
      "Hola Alex — necesito una web para mi hotel / mis apartamentos turísticos. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "6,3M+", label: "Impresiones en Google de webs de clientes, 6 meses" },
      { value: "100/100", label: "SEO en Lighthouse, cinco webs de clientes" },
      { value: "94–100", label: "Rendimiento en Lighthouse, las mismas webs" },
      { value: "25+", label: "Webs entregadas" },
    ],
    statsNote:
      "Impresiones: Google Search Console, webs de clientes, últimos seis meses. Lighthouse: Google PageSpeed Insights, prueba de escritorio, 2 de octubre de 2026, en cinco webs de clientes — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders y Bloom Method.",
    reviewTranslation:
      "Contratamos a Alex para crear una herramienta de reservas y limpieza para nuestro pequeño hotel. Sustituyó tres hojas de cálculo y el equipo la dominó en un día. […] Volveríamos a contratarle.",
    og: {
      kicker: "Diseño web — hoteles y apartamentos turísticos",
      headline: "Webs para hoteles y apartamentos, pensadas para reservar.",
    },
    copy: {
      metaTitle: "Diseño web para hoteles en Marbella y Málaga — desde 1.500 €",
      metaDescription:
        "Diseño web para hoteles y apartamentos turísticos en Marbella y Málaga: webs rápidas, en varios idiomas, enlazadas a tu sistema de reservas. Desde 1.500 €.",
      hero: {
        label: "Webs para hoteles y apartamentos turísticos — Marbella y Costa del Sol",
        h1Main: "Diseño web para hoteles y apartamentos turísticos en Marbella,",
        h1Accent: "a un toque de tu motor de reservas.",
        sub: "Tu huésped te ve en un portal, busca tu nombre en Google y decide desde el móvil. La web que encuentra ahí es la que te propongo: una ficha por habitación o apartamento, varios idiomas y un botón de reservar que lleva al motor de reservas que ya pagas. Precio cerrado en una llamada de 15 minutos.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "El diseño web para hoteles que sale en Google suelen venderlo agencias de marketing hotelero y proveedores de motores de reservas. Desde Marbella te propongo la otra parte: la web que tu huésped abre en el móvil en Hamburgo, que carga, le habla en su idioma y le enseña habitación, precio y botón de reservar. Tu motor se queda donde está.",
        "Cada habitación, apartamento o villa tiene su ficha, con fotos a la medida del móvil y un precio de partida; el botón de reservar lleva a tu motor o, si gestionas las reservas por mensaje, abre una solicitud con las fechas y los huéspedes ya escritos. En Harbor Homes monté las secciones de alquiler de corta y larga temporada, alimentadas por un feed de propiedades, con listados filtrables en cuatro idiomas. Y las webs que hago sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026).",
        "El argumento a favor de los idiomas me lo dio una clínica. En la web de Acme Clinic, en Marbella, el 27 % de los clics desde Google llegó de fuera de España (441 de 1.643; Google Search Console, doce meses hasta el 1 de septiembre de 2026). Si eso le pasa a una clínica, un alojamiento que vive del visitante no puede estar solo en español. Por eso cada idioma lleva sus propias URL.",
      ],
      features: [
        {
          title: "Botón de reservar hacia tu motor",
          description:
            "El sistema de reservas es lo primero que se le pide a la web de un hotel, y el tuyo ya existe. El botón de reservar va en la cabecera de cada página y lleva al motor que ya usas: disponibilidad, tarifas y cobro siguen en un solo sitio. El enlace o el widget de tu proveedor lo miramos nada más empezar la llamada.",
        },
        {
          title: "Una ficha por habitación o apartamento",
          description:
            "Cada habitación, apartamento o villa tiene su URL propia, con fotos, capacidad, dormitorios, precio de partida y botón de reservar. Así Google tiene una página concreta que enseñar a quien busca un apartamento de dos dormitorios con piscina en Estepona. Si gestionas muchos alojamientos, la lista se filtra por zona, capacidad o dormitorios.",
        },
        {
          title: "Solicitud de reserva por WhatsApp",
          description:
            "Para tres villas o un hostal sin motor de reservas: el formulario pide fechas, huéspedes y un nombre, y abre WhatsApp o el correo con la solicitud ya redactada. Lo construí así para las villas de una empresa de alquiler de lujo de Marbella que aquí no nombro, en la primera fase de un proyecto aún en desarrollo. La solicitud la confirmas tú; el formulario no consulta un calendario ni cobra.",
        },
        {
          title: "En el idioma en que te buscan",
          description:
            "Español e inglés de base, y alemán, sueco, neerlandés o francés según de dónde vengan tus huéspedes. Cada idioma tiene sus URL: la ficha en alemán lleva título y texto en alemán y va enlazada con sus versiones en los demás idiomas. Harbor Homes funciona así en cuatro idiomas (inglés, sueco, neerlandés y alemán), y entre todas las webs de clientes he entregado siete.",
        },
        {
          title: "Galerías grandes, páginas ligeras",
          description:
            "Un alojamiento se vende con fotos, y las fotos frenan una web. Tu galería sale comprimida, a la medida de cada pantalla, y se carga según el huésped baja por la página, así que la primera foto de la habitación no tiene que esperar a la número veinte. Donde más se nota es en el móvil y con datos: ahí tu huésped compara tres alojamientos y le da a cada uno unos segundos.",
        },
        {
          title: "Ubicación, reseñas y búsqueda local",
          description:
            "Málaga, Estepona, Marbella: cada ficha lleva su localidad en el título y en la descripción. Se suman un apartado de ubicación con mapa de Google y lo que hay cerca, y datos estructurados de alojamiento. Tus reseñas de Google se ven en la web, y Search Console queda conectado desde el lanzamiento. No prometo una posición en Google.",
        },
      ],
      localNote:
        "Los dos proyectos que ves aquí: Harbor Homes, donde monté los listados de alquiler, las guías de zona y un mapa interactivo de la zona en cuatro idiomas, y Hotel Aurora, la herramienta de menús y saludo al huésped en la que trabajo para un hotel alpino, que se enseña como demo pública con datos inventados. En marcha está también la primera fase de un catálogo de villas para una empresa de alquiler de lujo de Marbella. Trabajo desde Marbella y acepto proyectos de toda la Costa del Sol, de Estepona a Málaga. En las dos webs de Marbella cuyos datos de Search Console he publicado, una clínica y un portal inmobiliario, las búsquedas llegan en inglés, alemán, francés, sueco y neerlandés además de en español.",
      processNote:
        "En la llamada cerramos el alcance: cuántas habitaciones o apartamentos, qué idiomas y adónde van las reservas. Una sola página para una villa puede estar online uno o dos días después. Un hotel o una cartera de apartamentos con ficha por alojamiento y varios idiomas lleva una o dos semanas. De ti necesito las fotos que tengas, las tarifas y el enlace de tu motor.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para un hotel?",
          a: "Una página web para un hotel o unos apartamentos turísticos, con ficha por habitación o apartamento y más de un idioma, es una web de empresa: desde 1.500 €. Una sola página para una villa parte de 500 €. Con cuentas de huésped, pago online o un panel a medida es trabajo de plataforma: 3.000 €+. El presupuesto cerrado te lo doy en la primera llamada de 15 minutos, cuando sé cuántos alojamientos e idiomas hay, y no cambia después.",
        },
        {
          q: "¿Cuánto se tarda en hacer la web de un hotel o de unos apartamentos turísticos?",
          a: "Entre una y dos semanas para la web de un hotel o de una cartera de apartamentos, y 24–48 horas desde la primera llamada si es una sola página para un alojamiento. En esa llamada vemos habitaciones, idiomas y enlace de reservas, y sales con precio y fecha cerrados. Al día siguiente tienes un enlace de vista previa real, para abrirlo en el móvil como lo haría un huésped. Con cuentas de huésped o pago online, el plazo se fija en la llamada.",
        },
        {
          q: "¿Se puede integrar un sistema de reservas en la web del hotel?",
          a: "Sí: el botón de reservar lleva al sistema de reservas que ya usas, y la disponibilidad, las tarifas y el cobro siguen ahí, sin un segundo calendario que mantener al día. El huésped elige habitación en tu web y termina la reserva en el motor por el que ya pagas. Si no tienes motor, la web recoge una solicitud de reserva con fechas, huéspedes y nombre, que te llega por WhatsApp o por correo para que la confirmes tú. El enlace o el widget de tu proveedor es lo primero que miramos en la llamada.",
        },
        {
          q: "¿Qué software usan los hoteles y se puede conectar con la página web?",
          a: "Lo habitual en un hotel son tres piezas: un PMS para la gestión diaria, un channel manager para los portales y un motor de reservas para vender en la web propia. La web enlaza con el motor: el botón de reservar lleva al huésped allí, y las otras dos piezas siguen como están. En proyectos de clientes he conectado el feed de propiedades de Resales Online, enlaces de WhatsApp con el mensaje ya escrito, pagos con Stripe y mapas de Google incrustados.",
        },
        {
          q: "¿Puedo crear una página web para mi hotel gratis?",
          a: "Sí: hay creadores de webs con plan gratuito y software de alquiler vacacional que incluye una web básica. Para un apartamento con un calendario y poco más puede bastar. Se queda corto cuando necesitas una ficha por alojamiento que Google pueda indexar, versiones por idioma con sus propias URL o galerías que carguen en el móvil. Lo mío va programado a medida en Next.js: ni WordPress, ni Wix, ni un maquetador visual.",
        },
        {
          q: "¿Por qué un apartamento turístico en Málaga necesita web propia si ya está en Booking y Airbnb?",
          a: "Porque Booking y Airbnb te traen al huésped que no te conoce, pero el orden en que apareces y las condiciones los ponen ellos. La web propia de un apartamento turístico es para quien busca tu nombre antes de pagar y para quien repite, con todas tus fotos, tu precio de partida y la reserva directa. Convive con los portales. No prometo cuántas reservas directas entrarán; eso depende de tus tarifas y tus reseñas.",
        },
        {
          q: "¿La web de mi hotel puede estar en español e inglés?",
          a: "Sí. La web de un hotel, como web de empresa (desde 1.500 €), es multiidioma: español e inglés primero y los demás idiomas que acordemos en la llamada, cada uno con sus propias URL, títulos y textos. Quien visita Marbella busca en su idioma: la web de Acme Clinic, una clínica dental de Marbella, está de media entre los tres primeros resultados para «zahnarzt marbella» (2,6), «dentiste marbella» (2,3) y «tandarts marbella» (2,9), las búsquedas de dentista en Marbella en alemán, francés y neerlandés, sin páginas en esos idiomas (Google Search Console, del 1 de septiembre de 2025 al 1 de septiembre de 2026). Una ficha escrita en alemán le da a Google una página en alemán que enseñar.",
        },
        {
          q: "¿El precio de la web incluye SEO local, hosting y mantenimiento?",
          a: "El SEO local va dentro del precio: título y descripción por ficha, datos estructurados de alojamiento y Search Console conectado. El hosting y el mantenimiento no los doy por supuestos: en la llamada te digo qué cuesta tener la web en marcha, y queda escrito en el presupuesto junto al precio del desarrollo, que es cerrado. Tu motor de reservas lo sigues pagando a tu proveedor, como hasta ahora; la web solo enlaza con él. El dominio, el código y los datos se dan de alta a tu nombre. Una habitación nueva o un idioma más se presupuestan aparte, con precio cerrado antes de empezar.",
        },
      ],
      crossLinksBlurb:
        "El alojamiento tiene vecinos. El restaurante del hotel necesita su carta online, una cartera de apartamentos linda con la inmobiliaria y el huésped pregunta por un rent a car. Cada uno tiene su página.",
      ogAlt:
        "Diseño web para hoteles y apartamentos turísticos en Marbella y Málaga — webs con botón de reservar, desde 1.500 €",
    },
  },
};
