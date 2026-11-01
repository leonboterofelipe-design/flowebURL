export const site = {
  name: 'FloWeb',
  url: 'https://floweb.com.co',
  locale: 'es-CO',
  description: 'Agencia Shopify Partner en Colombia: diseñamos, lanzamos y escalamos tu tienda online.',
  whatsapp: 'https://wa.link/ue22rb',
  // Número con indicativo, sin + ni espacios: activa los mensajes prellenados por página (src/lib/whatsapp.ts)
  whatsappNumber: '573206977332',
  email: 'info@floweb.com.co',
  // Originales en src/assets/brand/. logo = completo (schema), icon = carrito (menú), ogImage = 1200×630 (redes)
  logo: '/floweb-logo-agencia-shopify-colombia.jpg',
  icon: '/floweb-icono-carrito.png',
  ogImage: '/floweb-agencia-shopify-colombia-og.jpg',
  business: {
    // Datos para el schema local. Completa lo que aplique; lo vacío no se publica.
    locality: 'Medellín', region: 'Antioquia', country: 'CO',
    street: '', telephone: '+57 320 6977332', hours: '', geo: null as null | { lat: number; lng: number },
  },
  nav: [
    { label: 'Crear tienda', href: '/crear-tienda-shopify/' },
    { label: 'Shopify', href: '/shopify/' },
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Metodología', href: '/metodologia/' },
    { label: 'Proceso', href: '/proceso/' },
  ],
};
