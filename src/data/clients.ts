// Marcas con las que hemos trabajado. Agrega url y sector solo si están verificados.
export interface Client {
  name: string; url?: string; sector?: string;
  service?: string; quote?: string[];
}

export const clients: Client[] = [
  {
    name: 'Mijashop', url: 'https://mijashop.com/', service: 'Sitio web',
    quote: ['No basta una web que sea bonita, se necesita una web que venda.', 'Aprendí que las imágenes deben tener formato, tamaño y sentido.'],
  },
  {
    name: 'Romero Corporativo', url: 'https://romerocorporativo.com/', sector: 'Catering empresarial', service: 'Google Ads',
    quote: ['No es un simple anuncio, es mi canal de ventas.'],
  },
  { name: 'Natal Travel', url: 'https://nataltravel.com/', sector: 'Turismo en Antioquia' },
];
