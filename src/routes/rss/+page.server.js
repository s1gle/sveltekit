/* парсинг RSS на стороне сервера: */

import { getRssFeed } from '$lib/rss';

export async function load() {
  const rssUrl = 'https://www.anekdot.ru/rss/export_bestday.xml'; // URL RSS-канала
  const feed = await getRssFeed(rssUrl);

  return {
    feed
  };
}