
<script>
    // Массив месяцев
    const months = [
        "янв.", "февр.", "март", "апр.", "май", "июнь",
        "июль", "авг.", "сент.", "окт.", "нояб.", "дек."
    ];

    // Массив дней (1–31)
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    // Множество для хранения закрашенных ячеек
    let coloredCells = new Set();

    // Восстанавливаем закрашенные ячейки из localStorage при загрузке страницы
    if (typeof window !== 'undefined') {
        const savedCells = JSON.parse(localStorage.getItem('coloredCells') || '[]');
        coloredCells = new Set(savedCells);
    }

    // Индекс следующей ячейки для закрашивания
    let nextCellIndex = 0;

    // Функция для закрашивания следующей ячейки
    function colorNextCell() {
        if (nextCellIndex < months.length * days.length) {
            const cellKey = `${Math.floor(nextCellIndex / 31)}-${nextCellIndex % 31 + 1}`;
            coloredCells = new Set(coloredCells); // Создаем новое множество для реактивности
            coloredCells.add(cellKey); // Добавляем ячейку в закрашенные
            nextCellIndex++; // Увеличиваем индекс следующей ячейки
            // Сохраняем закрашенные ячейки в localStorage
            localStorage.setItem('coloredCells', JSON.stringify([...coloredCells]));
        }
    }
</script>

<style>
    /* Основные стили для таблицы */
    .table-container {
        display: inline-block;
        padding: 10px;
        background-color: #f0f0f0;
    }

    .table {
        display: grid;
        grid-template-columns: 50px repeat(31, 20px); /* 31 столбец для дней + 50px для месяцев */
        gap: 2px; /* Расстояние между ячейками */
    }

    .cell {
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 5px;
        text-align: center;
        font-size: 12px;
        width: 20px; /* Фиксированная ширина ячейки */
        height: 20px; /* Фиксированная высота ячейки */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cell.colored {
        background-color: darkblue; /* Зелёный цвет для закрашенных ячеек */
    }

    .header-cell {
        background-color: #e0e0e0;
        font-weight: bold;
    }

    .month-cell {
        background-color: #e0e0e0;
        font-weight: bold;
        text-align: left;
        width: 50px; /* Фиксированная ширина для месяцев */
    }

    /* Адаптация для маленьких экранов */
    @media (max-width: 600px) {
        .cell, .header-cell, .month-cell {
            font-size: 10px; /* Уменьшаем размер шрифта */
            width: 15px; /* Уменьшаем ширину ячейки */
            height: 15px; /* Уменьшаем высоту ячейки */
        }

        .month-cell {
            width: 45px; /* Уменьшаем ширину столбца с месяцами */
        }

        .table {
            grid-template-columns: 45px repeat(31, 15px); /* Уменьшаем ширину столбцов */
        }
    }

    /* Стили для кнопки */
    .button {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    }

    .button:hover {
        background-color: #45a049;
    }
</style>

<div class="table-container">
    <div class="table">
        <!-- Пустая ячейка в левом верхнем углу -->
        <div class="cell header-cell"></div>

        <!-- Заголовок с днями -->
        {#each days as day}
            <div class="cell header-cell">{day}</div>
        {/each}

        <!-- Месяцы и ячейки -->
        {#each months as month, monthIndex}
            <div class="cell month-cell">{month}</div>
            {#each days as day}
                <div
                    class="cell {coloredCells.has(`${monthIndex}-${day}`) ? 'colored' : ''}"
                ></div>
            {/each}
        {/each}
    </div>

    <!-- Кнопка для закрашивания следующей ячейки -->
    <button class="button" on:click={colorNextCell}>+</button>
    <button class="button" on:click={() => { coloredCells = new Set(); nextCellIndex = 0; localStorage.removeItem('coloredCells'); }}>
    Сброс</button>
</div>