import Parser from 'rss-parser';

const parser = new Parser();

export async function getRssFeed(url: string) {
  try {
    const feed = await parser.parseURL(url);
    return feed;
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
    return null;
  }
}