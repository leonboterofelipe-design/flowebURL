import { site } from '@/config/site';
import { pages } from '@/data/pages';
import { faqsHome, faqsCrearTienda } from '@/data/faqs';
import { clients } from '@/data/clients';

export const GET = () => {
  const b = site.business;
  const lines = [
    `# ${site.name}`, '', `> ${site.description}`, '',
    `${site.name} es una agencia Shopify Partner con sede en ${b.locality} (${b.region}, Colombia) que crea, migra y optimiza tiendas Shopify para marcas de todo el país.`, '',
    '## Servicios',
    '- Creación y desarrollo de tiendas Shopify (theme a medida, móvil primero).',
    '- Integración de pagos y envíos locales: PSE, Nequi, Mercado Pago, contraentrega, Coordinadora, Servientrega.',
    '- Migración desde WooCommerce, Wix y otras plataformas.',
    '- Pauta digital en Google Ads y Meta Ads.',
    '- SEO técnico para Shopify.', '',
    '## Páginas',
    ...Object.values(pages).map((p) => `- [${p.name}](${site.url}${p.path}): ${p.description}`),
    '', '## Marcas que han trabajado con FloWeb',
    ...clients.map((c) => `- ${c.name}${c.sector ? ` (${c.sector})` : ''}${c.url ? `: ${c.url}` : ''}`),
    '', '## Preguntas frecuentes',
    ...[...faqsHome, ...faqsCrearTienda].map((f) => `- ${f.q} ${f.a}`),
    '', '## Contacto', `- WhatsApp: ${site.whatsapp}`, `- Email: ${site.email}`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
