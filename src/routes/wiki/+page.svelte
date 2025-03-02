<script>
  import { onMount } from 'svelte';

  // Массив с URL-адресами изображений
  const images = [
    '/anime/anime-1.JPG',
    '/anime/anime-2.JPG',
    '/anime/anime-3.JPG',
    '/anime/anime-4.JPG',
    '/anime/anime-5.JPG',
    '/anime/anime-6.JPG',
    '/anime/anime-7.JPG',
    '/anime/anime-8.JPG',
    '/anime/anime-9.JPG',
    '/anime/anime-10.JPG',
    '/anime/anime-11.JPG',
    '/anime/anime-12.JPG',
    '/anime/anime-13.JPG',
    '/anime/anime-14.JPG',
    '/anime/anime-15.JPG',
    '/anime/anime-16.JPG',
    '/anime/anime-17.JPG',
    '/anime/anime-18.JPG',
    '/anime/anime-19.JPG',
    '/anime/anime-20.JPG',
    '/anime/anime-21.JPG',
    '/anime/anime-22.JPG',
    '/anime/anime-23.JPG',
    '/anime/anime-24.JPG',
    '/anime/anime-25.JPG',
    '/anime/anime-26.JPG',
    '/anime/anime-27.JPG',
    '/anime/anime-28.JPG',
    '/anime/anime-29.JPG',
    '/anime/anime-2.JPG',
    '/anime/anime-1.JPG',
    '/anime/anime-3.JPG'
  ];

  let randomImage = '';
  let newsItems = [];
  let error = null; // Для отображения ошибок

  // Функция для выбора случайного изображения
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Функция для загрузки RSS-новостей через прокси
  const loadRSS = async () => {
    try {
      const response = await fetch('https://api.allorigins.win/get?url=https://ru.wikipedia.org/w/api.php?action=feedrecentchanges&feedformat=rss');
      const data = await response.json();
      const xmlText = data.contents;

      // Парсим XML с помощью DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      // Извлекаем элементы <item>
      const items = xmlDoc.querySelectorAll('item');
      newsItems = Array.from(items).slice(0, 5).map(item => ({
        title: item.querySelector('title').textContent,
        link: item.querySelector('link').textContent,
        contentSnippet: item.querySelector('description').textContent,
      }));
    } catch (err) {
      console.error('Ошибка при загрузке RSS:', err);
      error = 'Не удалось загрузить новости. Проверьте подключение к интернету.';
    }
  };

  // При монтировании компонента выбираем случайное изображение и загружаем данные
  onMount(() => {
    randomImage = getRandomImage();
    loadRSS();
  });
</script>

<main>
  <!-- Раздел RSS-новостей -->
  <div id="news">
    <h2>Последние изменения в Википедии</h2>
    {#if error}
      <p style="color: red;">{error}</p>
    {:else if newsItems.length > 0}
      <ul>
        {#each newsItems as item}
          <li>
            <a href={item.link} target="_blank">{item.title}</a>
            <p>{item.contentSnippet}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Загрузка новостей...</p>
    {/if}
  </div>

  <!-- Раздел anime -->
  {#if randomImage}
    <div id='card'><img src={randomImage} alt="Случайное изображение" /></div>
  {:else}
    <p>Загрузка изображения...</p>
  {/if}
</main>

<style>
  /* Ваши стили */
</style>