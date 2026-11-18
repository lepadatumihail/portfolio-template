// The Russian interface strings: everything a Russian page prints that is not
// the page's own content — section headings, labels, footers, link-preview
// lines, the markdown representation's labels. Each object mirrors its English
// twin (landingUi.en in lib/landing.ts, industryHubUi.en in lib/industries.ts,
// studyUi.en in lib/studies.ts); links point at the Russian pages.
// Formal «вы» in lower case; spaces inside number expressions are U+00A0.
import type { HubUi } from "../industries";
import type { LandingUi } from "../landing";
import type { ReviewsUi } from "../reviews";
import type { SiteSchemaCopy } from "../site-schema";
import type { StudyUi } from "../studies";

/** landingUi.ru — the service and sector pages */
export const landingUiRu: LandingUi = {
  nav: { home: "example.com", homeHref: "/ru", contact: "Контакты", breadcrumb: "Навигационная цепочка" },
  availability: "Беру новые проекты",
  city: "Марбелья",
  seeWork: "Посмотреть работы",
  sections: {
    features: { index: "01", title: "Что вы", accent: "получаете" },
    proof: { index: "02", title: "Факты, а не", accent: "обещания" },
    process: { index: "03", title: "От звонка до запуска —", accent: "за несколько дней" },
    pricing: { index: "04", title: "Простые", accent: "цены" },
    faq: { index: "05", title: "Вопросы", accent: "и ответы" },
  },
  stats: [
    { value: "6,3 млн+", label: "показов в Google" },
    { value: "209 тыс.", label: "кликов из поиска" },
    { value: "25+", label: "запущенных сайтов" },
    { value: "5+", label: "лет опыта" },
  ],
  statsNote:
    "Трафик из поиска измерен в Google Search Console по всем сайтам клиентов. Скорость — лишь один из факторов, которые учитывает Google; это результаты сайтов, сделанных так, чтобы быстро загружаться.",
  statsSource: { label: "Все цифры — в кейсах", href: "/ru/keysy" },
  processSteps: [
    {
      day: "День 0",
      title: "Звонок",
      description:
        "15-минутный звонок на русском — о вашем бизнесе и о том, что нужно. Фиксированную цену и дату запуска называю сразу, без коммерческих предложений и ожидания.",
    },
    {
      day: "День 1",
      title: "Дизайн и разработка",
      description:
        "Дизайн и разработку делаю за один заход. На следующий день вы получаете ссылку на рабочую версию сайта — настоящий сайт, по которому можно кликать, а не макет в PDF.",
    },
    {
      day: "День 2",
      title: "Ваши правки",
      description:
        "Один круг правок: вношу их прямо в рабочую версию, пока мы на связи. Почти все правки — в течение часа.",
    },
    {
      day: "День 3",
      title: "Запуск",
      description:
        "Домен, SEO, аналитика, WhatsApp — всё подключено и работает. Простой лендинг может заработать через 24 часа после первого звонка.",
    },
  ],
  processFootnote:
    "Без агентств и без сроков в шесть недель. Проект не переходит из рук в руки: вы говорите с тем, кто его делает. Поэтому и быстро.",
  tiers: [
    {
      name: "Лендинг",
      price: "от 500 €",
      minPrice: 500,
      tagline: "Одна страница, которая продаёт",
      features: [
        "Дизайн и разработка лендинга",
        "Тексты, базовое SEO и аналитика",
        "Заявки через WhatsApp или форму",
        "Запуск за 24–48 часов",
      ],
      cta: "Начать с лендинга",
    },
    {
      name: "Сайт компании",
      price: "от 1 500 €",
      minPrice: 1500,
      tagline: "Весь ваш бизнес — онлайн",
      features: [
        "Многостраничный сайт, дизайн на заказ",
        "Онлайн-запись и воронки заявок",
        "Несколько языков и полная настройка SEO",
        "Отзывы в Google и аналитика",
        "Запуск за 1–2 недели",
      ],
      cta: "Заказать сайт",
    },
    {
      name: "Платформа и ИИ",
      price: "3 000 €+",
      minPrice: 3000,
      tagline: "Разработка на заказ, объём обсуждаем вместе",
      features: [
        "Дашборды и личные кабинеты клиентов",
        "Чат-боты с ИИ и автоматизация",
        "Приём оплаты, учётные записи, документы",
        "Срок зависит от объёма",
      ],
      cta: "Обсудить проект",
    },
  ],
  tierBadge: "чаще всего выбирают",
  pricingFootnote:
    "Каждый проект быстро загружается, сделан в первую очередь под телефон и сразу готов к SEO. Это стартовые цены. Точную цену вы узнаёте на первом 15-минутном звонке, и потом она не меняется.",
  alsoLooking: "Может пригодиться",
  contact: {
    index: "06",
    kicker: "Есть проект?",
    titleMain: "Давайте",
    titleAccent: "поговорим",
  },
  footerLocation: "марбелья, испания",
};

/** industryHubUi.ru — /ru/sozdanie-saytov */
export const industryHubUiRu: HubUi = {
  metaTitle: "Сайты для бизнеса по отраслям — Марбелья и Коста-дель-Соль",
  metaDescription:
    "Клиники, недвижимость, прокат авто, рестораны, отели, юристы, ремонт: сайт под то, как вы продаёте. Звонок на русском, фиксированная цена от 500 €.",
  kicker: "Создание сайтов — по отраслям",
  title: { main: "Сайты для бизнеса по отраслям —", accent: "под то, как вы продаёте." },
  dek: "Стоматологии нужны заявки на приём. Агентству недвижимости — удобный для покупателя поиск объектов. Прокату авто — даты, цены и заявка на бронирование. Тот же разработчик и тот же процесс с фиксированной ценой — а сайт для каждого бизнеса свой.",
  label: "Создание сайтов по отраслям",
  outro:
    "Вашей отрасли нет в списке? Процесс для любого бизнеса тот же: 15-минутный звонок на русском, фиксированная цена и рабочая версия сайта на следующий день.",
  general: { label: "Создание сайтов в Марбелье", href: "/ru/sozdanie-saytov-marbella" },
  og: {
    kicker: "Создание сайтов — по отраслям",
    headline: "Сайты для бизнеса по отраслям — под то, как вы продаёте.",
  },
  ogAlt:
    "Сайты для бизнеса по отраслям — для клиник, агентств недвижимости, проката авто, ресторанов, отелей, юридических фирм, строительных и ремонтных компаний в Марбелье и на Коста-дель-Соль",
};

/** studyUi.ru — /ru/keysy and the studies under it */
export const studyUiRu: StudyUi = {
  nav: { contact: "Контакты", homeHref: "/ru" },
  indexTitle: { main: "Кейсы", accent: "с цифрами" },
  indexKicker: "Каждая цифра — с периодом измерения",
  indexDek:
    "Три разбора с реальными цифрами: выгрузки из Google Search Console, проверки в Google PageSpeed Insights и исследование 211 сайтов местного бизнеса. У каждой цифры указано, откуда она взялась и чего она не доказывает.",
  indexMetaTitle: "Кейсы: сайты и SEO в Марбелье — реальные цифры из Google",
  indexMetaDescription:
    "Данные Search Console и PageSpeed по сайтам из Марбельи: рост стоматологии в Google, портал недвижимости на 4 языках, скорость 211 сайтов Коста-дель-Соль.",
  indexHref: "/ru/keysy",
  backToIndex: "Все кейсы",
  labels: {
    summary: "Коротко",
    takeaways: "Что из этого следует",
    method: "Метод и источники",
    readNext: "Читать дальше",
    published: "Опубликовано",
    updated: "Обновлено",
    // Intl.PluralRules("ru-RU"): one (1, 21…), few (2–4, 22–24…), many (5–20…), other (fractions)
    readingTime: {
      one: "{n} минута чтения",
      few: "{n} минуты чтения",
      many: "{n} минут чтения",
      other: "{n} минут чтения",
    },
    liveSite: "Открыть сайт",
    allStudies: "Кейсы",
  },
  footerLocation: "Марбелья, Испания",
  seeWork: "Посмотреть работы",
  footer: {
    "web-design": "Создание сайтов в Марбелье",
    "app-development": "Разработка приложений",
    "ai-automation": "ИИ-автоматизация",
    chatbots: "Чат-боты и ИИ-агенты",
    seo: "SEO",
    "industry-hub": "По отраслям",
    "case-studies": "Кейсы",
    reviews: "Отзывы",
  },
};

/** reviewsUi.ru — /ru/otzyvy */
export const reviewsUiRu: ReviewsUi = {
  metaTitle: "Отзывы о example.com — {rating} в Google",
  metaDescription:
    "Все отзывы о example.com в Google — на пять звёзд. Здесь они слово в слово: о сайтах, системе для отеля, CRM — со ссылкой на каждый оригинал.",
  kicker: "Отзывы из Google — слово в слово",
  title: { main: "Что говорят", accent: "клиенты" },
  dek: "Все отзывы в моём профиле компании в Google — на пять звёзд. Ниже каждый отзыв с текстом: так, как его написали, под именем из Google и со ссылкой на оригинал.",
  // Intl.PluralRules("ru-RU"): one (1, 21…), few (2–4, 22–24…), many (5–20…), other (fractions)
  count: {
    one: "{n} отзыв в Google",
    few: "{n} отзыва в Google",
    many: "{n} отзывов в Google",
    other: "{n} отзыва в Google",
  },
  checked: "Скопированы из Google {date}",
  profileLink: "Посмотреть в Google Картах",
  reviewLink: "Открыть в Google",
  stars: "Оценка {n} из 5",
  languageNote: "Каждый отзыв приводится на языке оригинала.",
  translatedFrom: {
    en: "Перевод с английского",
    de: "Перевод с немецкого",
    es: "Перевод с испанского",
  },
  label: "Отзывы",
};

/** Bottom-right line of a sector page's link-preview card, before the price: "<prefix> · <highlighted tier's price>" */
export const ogFootPrefixRu = "Фиксированная цена";

/** Link-preview card lines that have no page copy to come from. */
export const ogRu = {
  /** service pages and the hub: the price floor */
  landingFoot: "Фиксированная цена · от 500 €",
  /** the case-study index card */
  studyIndexFoot: "Данные Search Console и PageSpeed",
  /** alt text of a case study's card */
  studyAlt: "Кейс example.com",
};

/** Labels in the markdown representation that have no counterpart on the page. */
export const markdownLabelsRu = {
  structuredData: "Структурированные данные",
  phone: "WhatsApp / телефон",
  location: "Расположение",
};

/** The words of the site-wide JSON-LD graph (siteJsonLd in lib/site-schema.ts). */
export const siteSchemaRu: SiteSchemaCopy = {
  slogan: "Создание сайтов и ИИ-автоматизация",
  description:
    "Быстрые сайты, веб-приложения и ИИ-автоматизация для небольших компаний в Марбелье и на Коста-дель-Соль — запуск за несколько дней, от 500\u00A0€.",
  knowsAbout: [
    "создание сайтов",
    "веб-разработка",
    "разработка веб-приложений",
    "ИИ-автоматизация",
    "чат-боты с ИИ",
    "SEO",
    "локальное SEO",
    "Профиль компании в Google",
    "видимость в ИИ-ассистентах",
  ],
  jobTitle: "Разработчик сайтов и ИИ-автоматизаций",
  addressRegion: "Андалусия",
  province: "Провинция Малага",
};
