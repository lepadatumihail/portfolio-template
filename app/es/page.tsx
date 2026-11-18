import { HomePage } from "@/components/home-page";
import { homeMetadata } from "@/lib/site-metadata";

export const metadata = homeMetadata("es");

export default function Inicio() {
  return <HomePage lang="es" />;
}
