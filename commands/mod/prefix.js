const { getChannelPrefix, updateCache } = require("@utils/channelPrefix");
const commandPrefixSchema = require("@schemas/commandPrefixSchema");
const { PREFIX } = require("@root/config.json");
const { log } = require("@utils/utils");

module.exports = {
  name: "prefix",
  aliases: ["setprefix"],
  category: "Mod",
  description: "Sets the command prefix for the channel.",
  isModOnly: true,
  execute: async ({ client, channel, args }) => {
    const channelName = channel.slice(1);
    const prefix = args[0];

    if (!prefix) {
      return client.say(
        channel,
        `/me The current channel prefix is "${
          getChannelPrefix()[channel.slice(1)] || PREFIX
        }"`
      );
    }

    if (prefix === "/" || prefix === ".") {
      return client.say(
        channel,
        `/me Cannot set command prefix to "${prefix}" as it will conflict with Twitch commands.`
      );
    }

    try {
      await commandPrefixSchema.findOneAndUpdate(
        {
          _id: channelName,
        },
        {
          _id: channelName,
          prefix,
        },
        {
          upsert: true,
        }
      );

      updateCache(channelName, prefix);
      return client.say(
        channel,
        `/me The prefix for this bot is now "${prefix}"`
      );
    } catch (e) {
      log("ERROR", "./commands/mod/prefix.js", e.message);
      return client.say(
        channel,
        `/me An error occurred while trying to set the prefix. Please try again.`
      );
    }
  },
};
