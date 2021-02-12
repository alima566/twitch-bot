const { PREFIX } = require("@root/config.json");
const channelPrefix = require("@utils/channelPrefix");
const constants = require("@utils/constants");

let recentlyRan = [];
module.exports = (client, channel, userstate, message, self) => {
  if (self) return;

  checkTwitchChat(client, userstate, message, channel);

  const prefix = channelPrefix.getChannelPrefix()[channel.slice(1)] || PREFIX;
  //if (!message.startsWith(prefix)) return;

  const cmdArgs = message.substring(message.indexOf(prefix) + 1).split(/[ ]+/);
  const cmdName = cmdArgs.shift().toLowerCase();

  if (client.commands.get(cmdName)) {
    let {
      commands,
      expectedArgs = "",
      minArgs = 0,
      maxArgs = null,
      cooldown = -1,
      isModOnly = false,
      callback,
    } = client.commands.get(cmdName);

    if (
      !userstate.mod &&
      !constants.isBroadcaster(userstate.username) &&
      isModOnly
    )
      return;

    if (typeof commands === "string") {
      commands = [commands];
    }

    for (const alias of commands) {
      let command =
        alias.toLowerCase() === "kellee1glare" || alias.toLowerCase() === "uwu"
          ? `${alias.toLowerCase()}`
          : `${prefix}${alias.toLowerCase()}`;

      if (
        message.toLowerCase().startsWith(`${command} `) ||
        message.toLowerCase() === command ||
        message.toLowerCase().includes(command)
      ) {
        let cooldownString = `${channel.slice(1)}-${userstate["user-id"]}-${
          commands[0]
        }`;
        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          console.log(
            `Command ${command} on cooldown for ${userstate.username}`
          );
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
  }
};

const checkTwitchChat = (client, userstate, message, channel) => {
  console.log(message);
  if (userstate.mod || constants.isBroadcaster(userstate.username)) return;

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
        console.log(e.message);
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
      .catch((err) => {
        console.log(err);
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
      .catch((err) => {
        console.log(err);
      });
  }
};
