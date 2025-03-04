<script>
  import { onMount } from 'svelte';

  let { children } = $props();

  // Используем $state для реактивной переменной
  let currentTheme = $state('dark'); // Значение по умолчанию
  let showScrollToTop = $state(false); // Состояние видимости кнопки "Наверх"

  // Функция для переключения темы
  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', currentTheme);
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // Функция для прокрутки к началу страницы
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  }

  // Устанавливаем тему при монтировании компонента
  onMount(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        currentTheme = savedTheme;
      }

      // Отслеживаем прокрутку страницы
      window.addEventListener('scroll', handleScroll);
    }
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Убираем слушатель при уничтожении компонента
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  });

  // Обработчик прокрутки
  function handleScroll() {
    if (window.scrollY > 200) { // Показывать кнопку, если прокрутили больше 300px
      showScrollToTop = true;
    } else {
      showScrollToTop = false;
    }
  }
</script>

<style>
  #theme-toggle {
    position: relative;
    padding: 0;
    background-color: inherit;
    color: var(--bg-1);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  #scroll-to-top {
    font-size: 2.2em;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: olive;
    padding: 0px;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(20px);
  }

  #scroll-to-top.visible {
    opacity: 1;
    transform: translateY(0);
  }
/**/
  #scroll-to-top:hover {
    background-color: Peru;
  }
</style>

<nav data-sveltekit-reload>
  <a href="/"><i class="fas fa-home fa-2xl" style="color: coral;"></i></a>
  <a href="/advanched"><i class="fa-solid fa-flask fa-2xl" style="color: #B197FC;"></i></a>
  <a href="/utilities"><i class="fa-solid fa-barcode fa-2xl" style="color: black"></i></a>
  <a href="/contribution"><i class="fa-solid fa-oil-well fa-2xl"></i></a>
  
  
  <button id="theme-toggle" onclick={toggleTheme}>
    {currentTheme === 'dark' ? '🌞' : '🌙'}
  </button>
  </nav>
{@render children()}

<!-- Кнопка "Наверх" -->
<button
  id="scroll-to-top"
  class={showScrollToTop ? 'visible' : ''}
  onclick={scrollToTop}
>
  <i class="fa-solid fa-angles-up fa-2xl"></i>
</button>