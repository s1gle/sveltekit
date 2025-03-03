<script context="module">
  import Parser from 'rss-parser';

  export async function load() {
    const parser = new Parser();
    const feed = await parser.parseURL('http://www.aphorisme.ru/xml/5_days_aphor.xml');

    return {
      props: {
        items: feed.items
      }
    };
  }
</script>

<script>
  export let items;
</script>

<h1>Афоризмы</h1>

<ul>
  {#each items as item}
    <li>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <p><small>{item.pubDate}</small></p>
    </li>
  {/each}
</ul>