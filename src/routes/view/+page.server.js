// src/routes/view/+page.server.js
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.resolve('static/data.json');

export async function load() {
    try {
        const fileContents = await fs.readFile(DATA_PATH, 'utf-8');
        const entries = JSON.parse(fileContents);
        return { entries };
    } catch (error) {
        return { error: 'Не удалось загрузить данные' };
    }
}