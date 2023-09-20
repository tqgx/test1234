import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "TQGX 's Blog",
    description: "Hello! im Lily Joneś, a.k.a. TQGX OpenTools & Portabler",
    site: 'https://tqgx.github.io',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
