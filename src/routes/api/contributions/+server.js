import fs from 'fs/promises';
import path from 'path';

const dataPath = path.resolve('src/lib/data.json');

export async function GET() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return new Response(data, {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Data not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST({ request }) {
  try {
    const newData = await request.json();
    await fs.writeFile(dataPath, JSON.stringify(newData, null, 2));
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Save failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}