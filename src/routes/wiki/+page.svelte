<script context="module">
  import axios from 'axios';
  import cheerio from 'cheerio';

  export async function load() {
    try {
      // Делаем запрос к сайту
      const response = await axios.get('http://www.aphorisme.ru/random/?q=2329');
      const html = response.data;

      // Парсим HTML с помощью cheerio
      const cheerioInstance = cheerio.load(html);
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
        error: new Error('Не удалось загрузить афоризм: ' + error.message) // Закрываем строку
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