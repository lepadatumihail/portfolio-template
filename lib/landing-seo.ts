import type { ServiceConfig } from "./landing";

// Figures: Google Search Console across client sites (six months) and Acme Clinic Marbella (1 Jun 2025 – 29 Aug 2026), as published in lib/studies-content-en.ts; Lighthouse scores of five client sites' home pages from Google PageSpeed Insights (desktop test), 2 Oct 2026.
export const seoEnConfig: ServiceConfig = {
  slug: "/seo-marbella",
  lang: "en",
  key: "seo",
  linkLabel: "SEO in Marbella: Google, Maps and ChatGPT",
  siblings: [
    { label: "Web design in Marbella", href: "/web-design-marbella" },
    { label: "AI automation in Marbella", href: "/ai-automation-marbella" },
    { label: "Web design by industry", href: "/web-design" },
  ],
  proofProjects: ["Acme Clinic", "Atlas Graph", "Harbor Homes", "Hillside Living"],
  reviewRail: true,
  highlightTier: 0,
  tierBadge: "start here",
  mailSubject: "SEO in Marbella",
  waMessage: "Hi Alex — I want my business to be easier to find on Google, Google Maps and ChatGPT. When can we do the 15-min call?",
  serviceName: "SEO & AI search visibility",
  og: {
    kicker: "SEO — Marbella & Costa del Sol",
    headline: "Get found on Google and Google Maps. Be readable by ChatGPT.",
  },
  stats: [
    { value: "6.3M+", label: "Google impressions, client sites, 6 months" },
    { value: "5.2×", label: "Acme's impressions a month, Jun 25 → Aug 26" },
    { value: "100/100", label: "Lighthouse SEO score, five client sites" },
    { value: "94–100", label: "Lighthouse performance, same sites" },
  ],
  statsNote:
    "An impression is one appearance of a site in Google's results, as counted by Google Search Console. Client sites together: 6.3M+ in six months. Acme Clinic Marbella's monthly count went from 1,889 in June 2025 to 9,778 in August 2026, which is 5.2 times as many. Lighthouse is Google's own test of a website: these scores are from Google PageSpeed Insights, desktop test, on 2 October 2026, for five client sites — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders and Bloom Method.",
  tiers: [
    {
      name: "SEO setup",
      price: "from €500",
      minPrice: 500,
      tagline: "A one-off job: the basics put right",
      features: [
        "Where you stand today, in numbers",
        "Site fixes: titles, speed if possible",
        "Google Maps listing set up or tidied",
        "Google and Bing accounts in your name",
        "A summary AI assistants can read",
      ],
      cta: "Start with the setup",
    },
    {
      name: "Monthly SEO",
      price: "from €300/month",
      minPrice: 300,
      per: "month",
      tagline: "Optional: watched and improved monthly",
      features: [
        "Automated checks on a schedule",
        "Changes drafted, reviewed by me",
        "Google Maps listing kept current",
        "One plain report a month",
        "Cancel any time",
      ],
      cta: "Ask about monthly",
    },
    {
      name: "New website",
      price: "from €1,500",
      minPrice: 1500,
      tagline: "For when the site itself is the obstacle",
      features: [
        "Multi-page site, custom design",
        "Online booking and enquiry forms",
        "Several languages, ready for Google",
        "Google reviews & visitor statistics",
      ],
      cta: "Talk about a new site",
    },
  ],
  pricingFootnote:
    "Prices are starting points: the exact figure is fixed on the first 15-minute call and does not change afterwards. The monthly service has no minimum term, and the accounts stay in your name whether you stay or leave.",
  process: {
    heading: { title: "From first call to", accent: "a monthly report" },
    steps: [
      {
        day: "Step 1",
        title: "The call",
        description:
          "Fifteen minutes about your business and where customers should find you. I tell you what can and cannot be changed on the kind of website you have, and you get a fixed price on the spot.",
      },
      {
        day: "Step 2",
        title: "The baseline",
        description:
          "I write down where you stand, in plain numbers: which Google searches show you, how you appear on Google Maps, how fast the site loads on a phone, what ChatGPT and other assistants say.",
      },
      {
        day: "Step 3",
        title: "The fixes",
        description:
          "I fix what step 2 found: page titles, speed where your kind of website allows it, your Google Maps listing. I connect Google and Bing accounts under your name and add a summary of your business that AI assistants can read.",
      },
      {
        day: "Every month",
        title: "The monthly report",
        description:
          "If you take the monthly service, automated checks watch the numbers and draft changes. I review every draft and apply what you approve. Then the month's report tells you what was done and which numbers moved.",
      },
    ],
    footnote:
      "No SEO agency, no account managers, no hand-offs: the person on the call is the person who reviews every change and sends you the report.",
  },
  copy: {
    metaTitle: "SEO Marbella — Google, Maps and what ChatGPT says about you",
    metaDescription:
      "SEO in Marbella, plainly: get found on Google and Google Maps, and be easy for ChatGPT to read. Setup from €500, monthly from €300 a month, no lock-in.",
    hero: {
      label: "SEO — Marbella & Costa del Sol",
      h1Main: "SEO in Marbella: get found on Google and Google Maps, and be",
      h1Accent: "readable by ChatGPT.",
      sub: "Customers look for a business like yours in three places: Google, Google Maps and, more and more, ChatGPT. I check what each one shows about you today and fix what is wrong or missing on your website and your Google Maps listing. Setup from €500, optional monthly service from €300 a month, cancel any time.",
      ctaLabel: "Book a 15-min call",
    },
    intro: [
      "SEO stands for search engine optimization. In plain words, it is the work of making your business easy to find on Google for someone looking for what you sell. In Marbella that someone may be on a sunbed asking their phone for a dentist, on Google Maps looking for lunch, or asking ChatGPT.",
      "A tourist asks ChatGPT where to eat tonight. The assistant answers from what it can read online: your website, your Google Maps listing, reviews, and search engines such as Bing. A price list that exists only as an image gives it nothing to quote. I make your business easy to read. Whether the assistant then recommends you is its decision; nobody can guarantee or buy that.",
      "My proof comes from websites I built, where the search work on the site itself was part of the build. Across client sites, Google Search Console, Google's own counting tool, recorded 6.3M+ impressions (the times a site appeared in Google's results) and 209K clicks in six months. The same sites score 100/100 for SEO and 94–100 for performance in Google's Lighthouse test (Google PageSpeed Insights, 2 October 2026, five client sites).",
    ],
    features: [
      {
        title: "Where you stand today, in numbers",
        description:
          "Before I change anything, I write down where you are. Which Google searches show your business, and how far down. How you appear on Google Maps. How long your site takes to load on a phone. What ChatGPT and other assistants say when asked for a business like yours in your town.",
      },
      {
        title: "Google's normal results",
        description:
          "Google's normal results are the list of links under the map. I fix the basics Google reads on each page: titles and descriptions, headings, heavy images, speed where your kind of website allows it, and old links pointed to the right page. Then I connect Google Search Console, the Google tool that shows which searches lead to you, in your own account.",
      },
      {
        title: "Your Google Maps listing",
        description:
          "The map results come mostly from your Google Business Profile (the listing with your hours, photos and reviews), the reviews themselves and how close the searcher is. I set the profile up or tidy it: category, services, hours, photos, description, and the same name, address and phone everywhere. In the monthly service I prepare the review request; you send it. I never write, buy or filter reviews.",
      },
      {
        title: "Readable by ChatGPT and the others",
        description:
          "ChatGPT and other AI assistants can only quote what they can read. I add a summary of your business written for them: who you are, what you offer, prices, how to book. I label your pages so a machine can tell address, hours and services, and write the answers to customers' questions into the pages. This site does it: add \".md\" to this page's web address to see the text an assistant gets on request.",
      },
      {
        title: "Automated checks, a person deciding",
        description:
          "In the monthly service, scheduled checks read your Google Search Console numbers, test your speed on a phone, confirm your pages are still listed in Google, look for broken links and ask AI assistants the same questions a customer would. The automation drafts changes. I read every draft and apply what you have agreed to. Nothing reaches your site unreviewed.",
      },
      {
        title: "One plain report a month",
        description:
          "Once a month you get a report in plain words: what changed, what moved, what is next. The numbers come from Google Search Console. Your Google Maps listing is kept current in the same round: hours, services, photos. You can cancel any time, and the accounts stay in your name.",
      },
    ],
    localNote:
      "Two sites I built can already be read by assistants: Acme Clinic's carries a summary of its services, specialists, both locations, booking link and prices, and Hillside Living's has one too. On the Costa del Sol customers search in several languages. Over the twelve months to 1 September 2026, Google Search Console puts Acme's site among the first three results for \"dentist Marbella\" typed in German, French and Dutch. I am based in Marbella and work with businesses across the Costa del Sol: Estepona, San Pedro, Fuengirola, Mijas, Benalmádena and Málaga.",
    processNote:
      "It starts with one short call. Then I measure where you stand and fix what the measuring shows: that is the setup, one job at one fixed price. The monthly service is optional; add it after the setup, later, or never.",
    faq: [
      {
        q: "What is SEO, in plain words?",
        a: "SEO is the work of making your business easy to find when someone searches for what you sell. The letters stand for search engine optimization. For a local business that means three places: Google's normal results, Google Maps, and the answers of AI assistants such as ChatGPT, Gemini, Perplexity and Copilot. I check what each shows about you and correct what is wrong or missing on your website and your Google Maps listing.",
      },
      {
        q: "How much does SEO cost in Marbella?",
        a: "With me, SEO in Marbella costs from €500 for the one-off setup and from €300 a month for the monthly service. The monthly part is optional, with no lock-in. The exact figure is fixed on the first 15-minute call and does not change afterwards. If the website itself is the obstacle, a new one starts from €1,500, and I say so on that call before quoting anything.",
      },
      {
        q: "How long does SEO take to work?",
        a: "SEO takes months, not days. My clearest example took fifteen months: Acme Clinic Marbella's site went from 1,889 impressions (appearances in Google's results) in June 2025 to 9,778 in August 2026, a partial month, according to Google Search Console. I built that site, and the search work on it was part of the build. It shows the pace and is no forecast for your business. Anyone promising a position by a date is selling something else.",
      },
      {
        q: "How do I show up on Google Maps?",
        a: "You show up on Google Maps mostly through your Google Business Profile, the listing with your hours, photos and reviews. The reviews and how close the searcher is count too, so a website alone will not do it. In the setup I create the profile or tidy yours. In the monthly service I prepare the review request and you send it; I never write, buy or filter reviews.",
      },
      {
        q: "How do I get my business recommended by ChatGPT?",
        a: "Nobody can buy or guarantee a recommendation from ChatGPT, me included. What can be done is to make your business easy for an assistant to read. ChatGPT and the others answer from what they find online: your site, your Google Maps listing, reviews, and search engines such as Bing. So I put your services, prices, hours and location in text, add a summary written for assistants, and connect the site to Bing as well as Google.",
      },
      {
        q: "Can you do SEO on a WordPress or Wix site you did not build?",
        a: "Yes. I work on any site you give me access to: WordPress, Wix, Shopify or a custom build. The limit is the system the site is built on: some do not let anyone change the labels that tell Google and AI assistants your name, hours and prices, or make the site much faster. I say what yours allows on the first call, before the quote. If the site itself is the obstacle, a new website starts from €1,500.",
      },
      {
        q: "What does \"automated SEO\" mean, and who decides?",
        a: "Automated SEO means software watches and drafts, and I decide. The automation reads your Google Search Console numbers and drafts changes, such as a better title for a page stuck on the second page of Google. I read every draft and apply what you agreed to. The marketing of my own product, Northwind CRM, already runs on this pattern: a scheduled program prepares the work and waits for my approval before anything is published.",
      },
      {
        q: "Is there a long contract or a lock-in?",
        a: "No. Monthly SEO with me has no lock-in and no minimum term. The setup is a one-off job at a fixed price. The monthly service is paid by the month, and you can cancel any time. Google Search Console, your Google Maps listing and your visitor statistics sit in your own accounts and stay with you if you stop. If the setup is all you need, you stop there.",
      },
    ],
    crossLinksBlurb:
      "If the website itself needs rebuilding, or you want software to take over repetitive work, these pages cover that. The third lists web design by type of business.",
    ogAlt: "SEO in Marbella — get found on Google and Google Maps, be readable by ChatGPT, by Alex Doe, example.com",
  },
};

// Cifras: Google Search Console sobre webs de clientes (seis meses) y Acme Clinic Marbella (1 jun 2025 – 29 ago 2026), publicadas en lib/studies-content-es.ts; puntuaciones Lighthouse de la portada de cinco webs de clientes, de Google PageSpeed Insights (prueba de escritorio), 2 oct 2026.
export const seoEsConfig: ServiceConfig = {
  slug: "/es/seo-marbella",
  lang: "es",
  key: "seo",
  linkLabel: "SEO en Marbella: Google, Maps y ChatGPT",
  siblings: [
    { label: "Diseño web en Marbella", href: "/es/diseno-web-marbella" },
    { label: "Automatización con IA en Marbella", href: "/es/automatizacion-ia-marbella" },
    { label: "Diseño web por sectores", href: "/es/diseno-web" },
  ],
  proofProjects: ["Acme Clinic", "Atlas Graph", "Harbor Homes", "Hillside Living"],
  reviewRail: true,
  highlightTier: 0,
  tierBadge: "empieza aquí",
  mailSubject: "SEO en Marbella",
  waMessage: "Hola Alex — quiero que mi negocio sea más fácil de encontrar en Google, en Google Maps y en ChatGPT. ¿Cuándo hacemos la llamada de 15 minutos?",
  serviceName: "SEO y visibilidad en buscadores con IA",
  og: {
    kicker: "SEO — Marbella y Costa del Sol",
    headline: "Aparece en Google y en Maps. Que ChatGPT pueda leerte.",
  },
  stats: [
    { value: "6,3M+", label: "Apariciones en Google, webs de clientes, 6 meses" },
    { value: "5,2×", label: "Apariciones al mes de Acme, jun. 25 → ago. 26" },
    { value: "100/100", label: "SEO en Lighthouse, cinco webs de clientes" },
    { value: "94–100", label: "Rendimiento en Lighthouse, las mismas webs" },
  ],
  statsNote:
    "Una aparición (Google la llama «impresión») es cada vez que una web sale en los resultados de Google; las cuenta Google Search Console. Sumando webs de clientes son más de 6,3 millones en seis meses. El dato mensual de Acme Clinic Marbella pasó de 1.889 en junio de 2025 a 9.778 en agosto de 2026: se multiplicó por 5,2. Lighthouse es la prueba con la que Google examina una web: estas puntuaciones son de Google PageSpeed Insights, prueba de escritorio, 2 de octubre de 2026, en cinco webs de clientes — Acme Clinic, Harbor Homes, Hillside Living, Summit Builders y Bloom Method.",
  tiers: [
    {
      name: "Puesta a punto SEO",
      price: "desde 500 €",
      minPrice: 500,
      tagline: "Se hace una vez: lo básico, en orden",
      features: [
        "Dónde estás hoy, en números",
        "Títulos y, si se puede, velocidad",
        "Tu ficha de Google Maps, en orden",
        "Cuentas de Google y Bing a tu nombre",
        "Un resumen que la IA pueda leer",
      ],
      cta: "Empieza por la puesta a punto",
    },
    {
      name: "SEO mensual",
      price: "desde 300 €/mes",
      minPrice: 300,
      per: "month",
      tagline: "Opcional: seguimiento y mejoras cada mes",
      features: [
        "Comprobaciones automáticas",
        "Cambios propuestos, revisados por mí",
        "Ficha de Google Maps al día",
        "Un informe claro al mes",
        "Sin permanencia",
      ],
      cta: "Pregúntame por el mensual",
    },
    {
      name: "Web nueva",
      price: "desde 1.500 €",
      minPrice: 1500,
      tagline: "Para cuando el problema es la propia web",
      features: [
        "Web multipágina a medida",
        "Reservas y formularios de contacto",
        "Varios idiomas, lista para Google",
        "Reseñas de Google y estadísticas",
      ],
      cta: "Quiero una web nueva",
    },
  ],
  pricingFootnote:
    "Los precios son puntos de partida: la cifra exacta se cierra en la primera llamada de 15 minutos y no cambia después. El servicio mensual no tiene permanencia ni plazo mínimo, y las cuentas quedan a tu nombre sigas o no.",
  process: {
    heading: { title: "De la primera llamada al", accent: "informe de cada mes" },
    steps: [
      {
        day: "Paso 1",
        title: "La llamada",
        description:
          "Quince minutos sobre tu negocio y sobre dónde quieres que te encuentren. Te digo qué se puede cambiar y qué no en el tipo de web que tienes (WordPress, Wix u otro), y sales con un precio cerrado en el momento.",
      },
      {
        day: "Paso 2",
        title: "El punto de partida",
        description:
          "Apunto dónde estás hoy, con números: en qué búsquedas de Google apareces, cómo sales en Google Maps, cuánto tarda la web en cargar en un móvil y qué dicen de ti ChatGPT y otros asistentes.",
      },
      {
        day: "Paso 3",
        title: "Los arreglos",
        description:
          "Arreglo lo que haya salido mal en el paso 2: títulos, velocidad donde tu tipo de web lo permita y la ficha de Google. Dejo a tu nombre las cuentas de Google y Bing y añado un resumen del negocio que la IA pueda leer.",
      },
      {
        day: "Cada mes",
        title: "El informe",
        description:
          "Si contratas el servicio mensual, unas comprobaciones automáticas siguen los datos y proponen cambios. Yo reviso cada propuesta y aplico lo que apruebes. Y cada mes, el informe: qué se ha hecho y qué cifras han subido o bajado.",
      },
    ],
    footnote:
      "Sin agencia SEO, sin comerciales, sin intermediarios: quien te atiende en la llamada es quien revisa cada cambio y te envía el informe.",
  },
  copy: {
    metaTitle: "Consultor SEO en Marbella — Google, Maps y ChatGPT",
    metaDescription:
      "Posicionamiento SEO en Marbella: salir en Google y Maps, y que ChatGPT pueda leerte. Puesta a punto desde 500 €, mensual desde 300 €/mes, sin permanencia.",
    hero: {
      label: "SEO — Marbella y Costa del Sol",
      h1Main: "SEO en Marbella, dicho claro: aparecer en Google y en Maps y que",
      h1Accent: "ChatGPT pueda leerte",
      sub: "Quien busca un negocio como el tuyo mira en tres sitios: Google, Google Maps y, cada vez más, ChatGPT. Compruebo qué enseña hoy cada uno sobre ti, arreglo lo que está mal y añado lo que falta en tu web y en tu ficha de Google. Puesta a punto desde 500 €; servicio mensual opcional desde 300 €/mes, sin permanencia.",
      ctaLabel: "Cuéntame tu caso",
    },
    intro: [
      "El SEO, o posicionamiento web, es todo lo que se hace para que tu negocio aparezca en Google cuando alguien busca lo que vendes. En Marbella ese alguien puede estar en una hamaca pidiéndole un dentista al móvil, mirando en Google Maps dónde comer o preguntándoselo a ChatGPT.",
      "Un turista le pregunta a ChatGPT dónde cenar esta noche y el asistente contesta con lo que puede leer en internet: tu web, tu ficha de Google, las reseñas y buscadores como Bing. Una lista de precios que solo existe en una foto no le da nada que citar. Yo hago que a un asistente le resulte fácil leer tu negocio. Que luego te recomiende lo decide él: eso nadie lo puede garantizar ni comprar.",
      "Mis datos vienen de webs que he construido yo, donde el SEO de la propia web iba dentro del proyecto. Sumando webs de clientes son más de 6,3 millones de impresiones (las veces que una web sale en los resultados de Google) y 209.000 clics en seis meses, según Google Search Console, la herramienta donde Google lo cuenta. Esas mismas webs sacan 100/100 en SEO y entre 94 y 100 en rendimiento en la prueba Lighthouse de Google (Google PageSpeed Insights, 2 de octubre de 2026, cinco webs de clientes).",
    ],
    features: [
      {
        title: "Un punto de partida con números",
        description:
          "Antes de tocar nada apunto dónde estás. En qué búsquedas de Google sale tu negocio y en qué puesto. Cómo apareces en Google Maps. Cuánto tarda tu web en cargar en un móvil. Qué contestan ChatGPT y otros asistentes cuando alguien pide un negocio como el tuyo en tu zona.",
      },
      {
        title: "Tu ficha de Google Maps",
        description:
          "En el mapa mandan sobre todo tu ficha de Google (Perfil de Empresa, o Google Business Profile), las reseñas y lo cerca que esté quien busca. Creo la ficha o pongo en orden la que tienes: categoría, servicios, horario, fotos, descripción y el mismo nombre, dirección y teléfono en todas partes. En el servicio mensual preparo el mensaje para pedir reseñas y lo envías tú. Nunca escribo, compro ni filtro reseñas.",
      },
      {
        title: "Los resultados normales de Google",
        description:
          "Los resultados normales de Google son la lista de enlaces que sale debajo del mapa. Arreglo lo básico que Google lee en cada página: títulos y descripciones, imágenes que pesan demasiado, velocidad donde tu tipo de web lo permita y enlaces antiguos, para que lleven a la página buena. Además pongo en marcha, en una cuenta a tu nombre, Google Search Console: la herramienta de Google que enseña con qué búsquedas llegan a ti.",
      },
      {
        title: "Que ChatGPT pueda leerte",
        description:
          "ChatGPT y los demás asistentes solo pueden citar lo que pueden leer. Añado un resumen de tu negocio escrito para ellos: quién eres, qué ofreces, precios, cómo reservar. Etiqueto las páginas para que una máquina distinga dirección, horario y servicios, y dejo contestadas en texto las preguntas de tus clientes. Esta web lo hace: añade «.md» a la dirección web de esta página y verás el texto que recibe un asistente si lo pide.",
      },
      {
        title: "Automático, con una persona al mando",
        description:
          "En el servicio mensual, unas comprobaciones programadas leen tus datos de Google Search Console, miden la velocidad en móvil, miran que tus páginas sigan en Google, buscan enlaces rotos y vuelven a hacer a los asistentes de IA las mismas preguntas que haría un cliente. La automatización propone cambios. Leo cada propuesta y aplico lo que hayas aprobado. Nada llega a tu web sin revisar.",
      },
      {
        title: "Un informe claro al mes",
        description:
          "Una vez al mes recibes un informe claro: qué ha cambiado, qué ha subido o bajado y qué toca ahora. Las cifras salen de Google Search Console. De paso, pongo al día tu ficha de Google: horario, servicios, fotos. Puedes dejarlo cuando quieras y las cuentas siguen a tu nombre.",
      },
    ],
    localNote:
      "Dos webs que he construido yo ya se dejan leer por un asistente: la de Acme Clinic lleva un resumen con sus servicios, especialistas, dos sedes, enlace para pedir cita y precios, y la de Hillside Living, otro. En la Costa del Sol se busca en varios idiomas. Según Google Search Console, en los doce meses hasta el 1 de septiembre de 2026 la web de Acme sale entre los tres primeros resultados cuando alguien busca «dentista Marbella» en alemán, francés y holandés. Trabajo desde Marbella con negocios de toda la Costa del Sol: Estepona, San Pedro, Fuengirola, Mijas, Benalmádena y Málaga.",
    processNote:
      "Todo empieza con una llamada corta. Después mido dónde estás y arreglo lo que esa medición saque a la luz: eso es la puesta a punto, que se hace una vez y tiene precio cerrado. El servicio mensual es opcional; puedes añadirlo al terminar, más adelante o nunca.",
    faq: [
      {
        q: "¿Qué es el SEO o posicionamiento web?",
        a: "El SEO es todo lo que se hace para que tu negocio aparezca cuando alguien busca lo que vendes. Son las siglas en inglés de «optimización para buscadores»; en español, posicionamiento web. Para un negocio local son tres sitios: los resultados normales de Google, Google Maps y las respuestas de asistentes de IA como ChatGPT, Gemini, Perplexity o Copilot. Miro qué enseña cada uno sobre ti, corrijo lo que está mal y añado lo que falta en tu web y en tu ficha de Google.",
      },
      {
        q: "¿Cuánto cobra un SEO al mes en Marbella?",
        a: "Conmigo, el SEO mensual cuesta desde 300 €/mes; es opcional y no tiene permanencia. Antes va la puesta a punto, un pago único desde 500 €. La cifra exacta te la doy cerrada en la primera llamada de 15 minutos y no cambia después. Si el problema es la propia web, una nueva cuesta desde 1.500 €, y te lo digo en esa llamada antes de darte ningún precio.",
      },
      {
        q: "¿Cómo aparecer en Google Maps con mi negocio?",
        a: "En Google Maps se aparece, sobre todo, con la ficha de Google de tu negocio. En el mapa cuentan esa ficha, las reseñas y lo cerca que esté quien busca; la web sola no basta. En la puesta a punto creo la ficha o pongo en orden la que tienes. En el servicio mensual preparo además el mensaje para pedir reseñas y lo envías tú; nunca escribo, compro ni filtro reseñas.",
      },
      {
        q: "¿Cómo hacer para aparecer en ChatGPT?",
        a: "Aparecer en ChatGPT no se compra ni se garantiza: no puedo yo ni puede nadie. Lo que sí se puede hacer es ponérselo fácil al asistente para que lea tu negocio. ChatGPT y los demás contestan con lo que encuentran en internet: tu web, tu ficha de Google, las reseñas y buscadores como Bing. Por eso pongo en texto tus servicios, precios, horario y dirección, añado un resumen escrito para asistentes y conecto la web también con Bing.",
      },
      {
        q: "¿Cuánto tarda el SEO en notarse?",
        a: "El SEO tarda meses, no días. El ejemplo más claro que tengo llevó quince meses: la web de Acme Clinic Marbella pasó de salir 1.889 veces en los resultados de Google en junio de 2025 a 9.778 en agosto de 2026, mes incompleto, según Google Search Console. Esa web la construí yo y el SEO de la web iba dentro del proyecto. Enseña el ritmo; no sirve de pronóstico para tu negocio. Quien te promete un puesto para una fecha te está vendiendo otra cosa.",
      },
      {
        q: "¿El SEO mensual tiene permanencia?",
        a: "No. El SEO mensual no tiene permanencia ni plazo mínimo. La puesta a punto se hace una vez y tiene precio cerrado. El servicio mensual se paga mes a mes y lo dejas cuando quieras. Google Search Console, la ficha de Google y las estadísticas de visitas de tu web están en cuentas a tu nombre y se quedan contigo si lo dejas. Si con la puesta a punto te basta, te quedas ahí.",
      },
      {
        q: "¿Puedes hacer SEO en mi web si está hecha con WordPress o Wix y no la has hecho tú?",
        a: "Sí. Trabajo sobre cualquier web a la que me des acceso: WordPress, Wix, Shopify o una hecha a medida. El límite lo pone el sistema con el que está hecha: algunos no dejan cambiar las etiquetas que le dicen a Google y a los asistentes tu nombre, tu horario y tus precios, ni mejorar mucho la velocidad. Lo que permite la tuya te lo digo en la primera llamada, antes del presupuesto. Si el problema es la propia web, ahí entra la web nueva, desde 1.500 €.",
      },
      {
        q: "¿Qué significa que el SEO sea automático?",
        a: "Significa que un programa vigila y propone, y yo decido. La automatización lee tus datos de Google Search Console y propone cambios, como un título mejor para una página de tu web que no pasa de la segunda página de Google. Leo cada propuesta y aplico lo que hayas aprobado. El marketing de mi propio producto, Northwind CRM, ya funciona con este patrón: una tarea programada prepara el trabajo y espera mi aprobación antes de publicar nada.",
      },
    ],
    crossLinksBlurb:
      "Si lo que falla es la web en sí, o quieres que un programa haga el trabajo repetitivo, estas páginas lo explican. La tercera reúne el diseño web por tipo de negocio.",
    ogAlt: "SEO en Marbella — aparecer en Google y en Google Maps y que ChatGPT pueda leerte, por Alex Doe, example.com",
  },
};
