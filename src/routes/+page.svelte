<h1>Сайт собран при помощм sveltekit</h1>
<script>
    import Button from '$lib/components/Button.svelte';
    import { formatDate } from '$lib/utils/date.js';
    const today = formatDate(new Date());
    import { API_URL, MAX_ITEMS } from '$lib/constants/config.js';
</script>
  <p>Today is {today}</p>
<p class="vault-title">Создать Класс со шрифтом комкс vault-title</p> 
  <Button text="Button from lib" />
<ul>
    <li><a href='https://jasonstatham.fun/' target='_blank'>онлайн генератор цитат стетхэма</a></li>
    <li><a href="https://tpverstak.ru/grid/" target='_blank'>шпаргалка grid</a></li>
</ul>

    
  
  <p>API URL: {API_URL}</p>
  <p>Max items: {MAX_ITEMS}</p>

  