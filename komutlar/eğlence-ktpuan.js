const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
const balance = await db.fetch(`ktbalance_${message.author.id}_d0ru`)
    const embed = new Discord.MessageEmbed()
        .setColor('F6DB00')
        .setTimestamp()
        .setAuthor(`${message.author.username} ;`, message.author.avatarURL())
        .setDescription(`**Mevcut Puan :**    \`${balance||0}\` \n`)
        .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
    return message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kopuan'],
  permLevel: 0,
};

exports.help = {
  name: 'kt-puan',
  description: 'd0ru ya aittir aksini iddia edene hakkım haramdır.',
  usage: 'kt-puan'
};
   