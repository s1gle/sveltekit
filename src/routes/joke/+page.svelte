<script>
    import { onMount } from 'svelte';
    export let data;

    let jokes = data.jokes || [];
    let error = data.error;

    async function fetchNewJoke() {
        try {
            const response = await fetch('/api/joke');
            const result = await response.json();

            if (response.ok) {
                jokes = result.jokes || [];
                error = null;
            } else {
                error = result.error || 'Не удалось загрузить цитаты.';
            }
        } catch (err) {
            error = 'Ошибка при загрузке цитат.';
        }
    }

    // Фильтруем шутки по индексам 2, 5, 6
    function filterJokes(jokes) {
        return jokes.filter((_, index) => [2, 5, 6].includes(index));
    }

    // Выполняем fetchNewJoke при загрузке страницы
    onMount(() => {
        fetchNewJoke();
    });
</script>

<div class="joke-container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <ul>
            {#each filterJokes(jokes) as joke}
                <li>{joke}</li>
            {/each}
        </ul>
    {/if}
</div>

<a href='https://jasonstatham.fun/' target='_blank'>онлайн генератор</a>

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
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
</style>