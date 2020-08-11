const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzM5Mzk5MjA5MDY0NTk1NDU4.XyZ5LA.m4FRlEhQEcdznmV_l-tYPfpjJpE';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);