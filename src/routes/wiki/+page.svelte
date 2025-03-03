<script context="module">
  import axios from 'axios';

  export async function load() {
    try {
      // Динамически импортируем cheerio только на сервере
      const cheerio = await import('cheerio');

      // Делаем запрос к сайту
      const response = await axios.get('http://www.aphorisme.ru/random/?q=2329');
      const html = response.data;

      // Парсим HTML с помощью cheerio
      const cheerioInstance = cheerio.default.load(html); // Используем cheerioInstance вместо $
      const aphorism = cheerioInstance('.aphorisme-text').text().trim(); // Ищем элемент с афоризмом

      if (!aphorism) {
        throw new Error('Афоризм не найден на странице');
      }

      return {
        props: {
          aphorism
        }
      };
    } catch (error) {
      return {
        status: 500,
        error: new Error('Не удалось загрузить афоризм: ' + error.message)
      };
    }
  }
</script>

<script>
  export let aphorism;
</script>

<main>
  <h1>Случайный афоризм</h1>
  <p>{aphorism}</p>
</main>