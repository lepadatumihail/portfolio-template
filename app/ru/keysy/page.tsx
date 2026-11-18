import { StudyIndex } from "@/components/study/study-index";
import { studyIndexJsonLd, studyIndexMetadata } from "@/lib/studies-schema";

export const metadata = studyIndexMetadata("ru");

export default function CaseStudiesIndexRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(studyIndexJsonLd("ru")).replace(/</g, "\\u003c"),
        }}
      />
      <StudyIndex lang="ru" />
    </>
  );
}
