const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let bölge = args.slice(0).join(" ");
  if (!bölge) return message.channel.send("**Nerede Yaşıyorsunuz ? Lütfen Bölgeyi Giriniz...**");
  message.channel.send("**Yaşadığınız Bölge ``" + bölge + "`` Olarak Ayarlandı.**");
  db.set(`pbölge_${message.author.id}`, bölge);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bölgeayarla","bölgeekle"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "bölgeayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};