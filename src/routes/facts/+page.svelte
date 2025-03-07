<script>
    import { formatDate } from '$lib/utils/date.js';
    const today = formatDate(new Date());
    import { onMount } from 'svelte';
    export let data;

    let fact = data.fact || [];
    let saying = data.saying || [];
    let error = data.error;

    async function fetchNewFacts() {
        try {
            const response = await fetch('/api/facts');
            const result = await response.json();

            if (response.ok) {
                fact = result.fact || [];
                saying = result.saying || [];
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
        fetchNewFacts();
    });
</script>
Today is {today}
<div class='container'>
<h4>Факт</h4>    
    {#if error}
        <p class="error">{error}</p>
    {:else}
        {fact}
<h4>Мудрость</h4>
        {saying}
    {/if}
</div>
<style>
.container {
    display: grid;
    margin-right: 10px;
}
</style>