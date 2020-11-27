const { PREFIX } = require("@root/config.json");
const channelPrefix = require("@utils/channelPrefix");
const constants = require("@utils/constants");

let recentlyRan = [];
module.exports = (client, channel, userstate, message, self) => {
  if (self) return;

  checkTwitchChat(userstate, message, channel);

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
        alias.toLowerCase() === "kellee1glare" ||
        alias.toLowerCase() === "gg" ||
        alias.toLowerCase() === "uwu"
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

const checkTwitchChat = (userstate, message, channel) => {
  if (userstate.mod || constants.isBroadcaster(userstate.username)) return;
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

    // client
    //   .deletemessage(channel, userstate.id)
    //   .then((data) => {
    //     client.say(channel, `/me No, I don't wanna become famous. Good bye!`);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
};
