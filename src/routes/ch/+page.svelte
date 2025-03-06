<script>
    import BarChart from '$lib/BarChart.svelte';
    import LineChart from '../../lib/LineChart.svelte';
    import PieChart from '../../lib/PieChart.svelte';
    import EditData from '../../lib/EditData.svelte';
</script>
<h1>Редактирование данных</h1>
  <EditData />
<h1>Столбчатая диаграмма</h1>
<BarChart />

<h1>Line</h1>
<LineChart />

<h1>Круговая диаграмма (Pie Chart)</h1>
<PieChart />