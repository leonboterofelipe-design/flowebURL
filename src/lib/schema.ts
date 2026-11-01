import { site } from '@/config/site';
import type { Faq } from '@/data/faqs';

export const organizationSchema = () => {
  const b = site.business;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name, url: site.url, description: site.description, email: site.email,
    logo: site.url + site.logo, image: site.url + site.logo,
    knowsAbout: ['Shopify', 'Desarrollo ecommerce', 'Tiendas online', 'SEO', 'Google Ads', 'Meta Ads'],
    ...(b.telephone && { telephone: b.telephone }),
    ...(b.hours && { openingHours: b.hours }),
    ...(b.geo && { geo: { '@type': 'GeoCoordinates', latitude: b.geo.lat, longitude: b.geo.lng } }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: b.locality, addressRegion: b.region, addressCountry: b.country,
      ...(b.street && { streetAddress: b.street }),
    },
    areaServed: { '@type': 'Country', name: 'Colombia' },
  };
};

export const faqSchema = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: site.url + '/' },
    { '@type': 'ListItem', position: 2, name, item: site.url + path },
  ],
});

export const serviceSchema = (name: string, area: { type: 'City' | 'Country'; name: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name, serviceType: 'Desarrollo de tiendas Shopify',
  provider: { '@type': 'ProfessionalService', name: site.name, url: site.url },
  areaServed: { '@type': area.type, name: area.name },
});
