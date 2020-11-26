require("module-alias/register");
require("dotenv").config();

const TMI = require("tmi.js");
const fs = require("fs").promises;
const path = require("path");

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

(async function registerCommands(dir = "commands") {
  let files = await fs.readdir(path.join(__dirname, dir));
  for (let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerCommands(path.join(dir, file));
    } else {
      if (file.endsWith(".js")) {
        let cmdName = file.substring(0, file.indexOf(".js")).toLowerCase();
        let cmdModule = require(path.join(__dirname, dir, file));
        client.commands.set(cmdName, cmdModule);
      }
    }
  }
})();

(async function registerEvents(dir = "features") {
  let files = await fs.readdir(path.join(__dirname, dir));
  for (let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerEvents(path.join(dir, file));
    } else {
      if (file.endsWith(".js")) {
        let eventName = file.substring(0, file.indexOf(".js")).toLowerCase();
        try {
          let eventModule = require(path.join(__dirname, dir, file));
          console.log(`${eventName} event was registered.`);
          client.on(eventName, eventModule.bind(null, client));
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
})();
