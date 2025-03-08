<script>import "../app.css";
import Button from "../lib/components/Button.svelte";
let { children } = $props();</script>

<nav data-sveltekit-reload>
  <a href="/"><span style="font-size: 1.8em">🏠</span></a>  
  <a href="/facts"><span style="font-size: 1.8em">📆</span></a>
  <a href="/advanched"><span style="font-size: 1.8em">🉐</span></a>
  <a href="/anime"><span style="font-size: 1.8em">📺</span></a>
  
  <a href="/utilities"><span style="font-size: 1.8em">🔨</span></a>
  <Button></Button>
  </nav>
{@render children()}

