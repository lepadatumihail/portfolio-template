import { ReviewsPage } from "@/components/reviews-page";
import { reviewsJsonLd, reviewsMetadata } from "@/lib/reviews-schema";

export const metadata = reviewsMetadata("ru");

export default function ReviewsRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsJsonLd("ru")).replace(/</g, "\\u003c"),
        }}
      />
      <ReviewsPage lang="ru" />
    </>
  );
}
