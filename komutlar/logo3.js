const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** `)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?script=uprise-logo&_loc=generate&imageoutput=true&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle('Logonuz Hazırlandı')
  .setColor("F6DB00")
  .setImage(linqo)
  .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['logo3'],
    permLevel: 0
}

exports.help = {
    name: 'logo3',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'alev <yazı>'
}