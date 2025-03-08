<!-- src/routes/+page.svelte -->
<script>
  // Функция для форматирования даты
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      day: 'numeric', // Число
      month: 'long'   // Месяц (строка)
    });
  };

  // Получаем сегодняшнюю дату
  const today = formatDate(new Date());
</script>
{today}