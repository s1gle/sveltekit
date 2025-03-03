<h1>Заголовок первого уровня</h1>
<h2>Заголовок второго уровня</h2>
<h3>Заголовок третьего уровня</h3>
<h4>Заголовок четвертого уровня</h4>
<h5>Заголовок пятого уровня</h5>
<h6>Заголовок шестого уровня </h6>

<script>
  import { onMount } from 'svelte';

  // Переменная для хранения данных "В этот день"
  let thisDayContent = '';
  let isLoading = true;

  // Функция для получения данных "В этот день" с Wikipedia через прокси
  async function fetchThisDayContent() {
    try {
      const proxyUrl = 'https://api.allorigins.win/raw?url='; // Прокси-сервер
      const apiUrl = 'http://www.aphorisme.ru/random/?q=2329';
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));

      // Преобразуем ответ в JSON
      const data = await response.json();

      // Извлекаем раздел "В этот день"
      const sections = data.lead.sections;
      const thisDaySection = sections.find(section => section.line === 'В этот день');

      if (thisDaySection) {
        thisDayContent = thisDaySection.text;
      } else {
        thisDayContent = 'Раздел "В этот день" не найден.';
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      thisDayContent = 'Не удалось загрузить данные.';
    } finally {
      isLoading = false;
    }
  }

  // При монтировании компонента загружаем данные
  onMount(() => {
    fetchThisDayContent();
  });
</script>

<main>
  <!-- Раздел "В этот день" -->
  <div id="this-day">
    <h2>В этот день</h2>
    {#if isLoading}
      <p>Загрузка данных...</p>
    {:else}
      {@html thisDayContent}
    {/if}
  </div>
<iframe src='http://www.aphorisme.ru/random/?q=2329'></iframe>
</main>

<style>
  #this-day {
    margin-left: 20px;
    max-width: 600px;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  #this-day h2 {
    margin-top: 0;
    color: #333;
  }

  #this-day p {
    color: #555;
  }
</style>