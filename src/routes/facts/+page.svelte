<script>
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
  onMount(() => {
    fetchNewFacts();
  });
</script>

<button on:click={fetchNewFacts}>Обновить</button>

<div class='container'>
  {#if error}
    <p class="error">{error}</p>
  {:else}
  <blockquote>{fact}</blockquote>
    <blockquote>{saying}</blockquote>
  {/if}
</div>

<style>

  .error {
    color: red;
    font-weight: bold;
  }

</style>