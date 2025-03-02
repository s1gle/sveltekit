<script>
  import { onMount } from 'svelte';
  import Parser from 'rss-parser';

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

  // Функция для загрузки RSS-новостей
  const loadRSS = async () => {
    try {
      const parser = new Parser();
      const feed = await parser.parseURL('https://habr.com/ru/rss/all/all/'); // URL RSS-фида
      newsItems = feed.items.slice(0, 5); // Ограничиваем количество новостей до 5
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
    <h2>Последние новости</h2>
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
  main {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(205, 205, 205, 0.7);
  }

  #card {
    width: 150px;
  }

  #news {
    margin-left: 0px;
    max-width: 500px;
  }

  #news ul {
    list-style-type: none;
    padding: 0;
  }

  #news li {
    margin-bottom: 10px;
  }

  #news a {
    text-decoration: none;
    color: #007BFF;
  }

  #news a:hover {
    text-decoration: underline;
  }
</style>