<h2>gallery</h2>

<script>
  const images = [
    '/gallery/poster-1.jpg',
    '/gallery/poster-2.jpg',
    '/gallery/poster-3.jpg',
    '/gallery/poster-4.jpg',
    '/gallery/poster-5.jpg',
    '/gallery/poster-6.jpg',
    '/gallery/poster-7.jpg',
    '/gallery/poster-8.jpg',
    '/gallery/poster-9.jpg',
    '/gallery/poster-10.jpg',
    '/gallery/poster-11.jpg',
    '/gallery/poster-12.jpg',
    '/gallery/poster-13.jpg',
    '/gallery/poster-14.jpg',
    '/gallery/poster-15.jpg',
    '/gallery/poster-16.jpg',
    '/gallery/poster-17.jpg',
    '/gallery/poster-18.jpg',
    '/gallery/poster-19.jpg',
    '/gallery/poster-20.jpg',
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
  ];

  let isCompact = false; // Состояние компактного режима
  let shuffledImages = [...images]; // Копия массива для перемешивания

  // Функция для переключения режима
  function toggleCompact() {
    isCompact = !isCompact;
  }

  // Функция для перемешивания картинок
  function shuffleImages() {
    shuffledImages = [...images].sort(() => Math.random() - 0.5);
  }

  // Перемешиваем картинки при загрузке страницы
  shuffleImages();
</script>

<!-- Кнопки управления -->
<div class="controls">
  <button on:click={toggleCompact}>
    {isCompact ? 'Обычный режим' : 'Компактный режим'}
  </button>
  <button on:click={shuffleImages}>Перемешать картинки</button>
</div>

<!-- Статистика -->
<div class="stats">
  <p>Количество картинок: {shuffledImages.length}</p>
</div>

<!-- Галерея -->
<div class="gallery {isCompact ? 'compact' : ''}">
  {#each shuffledImages as image, index}
    <img src={image} alt={`Poster ${index + 1}`}>
  {/each}
</div>

<style>
  .gallery {
    columns: 200px; /* Ширина колонок */
    column-gap: 10px 20px; /* Расстояние между колонками */
    padding: 10px;
  }

  .gallery.compact {
    columns: 100px; /* Уменьшаем ширину колонок в компактном режиме */
  }

  img {
    width: 100%;
    height: auto; /* Сохраняем пропорции изображений */
    opacity: 0.9;
    transition: all 0.2s;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 10px; /* Расстояние между изображениями по вертикали */
    break-inside: avoid; /* Избегаем разрыва изображений между колонками */
  }

  img:hover {
    opacity: 1;
    transform: scale(1.04);
  }

  .controls {
    margin-bottom: 10px;
  }

  button {
    padding: 5px 10px;
    background-color: black;
    color: white;
    border: 1px solid DarkSlateGray;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-right: 10px;
  }

  button:hover {
    background-color: DarkSlateGray;
  }

  .stats {
    margin-bottom: 10px;
    font-size: 16px;
  }
</style>