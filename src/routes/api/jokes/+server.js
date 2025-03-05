import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const url = 'https://jasonstatham.fun/';
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Найдите элемент, содержащий цитаты
        const jasonElement = $('body > section'); // Используем правильный селектор
        const jasonText = jasonElement.text().trim(); // Извлекаем текст и убираем лишние пробелы

        // Разделяем текст на отдельные цитаты (по строкам)
        const jasons = jasonText.split('\n').filter(line => line.trim() !== '');

        if (jasons.length > 0) {
            return new Response(JSON.stringify({ jasons }), {
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ error: 'Цитаты не найдены на странице.' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Ошибка при получении цитат.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}