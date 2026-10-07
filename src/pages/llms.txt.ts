import { site } from '@/config/site';
import { pages } from '@/data/pages';

export const GET = () => {
  const lines = [
    `# ${site.name}`, '', `> ${site.description}`, '', '## Páginas',
    ...Object.values(pages).map((p) => `- [${p.name}](${site.url}${p.path}): ${p.description}`),
    '', '## Contacto', `- WhatsApp: ${site.whatsapp}`, `- Email: ${site.email}`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
