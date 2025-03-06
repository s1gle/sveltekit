<script>
    import { onMount, onDestroy } from 'svelte';
    import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
    import data from './data3.json';
  
    Chart.register(PieController, ArcElement, Tooltip, Legend);
    let chart;
  
    onMount(() => {
      const ctx = document.getElementById('pieChart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'pie',
        data: data.pie,
        options: { plugins: { legend: { position: 'top' } } }
      });
    });
  
    onDestroy(() => chart?.destroy());
  </script>
  <div>
  <canvas id="pieChart"></canvas></div>