require("module-alias/register");
require("dotenv").config();

const TMI = require("tmi.js");
const mongo = require("@utils/mongo");
const loadCommands = require("@commands/loadCommands");
const commandBase = require("@commands/commandBase");
const loadFeatures = require("@features/loadFeatures");

const opts = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
};

const client = new TMI.client(opts);
client.connect();

client.on("connected", async (address, port) => {
  console.log(`Connected: ${address}:${port}`);
  await mongo();
  loadFeatures(client);
  commandBase.loadPrefixes(client);
  loadCommands(client);
});
