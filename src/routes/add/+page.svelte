<!-- src/routes/add/+page.svelte -->
<script>
    import { enhance } from "$app/forms";
    
    export let data;
    let formData = {
        name: '',
        email: '',
        message: ''
    };
</script>

<div class="container">
    <h1>Добавить запись</h1>
    
    {#if data?.form?.success}
        <div class="success">Данные успешно сохранены!</div>
    {:else if data?.form?.error}
        <div class="error">Ошибка: {data.form.error}</div>
    {/if}

    <form method="POST" use:enhance>
        <div class="form-group">
            <label for="name">Имя:</label>
            <input 
                id="name" 
                name="name" 
                type="text" 
                bind:value={formData.name}
                required
            >
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input 
                id="email" 
                name="email" 
                type="email" 
                bind:value={formData.email}
                required
            >
        </div>

        <div class="form-group">
            <label for="message">Сообщение:</label>
            <textarea 
                id="message" 
                name="message" 
                bind:value={formData.message}
                required
            ></textarea>
        </div>

        <button type="submit">Сохранить</button>
    </form>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    input, textarea {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }

    textarea {
        height: 120px;
    }

    button {
        background: #007bff;
        color: white;
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
    }

    .success {
        color: green;
        padding: 1rem;
        margin: 1rem 0;
        border: 1px solid green;
        border-radius: 4px;
    }

    .error {
        color: red;
        padding: 1rem;
        margin: 1rem 0;
        border: 1px solid red;
        border-radius: 4px;
    }
</style>