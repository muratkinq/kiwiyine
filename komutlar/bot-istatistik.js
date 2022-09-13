const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
process.setMaxListeners(0);
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  //lrowsxrd 
  .setColor("F6DB00")
    .setTimestamp()
    .setAuthor("Kiwi Bot İstatistik", bot.user.avatarURL())
    .setFooter("Kiwi BOT © 2022", bot.user.avatarURL())
     .setThumbnail(bot.user.avatarURL())
   
  .addField("» **Geliştirici** ","<@446363968685080579>")
  .addField("» **Bellek Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma Süresi**", seksizaman, true) 
  .addField("» **Ping**", Math.round(bot.ws.ping), true)
  .addField("» **Sunucular**" , bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Kanallar**" , bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Kiwi.JS**","v2.0", true)
  .addField("» **Discord.JS**", "v"+Discord.version, true)
  .addField("» **Node.JS**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`Intel(R) Pentium(R) CPU G4400 @ 3.30GHz 3.30GHz\`\`\``)
  .addField("» **İşletim Sistemi**", `\`\`Windows\`\``, true)
  .addField("» **Bit**", `\`x64\``, true)
  .addField("» **Ram**", `\`4GB\``, true)
  
  
  .addField("**\n» Bağlantılar**", "➥ [**DAVET ET**](https://discord.com/oauth2/authorize?client_id=769498645350973450&scope=bot&permissions=805314616)  ➥ [**DESTEK**](https://discord.gg/zxuhPJg)  ➥ [**WEB SİTE**](https://top.gg/bot/769498645350973450)  ➥ [**OY VER**](https://top.gg/bot/769498645350973450)")
  
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["istatiskik","i","info","stats","ms","bilgi","İ","İstatistik","İSTATİSTİK","İNFO","İnfo","Bilgi","BİLGİ","bot durum","Botdurum","botdurum","bi","Bi","Bİ"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};