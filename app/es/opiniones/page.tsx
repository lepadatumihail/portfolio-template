import { ReviewsPage } from "@/components/reviews-page";
import { reviewsJsonLd, reviewsMetadata } from "@/lib/reviews-schema";

export const metadata = reviewsMetadata("es");

export default function Opiniones() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsJsonLd("es")).replace(/</g, "\\u003c"),
        }}
      />
      <ReviewsPage lang="es" />
    </>
  );
}
