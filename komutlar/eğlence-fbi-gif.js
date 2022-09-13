const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("F6DB00")
  .setTimestamp()
  .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
  .setTitle("FBİ Geliyor")
  .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
  message.channel.send(fbi)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['fbi'],
  permLevel: 0 
};

exports.help = {
  name: "fbi",
  description: "FBi gif atar",
  usage:"!fbi"
}