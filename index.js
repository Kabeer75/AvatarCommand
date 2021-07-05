if (message.content.startsWith("*avatar")) {
 let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let embed = new Discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar!`)
.setColor("BLURPLE")
.setTimestamp()
.setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
message.channel.send(embed);
}
//Paste this code under a new command and you can also customise your prefix.
