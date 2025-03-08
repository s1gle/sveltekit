    // Функция для форматирования даты
   export const formatDate = (date) => {
      return new Date(date).toLocaleDateString();
    };
  
    // Получаем сегодняшнюю дату
    const today = formatDate(new Date());
