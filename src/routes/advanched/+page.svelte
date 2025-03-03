<h1>advanched</h1>
<p>
  <a href="/emoji">emoji</a>
  <a href="/palette">palette</a>
  <a href="/365d">365d</a>
  <a href="/30d">30d</a> 
  <a href="/slider">slider</a>
</p>

<script>
    export let data;

    let joke = data.joke;
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/fact');
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