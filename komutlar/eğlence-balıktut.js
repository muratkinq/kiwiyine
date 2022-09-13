const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

var blue = [

      "**Sazan Tuttun** :fish:",
      "**Köpek Balığı Tuttun İyi Para Eder Sat Sat :sunglasses:**",
      "**Uskumru Tuttun** :fish:",
      "**Mezgit Tuttun, Havyarıda Var hee** :rofl:",
      "**Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde ?** :fish:",
      "**Hamsi Tuttun** :fish:",
      "**Deniz Atı Tuttun, Binmeyi Düşünmüyorsun Herhalde ?** :fish:",
      "**Ahtapot Tuttun Geri Bırak** :grimacing:",
      "**Levrek Tuttun** :fish:",
      "**Hiçbir Şey Tutamadın Maalesef** :frowning:",
      "**Alabalık Tuttun** :fish:",
      "**Maalesef Balık Oltadan Kaçtı** :frowning:",
      "**İstavrit Tuttun** :fish:"

    ];

    var blue = blue[Math.floor(Math.random() * blue.length)];
    message.edit(`${blue}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balıktut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};
