require("dotenv").config();
const { Telegraf } = require("telegraf");
const TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new Telegraf(TOKEN);

const web_link = "https://b2b.moysklad.ru/public/EmKrZ93r2kJM/";
//const web_link = "https://telegram-web-app-pi.vercel.app/";
bot.start((ctx) =>
  ctx.reply("Привет. Хочешь классных водоблоков? :))))) Нажми кнопочку внизу", {
    reply_markup: {
      keyboard: [[{ text: "Заказать водоблоки", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
