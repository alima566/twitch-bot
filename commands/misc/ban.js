const { replaceChars } = require("@utils/functions");

const aaronBanResponses = [
  "iaraaron is awesome and cannot be banned. Try someone else, <username>.",
  "Nice try, he is unbannable. Kappa",
  "<username> just got banned for trying to ban iaraaron. Get rekt son.",
];

module.exports = {
  name: "ban",
  category: "Misc",
  description: "Bans a user",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel, userstate, args }) => {
    if (args.length === 0) {
      return client.say(
        channel,
        `/me ${user} just banned themselves from the channel! Get rekt son.`
      );
    }

    let user = args[0].startsWith("@")
      ? args[0].replace("@", "").toLowerCase()
      : args[0].toLowerCase();

    if (user === process.env.BOT_USERNAME.toLowerCase()) {
      return client.say(channel, `/me Nice try, but you can't ban me. Kappa`);
    }

    if (user === "iaraaron" || replaceChars(user) === "aaron") {
      const index = getRandomElement(aaronBanResponses);
      const response = aaronBanResponses[index].replace(
        "<username>",
        userstate["display-name"]
      );
      return client.say(channel, `/me ${response}`);
    }

    if (user === process.env.CHANNEL_NAME.toLowerCase()) {
      return client.say(
        channel,
        `/me Nice try, but you can't ban the streamer. Kappa`
      );
    }

    if (user.includes(userstate.username.toLowerCase())) {
      return client.say(
        channel,
        `/me ${user} just banned themselves from the channel! Get rekt son.`
      );
    }

    return client.say(
      channel,
      `/me ${user} has just been banned, get outta here!`
    );
  },
};
