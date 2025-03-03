<script context="module">
  export async function load() {
    const url = 'https://ru.wikipedia.org/w/api.php?action=parse&page=%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0&format=json&prop=text';
    const response = await fetch(url);
    const data = await response.json();

    // Парсим HTML для получения изображения дня
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.parse.text['*'], 'text/html');

    // Ищем изображение дня
    const imageElement = doc.querySelector('.mainpage-gallery img');
    let imageUrl = null;
    let description = 'Изображение дня не найдено';

    if (imageElement) {
      imageUrl = imageElement.src;
      description = imageElement.alt || 'Изображение дня';
    }

    // Если изображение не найдено, попробуем другой подход
    if (!imageUrl) {
      const imageElements = doc.querySelectorAll('img');
      for (const img of imageElements) {
        if (img.src.includes('commons')) {
          imageUrl = img.src;
          description = img.alt || 'Изображение дня';
          break;
        }
      }
    }

    return {
      props: {
        imageUrl,
        description
      }
    };
  }
</script>

<script>
  export let imageUrl;
  export let description;
</script>

<main>
  <h1>Изображение дня</h1>
  {#if imageUrl}
    <img src={imageUrl} alt={description} />
    <p>{description}</p>
  {:else}
    <p>Изображение дня не найдено.</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 2em;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin-top: 1em;
    font-size: 1.2em;
  }
</style>