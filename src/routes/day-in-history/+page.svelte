<script>
  import { onMount } from 'svelte';

  let events = [];
  let isLoading = true;
  let error = null;

  onMount(async () => {
    try {
      const today = new Date();
      const month = today.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
      const day = today.getDate();

      const response = await fetch(
        `https://ru.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`
      );

      if (!response.ok) {
        throw new Error('Не удалось загрузить данные');
      }

      const data = await response.json();
      events = data.events;
    } catch (err) {
      error = err.message;
    } finally {
      isLoading = false;
    }
  });
</script>

<main>
  {#if isLoading}
    <div class="loader">Загрузка...</div>
  {:else if error}
    <div class="error">{error}</div>
  {:else}
    <div class="events-container">
    <h2>В этот день</h2>
        {#each events as event}
        <div class="event">
          <p><span style='color: DarkGoldenrod'>{event.year}</span> {event.text}</p>
        </div>
      {/each}
    </div>
  {/if}
</main>
