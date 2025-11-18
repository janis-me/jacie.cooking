import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export async function GET(_: unknown) {
  const blog = await getCollection('recipes');

  return rss({
    stylesheet: '/pretty-feed-v3.xsl',
    title: `jacie.cooking`,
    description: 'The tastiest food blog in the universe',
    site: 'https://jacie.cooking/recipes',
    items: blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.createdAt,
      description: post.data.description,
      content: sanitizeHtml(post.rendered?.html ?? 'Error loading content'),
      link: `/recipe/${post.id}`,
    })),
    customData: `<language>de</language>`,
  });
}
