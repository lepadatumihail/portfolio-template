import { narrowCell, typeset, typesetHeading } from "@/components/typeset";
import type { Lang } from "@/lib/i18n";
import type { StudyBlock } from "@/lib/studies";

/**
 * Renders one content block of a case study. Everything here is static markup
 * — charts are CSS bars, not a charting library — so a study page stays a
 * server component and costs no JavaScript.
 *
 * Every string a reader sees goes through components/typeset.tsx, so the
 * Russian studies follow the same line-breaking rules as the rest of the site.
 */

function BlockHeading({ text, lang }: { text: string; lang: Lang }) {
  return (
    <h2 className="mb-6 text-balance font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
      {typeset(text, lang)}
    </h2>
  );
}

function Prose({ body, lang }: { body: string[]; lang: Lang }) {
  return (
    <>
      {body.map((paragraph, i) => (
        <p key={i} className="mt-5 text-pretty leading-relaxed text-foreground/80 first:mt-0">
          {typeset(paragraph, lang)}
        </p>
      ))}
    </>
  );
}

/**
 * Horizontal bars: the label reads left-to-right at any width, so nothing has
 * to be rotated or truncated on a phone. The bar itself is decorative — the
 * value is real text beside it, which is what a screen reader and a model
 * scraping the page both read.
 */
function Chart({ block, lang }: { block: Extract<StudyBlock, { kind: "chart" }>; lang: Lang }) {
  return (
    <figure className="mt-8">
      <ul className="flex flex-col gap-2.5">
        {block.bars.map((bar) => {
          const width = Math.max((bar.value / block.max) * 100, 0.6);
          return (
            <li key={bar.label} className="grid grid-cols-[4.5rem_1fr_4.5rem] items-center gap-3 sm:grid-cols-[6rem_1fr_5.5rem] sm:gap-4">
              <span className="truncate text-xs text-muted sm:text-sm">{bar.label}</span>
              <span aria-hidden className="h-6 w-full rounded-[3px] bg-foreground/[0.04] sm:h-7">
                <span
                  className={`block h-full rounded-[3px] ${
                    bar.highlight ? "bg-accent" : "bg-accent/45"
                  }`}
                  style={{ width: `${width}%` }}
                />
              </span>
              <span className="text-right font-sans text-xs tabular-nums text-foreground sm:text-sm">
                {typesetHeading(bar.display, lang, "never")}
              </span>
            </li>
          );
        })}
      </ul>
      {block.caption ? (
        <figcaption className="mt-5 text-pretty text-xs leading-relaxed text-muted">
          {typeset(block.caption, lang)}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Table({ block, lang }: { block: Extract<StudyBlock, { kind: "table" }>; lang: Lang }) {
  const numericFrom = block.numericFrom ?? 1;
  return (
    <figure className="mt-8">
      {/* wide tables scroll inside their own box — the page never scrolls sideways */}
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[34rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              {block.columns.map((column, i) => (
                <th
                  key={column}
                  scope="col"
                  className={`pb-3 text-xs font-medium uppercase tracking-[0.1em] text-muted ${
                    i >= numericFrom ? "text-right" : "text-left"
                  }`}
                >
                  {typeset(column, lang)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-b border-line/70">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`py-3 ${
                      i >= numericFrom
                        ? "text-right tabular-nums text-foreground"
                        : "pr-4 text-foreground/80"
                    }`}
                  >
                    {typeset(cell, lang)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption ? (
        <figcaption className="mt-5 text-pretty text-xs leading-relaxed text-muted">
          {typeset(block.caption, lang)}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function StudyBlocks({ blocks, lang }: { blocks: StudyBlock[]; lang: Lang }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "prose":
            return (
              <section key={i} className="reveal mt-14 first:mt-0">
                {block.heading ? <BlockHeading text={block.heading} lang={lang} /> : null}
                <Prose body={block.body} lang={lang} />
              </section>
            );

          case "stats":
            return (
              <section key={i} className="reveal mt-14 border-t border-line pt-10">
                {block.heading ? <BlockHeading text={block.heading} lang={lang} /> : null}
                <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
                  {block.items.map((item) => (
                    <div key={item.label}>
                      <dt className="sr-only">{item.label}</dt>
                      <dd>
                        <p className="font-sans text-3xl font-medium tracking-tight text-foreground tabular-nums sm:text-4xl">
                          {typesetHeading(item.value, lang, "never")}
                        </p>
                        <p className={`mt-2 text-sm text-foreground/80 ${narrowCell(lang)}`}>
                          {typeset(item.label, lang)}
                        </p>
                        {item.note ? (
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {typeset(item.note, lang)}
                          </p>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
                {block.note ? (
                  <p className="mt-8 max-w-2xl text-pretty text-xs leading-relaxed text-muted">
                    {typeset(block.note, lang)}
                  </p>
                ) : null}
              </section>
            );

          case "chart":
            return (
              <section key={i} className="reveal mt-14">
                {block.heading ? <BlockHeading text={block.heading} lang={lang} /> : null}
                {block.intro ? <Prose body={[block.intro]} lang={lang} /> : null}
                <Chart block={block} lang={lang} />
              </section>
            );

          case "table":
            return (
              <section key={i} className="reveal mt-14">
                {block.heading ? <BlockHeading text={block.heading} lang={lang} /> : null}
                {block.intro ? <Prose body={[block.intro]} lang={lang} /> : null}
                <Table block={block} lang={lang} />
              </section>
            );

          case "points":
            return (
              <section key={i} className="reveal mt-14">
                {block.heading ? <BlockHeading text={block.heading} lang={lang} /> : null}
                {block.intro ? <Prose body={[block.intro]} lang={lang} /> : null}
                <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <div key={item.title} className="border-t border-line pt-5">
                      <h3 className="font-sans text-lg font-medium tracking-tight text-foreground">
                        {typeset(item.title, lang)}
                      </h3>
                      <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
                        {typeset(item.body, lang)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "callout":
            return (
              <aside
                key={i}
                className="reveal mt-14 border-l-2 border-accent/40 pl-6 text-pretty font-sans text-lg font-light leading-relaxed text-foreground sm:text-xl"
              >
                {typeset(block.body, lang)}
              </aside>
            );
        }
      })}
    </>
  );
}
