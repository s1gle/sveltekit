<script>
/*  Получение цитаты через api saying */
    import { onMount } from 'svelte';
	  export let data;

    let saying = data.saying;
    let error = data.error;

    async function fetchNewSaying() {
        try {
            const response = await fetch('/api/saying');
            const result = await response.json();

            if (response.ok) {
                saying = result.saying;
                error = null;
            } else {
                error = result.error || 'Не удалось загрузить.';
            }
        } catch (err) {
            error = 'Ошибка при загрузке.';
        }
    }
    // Выполняем fetchNewJoke при загрузке страницы
    onMount(() => {
        fetchNewSaying();
    });
</script>
<h1>Сайт собран при помощм sveltekit</h1>
<div class="saying-container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <p>{saying}</p>
    {/if}
</div>
<a href='https://jasonstatham.fun/' target='_blank'>онлайн генератор цитат стетхэма</a>

  <div style="display: flex; flex-direction: column">
  <h2>API</h2>
  <a href="localhost:5173/api/joke" target='_blank'>joke</a>
  </div>