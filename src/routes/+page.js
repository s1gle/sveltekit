/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
    try {
        const response = await fetch('/api/joke');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        /** @type {{ joke: string }} */
        const result = await response.json();

        return {
            joke: result.joke,
        };
    } catch (error) {
        let errorMessage = 'Не удалось загрузить анекдот.';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return {
            error: errorMessage,
        };
    }
}