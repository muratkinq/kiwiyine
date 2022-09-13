const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let şehir = args.slice(0).join(" ");
  if (!şehir) return message.channel.send("**Nerede Yaşıyorsunuz ? Lütfen Şehri Giriniz...**");
  message.channel.send("**Yaşadığınız Şehir ``" + şehir + "`` Olarak Ayarlandı.**");
  db.set(`pşehir_${message.author.id}`, şehir);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["şehirayarla","şehirekle"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "şehirayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};