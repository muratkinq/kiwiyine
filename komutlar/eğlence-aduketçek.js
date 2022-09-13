const Discord = require("discord.js");

exports.run = function(client, message, args) {

const CodeAmey = message.mentions.users.first();

if (!CodeAmey)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const EmbedCodeAmey = new Discord.MessageEmbed()
.setColor("F6DB00")
    .setDescription(
      `${CodeAmey} ` + `**${message.author.username}** Size aduket çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter("Kiwi BOT © 2022", client.user.avatarURL())
    .setTimestamp();

return message.channel.send(EmbedCodeAmey);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "Aduket Çekere",
  usage: "[prefix]aduket-çek <etiket>"
};
