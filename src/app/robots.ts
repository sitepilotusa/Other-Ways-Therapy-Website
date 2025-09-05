import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://otherwaystherapy.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    host: base,
    sitemap: `${base}/sitemap.xml`,
  };
}


