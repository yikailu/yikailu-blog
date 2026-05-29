import { toAbsoluteUrl } from "@/lib/site";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${toAbsoluteUrl("/sitemap-index.xml")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
