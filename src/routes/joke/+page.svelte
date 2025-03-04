<script>
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
</script>
<a href='https://jasonstatham.fun/' target='_blank'>онлайн генератор</a>
<div class="joke-container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <ul>
            {#each jokes as joke}
                <li>{joke}</li>
            {/each}
        </ul>
    {/if}
    <button on:click={fetchNewJoke}>Получить новые цитаты</button>
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
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
    button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #0077cc;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #005fa3;
    }
</style>