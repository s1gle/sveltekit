<p>
  <a href="/emoji">emoji</a>
  <a href="/palette">palette</a>
</p>

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
  ];

  let isCompact = false; // Состояние компактного режима

  // Функция для переключения режима
  function toggleCompact() {
    isCompact = !isCompact;
  }
</script>

<!-- Кнопка для переключения режима -->
<button on:click={toggleCompact}>
  {isCompact ? 'Обычный режим' : 'Компактный режим'}
</button>

<div class="gallery {isCompact ? 'compact' : ''}">
  {#each images as image, index}
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

  a {
    border: 1px solid DarkSlateGray;
    background-color: black;
    padding: 5px 10px;
    margin: 0 5px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  a:hover {
    background-color: DarkSlateGray;
  }

  button {
    margin-bottom: 10px;
    padding: 5px 10px;
    background-color: black;
    color: white;
    border: 1px solid DarkSlateGray;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: DarkSlateGray;
  }
</style>