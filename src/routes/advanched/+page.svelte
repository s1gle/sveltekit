<p><a href="/emoji">emoji</a></p>

<script>
  const images = [
    '/arch/1.png',
    '/arch/2.png',
    '/arch/3.png',
    '/arch/4.png',
    '/arch/5.png',
    '/arch/6.png',
    '/arch/7.png',
    '/arch/8.png',
    '/arch/9.png',
    '/arch/10.png'
  ];
</script>

<div class="gallery">
  {#each images as image}
    <img src={image} alt="">
  {/each}
</div>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
  }

  img {
    width: 100%;
    height: auto;
    opacity: 0.9;
    transition: all 0.2s;
    border-radius: 8px;
  }

  img:hover {
    opacity: 1;
    transform: scale(1.04);
  }
</style>