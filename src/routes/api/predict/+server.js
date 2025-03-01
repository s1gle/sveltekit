import { HF_API_URL } from '$env/static/private';

export async function POST({ request }) {
  const { inputs } = await request.json();
  const response = await fetch(HF_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.VITE_HF_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputs })
  });

  if (!response.ok) throw new Error('API request failed');
  return new Response(await response.text());
}