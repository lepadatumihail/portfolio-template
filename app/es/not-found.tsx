import { NotFoundMessage } from "@/components/not-found-message";

// A notFound() inside the Spanish tree renders here, within the Spanish root
// layout, instead of Next's English default. Unmatched URLs still get the
// trilingual app/global-not-found.tsx.
export default function NotFound() {
  return <NotFoundMessage langs={["es"]} />;
}
