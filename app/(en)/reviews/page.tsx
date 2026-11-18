import { ReviewsPage } from "@/components/reviews-page";
import { reviewsJsonLd, reviewsMetadata } from "@/lib/reviews-schema";

export const metadata = reviewsMetadata("en");

export default function Reviews() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsJsonLd("en")).replace(/</g, "\\u003c"),
        }}
      />
      <ReviewsPage lang="en" />
    </>
  );
}
