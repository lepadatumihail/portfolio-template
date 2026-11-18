import {
  API_BASE,
  API_DOCS_URL,
  API_VERSION,
  apiJson,
  SITE,
} from "@/lib/api";

export const dynamic = "force-static";

// OpenAPI 3.1 description of the public content API. This is the target of the
// "service-desc" link in /.well-known/api-catalog.
const spec = {
  openapi: "3.1.0",
  info: {
    title: "example.com content API",
    version: API_VERSION,
    summary:
      "Read-only access to the services, pricing and portfolio published on example.com.",
    description:
      "A small public API that returns the same facts the site renders, as JSON, so agents and integrations do not have to scrape the pages. No authentication, no rate limits, no write operations.",
    contact: {
      name: "Alex Doe",
      url: SITE,
      email: "hello@example.com",
    },
    license: {
      name: "CC BY 4.0",
      identifier: "CC-BY-4.0",
    },
  },
  externalDocs: {
    description: "Human-readable API documentation",
    url: API_DOCS_URL,
  },
  servers: [{ url: API_BASE, description: "Production" }],
  paths: {
    "/": {
      get: {
        operationId: "getIndex",
        summary: "API index",
        description:
          "Names the API and links to its description, documentation and health check.",
        responses: {
          "200": {
            description: "The API index.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Index" },
              },
            },
          },
        },
      },
    },
    "/health": {
      get: {
        operationId: "getHealth",
        summary: "Health check",
        description: "Reports whether the API is serving requests.",
        responses: {
          "200": {
            description: "The API is serving requests.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Health" },
              },
            },
          },
        },
      },
    },
    "/profile": {
      get: {
        operationId: "getProfile",
        summary: "Profile, services, pricing and process",
        description:
          "Who Alex is, what he builds, what it costs and how a project runs.",
        responses: {
          "200": {
            description: "The published profile.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Profile" },
              },
            },
          },
        },
      },
    },
    "/projects": {
      get: {
        operationId: "getProjects",
        summary: "Portfolio and case studies",
        description:
          "Shipped client sites with live URLs, plus longer case studies.",
        responses: {
          "200": {
            description: "The published portfolio.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Projects" },
              },
            },
          },
        },
      },
    },
    "/industries": {
      get: {
        operationId: "getIndustries",
        summary: "Web design by industry",
        description:
          "The sector pages — websites for clinics, real estate, car rental, restaurants, hotels, law firms and trades — in English, Spanish and Russian, each with its URL, its markdown representation and its FAQ.",
        responses: {
          "200": {
            description: "The published industry pages.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Industries" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Index: {
        type: "object",
        required: ["name", "version", "links", "endpoints"],
        properties: {
          name: { type: "string" },
          version: { type: "string" },
          description: { type: "string" },
          links: {
            type: "object",
            properties: {
              "service-desc": { type: "string", format: "uri" },
              "service-doc": { type: "string", format: "uri" },
              status: { type: "string", format: "uri" },
            },
          },
          endpoints: {
            type: "array",
            items: {
              type: "object",
              properties: {
                method: { type: "string" },
                href: { type: "string", format: "uri" },
                summary: { type: "string" },
              },
            },
          },
        },
      },
      Health: {
        type: "object",
        required: ["status", "version", "checkedAt"],
        properties: {
          status: { type: "string", enum: ["pass", "fail"] },
          version: { type: "string" },
          checkedAt: { type: "string", format: "date-time" },
        },
      },
      Profile: {
        type: "object",
        required: ["name", "role", "summary", "contact", "services", "pricing"],
        properties: {
          name: { type: "string" },
          role: { type: "string" },
          summary: { type: "string" },
          location: {
            type: "object",
            properties: {
              city: { type: "string" },
              region: { type: "string" },
              country: { type: "string" },
              areaServed: { type: "array", items: { type: "string" } },
            },
          },
          contact: {
            type: "object",
            properties: {
              email: { type: "string", format: "email" },
              whatsapp: { type: "string" },
              instagram: { type: "string", format: "uri" },
              github: { type: "string", format: "uri" },
            },
          },
          services: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                summary: { type: "string" },
                description: { type: "string" },
                includes: { type: "array", items: { type: "string" } },
                price: { type: "string" },
                url: { type: "string", format: "uri" },
                seenIn: { type: "array", items: { type: "string" } },
              },
            },
          },
          pricing: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                price: { type: "string" },
                tagline: { type: "string" },
                features: { type: "array", items: { type: "string" } },
              },
            },
          },
          process: {
            type: "array",
            items: {
              type: "object",
              properties: {
                day: { type: "string" },
                title: { type: "string" },
                description: { type: "string" },
              },
            },
          },
          guarantee: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
            },
          },
          stats: {
            type: "array",
            items: {
              type: "object",
              properties: {
                value: { type: "number" },
                suffix: { type: "string" },
                label: { type: "string" },
                note: { type: "string" },
              },
            },
          },
        },
      },
      Projects: {
        type: "object",
        required: ["projects", "caseStudies"],
        properties: {
          projects: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                url: { type: "string", format: "uri" },
                description: { type: "string" },
                tags: { type: "array", items: { type: "string" } },
                image: { type: "string", format: "uri" },
              },
            },
          },
          caseStudies: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                client: { type: "string" },
                description: { type: "string" },
                features: { type: "array", items: { type: "string" } },
                stack: { type: "array", items: { type: "string" } },
              },
            },
          },
        },
      },
      Industries: {
        type: "object",
        required: ["hub", "industries"],
        properties: {
          hub: {
            type: "object",
            required: ["en", "es", "ru"],
            properties: {
              en: { type: "string", format: "uri" },
              es: { type: "string", format: "uri" },
              ru: { type: "string", format: "uri" },
            },
          },
          industries: {
            type: "array",
            items: {
              type: "object",
              required: ["key", "en", "es", "ru"],
              properties: {
                key: { type: "string" },
                en: { $ref: "#/components/schemas/IndustryPage" },
                es: { $ref: "#/components/schemas/IndustryPage" },
                ru: { $ref: "#/components/schemas/IndustryPage" },
              },
            },
          },
        },
      },
      IndustryPage: {
        type: "object",
        required: [
          "name",
          "service",
          "summary",
          "title",
          "description",
          "url",
          "markdown",
          "faq",
        ],
        properties: {
          name: { type: "string", description: "The sector, as a plural noun." },
          service: { type: "string" },
          summary: { type: "string" },
          title: { type: "string" },
          description: { type: "string" },
          url: { type: "string", format: "uri" },
          markdown: {
            type: "string",
            format: "uri",
            description: "The same page as text/markdown.",
          },
          faq: {
            type: "array",
            items: {
              type: "object",
              required: ["question", "answer"],
              properties: {
                question: { type: "string" },
                answer: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};

export async function GET() {
  return apiJson(spec);
}
