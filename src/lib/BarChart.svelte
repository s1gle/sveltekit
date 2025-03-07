<script>
    import { onMount, onDestroy } from 'svelte';
    import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';
    import data from './data1.json'; // Импортируем данные из JSON
  
    // Регистрируем необходимые компоненты Chart.js
    Chart.register(BarController, CategoryScale, LinearScale, BarElement);
  
    let chart;
  
    // Создаем диаграмму после монтирования компонента
    onMount(() => {
      const ctx = document.getElementById('barChart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels, // Метки из JSON
          datasets: [{
            label: 'Продажи',
            data: data.values, // Данные из JSON
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  
    // Уничтожаем диаграмму при удалении компонента
    onDestroy(() => {
      if (chart) {
        chart.destroy();
      }
    });
  </script>
  
  <!-- Контейнер для диаграммы -->
  <div style="border: 1px solid green; width: 400px; height: auto">
    <canvas id="barChart"></canvas>
  </div>