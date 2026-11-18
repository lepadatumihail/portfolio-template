import { ChatbotsPage } from "@/components/chatbots-page";
import { CHATBOTS_CONFIGS } from "@/lib/chatbots";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

const config = CHATBOTS_CONFIGS.ru;
export const metadata = landingMetadata(config);

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingJsonLd(config)).replace(/</g, "\\u003c") }} />
    <ChatbotsPage config={config} />
  </>;
}
