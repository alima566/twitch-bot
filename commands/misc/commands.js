const { PREFIX } = require("@root/config.json");
const channelPrefix = require("@utils/channelPrefix");

module.exports = {
  commands: "commands",
  description: "A list of all KelleeBot commands",
  cooldown: 15,
  includeInCommands: false,
  callback: async (client, channel) => {
    const prefix = channelPrefix.getChannelPrefix()[channel.slice(1)] || PREFIX;
    const data = [];
    const { commands } = client;
    for (const [key, value] of commands.entries()) {
      if (
        typeof value.includeInCommands === "undefined" &&
        typeof value.isModOnly === "undefined"
      ) {
        data.push(`${prefix}${key}`);
      }
    }
    client.say(channel, `/me ${data.sort().join(", ")}`);
    return;
  },
};
