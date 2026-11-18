import type { IndustrySource } from "../industries";

// Figures. Stats row: Google Search Console across client properties (lib/data.ts), and Lighthouse scores of five
// client sites — Google PageSpeed Insights, 2 October 2026. Restaurant and beach-bar load times: the Marbella website
// speed report (lib/studies-content-en.ts / -es.ts) — PageSpeed Insights mobile, 8–23 August 2026, averages by trade.
export const restaurants: IndustrySource = {
  key: "restaurants",
  proofProjects: ["Hotel Aurora", "Acme Clinic"],
  highlightTier: 0,
  related: ["hotels", "car-wash", "aesthetic-clinics"],
  en: {
    slug: "restaurants",
    name: "Restaurants",
    summary:
      "A restaurant site has to put the menu, hours, map and a way to ask for a table on a phone screen in seconds, in the languages guests search in.",
    serviceName: "Restaurant website design",
    mailSubject: "Restaurant website",
    waMessage: "Hi Alex — I need a website for my restaurant. When can we do the 15-min call?",
    stats: [
      { value: "6.3M+", label: "Google impressions across client sites, 6 months" },
      { value: "100/100", label: "Lighthouse SEO score, five client sites" },
      { value: "94–100", label: "Lighthouse performance, same sites" },
      { value: "25+", label: "Sites shipped" },
    ],
    statsNote:
      "Impressions: Google Search Console across client properties, last six months. Lighthouse scores: Google PageSpeed Insights, desktop test, on 2 October 2026 for five client sites — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders and Bloom Method.",
    og: {
      kicker: "Web design — restaurants & beach clubs",
      headline: "Restaurant websites built for the phone outside your door.",
    },
    copy: {
      metaTitle: "Restaurant website design in Marbella & Costa del Sol",
      metaDescription:
        "Restaurant website design in Marbella, beach clubs included: a menu that reads on a phone, table requests by WhatsApp. One page from €500, live in days.",
      hero: {
        label: "Web design for restaurants & beach clubs — Marbella & Costa del Sol",
        h1Main: "Restaurant website design in Marbella, built for the phone",
        h1Accent: "outside your door.",
        sub: "A menu that opens as a page on 4G, your hours, a map and a way to ask for a table. One-page sites from €500, full bilingual sites from €1,500, with a fixed quote on the first 15-minute call.",
        ctaLabel: "Book a 15-min call",
      },
      intro: [
        "Restaurant website design on this coast is decided on the pavement. Someone is standing outside at 20:40 with a phone, choosing between you and the place next door. They want the menu, the hours, the map and a way to ask for a table. The page has seconds to hand those over.",
        "In August 2026 I ran Google PageSpeed Insights, mobile profile, on 211 local business websites in Marbella and Málaga. The 18 restaurant sites averaged 17.6 seconds to show their main content, a figure pulled up by a few extreme cases, and a performance score of 63 out of 100. The 28 beach bars averaged 9.3 seconds. Google's threshold is 2.5 seconds. Across the sample the cause was almost entirely images and hosting. The sites I build score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026, five client sites).",
        "I build your site custom-coded on Next.js, with the menu as real text and every photo resized before it ships. A one-page site with menu, hours, map and a booking request starts at €500; a full site with several pages and languages starts at €1,500. You get the exact fixed quote on the first 15-minute call, and a live preview link the next day.",
      ],
      features: [
        {
          title: "The menu as a page",
          description:
            "Your menu goes on the site as text: sections, dishes and prices, readable with one thumb and by Google. Nobody downloads a PDF and pinches at it in the street. Tell me on the call how often it changes: a seasonal menu and a daily set lunch are different builds, and the quote is written for yours.",
        },
        {
          title: "Table requests by form or WhatsApp",
          description:
            "A table request is a short form with date, time and party size, or a WhatsApp button that opens the chat with the request already written. It goes straight to your team to confirm, with no booking platform in between. Group and private-hire inquiries use the same route. If you already use a reservation service, the site links to it.",
        },
        {
          title: "Allergens beside each dish",
          description:
            "The 14 EU allergens next to each dish, from the list your kitchen gives me, so a guest with a nut allergy has the answer before sitting down. The layout follows a hotel menu tool I work on, where dishes carry the 14 allergen codes. The allergen data is your kitchen's; my part is laying it out so it reads at a glance.",
        },
        {
          title: "Photos that load on mobile data",
          description:
            "Food sells by photograph, and in my speed report images and hosting were what slowed local sites down. Every picture is resized to the space it fills, served in a modern format and loaded only when it scrolls into view. The sites I build score 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026, five client sites).",
        },
        {
          title: "Hours, map and tap-to-call",
          description:
            "Opening hours, address, a Google Maps embed and a phone number that dials when tapped, on the first screen of a phone. A seasonal place states its dates, so nobody drives to a beach club that closed in October. The same details go into structured data that tells search engines this is a restaurant and when it opens.",
        },
        {
          title: "Each language on its own URL",
          description:
            "Your restaurant's site gets a Spanish version and an English one, each with its own URLs, titles and descriptions, so a search in either language has its own page to land on. No translate widget on top. Client sites of mine have shipped in eight languages, German, French, Swedish and Dutch among them.",
        },
      ],
      localNote:
        "The Hotel Aurora card links to a public demo, running on invented data, of a menu tool I work on for an alpine hotel: weekly menus planned and printed in German, English and Italian, dishes carrying the 14 EU allergen codes, a chef's menu PDF read by AI into a reviewable weekly plan. Acme Clinic is here for its multi-step booking wizard and its WhatsApp capture on every page. I am based in Marbella, so along the Costa del Sol I can see the terrace and the room before laying out the gallery.",
      processNote:
        "With a restaurant, the material sets the pace: the menu as text or PDF, the allergen list, the season's opening hours, the photos you have. Send them before the call and the next day's preview already has your dishes on it. A one-page site follows the four steps below; a full site with several languages takes one to two weeks.",
      faq: [
        {
          q: "How much does a restaurant website cost?",
          a: "A restaurant website costs from €500 for a one-page site and from €1,500 for a full business site; platform work with dashboards or AI starts at €3,000. A single restaurant can start with one page: menu, hours, map, photos and a booking request, with copy, SEO basics and analytics included. You get the exact fixed quote on the first 15-minute call, and it does not change afterwards.",
        },
        {
          q: "How long does it take to build a restaurant website?",
          a: "A one-page restaurant site can be live 24 to 48 hours after the first call; a full site with several pages and languages takes one to two weeks. You get the price and the delivery date on that 15-minute call, and a live preview link the next day. The date depends on your material: the final menu, the photos and the season's opening hours.",
        },
        {
          q: "What is the best website builder for restaurants, and when is it worth hiring a web designer instead?",
          a: "A builder is fine if you need a page up tonight and will look after it yourself. Either way, check that it loads: the 18 restaurant sites in my August 2026 speed report averaged 17.6 seconds to show their main content on mobile (PageSpeed Insights, Marbella and Málaga; an average pulled up by a few extreme outliers), and the cause across the sample was images and hosting. Hire someone when you want that handled. I build custom-coded on Next.js — not WordPress, not Wix, not a page builder — from €500 for one page. The sites I build score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026, five client sites).",
        },
        {
          q: "What should a restaurant or beach club website include?",
          a: "A restaurant website needs what a guest checks before choosing: the menu as a readable page with prices, allergens, opening hours, the address with a map, a phone number that dials, photos of the food and the room, and a way to ask for a table. A beach club adds its season dates, events and a route for group and private-hire inquiries. All of it has to load quickly on mobile data.",
        },
        {
          q: "Can customers book a table online from the website?",
          a: "Yes. If you already use a reservation service, the site links to it or embeds it, so guests book where your team already manages tables. If you do not, a table request is a short form or a WhatsApp message with date, time and party size that goes straight to your team to confirm. Group and private-hire inquiries take the same route. The multi-step booking wizard on Acme Clinic's site shows the pattern I build.",
        },
        {
          q: "Will the website be in English and Spanish?",
          a: "Yes, if you want both: two real versions, each with its own URLs, titles and descriptions. Language versions are part of the business site from €1,500; for a one-page site, tell me on the call which languages you need and the fixed quote is calculated with them. Dish names stay yours: nobody needs \"salmorejo\" translated, but the line describing it helps.",
        },
        {
          q: "Will my restaurant show up on Google Maps when people search for places to eat in Marbella?",
          a: "Not through the website alone, and nobody can promise a position on Google Maps. Map results come from your Google Business Profile, which is separate from your site. The site contributes its part: the same name, address and hours as the profile, structured data that marks the page as a restaurant, and Search Console connected with a baseline recorded on day one. The rest depends on reviews, a complete profile and time.",
        },
        {
          q: "Is there a monthly fee for hosting and maintenance?",
          a: "That is settled on the first call, so ask it with your menu in hand. A restaurant site changes with the kitchen: a new season's menu, different opening hours, a set lunch that moves every week. I tell you what the site costs to keep online and how changes like those would be handled, and it goes into the written quote before you decide. The build price in that quote is fixed. Nothing sits in an account of mine: the domain, the code and the data are registered to the restaurant. A change after launch is priced the way the build was: we speak for a few minutes and you get a figure and a day.",
        },
      ],
      crossLinksBlurb:
        "If the restaurant sits inside a hotel, or you run another business on the same street, these pages cover those sectors.",
      ogAlt:
        "Restaurant website design in Marbella — a menu that reads on a phone, table requests by form or WhatsApp, from €500",
    },
  },
  es: {
    slug: "restaurantes",
    name: "Restaurantes",
    summary:
      "La web de un restaurante tiene que enseñar la carta, el horario, el mapa y cómo pedir mesa en el móvil, en segundos y en el idioma de quien busca.",
    serviceName: "Diseño web para restaurantes",
    mailSubject: "Web para restaurante",
    waMessage: "Hola Alex — necesito una web para mi restaurante. ¿Cuándo hacemos la llamada de 15 minutos?",
    stats: [
      { value: "6,3M+", label: "Impresiones en Google de webs de clientes, 6 meses" },
      { value: "100/100", label: "SEO en Lighthouse, cinco webs de clientes" },
      { value: "94–100", label: "Rendimiento en Lighthouse, las mismas webs" },
      { value: "25+", label: "Webs entregadas" },
    ],
    statsNote:
      "Impresiones: Google Search Console, webs de clientes, últimos seis meses. Lighthouse: Google PageSpeed Insights, prueba de escritorio, 2 de octubre de 2026, en cinco webs de clientes — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders y Bloom Method.",
    og: {
      kicker: "Diseño web — restaurantes y chiringuitos",
      headline: "La web de tu restaurante, con la carta a un toque.",
    },
    copy: {
      metaTitle: "Diseño web para restaurantes en Marbella y Málaga",
      metaDescription:
        "Diseño web para restaurantes, bares y chiringuitos en Marbella y la Costa del Sol: carta en el móvil y reservas por WhatsApp. Desde 500 €, online en días.",
      hero: {
        label: "Webs para restaurantes y chiringuitos — Marbella y Costa del Sol",
        h1Main: "Diseño web para restaurantes y chiringuitos en Marbella:",
        h1Accent: "la carta, a un toque.",
        sub: "La carta como página que se lee en el móvil, el horario, el mapa y una forma de pedir mesa. Landing desde 500 €, web completa en dos idiomas desde 1.500 €, con presupuesto cerrado en la primera llamada de 15 minutos.",
        ctaLabel: "Cuéntame tu proyecto",
      },
      intro: [
        "El diseño web para restaurantes se decide en la calle: alguien con hambre, un móvil con 4G y tres sitios abiertos en Google Maps. Quiere ver la carta, el horario y cómo reservar. Si tu página tarda, ya está mirando la del local de al lado.",
        "La web de tu restaurante, bar o chiringuito la construyo con código propio sobre Next.js. La carta va como texto y las fotos se ajustan antes de publicarse. Una landing con carta, horario, mapa y solicitud de mesa parte de 500 €; una web con varias páginas e idiomas, de 1.500 €. El presupuesto cerrado te lo doy en la primera llamada de 15 minutos, y al día siguiente tienes una vista previa real en tu móvil.",
        "En agosto de 2026 pasé Google PageSpeed Insights, en perfil móvil, a 211 webs de negocios de Marbella y Málaga. Las 18 de restaurantes tardaron de media 17,6 segundos en mostrar su contenido principal, una cifra que inflan unos pocos casos extremos, y su puntuación media fue de 63 sobre 100. Los 28 chiringuitos, 9,3 segundos. El umbral de Google son 2,5 segundos. La causa en toda la muestra fueron las imágenes y el alojamiento. Las webs que hago sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026, cinco webs de clientes).",
      ],
      features: [
        {
          title: "Carta en el móvil, sin PDF",
          description:
            "La carta va en la web como texto: secciones, platos y precios que se leen con una mano y que Google también lee. Nadie descarga un PDF para hacer zoom en plena calle. Cuéntame en la llamada cada cuánto cambia: una carta de temporada y un menú del día no se montan igual, y el presupuesto se hace para tu caso.",
        },
        {
          title: "Reservas por formulario o WhatsApp",
          description:
            "Mesa en la terraza el sábado o para el menú del día: el cliente la pide con un formulario corto (fecha, hora y comensales) o con un botón de WhatsApp que abre el chat con la solicitud ya escrita. La recibe tu equipo y la confirma, sin plataforma de reservas por medio. Grupos y eventos, igual. Si ya trabajas con un servicio de reservas, la web enlaza con él.",
        },
        {
          title: "Fotos que no frenan la página",
          description:
            "La comida se vende con fotos. En mi informe de velocidad, lo que frenaba a las webs locales eran las imágenes y el alojamiento. Cada foto se ajusta al hueco que ocupa, se sirve en un formato moderno y solo se carga cuando entra en pantalla. Las webs que hago sacan entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026, cinco webs de clientes).",
        },
        {
          title: "Alérgenos junto a cada plato",
          description:
            "Los 14 alérgenos de la UE junto a cada plato, según la lista que me pase tu cocina, para que un cliente celíaco tenga la respuesta antes de sentarse. La idea sale de una herramienta de menús de hotel en la que trabajo, donde los platos llevan los 14 códigos. Los datos son de tu cocina; lo mío es maquetarlos para que se lean de un vistazo.",
        },
        {
          title: "Horario, mapa y llamada con un toque",
          description:
            "La web repite el horario y la dirección de tu ficha de Google en la primera pantalla del móvil, con el mapa y un teléfono que marca al tocarlo. Los datos estructurados le dicen al buscador que esto es un restaurante y cuándo abre. Si abres por temporada, las fechas van claras, para que nadie conduzca hasta un chiringuito que cerró en octubre.",
        },
        {
          title: "Cada idioma con su propia URL",
          description:
            "Quien busca en inglés dónde cenar necesita una página escrita en su idioma. Por eso la web del restaurante lleva una versión en español y otra en inglés, cada una con sus URL, títulos y descripciones. Sin traductor automático encima. He entregado webs de clientes en ocho idiomas, entre ellos alemán, francés, sueco y neerlandés.",
        },
      ],
      localNote:
        "La tarjeta de Hotel Aurora enlaza a una demo pública, con datos inventados, de una herramienta de menús en la que trabajo para un hotel alpino: menús semanales que se planifican e imprimen en alemán, inglés e italiano, platos con los 14 códigos de alérgenos de la UE y el PDF del chef, que la IA convierte en un plan semanal revisable. Acme Clinic aparece por su asistente de reserva por pasos y su WhatsApp en todas las páginas. Trabajo desde Marbella para toda la Costa del Sol, de Estepona a Málaga, así que puedo pasar a ver la terraza y la sala antes de maquetar la galería.",
      processNote:
        "Con un restaurante el ritmo lo marca el material: la carta en texto o PDF, la lista de alérgenos, el horario de temporada y las fotos que tengas. Mándamelo antes de la llamada y la vista previa del día siguiente ya lleva tus platos. Una landing sigue los cuatro pasos de abajo; una web con varios idiomas lleva una o dos semanas.",
      faq: [
        {
          q: "¿Cuánto cuesta una página web para un restaurante?",
          a: "Una web de restaurante cuesta desde 500 € como landing y desde 1.500 € como web de empresa; las plataformas con paneles o IA parten de 3.000 €. Un restaurante con un solo local puede empezar por la landing: carta, horario, mapa, fotos y solicitud de reserva, con textos, SEO básico y analítica incluidos. El presupuesto cerrado te lo doy en la primera llamada de 15 minutos y no cambia después.",
        },
        {
          q: "¿Cuánto se tarda en hacer la web de un restaurante?",
          a: "Depende de cuándo esté la carta. Con la carta definitiva, las fotos y el horario de la temporada en la mano, la landing de un restaurante puede estar online 24–48 horas después de la primera llamada; una web con varias páginas e idiomas lleva una o dos semanas. En esa llamada de 15 minutos sales con precio y fecha, y al día siguiente abres en tu móvil una vista previa con tus platos.",
        },
        {
          q: "¿Puedo crear la página web de mi restaurante gratis?",
          a: "Sí: hay creadores de páginas web gratuitos y para salir del paso sirven. Pero mide el resultado en móvil: PageSpeed Insights es gratis, tarda treinta segundos y es la herramienta de las cifras de velocidad de esta página. Si me mandas la URL, le paso yo el mismo test y te digo el número, sin coste y sin compromiso. Una landing con código propio parte de 500 €.",
        },
        {
          q: "¿Qué debe tener la página web de un restaurante o chiringuito?",
          a: "Una web de restaurante debe tener lo que mira un cliente antes de elegir: la carta como página legible con precios, los alérgenos, el horario, la dirección con mapa, un teléfono que marque al tocarlo, fotos de la comida y del local y una forma de pedir mesa. Un chiringuito añade sus fechas de temporada, los eventos y cómo reservar para grupos y celebraciones. Y todo debe cargar rápido con datos móviles.",
        },
        {
          q: "¿Se pueden recibir reservas online desde la web?",
          a: "Sí. Si ya trabajas con un servicio de reservas, la web enlaza con él o lo incrusta, y el cliente reserva donde tu equipo ya lleva las mesas. Si no, la mesa se pide con un formulario corto o un mensaje de WhatsApp con fecha, hora y comensales, que llega directo a tu equipo para confirmarla. Los grupos y las celebraciones siguen el mismo camino. El asistente de reserva por pasos de Acme Clinic muestra cómo lo planteo.",
        },
        {
          q: "¿La web estará en español e inglés?",
          a: "Sí, en ambos idiomas: dos versiones reales, cada una con sus URL, títulos y descripciones. Las versiones por idioma forman parte de la web de empresa desde 1.500 €; en una landing, dime en la llamada qué idiomas necesitas y el presupuesto cerrado se calcula con ellos. Los nombres de los platos los decides tú: nadie necesita que le traduzcan «espeto», pero la línea que lo explica ayuda.",
        },
        {
          q: "¿Trabajas con WordPress o haces la web a medida?",
          a: "A medida: escribo el código sobre Next.js y no uso WordPress, Wix ni maquetadores visuales. Para un restaurante es una decisión de velocidad: cada foto de la carta sale ajustada a la pantalla y la página no arrastra plugins. Las webs que hago sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026, cinco webs de clientes). Si tu web actual está en WordPress, se conserva el dominio, el contenido pasa a la nueva con redirecciones para no perder lo que ya posiciona, y la antigua sigue online hasta el minuto del cambio.",
        },
        {
          q: "¿Hay cuota mensual de mantenimiento o hosting?",
          a: "La web de un restaurante cambia con la cocina: la carta de temporada, el horario de verano, el menú del día. Por eso conviene preguntarlo en la primera llamada, con la carta delante: te digo cuánto cuesta tener la web en marcha y cómo se harían esos cambios, y las dos cosas van por escrito en el presupuesto antes de que decidas. El precio de la construcción que figura ahí es cerrado. Nada queda en cuentas mías: el dominio, el código y los datos se registran a nombre del restaurante. Un cambio después del lanzamiento se presupuesta como la web: hablamos unos minutos y te doy una cifra y un día.",
        },
      ],
      crossLinksBlurb:
        "Si el restaurante está dentro de un hotel, o llevas otro negocio en la misma calle, estas páginas cubren esos sectores.",
      ogAlt:
        "Diseño web para restaurantes en Marbella — carta en el móvil, reservas por formulario o WhatsApp, desde 500 €",
    },
  },
};
