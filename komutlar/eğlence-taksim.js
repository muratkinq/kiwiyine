const Discord = require("discord.js");

exports.run = (client, message) => {

const suprememm = new Discord.MessageEmbed()

      .setAuthor("Taksim Dayı")//
      .setColor("F6DB00")
      .setTimestamp()
      .setDescription("")
      .setFooter("Kiwi BOT © 2021", client.user.avatarURL())
      .setURL("https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif")
      .setImage(`https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif`);

return message.channel.send(suprememm);

};
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["dayı", "taksim"],
  permLevel: 0
};
exports.help = {
  name: "taksimdayı",
  description: "taksim dayı resmi atar",
  usage: "taksimdayı"
};
