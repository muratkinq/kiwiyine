const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("F6DB00")
        .addField(
          ":no_entry: Yetkiniz Yok :no_entry:",
          `\`+saas aç/kapat\`**Kullanabilmek için,** \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/785358881491910666/785358965697544232/IMG_20201012_133635_063.jpg"
        )
    );

  const codeuniverse = args.join(` `);

  if (!codeuniverse)
    message.channel.send(
      new Discord.MessageEmbed()

        .setTitle(`Doğru Kullanım`)
        .setDescription(
          `**Lütfen** \`+saas aç\` **Veya** \`+saas kapat\` **Yazınız...**`
        )
        .setColor("F6DB00")
    );

  if (codeuniverse === "aç") {
    db.set(`sa-as_${message.guild.id}`, `acik`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Selamlaşma Açıldı`)
        .setDescription(
          `**Bundan Sonra** \`SA\` **Yazıldığında** \`AS\` **Diye Cevap Vereceğim...**`
        )
        .setColor("F6DB00")
    );
  } else if (codeuniverse === "kapat") {
    db.set(`sa-as_${message.guild.id}`, `kapali`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Selamlaşma Kapatıldı`)
        .setDescription(
          `**Bundan Sonra** \`SA\` **Yazıldığında** \`AS\` **Diye Cevap Vermeyeceğim...**`
        )
        .setColor("F6DB00")
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sa-as","sa-as-sistemi","saas"],
  permLevel: 0
};

exports.help = {
  name: "sa-as"
};