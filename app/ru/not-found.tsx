import { NotFoundMessage } from "@/components/not-found-message";

// A notFound() inside the Russian tree renders here, within the Russian root
// layout, instead of Next's English default. Unmatched URLs still get the
// trilingual app/global-not-found.tsx.
export default function NotFound() {
  return <NotFoundMessage langs={["ru"]} />;
}
