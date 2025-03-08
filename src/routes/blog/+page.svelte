<!--  Страница со списком всех постов -->
<script>
    const posts = [
      { slug: 'first-post', title: 'Мой первый пост', excerpt: 'Это краткое описание первого поста.' },
      { slug: 'sveltekit', title: 'SvelteKit — это круто!', excerpt: 'Почему SvelteKit — это круто.' },
    ];
  </script>
  
  <h1>Все посты</h1>
  <ul>
    {#each posts as post}
      <li>
        <a href={`/blog/${post.slug}`}>{post.title}</a>
        <p>{post.excerpt}</p>
      </li>
    {/each}
  </ul>