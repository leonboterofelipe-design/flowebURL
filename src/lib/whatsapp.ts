import { site } from '@/config/site';
import { pages } from '@/data/pages';

// Mensaje prellenado según la página de origen: sabes de dónde viene cada lead.
// Requiere site.whatsappNumber (wa.link no admite texto); si está vacío usa site.whatsapp.
export const waLink = (path: string) => {
  if (!site.whatsappNumber) return site.whatsapp;
  const page = Object.values(pages).find((p) => p.path === path);
  const msg = page?.waMessage ?? `Hola FloWeb, vengo de su página "${page?.name ?? 'web'}" y quiero información para crear mi tienda Shopify.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};
