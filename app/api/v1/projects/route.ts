import { SITE, apiJson } from "@/lib/api";
import { homeCaseStudies, homeProjects } from "@/lib/home";

export const dynamic = "force-static";

// The English home page's work and products, as lib/data.ts and lib/home/en.ts
// give them.
export async function GET() {
  return apiJson({
    projects: homeProjects("en").map(({ name, url, image, description, tags }) => ({
      name,
      url,
      description,
      tags,
      image: `${SITE}${image}`,
    })),
    caseStudies: homeCaseStudies("en").map(
      ({ name, client, description, features, stack }) => ({
        name,
        client,
        description,
        features,
        stack,
      }),
    ),
  });
}
