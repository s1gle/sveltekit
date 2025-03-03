<script>
  export let data;
</script>

<main>
  <h1>RSS Feeds</h1>
  {#if data.feeds}
    {#each data.feeds as feed}
      <h2>{feed.title}</h2>
      <ul>
        {#each feed.items as item}
          <li>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.contentSnippet}</p>
          </li>
        {/each}
      </ul>
    {/each}
  {:else}
    <p>Не удалось загрузить RSS-каналы.</p>
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