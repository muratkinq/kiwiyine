const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("**Kiwi Bot Davet**")
.setTimestamp()
.addField("**\n» Bağlantılar**", "➥ [**DAVET ET**](https://discord.com/oauth2/authorize?client_id=769498645350973450&scope=bot&permissions=805314616)  ➥ [**DESTEK**](https://discord.gg/zxuhPJg)  ➥ [**WEB SİTE**](https://top.gg/bot/769498645350973450)  ➥ [**OY VER**](https://top.gg/bot/769498645350973450)")
.setColor("F6DB00")
.setFooter("Kiwi BOT © 2022", client.user.avatarURL())

return message.channel.send(kinda)
}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["davet"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};