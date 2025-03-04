<!-- src/lib/QuarterlyContributionGrid.svelte -->
<script>
  export let data = [];

  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const QUARTERS = [
    [0, 1, 2],   // Q1: Jan-Mar
    [3, 4, 5],   // Q2: Apr-Jun
    [6, 7, 8],   // Q3: Jul-Sep
    [9, 10, 11]  // Q4: Oct-Dec
  ];

  let today = new Date();
  let months = [];
  let tooltip = { show: false, x: 0, y: 0, date: null, count: 0 };
  let dateCountMap = {};

  // Инициализация данных
  function initialize() {
    today.setHours(0, 0, 0, 0);
    const year = today.getFullYear();
    
    // Создаем структуру месяцев
    months = Array.from({ length: 12 }, (_, i) => {
      const firstDay = new Date(year, i, 1);
      const lastDay = new Date(year, i + 1, 0);
      return {
        name: MONTH_NAMES[i],
        firstDay,
        lastDay,
        weeks: []
      };
    });

    // Заполняем недели для каждого месяца
    months.forEach(month => {
      const start = new Date(month.firstDay);
      start.setDate(start.getDate() - start.getDay()); // Начинаем с понедельника
      
      const end = new Date(month.lastDay);
      end.setDate(end.getDate() + (6 - end.getDay())); // Заканчиваем воскресеньем

      const weeks = [];
      let current = new Date(start);
      
      while (current <= end) {
        const week = Array.from({ length: 7 }, (_, i) => {
          const date = new Date(current);
          date.setDate(date.getDate() + i);
          return date;
        });
        weeks.push(week);
        current.setDate(current.getDate() + 7);
      }
      
      month.weeks = weeks;
    });

    // Создаем карту дат
    data.forEach(item => {
      const date = new Date(item.date);
      date.setHours(0, 0, 0, 0);
      const key = date.toISOString().split('T')[0];
      dateCountMap[key] = item.count;
    });
  }

  $: initialize();

  function getCount(date) {
    const key = date.toISOString().split('T')[0];
    return dateCountMap[key] || 0;
  }

  function getColor(count) {
    if (count === 0) return '#ebedf0';
    if (count <= 3) return '#9be9a8';
    if (count <= 6) return '#40c463';
    if (count <= 9) return '#30a14e';
    return '#216e39';
  }

  function showTooltip(e, date, count) {
    tooltip = { 
      show: true,
      x: e.clientX,
      y: e.clientY,
      date,
      count
    };
  }

  function hideTooltip() {
    tooltip.show = false;
  }
</script>

<div class="container">
  {#each QUARTERS as quarter, qIndex}
    <div class="quarter">
      {#each quarter as monthIndex}
        <div class="month">
          <div class="month-header">{months[monthIndex].name}</div>
          <div class="month-grid">
            {#each months[monthIndex].weeks as week, wIndex}
              {#each week as day, dIndex}
                <div
                  class="day"
                  class:outside-month={day < months[monthIndex].firstDay || day > months[monthIndex].lastDay}
                  style="background-color: {getColor(getCount(day))}"
                  on:mouseover={(e) => showTooltip(e, day, getCount(day))}
                  on:mouseout={hideTooltip}
                />
              {/each}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

{#if tooltip.show}
  <div
    class="tooltip"
    style="left: {tooltip.x + 10}px; top: {tooltip.y + 10}px"
  >
    <div class="tooltip-date">{tooltip.date.toLocaleDateString()}</div>
    <div class="tooltip-count">Contributions: {tooltip.count}</div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  .quarter {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .month {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .month-header {
    font-size: 0.8rem;
    color: #666;
    height: 20px;
    text-align: left;
  }

  .month-grid {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(7, 1fr);
    gap: 2px;
  }

  .day {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    transition: transform 0.1s ease;
  }

  .day.outside-month {
    background-color: transparent !important;
    opacity: 0.3;
  }

  .day:hover {
    transform: scale(1.3);
    z-index: 1;
  }

  .tooltip {
    position: fixed;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    z-index: 100;
  }

  .tooltip-date {
    color: #666;
    margin-bottom: 4px;
  }

  .tooltip-count {
    font-weight: 600;
    color: #333;
  }
</style>