<script>
  import QuarterlyContributionGrid from '$lib/QuarterlyContributionGrid.svelte';
  import data from '$lib/data.json';
</script>

<main>
  <h1>Quarterly Contribution Grid</h1>
  <QuarterlyContributionGrid data={data} />
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>