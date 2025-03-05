// src/routes/add/+page.server.js
import { fail } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.resolve('static/data.json');

/**
 * @type {import('@sveltejs/kit').Actions}
 */
export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const data = {
                name: String(formData.get('name')),
                email: String(formData.get('email')),
                message: String(formData.get('message'))
            };

            // Валидация
            if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
                return fail(400, { 
                    error: 'Все поля обязательны для заполнения',
                    success: false
                });
            }

            // Чтение и обновление файла
            let existingData = [];
            try {
                const fileContents = await fs.readFile(DATA_PATH, 'utf-8');
                existingData = JSON.parse(fileContents);
            } catch (err) {
                // Проверяем, является ли ошибка объектом и имеет ли свойство code
                if (typeof err === 'object' && err !== null && 'code' in err && err.code === 'ENOENT') {
                    await fs.writeFile(DATA_PATH, JSON.stringify([]));
                } else {
                    throw err;
                }
            }

            existingData.push({
                ...data,
                id: Date.now(),
                created: new Date().toISOString()
            });

            await fs.writeFile(DATA_PATH, JSON.stringify(existingData, null, 2));

            return { success: true };
        } catch (error) {
            console.error('Ошибка сохранения:', error);
            let errorMessage = 'Внутренняя ошибка сервера';
            
            // Проверяем, является ли ошибка объектом Error
            if (error instanceof Error) {
                errorMessage = error.message;
            }

            return fail(500, { 
                error: errorMessage,
                success: false
            });
        }
    }
};