<!--Страница поста-->
<script>
    import { page } from '$app/stores';
  
    const posts = [
      {
        slug: 'first-post',
        title: 'Мой первый пост',
        content: '<p>Это контент первого поста.</p>'
      },
      {
        slug: 'sveltekit',
        title: 'SvelteKit — это круто!',
        content: '<p>SvelteKit — это мощный фреймворк для веб-разработки.</p>'
      }
    ];
  
    // Находим пост по slug
    const post = posts.find((p) => p.slug === $page.params.slug);
  </script>
  
  {#if post}
    <h1>{post.title}</h1>
    <div>{@html post.content}</div>
  {:else}
    <p>Пост не найден.</p>
  {/if}