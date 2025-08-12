# Telegram Web App

Веб‑приложение для Telegram, позволяющее оформлять заказ на водоблоки. Фронтенд написан на React и использует Telegram WebApp API. В проект также входит простой бот на Telegraf, который отправляет пользователю кнопку с ссылкой на приложение.

## Функциональность

- Каталог товаров из `src/db/db.js`.
- Добавление и удаление позиций в корзину, счётчик на карточках.
- Подсчёт итоговой суммы и кнопка оформления заказа.
- Интеграция с `window.Telegram.WebApp`: после нажатия «Checkout» появляется `MainButton` с текстом «Pay :)».

## Стек

- React + Create React App.
- Telegram WebApp JavaScript API.
- Telegraf — Telegram‑бот.
- Node.js и npm.

## Запуск фронтенда

```bash
npm install
npm start
```

Приложение откроется на `http://localhost:3000` и будет автоматически перезагружаться при изменениях.

### Тесты

```bash
npm test
```

### Сборка production‑версии

```bash
npm run build
```

Готовые файлы появятся в папке `build`.

## Запуск Telegram‑бота

В каталоге `Bot` находится код бота.

```bash
cd Bot
npm install
```

Создайте файл `.env` и добавьте токен бота:

```
TELEGRAM_TOKEN=ваш_токен
```

Запуск:

```bash
node bot.js
```

Бот отвечает на `/start` и отправляет сообщение с кнопкой, открывающей web‑приложение.

## Структура проекта

```
src/
  Components/ — React‑компоненты (Card, Cart, Button)
  db/         — список товаров
  images/     — изображения
Bot/          — Telegram‑бот
```

