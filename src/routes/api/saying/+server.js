import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const url = 'https://randstuff.ru/saying/';
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Найдите элемент, содержащий анекдот
        const sayingElement = $('.text'); // Используем правильный ID
        const saying = sayingElement.text().trim(); // Извлекаем текст и убираем лишние пробелы
        if (saying) {
            return new Response(JSON.stringify({ saying }), {
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ error: 'saying не найден на странице.' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Ошибка при получении saying.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}