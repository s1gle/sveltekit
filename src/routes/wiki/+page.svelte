<script>
  import { onMount } from 'svelte';

  let newsItems = [];
  let error = null; // Для отображения ошибок

  // Функция для извлечения изображений из HTML-контента
  const extractImageFromHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null; // Возвращаем src изображения или null, если изображение не найдено
  };

  // Функция для загрузки RSS-новостей через прокси
  const loadRSS = async () => {
    try {
      const response = await fetch('https://api.allorigins.win/get?url=http://www.aphorisme.ru/xml/5_days_aphor.xml');
      const data = await response.json();
      const xmlText = data.contents;

      // Парсим XML с помощью DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      // Извлекаем элементы <item>
      const items = xmlDoc.querySelectorAll('item');
      newsItems = Array.from(items).slice(0, 5).map(item => {
        const description = item.querySelector('description').textContent;
        const image = extractImageFromHTML(description); // Извлекаем изображение из HTML

        return {
          title: item.querySelector('title').textContent,
          link: item.querySelector('link').textContent,
          contentSnippet: description,
          image: image, // Добавляем изображение в объект новости
        };
      });
    } catch (err) {
      console.error('Ошибка при загрузке RSS:', err);
      error = 'Не удалось загрузить новости. Проверьте подключение к интернету.';
    }
  };

  // При монтировании компонента загружаем данные
  onMount(() => {
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
            {#if item.image}
              <img src={item.image} alt={item.title} style="max-width: 100%; height: auto; margin-bottom: 10px;" />
            {/if}
            <a href={item.link} target="_blank">{item.title}</a>
            <p>{item.contentSnippet}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Загрузка новостей...</p>
    {/if}
  </div>
</main>

<style>
  /* Ваши стили */
  #news {
    width: 90%;
    margin: 0 auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin: 5px 0;
    color: #555;
  }
</style>