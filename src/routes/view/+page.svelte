<!-- src/routes/view/+page.svelte -->
<script>
    export let data;
</script>

<div class="container">
    <h1>Сохраненные данные</h1>
    
    {#if data.error}
        <div class="error">{data.error}</div>
    {:else}
        <div class="entries">
            {#each data.entries as entry}
                <div class="entry">
                    <h3>{entry.name} ({entry.email})</h3>
                    <p>{entry.message}</p>
                    <small>{new Date(entry.created).toLocaleString()}</small>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    /* Добавьте стили по необходимости */
</style>