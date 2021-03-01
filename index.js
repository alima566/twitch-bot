require("module-alias/register");
require("dotenv").config();

const TMI = require("tmi.js");
const { registerEvents, registerCommands } = require("@utils/registry");
const { log } = require("@utils/utils");
const mongoose = require("mongoose");

(async () => {
  try {
    mongoose.connect(process.env.MONGO_PATH, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (e) {
    log(
      "ERROR",
      "./index.js",
      `Error connecting to the database: ${e.message}.`
    );
    process.exit(1);
  }

  try {
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

    client.commands = new Map();
    client.categories = new Map();
    client.channelInfoCache = new Map();
    client.channelCooldowns = new Map();
    client.globalCooldowns = new Map();

    await registerEvents(client, "../events");
    await registerCommands(client, "../commands");
  } catch (e) {
    log("ERROR", "./index.js", `An error has occurred: ${e.message}.`);
  }

  log(
    "SUCCESS",
    "./index.js",
    "Successfully loaded all commands, events, schemas, and connected to MongoDB."
  );
})();
