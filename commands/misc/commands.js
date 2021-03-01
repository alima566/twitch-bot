const { PREFIX } = require("@root/config.json");
const channelPrefix = require("@utils/channelPrefix");

module.exports = {
  name: "commands",
  category: "misc",
  description: "A list of all KelleeBot commands",
  cooldown: 15,
  globalCooldown: false,
  execute: async ({ client, channel }) => {
    const channelName = channel.slice(1);
    const channelInfo = client.channelInfoCache.get(channelName);
    let commands = [];
    for (const [key, value] of client.commands.entries()) {
      if (
        value.category.toLowerCase() !== "mod" &&
        value.name.toLowerCase() !== "commands"
      ) {
        commands.push(`${channelInfo.prefix}${key}`);
      }
    }
    return client.say(channel, `/me ${commands.sort().join(", ")}`);
  },
};
