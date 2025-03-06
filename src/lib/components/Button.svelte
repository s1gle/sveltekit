<script>
  // Функция для переключения размера текста
  function toggleFontSize() {
    const root = document.documentElement;
    const currentSize = getComputedStyle(root).getPropertyValue('--global-font-size').trim();
    const newSize = currentSize === '1rem' ? '1.2rem' : '1rem';
    root.style.setProperty('--global-font-size', newSize);
  }
</script>

<button on:click={toggleFontSize}>
  изм шрифт
</button>