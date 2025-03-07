<script>
    import { onMount, onDestroy } from 'svelte';
    import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
    import data from './data2.json';
  
    Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);
    let chart;
  
    onMount(() => {
      const ctx = document.getElementById('lineChart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: data.line,
        options: { responsive: true }
      });
    });
  
    onDestroy(() => chart?.destroy());
  </script>
  <div style="border: 1px solid green; width: 400px; height: auto">
  <canvas id="lineChart"></canvas>
</div>