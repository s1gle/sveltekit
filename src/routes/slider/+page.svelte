<h1>Homepage</h1>
<script>
  import { onMount } from 'svelte';

  // Массив с URL-адресами изображений
  const slides = [
    '/arch/1.png',
    '/arch/2.png',
    '/arch/3.png',
    '/arch/4.png',
    '/arch/5.png'
  ];

  let currentIndex = 0; // Текущий индекс слайда

  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
  };

  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  };

  // Автоматическая прокрутка слайдов
  onMount(() => {
    const interval = setInterval(nextSlide, 5000); // Меняем слайд каждые 5 секунд
    return () => clearInterval(interval); // Очистка интервала при размонтировании
  });
</script>

<style>
  .slider {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    /*margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);*/
  }

  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .slide {
    min-width: 100%;
    box-sizing: border-box;
    text-align: center;
  }

  .slide img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .controls button {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    margin: 50px;
    cursor: pointer;
    font-size: 18px;
    transition: background 0.3s ease;
  }

  .controls button:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    .slider {
      max-width: 100%;
    }

    .controls button {
      padding: 8px;
      font-size: 16px;
    }
  }
</style>

<div class="slider">
  <div class="slides" style="transform: translateX(-{currentIndex * 100}%);">
    {#each slides as slide, index} <!-- Добавляем переменную index -->
        <div class="slide">
            <img src={slide} alt="Slide {index + 1}" />
        </div>
    {/each}
  </div>

  <div class="controls">
    <button on:click={prevSlide}>&#10094;</button>
    <button on:click={nextSlide}>&#10095;</button>
  </div>
</div>