const constants = require("@utils/constants");
const aaronBanResponses = [
  "iaraaron is awesome and cannot be banned. Try someone else, <username>.",
  "Nice try, he is unbannable. Kappa",
  "<username> just got banned for trying to ban iaraaron. Get rekt son.",
];
module.exports = {
  commands: "ban",
  expectedArgs: "<The person to ban>",
  minArgs: 1,
  description: "Bans a user",
  cooldown: 15,
  callback: (client, channel, message, userstate, args) => {
    const user = args.startsWith("@") ? args.replace("@", "") : args;
    if (user.toLowerCase() === process.env.BOT_USERNAME.toLowerCase()) {
      client.say(channel, `/me Nice try, you can't ban me. Kappa`);
      return;
    } else if (
      user.toLowerCase() === "iaraaron" ||
      constants.replaceChars(user) === "aaron"
    ) {
      let index = constants.getRandomElement(aaronBanResponses);
      let response = aaronBanResponses[index].replace(
        "<username>",
        userstate.username
      );
      client.say(channel, `/me ${response}`);
      return;
    } else if (user.toLowerCase() === process.env.CHANNEL_NAME.toLowerCase()) {
      client.say(channel, `/me Nice try, you can't ban the streamer. Kappa`);
      return;
    } else if (user.toLowerCase().includes(userstate.username.toLowerCase())) {
      client.say(
        channel,
        `/me ${user} just banned themselves from the channel! Get rekt son.`
      );
      return;
    } else {
      client.say(channel, `/me ${user} has been banned, get outta here!`);
      return;
    }
  },
};
