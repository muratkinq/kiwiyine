const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen yazı yazın!");
  
  let embed = new Discord.MessageEmbed()
  .setColor("F6DB00")
  .setTimestamp()
  .setAuthor("Banner Oluşturuldu")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
  
  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazı","yazıbanner","banneryaz"],
  permLevel: 0
};

module.exports.help = {
  name: 'yazı-banner',
  description: 'Yazdığınız yazıyı banner olarak atar',
  usage: 'yazıb <yazdırmak istediğiniz yazı>'
};