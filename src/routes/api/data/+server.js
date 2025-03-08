import fs from 'fs/promises';
import path from 'path';

// Путь к файлу data.json
const dataPath = path.resolve('src/lib/data1.json');

// GET-запрос для получения данных
export async function GET() {
  const data = await fs.readFile(dataPath, 'utf-8');
  return new Response(data, { headers: { 'Content-Type': 'application/json' } });
}

// POST-запрос для обновления данных
export async function POST({ request }) {
  const newData = await request.json();
  await fs.writeFile(dataPath, JSON.stringify(newData, null, 2));
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}