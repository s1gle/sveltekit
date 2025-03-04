<!-- src/routes/+page.svelte -->
<script>
  import QuarterlyContributionGrid from '$lib/QuarterlyContributionGrid.svelte';

  const contributions = [
    { date: '2025-01-05', count: 2 },
    { date: '2025-02-15', count: 5 },
    { date: '2025-03-20', count: 8 },
    // ... другие данные
  ];
</script>

<main>
  <h1>Quarterly Contribution Grid</h1>
  <QuarterlyContributionGrid data={contributions} />
</main>