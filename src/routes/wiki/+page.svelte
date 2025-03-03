<script context="module">
  import axios from 'axios';
  import { browser } from '$app/environment';

  export async function load() {
    // Если код выполняется в браузере, пропускаем выполнение
    if (browser) {
      return {
        props: {
          aphorism: null
        }
      };
    }

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
  {#if aphorism}
    <p>{aphorism}</p>
  {:else}
    <p>Афоризм не загружен.</p>
  {/if}
</main>