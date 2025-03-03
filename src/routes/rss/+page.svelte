<script lang="ts">
  import { getRssFeed } from '$lib/rss';

  export let data: { feed: import('rss-parser').Output | null };
</script>

<main>
  <h1>RSS Feed</h1>
  {#if data.feed}
    <ul>
      {#each data.feed.items as item}
        <li>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          <p>{item.contentSnippet}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Не удалось загрузить RSS-канал.</p>
  {/if}
</main>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #0077cc;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin: 0.5rem 0 0;
    color: #555;
  }
</style>