export interface PageMeta {
  path: string; name: string; title: string; description: string;
  h1: string; lead: string; takeaways: string[]; related: string[];
}

export const pages: Record<string, PageMeta> = {
  home: {
    path: '/', name: 'Inicio',
    title: 'Agencia Shopify Partner en Colombia | FloWeb',
    description: 'Diseñamos, lanzamos y escalamos tu tienda Shopify para el mercado colombiano. Pide tu diagnóstico inicial gratuito por WhatsApp.',
    h1: 'Tu tienda Shopify que sí vende', lead: '', takeaways: [],
    related: ['shopify', 'servicios', 'metodologia', 'proceso'],
  },
  shopify: {
    path: '/shopify/', name: 'Shopify',
    title: 'Tienda Shopify en Colombia: diseño y pagos locales | FloWeb',
    description: 'Configuramos tu tienda Shopify con pagos locales (PSE, Nequi, Mercado Pago), themes a medida y migración desde WooCommerce o Wix.',
    h1: 'Shopify para vender en Colombia',
    lead: 'Configuración, themes a medida, pagos locales y migraciones desde otras plataformas.',
    takeaways: ['Configuración completa de tu tienda Shopify desde cero.', 'Pagos locales: PSE, Nequi y Mercado Pago.', 'Migración desde WooCommerce, Wix u otras plataformas.'],
    related: ['servicios', 'metodologia', 'proceso'],
  },
  servicios: {
    path: '/servicios/', name: 'Servicios',
    title: 'Servicios de Shopify, pauta digital y SEO | FloWeb',
    description: 'Tienda Shopify, campañas en Google y Meta Ads y SEO técnico con un solo equipo. Cotiza tu proyecto por WhatsApp.',
    h1: 'Servicios para vender en Shopify',
    lead: 'Tienda, pauta digital y SEO técnico con un solo equipo.',
    takeaways: ['Tienda Shopify profesional, pensada para móvil.', 'Pauta digital en Google Ads y Meta Ads.', 'SEO técnico para Shopify y contenido para tu tienda.'],
    related: ['shopify', 'proceso', 'metodologia'],
  },
  metodologia: {
    path: '/metodologia/', name: 'Metodología',
    title: 'Metodología de e-commerce en Shopify | FloWeb',
    description: 'Cuatro pilares para decidir sobre tu tienda: plataforma, velocidad, tráfico calificado y escalabilidad.',
    h1: 'Cuatro pilares, un objetivo: vender',
    lead: 'Plataforma, velocidad, tráfico y escalabilidad, pensados para el comprador colombiano.',
    takeaways: ['Shopify optimizado como base técnica.', 'Velocidad pensada para conexiones 4G.', 'Tráfico calificado con ads y SEO integrados.'],
    related: ['servicios', 'proceso', 'shopify'],
  },
  proceso: {
    path: '/proceso/', name: 'Proceso',
    title: 'Proceso para lanzar tu tienda Shopify | FloWeb',
    description: 'De diagnóstico gratuito a tienda en producción en cuatro pasos: diagnóstico, diseño, desarrollo y optimización continua.',
    h1: 'De cero a tienda en producción',
    lead: 'Cuatro pasos, sin reuniones interminables.',
    takeaways: ['Empezamos con un diagnóstico gratuito.', 'Primer diseño en 72 horas.', 'Tras el lanzamiento medimos y optimizamos cada mes.'],
    related: ['shopify', 'servicios', 'contacto'],
  },
  contacto: {
    path: '/contacto/', name: 'Contacto',
    title: 'Contacto y diagnóstico gratuito | FloWeb',
    description: 'Escríbenos por WhatsApp o email y agenda tu diagnóstico inicial gratuito para tu tienda Shopify.',
    h1: 'Hablemos de tu tienda',
    lead: 'Escríbenos y agendamos tu diagnóstico inicial gratuito.',
    takeaways: ['Diagnóstico inicial gratuito y sin compromiso.', 'Atención por WhatsApp o email.'],
    related: ['shopify', 'servicios'],
  },
};
