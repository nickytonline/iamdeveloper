import rss from '@astrojs/rss';
import { CollectionEntry, getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const rawPosts = await Promise.all([
  getCollection('blog'),
  getCollection('vscodetips'),
  getCollection('newsletter'),
]);

const blogPosts = rawPosts[0].map((post) => ({
  ...post,
  link: `/blog/${post.slug}`,
}));

const vsccodeTips = rawPosts[1].map((post) => ({
  ...post,
  link: `/vscodetips/${post.slug}`,
}));

const newsletterPosts = rawPosts[2].map((post) => ({
  ...post,
  link: `/newsletter/${post.slug}`,
}));

// TODO: Create a utility function that grabs all posts and sorts them by date since
// I do this elsewhere.
const allPosts = [blogPosts, vsccodeTips, newsletterPosts]
  .flat()
  .sort((post1, post2) => {
    return (
      new Date(post2.data.date).getTime() - new Date(post1.data.date).getTime()
    );
  });

export function get(context: APIContext) {
  return rss({
    title: 'Just some dev',
    description: `Welcome to Nick Taylor's personal website.`,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: `${context.site}`,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: allPosts.map((post) => ({
      content: post.data.excerpt,
      title: post.data.title,
      pubDate: new Date(post.data.date),
      link: post.link,
    })),
    // (optional) inject custom xml
    customData: `<language>en-CA</language>`,
  });
}
