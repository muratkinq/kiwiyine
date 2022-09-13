//MuratKinq tarafından kodlanmıştır.
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
//MuratKinq tarafından kodlanmıştır.
let tavsiye = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **Tavsiyeni Yazar Mısın ?**`)
  .setColor("F6DB00")
  .setFooter("Kiwi BOT © 2022")
  if(!tavsiye) return message.channel.send(sebep2);
let user = message.author.tag;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("446363968685080579")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Tavsiye Bildiri")
.setThumbnail(bot.user.avatarURL())
.addField("Tavsiye", tavsiye)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.setColor("GOLD")
   message.react("💛");

//MuratKinq tarafından kodlanmıştır.
message.channel.send("<a:kiwi:785000780582223872> ** Tavsiyeniz Başarıyla Sahibime İletildi. Teşekkür Ederiz...  :kiwi:**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))
//MuratKinq tarafından kodlanmıştır.
}
//MuratKinq tarafından kodlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tavsiye'],
  permLevel: 0  
};
//MuratKinq tarafından kodlanmıştır.
exports.help = {
  name: 'tavsiye',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
//MuratKinq tarafından kodlanmıştır.