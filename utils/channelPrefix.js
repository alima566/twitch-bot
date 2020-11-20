const mongo = require("@utils/mongo");
const commandPrefixSchema = require("@schemas/commandPrefixSchema");
const channelPrefix = {};

module.exports.getChannelPrefix = () => {
  return channelPrefix;
};
module.exports.updateCache = (channelName, newPrefix) => {
  channelPrefix[channelName] = newPrefix;
};

module.exports.loadPrefixes = async (client) => {
  const channelName = process.env.CHANNEL_NAME.toLowerCase();
  const result = await commandPrefixSchema.findOne({ _id: channelName });
  channelPrefix[channelName] = result.prefix;
};
