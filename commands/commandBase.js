const commandPrefixSchema = require("@schemas/commandPrefixSchema");
const { PREFIX } = require("@root/config.json");
const channelPrefix = {};

let recentlyRan = [];
module.exports = (client, cmdOptions) => {
  let {
    commands,
    expectedArgs = "",
    minArgs = 0,
    maxArgs = null,
    cooldown = -1,
    callback,
  } = cmdOptions;

  if (typeof commands === "string") {
    commands = [commands];
  }

  client.on("message", async (channel, userstate, message, self) => {
    if (self) return;

    const prefix = channelPrefix[channel.slice(1)] || PREFIX;
    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`;
      if (
        message.toLowerCase().startsWith(`${command} `) ||
        message.toLowerCase() === command
      ) {
        let cooldownString = `${channel.slice(1).toLowerCase()}-${
          userstate["user-id"]
        }-${commands[0]}`;
        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          console.log(`Command ${commands[0]} on cooldown.`);
          return;
        }

        const args = message.split(/[ ]+/);
        args.shift();

        if (
          args.length < minArgs ||
          (maxArgs !== null && args.length > maxArgs)
        ) {
          client.say(channel, `/me Usage: ${prefix}${alias} ${expectedArgs}`);
          return;
        }

        if (cooldown > 0) {
          recentlyRan.push(cooldownString);

          setTimeout(() => {
            recentlyRan = recentlyRan.filter((string) => {
              return string !== cooldownString;
            });
          }, 1000 * cooldown);
        }

        callback(client, channel, message, userstate, args.join(" "));
        return;
      }
    }
  });
};

module.exports.updateCache = (channel, newPrefix) => {
  channelPrefix[channel] = newPrefix;
};

module.exports.loadPrefixes = async (client) => {
  const channelName = client.opts.channels[0].slice(1);
  const result = await commandPrefixSchema.findOne({ _id: channelName });
  channelPrefix[channelName] = result.prefix;
};
