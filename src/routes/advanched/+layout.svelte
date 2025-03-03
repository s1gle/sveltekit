<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	let a = $progress;

	import { onMount } from 'svelte';

	let { children } = $props();

	let seconds = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{@render children()}

<progress value={seconds/100}></progress><span style='color: grey; font-weight: bold;'>{seconds} %</span>
<style>
	progress {
		display: block;
		width: 100%;
	}
</style>

