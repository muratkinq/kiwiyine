const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.MeggageEmbed()
    .setColor('F6DB00')
    .setTimestamp()
    .addField('Korkut')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Bööö Korktun Mu ?')
    .setColor('F6DB00')
    .setTimestamp()
    .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
    .setDescription('')
		.setImage(`https://78.media.tumblr.com/452063fcc1533a028f27cba85291d644/tumblr_ms8w5wWoOT1spwp48o1_500.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['korkut'],
  permLevel: 0
};

exports.help = {
  name: 'korkut',
  description: 'Bot Sizi Korkutmaya Çalışır.',
  usage: 'korkut'
};