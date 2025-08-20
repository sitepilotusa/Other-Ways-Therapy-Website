import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://otherwaystherapy.com';
  const now = new Date();

  const routes = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/services',
    '/specialties',
    '/privacy',
    '/terms',
    '/areas-we-serve',
  ];

  const serviceRoutes = [
    '/services/emdr-therapy',
    '/services/internal-family-systems',
    '/services/ketamine-prep-integration',
    '/services/emdr-intensives',
    '/services/emdr-consultation',
  ];

  const blogRoutes = [
    '/blog/what-is-an-emdr-intensive',
    '/blog/life-uh-finds-a-way',
  ];

  const towns = ['lakewood', 'wheat-ridge', 'denver', 'arvada', 'golden', 'boulder'];
  const areaRoutes = towns.map((slug) => `/areas-we-serve/${slug}`);

  return [
    ...routes,
    ...serviceRoutes,
    ...blogRoutes,
    ...areaRoutes,
  ].map((path) => ({ url: `${base}${path}`, lastModified: now }));
}


