const mongo = require("@utils/mongo");
const channelPrefix = require("@utils/channelPrefix");
module.exports = async (client, address, port) => {
  console.log(`Connected: ${address}:${port}`);
  await mongo();
  channelPrefix.loadPrefixes();
};
