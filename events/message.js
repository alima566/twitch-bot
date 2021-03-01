const {
  processArguments,
  log,
  getCooldown,
  msToTime,
} = require("@utils/utils");
const { isBroadcaster } = require("@utils/functions");
const { getChannelPrefix } = require("@utils/channelPrefix");
const { PREFIX } = require("@root/config.json");

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

module.exports = async (client, channel, userstate, message, self) => {
  try {
    if (self) return;

    checkTwitchChat(userstate, message, channel);

    if (message === "kellee1Glare") {
      return client.say(
        channel,
        `kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare kellee1Glare`
      );
    }

    let channelInfo = {
      channelName: channel.slice(1),
      prefix: PREFIX,
      disabledCommands: [Array],
    };

    client.channelInfoCache.set(channel.slice(1), channelInfo);

    const prefix = getChannelPrefix()[channel.slice(1)] || PREFIX;
    const prefixRegex = new RegExp(`^(${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message)) return;

    const [, matchedPrefix] = message.match(prefixRegex);
    let msgArgs = message.slice(matchedPrefix.length).trim().split(/ +/);
    let cmdName = msgArgs.shift().toLowerCase();

    const command =
      client.commands.get(cmdName) ||
      (channelInfo.commandAlias
        ? client.commands.get(channelInfo.commandAlias[cmdName])
        : false);

    if (!command) return;

    if (
      !userstate.mod &&
      !isBroadcaster(userstate.username) &&
      command.isModOnly &&
      userstate.username.toLowerCase() !== "iaraaron"
    ) {
      return;
    }

    if (command.devOnly && !devs.includes(userstate.username.toLowerCase()))
      return;

    const cd = getCooldown(client, command, channel);

    let cooldowns;
    if (cd) {
      if (
        typeof command.globalCooldown === "undefined" ||
        command.globalCooldown
      ) {
        if (!client.globalCooldowns.has(command.name)) {
          client.globalCooldowns.set(command.name, new Map());
        }
        cooldowns = client.globalCooldowns;
      } else {
        if (!client.channelCooldowns.has(channel.slice(1))) {
          client.channelCooldowns.set(channel.slice(1), new Map());
        }
        cooldowns = client.channelCooldowns.get(channel.slice(1));
        if (!cooldowns.has(command.name)) {
          cooldowns.set(command.name, new Map());
        }
      }

      const now = Date.now();
      const timestamps = cooldowns.get(command.name);
      const cooldownAmount = cd * 1000;
      if (timestamps.has(`${userstate["user-id"]}-${channel.slice(1)}`)) {
        const expirationTime =
          timestamps.get(`${userstate["user-id"]}-${channel.slice(1)}`) +
          cooldownAmount;
        if (now < expirationTime)
          return console.log(
            `Command on cooldown. Cooldown expires in ${msToTime(
              expirationTime - now
            )}`
          );
      }

      timestamps.set(`${userstate["user-id"]}-${channel.slice(1)}`, now);
      setTimeout(
        () => timestamps.delete(`${userstate["user-id"]}-${channel.slice(1)}`),
        cooldownAmount
      );
    }

    let flags;
    if (command.args) {
      flags = processArguments(message, msgArgs, command.args);
    }
    if (flags && flags.invalid) {
      if (flags.prompt) {
        return client.say(channel, `/me ${flags.prompt}`);
      }
      return;
    }

    command.execute({
      client: client,
      channel: channel,
      userstate: userstate,
      message: message,
      args: msgArgs,
      text: msgArgs.join(" "),
      flags: flags,
    });
  } catch (e) {
    log("ERROR", "./events/message.js", e.message);
  }
};

const checkTwitchChat = (userstate, message, channel) => {
  if (userstate.mod || isBroadcaster(userstate.username, channel)) return;

  if (message.length > 250) {
    client
      .timeout(channel, userstate.username, 1, "Long message")
      .then((data) => {
        client.say(
          channel,
          `/me ${userstate.username}, the mods here don't like reading long messages. Please try to keep it short and sweet.`
        );
      })
      .catch((e) => {
        log("ERROR", "./events/message.js", e.message);
      });
  }

  if (
    message.includes("bigfollows .com") ||
    message.includes("bigfollows.com") ||
    message.includes(
      "Wanna b̔ecome̤ famoͅus̈́?̿ Bu͗y f̭ollow̮ers, primes and viewers on ̫" //https://clck.ru/R9gQV ͉(bigfollows .com)̰"
    )
  ) {
    client
      .ban(channel, userstate.username)
      .then((data) => {
        client.say(channel, `/me No, I don't wanna become famous. Good bye!`);
      })
      .catch((e) => {
        log("ERROR", "./events/message.js", e.message);
      });
  } else if (
    message ===
    "Hey. I want to offer you a boost on twitch, a stable number of viewers, there are chat bots. I will offer a price lower than any competitor. Auto-start when stream became online.Pay only for the time when the stream is online.Pay by the hour! I'll provide a free test.The client has access to the panel to launch, and can control the process himself!For tech problems, a full refund. Telegram @Twitch_viewers Discord Twitch#3227"
  ) {
    client
      .ban(channel, userstate.username)
      .then((data) => {
        client.say(
          channel,
          `/me No, I don't want a boost on Twitch. Get outta here!`
        );
      })
      .catch((e) => {
        log("ERROR", "./events/message.js", e.message);
      });
  }
};
