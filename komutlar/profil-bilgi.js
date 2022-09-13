const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların Profili Olmaz.");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "Ayarlanmamış";
  else isimYazi = `• ${isim}`;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = "Ayarlanmamış";
  else soyisimYazi = `• ${soyisim}`;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = "Ayarlanmamış";
  if (cinsiyet == "kız") csYazi = "• Kız";
  if (cinsiyet == "erkek") csYazi = "• Erkek";
  if (cinsiyet == "yok") csYazi = "• Belirtmek istemiyor";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = "Ayarlanmamış";
  else yasYazi = `• ${yas}`;
  
  let şehir = await db.fetch(`pşehir_${user.id}`);
  let şYazi;
  if (şehir == null) şYazi = "Ayarlanmamış";
  else şYazi = `• ${şehir}`;
 
  let bölge = await db.fetch(`pbölge_${user.id}`);
  let bYazi;
  if (bölge == null) bYazi = "Ayarlanmamış";
  else bYazi = `• ${bölge}`;
   
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`${user.username} Kullanıcısının Profili`)
    .setThumbnail(user.avatarURL())
    .setColor('F6DB00')
    .addField("» İsim ", isimYazi, true)
    .addField("» Rumuz ", soyisimYazi, true)
    .addField("» Yaş ", yasYazi, true)
    .addField("» Cinsiyet ", csYazi, true)
    .addField("» Şehir ", şYazi, true)
    .addField("» Bölge ", bYazi, true)
    .setFooter("Kiwi BOT © 2021", client.user.avatarURL());
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profil"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};