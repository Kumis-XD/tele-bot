const TelegramBot = require('node-telegram-bot-api');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please typing the API telegram bot here : ', (token) => {
  console.log(`Your token : ${token}`);
  const bot = new TelegramBot(token, { polling: true });

  bot.on('message', (msg) => {
    if (msg.text === '/start', userProfilePhotos.length > 0) {
      const username = msg.from.username;
      const userProfilePhotoId = userProfilePhotos[0][0].file_id;
      const userProfilePhotoUrl = bot.getFileLink(userProfilePhotoId);
      bot.sendMessage(chatId, `${userProfilePhotoUrl}`);
      bot.sendMessage(chatId, `Hi, ${username}!`);
      bot.sendMessage(msg.chat.id, 'Saya adalah bot Telegram. Bagaimana saya bisa membantu Anda hari ini?', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '👋 Hai',
                callback_data: 'Hai juga'
              },
              {
                text: '🤖 Bot',
                url: 'https://telegram.org/bot-faq'
              },
              {
                text: '💻 Node.js',
                url: 'https://nodejs.org'
              }
            ]
          ]
        }
      });
    }
  });
});