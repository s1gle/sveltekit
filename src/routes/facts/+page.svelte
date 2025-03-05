<script>
    import { onMount } from 'svelte';
    export let data;

    let fact1 = data.fact1 || [];
    let fact2 = data.fact2 || [];
    let fact3 = data.fact3 || [];
    let error = data.error;

    async function fetchNewFacts() {
        try {
            const response = await fetch('/api/facts');
            const result = await response.json();

            if (response.ok) {
                fact1 = result.fact1 || [];
//                fact2 = result.fact2 || [];
                fact3 = result.fact3 || [];
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
<h4>Факт</h4>    
    {#if error}
        <p class="error">{error}</p>
    {:else}
        {fact1}
<h4>Мудрость</h4>
        <span>{fact3}</span>
    {/if}

<style>
.fact1 {
    
}
</style>