<h1>Сайт собран при помощм sveltekit</h1>
<a href="/ch">CH</a>
<script>
    import Button from '$lib/components/Button.svelte';
    import { formatDate } from '$lib/utils/date.js';
    const today = formatDate(new Date());
    import { API_URL, MAX_ITEMS } from '$lib/constants/config.js';
    import BarChart from '$lib/BarChart.svelte';
    import LineChart from '$lib/LineChart.svelte';
</script>
  <p>Today is {today}</p>
<p class="vault-title">Создать Класс со шрифтом комкс vault-title</p> 
  <Button text="Button from lib" />
<a href='https://jasonstatham.fun/' target='_blank'>онлайн генератор цитат стетхэма</a>
<a href="https://tpverstak.ru/grid/" target='_blank'>шпаргалка grid</a>
  
  <p>API URL: {API_URL}</p>
  <p>Max items: {MAX_ITEMS}</p>
  <h1>Line</h1>
  <LineChart />

<h1>Столбчатая диаграмма</h1>
<BarChart />


  