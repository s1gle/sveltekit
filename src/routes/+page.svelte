<script>
  let input = '';
  let result = '';
  let isLoading = false;

  async function query() {
    isLoading = true;
    try {
      const response = await fetch('/api/huggingface', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs: input })
      });

      if (!response.ok) throw new Error('Request failed');
      
      const data = await response.json();
      result = data[0]?.generated_text || 'No result';

    } catch (err) {
      result = `Error: ${err.message}`;
    } finally {
      isLoading = false;
    }
  }
</script>

<input bind:value={input} placeholder="Enter your prompt..." disabled={isLoading}>
<button on:click={query} disabled={isLoading}>
  {isLoading ? 'Processing...' : 'Submit'}
</button>

{#if result}
  <div class="result-box">
    {result}
  </div>
{/if}