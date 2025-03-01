<script>
	import { onMount } from 'svelte';

	let { children } = $props();

	let seconds = $state(0);
</script>

<nav data-sveltekit-reload>
    <a href="/">home</a>
	<a href="/about">about</a>
    <a href="/advanched">advanched</a>    
</nav>

{@render children()}