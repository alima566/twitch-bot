const constants = require("@utils/constants");
const channelPrefix = require("@utils/channelPrefix");
const commandPrefixSchema = require("@schemas/commandPrefixSchema");
module.exports = {
  commands: ["prefix", "setprefix"],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<The bot's new command prefix>",
  description: "Sets the command prefix for the channel.",
  isModOnly: true,
  callback: async (client, channel, message, userstate, args) => {
    //if (userstate.mod || constants.isBroadcaster(userstate.username)) {
    const channelName = channel.slice(1);
    const prefix = args[0];
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
    client.say(channel, `/me The prefix for this bot is now "${prefix}"`);
    channelPrefix.updateCache(channelName, prefix);
    //}
  },
};
