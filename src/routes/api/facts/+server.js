import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        // Первый источник: randstuff.ru/fact/
        const url1 = 'https://randstuff.ru/fact/';
        const response1 = await axios.get(url1);
        const $1 = cheerio.load(response1.data);

        // Извлекаем факт из первого источника
        const factElement1 = $1('.text'); // Используем правильный селектор
        const fact = factElement1.text().trim();

        // Третий источник: example.com (замените на реальный URL)
        const url3 = 'https://randstuff.ru/saying/'; // Пример URL
        const response3 = await axios.get(url3);
        const $3 = cheerio.load(response3.data);

        // Извлекаем шутку из третьего источника
        const sayingElement3 = $3('.text'); // Используем правильный селектор
        const saying = sayingElement3.text().trim();

        // Проверяем, удалось ли извлечь данные из всех источников
        if (fact && saying) {
            return new Response(
                JSON.stringify({ fact, saying }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        } else {
            return new Response(
                JSON.stringify({ error: 'Данные не найдены на одной из страниц.' }),
                {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Ошибка при получении данных.' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}