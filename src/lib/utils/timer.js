    import { onMount } from 'svelte';
    export let data;
  
    let fact = data.fact || '';
    let saying = data.saying || '';
    let error = data.error;
  
    async function fetchNewFacts() {
      try {
        const response = await fetch('/api/facts');
        const result = await response.json();
  
        if (response.ok) {
          fact = result.fact || '';
          saying = result.saying || '';
          error = null;
        } else {
          error = result.error || 'Не удалось загрузить цитаты.';
        }
      } catch (err) {
        error = 'Ошибка при загрузке цитат.';
      }
    }
  
    // Опционально: загрузить данные при монтировании компонента
    