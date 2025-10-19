import { canonicalBase } from '@/lib/site';

type Breadcrumb = {
  name: string;
  path: string;
};

export const breadcrumbJsonLd = (trail: Breadcrumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${canonicalBase}${item.path}`,
  })),
});

