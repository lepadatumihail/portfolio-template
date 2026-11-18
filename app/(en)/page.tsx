import { HomePage } from "@/components/home-page";
import { homeMetadata } from "@/lib/site-metadata";

export const metadata = homeMetadata("en");

export default function Home() {
  return <HomePage lang="en" />;
}
