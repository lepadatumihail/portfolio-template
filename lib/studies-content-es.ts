import type { Study } from "./studies";
import { speedReportDataset } from "./studies-content-en";

/**
 * Spanish case studies — the same data as lib/studies-content-en.ts, written
 * for a Spanish reader rather than translated string by string. Figures are
 * formatted with Spanish separators (101.872, 7,5 s, 2,92 %); the underlying
 * numbers, windows and sources are identical to the English versions, and
 * both must be updated together.
 */

export const acmeClinicEs: Study = {
  slug: "/es/casos/seo-clinica-acme-marbella",
  lang: "es",
  key: "acme-clinic",
  published: "2026-09-01",
  readingMinutes: 7,

  metaTitle: "SEO de una clínica dental en Marbella: 101.872 impresiones",
  metaDescription:
    "Acme Clinic Marbella en Google durante 15 meses: 101.872 impresiones, 1.894 clics y los tres idiomas que importaron. Datos reales de Search Console.",

  hero: {
    kicker: "Caso real · Salud · Marbella",
    h1Main: "Los primeros 15 meses de una clínica de Marbella en",
    h1Accent: "buscadores",
    dek: "Acme Clinic salió online con un asistente de reservas, captación por WhatsApp y tres idiomas. Estos son todos los números que registró Google después — incluidas las búsquedas que todavía no ha ganado.",
  },

  facts: [
    { label: "Cliente", value: "Acme Clinic, Marbella" },
    { label: "Sector", value: "Clínica dental y estética, 24 h" },
    { label: "Idiomas", value: "Español, inglés, sueco" },
    { label: "Periodo", value: "1 jun 2025 – 29 ago 2026" },
    { label: "Fuente", value: "Google Search Console" },
  ],

  summary: [
    "En 15 meses la web ha conseguido 101.872 impresiones y 1.894 clics desde Google, con una posición media de 11,8.",
    "Las impresiones mensuales pasaron de 1.889 el primer mes a 9.778 en agosto de 2026 — se multiplicaron por 5,2. El mejor mes fue julio de 2026, con 10.268 impresiones y 267 clics.",
    "El 27 % de los clics vienen de fuera de España, y la web está entre los tres primeros resultados para búsquedas de dentista en Marbella en alemán, francés y neerlandés — idiomas a los que la web nunca se tradujo.",
    "El móvil convierte 3,6 veces mejor que el escritorio: 2,92 % de CTR frente a 0,81 %, aunque el escritorio genera algo más de impresiones.",
    "La búsqueda más grande de la categoría, «clínica dental Marbella», sigue sin ganarse: 3.410 impresiones en posición media 31,7.",
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Acme Clinic es una clínica dental y estética de Marbella que coge el teléfono a las tres de la mañana. Esa es toda la propuesta, y es la razón de que la web se construyera así: un asistente de reserva por pasos en lugar de un formulario de contacto, captación por WhatsApp en todas las páginas, y versiones separadas en español, inglés y sueco en vez de un selector de idioma encima de un único juego de páginas.",
        "La web de una clínica es un buen caso de estudio porque la demanda de búsqueda es real, local y medible. Nadie busca un dentista de urgencias por curiosidad. Cada impresión de las que siguen es alguien en Marbella o cerca con un problema concreto, y cada clic es esa persona eligiendo esta clínica en vez de la que aparecía justo encima.",
      ],
    },

    {
      kind: "stats",
      heading: "La foto de 15 meses",
      note: "Google Search Console, propiedad sc-domain:acme-clinic.example, del 1 de junio de 2025 al 29 de agosto de 2026. Las impresiones cuentan cada vez que una página apareció en resultados; los clics son las visitas que llegaron después.",
      items: [
        { value: "101.872", label: "Impresiones", note: "15 meses" },
        { value: "1.894", label: "Clics desde buscadores", note: "15 meses" },
        { value: "11,8", label: "Posición media", note: "todas las búsquedas" },
        { value: "5,2×", label: "Crecimiento mensual", note: "jun 2025 → ago 2026" },
      ],
    },

    {
      kind: "chart",
      heading: "Impresiones por mes",
      intro:
        "La forma importa más que cualquier mes suelto. Aquí no hay pico de lanzamiento: el crecimiento en buscadores de un negocio local es una pendiente, y la pendiente solo se ve a un año vista.",
      max: 11000,
      columns: ["Mes", "Impresiones"],
      caption:
        "Impresiones mensuales, junio 2025 – agosto 2026. Junio de 2025 es el primer mes con datos registrados; agosto de 2026 está incompleto, hasta el día 29.",
      bars: [
        { label: "jun 25", value: 1889, display: "1.889" },
        { label: "jul 25", value: 4561, display: "4.561" },
        { label: "ago 25", value: 5079, display: "5.079" },
        { label: "sep 25", value: 5985, display: "5.985" },
        { label: "oct 25", value: 6111, display: "6.111" },
        { label: "nov 25", value: 4874, display: "4.874" },
        { label: "dic 25", value: 5636, display: "5.636" },
        { label: "ene 26", value: 6812, display: "6.812" },
        { label: "feb 26", value: 7342, display: "7.342" },
        { label: "mar 26", value: 9518, display: "9.518" },
        { label: "abr 26", value: 7522, display: "7.522" },
        { label: "may 26", value: 7152, display: "7.152" },
        { label: "jun 26", value: 9345, display: "9.345" },
        { label: "jul 26", value: 10268, display: "10.268", highlight: true },
        { label: "ago 26", value: 9778, display: "9.778" },
      ],
    },

    {
      kind: "prose",
      heading: "Los idiomas que nadie trabajó",
      body: [
        "La web está en español, inglés y sueco. El sueco está ahí porque Marbella tiene una comunidad escandinava grande, y se ha ganado el sitio: Suecia aportó 95 clics con una posición media de 6,7 en los últimos doce meses, en un mercado que la mayoría de clínicas locales ignora por completo.",
        "Lo interesante es lo que no estaba planeado. La web también aparece entre los tres primeros resultados en alemán, francés y neerlandés — «zahnarzt marbella» en posición 2,6, «dentiste marbella» en 2,3, «tandarts marbella» en 2,9 — sin una sola página en ninguno de esos idiomas. Son personas que buscan un dentista de Marbella desde su país, la competencia por esa forma exacta de escribirlo es escasa, y una página rápida y bien estructurada en un idioma vecino basta para coger la posición.",
        "La lección no es «no hace falta traducir». Es que en un mercado construido sobre residentes extranjeros, la demanda que no está en español es mayor y está menos disputada que la que sí lo está, y la mayoría de competidores locales ni la está mirando.",
      ],
    },

    {
      kind: "table",
      heading: "Dónde posiciona la web",
      intro:
        "Principales búsquedas por clics, últimos doce meses. Las búsquedas de marca están incluidas y señaladas: separarlas es la única forma honesta de leer una tabla así.",
      columns: ["Búsqueda", "Impresiones", "Clics", "Posición media"],
      numericFrom: 1,
      caption: "Google Search Console, del 1 de septiembre de 2025 al 1 de septiembre de 2026.",
      rows: [
        ["acme clinic marbella (marca)", "1.664", "410", "1,2"],
        ["dentista marbella", "3.753", "35", "10,7"],
        ["emergency dentist marbella", "1.829", "22", "4,1"],
        ["clinica dental marbella", "3.410", "9", "31,7"],
        ["dentist near me", "1.881", "9", "8,4"],
        ["dentista urgencias marbella", "898", "8", "8,2"],
        ["zahnarzt marbella (alemán)", "166", "8", "2,6"],
        ["dentiste marbella (francés)", "384", "7", "2,3"],
        ["tandarts marbella (neerlandés)", "75", "4", "2,9"],
        ["dentista 24 horas cerca de mi", "58", "3", "1,7"],
      ],
    },

    {
      kind: "prose",
      heading: "La decisión se toma en el móvil",
      body: [
        "El escritorio generó algo más de impresiones que el móvil en los últimos doce meses — 48.011 frente a 41.727 — y apenas un tercio de los clics. El CTR en móvil fue del 2,92 %; en escritorio, del 0,81 %.",
        "Esa diferencia es el argumento para construir la web de una clínica pensando primero en el móvil y poner el botón de WhatsApp al alcance del pulgar en cualquier pantalla. Quien busca «dentista urgencias marbella» desde el móvil a las 23:40 no está comparando presupuestos. La impresión en escritorio es investigación; la impresión en móvil es una cita.",
      ],
    },

    {
      kind: "stats",
      heading: "Móvil frente a escritorio",
      note: "Últimos doce meses. La tablet aportó otros 35 clics sobre 605 impresiones.",
      items: [
        { value: "2,92 %", label: "CTR en móvil", note: "1.220 clics / 41.727 impresiones" },
        { value: "0,81 %", label: "CTR en escritorio", note: "388 clics / 48.011 impresiones" },
        { value: "3,6×", label: "Ventaja del móvil", note: "proporción de clics" },
        { value: "27 %", label: "Clics de fuera de España", note: "441 de 1.643" },
      ],
    },

    {
      kind: "prose",
      heading: "Lo que todavía no se ha ganado",
      body: [
        "«Clínica dental Marbella» es la búsqueda más grande de la categoría y la web está en posición media 31,7 — tercera página, 3.410 impresiones, nueve clics. Visible para Google e invisible para los pacientes. «Dentista Marbella» está en 10,7, justo en el borde de la primera página, donde una sola posición vale más que las diez de debajo juntas.",
        "Las dos son alcanzables y ninguna está conseguida. Para llegar hace falta lo que una web sola no puede hacer: un flujo constante de reseñas en Google, una ficha de empresa completa y páginas que respondan a la pregunta concreta que hay detrás de cada búsqueda en vez de describir la clínica en general. Ese trabajo está en marcha, y la próxima actualización de esta página dirá si movió algo.",
      ],
    },

    {
      kind: "callout",
      body: "Un caso de estudio que solo enumera victorias es un folleto. Las búsquedas no ganadas de arriba son la parte honesta — y también la razón por la que valdrá la pena releer esta página dentro de seis meses.",
    },
  ],

  takeaways: [
    "El crecimiento en búsqueda local es una pendiente, no un pico. Quince meses después esta web sigue subiendo; quien prometa resultados en la segunda semana está vendiendo otra cosa.",
    "En un mercado de residentes extranjeros, las búsquedas que no están en español salen más baratas de ganar que las que sí — a veces sin una página traducida siquiera.",
    "El CTR en móvil fue 3,6 veces el de escritorio. Construye para el teléfono y pon la acción de reserva donde ya está el pulgar.",
    "Publica también las búsquedas que no has ganado. Es la única forma de que quien te lee pueda fiarse del resto de los números.",
  ],

  method: [
    "Todas las cifras de búsqueda proceden de Google Search Console para la propiedad de dominio sc-domain:acme-clinic.example, extraídas por la Search Analytics API el 1 de septiembre de 2026. Los periodos están indicados junto a cada número: los totales cubren del 1 de junio de 2025 al 29 de agosto de 2026, y los desgloses por búsqueda, país y dispositivo cubren los doce meses hasta el 1 de septiembre de 2026.",
    "Junio de 2025 es el primer mes con datos de búsqueda registrados para esta propiedad, y agosto de 2026 está incompleto: en el momento de escribir esto los datos llegaban hasta el 29 de agosto.",
    "Las impresiones y los clics miden comportamiento de búsqueda, no facturación. Esta página no afirma nada sobre reservas, pacientes ni ingresos, porque esos datos son de la clínica y no son algo que un desarrollador pueda verificar. Se muestra la parte que sí se puede comprobar.",
    "Google Search Console informa de un subconjunto muestreado de búsquedas y oculta las de muy poco volumen, así que las filas por búsqueda no suman los totales de la propiedad.",
  ],

  cta: {
    heading: "¿Quieres esto medido en tu negocio?",
    body: "Todas las webs que hago salen con Search Console conectado y una referencia registrada desde el primer día, para que doce meses después haya algo real que mirar. Quince minutos por teléfono bastan para saber si la demanda de búsqueda de tu sector merece la pena.",
    label: "Escríbeme por WhatsApp",
    waMessage:
      "Hola Alex — he leído el caso de Acme Clinic. Quiero hablar de posicionamiento para mi negocio. ¿Cuándo podemos hacer la llamada de 15 minutos?",
  },

  ogHeadline: "15 meses de datos de búsqueda de una clínica de Marbella",
  ogKicker: "Caso real · 101.872 impresiones",
  image: "/work/acme-clinic-old.jpg",
  imageAlt: "La web de Acme Clinic Marbella",
  clientUrl: "https://example.com/acme-clinic",
  clientLabel: "acme-clinic.example",
};

export const harborHomesEs: Study = {
  slug: "/es/casos/harbor-homes-seo-multiidioma",
  lang: "es",
  key: "harbor-homes",
  published: "2026-09-01",
  readingMinutes: 6,

  metaTitle: "SEO multiidioma en Marbella: 4 idiomas, 4 mercados",
  metaDescription:
    "Harbor Homes salió en inglés, sueco, neerlandés y alemán. Nueve meses de datos de Search Console: el sueco posiciona el doble de bien que el inglés.",

  hero: {
    kicker: "Caso real · Inmobiliario · Costa del Sol",
    h1Main: "Cuatro idiomas, cuatro mercados de",
    h1Accent: "búsqueda",
    dek: "Harbor Homes salió online en inglés, sueco, neerlandés y alemán. Nueve meses de datos de Google enseñan cuál de esas cuatro apuestas dio resultado primero — y no fue la evidente.",
  },

  facts: [
    { label: "Cliente", value: "Harbor Homes" },
    { label: "Sector", value: "Portal inmobiliario, Costa del Sol" },
    { label: "Idiomas", value: "Inglés (por defecto), sueco, neerlandés, alemán" },
    { label: "Periodo", value: "26 nov 2025 – 29 ago 2026" },
    { label: "Fuente", value: "Google Search Console" },
  ],

  summary: [
    "Nueve meses después del lanzamiento la web acumula 22.417 impresiones y 116 clics, con una posición media de 33,9 — una web joven en una de las categorías más disputadas de España.",
    "Las impresiones mensuales pasaron de 6 el primer mes a un máximo de 4.511 en mayo de 2026.",
    "Las páginas en sueco posicionan mucho mejor que las inglesas: posición media 19,3 en Suecia frente a 44,2 en Reino Unido y 40,0 en España.",
    "Una sola página en sueco — el mapa de zonas de Marbella — consiguió 2.314 impresiones en posición 10,9, mejor colocada que cualquier página del lado inglés.",
    "Las guías de zona en neerlandés están indexadas y posicionan para búsquedas de cola larga por las que no compite ninguna página en inglés.",
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Harbor Homes es un portal inmobiliario para la Costa del Sol: propiedades filtrables, guías de zona, alquiler de larga y corta temporada y un embudo de valoración. Está en cuatro idiomas — inglés por defecto, más sueco, neerlandés y alemán — con hreflang recíproco real entre ellos, no un widget de traducción en el navegador.",
        "Esa decisión se suele discutir en abstracto. Nueve meses de datos permiten discutirla con números.",
      ],
    },

    {
      kind: "stats",
      heading: "Nueve meses después",
      note: "Google Search Console, propiedad sc-domain:harbor-homes.example, del 26 de noviembre de 2025 al 29 de agosto de 2026. Son cifras de una web joven y se presentan como tales.",
      items: [
        { value: "22.417", label: "Impresiones", note: "desde el lanzamiento" },
        { value: "116", label: "Clics desde buscadores", note: "desde el lanzamiento" },
        { value: "33,9", label: "Posición media", note: "todas las búsquedas" },
        { value: "4 idiomas", label: "Indexados y posicionando", note: "EN · SV · NL · DE" },
      ],
    },

    {
      kind: "chart",
      heading: "Impresiones por mes",
      intro:
        "Los tres primeros meses son casi nada. Es lo normal, y es la parte que casi nunca se le enseña al cliente: un dominio nuevo en una categoría competida se pasa el primer trimestre siendo rastreado, no posicionado.",
      max: 5000,
      columns: ["Mes", "Impresiones"],
      caption:
        "Impresiones mensuales, noviembre 2025 – agosto 2026. Noviembre cuenta desde el día 26; agosto está incompleto, hasta el día 29.",
      bars: [
        { label: "nov 25", value: 6, display: "6" },
        { label: "dic 25", value: 18, display: "18" },
        { label: "ene 26", value: 69, display: "69" },
        { label: "feb 26", value: 82, display: "82" },
        { label: "mar 26", value: 1347, display: "1.347" },
        { label: "abr 26", value: 4469, display: "4.469" },
        { label: "may 26", value: 4511, display: "4.511", highlight: true },
        { label: "jun 26", value: 4438, display: "4.438" },
        { label: "jul 26", value: 4365, display: "4.365" },
        { label: "ago 26", value: 3112, display: "3.112" },
      ],
    },

    {
      kind: "prose",
      heading: "Gana primero el idioma menos disputado",
      body: [
        "La vivienda en Marbella en inglés es una de las páginas de resultados más duras de España. La dominan portales con diez años de enlaces y presupuestos de contenido de seis cifras, y los números lo enseñan tal cual: posición media 44,2 en Reino Unido y 40,0 en España. Cuarta y quinta página. Impresiones reales, casi ningún clic.",
        "El sueco es otro mercado con el mismo inventario. Posición media 19,3 — más o menos el doble de bien colocado, con una fracción de la competencia. La página que mejor funciona de toda la web es /sv/marbella-map, la versión sueca del mapa de zonas: 2.314 impresiones en posición 10,9, con búsquedas como «marbella karta» o «karta marbella området».",
        "El neerlandés se comporta igual a menor escala. Las guías de zona en neerlandés posicionan para búsquedas de cola larga sobre urbanizaciones cerradas y guías de compra por barrios — formas de buscar que no tienen equivalente en inglés compitiendo por ellas, porque ningún competidor anglófono se ha molestado.",
      ],
    },

    {
      kind: "table",
      heading: "Rendimiento por mercado",
      intro: "La misma web, las mismas propiedades, cuatro niveles de dificultad muy distintos.",
      columns: ["Mercado", "Impresiones", "Clics", "Posición media"],
      numericFrom: 1,
      caption:
        "Google Search Console, del 1 de septiembre de 2025 al 1 de septiembre de 2026. Principales mercados por clics.",
      rows: [
        ["España", "5.823", "40", "40,0"],
        ["Reino Unido", "5.089", "16", "44,2"],
        ["Suecia", "3.399", "14", "19,3"],
        ["Alemania", "633", "11", "20,6"],
        ["Países Bajos", "636", "7", "21,4"],
        ["Estados Unidos", "3.693", "4", "34,3"],
      ],
    },

    {
      kind: "points",
      heading: "Lo que cuesta de verdad una web en cuatro idiomas",
      intro:
        "No es cuatro veces el trabajo de una web en un idioma, y tampoco sale gratis. Lo que es, exactamente:",
      items: [
        {
          title: "Un código, cuatro árboles de URL",
          body: "Cada ruta existe bajo /sv, /nl y /de además del inglés por defecto, con etiquetas hreflang recíprocas y un x-default compartido. Nada de widget de traducción: un widget le enseña una sola página a Google, así que tres de tus cuatro mercados no llegan a indexarse.",
        },
        {
          title: "Contenido traducido, no interfaz traducida",
          body: "Los botones y las etiquetas son la mitad fácil. La mitad que posiciona son las guías de zona, las páginas de barrio y las guías de compra — ahí viven las búsquedas de cola larga, y es la parte que hay que escribir de verdad en cada idioma.",
        },
        {
          title: "Paciencia por cuatro",
          body: "Cada árbol de idioma se descubre y se indexa a su propio ritmo. Aquí las páginas en sueco empezaron a recibir impresiones antes que las inglesas, y eso no se puede planificar: solo se puede dejar construido para que ocurra.",
        },
        {
          title: "Un motivo para cada idioma",
          body: "El sueco, el neerlandés y el alemán están en esta web porque el mercado inmobiliario de la Costa del Sol se sostiene sobre compradores de exactamente esos países. Un idioma sin compradores detrás es cuatro veces el mantenimiento a cambio de nada.",
        },
      ],
    },

    {
      kind: "prose",
      heading: "Dónde está esta web en realidad",
      body: [
        "116 clics en nueve meses todavía no es un caso de éxito, y decir lo contrario sería deshonesto. Lo que sí muestran los datos es una web completamente indexada en cuatro idiomas, que ha pasado de seis impresiones al mes a cuatro mil, y que ya es competitiva en los mercados donde la competencia es más fina.",
        "Las páginas en inglés necesitan lo que siempre necesitan en esta categoría: enlaces y tiempo. Las de sueco y neerlandés necesitan más contenido del que ya está funcionando. Las dos cosas son trabajo conocido, aburrido y poco lucido — que es justo para lo que sirve medir.",
      ],
    },
  ],

  takeaways: [
    "Una web en cuatro idiomas no es una web traducida. Son cuatro mercados de búsqueda con cuatro niveles de competencia, y el más fácil suele pagar primero.",
    "Usa URLs reales por idioma y hreflang recíproco. Un widget de traducción deja tres de tus cuatro mercados sin indexar.",
    "Elige los idiomas por dónde viven tus compradores, no por lo internacional que quieras parecer.",
    "Cuenta con que el primer trimestre no dé casi nada. Los tres primeros meses de esta web sumaron 175 impresiones.",
  ],

  method: [
    "Todas las cifras proceden de Google Search Console para la propiedad de dominio sc-domain:harbor-homes.example, extraídas por la Search Analytics API el 1 de septiembre de 2026. Las cifras desde el lanzamiento cubren del 26 de noviembre de 2025 — el primer día con impresiones registradas — al 29 de agosto de 2026. Los desgloses por mercado y por página cubren los doce meses hasta el 1 de septiembre de 2026.",
    "Las versiones de idioma se comprobaron directamente en las etiquetas hreflang de la web en el momento de escribir esto: en (x-default), sv, nl y de.",
    "Las impresiones y los clics describen visibilidad en buscadores y nada más. Esta página no afirma nada sobre consultas, visitas ni ventas de propiedades: esos datos son del cliente y no se pueden verificar desde el lado del desarrollador.",
  ],

  cta: {
    heading: "¿Vendes a más de un país?",
    body: "Si tus clientes vienen de varios países, una web multiidioma suele ser una forma barata de llegar a más mercados de búsqueda — siempre que sean páginas reales con hreflang real. Quince minutos bastan para ver qué idiomas compensan mantener.",
    label: "Escríbeme por WhatsApp",
    waMessage:
      "Hola Alex — he leído el caso de Harbor Homes. Necesito una web multiidioma para mi negocio. ¿Cuándo podemos hacer la llamada de 15 minutos?",
  },

  ogHeadline: "Cuatro idiomas, cuatro mercados de búsqueda",
  ogKicker: "Caso real · Harbor Homes",
  image: "/work/harbor-homes.jpg",
  imageAlt: "El portal inmobiliario Harbor Homes",
  clientUrl: "https://example.com/harbor-homes",
  clientLabel: "harbor-homes.example",
};

export const speedReportEs: Study = {
  slug: "/es/casos/informe-velocidad-webs-marbella",
  lang: "es",
  key: "speed-report",
  published: "2026-09-01",
  readingMinutes: 8,

  metaTitle: "Informe de velocidad web en Marbella: 211 webs medidas",
  metaDescription:
    "PageSpeed Insights en 211 webs de negocios de Marbella y Málaga: mediana de carga de 7,5 s y el 91 % no llega al umbral de Google. Datos y causas.",

  hero: {
    kicker: "Estudio propio · Marbella y Málaga · agosto 2026",
    h1Main: "211 webs de negocios de Marbella,",
    h1Accent: "medidas",
    dek: "Cogí todos los restaurantes, barberías, talleres y chiringuitos que encontré en Google Maps, le pasé a cada web el test de velocidad del propio Google y apunté lo que salía. La web mediana de un negocio local tarda 7,5 segundos en mostrar su contenido principal.",
  },

  facts: [
    { label: "Muestra", value: "446 negocios, 15 sectores" },
    { label: "Auditadas", value: "211 webs" },
    { label: "Zona", value: "Marbella y Málaga" },
    { label: "Periodo", value: "8–23 agosto 2026" },
    { label: "Fuente", value: "Google PageSpeed Insights (móvil)" },
  ],

  summary: [
    "La web mediana de un negocio local de esta muestra saca 66 sobre 100 en móvil y tarda 7,5 segundos en pintar su elemento más grande.",
    "El 91 % es más lento que el umbral de 2,5 segundos que Google considera bueno, el 77 % está en la franja «deficiente» por encima de 4 segundos y el 9 % tarda más de 20 segundos.",
    "La web más lenta medida tardó 62,4 segundos.",
    "La causa son las imágenes y el alojamiento, casi nunca el JavaScript: la mediana de bloqueo fue de 34 ms y la mediana de desplazamiento de diseño, 0,00.",
    "El 21 % de los negocios estudiados — 92 de 446 — no tiene web propia.",
    "Lo lleno que esté un negocio no predice nada: la correlación entre número de reseñas en Google y puntuación de velocidad fue de −0,05, indistinguible de cero.",
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Todo el mundo en este sector dice que las webs de los negocios locales van lentas. Yo quería saber cuánto, así que las medí.",
        "El método fue deliberadamente aburrido. Recogí negocios de Google Maps en quince sectores de Marbella y Málaga — restaurantes, chiringuitos, barberías, peluquerías y salones de uñas, centros de masajes, entrenadores personales, cafeterías, fontaneros, electricistas, cerrajeros, talleres, limpieza y reformas. Cuando el negocio tenía web, le pasé el PageSpeed Insights del propio Google simulando una conexión móvil. Después dejé de opinar y leí la tabla.",
        "Aquí no se nombra a ningún negocio. Lo que importa es la distribución, no ninguna web concreta, y una página que posicione a base de dejar en evidencia a negocios locales con nombre y apellidos merecería que la ignoraran.",
      ],
    },

    {
      kind: "stats",
      heading: "Los números principales",
      note: "211 webs auditadas entre el 8 y el 23 de agosto de 2026 con Google PageSpeed Insights, perfil móvil. Dos auditorías no devolvieron tiempos utilizables y quedan fuera de las cifras de tiempo, dejando 209.",
      items: [
        { value: "66/100", label: "Puntuación mediana", note: "móvil; media 65,6" },
        { value: "7,5 s", label: "Mediana de carga del contenido", note: "Largest Contentful Paint" },
        { value: "91 %", label: "No llega al umbral de Google", note: "más lento que 2,5 segundos" },
        { value: "21 %", label: "No tiene web", note: "92 de 446 negocios" },
      ],
    },

    {
      kind: "chart",
      heading: "Cómo se reparten las puntuaciones",
      intro:
        "Google llama deficiente al 0–49, mejorable al 50–89 y bueno al 90–100. El diez por ciento de las webs medidas es bueno. Dos tercios están en esa franja media ancha donde la web no está rota, solo lo bastante lenta como para perder gente.",
      max: 130,
      columns: ["Franja de puntuación", "Webs"],
      caption: "Puntuación de rendimiento móvil en PageSpeed Insights, 211 webs, agosto 2026.",
      bars: [
        { label: "0–24", value: 4, display: "4 webs" },
        { label: "25–49", value: 28, display: "28 webs" },
        { label: "50–74", value: 121, display: "121 webs", highlight: true },
        { label: "75–89", value: 37, display: "37 webs" },
        { label: "90–100", value: 21, display: "21 webs" },
      ],
    },

    {
      kind: "chart",
      heading: "Cuánto tarda en aparecer el contenido principal",
      intro:
        "El Largest Contentful Paint es el momento en que termina de cargar lo más grande de la pantalla, normalmente la imagen de cabecera. Google considera bueno 2,5 segundos y deficiente todo lo que pase de 4. El porcentaje de webs que supera cada marca:",
      max: 100,
      columns: ["Umbral", "% de webs"],
      caption:
        "Porcentaje de las 209 webs auditadas que supera cada umbral de Largest Contentful Paint. Mediana 7,5 s, cuartil superior 11,5 s, la más lenta 62,4 s.",
      bars: [
        { label: "más de 2,5 s", value: 91, display: "91 %", highlight: true },
        { label: "más de 4 s", value: 77, display: "77 %" },
        { label: "más de 10 s", value: 33, display: "33 %" },
        { label: "más de 20 s", value: 9, display: "9 %" },
      ],
    },

    {
      kind: "prose",
      heading: "No es el JavaScript. Son las imágenes.",
      body: [
        "Este es el hallazgo que no esperaba, y es el útil. Las dos métricas que suelen delatar una web hinchada y sobrecargada apenas se mueven en toda la muestra. La mediana de tiempo total de bloqueo — lo que el navegador pasa congelado ejecutando scripts — fue de 34 milisegundos, frente a un umbral de 200 ms. Solo 13 de 209 webs pasaban de 600 ms. La mediana de desplazamiento acumulado de diseño fue 0,00, y solo 30 webs superaban la línea de 0,1.",
        "O sea que no son webs ahogadas en frameworks de JavaScript. Son webs sirviendo fotografías enormes sin optimizar desde alojamientos compartidos lentos. Un restaurante sube las fotos tal cual salen de la cámara, la página manda doce megas de JPEG, y en un móvil con 4G a la puerta del restaurante tarda dieciocho segundos.",
        "Y eso importa porque el arreglo es barato. Rehacer una web para quitarle JavaScript es un proyecto. Comprimir las imágenes, servirlas en formatos modernos, dimensionarlas bien y ponerlas detrás de un CDN es una tarde — y con estos datos, es donde está escondida casi toda la velocidad disponible.",
      ],
    },

    {
      kind: "table",
      heading: "Por sector",
      intro:
        "Ordenado de peor a mejor puntuación media. Solo aparecen los sectores con al menos ocho webs auditadas.",
      columns: ["Sector", "Webs", "Puntuación media", "LCP medio"],
      numericFrom: 1,
      caption:
        "PageSpeed Insights móvil, agosto 2026. Son medias, no medianas — la cifra de restaurantes la estiran unos pocos casos extremos.",
      rows: [
        ["Barberías", "12", "57", "10,4 s"],
        ["Entrenadores personales", "11", "60", "10,3 s"],
        ["Restaurantes", "18", "63", "17,6 s"],
        ["Chiringuitos", "28", "64", "9,3 s"],
        ["Limpieza", "17", "65", "9,1 s"],
        ["Reformas", "17", "66", "10,2 s"],
        ["Fontaneros", "15", "67", "8,3 s"],
        ["Cerrajeros", "16", "69", "7,7 s"],
        ["Peluquerías", "11", "69", "7,8 s"],
        ["Talleres mecánicos", "12", "69", "7,8 s"],
        ["Centros de masajes", "16", "70", "10,0 s"],
        ["Electricistas", "16", "71", "8,1 s"],
        ["Cafeterías", "14", "73", "6,7 s"],
      ],
    },

    {
      kind: "prose",
      heading: "Los restaurantes son un caso aparte",
      body: [
        "Los restaurantes tardan de media 17,6 segundos en cargar su contenido principal — casi el doble que la media de la muestra — mientras puntúan más o menos en el medio en todo lo demás. La comida se fotografía mucho y se publica sin tocar, y una página de carta con treinta platos a resolución completa se comporta en consecuencia. Entre las webs de esta muestra con más de 400 reseñas en Google, las cuatro más lentas eran todas restaurantes o chiringuitos: 58,3, 57,3, 27,8 y 20,9 segundos.",
        "La distancia entre un restaurante lleno y su página web es la mayor de todo el conjunto de datos, lo que lleva al resultado que más me llamó la atención.",
      ],
    },

    {
      kind: "prose",
      heading: "Ir lleno no predice nada",
      body: [
        "Esperaba que los negocios que van bien tuvieran mejores webs — más facturación, más presupuesto, más atención. Pues no. En las 209 webs la correlación entre número de reseñas en Google y puntuación de velocidad fue de −0,05: ninguna relación. Las webs de negocios con 500 reseñas o más promediaron 65; el resto, 67.",
        "Un negocio con cuatro mil reseñas y una web de veinte segundos no está fracasando. Está triunfando a pesar de la web, a base de gente que pasa por delante, de Maps y del boca a boca. Y conviene decirlo claro, porque la versión honesta del argumento comercial no es «tu negocio está roto». Es: ya estás ganando fuera de internet, y la web es la única parte que no está tirando del carro.",
      ],
    },

    {
      kind: "points",
      heading: "Si tu web está en ese tercio lento",
      intro: "Más o menos por orden de velocidad recuperada por hora invertida:",
      items: [
        {
          title: "Comprime y redimensiona las imágenes",
          body: "Sirve WebP o AVIF, ajusta cada imagen al hueco que ocupa de verdad y no mandes nunca una foto de 4.000 píxeles de ancho a un espacio de 600. Con estos datos, este único paso explica casi toda la mejora disponible.",
        },
        {
          title: "Carga en diferido todo lo que esté más abajo",
          body: "La galería del final de la página no debería bloquear el titular del principio.",
        },
        {
          title: "Mira qué está cargando tu maquetador",
          body: "Las plantillas de constructores de páginas cargan de rutina varias familias tipográficas, una librería de carrusel y tres scripts de seguimiento antes de que aparezca nada visible. Casi todo eso sobra.",
        },
        {
          title: "Revisa el alojamiento",
          body: "Un hosting compartido barato añade un retraso fijo a cada petición antes de que tu web tenga siquiera ocasión de ir lenta por su cuenta. Poner un CDN delante arregla más de lo que parece.",
        },
        {
          title: "Mide antes y después, en móvil",
          body: "Pásale tú mismo PageSpeed Insights: es gratis, tarda treinta segundos y es la misma herramienta que hay detrás de todos los números de esta página. La puntuación de escritorio te consuela; mide en móvil.",
        },
      ],
    },

    {
      kind: "callout",
      body: "El umbral de Google para una buena carga en móvil son 2,5 segundos. Diecinueve de las 211 webs de esta muestra lo cumplen.",
    },
  ],

  takeaways: [
    "La web mediana de un negocio local de Marbella y Málaga tarda 7,5 segundos en mostrar su contenido principal — el triple del umbral de Google.",
    "El problema son las imágenes y el alojamiento, no el JavaScript. La mediana de bloqueo fue de 34 ms y la de desplazamiento de diseño, 0,00.",
    "Los restaurantes son con diferencia el peor sector, con una media de 17,6 segundos.",
    "Uno de cada cinco negocios no tiene web.",
    "El éxito comercial y la calidad de la web no están correlacionados: una web lenta no es señal de un negocio que va mal, solo de un canal desaprovechado.",
  ],

  method: [
    "Los negocios se recogieron de los resultados de Google Maps en quince categorías de Marbella y Málaga durante agosto de 2026, dando 446 negocios. Cuando el negocio indicaba una web, esa URL se probó con la API de Google PageSpeed Insights en perfil móvil entre el 8 y el 23 de agosto de 2026, produciendo 211 auditorías. Dos no devolvieron tiempos utilizables y quedan fuera de las cifras de tiempo, dejando 209.",
    "Las puntuaciones móviles de PageSpeed Insights son medidas de laboratorio sobre un dispositivo de gama media simulado y una conexión limitada. Son deliberadamente más duras que un visitante real con buen WiFi, y son el mismo baremo que Google publica para todo el mundo — que es justo lo que las hace comparables entre 211 webs.",
    "«Sin web propia» significa que la ficha de Maps no tenía campo de web, o que apuntaba solo a un perfil de redes sociales; cada caso se verificó con una búsqueda posterior. Cumplían 92 de los 446 negocios, 16 de ellos con solo un perfil social.",
    "Esto es una única foto fija de una muestra de conveniencia sacada de Google Maps, no una muestra aleatoria de todos los negocios de la provincia. No está ponderada por tamaño de negocio, y la propia cobertura de Maps se inclina hacia negocios con ficha reclamada y mantenida. Tómalo como una indicación sólida, no como un censo.",
    "No se identifica a ningún negocio. Solo cifras agregadas y ejemplos anónimos por sector.",
  ],

  cta: {
    heading: "¿Quieres saber dónde está tu web?",
    body: "Mándame tu URL y le paso el mismo test y te digo lo que sale — el número real, y si merece la pena hacer algo al respecto. Sin coste y sin ninguna obligación de contratar a nadie. Si la respuesta es «tu web está bien», es una respuesta perfectamente válida.",
    label: "Mándame tu web por WhatsApp",
    waMessage:
      "Hola Alex — he leído el informe de velocidad de Marbella. ¿Puedes pasarle el test a mi web? La URL es:",
  },

  ogHeadline: "211 webs de negocios de Marbella, medidas",
  ogKicker: "Estudio propio · Mediana de carga: 7,5 s",
  dataset: speedReportDataset,
};
