import { StudyIndex } from "@/components/study/study-index";
import { studyIndexJsonLd, studyIndexMetadata } from "@/lib/studies-schema";

export const metadata = studyIndexMetadata("es");

export default function CasosIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(studyIndexJsonLd("es")).replace(/</g, "\\u003c"),
        }}
      />
      <StudyIndex lang="es" />
    </>
  );
}
