<script>
  import { onMount } from 'svelte';

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
    position: static;
    top: 100px;
    right: 10px;
    color: var(--bg-1);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  #scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
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
</style>

<button id="theme-toggle" onclick={toggleTheme}>
  {currentTheme === 'dark' ? 'light' : 'dark'}
</button>

<!-- Кнопка "Наверх" -->
<button
  id="scroll-to-top"
  class={showScrollToTop ? 'visible' : ''}
  onclick={scrollToTop}
>
Up
</button>