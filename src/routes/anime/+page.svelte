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

</script>
<main>

  <!-- Раздел anime -->
  {#if randomImage}
    <img src={randomImage} alt="Случайное изображение" />
  {:else}
    <p>Загрузка изображения...</p>
  {/if}
</main>

<style>

  img {
    max-width: 100%;
    margin: 0px 10px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(250, 8, 8, 0.7);
  }

</style>