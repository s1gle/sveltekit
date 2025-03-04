<script>
    // Массив месяцев
    const months = [
        "янв.", "февр.", "март", "апр.", "май", "июнь",
        "июль", "авг.", "сент.", "окт.", "нояб.", "дек."
    ];

    // Массив дней (1–31)
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    // Множество для хранения закрашенных ячеек первой таблицы
    let coloredCellsTable1 = new Set();

    // Множество для хранения закрашенных ячеек второй таблицы
    let coloredCellsTable2 = new Set();

    // Восстанавливаем закрашенные ячейки из localStorage при загрузке страницы
    if (typeof window !== 'undefined') {
        const savedCellsTable1 = JSON.parse(localStorage.getItem('coloredCellsTable1') || '[]');
        const savedCellsTable2 = JSON.parse(localStorage.getItem('coloredCellsTable2') || '[]');
        coloredCellsTable1 = new Set(savedCellsTable1);
        coloredCellsTable2 = new Set(savedCellsTable2);
    }

    // Реактивная переменная для ввода количества ячеек
    let cellCount = 0;

    // Функция для закрашивания указанного количества ячеек в первой таблице
    function colorCellsTable1() {
        const count = parseInt(cellCount, 10);

        if (isNaN(count) || count < 0) {
            alert("Пожалуйста, введите корректное число!");
            return;
        }

        // Очищаем предыдущее закрашивание
        coloredCellsTable1.clear();

        // Закрашиваем указанное количество ячеек
        let coloredCount = 0;
        for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
            for (let day = 1; day <= days.length; day++) {
                if (coloredCount >= count) break;
                const cellKey = `${monthIndex}-${day}`;
                coloredCellsTable1.add(cellKey);
                coloredCount++;
            }
        }

        // Сохраняем закрашенные ячейки в localStorage
        localStorage.setItem('coloredCellsTable1', JSON.stringify([...coloredCellsTable1]));
    }

    // Функция для закрашивания указанного количества ячеек во второй таблице
    function colorCellsTable2() {
        const count = parseInt(cellCount, 10);

        if (isNaN(count) || count < 0) {
            alert("Пожалуйста, введите корректное число!");
            return;
        }

        // Очищаем предыдущее закрашивание
        coloredCellsTable2.clear();

        // Закрашиваем указанное количество ячеек
        let coloredCount = 0;
        for (let row = 0; row < 3; row++) {
            for (let col = 1; col <= 33; col++) {
                if (coloredCount >= count) break;
                const cellKey = `${row}-${col}`;
                coloredCellsTable2.add(cellKey);
                coloredCount++;
            }
        }

        // Сохраняем закрашенные ячейки в localStorage
        localStorage.setItem('coloredCellsTable2', JSON.stringify([...coloredCellsTable2]));
    }

    // Функция для сброса закрашенных ячеек в первой таблице
    function resetCellsTable1() {
        coloredCellsTable1.clear();
        localStorage.removeItem('coloredCellsTable1');
    }

    // Функция для сброса закрашенных ячеек во второй таблице
    function resetCellsTable2() {
        coloredCellsTable2.clear();
        localStorage.removeItem('coloredCellsTable2');
    }

    // Вычисляем количество закрашенных ячеек в первой таблице
    $: filledCountTable1 = coloredCellsTable1.size;

    // Вычисляем процент закрашенных ячеек в первой таблице
    $: totalCellsTable1 = months.length * days.length;
    $: filledPercentageTable1 = ((filledCountTable1 / totalCellsTable1) * 100).toFixed(2);

    // Вычисляем количество закрашенных ячеек во второй таблице
    $: filledCountTable2 = coloredCellsTable2.size;

    // Вычисляем процент закрашенных ячеек во второй таблице
    $: totalCellsTable2 = 3 * 33; // 3 строки и 33 столбца
    $: filledPercentageTable2 = ((filledCountTable2 / totalCellsTable2) * 100).toFixed(2);
</script>

<style>
    /* Основные стили для таблиц */
    .table-container {
        display: inline-block;
        padding: 10px 10px;
        background-color: inherit;
        color: silver;
        margin-bottom: 20px;
    }

    .table {
        display: grid;
        gap: 1px; /* Расстояние между ячейками */
    }

    .cell {
        background-color: silver;
        border: 0px solid #000;
        padding: 5px 0;
        text-align: center;
        font-size: 14px;
        width: 22px; /* Фиксированная ширина ячейки */
        height: 15px; /* Фиксированная высота ячейки */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cell.colored {
        background-color: tan; /* Цвет для закрашенных ячеек */
    }

    .header-cell {
        background-color: inherit;
        font-weight: 400;
    }

    .month-cell {
        background-color: inherit;
        font-weight: 400;
        text-align: left;
        width: 50px; /* Фиксированная ширина для месяцев */
    }

    /* Адаптация для маленьких экранов */
    @media (max-width: 600px) {
        .cell, .header-cell, .month-cell {
            font-size: 0px; /* Уменьшаем размер шрифта */
            width: 5px; /* Уменьшаем ширину ячейки */
            height: 5px; /* Уменьшаем высоту ячейки */
        }

         /* Основные стили для таблиц */
        .table-container {
            display: flex;
            padding: 0px 0px;
            background-color: inherit;
            color: silver;
            margin-bottom: 20px;
        }
        .table {
            display: grid;
            gap: 0px; /* Расстояние между ячейками */
        }

        .header-cell {
            display: none;
        }
        .month-cell {
            display: none;
           /* width: 45px;  Уменьшаем ширину столбца с месяцами */
        }
    }

    /* Стили для кнопки и текстового поля */
    .controls {
        margin-top: 10px;
    }

    .controls input {
        padding: 5px;
        font-size: 14px;
        width: 100px;
    }

    .controls button {
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
    }

    /* Стили для отображения статистики */
    .stats {
        margin-top: 10px;
        font-size: 16px;
    }
</style>

<!-- Элементы управления -->
<div class="controls">
    <input type="number" bind:value={cellCount} placeholder="Количество ячеек" min="0" max="372" />
    <button on:click={colorCellsTable1}>Закрасить таблицу 1</button>
    <button on:click={resetCellsTable1}>Сбросить таблицу 1</button>
    <button on:click={colorCellsTable2}>Закрасить таблицу 2</button>
    <button on:click={resetCellsTable2}>Сбросить таблицу 2</button>
</div>


<!-- Статистика для первой таблицы -->
<div class="stats">
    <p>Таблица 1: Закрашено ячеек: {filledCountTable1}</p>
    <p>Таблица 1: Процент закрашенных: {filledPercentageTable1}%</p>
</div>
<!-- Статистика для второй таблицы -->
<div class="stats">
    <p>Таблица 2: Закрашено ячеек: {filledCountTable2}</p>
    <p>Таблица 2: Процент закрашенных: {filledPercentageTable2}%</p>
</div>


<!-- Годы жизни таблица -->
<div class="table-container">
    <div class="table" style="grid-template-columns: repeat(33, 22px);">
        <!-- Ячейки второй таблицы -->
        {#each Array.from({ length: 3 }) as _, row}
            {#each Array.from({ length: 33 }) as _, col}
                <div
                    class="cell {coloredCellsTable2.has(`${row}-${col + 1}`) ? 'colored' : ''}"
                ></div>
            {/each}
        {/each}
    </div>
</div>

<!-- Первая таблица -->
<div class="table-container">
    <div class="table" style="grid-template-columns: 50px repeat(31, 22px);">
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
                    class="cell {coloredCellsTable1.has(`${monthIndex}-${day}`) ? 'colored' : ''}"
                ></div>
            {/each}
        {/each}
    </div>
</div>


