<script>
    import { onMount } from 'svelte';
  
    // Загружаем данные из JSON
    let data = { labels: [], values: [] };
    let newLabel = '';
    let newValue = '';
    let editIndex = null; // Индекс редактируемой записи
    let editLabel = '';   // Временное значение для редактирования метки
    let editValue = '';   // Временное значение для редактирования значения
  
    // Загрузка данных при монтировании компонента
    onMount(async () => {
      const response = await fetch('/api/data');
      data = await response.json();
    });
  
    // Функция для добавления новых данных
    async function addData() {
      if (newLabel && newValue) {
        // Обновляем локальное состояние
        data.labels = [...data.labels, newLabel];
        data.values = [...data.values, parseFloat(newValue)];
  
        // Отправляем обновленные данные на сервер
        await updateData();
  
        // Очищаем поля ввода
        newLabel = '';
        newValue = '';
      }
    }
  
    // Функция для удаления данных
    async function deleteData(index) {
      data.labels = data.labels.filter((_, i) => i !== index);
      data.values = data.values.filter((_, i) => i !== index);
      await updateData();
    }
  
    // Функция для начала редактирования
    function startEdit(index) {
      editIndex = index;
      editLabel = data.labels[index];
      editValue = data.values[index];
    }
  
    // Функция для завершения редактирования
    async function saveEdit() {
      if (editIndex !== null) {
        data.labels[editIndex] = editLabel;
        data.values[editIndex] = parseFloat(editValue);
        await updateData();
        cancelEdit();
      }
    }
  
    // Функция для отмены редактирования
    function cancelEdit() {
      editIndex = null;
      editLabel = '';
      editValue = '';
    }
  
    // Функция для обновления данных на сервере
    async function updateData() {
      await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }
  </script>
  
  <!-- Форма для ввода новых данных -->
  <div>
    <label for="label">label</label>
    <input id="label" bind:value={newLabel} placeholder="" />
  
    <label for="value">value</label>
    <input id="value" bind:value={newValue} type="number" placeholder="" />
  
    <button on:click={addData}>+</button>
  </div>
  
  <!-- Отображение текущих данных -->
  <div>
    <h3>Текущие данные:</h3>
    <ul>
      {#each data.labels as label, index}
        <li>
          {label}: {data.values[index]}
          <button on:click={() => deleteData(index)}>Удалить</button>
          <button on:click={() => startEdit(index)}>Редактировать</button>
        </li>
      {/each}
    </ul>
  </div>
  
  <!-- Модальное окно для редактирования -->
  {#if editIndex !== null}
    <div class="modal">
      <h3>Редактирование</h3>
      <label for="editLabel">Метка:</label>
      <input id="editLabel" bind:value={editLabel} placeholder="Введите метку" />
  
      <label for="editValue">Значение:</label>
      <input id="editValue" bind:value={editValue} type="number" placeholder="Введите значение" />
  
      <button on:click={saveEdit}>Сохранить</button>
      <button on:click={cancelEdit}>Отмена</button>
    </div>
  {/if}
  
  <style>
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    input {
      width: 100px;
      border: 1px solid sandybrown;
    }
    /* Кнопки */
button {
  background: var(--link);
  color: var(--bg-1);
  border-radius: var(--border-radius);
  border: none;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

button:hover {
  background: var(--link-hover);
}

button:active {
  background: var(--link-active);
}

button:disabled {
  background: var(--link);
  filter: grayscale();
  opacity: 0.4;
}

  </style>