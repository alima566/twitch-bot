const commandPrefixSchema = require("@schemas/commandPrefixSchema");
const channelPrefix = {};

const getChannelPrefix = () => {
  return channelPrefix;
};

const updateCache = (channelName, newPrefix) => {
  channelPrefix[channelName] = newPrefix;
};

const loadPrefixes = async () => {
  const channelName = process.env.CHANNEL_NAME.toLowerCase();
  try {
    const result = await commandPrefixSchema.findOne({ _id: channelName });
    if (result) {
      channelPrefix[channelName] = result.prefix;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getChannelPrefix,
  updateCache,
  loadPrefixes,
};
