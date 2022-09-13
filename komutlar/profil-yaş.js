const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      "**Yaşınız Nedir ? Lütfen Yazınız...**"
    );
  message.channel.send(
    "**Yaşınız ``" + yas + "`` Olarak Ayarlandı.**"
  );
  db.set(`pyas_${message.author.id}`, yas);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaşayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
