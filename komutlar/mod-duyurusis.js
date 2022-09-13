const Discord = require("discord.js");
const fla = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('⛔ Bu komutu kullanmak için `SUNUCUYU_YÖNET` yetkisine sahip olmalısınız!')

    let mesaj = args.join(" ");
if (!mesaj) return message.channel.send('**Lütfen Duyuru Metnini Giriniz...**')
  
  let kanalid = await fla.fetch(`duyuru-kanal_${message.guild.id}`)
  let kanal = client.channels.cache.get(kanalid)

  const embed = new Discord.MessageEmbed()
  .setTitle('Bir Duyuru Var')
  .setDescription(mesaj)
  .setColor('F6DB00')
  kanal.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuruyaz'],
  permLevel: 0,
};

exports.help = {
  name: 'duyuruyaz',
  description: 'Duyuru sistemi',
  usage: 'duyuru'
};