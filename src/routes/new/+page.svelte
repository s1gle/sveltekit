<script>
  import { onMount } from 'svelte';

  // Переменные для хранения данных
  let imageOfTheDay = '';
  let description = '';
  let isLoading = true;
  let error = '';

  // Функция для получения данных "Изображение дня" с Wikipedia через прокси
  async function fetchImageOfTheDay() {
    try {
      const proxyUrl = 'https://api.allorigins.win/raw?url='; // Прокси-сервер
      const apiUrl = 'https://ru.wikipedia.org/api/rest_v1/page/mobile-sections/Заглавная_страница';
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));

      // Преобразуем ответ в JSON
      const data = await response.json();
      console.log(data); // Выводим данные в консоль для отладки

      // Извлекаем раздел "Изображение дня"
      const sections = data.lead.sections;
      const imageSection = sections.find(section => section.line === 'Изображение дня');

      if (imageSection) {
        // Извлекаем URL изображения и описание
        const imageElement = new DOMParser()
          .parseFromString(imageSection.text, 'text/html')
          .querySelector('img');

        if (imageElement) {
          imageOfTheDay = imageElement.src; // URL изображения
          description = imageElement.alt; // Описание изображения
        } else {
          error = 'Изображение не найдено в разделе.';
        }
      } else {
        error = 'Раздел "Изображение дня" не найден.';
      }
    } catch (err) {
      console.error('Ошибка при загрузке данных:', err);
      error = 'Не удалось загрузить данные.';
    } finally {
      isLoading = false;
    }
  }

  // При монтировании компонента загружаем данные
  onMount(() => {
    fetchImageOfTheDay();
  });
</script>

<main>
  <!-- Раздел "Изображение дня" -->
  <div id="image-of-the-day">
    <h2>Изображение дня</h2>
    {#if isLoading}
      <p>Загрузка данных...</p>
    {:else if error}
      <p>{error}</p>
    {:else}
      <img src={imageOfTheDay} alt={description} />
      <p>{description}</p>
    {/if}
  </div>
</main>

<style>
  #image-of-the-day {
    margin-left: 20px;
    max-width: 600px;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  #image-of-the-day h2 {
    margin-top: 0;
    color: #333;
  }

  #image-of-the-day img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  #image-of-the-day p {
    color: #555;
    margin-top: 10px;
  }
</style>