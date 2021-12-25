const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config();


// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, ` Hello ${msg.chat.username}, this is our information
/twitter - twitter link
/facebook - facebook link
/telegram - our telegram group
/github - our github
/about - about us
/website - our website
/whitepaper - our whitepaper
/token - token address`
    );
  });

  bot.onText(/\/twitter/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.TWITTER_LINK}`
    );
  });

  bot.onText(/\/facebook/, (msg) => {
    const chatId = msg.chat.id;
  
    bot.sendMessage(
      chatId, `${process.env.FACEBOOK_LINK}`
    );
  });

  bot.onText(/\/telegram/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.TELEGRAM_LINK}`
    );
  });

  bot.onText(/\/github/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.GITHUB_LINK}`
    );
  });

  bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.ABOUT_LINK}`
    );
  });

  bot.onText(/\/website/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.WEBSITE_LINK}`
    );
  });

  bot.onText(/\/whitepaper/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.WHITEPAPER}`);
  });

  bot.onText(/\/token/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `${process.env.TOKEN_ADDRESS}`);
  });

  bot.onText('message', (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId, `Hello ${msg.chat.username}, you can contact with ${process.env.ADMIN} for more information`);
  })