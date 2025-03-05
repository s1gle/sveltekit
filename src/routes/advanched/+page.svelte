<h1>advanched</h1>
<p>
  <a href="/emoji">emoji</a>
  <a href="/365d">365d</a>
  <a href="/30d">30d</a> 
  <a href="/slider">slider</a>
</p>

<script>
    export let data;

    let fact = data.fact;
    let error = data.error;
    let saying = data.saying;

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


/*  Получение цитаты через api saying
    import { onMount } from 'svelte';
    export let data; */
/*
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
    // Выполняем fetchNewSaying при загрузке страницы
    onMount(() => {
        fetchNewSaying();
    });*/
    
</script>
<div class="saying-container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <p>{saying}</p>
    {/if}
</div>
<div class="container">
    <button on:click={fetchNewJoke}>Факт</button>
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <div id="fact">{fact}</div>
    {/if}
    
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 0.1fr 1fr;
        gap: 15px;
        border-top: 2px solid gray;
    }

    #fact {
        padding: 10px;
    }
    .error {
        color: red;
    }

  a, button {
    border: 1px solid DarkSlateGray;
    background-color: black;
    padding: 5px 10px;
    margin: 5px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  a:hover, button:hover {
    background-color: DarkSlateGray;
  }

</style>