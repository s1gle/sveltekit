<script>
    export let data;

    let joke = data.joke;
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/joke');
            const result = await response.json();

            if (response.ok) {
                joke = result.joke;
                error = null;
            } else {
                error = result.error || 'Не удалось загрузить анекдот.';
            }
        } catch (err) {
            error = 'Ошибка при загрузке анекдота.';
        }
    }
</script>

<div class="joke-container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <p>{joke}</p>
    {/if}
    <button on:click={fetchNewJoke}>Получить новый анекдот</button>
</div>

<style>
    .joke-container {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
    .error {
        color: red;
    }
</style>