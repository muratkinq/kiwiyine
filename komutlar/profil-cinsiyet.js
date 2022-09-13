const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let cinsiyet = args.slice(0).join(" ");
  if (!cinsiyet)
    return message.channel.send(
      "**Cinsiyetiniz Nedir ? Lütfen Yazınız...** (**kız, erkek, yok**)"
    );
  message.channel.send("**Cinsiyetiniz Başarıyla ``" + cinsiyet + "`` Olarak Ayarlandı.**");
  db.set(`pcinsiyet_${message.author.id}`, cinsiyet);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cinsayarla"],
  permLevel: 0,
  kategori:"Profil"
};
 
exports.help = {
  name: "cinsiyetayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};