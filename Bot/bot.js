const { Telegraf } = require("telegraf");
const TOKEN = "5476521185:AAG1Q2YudVbI_EC04XHSqPME6uvmq8hwdGY";
const bot = new Telegraf(TOKEN);

//const web_link = "https://telegram-web-k3rb3mjyk-tehnoconductor.vercel.app/";
const web_link = "https://telegram-web-app-pi.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Привет. Хочешь классных водоблоков? :))))) Нажми кнопочку внизу", {
    reply_markup: {
      keyboard: [[{ text: "Заказать водоблоки", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
