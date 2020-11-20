const commandPrefixSchema = require("@schemas/commandPrefixSchema");
const channelPrefix = {};

module.exports.getChannelPrefix = () => {
  return channelPrefix;
};
module.exports.updateCache = (channelName, newPrefix) => {
  channelPrefix[channelName] = newPrefix;
};

module.exports.loadPrefixes = async () => {
  const channelName = process.env.CHANNEL_NAME.toLowerCase();
  const result = await commandPrefixSchema.findOne({ _id: channelName });
  if (result) {
    channelPrefix[channelName] = result.prefix;
  }
};
