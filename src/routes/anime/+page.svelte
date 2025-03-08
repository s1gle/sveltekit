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
  let progress = 0; // Прогресс для progressbar

  // Функция для выбора случайного изображения
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // При монтировании компонента выбираем случайное изображение и запускаем интервал
  onMount(() => {
    randomImage = getRandomImage(); // Устанавливаем первое изображение

    const interval = setInterval(() => {
      randomImage = getRandomImage(); // Обновляем изображение каждые 35 секунд
      progress = 0; // Сбрасываем прогресс
      startProgressBar(); // Запускаем анимацию progressbar
    }, 35000);

    startProgressBar(); // Запускаем анимацию progressbar при первой загрузке

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  });

  // Функция для анимации progressbar
  const startProgressBar = () => {
    const duration = 35000; // 35 секунд
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      progress = (elapsed / duration) * 100; // Вычисляем прогресс

      if (elapsed < duration) {
        requestAnimationFrame(animate); // Продолжаем анимацию
      } else {
        progress = 100; // Завершаем анимацию
      }
    };

    requestAnimationFrame(animate);
  };
</script>

<main>
  <!-- Раздел anime -->
  {#if randomImage}
    <div class="image-container">
      <img src={randomImage} alt="Случайное изображение" />
      <!-- Круглый прогрессбар -->
      <svg class="progressbar" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          class="progressbar-background"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          class="progressbar-fill"
          stroke-dasharray={2 * Math.PI * 45}
          stroke-dashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
        />
      </svg>
    </div>
  {:else}
    <p>Загрузка изображения...</p>
  {/if}
  <a href="/gallery">gallery</a>
</main>

<style>
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .progressbar {
    position: relative;
    width: 50px;
    height: 100%;
    transform: rotate(-90deg); /* Начинаем анимацию с верхней точки */
  }

  .progressbar-background {
    fill: none;
    stroke: inherit;
    stroke-width: 10;
  }

  .progressbar-fill {
    fill: none;
    stroke: darkslategray;
    stroke-width: 10;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.1s linear; /* Плавное обновление */
  }
</style>