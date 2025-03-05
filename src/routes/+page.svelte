<h1>Сайт собран при помощм sveltekit</h1>
<h2>Ссылки на внешние источники</h2>
<ol>
    <li><a href='https://jasonstatham.fun/' target='_blank'>онлайн генератор цитат стетхэма</a></li>
    <li><a href="https://tpverstak.ru/grid/" target='_blank'>шпаргалка grid</a></li>
</ol>
<script>
    import { onMount } from 'svelte';
    export let data;

    let joke = data.joke || [];
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/facts');
            const result = await response.json();

            if (response.ok) {
                joke = result.joke || [];
                error = null;
            } else {
                error = result.error || 'Не удалось загрузить цитаты.';
            }
        } catch (err) {
            error = 'Ошибка при загрузке цитат.';
        }
    }

    // Выполняем fetchNewFacts при загрузке страницы
    onMount(() => {
        fetchNewJoke();
    });
</script>
<div class='container'>
<h4>Анекдот</h4>    
    {#if error}
        <p class="error">{error}</p>
    {:else}
        {joke}
    {/if}
</div>
<style>
.container {
    display: grid;
    margin-right: 10px;
}
</style>