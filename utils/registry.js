const fs = require("fs").promises;
const path = require("path");
const { log } = require("@utils/utils");

const registerCommands = async (client, dir = "commands") => {
  let files = await fs.readdir(path.join(__dirname, dir));
  for (let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerCommands(client, path.join(dir, file));
    } else {
      if (file.endsWith(".js")) {
        let cmdName = file.substring(0, file.indexOf(".js")).toLowerCase();
        let cmdModule = require(path.join(__dirname, dir, file));
        client.commands.set(cmdName, cmdModule);
      }
    }
  }
};

const registerEvents = async (client, dir = "events") => {
  let files = await fs.readdir(path.join(__dirname, dir));
  for (let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerEvents(client, path.join(dir, file));
    } else {
      if (file.endsWith(".js")) {
        let eventName = file.substring(0, file.indexOf(".js")).toLowerCase();
        try {
          let eventModule = require(path.join(__dirname, dir, file));
          //console.log(`${eventName} event was registered.`);
          client.on(eventName, eventModule.bind(null, client));
        } catch (e) {
          log(
            "ERROR",
            "./utils/registry.js",
            `An error has occurred: ${e.message}.`
          );
        }
      }
    }
  }
};

module.exports = {
  registerCommands,
  registerEvents,
};
