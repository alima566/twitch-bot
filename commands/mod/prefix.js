const constants = require("@utils/constants");
const channelPrefix = require("@utils/channelPrefix");
const commandPrefixSchema = require("@schemas/commandPrefixSchema");
const { PREFIX } = require("@root/config.json");
module.exports = {
  commands: ["prefix", "setprefix"],
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: "<The bot's new command prefix>",
  description: "Sets the command prefix for the channel.",
  isModOnly: true,
  callback: async (client, channel, message, userstate, args) => {
    //if (userstate.mod || constants.isBroadcaster(userstate.username)) {
    const channelName = channel.slice(1);
    const prefix = args[0];

    if (!prefix) {
      client.say(
        channel,
        `/me The current channel prefix is "${
          channelPrefix.getChannelPrefix()[channel.slice(1)] || PREFIX
        }"`
      );
      return;
    }

    if (prefix === "/" || prefix === ".") {
      client.say(
        channel,
        `/me Cannot set command prefix to "${prefix}" as it will conflict with Twitch commands.`
      );
      return;
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
    } catch (err) {
      console.log(err);
    }
    client.say(channel, `/me The prefix for this bot is now "${prefix}"`);
    channelPrefix.updateCache(channelName, prefix);
    //}
  },
};
