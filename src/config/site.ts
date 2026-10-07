export const site = {
  name: 'FloWeb',
  url: 'https://floweb.com.co',
  locale: 'es-CO',
  description: 'Agencia Shopify Partner en Colombia: diseñamos, lanzamos y escalamos tu tienda online.',
  whatsapp: 'https://wa.link/ue22rb',
  email: 'info@floweb.com.co',
  // TODO: descargar el logo a src/assets/ y usarlo con astro:assets (hoy se sirve desde Wix)
  logo: '/9eeba03e-0c78-4de3-a3b7-d9f725d12507.jpg',
  business: {
    // Datos para el schema local. Completa lo que aplique; lo vacío no se publica.
    locality: 'Medellín', region: 'Antioquia', country: 'CO',
    street: '', telephone: '', hours: '', geo: null as null | { lat: number; lng: number },
  },
  nav: [
    { label: 'Shopify', href: '/shopify/' },
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Metodología', href: '/metodologia/' },
    { label: 'Proceso', href: '/proceso/' },
  ],
};
