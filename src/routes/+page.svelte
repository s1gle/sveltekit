<h1>Homepage🏢📈6️⃣</h1>

<script>
  import Gallery from 'svelte-image-gallery';
</script>

<Gallery gap="10" maxColumnWidth="200">
  <img src="/arch/1.png" alt="">
  <img src="/arch/2.png" alt="">
  <img src="/arch/10.png" alt="">
  <img src="/arch/3.png" alt="">
  <img src="/arch/4.png" alt="">
  <img src="/arch/5.png" alt="">
  <img src="/arch/6.png" alt="">
  <img src="/arch/7.png" alt="">
  <img src="/arch/9.png" alt="">
</Gallery>

<style>
  :global(img) {
    opacity: 0.9;
    transition: all 0.2s;
  }

  :global(img:hover) {
    opacity: 1;
    transform: scale(1.04);
  }
</style>