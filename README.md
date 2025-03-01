[![Netlify Status](https://api.netlify.com/api/v1/badges/623cdf0f-62b7-46cd-885a-6ed190844bca/deploy-status)](https://app.netlify.com/sites/svkit/deploys)

https://svkit.netlify.app

Шаг 3: Запуск разработческого сервера
Теперь вы готовы запустить проект на локальном сервере.

Запустите следующую команду:

```bash
npm run dev
```
После этого ваш проект будет доступен по адресу http://localhost:5000. Откройте этот адрес в вашем веб-браузере, чтобы увидеть приложение.

Шаг 5: Сохранение и просмотр изменений
Сохраните изменения в файле. Благодаря работе разработческого сервера изменения будут автоматически применены, и вы увидите их в реальном времени на странице.

Теперь у вас есть простое Svelte-приложение, которое приветствует пользователя и позволяет ему вводить свое имя.

Шаг 6: Построение приложения для продакшна
Когда вы будете готовы развернуть приложение, выполните команду:

```bash
npm run build
```
Это создаст папку public с вашим готовым приложением, которое вы можете развернуть на веб-сервере или платформе хостинга.

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
