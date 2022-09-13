const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  
  .setColor("F6DB00")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
   const only = new Discord.MessageEmbed()
    
  .setColor("F6DB00")
   .setDescription(` **Ping**; ${app.ws.ping} ms`)
  .setFooter("Kiwi BOT © 2022");

   
    mesaj.edit(only);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ms','ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Kinda Code & Only V12.',
  usage: 'ping'
};