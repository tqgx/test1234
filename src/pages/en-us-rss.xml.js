import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "TQGX 's Blog",
    description: "Hello! im Lily Joneś, a.k.a. TQGX OpenTools & Portabler",
    site: 'https://tqgx.github.io/en-us',
    items: await pagesGlobToRssItems(import.meta.glob('./en-us/*.md')),
    customData: `<language>en-us</language>`,
  });
}
