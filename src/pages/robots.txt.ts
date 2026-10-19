import type { APIRoute } from 'astro';
import { LAUNCHED, site } from '../data/site';

// Until launch, ask search engines to stay away from the test address.
export const GET: APIRoute = () => {
  const body = LAUNCHED
    ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
