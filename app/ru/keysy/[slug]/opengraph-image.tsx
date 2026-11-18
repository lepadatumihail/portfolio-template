import { notFound } from "next/navigation";
import { studyOgContentType, studyOgImage, studyOgSize } from "@/components/study/study-og";
import { ogRu } from "@/lib/ru/ui";
import { studyBySegment, studySegments } from "@/lib/studies-index";

export const alt = ogRu.studyAlt;
export const size = studyOgSize;
export const contentType = studyOgContentType;

export function generateStaticParams() {
  return studySegments("ru").map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studyBySegment("ru", slug);
  if (!study) notFound();
  return studyOgImage(study);
}
