<script context="module">
  import axios from 'axios';

  export async function load() {
    try {
      const response = await axios.get('http://www.aphorisme.ru/random/?q=2329');
      return {
        props: {
          aphorism: response.data
        }
      };
    } catch (error) {
      return {
        status: 500,
        error: new Error('Не удалось загрузить афоризм')
      };
    }
  }
</script>

<script>
  export let aphorism;
</script>

<main>
  <h1>Случайный афоризм</h1>
  <p>{aphorism}</p>
</main>