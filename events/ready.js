const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("online");
  var oyun = [
    "+yardım🥝+kbilgi🥝+info",
    "183 Server, 657,325 User",
    "+yardım🥝+kbilgi🥝+info",
    "183 Server, 657,325 User",
    "+yardım🥝+kbilgi🥝+info",
    "183 Server, 657,325 User",
    "+yardım🥝+kbilgi🥝+info",
    "183 Server, 657,325 User",
    "+yardım🥝+kbilgi🥝+info",
    "183 Server, 657,325 User",
    "+yardım🥝+kbilgi🥝+info",
    "183 Server, 657,325 User",
  ];
  
    setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 0) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);

};