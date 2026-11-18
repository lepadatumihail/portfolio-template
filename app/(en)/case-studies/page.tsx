import { StudyIndex } from "@/components/study/study-index";
import { studyIndexJsonLd, studyIndexMetadata } from "@/lib/studies-schema";

export const metadata = studyIndexMetadata("en");

export default function CaseStudiesIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(studyIndexJsonLd("en")).replace(/</g, "\\u003c"),
        }}
      />
      <StudyIndex lang="en" />
    </>
  );
}
