const { loadPrefixes } = require("@utils/channelPrefix");

module.exports = async (client, address, port) => {
  console.log(`Connected: ${address}:${port}`);
  loadPrefixes();
};
