import { notFound } from "next/navigation";
import { StudyPage } from "@/components/study/study-page";
import { studyBySegment, studySegments } from "@/lib/studies-index";
import { studyJsonLd, studyMetadata } from "@/lib/studies-schema";

type Params = { params: Promise<{ slug: string }> };

// the set is a fixed list in lib/studies-index.ts, so anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return studySegments("es").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const study = studyBySegment("es", slug);
  return study ? studyMetadata(study) : {};
}

export default async function Caso({ params }: Params) {
  const { slug } = await params;
  const study = studyBySegment("es", slug);
  if (!study) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(studyJsonLd(study)).replace(/</g, "\\u003c"),
        }}
      />
      <StudyPage study={study} />
    </>
  );
}
