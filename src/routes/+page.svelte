<script>
  let input = '';
  let output = '';

  async function handleSubmit() {
    try {
      const res = await fetch('/api/predict', {
        method: 'POST',
        body: JSON.stringify({ inputs: input })
      });
      output = await res.text();
    } catch (err) {
      console.error(err);
      output = 'Error processing request';
    }
  }
</script>

<input bind:value={input}>
<button on:click={handleSubmit}>Run Model</button>
<pre>{output}</pre>