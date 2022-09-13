const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  
  const komutlar = new Discord.MessageEmbed()
  .setColor('F6DB00')
   .setTimestamp()
    .setAuthor("Kiwi Tüm Komutlar", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
  
  .setDescription(`\n\`+isimayarla\`, \`+rumuzayarla\`, \`+yaşayarla\`, \`+cinsayarla\`, \`+şehirayarla\`, \`+bölgeayarla\`, \`+ping\`, \`istatistik\`, \`+yazıtura\`, \`+kelimeoyunu\`, \`+kopuan\`, \`+banneryaz\`, \`+aşkölçer\`, \`+adamasmaca\`, \`+fbi\`, \`+155\`, \`+aduketçek\`, \`+wasted\`, \`+tersyaz\`, \`+espri\`, \`+balıktut\`, \`+taksim\`, \`+korkut\`, \`+düello\`, \`+slot\`, \`+avatar\`, \`+profilim\`, \`+kbilgi\`, \`+sbilgi\`, \`+icon\`\n\n`)
  .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
    .addField("**\n» Bağlantılar**", "➥ [**DAVET ET**](https://discord.com/oauth2/authorize?client_id=769498645350973450&scope=bot&permissions=805314616)  ➥ [**DESTEK**](https://discord.gg/zxuhPJg)  ➥ [**WEB SİTE**](https://top.gg/bot/769498645350973450)  ➥ [**OY VER**](https://top.gg/bot/769498645350973450)")

 message.channel.send(komutlar)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ['komutlar', 'tümkomutlar', 'komutlar']
}

exports.help = {
  name: 'komutlar',
  description: 'Kiwi',
  usage: 'komutlar'
}