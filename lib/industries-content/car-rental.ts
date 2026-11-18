import type { IndustrySource } from "../industries";

// Figures: Lighthouse SEO (100/100) and performance (94–100) scores of five client sites' home pages — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders, Bloom Method — from Google PageSpeed Insights, 2 October 2026. The performance range is the desktop test.
// Bayside Car Rental (bayside-car-rental.example), a site I built, live October 2026: 57 car pages and five languages (EN, ES, RU, FR, DE), counted from its sitemap on 9 October 2026. A car page's enquiry opens WhatsApp with the car, the dates and the pick-up place; no payment is taken online (its rental-information page). Its own Lighthouse scores are not quoted: the five-site figures above predate it.
export const carRental: IndustrySource = {
  key: "car-rental",
  proofProjects: ["Bayside Car Rental"],
  highlightTier: 1,
  related: ["car-wash", "hotels", "real-estate"],
  en: {
    slug: "car-rental",
    name: "Car rental companies",
    summary:
      "A car rental site has to show the car, the daily price and the deposit, then pass the dates to the booking system you already run.",
    serviceName: "Car rental website design",
    mailSubject: "Car rental website",
    waMessage:
      "Hi Alex — I run a car rental company and need a new website. When can we do the 15-min call?",
    stats: [
      { value: "57", label: "Car pages on Bayside Car Rental's site" },
      { value: "5", label: "Languages, each with its own URLs" },
      { value: "100/100", label: "Lighthouse SEO score, five client sites" },
      { value: "94–100", label: "Lighthouse performance, same sites" },
    ],
    statsNote:
      "Car pages and languages: bayside-car-rental.example, October 2026. Lighthouse scores: Google PageSpeed Insights, desktop test, 2 October 2026, for five client sites — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders and Bloom Method.",
    og: {
      kicker: "Web design — car rental",
      headline: "Car rental sites that pass the dates to your booking system.",
    },
    copy: {
      metaTitle: "Car rental website design in Marbella & Costa del Sol",
      metaDescription:
        "Car rental website design in Marbella: a page per car, price and deposit up front, dates passed to your booking system. From €1,500, live in 1-2 weeks.",
      hero: {
        label: "Websites for car rental and car hire companies — Marbella & Costa del Sol",
        h1Main: "Car rental website design in Marbella that passes the dates",
        h1Accent: "to your booking system.",
        sub: "A page for every car, with the daily price and the deposit in plain sight. A search bar that hands the dates to the rental software you already run, or a WhatsApp request you confirm yourself. Business sites from €1,500, quoted fixed on a 15-minute call.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Car rental website design on the Costa del Sol starts from a customer at arrivals in Málaga, dates chosen, phone in hand. Three things decide the rental: which car, how much per day, how much deposit. The site shows all three, then passes the dates to your booking system. A slow page or a hidden deposit, and the next tab gets the rental.",
        "My car rental work. Bayside Car Rental rents, sells and exports cars from Puerto Banús, and its site is mine: 57 cars, each with its own page showing the photos, the from-price per day, the deposit and the kilometres included, in English, Spanish, Russian, French and German. The customer picks the dates and a pick-up place on the car's page, and the enquiry opens WhatsApp with the car and the dates written out. I am also building a site in English, Spanish and Swedish for a Costa del Sol car rental and detailing business: every car with its starting price and deposit, a search bar that passes pick-up place and dates to the booking engine the business already uses, and the old site's URLs kept.",
        "What can be measured, I measure. The sites I build score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026, five live client sites). Both matter to a rental company: Google has to be able to read every car's page, and that page has to load before the customer opens the next tab.",
      ],
      features: [
        {
          title: "A page for every car",
          description:
            "Each car or category gets its own page: photos sized for a phone, the spec line, a from-price per day and the deposit. On Bayside Car Rental's site that is 57 pages, from a Lamborghini Urus to a Volkswagen Golf, each with structured data, and a collection page that filters them by type, by brand or by a typed model name.",
        },
        {
          title: "Dates in, booking handed over",
          description:
            "A search bar on the home and fleet pages: pick-up place, pick-up date, drop-off date. It passes those to the rental software you already run, where availability, contract and payment stay. If you run none, the request opens WhatsApp or a form with the car and dates already written. That is how Bayside Car Rental works: the enquiry carries the car, the dates and the pick-up place, the team confirms availability and price, and no payment is taken online.",
        },
        {
          title: "Price, deposit and insurance up front",
          description:
            "I searched Google for car rental web design in Spanish, \"diseño web rent a car Málaga\"; the related searches included \"rent a car Málaga sin depósito\" (no deposit). Your site answers the deposit question beside each price and on a conditions page: deposit, insurance excess, fuel policy, mileage, minimum age. The terms are yours to supply.",
        },
        {
          title: "Every pick-up point, its own page",
          description:
            "Málaga Airport, Marbella, Puerto Banús, delivery to a hotel or a villa: each place you hand over keys gets a page with the address, the hours, a map and what happens on arrival. A search at the airport and a search in Puerto Banús each have their own page to land on.",
        },
        {
          title: "Each language as its own version",
          description:
            "English and Spanish as a base, then the languages your customers book in. Each gets its own URLs, titles and hreflang links, with no translation widget laid over one set of pages. Bayside Car Rental's site runs in five: English, Spanish, Russian, French and German. Multilingual is part of a business site from €1,500.",
        },
        {
          title: "Your current URLs, kept",
          description:
            "If you already have a site, some of its pages may rank. The rebuild keeps those addresses where it can and redirects the rest, so the fleet page Google already knows stays the fleet page. The rental site I have in progress keeps the old site's URLs.",
        },
      ],
      localNote:
        "I am based in Marbella and work across the Costa del Sol. Customers here search in several languages: a renter from Stockholm and a renter from Madrid type different words for the same car.",
      processNote:
        "Bring three things to the call: your fleet list with daily prices and deposits, your rental conditions, and the link to the booking system you use. A one-page site for a small fleet can launch 24-48 hours after that call. With a page per car, pick-up pages and several languages it is a business site: one to two weeks.",
      faq: [
        {
          q: "How much does a car rental website cost?",
          a: "A one-page car rental site starts at €500, a multi-page business site at €1,500, and platform work at €3,000+. A single page with the fleet, the conditions and a WhatsApp request is a landing; a page per car, pick-up pages and several languages is a business site; a booking system of your own, with payments, is platform work. The exact fixed quote comes on the first 15-minute call and does not change afterwards.",
        },
        {
          q: "How long does it take to build a car rental website?",
          a: "From 24-48 hours to two weeks, and what sets the date is your fleet sheet. If prices and deposits per model and the conditions text are ready, a one-page site can be live 24-48 hours after the first call. A business site with a page per car, pick-up pages and several languages takes one to two weeks. You leave the 15-minute call with a fixed price and a date, and the preview link arrives the next day.",
        },
        {
          q: "How do I create a car rental website?",
          a: "There are three routes to a car rental website: a rental website builder, a WordPress template with a rental plugin, or a developer who codes it. Decide three things first. How bookings are taken: rental software with live availability, or a request you confirm by WhatsApp. What each car's page says: photos, specs, daily price, deposit. Where keys change hands. With me: a 15-minute call and a fixed quote.",
        },
        {
          q: "Should I use a car rental website builder, a WordPress rental theme, or hire a web designer?",
          a: "Use a rental website builder if you have no rental software and need live availability and online booking this month: it comes with both, and I would say so on the call. Hire a developer if you already run booking software and the weak part is the site in front of it. That is my job: a car rental site custom-coded on Next.js — not WordPress, not Wix, not a page builder — that hands the dates to your system.",
        },
        {
          q: "Can customers check availability and book a car online on the website?",
          a: "Yes, as long as the rental software you already use accepts a search from outside: the site passes the customer to it with pick-up place and dates filled in, and availability, contract and payment happen there. We check that on the call. Availability stays in one place: the calendar your desk already works from. If you run no rental software, the request opens WhatsApp or a form with the car and the dates already written, and you confirm it yourself. A booking system of your own, with online payment, is platform work, at €3,000+.",
        },
        {
          q: "What should a luxury car rental website include?",
          a: "A luxury car hire website needs a page per car first: large photos that still load on a phone, the specs, a from-price per day and the deposit. Then delivery to the airport, a hotel or a villa. Then a WhatsApp request with the car and the dates already written. Bayside Car Rental's site, which I built, has a page for each of its 57 cars, with specs, a from-price, the deposit and structured data, and the WhatsApp request on every one.",
        },
        {
          q: "Can the website be in English and Spanish, and other languages my customers speak?",
          a: "Yes — English and Spanish are the base, and each further language is a full version with its own URLs, titles and hreflang links, so Google can show the Swedish page to a search typed in Swedish. A renter from Stockholm and a renter from Madrid type different words for the same car, and each should land on a page written in theirs. Bayside Car Rental's site, which I built, runs in five: English, Spanish, Russian, French and German. The rental site I am building is in English, Spanish and Swedish.",
        },
        {
          q: "How do I get my car rental website found on Google for searches like luxury car rental Marbella?",
          a: "By giving Google a specific page for each specific search, and then with time; I cannot promise a position. The build controls a page per car and per pick-up point with structured data, each language as its own version, fast mobile loading, and Search Console connected from day one. The sites I build score 100/100 for SEO in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026, five live client sites); that test covers the technical side, not the ranking. Rental operators already rank for those searches, so count on months, not days. Your Google reviews and your Business Profile weigh in too, and they sit outside the website.",
        },
      ],
      crossLinksBlurb:
        "If you also run a detailing bay, a hotel or an estate agency, these pages cover those sites — same process, a fixed-price quote on the first call.",
      ogAlt:
        "Car rental website design in Marbella and the Costa del Sol — a page per car, price and deposit up front, from €1,500",
    },
  },
  es: {
    slug: "alquiler-de-coches",
    name: "Alquiler de coches",
    summary:
      "La web de un rent a car tiene que enseñar el coche, el precio por día y el depósito, y pasar las fechas al sistema de reservas que ya usas.",
    serviceName: "Diseño web para alquiler de coches",
    mailSubject: "Web para alquiler de coches",
    waMessage:
      "Hola Alex — tengo una empresa de alquiler de coches y necesito una web nueva. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "57", label: "Páginas de coche en la web de Bayside Car Rental" },
      { value: "5", label: "Idiomas, cada uno con sus propias URLs" },
      { value: "100/100", label: "SEO en Lighthouse, cinco webs de clientes" },
      { value: "94–100", label: "Rendimiento en Lighthouse, las mismas webs" },
    ],
    statsNote:
      "Páginas e idiomas: bayside-car-rental.example, octubre de 2026. Lighthouse: Google PageSpeed Insights, prueba de escritorio, 2 de octubre de 2026, en cinco webs de clientes — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders y Bloom Method.",
    og: {
      kicker: "Diseño web — alquiler de coches",
      headline: "Webs de rent a car con el precio y el depósito a la vista.",
    },
    copy: {
      metaTitle: "Diseño web para alquiler de coches en Marbella y Málaga",
      metaDescription:
        "Diseño web para alquiler de coches y rent a car en Marbella y Málaga: flota con precios, varios idiomas y reservas conectadas a tu sistema. Desde 1.500 €.",
      hero: {
        label: "Webs para rentacar y alquiler de coches — Marbella y Costa del Sol",
        h1Main: "Diseño web para alquiler de coches y rent a car en Marbella,",
        h1Accent: "con precio y depósito a la vista.",
        sub: "Cada coche con su precio por día y su depósito, sin que nadie tenga que preguntar. Las fechas pasan a tu sistema de reservas. Web de empresa desde 1.500 €, con presupuesto cerrado en 15 minutos.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "Quien busca diseño web para alquiler de coches en la Costa del Sol tiene un cliente muy concreto: alguien que espera la maleta en el aeropuerto de Málaga, con las fechas ya cerradas y el móvil en la mano. Tu web tiene que decirle qué coche, cuánto al día y qué depósito, y recoger la solicitud o pasar las fechas al sistema que ya usas.",
        "Mi trabajo en el sector. Bayside Car Rental alquila, vende y exporta coches desde Puerto Banús, y su web la hice yo: 57 coches, cada uno con su página, con fotos, precio de partida por día, depósito y kilómetros incluidos, en español, inglés, ruso, francés y alemán. El cliente elige fechas y lugar de recogida en la página del coche, y la solicitud abre WhatsApp con el coche y las fechas ya escritos. Además estoy construyendo una web en español, inglés y sueco para un negocio de alquiler de coches y detailing de la Costa del Sol: cada coche con su precio de partida y su depósito, un buscador que pasa lugar de recogida y fechas al motor de reservas que el negocio ya usa, y las URLs de la web anterior conservadas.",
        "Lo que se puede medir, lo mido. Las webs que hago sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026, cinco webs de clientes ya publicadas). A un rent a car le importan las dos cosas: Google tiene que poder leer la página de cada coche, y esa página tiene que cargar antes de que el cliente abra la pestaña de al lado.",
      ],
      features: [
        {
          title: "Precio, depósito y seguro, claros",
          description:
            "Al preparar esta página busqué «diseño web rent a car Málaga»; entre las búsquedas relacionadas, Google mostraba «rent a car Málaga sin depósito» y «alquiler coches Málaga larga temporada». Tu web contesta a eso junto a cada precio y en una página de condiciones: fianza, franquicia, combustible, kilometraje, edad mínima. Las condiciones las pones tú.",
        },
        {
          title: "Una página por coche",
          description:
            "Cada coche o categoría tiene su página: fotos que pesan lo justo para un móvil, ficha, precio de partida por día y depósito. En la web de Bayside Car Rental son 57 páginas, de un Lamborghini Urus a un Volkswagen Golf, todas con datos estructurados, y una colección que se filtra por tipo, por marca o escribiendo el modelo.",
        },
        {
          title: "Las fechas, directas a tu sistema",
          description:
            "Un buscador en la portada y en la flota: lugar de recogida, fecha de recogida y de devolución. Esos datos pasan al programa de alquiler que ya usas, y allí siguen la disponibilidad, el contrato y el cobro. Si no usas ninguno, la solicitud sale por WhatsApp con el coche y las fechas ya escritos. Así funciona Bayside Car Rental: la solicitud lleva el coche, las fechas y el lugar de recogida, el equipo confirma disponibilidad y precio, y no se cobra nada online.",
        },
        {
          title: "Aeropuerto, Marbella, Puerto Banús",
          description:
            "Cada punto donde entregas llaves tiene su página: dirección, horario, mapa y qué pasa al llegar. Aeropuerto de Málaga, Marbella, Puerto Banús, entrega en hotel o en villa. Quien busca coche en el aeropuerto y quien lo busca en Puerto Banús tienen cada uno su página donde aterrizar.",
        },
        {
          title: "Español, inglés y los que hagan falta",
          description:
            "Español e inglés de base, y después los idiomas en los que te reservan. Cada uno con sus URLs, sus títulos y sus enlaces hreflang, sin un widget de traducción encima de una sola web. La de Bayside Car Rental va en cinco: español, inglés, ruso, francés y alemán.",
        },
        {
          title: "Tus URLs de siempre, conservadas",
          description:
            "Si ya tienes web, puede que algunas de sus páginas posicionen. La nueva conserva esas direcciones cuando se puede y redirige el resto, para que la página de flota que Google ya conoce siga siéndolo. La web de alquiler que tengo en marcha mantiene las URLs de la anterior.",
        },
      ],
      localNote:
        "Trabajo desde Marbella y por toda la Costa del Sol. Aquí el cliente busca en varios idiomas: el mismo coche se pide en español, en inglés y en sueco.",
      processNote:
        "Trae tres cosas a la llamada: la lista de la flota con precio por día y depósito, tus condiciones de alquiler y el enlace del sistema de reservas que usas. Una web de una sola página puede estar online 24–48 horas después. Con página por coche, puntos de recogida y varios idiomas es una web de empresa: una o dos semanas.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para una empresa de alquiler de coches?",
          a: "Una página web para una empresa de alquiler de coches cuesta desde 500 € si es una landing (una sola página con la flota, las condiciones y la solicitud por WhatsApp), desde 1.500 € si es una web de empresa (página por coche, puntos de recogida y varios idiomas) y 3.000 €+ si es una plataforma (un sistema de reservas propio con pagos). El presupuesto exacto te lo doy cerrado en la primera llamada de 15 minutos y no cambia después.",
        },
        {
          q: "¿Cuánto se tarda en tener lista la web de mi rent a car?",
          a: "La fecha la marca tu hoja de flota. Si el precio y el depósito de cada modelo y el texto de las condiciones están listos, una landing puede estar online 24–48 horas después de la primera llamada. Una web de empresa con página por coche, puntos de recogida y varios idiomas lleva una o dos semanas. De esa llamada de 15 minutos sales con precio y fecha cerrados, y al día siguiente recibes un enlace con la web ya navegable.",
        },
        {
          q: "¿La web puede tener reservas online con disponibilidad de la flota?",
          a: "Sí, siempre que el programa de alquiler que ya usas acepte una búsqueda desde fuera: la web envía al cliente a ese programa con el lugar y las fechas ya puestos, y la disponibilidad, el contrato y el pago se hacen allí. Lo comprobamos en la llamada. Así la disponibilidad vive en un solo sitio: el calendario con el que ya trabajas en el mostrador. Si no usas ningún programa, la solicitud sale por WhatsApp o por formulario con el coche y las fechas ya escritos, y la confirmas tú. Un sistema de reservas propio, con pago online, es trabajo de plataforma: 3.000 €+.",
        },
        {
          q: "¿Es mejor una plantilla de WordPress o una web a medida para un rent a car?",
          a: "Una plantilla de WordPress con plugin de reservas te conviene si no tienes programa de alquiler y necesitas disponibilidad y reserva online este mes: suele traerlo montado. Si el programa ya lo tienes y lo que falla es la web que va por delante, te conviene una web a medida: la programo en Next.js — ni WordPress, ni Wix, ni maquetador visual — y entrega las fechas a tu sistema.",
        },
        {
          q: "¿La web puede estar en español, inglés y otros idiomas para los turistas?",
          a: "Sí: español e inglés de base, y cada idioma adicional como una versión completa, con sus URLs, sus títulos y sus enlaces hreflang, para que Google pueda enseñar la página en sueco a quien busca en sueco. El mismo coche se busca con palabras distintas desde Estocolmo y desde Madrid, y cada cliente debería aterrizar en una página escrita en su idioma. La web que hice para Bayside Car Rental va en cinco: español, inglés, ruso, francés y alemán. La web de alquiler que estoy construyendo va en español, inglés y sueco.",
        },
        {
          q: "¿Cómo consigo que mi web aparezca en Google cuando buscan alquiler de coches en Málaga o rent a car en Marbella?",
          a: "Con una página concreta para cada búsqueda, y con tiempo; una posición no te la puedo prometer. Lo que pone la web: una página por coche y por punto de recogida con datos estructurados, cada idioma como versión propia, carga rápida en móvil y Search Console conectado desde el primer día. Las webs que hago sacan 100/100 en SEO en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026, cinco webs de clientes ya publicadas); esa prueba mide la parte técnica, no la posición. En Google ya hay empresas de alquiler bien situadas, así que cuenta con meses, no días. Tus reseñas y tu ficha de Google también pesan, y no dependen de la web.",
        },
        {
          q: "¿Sirve también para alquiler de coches de lujo o de coches con conductor?",
          a: "Sí. Para alquiler de lujo hice la web de Bayside Car Rental: una página para cada uno de sus 57 coches, con ficha, precio de partida, depósito y datos estructurados, y una solicitud por WhatsApp con el coche y las fechas ya escritos. La web de un servicio de coches con conductor se plantea igual y cambia lo que el cliente necesita ver: una página por servicio (traslado al aeropuerto, disposición por horas, eventos), el vehículo, la tarifa o cómo se pide precio, y una reserva por WhatsApp o formulario con fecha, hora y recorrido.",
        },
        {
          q: "¿Cómo crear una página web de alquiler de coches?",
          a: "Hay tres caminos para crear una página web de alquiler de coches: un creador de webs para rent a car, una plantilla de WordPress con plugin de reservas o un desarrollador que la programe. Antes decide tres cosas: cómo se reserva, con un programa que lleva la disponibilidad o con una solicitud por WhatsApp; qué dice la página de cada coche; y dónde entregas las llaves.",
        },
      ],
      crossLinksBlurb:
        "Si además llevas un centro de lavado y detailing, un hotel o una inmobiliaria, estas páginas cuentan cómo planteo esas webs.",
      ogAlt:
        "Diseño web para alquiler de coches en Marbella y la Costa del Sol — una página por coche, precio y depósito a la vista, desde 1.500 €",
    },
  },
};
