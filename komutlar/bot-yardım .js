const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  
  const embed = new Discord.MessageEmbed()
  .setColor('F6DB00')
   .setTimestamp()
    .setTitle("Kiwi Bot Yardım Menüsü", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
  .setDescription(`\n**Profil Komutları**\n\`+isimayarla\`, \`+rumuzayarla\`, \`+yaşayarla\`, \`+cinsayarla\`, \`+şehirayarla\`, \`+bölgeayarla\`\n\n**Bot Komutları**\n\`+yardım\`, \`+istatistik\`, \`+komutlar\`, \`+ping\`, \`+yapımcım\`, \`+davet\`\n\n**Eğlence Komutları**\n\`+yazıtura\`, \`+kelimeoyunu\`, \`+kopuan\`, \`+banneryaz\`, \`+yazkazan\`, \`+stresçarkı\`, \`+aşkölçer\`, \`+adamasmaca\`, \`+fbi\`, \`+155\`, \`+aduketçek\`, \`+wasted\`, \`+taksim\`, \`+tersyaz\`, \`+espri\`, \`+balıktut\`, \`+taksim\`, \`+korkut\`, \`+düello\`,\`+slot\`\n\n**Kullanıcı Komutları**\n\`+avatar\`, \`+kbilgi\`, \`+profilim\`, \`+tavsiye\`, \`+çeviri\`, \`+afk\`\n\n**Sunucu Komutları**\n\`+sbilgi\`, \`+icon\`\n\n**Moderasyon Komutları**\n\`+temizle\`, \`+duyuruayarla\`, \`+saas\`, \`+duyuruyaz\`\n\n**:loudspeaker:  BOTUMUZ BAKIMDADIR, EKSİKLİKLER GİDERİLECEKTİR.**\n`)
  .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
  .addField("**\n» Bağlantılar**", "➥ [**DAVET ET**](https://discord.com/oauth2/authorize?client_id=769498645350973450&scope=bot&permissions=805314616)  ➥ [**DESTEK**](https://discord.gg/zxuhPJg)  ➥ [**WEB SİTE**](https://top.gg/bot/769498645350973450)  ➥ [**OY VER**](https://top.gg/bot/769498645350973450)")

 message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ['help', 'h', 'y', 'yardım']
}

exports.help = {
  name: 'yardım',
  description: 'Kiwi',
  usage: 'yardım'
}