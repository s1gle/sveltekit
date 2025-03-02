<script>
	import { onMount } from 'svelte';

	let { children } = $props();
</script>

<nav data-sveltekit-reload>
    <a href="/">home</a>
	<a href="/about">about</a>
    <a href="/advanched">advanched</a>
	<a href="/slider">slider</a>
	<a href="/kalendarik-pinarik">pinarik</a> 
</nav>

{@render children()}