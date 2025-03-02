<script>
    // Создаем массив из 30/31 элементов для генерации ячеек
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    // Множество для хранения выбранных дней
    let selectedDays = new Set();

    // Восстанавливаем выбранные дни из localStorage при загрузке страницы
    if (typeof window !== 'undefined') {
        const savedDays = JSON.parse(localStorage.getItem('selectedDays') || '[]');
        selectedDays = new Set(savedDays);
    }

    // Функция для переключения состояния ячейки (выбрана/не выбрана)
    function toggleDay(day) {
        selectedDays = new Set(selectedDays); // Создаем новое множество для реактивности
        if (selectedDays.has(day)) {
            selectedDays.delete(day); // Убираем день из выбранных
        } else {
            selectedDays.add(day); // Добавляем день в выбранные
        }
        // Сохраняем выбранные дни в localStorage
        localStorage.setItem('selectedDays', JSON.stringify([...selectedDays]));
    }

    // Функция для определения длины последовательности выбранных дней
    function getStreakLength(day) {
        let streak = 0;
        while (selectedDays.has(day - streak)) {
            streak++;
        }
        return streak;
    }

    // Функция для обработки нажатия клавиши
    function handleKeyDown(event, day) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Предотвращаем стандартное поведение (например, прокрутку при нажатии пробела)
            toggleDay(day);
        }
    }
</script>

<h1>Март</h1>
<div class="grid">
    {#each days as day}
        <button
            class="cell {selectedDays.has(day) ? 'selected' : ''}"
            style:background-color={selectedDays.has(day) ? `hsl(120, 70%, ${70 - getStreakLength(day) * 5}%)` : '#ddd'}
            on:click={() => toggleDay(day)}
            on:keydown={(e) => handleKeyDown(e, day)}
            title="День {day}"
            aria-label="День {day}"
        ></button>
    {/each}
</div>
<button style='margin-top:10px;' on:click={() => { selectedDays = new Set(); localStorage.removeItem('selectedDays'); }}>
    Сброс
</button>
<style>
    /* Основные стили для таблицы */
    .grid {
        display: grid;
        grid-template-columns: repeat(7, minmax(2px, 50px)); /* Уменьшаем размер ячеек */
        gap: 2px; /* Тонкие границы между ячейками */
        
    }

    .cell {
        width: 100%;
        padding-top: 70%; /* Делаем ячейки квадратными */
        background-color: #fff;
        border-radius: 30px; /* Радиус скругления */
        cursor: pointer;
        transition: background-color 0.3s ease;
        border: 2px solid black; /* Убираем стандартные стили кнопки */
        outline: none; /* Убираем outline по умолчанию */
        font-size: 8px; /* Уменьшаем размер шрифта */
    }

    .cell:hover {
        background-color: #333; /* Изменение цвета при наведении */
    }

    /* Адаптация для маленьких экранов */
    @media (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(7, minmax(2px, 35px)); /* Ещё меньше ячеек для мобильных устройств */
            gap: 1px;
        }

        .cell {
            font-size: 6px; /* Уменьшаем размер шрифта для мобильных устройств */
        }
    }
</style>