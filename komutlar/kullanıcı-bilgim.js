const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "Kiwi"

exports.run = async (bot, msg, args) => {

        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.avatarURL();
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)

        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('(DD/MM/YYYY)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
  
userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('(DD/MM/YYYY)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
 
        const uembed = new Discord.MessageEmbed()
        
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı Bilgi Sistemi')
        .addField(`Durum`, userinfo.status, false)
        .addField(`Ne Oynuyor ?`, userinfo.od1, false)
        .setColor("F6DB00")
        .addField(`Sunucuya Katılım Tarihi`, userinfo.dctarihkatilma, false)
        .addField(`Discord'a Katılım Tarihi`, userinfo.dctarih, false)
        .addField(`ID`, userinfo.id, true)
        
        .setTimestamp()
        .setFooter("Kiwi BOT © 2021")
        msg.channel.send(uembed)
    }
        

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kbilgi'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı-bilgim',
  description: 'Profil.',
  usage: 'profil'
  };