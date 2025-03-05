<h1>advanched</h1>
<p>
  <a href="/emoji">emoji</a>
  <a href="/365d">365d</a>
  <a href="/30d">30d</a> 
  <a href="/slider">slider</a>
</p>

<script>
    import { onMount } from 'svelte';
    export let data;

    let jasons = data.jasons || [];
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/jokes');
            const result = await response.json();

            if (response.ok) {
                jasons = result.jasons || [];
                error = null;
            } else {
                error = result.error || 'Не удалось загрузить цитаты.';
            }
        } catch (err) {
            error = 'Ошибка при загрузке цитат.';
        }
    }

    // Фильтруем шутки по индексам 2, 5, 6
    function filterJokes(jasons) {
        return jasons.filter((_, index) => [1, 2].includes(index));
    }

    // Выполняем fetchNewJoke при загрузке страницы
    onMount(() => {
        fetchNewJoke();
    });
</script>
<!--
<button on:click={fetchNewJokes}>Факт</button>-->
<div id="container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
            {#each filterJokes(jasons) as jason}
                <div id='joke'>{jason}</div>
            {/each}
        
    {/if}</div>
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