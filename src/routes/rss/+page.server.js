import Parser from 'rss-parser';

const parser = new Parser();

export async function load() {
  // Массив URL-адресов RSS-каналов
  const rssUrls = [
    'https://www.anekdot.ru/rss/export_j.xml', // Пример 1
    'https://www.anekdot.ru/rss/export_bestday.xml', // Пример 2
    'https://www.anekdot.ru/rss/export_j_burning.xml' // Пример 3
  ];

  try {
    // Загружаем данные из всех RSS-каналов
    const feeds = await Promise.all(
      rssUrls.map(async (url) => {
        const feed = await parser.parseURL(url);
        return feed;
      })
    );

    // Возвращаем данные в виде объекта
    return {
      feeds
    };
  } catch (error) {
    console.error('Error parsing RSS feeds:', error);
    return {
      status: 500,
      error: 'Failed to load RSS feeds'
    };
  }
}