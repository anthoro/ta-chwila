import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');
  const sorted = articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'ANTONI.SYS',
    description: 'Personal blog. Terminal aesthetic. No apologies.',
    site: context.site!.toString(),
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      link: `/#${article.data.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
