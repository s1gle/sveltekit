<script>
    import { onMount } from 'svelte';
    
    let contributions = [];
    let newDate = '';
    let newCount = '';
    let editIndex = null;
    let editDate = '';
    let editCount = '';
    let error = '';
    let isLoading = true;
  
    async function updateData() {
      try {
        const response = await fetch('/api/contributions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contributions)
        });
        if (!response.ok) throw new Error('Save failed');
      } catch (err) {
        error = err.message;
      }
    }
  
    async function addContribution() {
      if (newDate && newCount) {
        contributions = [...contributions, {
          date: newDate,
          count: parseInt(newCount)
        }];
        await updateData();
        newDate = '';
        newCount = '';
      }
    }
  
    async function deleteContribution(index) {
      contributions = contributions.filter((_, i) => i !== index);
      await updateData();
    }
  
    function startEdit(index) {
      editIndex = index;
      editDate = contributions[index].date;
      editCount = contributions[index].count.toString();
    }
  
    async function saveEdit() {
      if (editIndex !== null) {
        contributions[editIndex] = {
          date: editDate,
          count: parseInt(editCount)
        };
        await updateData();
        editIndex = null;
      }
    }
  
    onMount(async () => {
      try {
        const response = await fetch('/api/contributions');
        if (!response.ok) throw new Error('Failed to load');
        contributions = await response.json();
      } catch (err) {
        error = err.message;
      } finally {
        isLoading = false;
      }
    });
</script>

{#if isLoading}
  <div class="loading">Loading...</div>
{:else if error}
  <div class="error">Error: {error}</div>
{:else}
  <div class="container">
    <h2>Manage Contributions</h2>
    
    <!-- Форма добавления -->
    <div class="form">
      <input type="date" bind:value={newDate} placeholder="Date" />
      <input type="number" bind:value={newCount} placeholder="Count" />
      <button on:click={addContribution}>Add</button>
    </div>

    <!-- Таблица данных -->
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each contributions as contribution, index}
          <tr>
            <td>{contribution.date}</td>
            <td>{contribution.count}</td>
            <td>
              <button on:click={() => startEdit(index)}>Edit</button>
              <button on:click={() => deleteContribution(index)}>Delete</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    <!-- Модальное окно редактирования -->
    {#if editIndex !== null}
      <div class="modal">
        <h3>Edit Contribution</h3>
        <input type="date" bind:value={editDate} />
        <input type="number" bind:value={editCount} />
        <div class="modal-actions">
          <button on:click={saveEdit}>Save</button>
          <button on:click={() => editIndex = null}>Cancel</button>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .loading, .error {
    padding: 20px;
    text-align: center;
    font-size: 1.2rem;
  }
  
  .error {
    color: #dc3545;
    border: 1px solid #dc3545;
    background: #f8d7da;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .form {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    z-index: 1000;
  }

  .modal-actions {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
</style>