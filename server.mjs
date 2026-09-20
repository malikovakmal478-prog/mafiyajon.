import "dotenv/config";

import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();

const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

if (!BOT_TOKEN) {
    console.error("❌ BOT_TOKEN topilmadi.");
    process.exit(1);
}

if (!WEBAPP_URL) {
    console.error("❌ WEBAPP_URL topilmadi.");
    process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, {
    polling: true
});

app.use(express.json());

app.use(
    express.static("public")
);

app.get("/health", (req, res) => {

    res.json({
        ok: true,
        name: "UDAR MAFIA",
        status: "online"
    });

});

bot.onText(/^\/start$/, async (msg) => {

    const chatId = msg.chat.id;

    await bot.sendMessage(
        chatId,
        `☠️ UDAR MAFIA

Xush kelibsiz.

🎭 Maxfiy rollar
🔪 Mafia
🎩 Don
🩺 Doktor
🔎 Sherif
🩸 Maniak
⚖️ Ovoz berish
🎙️ Live Voice

Boshlash uchun tugmani bosing.`,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "☠️ UDAR MAFIA",
                            web_app: {
                                url: WEBAPP_URL
                            }
                        }
                    ]
                ]
            }
        }
    );

});

bot.onText(/^\/mafia$/, async (msg) => {

    const chatId = msg.chat.id;

    await bot.sendMessage(
        chatId,
        `🎭 MAFIA ARENA

O'yinchilar Mini App ichida
bir xonaga yig'iladi.

Tayyor bo'lsangiz kiring.`,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "⚡ ARENAGA KIRISH",
                            web_app: {
                                url: WEBAPP_URL
                            }
                        }
                    ]
                ]
            }
        }
    );

});

app.listen(PORT, () => {

    console.log(
        `☠️ UDAR MAFIA: ${PORT}-portda ishlayapti`
    );

});
