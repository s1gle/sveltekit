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
  const randomIndex = Math.floor(Math.random() * images.length);

  // Функция для выбора случайного изображения
  const getRandomImage = () => {
    return images[randomIndex];
  };

  // При монтировании компонента выбираем случайное изображение и загружаем данные
  onMount(() => {
    randomImage = getRandomImage();
  });

/****** функция с цитатами стетхэма ********/
    export let data;

    let jokes = data.jokes || [];
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/joke');
            const result = await response.json();

            if (response.ok) {
                jokes = result.jokes || [];
                error = null;
            } else {
                error = result.error || 'Не удалось загрузить цитаты.';
            }
        } catch (err) {
            error = 'Ошибка при загрузке цитат.';
        }
    }

    // Выполняем fetchNewJoke при загрузке страницы
    onMount(() => {
        fetchNewJoke();
    });
</script>
<main>
<div class="joke-container" id="main">
    {#if error}
        <p class="error">{error}</p>
    {:else}
            {#each jokes as joke}
                <div id='joke'>{joke}</div>
            {/each}
        
    {/if}

</div>
  <!-- Раздел anime -->
  {#if randomImage}
    <img src={randomImage} alt="Случайное изображение" />
  {:else}
    <p>Загрузка изображения...</p>
  {/if}
</main>

<style>
  #main {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    max-width: 100%;
    
    margin: 5px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(250, 8, 8, 0.7);
  }

  a:hover {
    background-color: indigo;
  }
   
  .joke-container {
    padding: 0px;
    border: 0px solid #ccc;
    border-radius: 0px;
    max-width: 600px;
    margin: 0px;
    
    }
    .error {
        color: red;
    }
    #joke {
        border: 1px solid green;
        padding: 1px;
        margin: 1px;
        width: 150px;
    }
    li {
        margin-bottom: 0px;
        padding: 0px;
        border-bottom: 0px solid #eee;
    }
</style>