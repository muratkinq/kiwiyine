const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg) => {
   msg.channel.send("**Yapımcım:** `60FPS#4976`")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yapımcım"],
  kategori: "YETKİLİ KOMUTLARI",
  permLevel: 0
};
exports.help = {
  name: "yapımcım",
  description: "Yapımcımı Gösterir.",
  usage: "yapımcım"
};
