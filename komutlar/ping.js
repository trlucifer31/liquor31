const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
     let botping = new Date() - message.createdAt;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(' Bot Ping : ', Math.floor(botping) + 'ms')
        .setFooter(`Maximus Music`);

  return message.channel.send(pingembed);
        

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};