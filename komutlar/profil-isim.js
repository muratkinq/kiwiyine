const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send(" **İsminiz Nedir ? Lütfen Yazınız...**");
  message.channel.send("**İsminiz Başarıyla ``" + isim + "`` Olarak Ayarlandı.**");
  db.set(`pisim_${message.author.id}`, isim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isimayarla","isimekle"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "isimayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};