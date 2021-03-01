const { log } = require("@utils/utils");

module.exports = {
  name: "botcolor",
  aliases: ["color"],
  category: "Mod",
  description: "Changes the bot color.",
  isModOnly: true,
  execute: ({ client, channel, args }) => {
    const color = args;
    client
      .color(process.env.BOT_USERNAME, color)
      .then((data) => {
        return client.say(
          channel,
          `/me My color has been changed to ${color}.`
        );
      })
      .catch((e) => {
        log("ERROR", "./commands/mod/botcolor.js", e.message);
        return client.say(
          channel,
          `/me Color must be one of the following: Blue, BlueViolet, CadetBlue, Chocolate, Coral, DodgerBlue, Firebrick, GoldenRod, Green, HotPink, OrangeRed, Red, SeaGreen, SpringGreen, YellowGreen.`
        );
      });
  },
};
