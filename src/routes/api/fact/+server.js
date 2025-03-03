import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const url = 'https://randstuff.ru/fact/';
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Найдите элемент, содержащий анекдот
        const jokeElement = $('.text'); // Используем правильный ID
        const joke = jokeElement.text().trim(); // Извлекаем текст и убираем лишние пробелы#result_anekdot
        if (joke) {
            return new Response(JSON.stringify({ joke }), {
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ error: 'Анекдот не найден на странице.' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Ошибка при получении анекдота.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}