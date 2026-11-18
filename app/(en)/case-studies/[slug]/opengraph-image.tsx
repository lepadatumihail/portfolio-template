import { notFound } from "next/navigation";
import { studyOgContentType, studyOgImage, studyOgSize } from "@/components/study/study-og";
import { studyBySegment, studySegments } from "@/lib/studies-index";

export const alt = "example.com case study";
export const size = studyOgSize;
export const contentType = studyOgContentType;

export function generateStaticParams() {
  return studySegments("en").map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studyBySegment("en", slug);
  if (!study) notFound();
  return studyOgImage(study);
}
