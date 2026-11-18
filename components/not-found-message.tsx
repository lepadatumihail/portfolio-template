import Link from "next/link";
import { homePath, LANG_META, type Lang } from "@/lib/i18n";

const LINES: Record<Lang, { message: string; link: string }> = {
  en: { message: "This page could not be found.", link: "Go to the home page" },
  es: { message: "No se ha encontrado esta página.", link: "Ir a la página de inicio" },
  ru: { message: "Такой страницы нет.", link: "Перейти на главную" },
};

/**
 * The body of a 404: one line per language, each leading to that language's
 * home. app/global-not-found.tsx lists every language, since an unmatched URL
 * says nothing about the visitor's; app/es/not-found.tsx and
 * app/ru/not-found.tsx, which catch a notFound() inside their own tree, list
 * their own.
 */
export function NotFoundMessage({ langs }: { langs: readonly Lang[] }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="font-serif text-6xl italic leading-none tracking-tight text-foreground sm:text-8xl">
        404
      </h1>
      <ul className="mt-10 flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
        {langs.map((lang) => (
          <li key={lang} lang={LANG_META[lang].htmlLang} className="text-pretty">
            {LINES[lang].message}{" "}
            <Link
              href={homePath(lang)}
              hrefLang={LANG_META[lang].htmlLang}
              prefetch={false}
              className="font-medium text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
            >
              {LINES[lang].link}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
