import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        // Первый источник: randstuff.ru/fact/
        const url1 = 'https://randstuff.ru/fact/';
        const response1 = await axios.get(url1);
        const $1 = cheerio.load(response1.data);

        // Извлекаем факт из первого источника
        const jokeElement1 = $1('.text'); // Используем правильный селектор
        const fact1 = jokeElement1.text().trim();

        // Второй источник: anekdot.ru (пример)
        const url2 = 'https://www.anekdot.ru/random/anekdot/';
        const response2 = await axios.get(url2);
        const $2 = cheerio.load(response2.data);

        // Извлекаем анекдот из второго источника
        const jokeElement2 = $2('.text'); // Используем правильный селектор
        const fact2 = jokeElement2.text().trim();

        // Третий источник: example.com (замените на реальный URL)
        const url3 = 'https://randstuff.ru/saying/'; // Пример URL
        const response3 = await axios.get(url3);
        const $3 = cheerio.load(response3.data);

        // Извлекаем шутку из третьего источника
        const jokeElement3 = $3('.text'); // Используем правильный селектор
        const fact3 = jokeElement3.text().trim();

        // Проверяем, удалось ли извлечь данные из всех источников
        if (fact1 && fact2 && fact3) {
            return new Response(
                JSON.stringify({ fact1, fact2, fact3 }),
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