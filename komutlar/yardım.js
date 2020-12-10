const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`🎧 = Yardım Menüsü = 🎧
                    
​
✅${prefix}radyo    ➠  Radyoyu Açmanızı Sağlar.
✅${prefix}çal      ➠  Belirtilen müziği oynatmayı sağlar.            
✅${prefix}durdur   ➠  Belirtilen müziği durdurmayı sağlar.           
​
>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun yardım komutlarını gösterir.',
  usage: 'yardım'
};