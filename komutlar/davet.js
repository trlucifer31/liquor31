const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} DAVET SİSTEMİ `)
        .setDescription(`📥**Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=662899125418721290&scope=bot&permissions=805314622) \n🔶**Destek Sunucusu İçin** [TIKLA](https://discord.gg/Q8Z7tuS)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};