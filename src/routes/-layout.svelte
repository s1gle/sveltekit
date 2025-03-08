<script>
import Button from "../lib/components/Button.svelte";
let { children } = $props();
</script>
<nav data-sveltekit-reload>
  <a href="/"><span style="font-size: 1.8em">🏠</span></a> 
  <a href="/blog"><span style="font-size: 1.8em">Blog</span></a>
  <a href="/utilities"><span style="font-size: 1.8em">🔨</span></a>
  <Button />
  </nav>
{@render children()}