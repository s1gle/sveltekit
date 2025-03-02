<script>
    // Создаем массив из 365 элементов для генерации ячеек
    const days = Array.from({ length: 365 }, (_, i) => i + 1);

    // Множество для хранения выбранных дней
    let selectedDays = new Set();

    // Функция для переключения состояния ячейки (выбрана/не выбрана)
    function toggleDay(day) {
        selectedDays = new Set(selectedDays); // Создаем новое множество, чтобы Svelte отслеживал изменения
        if (selectedDays.has(day)) {
            selectedDays.delete(day); // Убираем день из выбранных
        } else {
            selectedDays.add(day); // Добавляем день в выбранные
        }
        console.log(selectedDays); // Для отладки: выводим выбранные дни в консоль
    }

    // Функция для обработки нажатия клавиши
    function handleKeyDown(event, day) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Предотвращаем стандартное поведение (например, прокрутку при нажатии пробела)
            toggleDay(day);
        }
    }
</script>

<h1>Таблица на 365 дней</h1>
<div class="grid">
    {#each days as day}
        <button
            class="cell {selectedDays.has(day) ? 'selected' : ''}"
            on:click={() => toggleDay(day)}
            on:keydown={(e) => handleKeyDown(e, day)}
            title="День {day}"
            aria-label="День {day}"
        ></button>
    {/each}
</div>

<style>
    /* Основные стили для таблицы */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20px, 1fr)); /* Ячейки адаптируются под ширину экрана */
        gap: 5px; /* Расстояние между ячейками */
    }

    .cell {
        width: 100%;
        padding-top: 100%; /* Делаем ячейки квадратными */
        background-color: #ddd;
        border-radius: 3px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border: none; /* Убираем стандартные стили кнопки */
        outline: none; /* Убираем outline по умолчанию */
    }

    .cell:hover {
        background-color: #ccc; /* Изменение цвета при наведении */
    }

    .cell.selected {
        background-color: #4CAF50; /* Зеленый цвет для выбранных ячеек */
    }

    /* Адаптация для маленьких экранов */
    @media (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(15px, 1fr)); /* Уменьшаем размер ячеек для телефонов */
            gap: 3px;
        }
    }
</style>