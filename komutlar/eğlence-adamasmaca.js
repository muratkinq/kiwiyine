const { stripIndents } = require('common-tags');
let oyndurum = new Set();

module.exports.run = async (bot, message, args) => {

  let kelime= [
  "elma",
  "armut",
  "mahmut",
  "eşya",
  "sunucu",
  "ismail",
  "eşek",
  "Astral",
  "siber",
  "kral",
  "biziz",
  "yılbaşı",
  "köpek",
  "erdi",
  "batuhan",
  "kaan",
  "tuncer",
  "barış",
  "salata",
  "oğuzhan",
  "biber",
  "camii",
  "maymun",
  "arda",
  "aslan",
  "ali",
  "bali",
  "taha",
  "murat",
  "ahmet",
  "mustafa",
  "bünyamin",
  "kadir",
  "hakan",
  "nissan",
    
    
 
]
 
        if (oyndurum.has(message.channel.id)) return message.reply('Kanal başına sadece bir adam asmaca oyunu meydana gelebilir.');

        try {
            const Cevap = kelime[Math.floor(Math.random() * kelime.length)].toLowerCase();
            let point = 0;
            let displayText = null;
            let tahmin = false;
            const confirmation = [];
            const yanlış = [];
            const display = new Array(Cevap.length).fill('_');
            while (Cevap.length !== confirmation.length && point < 6) {
                await message.channel.send(stripIndents`
                    ${displayText === null ? '**Adam Asmaca**!' : displayText ? '**Çok iyisin**' : '**Yanlış Harf**'}
                         **Kelime:**    \`${display.join(' ')}\`
                    **Yanlış Harfler:** ${yanlış.join(', ') || 'Yok'}
                    \`\`\`
                    _________
                    |    |
                    |    ${point > 0 ? '' : ''}
                    |   ${point > 2 ? '┌' : ' '}${point > 1 ? '()' : ''}${point > 3 ? '┐' : ''}
                    |    ${point > 4 ? '/' : ''} ${point > 5 ? '\\' : ''}
                    |
                    \`\`\`
                `);
                const filter = res => {
                    const choice = res.content.toLowerCase();
                    return res.author.id === message.author.id && !confirmation.includes(choice) && !yanlış.includes(choice);
                };
                const guess = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 300000
                });
                if (!guess.size) {
                    await message.channel.send('Zamanın Doldu');
                    break;
                }
                const choice = guess.first().content.toLowerCase();
                if (choice === 'end') break;
                if (choice.length > 1 && choice === Cevap) {
                    tahmin = true;
                    break;
                } else if (Cevap.includes(choice)) {
                    displayText = true;
                    for (let i = 0; i < Cevap.length; i++) {
                        if (Cevap.charAt(i) !== choice) continue;
                        confirmation.push(Cevap.charAt(i));
                        display[i] = Cevap.charAt(i);
                    }
                } else {
                    displayText = false;
                    if (choice.length === 1) yanlış.push(choice);
                    point++;
                }
            }
            oyndurum.delete(message.channel.id);
            if (Cevap.length === confirmation.length || tahmin) return message.channel.send(`**Tebrikler kelimeyi buldun! **${Cevap}!`);
            return message.channel.send(`Maalesef Bilemedin Kelime: **${Cevap}**`);
        } catch (err) {
            oyndurum.delete(message.channel.id);
            return message.reply(`Olamaz! Bir Hata Verdi: \`${err.message}\``);
        }
    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adamasmaca'],
  permlevel: 0
};

exports.help = {
  name: 'adamasmaca',
  description: 'Adam asmaca oynarsınız.',
  usage: 'adamasmaca'
};
