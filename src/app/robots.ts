import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const allowAll = { allow: "/", disallow: ["/api/", "/cart"] };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Bingbot", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Perplexity-User", ...allowAll },
      { userAgent: "Applebot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "Amazonbot", ...allowAll },
      { userAgent: "CCBot", ...allowAll },
      { userAgent: "FacebookExternalHit", ...allowAll },
      { userAgent: "Twitterbot", ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
