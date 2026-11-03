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
  // Entidad para GEO/E-E-A-T. Lo vacío no se publica en el schema.
  founder: { name: 'Felipe León Botero', jobTitle: 'Fundador de FloWeb · Desarrollador Shopify', url: 'https://www.linkedin.com/in/felipe-le%C3%B3n-botero-016368241/', sameAs: ['https://www.linkedin.com/in/felipe-le%C3%B3n-botero-016368241/'] as string[] },
  foundingDate: '2024', // AAAA o AAAA-MM
  // Perfiles oficiales: Google Business Profile, Instagram, LinkedIn, ficha de Shopify Partner Directory
  sameAs: ['https://www.instagram.com/somosfloweb/'] as string[],
  // Precio "desde" que se publica en la web (debe coincidir con el texto visible)
  priceFrom: 2400000 as null | number,
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
