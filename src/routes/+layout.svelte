<script>
  import { onMount } from 'svelte';

  let { children } = $props();

  // Используем $state для реактивной переменной
  let currentTheme = $state('dark'); // Значение по умолчанию

  // Функция для переключения темы
  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', currentTheme);
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // Устанавливаем тему при монтировании компонента
  onMount(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        currentTheme = savedTheme;
      }
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
  });
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
/*
  #theme-toggle:hover {
    background-color: var(--link-hover);
  }*/
</style>

<nav data-sveltekit-reload>
  <a href="/">home</a>
  <a href="/about">about</a>
  <a href="/advanched">advanched</a>
  <a href="/slider">slider</a>
  <a href="/kalendarik-pinarik">pinarik</a>
  <button id="theme-toggle" onclick={toggleTheme}>
  {currentTheme === 'dark' ? '🌞' : '🌙'}
  </button>
</nav>

{@render children()}