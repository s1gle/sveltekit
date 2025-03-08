<!--Главная страница (список постов).-->
<script>
    const posts = [
      { slug: 'first-post', title: 'Мой первый пост', excerpt: 'Это краткое описание первого поста.' },
      { slug: 'sveltekit', title: 'SvelteKit — это круто!', excerpt: 'Почему SvelteKit — это круто.' },
    ];
  </script>
  
  <h3>Последние посты</h3>
  <ul>
    {#each posts as post}
      <li>
        <a href={`/blog/${post.slug}`}>{post.title}</a>
        <p>{post.excerpt}</p>
      </li>
    {/each}
  </ul>



<!--

<script>
    import Today from "$lib/components/Today.svelte";
</script>
<h1>

<a href="/day-in-history"><Today /> </a> в истории
</h1>
<a href="/facts">факты</a> <br>
<a href="/advanched"><span style="font-size: 1.8em">статистика</span></a> <br>
<a href="/anime"><span style="font-size: 1.8em">галлерея</span></a> <br>
<a href="/palette">цвета</a><br>
<a href="/utilities"><span style="font-size: 1.8em">шпаргалка</span></a> флекс и грид
-->