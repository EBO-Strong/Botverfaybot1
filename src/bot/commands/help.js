const { MessageEmbed } = require("discord.js");
const quickdb = require("quick.db");

module.exports = {
  name: "help",
  cooldown: 7,
  aliases: ["مساعده"],
  run: async (client, message) => {
    var prefix = quickdb.fetch(`Prefix_${message.guild.id}`);
    if (prefix == null)
      quickdb.set(
        `Prefix_${message.guild.id}`,
        require("../../config/bot").prefix
      );
    message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "General Commands",
          ""
        )
        .setThumbnail(client.user.avatarURL({ dynaimc: true }))
        .setColor(0x2f3136)
        .setFooter(
          client.user.username,
          client.user.avatarURL({ dynaimc: true })
        ).setDescription(`
**Info**
>  \`${prefix}help\`
>  \`${prefix}ping\`

**Azkar**
>  \`${prefix}set-azkar-channel\`
>  \`${prefix}set-azkar-embed\`
>  \`${prefix}set-azkar-toggle\`
>  \`${prefix}morning\`
>  \`${prefix}evening\`
>  \`${prefix}mos7f\`

**Quran**
>  \`${prefix}set-quran-channel\`
>  \`${prefix}set-quran-toggle\`
>  \`${prefix}quran\`

**Perfix bot in the server**: \`${prefix}\`

**Links:**
[ InviteBot ](https://discord.com/api/oauth2/authorize?client_id=760841024019890257&permissions=8&scope=bot) - [ ServerSupport ](https://discord.gg/nu3p4cMcwb)
`)

    );
  }
};
