[![Netlify Status](https://api.netlify.com/api/v1/badges/623cdf0f-62b7-46cd-885a-6ed190844bca/deploy-status)](https://app.netlify.com/sites/svkit/deploys)

https://svkit.netlify.app

https://aceternity.sveltekit.io/

### Запуск проекта на локальном сервере.

```bash
npm run dev
```
После этого ваш проект будет доступен по адресу http://localhost:5173. Откройте этот адрес в вашем веб-браузере, чтобы увидеть приложение.

### Запуск проекта на в продакшн.

```bash
npm run build
```
Это создаст папку public с вашим готовым приложением, которое вы можете развернуть на веб-сервере или платформе хостинга.

### Cоздание локального клона.

Измените текущий рабочий каталог на тот, в который вы хотите поместить клонированный каталог.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
В SvelteKit папка `src/lib` предназначена для хранения вспомогательных функций, компонентов, утилит и других модулей, которые могут быть использованы в различных частях вашего приложения. Это удобно для организации кода и повторного использования.

Вот как можно эффективно пользоваться `src/lib` в SvelteKit:

---

### 1. **Создание компонентов в `src/lib`**
Вы можете создавать Svelte-компоненты в папке `src/lib` и использовать их в любом месте вашего приложения.

#### Пример:
Создайте компонент `Button.svelte` в `src/lib`:

```svelte
<!-- src/lib/Button.svelte -->
<script>
  export let text = "Click me";
</script>

<button>{text}</button>
```

Теперь вы можете использовать этот компонент на любой странице или в других компонентах:

```svelte
<script>
  import Button from '$lib/Button.svelte';
</script>

<Button text="Submit" />
```

---

### 2. **Создание утилит или вспомогательных функций**
В `src/lib` можно хранить JavaScript-файлы с функциями, которые могут быть использованы в вашем приложении.

#### Пример:
Создайте файл `utils.js` в `src/lib`:

```javascript
// src/lib/utils.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
```

Теперь вы можете использовать эту функцию в любом месте вашего приложения:

```svelte
<script>
  import { formatDate } from '$lib/utils.js';
  const today = formatDate(new Date());
</script>

<p>Today is {today}</p>
```

---

### 3. **Использование `$lib` для импорта**
SvelteKit предоставляет алиас `$lib`, который указывает на папку `src/lib`. Это позволяет легко импортировать модули из `src/lib` без необходимости указывать относительные пути.

#### Пример:
```javascript
import { myFunction } from '$lib/utils.js';
import MyComponent from '$lib/MyComponent.svelte';
```

---

### 4. **Организация кода в `src/lib`**
Вы можете организовать `src/lib` по подпапкам для лучшей структуры. Например:

```
src/lib/
  components/  // Svelte-компоненты
    Button.svelte
    Header.svelte
  utils/       // Вспомогательные функции
    date.js
    string.js
  constants/   // Константы
    config.js
```

Пример импорта из подпапки:

```javascript
import { formatDate } from '$lib/utils/date.js';
import Button from '$lib/components/Button.svelte';
```

---

### 5. **Использование `src/lib` для хранения констант**
Вы можете хранить константы, такие как настройки приложения, в `src/lib`.

#### Пример:
Создайте файл `config.js` в `src/lib`:

```javascript
// src/lib/config.js
export const API_URL = 'https://api.example.com';
export const MAX_ITEMS = 10;
```

Теперь вы можете использовать эти константы в вашем приложении:

```svelte
<script>
  import { API_URL, MAX_ITEMS } from '$lib/config.js';
</script>

<p>API URL: {API_URL}</p>
<p>Max items: {MAX_ITEMS}</p>
```

---

### 6. **Экспорт нескольких модулей через `index.js`**
Если у вас много файлов в `src/lib`, вы можете создать файл `index.js`, чтобы экспортировать всё из одного места.

#### Пример:
Создайте `index.js` в `src/lib`:

```javascript
// src/lib/index.js
export { default as Button } from './components/Button.svelte';
export { formatDate } from './utils/date.js';
export { API_URL, MAX_ITEMS } from './config.js';
```

Теперь вы можете импортировать всё из одного места:

```javascript
import { Button, formatDate, API_URL } from '$lib';
```

---

### 7. **Использование `src/lib` для хранения стилей**
Вы также можете хранить глобальные стили или SCSS-файлы в `src/lib` и импортировать их в компоненты.

#### Пример:
Создайте файл `styles.scss` в `src/lib`:

```scss
// src/lib/styles.scss
.button {
  background-color: blue;
  color: white;
}
```

Импортируйте стили в компонент:

```svelte
<style lang="scss">
  @import '$lib/styles.scss';
</style>

<button class="button">Click me</button>
```

---

### 8. **Использование `src/lib` для хранения TypeScript-типов**
Если вы используете TypeScript, вы можете хранить типы в `src/lib`.

#### Пример:
Создайте файл `types.ts` в `src/lib`:

```typescript
// src/lib/types.ts
export interface User {
  id: number;
  name: string;
}
```

Используйте типы в компонентах:

```svelte
<script lang="ts">
  import type { User } from '$lib/types';
  const user: User = { id: 1, name: 'John' };
</script>

<p>{user.name}</p>
```

---

### 9. **Сборка библиотеки из `src/lib` (опционально)**
Если вы хотите использовать `src/lib` как отдельную библиотеку для других проектов, вы можете настроить сборку с помощью Vite или Rollup. Это описано в предыдущем ответе.

---

### Итог
Папка `src/lib` в SvelteKit — это мощный инструмент для организации кода. Вы можете хранить там компоненты, утилиты, константы, стили и типы, а затем легко импортировать их в любую часть вашего приложения с помощью алиаса `$lib`. Это делает код более модульным, удобным для поддержки и повторного использования.

Вот примеры различных типов визуализаций с использованием Chart.js и данных из JSON в SvelteKit. Мы будем использовать разные форматы данных для каждого типа графиков.

---

### 1. **Столбчатая диаграмма (Bar Chart)**
#### `data.json`
```json
{
  "bar": {
    "labels": ["Январь", "Февраль", "Март", "Апрель", "Май"],
    "datasets": [{
      "label": "Продажи",
      "data": [12, 19, 3, 5, 2]
    }]
  }
}
```

#### `BarChart.svelte`
```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';
  import data from './data.json';

  Chart.register(BarController, CategoryScale, LinearScale, BarElement);
  let chart;

  onMount(() => {
    const ctx = document.getElementById('barChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: data.bar,
      options: { scales: { y: { beginAtZero: true } } }
    });
  });

  onDestroy(() => chart?.destroy());
</script>

<canvas id="barChart" />
```

---

### 2. **Линейный график (Line Chart)**
#### `data.json`
```json
{
  "line": {
    "labels": ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    "datasets": [{
      "label": "Температура (°C)",
      "data": [22, 19, 24, 25, 23, 26, 27],
      "borderColor": "rgb(255, 99, 132)"
    }]
  }
}
```

#### `LineChart.svelte`
```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
  import data from './data.json';

  Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);
  let chart;

  onMount(() => {
    const ctx = document.getElementById('lineChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: data.line,
      options: { responsive: true }
    });
  });

  onDestroy(() => chart?.destroy());
</script>

<canvas id="lineChart" />
```

---

### 3. **Круговая диаграмма (Pie Chart)**
#### `data.json`
```json
{
  "pie": {
    "labels": ["Красный", "Синий", "Желтый"],
    "datasets": [{
      "data": [300, 50, 100],
      "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
    }]
  }
}
```

#### `PieChart.svelte`
```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
  import data from './data.json';

  Chart.register(PieController, ArcElement, Tooltip, Legend);
  let chart;

  onMount(() => {
    const ctx = document.getElementById('pieChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'pie',
      data: data.pie,
      options: { plugins: { legend: { position: 'top' } } }
    });
  });

  onDestroy(() => chart?.destroy());
</script>

<canvas id="pieChart" />
```

---

### 4. **Радиальная диаграмма (Radar Chart)**
#### `data.json`
```json
{
  "radar": {
    "labels": ["Скорость", "Выносливость", "Сила", "Ловкость", "Интеллект"],
    "datasets": [{
      "label": "Характеристики",
      "data": [65, 59, 90, 81, 56],
      "backgroundColor": "rgba(75, 192, 192, 0.2)"
    }]
  }
}
```

#### `RadarChart.svelte`
```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
  import data from './data.json';

  Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler);
  let chart;

  onMount(() => {
    const ctx = document.getElementById('radarChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'radar',
      data: data.radar,
      options: { elements: { line: { tension: 0 } } }
    });
  });

  onDestroy(() => chart?.destroy());
</script>

<canvas id="radarChart" />
```

---

### 5. **Пузырьковая диаграмма (Bubble Chart)**
#### `data.json`
```json
{
  "bubble": {
    "datasets": [{
      "label": "Данные",
      "data": [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 10, r: 10 },
        { x: 15, y: 25, r: 20 }
      ],
      "backgroundColor": "#FF6384"
    }]
  }
}
```

#### `BubbleChart.svelte`
```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, BubbleController, LinearScale, PointElement, Tooltip } from 'chart.js';
  import data from './data.json';

  Chart.register(BubbleController, LinearScale, PointElement, Tooltip);
  let chart;

  onMount(() => {
    const ctx = document.getElementById('bubbleChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bubble',
      data: data.bubble,
      options: { scales: { x: { type: 'linear', position: 'bottom' } } }
    });
  });

  onDestroy(() => chart?.destroy());
</script>

<canvas id="bubbleChart" />
```

---

### Как использовать:
1. Создайте файл `data.json` в папке вашего проекта.
2. Для каждого типа диаграммы создайте отдельный компонент (например, `BarChart.svelte`).
3. Импортируйте компоненты на нужную страницу SvelteKit:
```svelte
<script>
  import BarChart from './BarChart.svelte';
  import LineChart from './LineChart.svelte';
</script>

<BarChart />
<LineChart />
```

---

### Важные заметки:
- Всегда регистрируйте необходимые элементы Chart.js через `Chart.register()`.
- Используйте `onDestroy` для очистки ресурсов.
- Настраивайте цвета и параметры через `options` для лучшего отображения.
- Для динамической загрузки данных можно использовать `fetch` внутри `onMount`.

Если нужно больше примеров или помощь с конкретным типом диаграммы, дайте знать! 😊