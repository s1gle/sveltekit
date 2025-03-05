<script>
    export let data;

    let fact = data.fact;
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/fact');
            const result = await response.json();

            if (response.ok) {
                fact = result.fact;
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
        <p>{fact}</p>
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

  a {
    border: 1px solid DarkSlateGray;
    background-color: black;
    padding: 5px 10px;
    margin: 0 5px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  a:hover {
    background-color: DarkSlateGray;
  }

</style>