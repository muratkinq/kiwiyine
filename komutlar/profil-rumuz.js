const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let soyisim = args.slice(0).join(" ");
  if (!soyisim) return message.channel.send("**Rumuzun Nedir ? Lütfen Yaz...** (**Rumuz Olarak Kullanıcı Adını Yazabilirsin**)");
  message.channel.send("**Rumuz ``" + soyisim + "`` Olarak Ayarlandı.**");
  db.set(`psoyisim_${message.author.id}`, soyisim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "rumuzayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};