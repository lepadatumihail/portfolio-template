import { HomePage } from "@/components/home-page";
import { homeMetadata } from "@/lib/site-metadata";

export const metadata = homeMetadata("ru");

export default function HomeRu() {
  return <HomePage lang="ru" />;
}
