const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.MessageEmbed()
    .setColor("F6DB00")
        .setDescription("**Sunucu İcon**")
        .setImage(message.guild.iconURL());

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['icon'],
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};